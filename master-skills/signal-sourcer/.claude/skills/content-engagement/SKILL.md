---
name: content-engagement
description: Content engagement signal tracking for B2B outbound. Use when the user asks about content engagement signals, LinkedIn post likes/comments, webinar attendance, newsletter engagement, Trigify setup, social engagement tracking, or community engagement signals. Do NOT use for website visitor tracking (use website-visitors skill) or competitor content engagement (use competitor-signals skill).
---

# Content Engagement Signals

Content engagement signals span INBOUND and POSTBOUND categories in the taxonomy. They reveal brand awareness, category interest, and research activity. LinkedIn engagement = 30 points (Tier 2). Webinar attendance = 25 points. These are warm prospects who already know you.

## Reference Files

- Read `signal-sourcer/resources/signal-taxonomy.md` for INBOUND triggers 1-30 (content, events, social engagement)
- Read `signal-sourcer/resources/examples/signal-campaigns/gtm-plays.md` for Play 11 (Inbound Followers)

## Content Signal Types

### First-Party (Your Content)
| Signal | Points | Category |
|---|---|---|
| Webinar attendance | 25 | INBOUND - Category interest |
| Case study download | 35 | INBOUND - Research phase |
| Newsletter subscriber | 15 | INBOUND - Brand awareness |
| 3+ blog posts read | 20 | INBOUND - Early research |
| Email click-through | 15 | POSTBOUND - Active interest |
| Aggressive email opens | 10 | POSTBOUND - Monitoring |

### Second-Party (Social Engagement)
| Signal | Points | Category |
|---|---|---|
| Commented on your LinkedIn post | 35 | POSTBOUND - Active engagement |
| Liked your LinkedIn post | 25 | POSTBOUND - Passive engagement |
| Followed company LinkedIn page | 15 | INBOUND - Brand awareness |
| Community engagement (Slack/Discord) | 30 | INBOUND - Active interest |
| Engaged with employee personal page | 20 | POSTBOUND - Network awareness |

## Trigify Setup (LinkedIn Engagement Tracking)

1. **Create account** at trigify.io
2. **Add LinkedIn URLs** to monitor (your company page, executive profiles, competitor pages)
3. **Configure signal types**: Engagement, Social Signals, Job Changes
4. **Set up Clay webhook**:
   - Clay: Create table with webhook source, copy webhook URL
   - Trigify: Select data sources, enter Clay webhook URL, test connection
5. **Trigify sends automatically** on each new engagement event

### What Trigify Captures
- Person: name, title, company, LinkedIn URL
- Engagement: post URL, type (like/comment), comment text
- Company data: size, industry, domain
- Signal type: engagement, job change, viral post

### Pricing
- Plans based on tracked profiles and signal volume
- Free trial available
- Starts at $69/mo, scales to $549/mo for high volume

## Play: Inbound Followers (Play 11)

1. Monitor new LinkedIn followers daily (Trigify or manual)
2. Filter to ICP via Clay enrichment
3. Personalized outreach within 24-48 hours

**Template:**
```
Hey {{first_name}}, thanks for the follow.
Noticed you are a {{title}} at {{company}}.
Most {{title}}s I talk to are dealing with {{common_problem}}.
Is that on your radar?
```

## Play: Post Engagers

1. Track likes/comments on your high-performing posts (Trigify)
2. Commenters > Likers in intent (active vs passive)
3. Reference the post topic in outreach

**Template:**
```
Hey {{first_name}}, saw your comment on our post about {{topic}}.
Sounds like {{relevant_insight_from_comment}}.
We actually built [solution] for exactly that - want a closer look?
```

## Key Rules

- Commenters are 2x more valuable than likers (active engagement vs passive)
- Webinar attendees > registrants (they actually showed up)
- Do NOT reference the exact signal ("I saw you liked my post") - reference the topic interest
- Stack content signals with website visits for compound scoring: blog visits (20pts) + LinkedIn engagement (30pts) + email click (15pts) = 65pts Warm
- Trigify is the primary tool for LinkedIn engagement tracking ($69-$549/mo)

## Examples

Example 1: "Set up Trigify to track LinkedIn engagement"
-> Create Trigify account, add company page + executive LinkedIn URLs, configure for likes/comments/follows, set up Clay webhook, filter to ICP contacts, route qualified engagers to SDR Slack channel

Example 2: "Someone commented on our LinkedIn post and they match ICP"
-> 35pts signal (comment). Outreach within 24-48h. Reference the topic of the post and their comment insight. Warm touch, not a hard sell. Check for other signals to stack

Example 3: "Track who attends our webinars and follow up"
-> 25pts per attendee. Enrich in Clay with company/title data, filter to ICP, send recording + relevant offer within 48h. SDR owns outreach. Registrants who did NOT attend get lighter nurture follow-up
