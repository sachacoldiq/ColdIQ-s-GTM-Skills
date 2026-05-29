#!/usr/bin/env python3
"""Split a merged construction-drawing PDF into per-sheet PDFs, high-res images,
and extracted text. Mechanical work only -- no classification (the model does that).

Usage:
    python3 split_pdf.py <merged.pdf> <output_dir> [--dpi 200] [--max-edge 3000]

Outputs under <output_dir>/:
    sheets/sheet_NNN.pdf   one PDF per page
    images/sheet_NNN.png   rendered raster (capped so the model can read it)
    text/sheet_NNN.txt     extracted text layer
    manifest.json          list of sheets with page index, size, text length
"""
import argparse
import json
import os
import sys

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit("PyMuPDF is required. Run: pip install -r requirements.txt")


def render_zoom(page, dpi, max_edge):
    """Pick a zoom factor that targets `dpi` but caps the longest edge at max_edge px."""
    zoom = dpi / 72.0
    rect = page.rect
    long_pt = max(rect.width, rect.height)
    long_px = long_pt * zoom
    if long_px > max_edge:
        zoom = max_edge / long_pt
    return zoom


def main():
    ap = argparse.ArgumentParser(description="Split + render + extract a construction PDF.")
    ap.add_argument("pdf", help="path to merged construction PDF")
    ap.add_argument("out", help="output directory")
    ap.add_argument("--dpi", type=int, default=200, help="target render DPI (default 200)")
    ap.add_argument("--max-edge", type=int, default=3000,
                    help="cap longest image edge in px (default 3000)")
    args = ap.parse_args()

    if not os.path.isfile(args.pdf):
        sys.exit("Not found: %s" % args.pdf)

    sheets_dir = os.path.join(args.out, "sheets")
    images_dir = os.path.join(args.out, "images")
    text_dir = os.path.join(args.out, "text")
    for d in (sheets_dir, images_dir, text_dir):
        os.makedirs(d, exist_ok=True)

    src = fitz.open(args.pdf)
    manifest = {"source": os.path.abspath(args.pdf), "sheet_count": src.page_count, "sheets": []}

    for i in range(src.page_count):
        n = "%03d" % (i + 1)
        page = src.load_page(i)

        # 1. individual PDF
        sheet_pdf = os.path.join(sheets_dir, "sheet_%s.pdf" % n)
        one = fitz.open()
        one.insert_pdf(src, from_page=i, to_page=i)
        one.save(sheet_pdf)
        one.close()

        # 2. raster image
        zoom = render_zoom(page, args.dpi, args.max_edge)
        pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
        img_path = os.path.join(images_dir, "sheet_%s.png" % n)
        pix.save(img_path)

        # 3. text layer
        text = page.get_text("text")
        txt_path = os.path.join(text_dir, "sheet_%s.txt" % n)
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(text)

        manifest["sheets"].append({
            "sheet": n,
            "page_index": i,
            "pdf": os.path.relpath(sheet_pdf, args.out),
            "image": os.path.relpath(img_path, args.out),
            "text": os.path.relpath(txt_path, args.out),
            "image_px": [pix.width, pix.height],
            "text_chars": len(text),
        })
        print("sheet_%s  %dx%dpx  %d chars" % (n, pix.width, pix.height, len(text)))

    with open(os.path.join(args.out, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    src.close()
    print("\nDone. %d sheets -> %s" % (manifest["sheet_count"], args.out))
    print("Next: classify sheets and write the indexes (see SKILL.md, Mode A steps 2-5).")


if __name__ == "__main__":
    main()
