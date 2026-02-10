# Data Validation & List Hygiene

## Email Verification Tools

| Tool | Cost | Accuracy | Catch-all | Best For |
|------|------|----------|-----------|----------|
| **ZeroBounce** | $0.008/email | 98%+ | Sub-verification | High-volume, agencies |
| **NeverBounce** | $0.008/email | 99.9% guarantee | Flags "accept all" | Bulk verification |
| **Findymail** | $49/mo (1K emails) | 97%+ | Finds verified only | Find + verify combined |
| **Clearout** | $21/3K credits | 98%+ | Sub-verification | Budget-conscious |
| **MillionVerifier** | $37/10K | 99%+ | Basic detection | High volume, low cost |
| **Bouncer** | $8/1K | 99.5% | Toxic detection | EU compliance focus |
| **Hunter.io** | $49/mo (500) | 95%+ | Basic | Find + verify combined |
| **Dropcontact** | EUR 24/mo (1K) | 98%+ | GDPR-compliant | EU-focused teams |

## Verification Result Categories

| Category | Action |
|----------|--------|
| **Valid/Deliverable** | Safe to send (target: 95%+ of list) |
| **Invalid/Undeliverable** | Remove immediately |
| **Risky/Accept-All** | Send cautiously or find alternative |
| **Unknown** | Treat as risky |
| **Disposable** | Remove (temporary email) |
| **Role-based** (info@, sales@) | Flag for review, usually skip |
| **Toxic/Spam Trap** | Remove immediately |

## Phone Validation Tools

| Tool | Price | Specialty |
|------|-------|-----------|
| **Lusha** | $36/mo (480 credits) | Direct dials + mobile |
| **Apollo.io** | $49/mo | Phone enrichment included |
| **Cognism** | Enterprise pricing | Phone-verified mobile (Diamond Data) |
| **ZoomInfo** | $15K+/year | Most comprehensive B2B phones |
| **RocketReach** | $53/mo (80 lookups) | Phone included |
| **Kaspr** | $49/mo | LinkedIn Chrome extension |

## Data Decay Rates

| Data Point | Annual Decay | Recommended Refresh |
|------------|-------------|-------------------|
| Email address | 22-30% | Every 3-6 months |
| Phone number | 15-20% | Every 6 months |
| Job title | 30-35% | Every 3 months |
| Company (employment) | 20-25% | Every 3 months |
| Mailing address | 15-20% | Every 12 months |
| Direct dial phone | 25-30% | Every 3-6 months |

**Average B2B database decays ~2.1% per month (~25% per year).**

## List Hygiene Schedule

| Frequency | Action |
|-----------|--------|
| **Before every campaign** | Run email verification on full list |
| **Weekly** | Monitor bounce rates, remove hard bounces immediately |
| **Monthly** | Re-verify "risky" and "catch-all" emails |
| **Quarterly** | Full re-verification, update job titles, remove unengaged (no opens/clicks 90 days) |
| **Bi-annually** | Complete data refresh: re-enrich from LinkedIn, re-verify all |
| **Annually** | Full ICP audit, rebuild lists from scratch, purge unverified data |

## Key Metrics to Monitor

| Metric | Target | Danger Zone |
|--------|--------|-------------|
| Bounce rate | <1% | >3% — pause campaigns |
| Spam complaint rate | <0.1% | >0.3% — investigate |
| Unsubscribe rate | 0.3-0.5% | >1% — targeting issue |
| Email deliverability | 95%+ | <90% — infrastructure issue |
| List growth rate | Outpace decay | Shrinking = problem |

## Verification Best Practices

1. **Verify 100% of emails before any campaign.** No exceptions.
2. **Re-verify lists older than 30 days.**
3. **Remove all "unknown" and "catch-all"** or batch-test cautiously.
4. **Remove role-based emails** (info@, admin@, sales@) — higher spam complaints.
5. **Remove free email providers** for B2B outreach (gmail, yahoo personal).
6. **Use real-time verification** at point of collection if possible (API).
7. **Cost perspective:** $0.005-0.01/email is trivial vs damaged domain reputation.

## Bounce Handling Workflow

```
Email Sent
    |
    +-- Delivered → Track engagement (opens, replies)
    |
    +-- Soft Bounce
    |   +-- Retry #1 (after 4 hours)
    |   +-- Retry #2 (after 24 hours)
    |   +-- Retry #3 (after 48 hours)
    |   +-- Still bouncing? → Treat as Hard Bounce
    |
    +-- Hard Bounce
        +-- Remove from campaign IMMEDIATELY
        +-- Add to global suppression list
        +-- Never email again
        +-- Flag source for quality review
```
