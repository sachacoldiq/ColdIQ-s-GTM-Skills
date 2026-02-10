---
name: define-icp
description: Define Ideal Customer Profile with firmographic, technographic, and behavioral criteria plus scoring tiers. Use when user asks about "ICP", "ideal customer profile", "who to target", "scoring criteria", "tier system", "firmographic", "technographic", "buyer persona". Do NOT use for finding specific companies (use source-companies) or contact search (use find-contacts).
---

# Define ICP — Sub-Skill

You help users build a precise Ideal Customer Profile with a structured scoring system. Always read the reference file before responding.

## Reference

Read `list-building/resources/sales-navigator-guide.md` — sections: ICP Framework, ICP Scoring, Scoring Matrix.

## ICP Framework — 3 Layers

### 1. Firmographic Criteria (Company-Level)
Define these for every ICP:
- **Industry** — Primary vertical(s) and adjacent industries
- **Company size** — Employee headcount sweet spot (e.g., 51-500)
- **Revenue** — Annual revenue range (requires Sales Nav Advanced+)
- **Geography** — HQ location, target markets
- **Growth rate** — Headcount growth signals
- **Funding stage** — Seed, Series A-C, PE-backed, Public

### 2. Technographic Criteria
- **Tech stack** — Sales Nav has 35,000+ technology filters
- **CRM used** — Salesforce, HubSpot, Pipedrive, etc.
- **Marketing automation** — Marketo, Pardot, Mailchimp, etc.
- **Competitive tools** — Currently using a competitor's product

### 3. Behavioral/Intent Signals
- Job postings (hiring for roles your product supports)
- Funding events (new budget available)
- Leadership changes (new decision makers open to change)
- Content engagement (LinkedIn Buyer Intent, Bombora, 6sense)
- Website visits (Clearbit Reveal, Leadfeeder, RB2B)

## Scoring System — 100 Points

| Criterion | Weight | Scoring |
|-----------|--------|---------|
| Industry match | 20 pts | Exact = 20, Adjacent = 10, None = 0 |
| Company size | 15 pts | Sweet spot = 15, Adjacent = 8, Outside = 0 |
| Revenue range | 15 pts | Sweet spot = 15, Adjacent = 8, Unknown = 0 |
| Geography | 10 pts | Primary = 10, Secondary = 5, Other = 0 |
| Technology fit | 15 pts | Complement = 15, Neutral = 8, Competitor = 5 |
| Growth signals | 10 pts | High = 10, Moderate = 5, Stagnant = 0 |
| Intent signals | 15 pts | Strong = 15, Some = 8, None = 0 |

## Tier Assignment

- **Tier A (90-100 pts)** — Perfect fit. Maximum resources, multi-threaded ABM, custom outreach.
- **Tier B (70-89 pts)** — Strong fit. Targeted sequences, personalized messaging.
- **Tier C (50-69 pts)** — Moderate fit. Automated nurture, content marketing.
- **Tier D (<50 pts)** — Poor fit. Exclude from outreach, inbound-only.

## Examples

**Example 1:** "I sell HR software to mid-market companies"
-> Firmographic: 200-2,000 employees, $20M-$500M revenue, US/Canada. Technographic: Using BambooHR, Workday, or ADP. Behavioral: Hiring HR roles, posted about "employee experience". Score: Industry (SaaS/Tech = 20), Size (200-2K = 15), Revenue ($20-500M = 15), Geo (US = 10), Tech (legacy HR tool = 15), Growth (hiring = 10), Intent (HR job posts = 15) = 100 pts Tier A.

**Example 2:** "I want to sell to CFOs at e-commerce companies"
-> Firmographic: E-commerce, DTC, 50-500 employees, $5M-$100M revenue. Technographic: Shopify Plus, Magento, NetSuite. Behavioral: Recently raised funding, CFO hired in past 90 days. Score and assign tiers based on how many criteria match.

**Example 3:** "How do I prioritize my target accounts?"
-> Build scoring matrix with their specific criteria. Weight based on what correlates with closed-won deals. Analyze top 10-20 existing customers to reverse-engineer the ICP. Assign tiers and allocate outreach resources accordingly.
