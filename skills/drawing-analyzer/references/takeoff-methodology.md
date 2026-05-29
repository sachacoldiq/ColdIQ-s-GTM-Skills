# Quantity takeoff methodology

The goal is accuracy with an explicit confidence statement, not a confident guess.
General-purpose models give approximate counts; this method forces a cross-check.

## Counts (footings, columns, fixtures, doors...)

1. Find the relevant **schedule** sheet for the authoritative type list (e.g. F1..F8).
2. Count occurrences on the relevant **layout** sheet(s), per mark.
3. Reconcile: total counted vs any quantity stated in the schedule or notes.
4. Report per-mark counts AND the total, with confidence and source sheets.
   If layout count and schedule disagree, say so rather than picking one silently.

## Areas (slabs, footprints, hardstand)

Two independent methods, then compare:

- **Vector / polygon (precise).** Run `extract_vectors.py` on the sheet that draws the
  slab outline. Identify the polygon that matches the slab (use the bbox to sanity-check
  it sits where the slab is). Convert with the drawing `--scale`.
- **Dimensional (order-of-magnitude).** Multiply the stated overall dimensions from the
  layout. Use this purely as a sanity check on the polygon result.

If the two agree within a few percent, confidence is high. If they diverge, report both
and explain the likely reason (e.g. the polygon included external aprons/aprons excluded).

## Lengths (pipe runs, walls, kerb)

Use `extract_vectors.py` total line length as a rough figure, but linetypes mean different
services. Filter by the relevant layer/colour where possible, and confirm against the
symbol legend before quoting a number.

## Working out `--scale`

`--scale` is real-world units per PDF point (1 pt = 1/72 inch).
- If you know a real dimension on the sheet (e.g. a 6000 mm grid bay), measure that span in
  points from `extract_vectors.py` geometry and set scale = 6000 / span_pt.
- Or, from the plot scale: for 1:100 in mm, scale = (25.4 / 72) * 100 = 35.28 mm/pt,
  i.e. 0.03528 m/pt.

Always state which method gave the scale, since the whole takeoff depends on it.

## Confidence wording

- **High**: two methods agree, scale verified against a known dimension, clear source.
- **Medium**: single method, scale inferred, or minor ambiguity in the outline.
- **Low**: raster-only reading, unverified scale, or conflicting sheets. Flag for manual check.
