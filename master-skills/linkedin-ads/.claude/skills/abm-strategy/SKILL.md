---
name: abm-strategy
description: LinkedIn Ads ABM strategy including campaign structure, budget math, ad formats for ABM, and ads-to-outbound signaling. Use when the user asks about LinkedIn Ads for ABM, ABM ad budget math, ABM campaign structure, how many ads to run, intent-based campaign naming, ad engagement as BDR triggers, signal pipeline from ads to sales, or ABM-specific ad performance benchmarks. Triggers on "ABM ads", "ABM budget", "ABM campaign structure", "LinkedIn ABM", "how many ads", "ad budget math", "ads to outbound", "ad engagement triggers", "BDR trigger from ads", "intent signals from ads", "ABM ad formats", "ads signaling", "ZenABM", "Fibbler", "ads outbound signaling", "inbound-led outbound". Do NOT use for general LinkedIn targeting (use audiences) or general ad copy (use copy).
---

# LinkedIn Ads ABM Strategy

You help users design and execute LinkedIn Ads campaigns specifically for ABM, including budget math, campaign structure, and ads-to-outbound signaling.

## Reference

Read these resources based on the user's question:

- **ABM campaign structure, budget math, ad formats, benchmarks** → Read `linkedin-ads/references/abm/linkedin-ads-abm-guide.md`
- **Ads-to-outbound signaling, intent detection, BDR triggers** → Read `linkedin-ads/references/abm/ads-outbound-signaling-guide.md`

## Critical Budget Math Formula

Monthly Budget / 30 / (Avg CPC x 4 clicks) = Maximum Effective Ads

- Each ad needs 3-4 clicks/day to generate meaningful data
- Example: $10K/month budget = ~10 effective ads, NOT 50
- Spreading budget too thin = no ad gets enough data

## Ad Format Performance for ABM

| Format | CTR | CPC | Best For |
|--------|-----|-----|----------|
| Single Image | 0.35-0.45% | $8-19 | Workhorse, all stages |
| TLA (Thought Leader Ads) | 4.42% | $68 | Awareness, events |
| Carousel | Variable | Variable | Multi-point storytelling |
| Video | Variable | Variable | Brand awareness |
| Document | Variable | Variable | Educational content |

## Campaign Structure (By Intent, Not Persona)

Structure campaigns by intent to avoid audience fragmentation:
- **COLD layer** (Identified/Aware): Awareness + education content
- **WARM layer** (Interested/Considering): Case studies + conversion CTAs

## Ads → Outbound Signaling Pipeline

```
LinkedIn Campaign Manager → ZenABM/Fibbler → HubSpot properties → Active Lists → BDR alerts → Personalized outreach
```

### Signal Types
- **Quantitative:** Impressions, clicks, engagements → stage progression
- **Qualitative:** Which specific campaigns engaged → intent detection

### BDR Trigger Threshold
"Interested" stage (5+ clicks OR 10+ engagements) — NOT "Aware"

### Multi-Touch Sequence After Trigger
- Day 1: Email (reference JTBD/topic, not channel)
- Day 1-2: LinkedIn connection
- Day 3-5: LinkedIn message
- Day 5-7: Follow-up email
- Day 7-10: Phone

## Performance Targets

- $10+ pipeline per $1 ad spend
- 55% stage progression benchmarks
- Team: 4-5 FTE minimum (ABM Manager, Marketing Ops, Designer, Performance Manager, PMM)

## Examples

**Example 1:** "I have $10K/month for LinkedIn ABM, how should I structure it?"
→ Read linkedin-ads-abm-guide.md. Budget math: ~10 effective ads max. Split COLD/WARM. Recommend 50-100 target accounts.

**Example 2:** "How do I use ad engagement to trigger BDR outreach?"
→ Read ads-outbound-signaling-guide.md. Set up ZenABM/Fibbler → HubSpot pipeline. Define "Interested" threshold. Build BDR alert workflows.

**Example 3:** "Should I structure ABM campaigns by persona or by intent?"
→ By intent, not persona. Persona-based structure fragments audience and dilutes budget. Use company list + native LinkedIn filters for persona targeting within intent-based campaigns.
