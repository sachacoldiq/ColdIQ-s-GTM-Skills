---
name: clay-operations
description: Optimize Clay platform operations including credit management, provider selection, and workflow templates. Use when the user asks about Clay credit optimization, Clay pricing strategies, data provider selection, Clay templates, workflow automation, credit-saving techniques, batch processing, waterfall provider ordering, or scaling Clay workflows. Triggers on "Clay credits", "save credits", "credit optimization", "Clay providers", "which provider", "Clay templates", "workflow template", "batch processing", "Clay cost", "reduce Clay spend", "Clay API keys", "provider ranking". Do NOT use for building specific enrichment workflows (use email-waterfall, company-enrichment, etc.) or Claygent/formula questions.
---

# Clay Operations

You help users optimize their Clay platform usage: credit management, provider selection, and pre-built workflow templates.

## Reference

Read these resources based on the user's question:

- **Credit optimization, cost reduction, conditional logic for savings** → Read `{SKILL_BASE}/resources/operations/clay-operations-credit-optimization.md`
- **Data provider rankings, waterfall strategies, buying signals, blocklists** → Read `{SKILL_BASE}/resources/operations/clay-operations-guide.md`
- **58 pre-built templates, quick start packs, workflow catalog** → Read `{SKILL_BASE}/resources/operations/clay-operations-templates.md`

## Key Concepts

### Credit Optimization
- Multi-stage filtering: free tools first, expensive as fallback
- AI-powered conditional logic for intelligent enrichment routing
- Batch processing (5-for-1 workflows combining multiple enrichments)
- Lookup columns to prevent duplicate enrichments
- Prioritize free tools: Serper, Clearbit, BuiltWith, Reoon, Clay AI Formulas
- Use API keys to replace expensive Clay-native tools

### Provider Rankings (2025)
| Data Type | Top Providers |
|-----------|--------------|
| Email | Hunter, Prospeo, Kitt AI, FullEnrich |
| Mobile phones | BetterContact, Datagma, Forager, Prospeo |
| Company growth | LeadMagic (~$0.009/enrichment) |
| Email verification | ZeroBounce, Findymail, LeadMagic |

### Template Categories (58 total)
1. List Building & Prospecting (8+)
2. Contact Discovery & Enrichment (7)
3. Signal-Based Campaigns (9)
4. Inbound & Intent Workflows (7)
5. AI Research & Personalization (8)
6. Account Intelligence (6)
7. RevOps & Integrations (7)
8. Industry-Specific Plays (6)

### 3 Quick Start Packs
- **First Campaign** (beginner): Apollo import → enrich → validate → push
- **Signal-Based** (intermediate): Job changes + funding + hiring triggers
- **Full GTM Flywheel** (advanced): Multi-source + scoring + CRM sync

## Examples

**Example 1:** "How do I reduce my Clay costs?"
→ Read credit-optimization guide. Audit current usage, implement conditional logic, switch to API keys, enable batch processing.

**Example 2:** "Which email provider should I use in Clay?"
→ Read operations guide. Recommend waterfall: cheapest first (Hunter) → mid-tier (Prospeo) → premium (FullEnrich). Always with conditional checks.

**Example 3:** "Give me a Clay template for job change outreach"
→ Read templates catalog. Route to Signal-Based Campaigns section. Provide the job change tracker template with days 14-45 window.
