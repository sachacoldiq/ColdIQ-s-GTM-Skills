---
name: website-visitors
description: Website visitor identification and tracking for B2B outbound. Use when the user asks about website visitor tracking, RB2B setup, pixel-based identification, IP-to-company matching, visitor de-anonymization, Warmly, Leadfeeder, Koala, visitor alerts, or Slack integration for website visitors. Do NOT use for content engagement on social (use content-engagement skill) or intent data from third parties (use multi-signal skill).
---

# Website Visitor Signals

Website visitors are the #3 buying signal by purchase correlation. They show active evaluation - especially pricing page, competitor comparison, and demo pages. Reply rate is 25-30% because they already know you. Act within 24-48 hours.

## Reference Files

- Read `signal-sourcer/resources/tool-setup-guides.md` for complete setup guides (RB2B, Warmly, Koala, Leadfeeder, 6sense, pixel vs IP comparison)

## Why Website Visitors Work

- **25-30% reply rate** - they already know your brand
- **Shows active evaluation** - pricing/demo pages = high intent
- **Act within 24-48 hours** - 10x higher conversion same-day
- Pricing page visit = 80 points (Tier 1), 5+ visits in 2 weeks = 50 points
- Multiple stakeholders from same account = 70 points (buying committee forming)

## Pixel vs IP Tracking

| Method | Level | Match Rate | Geography | Tools |
|---|---|---|---|---|
| Pixel-based | Person (name, email, LinkedIn) | 40-45% | US only | RB2B, Warmly |
| IP-based | Company (name, industry, size) | 35-40% | Global, GDPR-safe | Leadfeeder, Clearbit, ZoomInfo |

## RB2B Setup (Recommended Start)

1. **Sign up** at rb2b.com (Free tier available)
2. **Install pixel**: Add JavaScript snippet to website `<head>`
3. **Configure Slack**: Real-time visitor alerts to sales channel
4. **Set ICP filters**: Only alert on relevant visitors (title, company size, industry)
5. **Connect Clay webhook**: Enrich visitors + route to sequences

### Pricing
- **Free**: $0 - Person-level ID, 1 Slack workspace
- **Pro**: $99/mo - Person + company, webhooks, advanced filters
- **Scale**: Custom - High-volume, API access

### Key Limitation
Person-level identification is **US-only**. For EU/global traffic, use IP-based tools (Leadfeeder, Dealfront) for GDPR-compliant company-level identification.

## Page-Based Scoring

| Page Visited | Points | Intent Level |
|---|---|---|
| Pricing page | 80 | Active evaluation |
| Competitor comparison | 60 | Vendor comparison |
| Demo/trial page | 100 | Direct buying intent |
| Case study | 35 | Research phase |
| Blog post (single) | 10 | Awareness only |
| 3+ blog posts | 20 | Early research |
| 5+ visits in 2 weeks | 50 | Sustained interest |

## Tool Decision Framework

| Scenario | Tool |
|---|---|
| US-focused, need person data | RB2B + Warmly |
| Global/EU, need GDPR compliance | Leadfeeder (Dealfront) |
| HubSpot team | Breeze Intelligence (Clearbit) |
| Enterprise ABM | 6sense + RB2B |
| PLG, product signals matter | Koala or Warmly |
| Budget-conscious, getting started | RB2B Free or Leadfeeder Free |

## Key Rules

- VP+ on pricing page = Tier 1 signal, respond within 1 hour
- Do NOT say "I saw you visited our website" - reference their likely pain instead
- Multiple stakeholders from same company = buying committee forming, map all contacts
- Stack with intent data for compound scoring: pricing visit (80pts) + Bombora surge (40pts) = 120pts Hot

## Examples

Example 1: "How do I set up RB2B?"
-> Walk through pixel install, Slack integration, ICP filters, Clay webhook. Free tier for start, Pro at $99/mo for webhooks. US-only for person-level, company-level globally

Example 2: "A VP just visited our pricing page"
-> Tier 1 signal (80pts). Respond within 1 hour. Personalized email referencing their likely pain, NOT the visit. AE or SDR depending on account tier. Check for other signals to stack

Example 3: "We have EU traffic, what tool should we use?"
-> IP-based only for GDPR compliance. Leadfeeder (Dealfront) from EUR 99/mo, or Clearbit/Breeze if on HubSpot. Company-level identification, 35-40% match rate. Stack with LinkedIn engagement for person-level context
