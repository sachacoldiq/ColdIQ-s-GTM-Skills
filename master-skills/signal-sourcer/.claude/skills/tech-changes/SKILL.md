---
name: tech-changes
description: Technology stack change signal tracking for B2B outbound. Use when the user asks about tech stack changes, vendor switches, new tool adoption, BuiltWith tracking, technology signals, stack monitoring, tool migration, or tech-based targeting. Do NOT use for competitor product engagement (use competitor-signals skill) or general company events (use company-events skill).
---

# Tech Stack Change Signals

Tech stack changes are the #4 buying signal by purchase correlation. An active change project indicates openness to new vendors, fresh pain from transition, and new gaps in workflow. This is an active buying window.

## Reference Files

- Read `signal-sourcer/resources/buying-signals.md` for signal ranking (#4 by purchase correlation)
- Read `signal-sourcer/resources/signal-taxonomy.md` for adjacent vendor triggers (Category III, items 1-7) and integration signals

## Why Tech Changes Work

- **Active buying window** - they are already evaluating and switching tools
- **Fresh pain from transition** - migration creates new gaps
- **New gaps in workflow** - removed tool leaves unmet needs
- **Open mindset** - already committed to change, lower switching resistance
- Technology change = Tier 2 signal (35-45 points depending on relevance)

## Detection Methods

### BuiltWith / Wappalyzer
- Monitor target accounts for technology additions/removals
- Clay integration: Enrich company with tech stack data
- Track changes over time (tech added, tech removed)

### Job Postings
- Job descriptions mentioning new tools = migration signal
- "Experience with Salesforce" when they currently use HubSpot = CRM switch
- Clay: Scrape job postings, extract tool mentions, compare to known stack

### LinkedIn Activity
- Engineers/admins posting about new tool implementations
- Company page announcing new partnerships/integrations
- Trigify: Track engagement on vendor content

### Integration Announcements
- New integration released (taxonomy trigger #13)
- Tech ecosystem expansion signals priorities
- Partner directories and marketplace listings

## Scoring by Change Type

| Tech Change | Points | Rationale |
|---|---|---|
| Removed competitor from stack | 45 | Active replacement window |
| Added adjacent tool | 35 | Stack expansion, integration opportunity |
| Job posting mentions new tool | 30 | Migration in progress |
| Added your category competitor | 20 | Already solved, but may be unhappy later |
| General stack growth (5+ tools added) | 25 | Active buying mode |

## Outreach Templates

**Competitor removed:**
```
Noticed {{company}} recently moved away from {{competitor}}.
The transition usually surfaces gaps in {{function_area}}.
We have helped {{similar_company}} fill exactly that gap.
Worth comparing notes?
```

**Adjacent tool added:**
```
Saw {{company}} recently adopted {{new_tool}}.
Most teams using {{new_tool}} find they also need {{your_category}} to get the full value.
We integrate natively and helped {{similar_company}} with the same setup.
```

## Key Rules

- Tech changes are publicly observable (BuiltWith, job postings) - no privacy concerns
- Competitor removal is the highest-value tech signal (45pts) - they need a replacement NOW
- Adjacent tool adoption is your integration play - position as the missing piece
- Stack with hiring signals: new DevOps hire + infra tools changing = strong compound signal
- Act within 72 hours of detection - buying windows close fast during migrations

## Examples

Example 1: "A target account just removed our competitor from their stack"
-> 45pts, highest-priority tech signal. Outreach within 72h. Reference the transition gap, not the competitor directly. Position as the smooth alternative. Check for new hires in relevant department for multi-threading

Example 2: "Monitor tech stack changes across my TAM"
-> Clay: Enrich ICP companies with BuiltWith data, set up monthly delta checks, flag additions/removals of relevant tools, trigger alerts for competitor removals and adjacent tool additions

Example 3: "Job posting mentions migrating from HubSpot to Salesforce"
-> 30pts signal. CRM migration = 6-12 month project with many tool needs. Reference the migration pain. Position your solution as the tool that makes the transition smoother. Time outreach for early migration phase
