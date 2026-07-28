---
name: design-packages
description: Use when choosing an art direction, visual style, or complete design system for a new page, landing, or site — or when the user asks to browse, compare, or apply one of the 44 local design packages (frosted glass, retro terminal, editorial bento, dark infrastructure, paper-and-ink…). Each package ships a full CSS system and HTML preview.
---

# Design Packages — 44 complete design systems, local

## What this is

44 self-contained design systems stored in this folder, one directory each. They are ART DIRECTIONS to pick from — not components. For ColdIQ house rules, see the `design-pack` skill; for sourcing animated components from external galleries, see `design-stack`.

## Structure of every package

```
<name>/
├── DESIGN.md        # written spec: concept, type, color, spacing, motion rules
├── metadata.json    # name + one-line description
├── css/system.css   # the complete CSS system, ready to adapt
├── html/preview.html + cover.html   # full demo pages
└── images/ or screenshots/
```

## Workflow

1. **Browse**: read `INDEX.md` here — one line per package (name, description, size).
2. **Shortlist 2–3** directions matching the brief's tone (e.g. finance SaaS → `verda-finance`, `lumenwave-finance`, `voltline-analytics`; editorial/studio → `folio`, `boldcase`, `frame-field`; dark technical → `forge`, `cairn-2`, `fuzzy-duck-40-*`).
3. **Read the shortlisted `DESIGN.md`s** — they contain the reasoning, not just tokens.
4. **Preview**: open `html/preview.html` (or screenshot it headless) to judge visually.
5. **Apply**: port tokens and patterns from `css/system.css` into the project's stack — adapt naming to the codebase, keep the system's proportions, type pairings, and motion constants intact.

## Rules

- Never mix two packages' tokens on one page — pick one direction and commit.
- These are starting systems, not brand law: ColdIQ brand constraints (see `design-pack`) win on conflicts.
- When the user asks "montre-moi des directions", present 3 contrasting options with one-line rationales, not the full list of 44.
