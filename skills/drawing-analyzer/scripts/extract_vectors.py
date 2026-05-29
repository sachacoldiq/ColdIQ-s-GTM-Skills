#!/usr/bin/env python3
"""Extract vector geometry from a single drawing sheet for quantity takeoffs.
Mechanical only -- it reports geometry; YOU decide which polygon is the slab/footing.

Usage:
    python3 extract_vectors.py <sheet.pdf> [--page 0] [--scale UNITS_PER_POINT] [--top 10]

--scale: real-world units per PDF point. A PDF point is 1/72 inch. If a drawing is
         plotted 1:100 in mm, then 1 pt = (25.4/72)*100 mm = 35.28 mm, so areas in
         m^2 = area_pt2 * (0.03528^2). Pass --scale 0.03528 to get metres.
         Omit it to get raw point values and reason about scale yourself.

Output (JSON): largest closed polygons by area, plus total line length and counts.
"""
import argparse
import json
import sys

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit("PyMuPDF is required. Run: pip install -r requirements.txt")


def shoelace(points):
    """Signed area of a polygon given [(x,y), ...] in PDF points."""
    n = len(points)
    if n < 3:
        return 0.0
    s = 0.0
    for i in range(n):
        x1, y1 = points[i]
        x2, y2 = points[(i + 1) % n]
        s += x1 * y2 - x2 * y1
    return abs(s) / 2.0


def polygon_from_path(path):
    """Best-effort ordered point list from a PyMuPDF drawing path's items."""
    pts = []
    for item in path["items"]:
        op = item[0]
        if op == "l":            # line: ('l', p1, p2)
            pts.append((item[1].x, item[1].y))
            pts.append((item[2].x, item[2].y))
        elif op == "re":         # rectangle: ('re', Rect)
            r = item[1]
            pts.extend([(r.x0, r.y0), (r.x1, r.y0), (r.x1, r.y1), (r.x0, r.y1)])
        elif op == "c":          # bezier: sample endpoints
            pts.append((item[1].x, item[1].y))
            pts.append((item[-1].x, item[-1].y))
    # dedupe consecutive duplicates
    out = []
    for p in pts:
        if not out or (abs(out[-1][0] - p[0]) > 1e-6 or abs(out[-1][1] - p[1]) > 1e-6):
            out.append(p)
    return out


def line_length(points):
    total = 0.0
    for i in range(len(points) - 1):
        dx = points[i + 1][0] - points[i][0]
        dy = points[i + 1][1] - points[i][1]
        total += (dx * dx + dy * dy) ** 0.5
    return total


def main():
    ap = argparse.ArgumentParser(description="Extract vector geometry for takeoffs.")
    ap.add_argument("pdf")
    ap.add_argument("--page", type=int, default=0)
    ap.add_argument("--scale", type=float, default=None,
                    help="real-world units per PDF point (see header)")
    ap.add_argument("--top", type=int, default=10, help="report N largest polygons")
    args = ap.parse_args()

    doc = fitz.open(args.pdf)
    page = doc.load_page(args.page)
    drawings = page.get_drawings()

    polys = []
    total_line = 0.0
    rect_count = 0
    for path in drawings:
        pts = polygon_from_path(path)
        total_line += line_length(pts)
        for item in path["items"]:
            if item[0] == "re":
                rect_count += 1
        if len(pts) >= 3:
            area_pt2 = shoelace(pts)
            if area_pt2 > 0:
                bbox = path.get("rect")
                polys.append({
                    "area_pt2": round(area_pt2, 2),
                    "vertices": len(pts),
                    "bbox": [round(bbox.x0, 1), round(bbox.y0, 1),
                             round(bbox.x1, 1), round(bbox.y1, 1)] if bbox else None,
                })

    polys.sort(key=lambda p: p["area_pt2"], reverse=True)
    top = polys[:args.top]

    if args.scale is not None:
        f = args.scale * args.scale
        for p in top:
            p["area_scaled"] = round(p["area_pt2"] * f, 3)
        scaled_total_line = round(total_line * args.scale, 3)
    else:
        scaled_total_line = None

    result = {
        "pdf": args.pdf,
        "page": args.page,
        "scale_units_per_point": args.scale,
        "path_count": len(drawings),
        "rectangle_count": rect_count,
        "total_line_length_pt": round(total_line, 1),
        "total_line_length_scaled": scaled_total_line,
        "largest_polygons": top,
        "note": "area_pt2 is in PDF points^2. Apply the drawing scale (--scale) to "
                "convert. Cross-check the largest polygon against stated overall "
                "dimensions before trusting it as the slab/footprint.",
    }
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
