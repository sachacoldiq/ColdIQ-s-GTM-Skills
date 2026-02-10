---
name: funding
description: Funding round signal tracking for B2B outbound. Use when the user asks about funding signals, Series A/B/C detection, post-raise outreach, budget availability triggers, Crunchbase monitoring, or venture capital signals. Do NOT use for general company events (use company-events skill) or hiring that follows funding (use hiring skill).
---

# Funding Signals

Funding rounds are the #5 buying signal by purchase correlation. They indicate new budget availability, board-mandated growth targets, and urgency to scale. Reach out 2-4 weeks after announcement for optimal timing.

## Reference Files

- Read `signal-sourcer/resources/buying-signals.md` for signal ranking and benchmarks
- Read `signal-sourcer/resources/signal-taxonomy.md` for firmographic triggers (Category V)

## Why Funding Signals Work

- **New budget available** - board expects the money to be deployed
- **Mandate for growth spending** - investors want velocity
- **Scale pain emerges** - what worked at Series A breaks at Series B
- **Standardization moment** - time to replace patchwork tools
- Series A/B/C funding = 45 points (Tier 2 signal)
- Funding $10M+ = Act within 24 hours (Tier 2 SLA)
- Funding <$10M = Act within 72 hours (Tier 3 SLA)

## Timing Framework

| Window | Priority | Action |
|---|---|---|
| Week 1 | Too early | They are celebrating, doing press - monitor only |
| Weeks 2-4 | Peak | Outreach window - they are planning spend |
| Weeks 5-8 | Good | Still allocating budget, hiring started |
| Weeks 9+ | Declining | Budget likely committed to vendors already |

## Detection Sources

- **Crunchbase** - API or Clay enrichment for funding rounds
- **Press releases** - TechCrunch, company blogs, LinkedIn announcements
- **Clay enrichment** - Auto-detect funding events on target accounts
- **LinkedIn posts** - Founders/CEOs announce rounds
- **PitchBook / CB Insights** - Premium data for larger deals

## Signal Scoring by Round

| Round | Points | Rationale |
|---|---|---|
| Seed / Pre-Seed | 20 | Early stage, limited budget |
| Series A ($5-15M) | 35 | Building initial stack |
| Series B ($15-50M) | 45 | Scaling pain, replacing tools |
| Series C+ ($50M+) | 45 | Enterprise needs, standardization |
| IPO | 50 | Major transformation, compliance needs |

## Outreach Template

```
Congrats on the {{round}} - exciting time for {{company}}.

Most {{industry}} companies at this stage struggle with
{{relevant_problem}} as they scale from {{current_stage}} to {{next_stage}}.

We helped {{similar_company}} navigate exactly that after their raise.

Worth a quick chat?
```

## Key Rules

- Do NOT lead with "I saw you raised money" - everyone does this
- Reference the growth challenge the funding creates, not the funding itself
- $10M+ rounds get SDR personalized sequence within 24 hours
- <$10M rounds get lighter congratulations + nurture within 72 hours
- Stack with hiring signals for compound scoring: funding (45pts) + hiring (40pts) = 85pts Warm

## Examples

Example 1: "Track funding rounds for my target accounts"
-> Set up Clay table with Crunchbase enrichment, filter by round size and ICP fit, trigger Slack alerts for $10M+ rounds, auto-enqueue SDR sequence for qualified accounts

Example 2: "A prospect just raised Series B"
-> Weeks 2-4 optimal window. Reference scaling challenges specific to their stage. SDR personalized outreach within 24h. Score = 45pts base, stack with any other active signals

Example 3: "Build a funding-based outbound workflow"
-> Clay: Crunchbase monitoring on ICP accounts, filter round >= $5M, enrich contacts (VP+), calculate weeks-since-announcement, route week 2-4 to SDR Slack channel, auto-add to CRM with signal tag
