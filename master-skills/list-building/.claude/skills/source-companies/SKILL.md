---
name: source-companies
description: Find and import target companies from multiple data sources including Apollo, Clay, Google Maps, HG Insights, Ocean.io, and webhooks. Use when user asks about "find companies", "company list", "data sources", "where to find companies", "import companies", "Google Maps leads", "tech stack targeting", "webhooks", "Triggery". Do NOT use for finding individual contacts (use find-contacts) or ICP definition (use define-icp).
---

# Source Companies — Sub-Skill

You help users find and import target companies from the best data sources for their use case. Always read the reference file before responding.

## Reference

Read `list-building/resources/lead-sources-guide.md` — all sections.

## 3 Categories of Company Sources

### 1. Inbound / Warm Sources (Highest Intent)
- **Website visitors** — RB2B, Clearbit Reveal, Leadfeeder (identify anonymous visitors)
- **LinkedIn engagement** — Triggery webhooks to Clay (real-time post engagers)
- **Event attendees** — Webinar, conference, in-person event lists
- **Newsletter subscribers** — Form fills with company domain

### 2. Database Sources (Broad Targeting)
- **Apollo.io** — Best for broad targeting, good volume, needs verification. Use with LeadMagic scraper for enrichment.
- **Clay Find Companies** — Native database, free, good for quick lookups and enrichment workflows.
- **Ocean.io** — Lookalike accounts based on tech stack/ICP. Best for expanding TAM from existing customers.
- **Sales Navigator Account Search** — 95-100% match rate on company lists (vs 30-70% for contacts). Use Account filters: headcount, revenue, industry, HQ location, technologies.

### 3. Specialized Sources (Niche Targeting)
- **HG Insights** — Tech stack targeting (paid). Best when technographic criteria is central to ICP.
- **Google Maps** — Local businesses, SMB. Use Apify or Instant Data Scraper to extract.
- **Apify / PhantomBuster** — Custom scraping for niche directories, review sites, industry lists.
- **RSS Feeds** — Monitor company news, funding announcements, job postings.

## Webhooks — Real-Time Company Discovery

**Triggery -> Clay pipeline:**
1. Someone engages with your LinkedIn content (like, comment, share)
2. Triggery captures the event in real-time
3. Webhook sends data to Clay automatically
4. Clay enriches company data and routes to appropriate list

## Import Methods into Clay

| Method | Best For |
|--------|----------|
| CSV upload | One-time imports from any source |
| HubSpot/Salesforce sync | CRM-connected workflows |
| Apollo integration | Database pulls |
| Clay Find Companies | Native search |
| Webhook (Triggery) | Real-time engagement data |
| HTTP API | Custom integrations |

## Examples

**Example 1:** "I need a list of SaaS companies using Salesforce with 50-500 employees"
-> Use Sales Navigator Account Search (Technologies: Salesforce, Headcount: 51-500, Industry: Computer Software). Supplement with HG Insights for deeper tech stack data. Export to Clay for enrichment. Expected: 2,000-5,000 companies.

**Example 2:** "I want to find local restaurants in Chicago for my POS software"
-> Use Google Maps + Apify scraper. Search "restaurants Chicago". Extract business name, address, phone, website. Import CSV into Clay. Supplement with Yelp/TripAdvisor scraping for reviews and size indicators.

**Example 3:** "How do I capture companies that engage with my LinkedIn posts?"
-> Set up Triggery webhook connected to Clay. Configure trigger: LinkedIn post engagement (likes, comments). Clay auto-enriches company domain from LinkedIn profile. Apply ICP scoring, route Tier A/B to outreach sequences.
