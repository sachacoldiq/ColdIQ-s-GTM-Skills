# Qualification Workflow — From Raw List to Campaign-Ready Accounts

## ColdIQ Tier System

### Company Tiers (Apply with Clay AI)

| Tier | Definition | Outreach Timing |
|------|-----------|----------------|
| **Tier 1** | B2B software companies with 40+ headcount (perfect fit) | Immediate, within 30 days |
| **Tier 2** | B2B companies that sell digitally but not software (close fit) | Secondary, 60-90 day window |
| **Tier 3** | Relevant industry but not sweet spot | Nurture, 120+ day horizon |
| **Below Tier 3** | Not a fit | Disqualify |

### Contact Tiers

| Tier | Definition | Effort Level |
|------|-----------|-------------|
| **Tier 1** | C-level, Founders, VPs (decision-makers with budget authority) | White-glove personalization |
| **Tier 2** | Managers, Seniors (influencers who can champion internally) | Solid but scalable sequences |
| **Tier 3** | Associates, Coordinators, Specialists (end users) | Templated, efficient |

### Effort Matching Matrix

| Company Tier | Contact Tier | Approach |
|-------------|-------------|----------|
| Tier 1 | Tier 1 | Deep research, custom angle, multi-channel |
| Tier 1 | Tier 2 | Personalized sequence, routing CTA to find decision-maker |
| Tier 2 | Tier 1 | Solid personalization, focus on value prop |
| Tier 2 | Tier 2 | Segment-level personalization |
| Tier 3 | Any | Templated, minimal effort |

---

## Clay AI Prompts for Tiering

### Company Qualification Prompt
```
You are qualifying companies for a B2B outbound campaign. Based on the company information provided, assign a tier:

Tier 1: B2B software companies with 40+ headcount that sell to other businesses
Tier 2: B2B companies that sell digitally but are not software companies
Tier 3: Companies in a relevant industry but not our ideal fit

Company: {{Company Name}}
Industry: {{Industry}}
Employee Count: {{Employee Count}}
Description: {{Company Description}}

Return ONLY: "Tier 1", "Tier 2", or "Tier 3" followed by a one-sentence reason.
```

### Contact Qualification Prompt
```
Based on the following job title, assign a seniority tier:

Tier 1: C-level, VP, Founder, Head of, Director (decision-makers with budget authority)
Tier 2: Manager, Senior (influencers who can champion internally)
Tier 3: Associate, Coordinator, Specialist (end users, not decision-makers)

Title: {{Title}}

Return ONLY: "Tier 1", "Tier 2", or "Tier 3"
```

---

## Weighted ICP Scoring

Score each company on a 1-10 scale across 6 dimensions:

| Dimension | Weight | What to Score |
|-----------|--------|-------------|
| Industry fit | 25% | Does their industry match your ICP? |
| Company size match | 20% | Employee count within target range? |
| Revenue/funding alignment | 20% | Revenue or funding stage match? |
| Growth signals present | 15% | Hiring, funding, expansion signals? |
| Tech stack fit | 10% | Using relevant/complementary tech? |
| Geographic fit | 10% | In target geography? |

### Tiered Prioritization from Score

| Score | Tier | Action |
|-------|------|--------|
| 8-10 | Tier 1 | Immediate outreach, 2-4 contacts per account |
| 6-7.9 | Tier 2 | Secondary priority, 1-2 contacts |
| 4-5.9 | Tier 3 | Nurture sequence only |
| Below 4 | Disqualify | Remove from list |

---

## 4-Step Qualification Workflow

### Step 1: Hard Filters (Remove Immediately)
- Wrong industry/vertical
- Too small (<20 employees) or too large (>10,000)
- Wrong geography
- Agencies, competitors, existing clients/pipeline

### Step 2: ICP Scoring
Apply weighted scoring (above) using Clay AI or formula columns.

### Step 3: Tiered Prioritization
Assign tiers based on scores. Focus resources on Tier 1 first.

### Step 4: Contact Mapping
For Tier 1 accounts, find 2-4 contacts per company:
- Primary decision-maker (VP/C-level)
- End user/champion
- Influencer/internal advocate
- Fallback: routing CTA to find right person

---

## Real Example — DevOps ICP Scoring

| Company | Score | Tier | Rationale | Timing |
|---------|-------|------|-----------|--------|
| Port (Platform Engineering) | 9.5/10 | Tier 1 | Series B, 150 emp, perfect fit | Immediate |
| CAST AI (K8s cost optimization) | 8.8/10 | Tier 1 | Series B, 200 emp, strong fit | Immediate |
| Teleport (Infrastructure access) | 8.2/10 | Tier 1 | Series C, 350 emp, good fit | 30 days |
| Cortex (Developer portal) | 7.8/10 | Tier 2 | Series B, 120 emp, adjacent fit | 60 days |
| Pulumi (Infrastructure as Code) | 7.5/10 | Tier 2 | Series C, 200 emp, adjacent | 60 days |

---

## "Good List" Column Template

A campaign-ready list should include these columns:

```
Company, Domain, Industry, Vertical, Employee Count, Funding Stage,
Funding Amount, Revenue, Contact 1-3 (Name + Title), Tech Stack,
Intent Score, Buying Signals, Trigger Events, Recommended Approach,
Value Prop, Timing Score, Lead Score
```

---

## Source Comparison (Extended)

| Source | Best For | Coverage | Cost |
|--------|----------|----------|------|
| **Apollo** | Volume, broad searches | 275M+ contacts | $$ |
| **Sales Navigator** | Precision, enterprise | High for LinkedIn users | $$$ |
| **Clay Native** | Company/people discovery | Good | Clay credits |
| **Lima Data** | LinkedIn-powered prospecting | High for LinkedIn data | API credits |
| **Ocean.io** | Lookalike companies | Moderate | Per-search |
| **Store Leads** | E-commerce/DTC brands | E-commerce focused | 1 credit |
| **Google Maps (Outscraper)** | Local businesses | Location-based | 0 credits (API) |

### Source Selection by Use Case
- **Broad TAM build (1,000+):** Apollo + Sales Nav (combine for coverage)
- **Precision TAL (50-200):** Sales Nav filters → Clay enrichment → manual QA
- **Lookalike expansion:** Ocean.io from best customers → Clay enrichment
- **E-commerce/DTC:** Store Leads + Meta Ads Library scraper
- **Local businesses:** Google Maps via Outscraper → Clay enrichment

**Rule:** Always use multiple sources. Single source = ~60% TAM. Two sources = ~85%.
