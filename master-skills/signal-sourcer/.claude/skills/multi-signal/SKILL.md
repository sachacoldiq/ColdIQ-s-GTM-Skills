---
name: multi-signal
description: Multi-signal stacking and scoring framework for B2B outbound. Use when the user asks about signal stacking, compound scoring, scoring frameworks, action thresholds, response SLAs, signal prioritization, lead scoring, signal combinations, heat levels, or building a complete signal-based selling system. Do NOT use for a single specific signal type (use the dedicated sub-skill instead).
---

# Multi-Signal Stacking and Scoring

Multi-signal stacking is the highest-performing outbound strategy: 3+ signals = 35-40% reply rate vs 6-8% cold. This sub-skill covers the scoring framework, recency multipliers, action thresholds, response SLAs, and compound scoring logic.

## Reference Files

- Read `signal-sourcer/resources/signal-scoring.md` for the complete scoring framework (weights, recency, thresholds, SLAs, plays)
- Read `signal-sourcer/resources/examples/signal-campaigns/gtm-plays.md` for 11 executable GTM plays and multi-channel coordination

## Performance Benchmarks

| Approach | Reply Rate | Contract Value |
|---|---|---|
| Cold outreach (no signal) | 6-8% | Baseline |
| Single signal-based | 18-22% | 2-3x baseline |
| Multi-signal stacked (3+) | 35-40% | 3-4x baseline |
| Signal + ABM multi-touch | 36% meeting rate | Highest |

## Signal Scoring Framework

### Tier 1 - Hot Signals (50-100 points)
| Signal | Points |
|---|---|
| Demo/pricing request | 100 |
| 3+ pricing page visits in 7 days | 80 |
| Champion job change to target account | 75 |
| Multiple stakeholders from same account | 70 |
| Product trial signup | 65 |
| G2 comparison with competitors | 60 |
| 5+ website visits in 2 weeks | 50 |

### Tier 2 - Warm Signals (20-49 points)
| Signal | Points |
|---|---|
| Series A/B/C funding | 45 |
| Relevant job posting | 40 |
| Bombora topic surge (score 70+) | 40 |
| Case study download | 35 |
| LinkedIn engagement with your content | 30 |
| Webinar attendance | 25 |
| 3+ blog post visits | 20 |

### Tier 3 - Cool Signals (5-19 points)
| Signal | Points |
|---|---|
| Company news (expansion) | 15 |
| Single website visit | 10 |
| Industry report download | 10 |
| Email open (no click) | 5 |
| Social follow (no engagement) | 5 |

## Recency Multipliers

| Recency | Multiplier |
|---|---|
| Last 24 hours | 1.5x |
| Last 7 days | 1.2x |
| Last 14 days | 1.0x |
| Last 30 days | 0.7x |
| 30+ days ago | 0.3x |

## Action Thresholds

| Score | Heat Level | Action | SLA | Owner |
|---|---|---|---|---|
| 150+ | Red Hot | Immediate manual outreach | < 1 hour | AE |
| 100-149 | Hot | Personalized sequence | < 24 hours | SDR |
| 50-99 | Warm | Automated nurture + SDR monitoring | < 72 hours | SDR + Marketing |
| 20-49 | Cool | Marketing nurture campaigns | This week | Marketing |
| 0-19 | Cold | Monitor for signal changes | Ongoing | System |

## Compound Scoring Examples

| Scenario | Signals | Calculation | Score | Heat |
|---|---|---|---|---|
| Red Hot | Pricing page (80) + Champion job change (75) + Bombora surge (40) | 80+75+40 | 195 | Red Hot |
| Very Warm | Funding (45) + Hiring (40) + 3 blog visits (20) | 45+40+20 | 105 | Hot |
| Warm | Website visit (10) + LinkedIn engagement (30) + Email click (15) | 10+30+15 | 55 | Warm |
| Cool | Blog visit (10) + Email open (5) | 10+5 | 15 | Cold |

## Building a Complete Scoring System

1. **Choose your signals** - Pick 5-10 signals from Tiers 1-3 based on ICP and available tools
2. **Assign weights** - Use the framework above as starting point, adjust based on your conversion data
3. **Set recency decay** - Apply multipliers so stale signals do not inflate scores
4. **Define thresholds** - 150/100/50/20 breakpoints, adjust after 30 days of data
5. **Map actions** - Each threshold gets a specific play, channel, owner, and SLA
6. **Automate routing** - Clay scores + Slack alerts + CRM updates
7. **Review monthly** - Recalibrate weights based on closed-won attribution

## Implementation Tools

- **Clay**: Custom scoring formulas with enrichment data
- **Common Room**: Built-in scoring across 50+ sources ($1K+/mo)
- **Koala**: Product + website signal scoring (Free/$750/mo)
- **HubSpot/Salesforce**: Native lead scoring with intent integration
- **6sense**: AI predictive scoring ($35K+/yr)

## Key Rules

- 3+ signals = always worth immediate outreach (35-40% reply rate)
- Recency matters more than signal count - 1 fresh Tier 1 signal > 3 stale Tier 2 signals
- Response speed is the #1 lever: 5-min response = 21x more likely to qualify vs 30 min
- 50% of signal value is lost after 7 days - speed wins
- Stack across categories (website + social + firmographic) for strongest compound signals
- Recalibrate weights monthly based on actual conversion data

## Examples

Example 1: "Build me a complete signal scoring system"
-> Design 3-tier framework with 8-10 signals, assign weights from the table above, apply recency multipliers, define 5 heat levels with actions/SLAs/owners, recommend Clay for scoring automation, set monthly review cadence. Map each threshold to a GTM play from `gtm-plays.md` (e.g., Play 5 for hiring signals, Play 8 for competitor bad reviews, Play 9 for champion job changes).

Example 2: "A prospect has 3 signals firing - what do I do?"
-> Calculate compound score: sum points for each signal, apply recency multipliers, map to heat level. 150+ = AE immediate outreach within 1 hour (see Play 9: Champion Change). 100-149 = SDR personalized sequence within 24h. Include all 3 signals as context for personalization (without mentioning them directly).

Example 3: "How do I prioritize my signal queue?"
-> Sort by compound score (highest first), then by recency of most recent signal. Red Hot (150+) always first. Within same heat level, prioritize accounts with freshest signals (24h > 7d > 14d). Assign capacity: AE handles top 5 Red Hot/day, SDR handles top 20 Hot/day. Use Play 10 (ServiceBell Allbound) for website visitor signals, Play 11 (Inbound Followers) for content engagement.
