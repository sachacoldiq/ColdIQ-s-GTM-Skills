---
name: job-changes
description: Job change signal tracking for B2B outbound. Use when the user asks about job change signals, champion tracking, new role outreach, vendor amnesty period, Clay job change monitoring, or days 14-45 engagement window. Do NOT use for general hiring signals (use hiring skill) or company-level events (use company-events skill).
---

# Job Change Signals

Job changes are the #2 buying signal by purchase correlation. New leaders have a mandate for early wins, vendor amnesty period, and budget air cover. Response rate is 3x higher than cold outreach, with peak engagement at days 14-45.

## Reference Files

- Read `signal-sourcer/resources/timing/job-change-tracking.md` for Clay setup and tracking methods
- Read `signal-sourcer/resources/buying-signals.md` for signal ranking and benchmarks

## Why Job Changes Work

- **3x higher response rate** vs cold outreach
- **Peak engagement: days 14-45** after the change (vendor amnesty period)
- New leaders actively build their stack in first 90 days
- Trust already established with former champions
- Champion job change to target account = 75 points (Tier 1 signal)

## Clay Setup - Two Methods

### Method 1: Monitor Existing Table
1. Go to Actions > Monitor for Job Changes
2. Specify the LinkedIn URL column
3. Save and run - new row created for each detected change

### Method 2: Create New Tracking Table
1. +Create New > Table > Track Job Changes
2. Include "Person LinkedIn URL" for future monitoring
3. Include "Company LinkedIn URL" to detect if they already changed

### Historical vs Future
- **Historical**: Include both Person + Company LinkedIn URLs - checks if contact already changed
- **Future**: Only Person LinkedIn URL - monitors ongoing changes

## Timing Framework

| Window | Multiplier | Action |
|---|---|---|
| Days 0-13 | Too early | Monitor only - they are still settling in |
| Days 14-45 | Peak (1.5x) | Immediate outreach - vendor amnesty window |
| Days 46-90 | Good (1.0x) | Standard outreach - still building stack |
| Days 90+ | Declining (0.7x) | Lower priority - stack likely set |

## Outreach Template

```
Hey congrats on the new role at {{company}}.

As you are taking over {{department}}, curious how you are
currently handling {{relevant_problem}}?

We helped {{similar_company}} with exactly that.
```

## Key Rules

- Do NOT mention you tracked their job change ("I saw you moved to...")
- Reference the role/department naturally, not the signal itself
- Former champions get AE-owned outreach (warm relationship)
- New contacts at target accounts get SDR sequence
- Stack with other signals for compound scoring: job change (75pts) + website visit (50pts) = Hot

## Examples

Example 1: "Track when my past customers change jobs"
-> Set up Clay historical tracking with Person + Company LinkedIn URLs, filter to ICP companies, trigger AE outreach within 24h

Example 2: "Someone just started as VP Sales at a target account"
-> Day 14-45 window = peak timing. Send congratulations + reference relevant problem for their new role. AE owns if former champion, SDR if new contact

Example 3: "Build a job change signal workflow in Clay"
-> Create tracking table with Person LinkedIn URLs, add enrichment columns (new company, title, start date), filter ICP match, calculate days-since-change, route to Slack alerts for day 14+ changes
