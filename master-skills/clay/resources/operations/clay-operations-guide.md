# Clay Operations — Guide

How to use Clay effectively: choosing the right data providers, managing credits, and building efficient GTM workflows.

For the full template library, see [clay-operations-templates.md](clay-operations-templates.md).
For credit optimization deep dive, see [clay-operations-credit-optimization.md](clay-operations-credit-optimization.md).

---

## Choosing Data Providers

### The Principle

Don't guess which provider is best — use [Clay's Data Tests](https://www.clay.com/data-tests) to see real performance by use case, region, and input type.

### Best Providers by Category (2025)

**Mobile Phone — By Region:**
1. BetterContact
2. Datagma
3. Forager
4. Prospeo
5. SMARTe

**European Mobile Phone — By Country:**
1. BetterContact
2. Zeliq
3. Prospeo
4. Pubrio
5. SMARTe

**European Work Email — By Country:**
1. BetterContact
2. Prospeo
3. SMARTe
4. Zeliq
5. Hunter

**Work Email — By Region:**
1. Hunter
2. Prospeo
3. Kitt AI
4. FullEnrich
5. Zeliq

**Non Catch-All Email Verifiers:**
1. ZeroBounce
2. Findymail
3. LeadMagic
4. Listmint
5. Hunter

**Catch-All Email Verifiers:**
1. Kitt AI
2. Findymail
3. LeadMagic
4. Enrichley
5. Enrow

**Professional Profile Finder — By Input Type:**
1. Wiza
2. Snov.io
3. ReverseContact
4. People Data Labs
5. Mixrank

**Personal Email Finder (2024):**
1. People Data Labs
2. Mixrank
3. Limadata
4. Forager

**Work Email — By Company Size (2024):**
1. Wiza
2. Snov.io
3. Prospeo
4. People Data Labs
5. LeadMagic

---

## Complete Tool Table

The best tool for each data point, with cost and notes.

| Data Point | Best Tool | Cost (Credits) | Notes |
|---|---|---|---|
| **News** | Serper (API) | 0 | Trustpilot/Crunchbase scraping, domain searches |
| **Gen AI** | GPT 4o-mini (API) | 0 | Generative tasks; fallback to Neon only when 4o-mini fails |
| **Company Growth** | LeadMagic | ~$0.009/enrichment | Replaces LinkedIn enrichment for ~90% cost savings |
| **Finding Email** | Trykitt.ai, Prospeo, Datagma | $0.004–$0.006/email | Trykitt.ai ($0.004) is most cost-efficient |
| **Email Verification** | Reoon, Debounce (API) | 0 (Reoon: one-time buy) | Buy Reoon on AppSumo for unlimited verifications |
| **Domain Name** | Clearbit, Serper (API) | 0 | Start Clearbit (free), fallback to Serper |
| **Website Competitors** | Serper API + GPT 4o-mini | ~$0.004/scrape | Replaces Google Search + GPT combo |
| **Website Data** | Store Leads | 1 | Better for e-com than Semrush (2 credits) |
| **Google Maps Scraping** | Outscraper | 0 | Free with login credentials |
| **Technology** | BuiltWith links, GPT 4o-mini | ~$0.005/scrape | Free tech-stack data + GPT for analysis |
| **Company Enrichment** | LeadMagic, Trigify.io | ~$0.009/enrichment | Trigify.io for webhook automation |
| **Contact Enrichment** | Export Apollo.io, LeadMagic | ~$20/10K leads | Apollo bulk LinkedIn data at reduced cost |
| **Headcount Data** | LinkedIn, PredictLeads | 1 | Combine for granular data |
| **Fundraising Data** | Intellizence, Polaris API | 1 | Polaris ~1 credit/7 data points |
| **Site Traffic (e-com)** | Store Leads | 1 | Use before Semrush for efficiency |
| **Reviews** | Serper API + GPT 4o-mini | ~$0.004/scrape | Summarize Capterra, G2, etc. |
| **Cell Data Manipulation** | Clay AI Formula Writer | 0 | Automate transformations |
| **LinkedIn Ads** | Serper (API) | 0 | Track ad campaigns |
| **Open Jobs** | Export Apollo.io, PredictLeads | ~$20/10K leads | Bulk job posting data |

### Key Principle: Free First, Paid Second

1. **Start with free tools:** Serper, Clearbit, BuiltWith, Clay AI Formulas
2. **Then low-cost:** LeadMagic ($0.009), Trykitt.ai ($0.004), Prospeo
3. **Then standard:** Clay enrichments (1 credit), LinkedIn (1 credit)
4. **Last resort:** Semrush (2 credits), Zenrows (3 credits)

---

## Waterfall Strategy

For any data point, use multiple providers in sequence — stop when you get a result.

### Email Waterfall Example

1. Trykitt.ai ($0.004) → if no result:
2. Prospeo ($0.005) → if no result:
3. Datagma ($0.006) → if no result:
4. LeadMagic ($0.009)
5. Verify with Reoon (free) or Debounce

### Domain Waterfall Example

1. Clearbit (free) → if no result:
2. Serper API (free) → if no result:
3. Google Search (1 credit)

### Tech Stack Detection Waterfall

1. HG Insights (primary — enterprise-focused, best for Adobe/Salesforce/ServiceNow)
2. BuiltWith (validation — web-visible tech, marketing, pixels)
3. PredictLeads (supplemental — job posting analysis, hiring signals + tech requirements)

---

## The 5 Buying Signals That Matter

| Signal | Reply Rate Impact | Best Timing |
|---|---|---|
| Recent Job Changes (0–90 days) | 3x higher response | Days 14–45 (building their stack) |
| Hiring for Specific Roles | Signals budget + growth | Act within days of posting |
| Website Visitors | 25–30% reply rate | Same day (they know you) |
| Funding Announcements | Fresh capital to spend | 2–4 weeks after announcement |
| Technology Changes | Active buying window | Act immediately |

**Performance comparison:**
- Cold prospects: 6–8% reply rate
- Signal-based: 18–22% reply rate
- Multi-signal stacked: 35–40% reply rate

---

## Essential Clay Workflows

### Batch Processing: The 5-for-1 Credit Workflow

Chain multiple enrichments in one streamlined flow:
1. Find emails (Trykitt.ai or Prospeo)
2. Verify emails (Reoon)
3. Fetch LinkedIn data
4. Enrich company tech stacks (BuiltWith)
5. Append headcount data

### Competitor Analysis Workflow

1. Serper API (0 credits) → scrape competitor data from Trustpilot/Google Maps
2. GPT 4o-mini → automated summarization (~$0.004/scrape)
3. LinkedIn integration (1 credit) → track competitor hiring trends

### E-Commerce Tracking Workflow

1. Store Leads (1 credit) → traffic insights
2. Semrush (2 credits) → deeper performance metrics (only if needed)
3. Trigify.io webhooks → automate recurring updates

### Fundraising Prospecting Workflow

1. Intellizence (1 credit) → identify fundraising opportunities
2. LeadMagic ($0.009/record) → enrich company and contact details
3. Lookup Columns → prevent duplicate enrichments

---

## Blocklist Best Practices

**Non-negotiable:** Build your blocklist before your first campaign.

**What to include per entry:**
- Domain or email
- Reason (opted out, competitor, wrong fit, bounce)
- Date added
- Campaign where blocked
- Added by (team member)

**Saves 10+ hours/week** by automating blocklist checks in every Clay table.

---

## Key Resources

- [Clay Data Tests](https://www.clay.com/data-tests) — provider performance by use case
- [Clay Help Center](https://docs.clay.com/en/) — credit tracking and tutorials
- [Clay Templates Gallery](https://www.clay.com/templates) — official templates
- [Clay University](https://www.clay.com/university) — learning modules
- [ColdIQ AI Sales Tools](https://www.coldiq.com/ai-sales-tools) — tool glossary
- [ColdIQ 55 B2B Data Sources](https://www.coldiq.com/b2b-data-sources) — data source guide
- [ColdIQ 37 Sales Triggers](https://www.coldiq.com/sales-triggers) — signal reference
- [Trigify.io Guide](https://b2b-boosted.subpage.co/trigify-social-signals) — campaign automation

---

> **Built by [ColdIQ](https://www.coldiq.com) & [Ivan Falco](https://www.linkedin.com/in/ivanfalco/en/).** For questions on implementation or anything not covered here, reach out to Ivan directly on [LinkedIn](https://www.linkedin.com/in/ivanfalco/en/).
