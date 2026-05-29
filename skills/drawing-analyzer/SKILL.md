---
name: drawing-analyzer
description: Pre-process and analyze construction drawing PDFs (architectural, structural, MEP, civil) so Claude can answer questions and run quantity takeoffs accurately and cheaply. Use when the user works with construction drawings, building plans, blueprints, drawing sets, tender documents, quantity takeoffs, footing/slab/area counts, or uploads a large multi-sheet construction PDF that Claude struggles to read. Do NOT use for generic image reading or non-construction PDFs.
---

# Drawing Analyzer

Construction drawings are the worst possible input for an AI. They are large PDFs full of symbols and cross references, where a single-dashed line (cold water) and a double-dashed line (hot water) look almost identical but mean completely different things. Uploading a 10 MB set directly fails, overcounts, and burns 60-70k tokens per question.

This skill fixes that with one principle: **scripts do the cheap mechanical work, the model does the understanding.** You run the indexing pipeline **once** per drawing set, which turns a huge PDF into small markdown indexes plus per-sheet text and images. Every later question reads those tiny indexes instead of the full PDF.

> Do NOT write pattern-matching scripts to classify drawings (e.g. "if title contains 'electrical' then electrical"). Drawing formats vary too much. Classification, cross-referencing, and symbol reading MUST be done by you reading each sheet. Scripts only split, render, extract text, and extract vectors.

## Setup (first time only)

```bash
pip install -r "$SKILL_DIR/scripts/requirements.txt"   # PyMuPDF
```

## Mode A — INDEX (run once per drawing set)

Goal: turn `merged.pdf` into a `analysis/` folder of small, queryable artifacts.

**Step 1 — Split, render, extract (script).**
```bash
python3 "$SKILL_DIR/scripts/split_pdf.py" <merged.pdf> <project_dir>/analysis
```
Produces, per sheet: `sheets/sheet_NNN.pdf`, `images/sheet_NNN.png` (rendered at the max resolution Opus can read), `text/sheet_NNN.txt`, plus `manifest.json`.

**Step 2 — Classify each sheet (YOU, not a script).**
For each sheet, read `text/sheet_NNN.txt` first (cheap). Only open `images/sheet_NNN.png` when the text is insufficient. Write `analysis/sheet-classification.md` using `templates/sheet-classification.md`. Use `references/drawing-types.md` to decide the type (layout / section / detail / schedule / general notes / legend) and the discipline. Capture the sheet number, title, scale, and what data lives on it.

**Step 3 — Build the cross-reference matrix (YOU).**
Find detail callouts, section markers, schedule codes (e.g. `TD7`, `F6`), and "see drawing X" notes. Record, per sheet, which other sheets it points to and why. Write `analysis/cross-references.md` using the template.

**Step 4 — Build the symbol legend (YOU).**
Read the legend/general-notes sheets and any in-sheet keys. Write `analysis/symbol-legend.md` mapping each symbol/linetype/abbreviation to its meaning. This is what lets you tell a cold-water line from a hot-water line later.

**Step 5 — Write the master index (YOU).**
Write `analysis/drawings.md` using the template: one-line summary per sheet, the overall package summary, and the query rules. This is the file you ingest at the start of every query.

## Mode B — QUERY (every question after indexing)

1. Read `analysis/drawings.md` (and `cross-references.md` / `symbol-legend.md` only if relevant). Do NOT read the original merged PDF.
2. From the index, identify the exact sheet(s) that hold the answer.
3. Read that sheet's `text/sheet_NNN.txt`, then its `images/sheet_NNN.png` if needed, then follow cross references to other sheets (e.g. a footing mark on a plan -> its schedule -> its section).
4. For **quantity takeoffs** (areas, counts, lengths): follow `references/takeoff-methodology.md`. Prefer the vector approach:
   ```bash
   python3 "$SKILL_DIR/scripts/extract_vectors.py" <project_dir>/analysis/sheets/sheet_NNN.pdf --scale <units_per_point>
   ```
   Always run a second, independent sanity check (e.g. overall building dimensions) and compare.
5. Answer with: the number, a **confidence level** (high/medium/low) and why, and the **source sheets** you used. Never give a precise count as certain. State uncertainty explicitly.

## What good output looks like

> Warehouse slab area ≈ 13,250 m² (confidence: high). Method: polygon extraction from the slab outline on S-201, cross-checked against overall building dimensions on A-101 (13,600 m² gross incl. external slabs). Source sheets: S-201, A-101.

## Files

- `scripts/split_pdf.py` — split + render + text extract (mechanical)
- `scripts/extract_vectors.py` — vector/polygon extraction for takeoffs (mechanical)
- `references/drawing-types.md` — how to classify and handle each drawing type
- `references/takeoff-methodology.md` — accurate counts/areas with cross-checks
- `templates/` — markdown templates for the three indexes
