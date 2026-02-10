---
name: company-events
description: Company event signal tracking for B2B outbound. Use when the user asks about M&A signals, company expansion, new locations, IPO, product launches, leadership changes, headquarters moves, mergers, acquisitions, or firmographic triggers. Do NOT use for funding rounds (use funding skill) or hiring signals (use hiring skill).
---

# Company Event Signals

Company events are firmographic triggers from the signal taxonomy (Category V). They indicate organizational change, new priorities, and buying windows. These include M&A activity, geographic expansion, product launches, leadership changes, and public market events.

## Reference Files

- Read `signal-sourcer/resources/signal-taxonomy.md` for Category V: Firmographic Triggers (15 triggers)
- Read `signal-sourcer/resources/buying-signals.md` for expansion signal (#5 by purchase correlation)

## 15 Firmographic Triggers

### Financial Events
1. **IPO** - Major transformation, compliance needs, new reporting requirements
2. **Funding raised** - See funding sub-skill for detailed playbook
3. **Financial reports released** - Public data on priorities and challenges

### M&A Activity
4. **Acquired another company** - Integration pain, tech consolidation, new headcount
5. **Was acquired** - Leadership change, vendor review, stack consolidation
6. **Merged** - Duplicate tools, standardization mandate, new org structure

### Growth Signals
7. **Hypergrowth** - Scale pain, process breaks, need for automation
8. **Started hiring** - See hiring sub-skill for detailed playbook
9. **Headquarters move** - New market, possible rebrand, vendor re-evaluation
10. **New locations opened** - Geographic expansion, regional needs

### Product and Marketing
11. **New product released** - GTM needs, new team formation
12. **New feature released** - Engineering investment signals priorities
13. **New integration released** - Tech ecosystem expansion, partnership signals
14. **Impactful marketing move** - Budget available, growth mindset
15. **Competitor made impactful move** - Competitive pressure, urgency to respond

## Scoring by Event Type

| Event | Points | SLA | Rationale |
|---|---|---|---|
| Acquisition (acquirer) | 35 | < 72h | Integration creates tool needs |
| Was acquired | 40 | < 72h | Vendor review inevitable |
| Merger | 40 | < 72h | Stack consolidation |
| IPO | 50 | < 72h | Compliance + transformation |
| New location | 25 | This week | Regional expansion needs |
| HQ move | 20 | This week | Possible vendor switch |
| New product launch | 30 | < 72h | GTM team forming |
| Competitor move | 15 | This week | Urgency catalyst |

## Detection Sources

- **Press releases** - TechCrunch, PR Newswire, company blogs
- **Crunchbase / PitchBook** - M&A data, funding
- **LinkedIn** - Leadership announcements, company updates
- **Clay enrichment** - Auto-detect company news events
- **Google Alerts** - Set up for target accounts
- **SEC filings** - IPO, financial reports (public companies)

## Key Rules

- Company events are public information - no privacy concerns
- M&A signals have a 2-6 week optimal outreach window after announcement
- IPO = highest-scoring company event (50pts) due to transformation scope
- Stack with leadership changes (job-changes skill) for compound scoring
- Always reference the business challenge the event creates, not the event itself

## Examples

Example 1: "A target account just acquired a company"
-> 35pts signal. Outreach within 72h. Reference integration pain (duplicate tools, process alignment, new headcount onboarding). Position your solution as the consolidation layer. Check for new leadership hires post-acquisition

Example 2: "Monitor M&A activity in my target market"
-> Clay: Set up Crunchbase/news monitoring on ICP accounts, filter for acquisition/merger events, enrich with decision-maker contacts, trigger SDR alerts for qualified matches within 72h

Example 3: "A company just opened a new office in EMEA"
-> 25pts signal. Reference regional expansion challenges (compliance, local processes, team coordination). Lighter touch - this week SLA. Stack with any hiring signals for the new location
