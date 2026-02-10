---
name: clean-validate
description: Verify and validate emails and phone numbers, manage bounce rates, and maintain list hygiene schedules. Use when user asks about "email verification", "validate emails", "bounce rate", "ZeroBounce", "NeverBounce", "list hygiene", "data decay", "deliverability", "catch-all emails", "spam traps", "re-verify", "phone validation". Do NOT use for deduplication (use deduplicate) or finding new contacts (use find-contacts).
---

# Clean & Validate — Sub-Skill

You help users verify email and phone data, manage bounce rates below 1%, and establish list hygiene schedules. Always read the reference file before responding.

## Reference

Read `list-building/resources/data-validation.md` — all sections.

## Email Verification Tools

| Tool | Cost | Accuracy | Best For |
|------|------|----------|----------|
| ZeroBounce | $0.008/email | 98%+ | High-volume, agencies |
| NeverBounce | $0.008/email | 99.9% | Bulk verification |
| Findymail | $49/mo (1K) | 97%+ | Find + verify combined |
| MillionVerifier | $37/10K | 99%+ | High volume, low cost |
| Bouncer | $8/1K | 99.5% | EU compliance focus |

## Verification Result Categories

| Category | Action |
|----------|--------|
| **Valid/Deliverable** | Safe to send (target: 95%+ of list) |
| **Invalid/Undeliverable** | Remove immediately |
| **Risky/Accept-All (Catch-all)** | Send cautiously or find alternative. Use ListKit/Listman.io for catch-all sub-verification |
| **Unknown** | Treat as risky, do not send |
| **Disposable** | Remove (temporary email) |
| **Role-based** (info@, sales@) | Remove — higher spam complaint risk |
| **Toxic/Spam Trap** | Remove immediately |

## Critical Metrics

| Metric | Target | Danger Zone |
|--------|--------|-------------|
| Bounce rate | **<1%** | >3% = pause campaigns immediately |
| Spam complaint rate | <0.1% | >0.3% = investigate |
| Email deliverability | 95%+ | <90% = infrastructure issue |

## Data Decay Rates

- **Email addresses** — 22-30% annual decay (~2.1%/month)
- **Phone numbers** — 15-20% annual decay
- **Job titles** — 30-35% annual decay
- **Company employment** — 20-25% annual decay

## List Hygiene Schedule

| Frequency | Action |
|-----------|--------|
| **Before every campaign** | Full email verification on entire list |
| **Weekly** | Monitor bounce rates, remove hard bounces |
| **Monthly** | Re-verify risky and catch-all emails |
| **Quarterly** | Full re-verification, update job titles, purge unengaged (no opens/clicks 90 days) |
| **Bi-annually** | Complete data refresh from LinkedIn, re-verify all |
| **Annually** | Full ICP audit, rebuild lists from scratch |

**Rule: Re-verify any list older than 30 days before sending.**

## Bounce Handling Workflow

```
Email Sent -> Delivered -> Track engagement
           -> Soft Bounce -> Retry 3x (4h, 24h, 48h) -> Still bouncing? -> Hard Bounce
           -> Hard Bounce -> Remove IMMEDIATELY -> Add to suppression list -> Flag source for quality review
```

## Examples

**Example 1:** "My bounce rate is 4%, what do I do?"
-> Pause all campaigns immediately (>3% = danger zone). Run full re-verification on entire list with ZeroBounce or NeverBounce. Remove all Invalid, Unknown, Disposable, Toxic. Sub-verify catch-all emails with ListKit. Check data sources — flag and potentially stop using the source with highest bounce rate. Target: get back below 1% before resuming.

**Example 2:** "Which email verification tool should I use?"
-> Volume-based: <1K/month = Findymail ($49, finds + verifies). 1K-10K/month = NeverBounce ($0.008/email, 99.9% guarantee). 10K+/month = MillionVerifier ($37/10K, best cost). EU-focused = Bouncer or Dropcontact (GDPR-compliant). Catch-all heavy = add ListKit/Listman.io as secondary verification.

**Example 3:** "How often should I clean my list?"
-> Verify 100% before every campaign, no exceptions. Weekly: remove hard bounces. Monthly: re-verify catch-all and risky. Quarterly: full refresh + purge unengaged. Email decays 22-30%/year, so a list from 6 months ago has ~11-15% bad data. Re-verify anything older than 30 days.
