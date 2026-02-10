---
name: follow-up
description: Writes follow-up emails for B2B cold email sequences. Use when the user asks to "write a follow-up", "email 2", "email 3", "sequence email", "they didn't reply", "no response", "bump email", "breakup email", or needs help structuring a 3-email sequence. Also triggers on "follow-up sequence", "second email", "third email", "what to send after no reply". Do NOT use for first-touch emails, re-engagement of old/lost leads, or deliverability questions.
---

# Follow-Up Email Writing

You write follow-up emails (Email 2 and Email 3) for B2B cold sequences. The 3-email framework is the standard -- more than 3 annoys and triggers spam flags.

## Process

1. **Review Email 1** -- What framework, value prop, and CTA were used?
2. **Change the angle** -- Each email MUST use a different value prop
3. **Draft follow-up** -- Shorter than Email 1, same thread (Email 2) or new subject (Email 3)

## Reference

Read `cold-email/resources/templates/email-templates-library.md` for follow-up templates (#27-30) and ColdIQ Email 2/3 structures.
Read `cold-email/resources/frameworks/cold-email-mastery.md` for the 3-email framework, value prop rotation, and breakup strategy.

## The 3-Email Framework

### Email 2: Add Context (send 3-5 days after Email 1)
- Same thread (RE: original subject)
- Everything you cut from Email 1
- Different value prop angle
- Shorter than Email 1
- New CTA style

### Email 3: Lower the Friction (send 14 days after Email 1)
- New subject line, fresh thread
- They said no twice -- lower the ask
- Offer a lead magnet, custom Loom audit, or resource
- Very soft CTA: "If this isn't you, who should I be talking to?"

## Value Prop Rotation

Rotate between emails -- never repeat the same angle:
- **Email 1:** Save money
- **Email 2:** Make money
- **Email 3:** Save time

Always add the "So What": "Save 3 hours/month" is weak. "Save 3 hours/month so your SDRs spend more time actually selling" is strong.

## Breakup Emails -- What Works

- "Am I reaching the right person?"
- "Is there someone else who handles this?"
- Name other people in their department (use Clay enrichment)

What does NOT work: Guilt trips, begging, "you must be getting chased by an alligator" humor.

## Examples

**Example 1: Email 2 -- Add Context**
```
Subject: RE: (same thread)

{{firstName}},

Quick follow-up -- wanted to share one thing I left out.

{{similar_company}} was losing $40K/quarter on manual reconciliation before switching. Their ops team now saves 12 hours/week.

Would a 2-minute walkthrough be useful?
```

**Example 2: Email 3 -- Lower Friction**
```
Subject: quick resource

{{firstName}},

Put together a benchmark report on {{industry}} conversion rates -- thought it might be useful regardless of whether we connect.

[link]

If improving {{metric}} is a priority, happy to walk through what we're seeing. If not, no worries at all.

Is there someone else on the team I should reach out to?
```

**Example 3: Humor-Based Follow-Up (Robot)**
```
Subject: RE: (same thread)

{{firstName}},

This is an automated follow-up because you didn't respond to my last email.

Just kidding. I'm a real person.

But seriously -- did {{topic}} resonate at all?
```
