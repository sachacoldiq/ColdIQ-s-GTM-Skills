---
name: list-building
description: Build B2B prospect lists using multi-source strategies, ICP definition, Clay enrichment, and data validation. Covers ICP frameworks (firmographics, technographics, behavioral, psychographic), multi-source company discovery (Clay, Apollo, LinkedIn Sales Nav, Crunchbase, web scraping), people discovery, email/phone waterfalls, deduplication, scoring, personalization, and activation. Use when building lead lists, defining ICPs, enriching contacts, setting up Clay tables, or planning outbound data strategy.
---

# B2B List Building

List building isn't about getting the *most* contacts — it's about getting the *right* contacts with the *right* data to enable personalized, relevant outreach. Quality > Quantity, always.

## The 3 Pillars

1. **Coverage** — Cast a wide net (multi-source)
2. **Enrichment** — Add context & intelligence
3. **Precision** — Filter & prioritize

---

## The 8-Phase Framework

| Phase | What You Do | Key Outcome |
|---|---|---|
| 1. Define ICP | Firmographics, technographics, signals, psychographics | Targeting criteria |
| 2. Company Discovery | Multi-source search (Clay + Apollo + LinkedIn + more) | Raw company list (80–90% TAM coverage) |
| 3. Company Enrichment & Scoring | Validate firmographics, add signals, tier A/B/C | Prioritized company list |
| 4. People Discovery | Multi-source people search at tiered companies | Raw contact list |
| 5. Contact Enrichment & Validation | Email waterfalls, phone waterfalls, LinkedIn URLs | Verified contact data |
| 6. Deduplication | Dedupe at company level (domain) AND people level (email/name) | Clean, no-duplicate list |
| 7. Personalization & Segmentation | Segment by industry/size/persona/signal, add AI icebreakers | Campaign-ready segments |
| 8. Activation | Push to CRM, sequencer, or export | Outreach launched |

For detailed walkthroughs of each phase, see [list-building-deep-dives.md](list-building-deep-dives.md).
For industry-specific directories to scrape, see [list-building-directories.md](list-building-directories.md).
For the full 62 data sources table, see [list-building-data-sources.md](list-building-data-sources.md).

---

## Golden Rules

1. **Multi-source everything.** One provider = 50–60% coverage. Two providers = 80–90%. The math is simple.
2. **Enrich before you reach out.** Raw lists convert at 1–2%. Enriched, scored, personalized lists convert at 5–15%.
3. **Dedupe religiously.** Duplicates kill deliverability and credibility. Always dedupe at company AND people level.
4. **Validate emails.** 30–40% of emails in databases are invalid. Validation saves your sender reputation.
5. **Personalization at scale.** Use AI to personalize, but always based on real data points (not generic fluff).
6. **Test & iterate.** Track which sources give best data, which enrichments correlate with conversions, which segments perform best.

---

## Phase 1: ICP (Ideal Customer Profile)

### Why It Matters

- Right-fit companies convert **3–5x higher** than spray-and-pray
- Shortens sales cycles (they have the pain, budget, authority)
- Improves retention (ICP-fit customers churn less)

**"Our product works for everyone!" = the mistake most beginners make.**

### The 4-Layer Framework

| Layer | What It Covers | Example Criteria |
|---|---|---|
| **Firmographics** | Industry, size, revenue, location, funding stage | B2B SaaS, 100–500 employees, $10M–$50M ARR, Series A-B |
| **Technographics** | Tech stack, tools, platforms | Uses Salesforce + Outreach/SalesLoft, has marketing automation |
| **Behavioral Signals** | Hiring, funding, expansion, leadership changes | Recently raised Series B, hiring RevOps, expanding to EU |
| **Psychographics** | Growth mindset, innovation vs stability, data-driven culture | Hypergrowth, early adopter, customer-centric |

### ICP Scoring System

Build a formula column in Clay:

| Criteria | Points |
|---|---|
| Right industry | +20 |
| Right company size | +20 |
| Right revenue range | +15 |
| Uses key tech | +15 |
| Recent funding | +10 |
| Hiring for relevant role | +10 |
| Target location | +10 |

**Tiers:**
- **A-tier (80–100):** Perfect fit, prioritize
- **B-tier (60–79):** Good fit, pursue
- **C-tier (40–59):** Okay fit, nurture
- **D-tier (<40):** Poor fit, disqualify

### ICP Document Template

**Must-Haves (Non-negotiable):**
- Industry: [X, Y, Z]
- Company size: [X–Y employees]
- Revenue: [$X–$Y]
- Location: [Regions]
- Tech stack: [Must use X tool]

**Nice-to-Haves (Bonus):**
- Funding stage, hiring signals, complementary tools

**Disqualifiers (Anti-ICP):**
- Too small, wrong industry, wrong tech stack

For the full ICP deep dive (how to build, examples, common mistakes), see [list-building-deep-dives.md](list-building-deep-dives.md).

---

## Phase 2: Multi-Source Company Discovery

### The Coverage Problem

| Strategy | Coverage | Companies Found (out of 10K TAM) |
|---|---|---|
| Single source | ~60% | 6,000 |
| Two sources | ~85% | 8,500 |
| Three sources | ~92% | 9,200 |

**Two sources = 42% more companies than one.**

### Source Selection Matrix

| Your ICP | Primary | Secondary | Tertiary |
|---|---|---|---|
| Tech/SaaS (US/EU) | Clay Find Companies | Apollo | LinkedIn Sales Nav |
| Enterprise (Fortune 500) | ZoomInfo | LinkedIn Sales Nav | Apollo |
| Startups (funded) | Crunchbase | Clay Find Companies | LinkedIn Sales Nav |
| International (Asia, LATAM) | Apollo | LinkedIn Sales Nav | Local directories |
| Non-tech (Manufacturing, Retail) | Apollo | LinkedIn Sales Nav | Industry directories |
| Niche markets | Web scraping/Claygent | Apollo | Industry associations |

### Primary Sources

**Clay Find Companies**
- Best for: Tech/SaaS, US/EU, technographic filtering
- 60M+ companies, built into Clay
- Weakness: weaker in Asia/LATAM, traditional/offline businesses

**Apollo**
- Best for: Broad coverage, international, non-tech industries
- 250M+ contacts, 60M+ companies
- Export: CSV → import to Clay
- Free tier: 50 exports/month

**LinkedIn Sales Navigator**
- Best for: Most current data, growth signals (headcount growth, hiring, recent posts)
- Unique filters not available elsewhere
- Export via Phantombuster, Evaboot, or manually
- $99–$149/month

### Specialized Sources

- **ZoomInfo** — enterprise, high-accuracy ($15K–$30K/year)
- **Crunchbase** — funded startups, recent funding rounds ($29–$99/month)
- **Web Scraping / Claygent** — niche directories, association lists, conference attendees
- **Your CRM** — closed-lost (6+ months = gold), churned, upsell

### Alternative Discovery Methods

**Local Prospecting** (when targets don't show up in B2B databases):
- **Openmart** — US-based local businesses
- **Google Maps scraping via Clay** — any niche with physical presence
- Import → Clay → enrich

**Directory Scraping:**
- Use Instant Data Scraper (Chrome extension)
- Export CSV → import to Clay → enrich
- See [list-building-directories.md](list-building-directories.md) for industry-specific sources

**TAM Scoping via DiscoLike:**
- Discovers lookalike websites based on keywords/tech tags
- Not limited to LinkedIn data
- Good when Apollo/Clay/LinkedIn fail
- ~1 credit per row to qualify
- Filter by country, language, similarity variance, company start date

---

## Phase 3: Company Enrichment & Scoring

**Must-have enrichments:**
- Firmographics validation (employee count, revenue, location)
- Technographics (tech stack = shows budget and sophistication)
- Funding/financials (recent funding = budget to spend)
- Hiring signals (hiring for roles related to your solution = active need)
- News/triggers (expansion, leadership changes, product launches)

**Then tier/score:** A-tier → B-tier → C-tier using formulas or AI in Clay.

---

## Phase 4: People Discovery

Multi-source again:
1. **Apollo People Search** — good coverage, job title filtering
2. **Clay's Find People** — different data set, finds people Apollo misses (and vice versa)
3. **LinkedIn scraping** — most current, slower/more expensive, harder to scrape over time
4. **Waterfall approach** — try multiple sources per company to maximize contact discovery

---

## Phase 5: Contact Enrichment & Validation

**Email waterfalls** (3–5 providers):
- LeadMagic, Prospeo, Findymail, etc.
- Personal emails first, catch-all/generic as fallback
- Validation to remove bounces

**Phone waterfalls** (if cold calling):
- Direct dials, mobile numbers
- Multiple providers for coverage

**Personalization data:**
- Recent job changes, education, location, interests
- Company news, recent posts, mutual connections

See [Clay's data provider tests](https://www.clay.com/data-tests) for provider performance by region.

---

## Phase 6: Deduplication (Critical)

Dedupe at **two levels:**

1. **Company level** — dedupe by domain before finding people
2. **People level** — dedupe by email (or full name to save credits, accepting small risk of false deduplication)

**Why:** Duplicate outreach = spam = blacklisted domain. Never skip this.

**Sequencer safeguard:** Most tools (Instantly, Smartlead, HeyReach, Lemlist) have "Skip lead if in Workspace" toggle — use it as a safety net, not a replacement for proper deduplication.

---

## Phase 7: Personalization & Segmentation

**Segment by:**
- Industry (different messaging)
- Company size (different pain points)
- Persona (different value props)
- Trigger/signal (different hooks)

**Add personalization columns:**
- AI-generated icebreakers referencing recent news, posts, achievements
- Custom first lines based on tech stack, hiring signals
- Relevant case studies/social proof from their industry

---

## Phase 8: Activation

**Options:**
- **CRM sync** — push to Salesforce, HubSpot (with deduplication)
- **Sequencer** — Instantly, Smartlead, Lemlist, Outreach
- **Manual export** — CSV for one-off campaigns
- **Clay campaigns** — send directly from Clay

**Conditional logic:** Only push A-tier to expensive sequences, B-tier to nurture, C-tier to content campaigns.

---

## Common Mistakes

- Using only one data source (leaving 40% of TAM on the table)
- Skipping enrichment (raw data = low conversion)
- No deduplication (kills deliverability)
- Generic personalization ("I saw you work in tech" is not personalization)
- Not validating emails (bounces destroy sender reputation)
- Treating all leads equally (tier and prioritize)
- Building lists without a clear ICP (garbage in = garbage out)
- Static ICP (revisit quarterly based on what actually converts)
- Ignoring anti-ICP (knowing who NOT to target is equally important)

---

## Key Principle

List building is not a one-time task — it's an ongoing system. The best teams:
- Refresh lists monthly (data decays ~30% per year)
- Continuously test new data sources
- Refine ICP based on what actually converts
- Build feedback loops from sales to improve targeting

---

> **Built by [ColdIQ](https://www.coldiq.com) & [Ivan Falco](https://www.linkedin.com/in/ivanfalco/en/).** For questions on implementation or anything not covered here, reach out to Ivan directly on [LinkedIn](https://www.linkedin.com/in/ivanfalco/en/).
