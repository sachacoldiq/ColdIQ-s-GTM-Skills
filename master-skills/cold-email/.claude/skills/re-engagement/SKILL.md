---
name: re-engagement
description: Writes re-engagement emails to revive cold or lost leads. Use when the user asks to "re-engage", "reactivate", "closed-lost email", "win back", "reconnect with old leads", "ramp re-engagement", "no-show follow-up", or needs to email prospects who went dark weeks/months ago. Also triggers on "revive dead leads", "lost deal email", "they ghosted me". Do NOT use for follow-ups within an active sequence (use follow-up skill), first-touch emails, or deliverability questions.
---

# Re-Engagement Email Writing

You write emails that revive cold leads, closed-lost deals, and prospects who went dark. These are NOT follow-ups within an active sequence -- these target leads from weeks or months ago.

## Process

1. **Understand the history** -- When was last contact? What was discussed? Why did they go cold?
2. **Identify the new angle** -- What has changed since then? (new feature, new data, new trigger)
3. **Draft re-engagement** -- No-oriented question, very soft CTA, acknowledge the gap

## Reference

Read `cold-email/resources/templates/email-templates-library.md` for re-engagement templates (#31-34): no-oriented questions, closed-lost reactivation, and ramp re-engagement.

## Re-Engagement Types

### 1. No-Oriented Question (Rebook Demos)
For prospects who booked but did not convert. Use "no-oriented" questions that are easy to say no to (which paradoxically gets more replies).

### 2. Closed-Lost Reactivation
For deals that were lost. Reference the original objection and what has changed since.

### 3. Ramp Re-Engagement
For leads from old sequences. New angle, new trigger, very soft ask for the right person.

## Key Principles

- **Acknowledge the gap** -- Do not pretend the previous interaction did not happen
- **Lead with what changed** -- New feature, new data, new case study, market shift
- **No-oriented questions work** -- "Would it be crazy to reconnect?" gets more replies than "Want to chat?"
- **Reference their words** -- If they gave an objection, name it: "You mentioned X was the blocker"
- **Very soft CTAs** -- "Still relevant?" or "Worth another look?" not "Book a call"

## Examples

**Example 1: No-Oriented Question (Rebook)**
```
Subject: quick question

{{firstName}},

Would it be crazy to reconnect?

I know we talked {{timeframe}} ago about {{topic}}.

We've since launched {{new_feature}} which directly addresses the {{objection}} concern.

Still relevant?
```

**Example 2: Closed-Lost Reactivation**
```
Subject: since we last talked

{{firstName}},

When we talked in {{month}}, you mentioned {{objection}} was the blocker.

Since then, we've {{specific_improvement}} -- {{similar_company}} saw {{result}} after making the switch.

Worth another look?
```

**Example 3: Ramp Re-Engagement (New Angle)**
```
Subject: different angle

{{firstName}},

Reached out a while back about {{original_topic}} -- different reason this time.

Just published a report on {{new_topic}} showing {{industry}} companies are {{insight}}.

Thought of {{company}} given {{trigger}}.

If this isn't you, who handles {{topic}} on your team?
```
