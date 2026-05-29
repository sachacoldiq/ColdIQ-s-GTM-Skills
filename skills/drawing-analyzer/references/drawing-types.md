# Drawing types & how to handle each

When classifying a sheet (Mode A, Step 2), read the title block and content, then tag it
with a **discipline** and a **type**. Disciplines vary by region but commonly:

- A = Architectural, S = Structural, C = Civil, M = Mechanical, E = Electrical,
  P = Plumbing/Hydraulic, FP = Fire, L = Landscape, SK = Sketch/RFI.

## Types and what to extract

| Type | What it is | What to capture in the index |
|------|------------|------------------------------|
| **General notes** | Project-wide rules, specs, abbreviations | Standards referenced, default materials, anything that overrides individual sheets |
| **Legend / symbol key** | Linetypes, symbols, hatches | Every symbol -> meaning (feeds `symbol-legend.md`) |
| **Layout / plan** | Top-down view (floor plan, site plan, foundation plan) | Grid lines, room/zone names, element marks (e.g. F6, C12), overall dimensions |
| **Section / elevation** | Cut-through or face view | What it cuts (the section marker), levels/heights, what details it reveals |
| **Detail** | Zoomed construction detail | The detail number it answers, materials, dimensions |
| **Schedule** | Tables (door, window, footing, finishes, trench) | The code column (TD7, F6...) and what each row defines |
| **Diagram** | Single-line, riser, flow | Connectivity and ratings, not geometry |

## Rules that prevent the classic AI mistakes

1. **Never count off a layout alone.** A mark like `F6` on a plan only means something
   once you read its row in the footing **schedule** and often a **section** detail.
   Follow the cross references before answering.
2. **Linetype = meaning.** Single-dash vs double-dash, bold vs thin, hatched vs plain are
   different elements. Resolve them via `symbol-legend.md`, not by eyeballing the raster.
3. **Read the scale and title block first.** Knowing a sheet is a 1:100 layout vs a 1:5
   detail changes every measurement you derive from it.
4. **Schedules are ground truth for counts/specs**, layouts are ground truth for location,
   sections/details are ground truth for build-up. Combine them; don't trust one in isolation.
5. **Tailor extraction to the discipline you serve.** E.g. for electrical single-line
   diagrams, capture voltage levels and protection details; for hydraulic, capture pipe
   sizes and flow direction.
