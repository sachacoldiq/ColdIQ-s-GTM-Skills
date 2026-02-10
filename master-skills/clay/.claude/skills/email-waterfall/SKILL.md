---
name: email-waterfall
description: Set up email waterfall enrichment in Clay for maximum coverage. Use when the user asks about finding work emails, email enrichment, email waterfall setup, provider ordering, email coverage optimization, conditional runs for email, bounce rates, or email validation. Triggers on "find emails", "email waterfall", "email coverage", "email discovery", "work email", "email provider", "bounce rate". Do NOT use for phone enrichment, company-only enrichment without email needs, or general CRM email questions.
---

# Email Waterfall Enrichment

You help users set up email waterfall enrichment in Clay to maximize coverage from ~40% (single provider) to 85%+ (waterfall).

## Reference

Read `clay/resources/waterfall-enrichment.md` for full provider list, setup steps, and validation details.

## Key Benchmarks

- Single email finder: ~40% coverage
- 4-provider waterfall: 70-80% coverage
- 6-provider waterfall: 85%+ coverage
- Target bounce rate: under 2%
- Credits per provider attempt: 2-5 credits (refunded if not found)

## Recommended Provider Order (Cheapest First)

1. LeadMagic (2 credits)
2. Prospeo (2 credits)
3. Hunter (2 credits)
4. Apollo (3 credits)
5. RocketReach (3 credits)
6. FindyMail (2 credits)

You only pay for providers actually used. If found at Provider 3, cost = 2+2+2 = 6 credits, not 14.

## Required Inputs (Best to Worst)

1. **Best:** Company Domain + LinkedIn Profile URL (highest match rate)
2. **Good:** Company Domain + Full Name
3. **Fallback:** Full Name + Company Name (lowest precision)

## Setup Steps

1. Click "Add enrichment" and search "Work Email"
2. Select the waterfall enrichment type
3. Reorder providers (cheapest first)
4. Map input columns: domain, LinkedIn URL, full name
5. Enable ZeroBounce validation (default)
6. Add conditional run: "Only run if /email is empty"
7. Test on 50 rows before running full table

## Mandatory Conditional Run Formula

Always add this to avoid wasting credits on rows that already have emails:

```
/email is empty
```

For re-enrichment workflows (e.g., CRM cleanup), use:

```
/email is empty OR /email_validation equals "invalid"
```

## Validation Step

After the waterfall, add a separate email verification column:
- Primary: MillionVerifier (bulk, cheapest)
- Backup: Clay native verification
- Remove: invalid, disposable addresses
- Flag: risky/catchall emails for manual review

## Examples

**Example 1:** "I have 5,000 contacts with company domains but no emails"
--> Set up 6-provider waterfall with domain as primary input. Conditional run: only if email is empty. Estimated cost: 5,000 x avg 6 credits = ~30,000 credits. Expected coverage: 85%+.

**Example 2:** "My email bounce rate is too high"
--> Add MillionVerifier validation column after waterfall. Filter: keep only "valid" results. Use conditional formula to flag "catchall" for manual review. Target: under 2% bounce rate.

**Example 3:** "Should I run personal email waterfall too?"
--> Only if work email waterfall returns empty. Add conditional: "Only run if /work_email is empty". Use separate waterfall with personal email providers. Lower priority than work email.
