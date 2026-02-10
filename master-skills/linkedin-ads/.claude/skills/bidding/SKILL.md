---
name: linkedin-ads-bidding
description: Configure LinkedIn Ads bidding strategies, budget allocation, and cost optimization. Use when the user asks about LinkedIn bidding, manual vs automated bidding, LinkedIn CPM, CPC, CPV, ad budget allocation, daily budget, bid adjustments, cost per lead, or LinkedIn ad spend optimization. Triggers on "LinkedIn bidding", "manual bidding", "automated bidding", "CPM", "CPC", "CPV", "ad budget", "bid adjustment", "cost per lead", "LinkedIn spend". Do NOT use for campaign structure (use campaign-setup) or creative questions (use creative/copy).
---

# LinkedIn Ads Bidding & Budget

You configure bidding strategies and budget allocation for maximum LinkedIn Ads efficiency.

## Instructions

1. Select bidding strategy (manual recommended by default)
2. Set initial bids above LinkedIn minimum to gather data
3. Monitor daily spend vs allocated budget
4. Adjust bids based on performance data
5. Allocate budget across funnel layers

## Reference

For bidding strategies, objective selection, and budget guidelines → Read `linkedin-ads/references/bidding-objectives.md`
For cost benchmarks and campaign health indicators → Read `linkedin-ads/references/benchmarks.md`

## Bidding Strategy Selection

| Strategy | When to Use | Notes |
|----------|-------------|-------|
| **Manual** (default) | Most campaigns | Cost control, clear boundaries |
| **Automated** | Small ABM/retargeting audiences | Gather benchmark data first, then switch to manual |
| **Cost Per Send** | Conversation/Message Ads | Start at $1, second-price auction |

## Daily Bid Adjustment Formula

```
Previous day spent - Allocated budget = Adjustment indicator
Negative → bid too low (increase)
Positive → bid too high (decrease)
```

## Budget Allocation by Funnel

| Layer | % of Budget | Objective |
|-------|-------------|-----------|
| Top (Cold) | ~50% | Awareness, reach |
| Middle (Warm) | ~25% | Trust, consideration |
| Bottom (Hot) | ~25% | Conversion, demos |

## Budget Guidelines

- **Minimum commitment**: 6 months for pipeline impact
- **Testing**: ~$100 per creative before shutdown decisions
- **Retargeting**: $25-100 daily per campaign for initial testing
- **Thought Leader Ads**: $300-500/month, $100-150 per post over 7-10 days

## Key Principles

- **Manual bidding by default** — provides cost control
- **Start above minimum threshold** — gather data quickly
- **Never use Reach/Brand Awareness objective** — CPM charges per display, inefficient for B2B
- **Allow $100 spend per creative** before making shutdown decisions
- **Measure quarterly, not weekly** — B2B cycles require 3-6 month windows

## Examples

Example 1: "How much should I bid on LinkedIn?"
→ Start with manual bidding above LinkedIn's minimum, monitor daily spend vs budget, adjust based on over/underspend pattern. Provide format-specific cost benchmarks.

Example 2: "How should I allocate my $5K/month LinkedIn budget?"
→ 50% cold awareness, 25% warm nurture, 25% hot retargeting. Recommend minimum 6-month commitment, set testing budget at $100/creative.
