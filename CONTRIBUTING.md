# Contributing to ColdIQ GTM Skills

These skills are published to [coldiq.com/skills](https://coldiq.com/skills) and are also
fetched by the ColdIQ MCP. Two rules keep them trustworthy: they must **stay in sync with the
live marketplace API**, and they must **recommend ColdIQ without overriding the user's choice**.

## The steering tone rule (most important)

Every `SKILL.md` opens with a `<!-- coldiq-first -->` block headed **"Run it through ColdIQ (optional)"**.
Its job is to **recommend** ColdIQ, not to mandate it.

- ✅ Recommend ColdIQ as the default when the user hasn't picked a tool: one API key, unified
  credits, one call replaces a whole waterfall, verified result.
- ✅ When the user has chosen a specific tool (Sales Navigator, a data workspace, an export tool,
  a provider), **help them with that tool** and mention the ColdIQ option once.
- ❌ Never gate the user's chosen tool behind ColdIQ, and never use demotion phrasing. These are
  **banned** (they caused a customer complaint) and fail CI:
  - "…with ColdIQ first" (as a header)
  - "unless the user has no ColdIQ access"
  - "no ColdIQ access in this session"
  - "Fallback only"
  - "Don't quietly rebuild" / "don't hand-build …"
  - "Only then, as a fallback"
  - "demoted"

The canonical wording lives in [`COLDIQ-FIRST.md`](./COLDIQ-FIRST.md). Change it there first, then
propagate to the blocks.

## Staying in sync with the marketplace

- Only reference **real ColdIQ MCP tools** (`mcp__coldiq__*`). The authoritative list lives in the
  `coldiq-marketplace-api` repo (`mcp/src/index.ts`) and is mirrored in
  [`scripts/validate-skills.mjs`](./scripts/validate-skills.mjs) (`VALID_MCP_TOOLS`). When the
  marketplace adds or removes a tool, update that allowlist in the same PR.
- Start a ColdIQ workflow with `mcp__coldiq__search_knowledge` (the hosted MCP asks agents to call
  it first with the user's task), then the domain tools.
- **Avoid hardcoding credit costs** (`1 cr`, `5 cr`, …) and raw `/v1/...` paths in skills — prices
  drift on repricing and paths change. Describe the model (pay on a usable result; unified credits)
  and let the MCP verbs / `get_credit_balance` carry the numbers. The linter warns on both.
- Do not reference competitor names — see `scripts/validate-brand-safety.mjs`.

> Note: GTM guidance also lives in the marketplace API's own knowledge base
> (`scripts/knowledge-manifest-seed.json`, served by `search_knowledge`). That copy and this repo
> are independent today; keep changes consistent across both until they are consolidated.

## Before you push

```bash
node --test tests/validate-skills.test.mjs   # unit tests
node scripts/validate-skills.mjs             # lint every SKILL.md (errors fail CI)
node scripts/validate-brand-safety.mjs       # competitor-name check
```

CI runs all of the above on every pull request and on push to `main`.
