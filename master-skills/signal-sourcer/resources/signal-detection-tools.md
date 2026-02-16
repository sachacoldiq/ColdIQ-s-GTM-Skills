# Signal Detection Tools & Freshness Rules

## 30 Sales Triggers — Quick Reference with Detection Tools

### 1. Funding & Financial Signals

| # | Trigger | Detection Tool | Timing Window | Clay Credits |
|---|---------|---------------|---------------|-------------|
| 1 | Series A+ Funding | Crunchbase, PredictLeads, Owler, PitchBook | 0-90 days | 1 (Intellizence) |
| 2 | Revenue Milestone | News monitoring, Serper | 30-60 days | 0 (Serper API) |
| 3 | IPO Filing/Preparation | SEC filings, Crunchbase | 60-180 days | 1 |
| 4 | M&A Activity | Crunchbase, PredictLeads, News | 30-90 days | 1 |
| 5 | New Investment Round | Clay + Intellizence | 0-60 days | 1 |

### 2. Hiring & Team Changes

| # | Trigger | Detection Tool | Timing Window | Clay Credits |
|---|---------|---------------|---------------|-------------|
| 6 | New Executive Hire | LinkedIn (Clay/Lima Data), Sales Nav | Days 14-30 | 1 |
| 7 | Hiring Surge (5+ roles) | LinkedIn Jobs, PredictLeads, Clay | 30-90 days | 1 |
| 8 | SDR/BDR Hiring | LinkedIn, PredictLeads | 14-60 days | 1 |
| 9 | Department Expansion | LinkedIn headcount data | 30-90 days | 1 |
| 10 | Champion Job Change | Clay, LoneScale, Champify | 0-30 days | 1-2 |

### 3. Technology & Digital Signals

| # | Trigger | Detection Tool | Timing Window | Clay Credits |
|---|---------|---------------|---------------|-------------|
| 11 | New Tech Adoption | BuiltWith, HG Insights, TheirStack | 30-90 days | 0 (Claygent) |
| 12 | Tech Stack Removal | BuiltWith, HG Insights | 0-30 days | 0 (Claygent) |
| 13 | Website Redesign | Claygent + web scrape | 30-60 days | 1-2 |
| 14 | New Product Launch | News, Serper, Company blog | 14-60 days | 0 (Serper API) |
| 15 | Running LinkedIn Ads | Serper API | Active = active budget | 0 (Serper API) |

### 4. Competitive & Vendor Intelligence

| # | Trigger | Detection Tool | Timing Window | Clay Credits |
|---|---------|---------------|---------------|-------------|
| 16 | Negative G2/Capterra Reviews | Zenrows + G2/Capterra | 0-90 days | 3 |
| 17 | Competitor Contract Expiry | PredictLeads, intent data | 60-90 days before renewal | 1 |
| 18 | Competitor Downgrade/Churn | BuiltWith (tech removal) | 0-30 days | 0 (Claygent) |
| 19 | Pricing Page Visits | RB2B, Common Room, Vector | 0-7 days | Varies |
| 20 | Comparison Shopping | G2 buyer intent, 6sense | 7-30 days | 3 |

### 5. Product & Business Events

| # | Trigger | Detection Tool | Timing Window | Clay Credits |
|---|---------|---------------|---------------|-------------|
| 21 | Geographic Expansion | News, LinkedIn, PredictLeads | 30-90 days | 0-1 |
| 22 | New Office/Location | News, Google Maps | 30-90 days | 0 (Serper API) |
| 23 | Regulatory Change Impact | Industry news, Serper | 0-60 days | 0 (Serper API) |
| 24 | Conference/Event Attendance | Event sites, LinkedIn, scraping | -14 to +7 days | 0-1 |
| 25 | Partnership Announcement | News, LinkedIn posts | 14-60 days | 0 (Serper API) |

### 6. Marketing & Reputation Signals

| # | Trigger | Detection Tool | Timing Window | Clay Credits |
|---|---------|---------------|---------------|-------------|
| 26 | LinkedIn Post Engagement | Clay, Trigify, Teamfluence | 0-7 days | 1 |
| 27 | Content Topic Shift | Company blog monitoring | 30-60 days | 0 (Claygent) |
| 28 | Award/Recognition | News, Serper | 14-30 days | 0 (Serper API) |
| 29 | PR/Media Mention | Serper, Google News | 7-30 days | 0 (Serper API) |
| 30 | Community Engagement | PhantomBuster, Clay | 0-14 days | 1-2 |

---

## Signal Freshness Rules

| Signal Type | Fresh Until | Optimal Outreach Window | Decay Rate |
|-------------|-------------|------------------------|------------|
| Champion job change | 30 days | 0-14 days | Fastest — act immediately |
| LinkedIn post engagement | 30 days | 0-7 days | Fast |
| Pricing page visits | 7 days | 0-3 days | Very fast |
| Conference/event | 21 days | -7 to +7 days around event | Fast |
| Tech stack change | 60 days | 0-30 days | Moderate |
| New executive hire | 90 days | Days 14-30 (first 90 days open to ideas) | Moderate |
| Hiring activity | 60 days | 14-30 days | Moderate |
| Funding news | 90 days | Weeks 2-8 post-announcement | Moderate |
| Series C deployment | 180 days | Weeks 5-12 (budget allocation phase) | Slow |
| G2/review activity | 90 days | 0-30 days | Moderate |
| Negative competitor reviews | 180 days | 0-60 days | Slow |
| Company news/PR | 30 days | 7-30 days | Moderate |
| Regulatory change | 60 days | 0-60 days | Moderate |

### Freshness Rules for Outreach
- **If signal is within optimal window** → Prioritize, reference directly
- **If signal is fresh but past optimal** → Use as context, don't lead with it
- **If signal is expired** → Drop from signal-based messaging, revert to ICP-based

---

## Signal Reliability Tiers

### Tier 1 — Highest Intent (Same-day outreach)
- Funding announcement (Series A+)
- Expansion into new market/geography
- Leadership change in buyer's department
- **= Budget is approved or about to be. Act fast.**

### Tier 2 — Strong Intent (30-90 day window)
- Competitor tech adoption/removal
- Partnership or acquisition announcement
- Hiring surge in relevant department (5+ roles)
- **= Investment is happening. Timing window is 30-90 days.**

### Tier 3 — Moderate Intent (Nurture sequence)
- Job postings (1-3 roles)
- Industry award or recognition
- Product launch or feature release
- **= Activity is there, but intent is less urgent.**

### Tier 4 — Weak Intent (Context only)
- Social media activity
- Website traffic spikes
- General news mentions
- **= Interesting context. Not a trigger on its own.**

---

## Signal Sources by Data Party

### 1st-Party (Your Own Data) — Strongest
| Source Type | Tools |
|-----------|-------|
| CRM | HubSpot, Salesforce, Attio |
| Product usage | Mixpanel, Amplitude, Intercom |
| Meeting forms | Chili Piper, Default, Calendly |
| Gated content | Webflow, Distribute, Gamma |
| Marketing sequences | beehiiv, customer.io, Kit |
| Website visitors | Common Room, RB2B, Vector |

### 2nd-Party (Partner Data) — Strong
| Source Type | Tools |
|-----------|-------|
| Partner signals | Crossbeam, PartnerStack |
| Warm intros | LinkedIn, The Swarm, Commsor |
| Review sites | G2, Capterra |
| Champion moves | Clay, LoneScale, Champify |
| Ad insights | ZenABM, Fibbler, Vector |
| LinkedIn engagement | Clay, Teamfluence, Trigify |

### 3rd-Party (Public Data) — Moderate to Strong
| Source Type | Tools |
|-----------|-------|
| Technographic | BuiltWith, HG Insights, TheirStack |
| Job openings | Clay, PredictLeads |
| Firmographic | Apollo, Amplemarket, Cognism |
| People data | Sales Nav, Clay |
| Web data | Clay, Apify, Zenrows |
| Social | Clay, PhantomBuster, Trigify |
| Funding | Crunchbase, Owler, PitchBook |

---

## Cost Optimization for Signal Detection

| Signal | Cheapest Detection | Credits |
|--------|-------------------|---------|
| News/PR | Serper API | 0 |
| LinkedIn Ads active | Serper API | 0 |
| Tech stack | Claygent + BuiltWith URL | 0 |
| Company data | LinkedIn enrichment | 1 |
| Hiring data | LinkedIn, PredictLeads | 1 |
| Headcount growth | LinkedIn | 1 |
| Funding | Intellizence | 1 |
| G2/Capterra reviews | Zenrows | 3 |

**Rule:** Use 0-credit tools (Serper, Claygent) for initial signal detection. Only spend 1-3 credit tools on accounts that pass initial qualification.
