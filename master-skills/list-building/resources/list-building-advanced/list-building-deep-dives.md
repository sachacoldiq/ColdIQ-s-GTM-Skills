# List Building — Detailed Reference

Deep dives into each phase, ICP construction, multi-source workflows, and the Apollo + Clay template.

---

## ICP Deep Dive: Building Your Ideal Customer Profile

### Step 1: Analyze Your Best Customers

Pull top 20–30 customers by: highest LTV, fastest close, lowest churn, highest NPS, easiest to work with.

**Answer:**
- What industries are they in?
- What's their average company size?
- What tools do they use?
- What triggered them to buy?
- What do they have in common?

**Tool:** Export from CRM → enrich in Clay with firmographics/technographics → look for patterns.

### Step 2: Analyze Your Worst Customers (Anti-ICP)

Pull customers who: churned quickly, had long/painful sales cycles, required excessive support, low LTV.

**Answer:**
- What made them a bad fit?
- What should have been a red flag?
- What do they have in common?

### Step 3: Interview Your Team

- **Sales:** "Who closes fastest? Who's most excited about our product?"
- **Customer Success:** "Who gets the most value? Easiest to onboard?"
- **Marketing:** "What content resonates? What channels work best?"
- **Product:** "Who uses the product most effectively?"

### Step 4: Document Your ICP

One-page document with must-haves, nice-to-haves, and disqualifiers (see template in SKILL.md).

### Step 5: Score Your ICP

Build a 0–100 scoring system in Clay as a formula column that auto-scores every company.

**30-Minute Exercise:**
1. List top 10 best customers
2. Find 3 patterns they share
3. List top 5 worst customers
4. Find 2 patterns they share (anti-ICP)
5. Write ICP hypothesis in one paragraph
6. Create scoring rubric

---

## ICP Layer Details

### Layer 1: Firmographics

| Criteria | Questions | Example |
|---|---|---|
| Industry | What industries do best customers operate in? | SaaS, E-commerce, Manufacturing |
| Company Size | How many employees? | 50–500 (mid-market) |
| Revenue | Annual revenue range? | $10M–$100M ARR |
| Location | HQ? Where do they operate? | US-based, expanding to EU |
| Company Age | Startup vs established? | 3–10 years old |
| Business Model | B2B, B2C, B2B2C? | B2B SaaS companies |
| Funding Stage | Bootstrapped to PE-backed? | Series A-B |

**Data sources:** Your CRM (best), LinkedIn Sales Nav, Clay enrichments, Clearbit, People Data Labs.

### Layer 2: Technographics

| Category | What to Look For | Why |
|---|---|---|
| CRM | Salesforce, HubSpot, Pipedrive | Sales sophistication, budget |
| Marketing Automation | Marketo, Pardot, ActiveCampaign | Marketing maturity |
| Sales Tools | Outreach, SalesLoft, Apollo | Active outbound motion |
| Analytics | Segment, Amplitude, Mixpanel | Data-driven culture |
| Infrastructure | AWS, GCP, Azure | Technical sophistication |
| Complementary Tools | Tools that integrate with yours | Easy adoption path |
| Competitor Tools | Using your competitors | Ripe for switching |

**Data sources in Clay:** BuiltWith, Clearbit, 6sense, HG Insights.

### Layer 3: Behavioral Signals

| Signal | What to Track | Where to Find |
|---|---|---|
| Hiring | Roles related to your solution | LinkedIn, job boards, Clay job tracking |
| Funding | Recent rounds | Crunchbase, PitchBook, news |
| Expansion | New offices, new markets | News, LinkedIn, company websites |
| Leadership Changes | New C-level hires | LinkedIn, press releases |
| Product Launches | New products/features | Product Hunt, news, social |
| Tech Stack Changes | Adding/removing tools | BuiltWith, technographic tracking |
| Content Engagement | Downloads, pricing page visits | Your analytics, intent data |
| Competitor Activity | Competitor mentions, visits | 6sense, Bombora, G2 |

**In Clay:** Claygent for news monitoring, job change tracking, Crunchbase/PitchBook integrations, 6sense/Bombora for intent.

### Layer 4: Psychographics

| Indicator | How to Identify |
|---|---|
| Growth vs optimization mindset | Hiring velocity, funding, leadership messaging |
| Innovation vs conservative | Tech stack (cutting-edge vs legacy), company age |
| Data-driven culture | Analytics tools, data team size |
| Customer-centric | NPS scores, CS team size, reviews |
| Compliance-focused | Industry (healthcare, finance), certifications (SOC2, GDPR) |
| Remote-first | Job postings, office locations, culture |

**Research:** About page, careers page, blog, Glassdoor reviews, leadership LinkedIn posts, customer case studies, Claygent for website summaries.

---

## ICP Examples

### Sales Engagement Platform
- Industry: B2B SaaS, Professional Services, Agencies
- Size: 50–500 employees, $5M–$50M revenue
- Tech: Salesforce or HubSpot CRM
- Signals: Hiring SDRs/AEs, raised Series A/B
- Psychographics: Growth-focused, outbound sales motion

### HR Tech Platform
- Industry: Technology, Financial Services, Healthcare
- Size: 200–2,000 employees, $20M–$200M revenue
- Tech: Workday, BambooHR, or Greenhouse
- Signals: Hiring HR Ops, headcount expanding >15% YoY
- Psychographics: Employee experience-focused, remote-first

### Marketing Automation Tool
- Industry: E-commerce, DTC Brands, B2C SaaS
- Size: 20–200 employees, $2M–$20M revenue
- Tech: Shopify, Klaviyo, or Attentive
- Signals: Launching new products, expanding to new channels
- Psychographics: Data-driven, customer acquisition-focused

---

## Multi-Source Company Discovery: Detailed Workflows

### Source 1: Clay Find Companies

1. Create new table in Clay
2. Add Source → Find Companies
3. Set filters matching ICP (industry, employees, location, technologies, funding)
4. Preview results → run source
5. Use "OR" logic for technologies to maximize coverage
6. Save filter templates for reuse

**Cost:** Free to search; credits for enrichment columns.

### Source 2: Apollo (CSV → Clay Import)

1. Apollo.io → Company search
2. Set same ICP filters
3. Use keywords to narrow (e.g., "B2B SaaS" in description)
4. Export as CSV (always include Domain field)
5. Clay → new table → Import CSV → map columns

**Cost:** Free tier: 50 exports/month | Basic $49/mo (10K) | Pro $79/mo (unlimited).

### Source 3: LinkedIn Sales Navigator

1. Sales Navigator → Company Search
2. Advanced filters: headcount, growth %, hiring, posted recently, technologies
3. Save as Lead List (max 2,500)
4. Export via Phantombuster ($50–100/mo) or Evaboot
5. Import to Clay

**Unique filters:** Headcount Growth, Posted on LinkedIn, Hiring on LinkedIn.
**Cost:** Core $99/mo | Advanced $149/mo + export tools.

### Multi-Source Merge Workflow

1. Table 1: Clay Companies (from Clay Find Companies)
2. Table 2: Apollo Companies (from CSV import)
3. Table 3: Merged — use "Write to Other Table" from both Table 1 and Table 2
4. In Table 3: dedupe by Domain
5. (Optional) Table 4: LinkedIn Sales Nav companies → write to Table 3 → dedupe again

**Typical result:** 40–70% more companies than single source.

### Advanced Strategies

**Waterfall Sourcing:** Start with highest-quality source (LinkedIn with intent signals), add next source only if you need more volume.

**Source by Segment:** Enterprise → ZoomInfo + LinkedIn; Mid-market → Clay + Apollo; Startups → Crunchbase + Clay.

**Layered Sourcing:** Broad search (10K) → add intent signals (filter to 3K) → enrich and score (final 1K A-tier).

---

## Apollo + Clay Template: 6-Table Workflow

### Table 1: Apollo Companies (CSV Import)
- Import CSV from Apollo export
- Key fields: Company name, domain, industry, employee count, revenue, location

### Table 2: Clay Companies (Native Search)
- Clay "Find Companies" source
- Match Apollo search criteria

### Table 3: Merged & Deduped Companies + Enrichment
- "Write to Other Table" from Table 1 and Table 2 into Table 3
- Dedupe by company domain
- Add: company tiering logic (formula/AI), scoring, additional enrichment

**Step-by-step merge:**
1. Create blank Table 3 ("Merged Companies - Deduped")
2. In Table 1: Add "Write to Other Table" column → select Table 3 → map fields → run all rows
3. In Table 2: Add "Write to Other Table" column → select Table 3 → map same fields → run all rows
4. In Table 3: Select Domain (or Company Name) column → click DeDupe → Value → delete duplicates
5. Add enrichment columns (tiering, scoring, qualification)

**Pro tips:**
- Field mapping must be consistent across both source tables
- Use run conditions to only write qualified companies
- Re-running Write to Table will auto-update Table 3

### Table 4: Apollo People
- Import domains from Table 3 (filtered for qualified companies)
- Apollo people search: job titles, seniority, departments

### Table 5: Clay People
- Same domains from Table 3
- Clay "Find People" source with matching criteria

### Table 6: Merged & Deduped People (Final Output)
- Import from Table 4 and Table 5
- Dedupe by email (primary) or name + company domain
- Final enrichment: email validation, phone waterfalls, personalization data, AI messaging
- **Output: final list ready for outreach**

---

## Local Prospecting

For clients selling to local businesses (gyms, clinics, logistics, real estate, etc.) that don't appear in Apollo/LinkedIn.

### Option A: Openmart + Clay (US-based)
1. Use [Openmart](https://openmart.ai/) to find local leads by category/location
2. Export → clean CSV
3. Import to Clay → enrich (email, website, LinkedIn, owner/decision-maker)

### Option B: Google Maps Scraping via Clay
1. Clay's Google Maps integration → search by type + location
2. Pull: name, website, address, phone
3. Enrich: email, LinkedIn, ownership data

### Option C: Directory Scraping
1. Find niche directory (Clutch.co, local chambers, industry associations)
2. Use [Instant Data Scraper](https://chromewebstore.google.com/detail/data-scraping-tool/ejcgomaeiikgjcebfmhaoddenaijpgfb) Chrome extension
3. Export CSV → import to Clay → enrich
4. If domain missing: use Claygent to find company website from name

See [list-building-directories.md](list-building-directories.md) for curated industry-specific directories.

---

## TAM Scoping via DiscoLike

**When to use:** When Apollo, Clay, and LinkedIn aren't finding your targets.

**What it does:** Discovers lookalike websites based on keywords and tech tags — not limited to LinkedIn data.

**Pros:**
- Finds net-new companies outside typical B2B databases
- Search based on one or multiple sites (like Ocean.io)
- Filter by country or language

**Cons:**
- No built-in firmographic data (or very limited)
- Higher enrichment cost (~1 credit per row to qualify)

**Tips:**
- If too many results: tweak similarity variance and company start date
- Helps avoid missing high-potential lookalikes due to volume caps

---

## Contact Enrichment Best Practices

### Email Waterfalls
Use 3–5 providers sequentially — if provider 1 misses, try provider 2, etc.
- LeadMagic, Prospeo, Findymail for personal emails
- Catch-all/generic as fallback
- Always validate to remove bounces

### Phone Waterfalls
Same principle for direct dials and mobile numbers — multiple providers for coverage.

### Data Provider Performance
Review [Clay's data provider tests](https://www.clay.com/data-tests) for provider performance by specific regions and use cases.

### Deduplication Strategy
1. **Company level:** Dedupe by domain BEFORE finding people (saves credits)
2. **People level:** Dedupe by email after merging sources
   - Alternative: dedupe by full name (saves credits, small risk of false dedupes)
3. **Sequencer safety net:** Enable "Skip lead if in Workspace" in Instantly/Smartlead/etc.

---

## Common ICP Mistakes

- **Too broad:** "Any company with 10+ employees" — can't afford to target everyone
- **Too narrow:** "Only fintech in SF with exactly 150 employees" — TAM too small
- **Based on assumptions, not data:** Talk to customers, analyze CRM
- **Static ICP:** Markets change, revisit quarterly
- **Ignoring anti-ICP:** Knowing who NOT to target is equally important
- **No scoring system:** Without scoring, every lead looks the same

---

## Tools Quick Reference

### Data Sources
- Clay Find Companies (built-in)
- Apollo (apollo.io, free tier available)
- LinkedIn Sales Navigator ($99/mo, 30-day trial)
- ZoomInfo (enterprise, $15K–$30K/year)
- Crunchbase ($29–$99/mo)

### Export/Scraping
- Phantombuster (LinkedIn scraping)
- Evaboot (LinkedIn Sales Nav export)
- Instant Data Scraper (Chrome extension, free)
- Apify (web scraping)
- Claygent (built-in AI web research)

### Enrichment in Clay
- Clearbit — firmographics, technographics
- BuiltWith — tech stack data
- People Data Labs — company data
- Crunchbase — funding data
- Claygent — custom research (values, news)

### Data Quality
- Clay deduplication (built-in)
- Email validation providers (LeadMagic, Prospeo, Findymail)
- Clay formulas — custom scoring logic
- AI columns — evaluate fit based on criteria

---

> **Built by [ColdIQ](https://www.coldiq.com) & [Ivan Falco](https://www.linkedin.com/in/ivanfalco/en/).** For questions on implementation or anything not covered here, reach out to Ivan directly on [LinkedIn](https://www.linkedin.com/in/ivanfalco/en/).
