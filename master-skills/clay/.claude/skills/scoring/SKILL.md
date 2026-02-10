---
name: scoring
description: Build lead scoring systems in Clay using formulas and enrichment data. Use when the user asks about lead scoring, ICP fit scoring, segmentation, lead qualification, tier assignment, prioritizing leads, or building a 100-point scoring model. Triggers on "lead scoring", "scoring system", "ICP fit", "segmentation", "lead qualification", "tier assignment", "prioritize leads", "score leads", "qualify leads", "lead score". Do NOT use for enrichment setup, email finding, or general data manipulation without scoring context.
---

# Lead Scoring

You help users build lead scoring systems in Clay using formulas and enrichment data to prioritize outreach.

## Reference

Read `clay/resources/templates/clay-enrichment-workflows.md` for the scoring framework (Step 8 of the 9-step pipeline).

## 100-Point Scoring Model

| Component | Points | What It Measures |
|----------|--------|-----------------|
| Company size match | 25 pts | Employee count fits ICP range |
| Recent signals | 25 pts | Job changes, funding, hiring, tech adoption |
| Email deliverability | 25 pts | Valid email, low bounce risk |
| ICP fit | 25 pts | Industry, revenue, tech stack match |

## Tier Assignment

| Tier | Score | Action |
|------|-------|--------|
| Tier 1 | 80-100 | Immediate outreach, phone + email |
| Tier 2 | 60-79 | Nurture sequence, email only |
| Tier 3 | <60 | Long-term nurture or discard |

## Building the Score in Clay

Use formula columns (0 credits) to calculate each component:

```javascript
// Company size score (25 pts)
let sizeScore = 0;
let emp = {{employee_count}} || 0;
if (emp >= 50 && emp <= 500) sizeScore = 25;      // Sweet spot
else if (emp >= 20 && emp < 50) sizeScore = 15;    // Acceptable
else if (emp > 500 && emp <= 2000) sizeScore = 15; // Acceptable
else sizeScore = 5;                                 // Poor fit

// ICP fit score (25 pts)
let icpScore = 0;
if ({{industry}} == "SaaS" || {{industry}} == "Software") icpScore += 15;
if ({{revenue}} > 5000000) icpScore += 10;

// Signal score (25 pts)
let signalScore = 0;
if ({{recent_funding}} && {{recent_funding}} != "purple") signalScore += 10;
if ({{job_change_90d}} == "true") signalScore += 10;
if ({{hiring_signals}} == "true") signalScore += 5;

// Deliverability score (25 pts)
let delivScore = 0;
if ({{email_validation}} == "valid") delivScore = 25;
else if ({{email_validation}} == "catchall valid") delivScore = 15;
else delivScore = 0;

// Total
sizeScore + icpScore + signalScore + delivScore
```

## Segmentation Formula (Tier Assignment)

```javascript
let score = {{lead_score}} || 0;
score >= 80 ? "Tier 1 - Immediate" : score >= 60 ? "Tier 2 - Nurture" : "Tier 3 - Long-term"
```

## Customizing for Your ICP

Before building, define:
1. **Ideal company size range** (e.g., 50-500 employees)
2. **Target industries** (e.g., SaaS, FinTech, Healthcare)
3. **Minimum revenue** (e.g., $5M ARR)
4. **Must-have signals** (e.g., recent funding, hiring for your target role)
5. **Required tech stack** (e.g., uses Salesforce, runs on AWS)

Adjust point values based on what matters most to your sales team.

## Credit Cost

- Scoring itself: 0 credits (all formulas)
- Data needed for scoring: depends on enrichments run upstream
- Scoring should be the LAST step, after all enrichment is complete

## Examples

**Example 1:** "I want to score 5,000 leads before pushing to my sequencer"
--> Build 4 formula columns (size, ICP, signals, deliverability). Sum into total_score. Add tier formula. Conditional CRM push: only Tier 1 + Tier 2. Cost: 0 credits for scoring itself.

**Example 2:** "My scoring is too simple -- I only use company size"
--> Add signal-based scoring: Claygent for funding (2 credits), job change detection via LinkedIn (2 credits), hiring signals via careers page (1 credit). Feed all into scoring formula. Adds ~5 credits per row but dramatically improves prioritization.

**Example 3:** "How do I adjust scoring for different campaigns?"
--> Create separate scoring columns per campaign. ABM campaign: weight company fit 40pts, signals 30pts, deliverability 20pts, size 10pts. Outbound campaign: weight deliverability 30pts, size 25pts, ICP 25pts, signals 20pts. Use views to filter by each campaign's tier.
