---
name: design-director
description: Use when designing anything OUTSIDE the ColdIQ brand — client demos, lead magnets, side projects, experiments, post visuals — and the work involves visual/UI decisions. Routes between grabbing components or animations only vs running the full art-direction + components workflow. Triggers: "fais un design hors ColdIQ", "nouvelle page/app/dashboard" without an established look, "ajoute un composant/une animation", "quel style utiliser", "design ce demo".
---

# Design Director — supervises design-packages + design-stack

## What this supervises

- **`design-packages/`** (same folder) — 44 complete art directions: tokens, type, CSS system, preview. Answers *"what should this look like?"*
- **`design-stack/`** (same folder) — 16 external component galleries with verified registry endpoints. Answers *"where do I get the building blocks?"*
- Out of scope: ColdIQ-branded work → the `design-pack` house system governs; this skill steps aside.

## The decision — which mode?

Ask one question: **does a visual direction already exist for this surface?**

| Situation | Mode |
|---|---|
| Existing page/app with an established look; user wants a component, chart, animation, micro-interaction added or upgraded | **A — Components only** |
| New page/site/dashboard from scratch; no tokens, no direction; or user asks "make a design", "choose a style" | **B — Full workflow** |
| Existing surface but user says it looks bad / wants a rebrand or restyle | **B** (direction first — components aren't the problem) |
| User explicitly names a direction ("use forge", "dark terminal vibe") | **B, skipping the browse step** |

When genuinely ambiguous, ask the user: "keep the current look and add pieces, or pick a real art direction first?" — one question, not a menu.

## Mode A — Components only

Invoke `design-stack` and follow its workflow (shortlist galleries by specialty → registry index → inspect → install/copy → adapt tokens → verify build). Adapt colors to the EXISTING surface's tokens; never import a foreign palette along with a component.

## Mode B — Full workflow (direction, then components)

1. **Direction** — invoke `design-packages`: browse INDEX.md, shortlist 2–3 contrasting candidates, read their DESIGN.md, choose with a stated rationale (audience, tone, brand adjacency). Port the chosen tokens (colors, type, radii, surfaces) into the project.
2. **Components** — invoke `design-stack` for every block you'd otherwise hand-write. Restyle each installed component with the chosen direction's tokens; keep animation constants intact.
3. **Verify** — build passes AND a screenshot matches the direction (fixed-viewport capture; fullPage resizes restart reveal animations).

Order is non-negotiable: direction before components. Components installed first anchor the page to their default palette and get restyled twice.

## Integration rules (learned the hard way)

- Chart libraries often read theme vars (`--chart-*`) from `:root`/`.dark`, not from a local wrapper — apply direction tokens globally or check where the lib resolves them.
- Component-specific color APIs (e.g. Bklit heatmap `levelColors`) beat CSS overrides — look for the prop before fighting the cascade.
- One direction per surface. Never blend two packages; never keep a component's home palette.
- Licensed deps inside a registry item (e.g. `@central-icons-react`) → swap for a free equivalent (lucide) rather than abandoning the component.

## Red flags

- Writing a premium component by hand → should be Mode A.
- Installing components before any token exists in the project → you skipped Mode B step 1.
- A page mixing indigo defaults with the chosen direction's accent → tokens were not ported globally.
