---
name: linkedin-ads-measurement
description: Set up LinkedIn Ads measurement, attribution, KPIs, and conversion tracking. Use when the user asks about LinkedIn ads attribution, conversion tracking, LinkedIn Insight Tag, campaign KPIs, LinkedIn ads ROI, pipeline attribution, self-reported attribution, or how to measure LinkedIn Ads success. Triggers on "LinkedIn attribution", "conversion tracking", "Insight Tag", "campaign KPIs", "LinkedIn ROI", "pipeline attribution", "measure LinkedIn ads", "LinkedIn CAPI", "self-reported attribution". Do NOT use for bidding/budget (use bidding) or campaign structure (use campaign-setup).
---

# LinkedIn Ads Measurement & Attribution

You set up comprehensive measurement and attribution for LinkedIn Ads campaigns.

## Instructions

1. Install LinkedIn Insight Tag + Conversion API
2. Set up CRM integration for revenue attribution
3. Configure UTM parameters with LinkedIn dynamic UTMs
4. Add self-reported attribution ("How did you hear about us?")
5. Define KPIs per funnel layer
6. Measure quarterly, not weekly

## Reference

For measurement framework, attribution stack, and business metrics → Read `linkedin-ads/references/measurement-attribution.md`
For campaign health indicators and benchmarks → Read `linkedin-ads/references/benchmarks.md`

## Core Equation

**Reach x Relevance x Engagement = Pipeline Uplift**

## KPIs by Funnel Layer

| Layer | KPIs |
|-------|------|
| **Top (Cold)** | Impressions, engagement rate, cost per engagement, video views |
| **Middle (Warm)** | CTR, engaged website visits, retargeting pool size |
| **Bottom (Hot)** | Cost per demo, cost per SQL, cost per opportunity, pipe-to-spend ratio |

## Attribution Stack

1. **LinkedIn Insight Tag** — demographics, retargeting, conversion tracking
2. **LinkedIn Conversion API** — server-side, bypasses ad blockers
3. **CRM integration** (HubSpot, Salesforce) for revenue attribution
4. **UTM parameters** with LinkedIn dynamic UTM feature
5. **Self-reported attribution** — "How did you hear about us?" on high-intent forms

## Attribution Reality

- Only **20-30%** of LinkedIn-driven conversions are captured
- **90%+** impact occurs without clickthrough (invisible engagement)
- **83%** impressions on mobile, **72%** conversions on desktop (cross-device gap)
- Average B2B deal involves **6-10** decision-makers across channels

## Key Principles

- **Measure quarterly, not weekly** — B2B cycles require 3-6 month windows
- **Self-reported attribution is essential** — captures what platform data misses
- **Set up 90-day click/view windows** for duplicate conversion events
- **Brand search uplift** is a strong indicator of LinkedIn Ads impact
- **Compare multiple data sources** — no single source tells the full story

## Examples

Example 1: "How do I measure LinkedIn Ads ROI?"
→ Set up attribution stack (Insight Tag + CAPI + CRM + self-reported). Define KPIs per funnel layer. Measure quarterly with pipeline attribution.

Example 2: "My LinkedIn Ads show no conversions"
→ Explain attribution gap (only 20-30% captured). Check Insight Tag installation, set up CAPI, add self-reported attribution, review view-through windows.
