---
name: phone-enrichment
description: Set up phone number waterfall enrichment in Clay for direct dials and mobile numbers. Use when the user asks about finding phone numbers, phone waterfall, mobile numbers, direct dials, phone enrichment, or calling prospects. Triggers on "phone numbers", "mobile numbers", "phone waterfall", "direct dial", "phone enrichment", "cell phone", "find phone", "calling list". Do NOT use for email enrichment, company data, or general contact discovery without phone-specific needs.
---

# Phone Enrichment

You help users set up phone number waterfall enrichment in Clay to find direct dials and mobile numbers.

## Reference

Read `clay/resources/waterfall-enrichment.md` for waterfall mechanics, provider list, and conditional run setup.

## Key Benchmarks

- Single phone provider: 20-30% coverage
- Phone waterfall (3 providers): 50-65% coverage
- Phone numbers cost more credits than emails (2-25 credits per provider)
- Mobile numbers are harder to find than work emails
- Always verify against do-not-call lists before cold calling

## Recommended Provider Order

1. **LeadMagic** (2-5 credits) -- good coverage, cost-effective
2. **BetterContact** (3-5 credits) -- fills gaps from LeadMagic
3. **Clay pattern matching** (1-2 credits) -- direct line patterns from company switchboard
4. **Apollo** (3-5 credits) -- large database, lower direct dial accuracy
5. **RocketReach** (3-5 credits) -- backup for remaining gaps

## Required Inputs

- **Best:** LinkedIn Profile URL + Company Domain (highest match rate)
- **Good:** Full Name + Company Domain
- **Minimum:** Full Name + Company Name

## Setup Steps

1. Click "Add enrichment" and search "Phone" or "Mobile Phone"
2. Select the phone waterfall enrichment
3. Reorder providers: LeadMagic first, then BetterContact, then others
4. Map input columns: LinkedIn URL, full name, company domain
5. Add conditional run: "Only run if /phone is empty"
6. Test on 50 rows before full run
7. Add verification step for do-not-call compliance

## Conditional Run Formula

Only run phone enrichment on high-value leads to avoid wasting credits:

```
/phone is empty AND /lead_score > 60
```

Or only after email was found (prioritize email first):

```
/work_email is not empty AND /phone is empty
```

## Credit Optimization

- Phone enrichment is expensive (2-25 credits per attempt)
- Only run on Tier 1 leads (score 80+) or after email outreach fails
- Use conditional runs aggressively -- phone data is 3-5x more expensive than email
- Run email waterfall FIRST, then phone only on leads worth calling
- Save phone numbers to CRM immediately -- never pay twice

## Examples

**Example 1:** "I need direct dials for 1,000 sales leaders"
--> LeadMagic + BetterContact waterfall. Conditional: only if lead_score > 70. Expected coverage: ~55%. Estimated cost: 1,000 x avg 8 credits = ~8,000 credits. Run email waterfall first (cheaper).

**Example 2:** "I already have emails but want to add phone for multi-channel"
--> Conditional: "Only run if /work_email is not empty AND /phone is empty". This ensures you only spend credits on leads you can already email. Prioritize Tier 1 leads.

**Example 3:** "My phone numbers keep coming back as switchboard, not direct"
--> Use LeadMagic or BetterContact (better at direct dials) instead of Apollo. Add a Claygent column to verify if number is direct or switchboard. Filter out non-direct numbers.
