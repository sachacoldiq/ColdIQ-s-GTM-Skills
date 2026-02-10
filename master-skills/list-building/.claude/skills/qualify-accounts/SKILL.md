---
name: qualify-accounts
description: Qualify and score target accounts using ICP scoring matrices, ABM tier assignment, intent data layering, and lookalike building. Use when user asks about "qualify accounts", "score accounts", "ABM tiers", "account-based marketing", "intent data", "lookalike accounts", "prioritize accounts", "tier 1 accounts", "account scoring". Do NOT use for initial ICP definition (use define-icp) or finding contacts at accounts (use find-contacts).
---

# Qualify Accounts — Sub-Skill

You help users score, qualify, and prioritize target accounts using ABM tier frameworks and intent data. Always read the reference file before responding.

## Reference

Read `list-building/resources/sales-navigator-guide.md` — sections: ICP Scoring, Scoring Matrix, ABM List Building, Intent Data Layering, Lookalike Building.

## ABM Tier Structure

| Tier | Accounts | Approach | Resources |
|------|----------|----------|-----------|
| **Tier 1 (1:1)** | 10-50 | Fully custom, multi-threaded | Maximum — custom content, executive outreach, direct mail |
| **Tier 2 (1:Few)** | 50-200 | Segment-based personalization | Medium — industry/persona templates, targeted ads |
| **Tier 3 (1:Many)** | 200-1,000 | Programmatic, automated | Low — automated sequences, broad messaging |

## Account Scoring Process

1. **Apply ICP scoring matrix** (100-point system from define-icp)
2. **Layer intent data** to adjust scores dynamically
3. **Assign ABM tier** based on final score
4. **Map contacts per account** (Economic Buyer, Champion, Technical Evaluator, End User, Blocker, Coach)

## Intent Data Layers

| Layer | Sources | Signal Strength |
|-------|---------|----------------|
| **First-party** | Website visits, pricing page views, content downloads, webinar attendance | Strongest |
| **Second-party** | G2 Buyer Intent, TrustRadius, Capterra reviews/comparisons | Strong |
| **Third-party** | Bombora, 6sense, ZoomInfo Intent, TechTarget | Moderate |
| **LinkedIn-native** | Buyer Intent signals, ad engagement, page followers | Moderate |

**Scoring adjustment:** Add 10-20 points for strong first-party intent. Add 5-10 for second/third-party. An account scoring 65 (Tier C) with strong first-party intent jumps to 75-85 (Tier B).

## Lookalike Building

1. Export top 10-20 customers (by revenue, LTV, or NPS)
2. Analyze common attributes: industry, size, geography, tech stack, growth stage
3. Build lookalike search in Sales Navigator matching those attributes
4. Use "Similar Companies" feature on company pages
5. External tools: Ocean.io, Clearbit, Apollo.io, Clay

## Contact Mapping Per Account

| Role | Typical Titles | Purpose |
|------|---------------|---------|
| Economic Buyer | CEO, CFO, VP | Final budget approval |
| Champion | Director, Head of | Internal advocate |
| Technical Evaluator | Manager, Architect | Technical fit assessment |
| End User | Analyst, Specialist | Daily product user |
| Blocker | Legal, Compliance | Can slow or stop deal |
| Coach | Any level | Provides insider information |

## Examples

**Example 1:** "I have 500 companies, how do I prioritize them?"
-> Apply ICP scoring matrix across all 500. Sort by score. Top 10-50 (Tier A, 90+ pts) = Tier 1 ABM with custom outreach. Next 50-150 (Tier B, 70-89) = Tier 2 with segment-based sequences. Remaining (Tier C, 50-69) = Tier 3 automated. Below 50 = exclude. Layer intent data from G2/Bombora to re-rank.

**Example 2:** "How do I build a lookalike list from my best customers?"
-> Export top 20 customers by ARR. Identify patterns: e.g., all are SaaS, 100-500 employees, US-based, using HubSpot, Series A-C funded. Build Sales Nav search matching these attributes. Use Ocean.io for automated lookalike expansion. Score new accounts against the same matrix.

**Example 3:** "We want to do ABM for enterprise accounts"
-> Select 20-30 Tier 1 accounts scoring 90+. Map 5-6 contacts per account (buying committee). Layer first-party intent (website visits) + third-party (Bombora topics). Create custom landing pages per account. Multi-channel: LinkedIn + email + direct mail + ads.
