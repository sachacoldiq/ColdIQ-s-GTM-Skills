---
name: competitor-signals
description: Competitor engagement signal tracking for B2B outbound. Use when the user asks about competitor signals, bad review targeting, G2/Capterra scraping, LinkedIn follower scraping from competitors, battle cards, competitor customer targeting, or churned competitor customers. Do NOT use for tech stack changes broadly (use tech-changes skill) or general content engagement (use content-engagement skill).
---

# Competitor Signals

Competitor signals come from Category III of the signal taxonomy (Based on Likely "In Market"). They reveal prospects actively evaluating alternatives, unhappy with current vendors, or engaging with competitor content. G2 comparison activity = 60 points (Tier 1).

## Reference Files

- Read `signal-sourcer/resources/signal-taxonomy.md` for Category III: Competitors (triggers 8-16)
- Read `signal-sourcer/resources/examples/signal-campaigns/gtm-plays.md` for Play 8 (Bad Reviews) and Play 11 (Inbound Followers)

## 9 Competitor Triggers (from Taxonomy)

1. **Churned customers (negative review)** - Left competitor, left a bad review
2. **Churned customers (disintegration)** - Integration broke, product sunset
3. **Current customers (website activity)** - Competitor users visiting your site
4. **Current customers (integration use)** - Using a tool that integrates with yours
5. **In-cycle customers** - Actively evaluating competitors now
6. **Engaged with competitor content** - Liking/commenting on competitor posts
7. **Followers of competitor page** - Brand-aware of the category
8. **Mutual connections with competitor** - Network proximity
9. **G2/Capterra comparison activity** - Active vendor comparison

## Scoring by Signal Type

| Competitor Signal | Points | SLA | Rationale |
|---|---|---|---|
| G2 comparison (your product vs competitor) | 60 | < 24h | Active vendor comparison |
| Churned competitor customer (bad review) | 50 | < 24h | Pain is documented and public |
| Competitor user visiting your website | 50 | < 1h | Cross-shopping actively |
| In-cycle evaluation | 45 | < 24h | Buying window open |
| Engaged with competitor LinkedIn content | 25 | < 72h | Category interest |
| Follower of competitor page | 15 | This week | Passive awareness |

## Play: Bad Reviews Targeting (Play 8)

1. Scrape G2/Capterra for negative reviews of competitors (identifiable reviewers)
2. Match reviewers to LinkedIn profiles via Clay
3. Reference their specific pain point from the review
4. Offer an alternative comparison

**Template:**
```
Just saw your review of {{competitor}}...
We researched and tested 3 alternatives (that do not suck).
Shall I send the report to you?
Cheers,
[Name]
```

## Play: Competitor LinkedIn Followers

1. Scrape competitor LinkedIn company page followers via Clay/Phantombuster
2. Filter to ICP contacts (title, company size, industry)
3. They are category-aware - position your differentiator

**Template:**
```
Hey {{first_name}}, noticed you follow {{competitor}}.
Most {{title}}s I talk to chose us over them because of {{key_differentiator}}.
Worth a quick look? Here is a 2-min comparison: [link]
```

## Play: Competitor Customer Targeting

1. Identify competitor customers via BuiltWith, LinkedIn, G2 profiles
2. Look for renewal timing (annual contracts = predictable switch windows)
3. Time outreach 60-90 days before likely renewal

## Key Rules

- Bad reviews are public data - ethical to reference
- Do NOT trash-talk the competitor - position as an alternative, not a replacement
- G2 comparison activity is a Tier 1 signal (60pts) - send competitive battlecard within 24h
- Competitor users on your website = cross-shopping, highest urgency
- Stack with intent data: competitor follower (15pts) + Bombora surge (40pts) + website visit (50pts) = 105pts Hot

## Examples

Example 1: "Target unhappy users of our competitor"
-> Scrape G2/Capterra negative reviews, match to LinkedIn profiles in Clay, filter to ICP, reference their specific pain point. 50pts signal, SDR personalized outreach within 24h

Example 2: "Someone from a competitor customer just visited our pricing page"
-> Compound signal: competitor customer (implied) + pricing visit (80pts). Tier 1 response within 1 hour. They are actively cross-shopping. AE or senior SDR outreach

Example 3: "Scrape our competitor LinkedIn followers for outreach"
-> Clay/Phantombuster to scrape followers, enrich with company data, filter ICP, score at 15pts base. Personalized outreach referencing category interest and your key differentiator. Stack with other signals to prioritize
