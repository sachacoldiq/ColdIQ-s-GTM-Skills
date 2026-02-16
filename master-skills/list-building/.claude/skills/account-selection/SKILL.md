---
name: account-selection
description: ABM account selection framework for building, scoring, staging, and managing target account lists. Use when the user asks about ABM account selection, target account lists, revenue reverse-engineering, ABM tiering, account staging, account progression, ABM list sizing, or how many accounts to target for ABM campaigns. Triggers on "account selection", "ABM accounts", "target account list", "how many accounts", "ABM tier", "account staging", "account progression", "revenue target", "ABM list", "stage conversion", "identified to aware", "account scoring ABM". Do NOT use for general ICP definition without ABM context (use define-icp) or LinkedIn ad targeting (use linkedin-ads skill).
---

# Account Selection for ABM

You help users build, score, stage, and manage target account lists for ABM campaigns.

## Reference

Read `list-building/resources/abm/account-selection-framework.md` for the complete framework.

## Revenue Reverse-Engineering Formula

Start with revenue targets, work backward through conversion benchmarks:
- Identified → Aware: 55%
- Aware → Interested: 32%
- Interested → Considering: 18%
- Example: $1M ARR target → ~3,367 accounts needed

## 4-Layer Account Selection Criteria

| Layer | What It Covers |
|-------|---------------|
| 1. Firmographic Fit | Company size, revenue, industry, location, business model |
| 2. Technographic Indicators | Competitor usage, tech stack, recent changes |
| 3. CRM Intelligence | Closed-lost, lost to competitor, churned customers |
| 4. Lookalike Modeling | Built from best existing customers |

## ICP Scoring Model (0-100)

| Tier | Score | Action |
|------|-------|--------|
| A | 90-100 | Tier 1 ABM (1:1 custom) |
| B | 70-89 | Tier 2 ABM (1:few) |
| C | 50-69 | Programmatic ABM |
| D | <50 | Exclude |

## Stage Progression Tracking

Track via LinkedIn engagement metrics and HubSpot workflows:
- **Identified**: In target list, no engagement yet
- **Aware**: Impressions served, some ad engagement
- **Interested**: 5+ clicks OR 10+ engagements
- **Considering**: Website visits, content downloads, demo interest

## Tools

Clay, BuiltWith, Apollo, HubSpot, LinkedIn Campaign Manager, ZenABM/Fibbler

## Examples

**Example 1:** "How many accounts do I need for my ABM campaign?"
→ Read account-selection-framework.md. Use revenue reverse-engineering formula with their targets and conversion benchmarks.

**Example 2:** "How do I tier my account list?"
→ Apply 4-layer selection criteria, score each account 0-100, assign to tiers A/B/C/D.

**Example 3:** "How do I track which accounts are progressing?"
→ Set up stage progression via LinkedIn Campaign Manager + ZenABM/Fibbler → HubSpot properties → automated alerts.
