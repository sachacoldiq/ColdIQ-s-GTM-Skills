# LinkedIn Ads for ABM — Guide

Ad formats, budget math, campaign structure, performance benchmarks, and optimization for Account-Based Marketing on LinkedIn.

---

## Why LinkedIn for ABM

- **Best professional targeting:** Filter by company, title, seniority, industry, function — no other platform matches this precision for B2B.
- **Company list targeting:** Upload company lists from CRM → target specific accounts (minimum 300 matched members to run).
- **Persona filtering on company lists:** Push company lists, then use LinkedIn's native filters to target specific personas within those accounts.
- **ABM-native:** LinkedIn is where B2B decision-makers live. Your target accounts are already there.

**Limitation:** Google Display match rates are too low for B2B (nobody uses work emails on Google accounts). LinkedIn is the primary ABM channel. Google Display can supplement via retargeting on a separate no-index landing page domain.

---

## LinkedIn Ad Formats for ABM

### Format Overview and Performance

| Format | CTR | CPC | Best For | ABM Stage |
|---|---|---|---|---|
| **Single Image Ads** | 0.35-0.45% | $8-19 | Highest CTR, lowest CPC. Primary workhorse. | All stages |
| **Thought Leader Ads (TLAs)** | 4.42%* | $68* | Top-of-funnel awareness, events, webinars. *CTR inflated — LinkedIn counts "read more", profile clicks, tags.* | Awareness |
| **Carousel Ads** | Moderate | ~$8-12 | Multi-feature showcases, comparison content | Interested |
| **Video Ads** | 0.28% | $24 | Brand awareness, product demos, case studies | Awareness → Interested |
| **Text Ads** | Very low | Negligible | Cheap brand impressions. Few clicks. | Awareness (background) |
| **DM/Message Ads** | Low | Very expensive | Direct offers. Extremely high CPC. Not recommended for scale. | Considering (sparingly) |
| **Document Ads** | Moderate | Moderate | Lead magnets, guides, reports | Interested |

*Source: ColdIQ — real client ABM data + compiled industry benchmarks*

### Recommended Ad Mix per Campaign

| Ad Type | # of Ads per Campaign | Monthly Budget Needed (@$8 CPC) |
|---|---|---|
| Single Image Ads | 5 | ~$4,800 |
| Thought Leader Ads | 5 | ~$4,800 |
| Carousel Ads | 2 | ~$1,900 |
| Video Ads | 2-3 | ~$2,880 |
| Text Ads | 3-5 | ~$250 |
| **Total per campaign** | **17-20** | **~$14,630** |

---

## The Budget Math (Critical)

### Why Most LinkedIn ABM Campaigns Fail

**Budget dilution.** Too many ads running on too little budget. Each ad never gets enough spend to generate useful data.

### The Formula

```
Monthly Budget ÷ 30 ÷ (Avg CPC × 4 clicks) = Maximum Effective Ads
```

**Example:** $10,000/month ÷ 30 = $333/day. At $8 CPC × 4 clicks = $32/ad/day. Max ads = ~10.

### Budget Per Ad Calculation

| Factor | Value |
|---|---|
| Average CPC | $5-$10 (use $8 as baseline) |
| Minimum clicks per ad per day | 3-4 (to get meaningful data) |
| Cost per ad per day | $24-$32 |
| Cost per 5-ad image campaign per month | ~$4,800 |

### Key Rule

**Each ad needs enough daily spend to generate 3-4 clicks.** Anything below that = slow learning, false positives/negatives, and wasted spend.

### Budget-to-Target Calculation

To generate 107 demos (example):
- Landing page conversion rate: 1%
- CTR: 0.4%
- Impressions needed: ~2,675,000
- At $55 CPM: **~$147,125 budget**
- Add 15-20% margin for error

### Budget Allocation Reality Check

With $10K/month and $8 CPC:
- You can run ONE campaign group effectively (not multiple persona splits)
- Choose: split by persona OR by intent — NOT both
- Focus on one intent group at a time until budget increases

---

## Campaign Structure

### Recommended Structure (Simplified)

**Critical lesson:** Don't split campaigns by persona AND intent simultaneously. You'll run out of budget and hit LinkedIn's minimum audience thresholds.

**Two campaign layers:**

| Layer | Stage | Content Focus | Audience |
|---|---|---|---|
| **COLD** | Identified + Aware | Awareness content, thought leadership, events | Full target account list |
| **WARM** | Interested + Considering | Solution-oriented, case studies, product demos, comparisons | Retargeting audience (engaged accounts) |

### Campaign Group Structure (by Intent)

```
Campaign Group: [Intent Theme] (e.g., "Analytics & Session Replay")
  ├── Campaign 1: Single Image Ads (5 ads)
  ├── Campaign 2: Thought Leader Ads (5 ads)
  ├── Campaign 3: Video Ads (2-3 ads)
  ├── Campaign 4: Carousel Ads (2 ads)
  └── Campaign 5: Text Ads (3-5 ads)
```

Group by **shared intent** rather than persona because:
1. More engagements roll up at campaign-group level → easier to hit LinkedIn's 3-engagement minimum for API data
2. Classic LinkedIn campaigns only contain one asset type → fewer campaigns needed
3. Larger audience per group → less likely to hit 300-member minimum threshold issues

### Stage-Based Content Progression

| Stage | Content Type | Examples |
|---|---|---|
| **Identified/Aware** | Awareness, thought leadership | Industry insights, events/webinars, TLAs from influencers, "did you know" stats |
| **Interested** | Solution-oriented | Feature highlights, comparison content, how-to guides, competitor displacement |
| **Considering** | Product/conversion | Case studies, ROI calculators, product demos, customer testimonials, free trial offers |

### Audience Management Flow

```
HubSpot Company Lists → LinkedIn Campaign Manager
  → LinkedIn native filters for persona targeting
  → ~48 hours for audience to sync
  → Minimum 300 matched members required

As accounts hit engagement thresholds:
  → ZenABM/Fibbler pushes data to HubSpot
  → HubSpot active lists update automatically
  → LinkedIn audiences update (removes from COLD, adds to WARM)
  → Different ads shown automatically
```

---

## LinkedIn Ad Specs (Quick Reference)

### Single Image Ads

| Spec | Requirement |
|---|---|
| **File type** | JPG, PNG, or GIF |
| **File size** | Max 5 MB |
| **Horizontal (1.91:1)** | 1200 × 628 px recommended |
| **Square (1:1)** | 1200 × 1200 px recommended (best for cross-device) |
| **Vertical (4:5)** | 720 × 900 px recommended (best mobile CTR) |
| **Headline** | 70 characters max |
| **Introductory text** | 150 characters max |
| **CTA options** | Apply, Download, Learn More, Sign Up, Register, Request Demo, etc. |

### Composition Rules

- Keep headline and logo in safe central area
- Important content away from edges (feed UI crops/overlays)
- Headline must be readable at thumbnail size
- Images under 401px wide may display as thumbnails

### Ad Copy Best Practices

- **Headline:** Direct benefit or curiosity hook (≤70 chars)
- **Intro text:** Problem → solution framing or social proof (≤150 chars)
- **CTA:** Match to funnel stage (Learn More for awareness, Request Demo for consideration)
- **Visual:** Product screenshots, customer logos, stats, or clean typography
- **Personalization:** Reference the persona's JTBD in the creative

---

## Performance Benchmarks

### LinkedIn Ad Benchmarks (ABM Context)

| Metric | Benchmark | Notes |
|---|---|---|
| **CTR (Single Image)** | 0.35-0.45% | Highest performing format |
| **CTR (Video)** | 0.28% | Good for awareness |
| **CTR (TLA)** | 4.42%* | *Inflated — includes all click types |
| **CPC (Single Image)** | $8-19 | Varies by audience size and competition |
| **CPC (Video)** | $24 | More expensive per click |
| **CPC (TLA)** | $68 | Expensive but drives event signups |
| **CPM** | $55 (typical) | Varies by targeting precision |
| **Pipeline per $ spent** | $10+ | Healthy ABM efficiency target |

### Campaign Efficiency Targets

| Metric | Target | When to Worry |
|---|---|---|
| **Pipeline per $ spent** | $10+ per $1 | Below $5 after 90 days |
| **Accounts progressing Identified → Aware** | 55% | Below 40% |
| **Accounts progressing Aware → Interested** | 32% | Below 20% |
| **Accounts progressing Interested → Considering** | 18% | Below 10% |
| **Weekly stage progression** | Consistent with benchmarks | Flat for 2+ weeks |

### Monitoring Cadence

| Frequency | What to Check |
|---|---|
| **Weekly** | Accounts passing between stages vs. benchmark; ad CTR/CPC; budget pacing |
| **Bi-weekly** | Campaign group performance; adjust ad mix if formats underperform |
| **Monthly** | Pipeline per $ spent; cost per demo; creative refresh needed? |
| **Quarterly** | Full campaign review; ICP refinement; budget reallocation |

---

## Optimization Playbook

### What to Test First

1. **Ad creative** (biggest lever) — test 5+ variations per campaign
2. **Audience refinement** — tighten ICP, exclude non-performers
3. **Offer/CTA** — event invite vs. demo vs. trial vs. content
4. **Ad format mix** — shift budget to best-performing formats

### Common Mistakes

| Mistake | Why It Hurts | Fix |
|---|---|---|
| Too many ads, too little budget | No ad gets enough data | Follow the budget math formula |
| Splitting by persona AND intent | Audiences too small, budget diluted | Choose one dimension per campaign |
| Overcomplicating account scoring | Breaks in practice | Use LinkedIn engagement data only |
| Trusting website de-anonymization | Unreliable (<1% match rate) | Rely on LinkedIn's native engagement data |
| Not setting up a no-index landing page domain | Can't separate ABM traffic from organic | Create separate landing page entity |
| Running DM ads at scale | Extremely expensive CPC | Use sparingly, only for high-value Considering stage |

---

## LinkedIn ABM Tech Stack

| Tool | Function | Cost |
|---|---|---|
| **HubSpot** | CRM, workflows, audience sync to LinkedIn, reporting | Core subscription |
| **LinkedIn Campaign Manager** | Ad management, targeting, delivery | Ad spend |
| **Clay** | List building, enrichment, ICP scoring | Subscription |
| **BuiltWith** | Technographic data (via Clay API) | API credits |
| **Apollo** | Contact discovery, firmographics | Subscription |
| **ZenABM** | LinkedIn engagement → CRM sync, account scoring, ABM stages, intent detection, analytics dashboards | ~$59/mo+ |
| **Fibbler** | LinkedIn engagement → CRM sync (quantitative data) | Lower cost alternative |
| **Factors.ai** | Impression capping, cross-channel attribution | $$ |
| **Notion** | Campaign project management, asset tracking | Subscription |
| **SalesLoft / HubSpot Sales** | BDR outreach sequencing | Subscription |

**Total tool cost (excl. CRM + ad spend):** ~$2,500/month

---

## Team Requirements

Don't start ABM without these roles:

| Role | FTE | What They Do |
|---|---|---|
| **ABM Manager** | 1.0 | Strategy, campaign setup, optimization, reporting |
| **Marketing Ops Manager** | 1.0 | CRM workflows, data sync, audience management, troubleshooting |
| **Graphic Designer** | 0.5-1.0 | Ad creatives, landing pages |
| **Performance/Growth Manager** | 0.5 | Budget management, bidding, LinkedIn Campaign Manager |
| **Head of Marketing** | 0.5-1.0 | Strategy oversight, alignment with sales |
| **Demand Gen / PMM** | 0.5 | Messaging, content strategy, persona JTBDs |

**Minimum:** 4-5 people contributing. The RevOps work is the hardest part.

*Source: ColdIQ*

---

> **Built by [ColdIQ](https://www.coldiq.com) & [Ivan Falco](https://www.linkedin.com/in/ivanfalco/en/).** For questions on implementation or anything not covered here, reach out to Ivan directly on [LinkedIn](https://www.linkedin.com/in/ivanfalco/en/).
