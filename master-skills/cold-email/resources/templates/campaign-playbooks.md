# Campaign Playbooks

*Source: The Kiln Gitbook — Clay Agency*

## 1. AI Personalized Video Campaign (Sendspark)

**Concept:**
- AI video that says "Hi {{first_name}}"
- Background = scrolling the prospect's website
- Rest of the video = templatized

**Setup:**
1. Clay enriches prospect data
2. Sendspark generates the custom video
3. HTTP API connects the two
4. Push to sequencer

## 2. DynaPictures — Custom Images

**Example CVS Campaign:**
- Client sells ads in CVS stores
- Scrape prospects' Facebook/Google Ads
- Layer their ad onto an image of the CVS mini-billboard
- Send the personalized image by email

**Setup:**
1. Ad library scraping → Clay
2. DynaPictures API (HTTP API action)
3. Custom image generation per prospect
4. Push to campaign

## 3. Lookalike Campaigns

**Types:**
- Lookalikes of closed-won clients
- Lookalikes of positive responders
- Lookalikes of newsletter engagers

**How:**
1. Import your best customers into Clay
2. Enrich to find common patterns
3. Use those criteria to build similar lists
4. Outreach with messaging "companies like yours..."

## 4. LinkedIn Follower Campaign (Battle Cards)

**Concept:**
- Scrape competitor followers (via ScrapeApp)
- Import into Clay
- Create battle cards (your product vs competitor)
- Personalized outreach

**Template:**
```
Hey {{first_name}},

I noticed you follow {{competitor_name}} on LinkedIn.

Here are 3 reasons why companies switch from {{competitor}} to us:
1. [Downside 1 of competitor]
2. [Downside 2]
3. [Downside 3]

Would you be open to a quick comparison call?
```

## 5. Job Opening Intent Signal

**Signal:** Company hiring for specific role = need for your solution

**Workflow:**
1. Monitor job postings (via LinkedIn, Indeed scraping)
2. Filter by relevant roles
3. Find decision makers
4. Outreach: "I saw you're hiring for X, companies in this phase usually need Y..."

## 6. Ad Library Scraping Campaign

**Platforms:**
- Facebook Ad Library
- Google Ads transparency
- LinkedIn Ad Library

**Use cases:**
- Reference their current ads in outreach
- Use their ad creative in custom images
- Analyze their messaging for personalization

## Full Outbound Example — ClickUp Brain Campaign

*Case study of a real campaign*

### Context
- Product: ClickUp Brain (AI workspace)
- Target: Fortune 500 managers (product, project, senior managers)
- Goal: Bottom-up adoption → Enterprise upsell

### Clay Table 1: Fortune 500 Companies

| Column | Source | Purpose |
|--------|--------|---------|
| Company Name | Import | Base |
| LinkedIn URL | Enrich Company | Matching |
| Headcount Growth YoY | Enrichment | Intent signal #1 |
| +10% Growth? | Formula (checkbox) | Filtering |
| Recent News | Find Recent News | Intent signal #2 |
| Acquisition? | Formula (checkbox) | Filtering |
| Contact Page URL | Claygent | Backup data |
| Fundraising Data | Enrichment | Context |

### Clay Table 2: People at Fortune 500

| Column | Source | Purpose |
|--------|--------|---------|
| Person Name | Find People | Contact |
| Job Title | Find People | Targeting |
| Department | AI Classification | Personalization |
| LinkedIn Profile | Enrich Person | Data |
| Example Docs | AI Generation | Personalization |
| Custom Use Cases | AI (ClickUp features + company context) | Email copy |
| Work Email | Waterfall | Outreach |
| Custom First Line | AI (based on intent signals) | Email copy |

### Email Copy Structure
```
FIRST LINE (intent-based):
- If +10% growth: "Congrats on {{company}}'s recent growth..."
- If acquisition: "I saw {{company}} recently acquired {{acquired_company}}..."
- Else: Generic but personalized line

VALUE PROP:
"Have you ever wished you could create a bot out of {{company}}'s
{{department}} docs and ask a question whenever you had one?"

USE CASES:
"For example, at {{company}} you could use ClickUp Brain to:
{{custom_use_cases_based_on_their_docs}}"

SOCIAL PROOF + CTA
```

### Key Takeaways
1. **Multi-signal intent:** Stack headcount growth + acquisition news
2. **Department-based personalization:** Different docs for different roles
3. **AI-generated use cases:** Based on company description + ClickUp features
4. **Formula-based email assembly:** Merge all pieces cleanly

## Inbound Example — Triggery + Google Reviews

### Workflow
```
LinkedIn Post Engagement (Triggery webhook)
          ↓
    Clay Table
          ↓
    Enrich Company
          ↓
    Match to Service Offering
          ↓
    Find Google Reviews
          ↓
    Extract Reviewer Name + Review Content
          ↓
    Generate Custom Message
          ↓
    Push to SmartLead
```

### Email Example
```
Hey {{first_name}},

Saw you engaged with our post about {{post_summary}}.

I noticed on Google that {{reviewer_name}} left a great review
about how {{company}} helped them with {{review_summary}}.

We help {{industry}} companies like yours with exactly that.
For example, {{matched_case_study}}.

Would you be open to a quick chat?
```

### Power Moves
1. **Reviewer name in email** = Proves you actually researched
2. **Industry-specific case study** = Relevant social proof
3. **Post reference** = Warm intro (they engaged first)
4. **Local business focus** = Google Maps data where LinkedIn fails
