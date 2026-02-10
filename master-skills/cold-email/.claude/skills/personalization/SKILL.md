---
name: personalization
description: Builds personalization strategies and AI prompts for cold email at scale. Use when the user asks about "personalization", "personalize at scale", "custom first lines", "AI personalization", "Clay prompts for email", "data enrichment for email", "personalization hooks", "how to research prospects", or needs to make emails feel 1-to-1 at volume. Also triggers on "first line generation", "personalization buckets", "strong hook", "lite hook". Do NOT use for writing full email sequences (use first-touch/follow-up), deliverability, or subject lines only.
---

# Personalization at Scale

You build personalization strategies that make cold emails feel 1-to-1 even at high volume. You know the 6 data buckets, how to write AI prompts for Clay/enrichment tools, and the difference between strong and lite hooks.

## Process

1. **Assess data available** -- What enrichment tools and data sources does the user have?
2. **Pick personalization tier** -- Strong hook (verbatim tie) or Lite hook (conceptual tie)?
3. **Build the prompt or strategy** -- Provide AI prompts for Clay, data bucket selection, and hook templates

## Reference

Read `cold-email/resources/prompts/personalization-prompts.md` for the 6 buckets, hook types, playbook by category (inbound/outbound/postbound), and AI prompt templates.
Read `cold-email/resources/templates/campaign-playbooks.md` for advanced personalization playbooks (AI video, DynaPictures, lookalike, LinkedIn followers, job opening intent, ad scraping).

## 6 Data Buckets (Ranked by Value)

1. **Self-Authored Content** -- Posts, articles, webinars, speaking engagements (HIGHEST value)
2. **Engaged Content** -- What they commented on, shared, liked
3. **Self-Identified Traits** -- LinkedIn headline, about section, company line
4. **Junk Drawer** -- Personal interests, volunteer work, languages, schools
5. **Background Centric** -- Tenure, career trajectory, awards, certifications, mutual connections
6. **Company Level** -- News, funding, hiring, product launches, M&A (24 data points)

## Hook Types

**Strong Hook (Verbatim Tie):**
Direct quote or reference from their content. Example: "In your recent post about X, you mentioned Y..."

**Lite Hook (Conceptual Tie):**
Reference the theme without quoting. Example: "I noticed you're focused on X..."

## AI Prompt Principles

- Use AI for ONE specific part of the email, not the entire thing
- Control messaging for split-testing -- static text + dynamic personalization
- Show your work: "According to SimilarWeb, you get 50K visitors/month" (source attribution protects you if data is wrong)
- Never use generic AI compliments ("Love your work!")

## Fallback: Core-Static Relevance (No Personalization)

When personalization data is unavailable, use these 5 fallbacks:
1. Demographic (buyer persona)
2. Firmographic (company segment)
3. Firmographic (industry vertical)
4. Firmographic (market geos)
5. Technographic (tech stack)

## Examples

**Example 1: Clay prompt for custom first line (Bucket 1 -- Self-Authored)**
```
Find the most recent LinkedIn post by {{firstName}} {{lastName}} at {{company}}.
Summarize the post's main argument in one sentence.
Rules: Max 15 words, no generic compliments, reference a specific claim they made.
Output format: "Your recent take on [topic] -- specifically [specific claim] -- caught my attention."
```

**Example 2: Lite hook using company-level data (Bucket 6)**
```
Noticed {{company}} just raised a Series B -- congrats.

Most teams at this stage realize their outbound process that worked at seed doesn't scale past 50 reps.

We helped {{similar_company}} rebuild theirs in 3 weeks.

Worth a look?
```

**Example 3: Advanced playbook -- Job Opening Intent**
```
Saw {{company}} is hiring a {{role}}.

In our experience, companies hiring for that role are usually dealing with {{problem}}.

We helped {{similar_company}} solve that before their new hire even started -- saved 6 weeks of ramp time.

Open to a quick chat?
```
