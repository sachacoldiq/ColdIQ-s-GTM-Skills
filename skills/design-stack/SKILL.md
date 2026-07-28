---
name: design-stack
description: Use when the user wants a polished UI component, animation, chart, or design pattern for a web app and it could come from an existing design gallery instead of being written from scratch — or when they ask how to browse, connect, or install from component libraries (shadcn registries, Kokonut UI, Magic UI, Aceternity, Bklit, Origin UI, Uiverse, Motion.dev, ReactBits…). Triggers: "add an animated X", "make this look better", "find a component for", "design gallery", "shadcn registry", "install component", "AI slop".
---

# Design Stack — sourcing components from the best galleries

## Core principle

Never write a premium component from scratch before checking the galleries. The best design libraries are machine-readable: their registries serve full component source as JSON. Fetch real source, adapt it — don't reinvent or hallucinate it.

**Never invent a registry URL.** Every endpoint below was verified 2026-07. If one fails, check `references/` or the fallback column — don't guess.

## Which gallery for which need

| Need | Check first | Then |
|---|---|---|
| Charts, dashboards, KPIs | **Bklit UI** | Kibo UI |
| AI interfaces (prompts, chat, voice) | **Kokonut UI** | prompt-kit |
| Landing-page wow (hero, sparkles, beams) | **Aceternity** | Magic UI |
| Text effects, marquees, backgrounds | **Magic UI** | Fancy Components |
| Micro-interactions, small delights | **SmoothUI** | BadtzUI |
| Forms, inputs, app blocks (volume) | **Origin UI** | Kibo UI |
| Playful physics/creative motion | **Fancy Components** | ReactBits |
| CSS-only elements (buttons, loaders) | **Uiverse** (galaxy repo) | — |
| Animation APIs (springs, gestures, scroll) | **Motion.dev** llms.txt | Anime.js via Context7 |

## Workflow

1. **Shortlist 2–3 galleries** from the table — not just one; compare before installing.
2. **Browse the index**: local digests in `references/<gallery>-components.md` (cached catalogs), or fetch the live index URL from the endpoint table.
3. **Inspect candidates**: fetch the per-item JSON — `files[].content` holds full source; check `dependencies` and `registryDependencies`.
4. **Install**:
   - shadcn-compatible project: `npx shadcn@latest add "<item-url>"`
   - otherwise: copy `files[].content` into the project and adapt (inline `cn`, swap shadcn primitives for plain elements).
5. **Adapt to the project's design system** (colors, radius, fonts) but keep animation timing/physics identical — that's where the quality lives.
6. **Verify the build** before declaring done.

## Verified endpoints (2026-07)

| Gallery | Index | Item pattern | Caveat |
|---|---|---|---|
| Kokonut UI | `kokonutui.com/r/registry.json` (40) | `/r/{name}.json` | needs `motion`, `lucide-react` |
| Bklit UI | `ui.bklit.com/r/registry.json` (56) | `/r/{name}.json` | charts depend on `@visx/*`, chart-utils items |
| Magic UI | `magicui.design/r/registry.json` (247) | `/r/{name}.json` | — |
| Aceternity | `ui.aceternity.com/registry.json` (270) | `/registry/{name}.json` | ⚠️ different path, no `/r/` |
| Origin UI | none (HTML) | `originui.com/r/{name}.json` | discover via site search; names `comp-NN` + semantic |
| Fancy Components | `fancycomponents.dev/r/registry.json` (158) | `/r/{name}.json` | — |
| SmoothUI | `smoothui.dev/r/registry.json` (158) | `/r/{name}.json` | — |
| Kibo UI | `kibo-ui.com/r/registry.json` (41) | `/r/{name}.json` | — |
| BadtzUI | none usable | `badtz-ui.com/r/{name}.json` | names list in `references/badtz-components.md` |
| prompt-kit | — | `prompt-kit.com/c/{name}.json` | ⚠️ `/c/` path; use `www.` (308 otherwise) |
| Cult UI / Motion Primitives | bot-protected (429 to curl) | — | works through `npx shadcn add` CLI, not raw fetch |
| Uiverse | GitHub `uiverse-io/galaxy` | clone + grep locally | CSS/Tailwind snippets, no registry |
| Motion.dev | `motion.dev/llms.txt` | — | docs, not components |
| ReactBits | `reactbits.dev/llms.txt` | — | — |
| HeroUI / daisyUI | `heroui.com/llms.txt` / `daisyui.com/llms.txt` | — | full libraries, npm install |
| shadcn/ui | `ui.shadcn.com/llms.txt` | via shadcn CLI | the base layer |

## One-time project setup (offer it, don't assume it)

Registry aliases in `components.json` let the user type `npx shadcn add @kokonutui/ai-prompt`:

```json
"registries": {
  "@kokonutui": "https://kokonutui.com/r/{name}.json",
  "@bklit": "https://ui.bklit.com/r/{name}.json",
  "@magicui": "https://magicui.design/r/{name}.json",
  "@aceternity": "https://ui.aceternity.com/registry/{name}.json",
  "@originui": "https://originui.com/r/{name}.json",
  "@fancy": "https://www.fancycomponents.dev/r/{name}.json",
  "@smoothui": "https://www.smoothui.dev/r/{name}.json",
  "@kibo": "https://www.kibo-ui.com/r/{name}.json",
  "@promptkit": "https://www.prompt-kit.com/c/{name}.json"
}
```

MCPs, if the user wants persistent connections: `claude mcp add shadcn -- npx shadcn@latest mcp` (search/install across configured registries) and `claude mcp add context7 -- npx -y @upstash/context7-mcp` (live docs for Anime.js, GSAP, any lib).

## Common mistakes

- **Inventing endpoint URLs** — patterns differ per gallery (`/r/`, `/registry/`, `/c/`). Use the table.
- **Checking one gallery only** — the baseline failure mode. Compare 2–3; specialists beat generalists (gauge → Bklit before Magic UI).
- **Giving up on a 429** — Cult UI and Motion Primitives block curl but work via the shadcn CLI.
- **`import { motion } from "framer-motion"`** in new code — modern registries use `motion/react`.
- **Installing without reading `registryDependencies`** — some components pull shadcn primitives (textarea, dropdown) you may need to replace outside shadcn projects.
- **Restyle-everything syndrome** — adapt tokens, never the animation constants.
