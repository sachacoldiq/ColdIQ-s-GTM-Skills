---
name: deduplicate
description: Deduplicate prospect lists, merge data from multiple sources, and ensure data quality across columns. Use when user asks about "deduplicate", "duplicates", "remove duplicates", "merge sources", "merge columns", "multiple data sources", "data quality", "clean up list", "duplicate contacts", "Clay auto-dedupe". Do NOT use for email verification (use clean-validate) or ICP scoring (use define-icp).
---

# Deduplicate — Sub-Skill

You help users remove duplicates, merge multi-source data cleanly, and maintain data quality across their lists. Always read the reference files before responding.

## References

- Read `list-building/resources/data-validation.md` — for verification context and data quality metrics.
- Read `list-building/resources/templates/beginner-workflow.md` — section: Step 3 (Merge Columns).

## Why Deduplication Matters

- Sending the same person 2-3 emails from different campaigns destroys credibility
- Duplicate records waste enrichment and verification credits
- Multiple sources (Apollo + Sales Nav + Clay) often overlap 30-60%
- Dirty data skews campaign metrics (open rates, reply rates)

## Deduplication Strategies

### 1. Match Keys (Priority Order)

| Match Key | Reliability | Use Case |
|-----------|-------------|----------|
| Email address | Highest | Primary dedup key |
| LinkedIn URL | High | When emails differ across sources |
| First + Last + Company Domain | Medium | When no email/LinkedIn available |
| Phone number | Medium | Secondary validation |
| First + Last + Title + Location | Low | Last resort, risk of false matches |

### 2. Clay Auto-Dedupe
- Clay automatically deduplicates on import when using integrations
- For CSV imports: enable "Deduplicate" option during upload
- Match on: Email (primary) or LinkedIn URL (secondary)
- Keeps the most recently enriched record by default

### 3. Merge Columns (Multi-Source)
When combining data from multiple providers:
```
Source 1 (Apollo): email_apollo, phone_apollo, title_apollo
Source 2 (Sales Nav): email_sn, phone_sn, title_sn
Source 3 (Clay): email_clay, phone_clay, title_clay
    |
    v
Merge into: final_email, final_phone, final_title
```

**Priority rule:** Use the most recently verified data point. If both are recent, prefer the source with higher historical accuracy for that field.

### 4. Cross-Campaign Dedup
- Maintain a master suppression list of all previously contacted prospects
- Before launching any campaign, cross-reference against this list
- Include: contacted, bounced, unsubscribed, replied-not-interested
- Update after every campaign completes

## Data Quality Checks After Dedup

| Check | Action |
|-------|--------|
| Empty email rows | Remove or re-enrich |
| Free email providers (gmail, yahoo) | Flag for B2B — usually personal |
| Role-based emails (info@, sales@) | Remove for cold outreach |
| Missing company domain | Enrich from LinkedIn URL |
| Title mismatches across sources | Keep most recent, flag for review |
| Same person, different companies | Check if job change — keep current |

## Conditional Formulas (Credit-Saving)

From the beginner workflow — always apply:
- **Only enrich if email is empty** (don't re-enrich what you have)
- **Only verify if email exists** (don't waste credits on blank rows)
- **Only run AI if verification = valid** (don't summarize companies for bad leads)

## Examples

**Example 1:** "I imported leads from Apollo and Sales Nav, there are tons of duplicates"
-> In Clay: use email as primary match key to auto-dedup. For records without email, match on LinkedIn URL. Create merge columns: take Apollo email if verified, otherwise Sales Nav. For remaining duplicates, match on First + Last + Company Domain. Expected overlap: 30-60% between Apollo and Sales Nav — dedup should significantly reduce list size.

**Example 2:** "How do I merge email columns from 3 different enrichment providers?"
-> Create a "Final Email" merge column in Clay. Priority order: (1) Findymail (find + verify combined), (2) Prospeo, (3) LeadMagic. Use Clay's merge function to cascade — take first non-empty value in priority order. Then run verification on the Final Email column. Conditional formula: only verify if Final Email is not empty.

**Example 3:** "I'm running multiple campaigns, how do I avoid contacting the same person twice?"
-> Build a master suppression list table in Clay or your CRM. After every campaign, export: all contacted emails, hard bounces, unsubscribes, and "not interested" replies. Before each new campaign, cross-reference your new list against the suppression list. Remove matches. Also dedup within the new campaign itself — match on email, then LinkedIn URL.
