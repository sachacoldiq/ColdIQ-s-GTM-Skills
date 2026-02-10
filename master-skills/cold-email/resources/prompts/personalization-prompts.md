# Personalization Prompts & Best Practices

## 6 Buckets of Personalization (Flip The Script)

### Bucket 1: Self-Authored Content
Content the prospect has created themselves:
1. Speaking Engagements
2. Webinars
3. Articles
4. Posts

**Usage:** Highest value personalization. Reference their thought leadership directly.

### Bucket 2: Engaged Content
Content the prospect has interacted with:
1. Commented On
2. Shared
3. Liked Comments
4. Liked Posts

**Usage:** Shows what topics interest them. Reference shared interests.

### Bucket 3: Self-Identified Traits
How the prospect describes themselves:
1. Profile Line ("About me" Section)
2. Company Line (Role, Specialization & Achievements Description)
3. Headline (Below Profile Picture)

**Usage:** Use their own words to frame relevance.

### Bucket 4: Junk Drawer
Personal details from their profile:
1. Personal Interests
2. Volunteer Experience: Personal (Charity)
3. Languages Spoken
4. Schools Attended
5. Interested In/Following

**Usage:** Build rapport but don't overdo it. Use sparingly.

### Bucket 5: Background Centric
Professional history and credentials:
1. Tenure at Company
2. Professional Trajectory (Movement Between Companies)
3. Recommendations Given/Received
4. Boards They're On
5. Volunteer Experience: Professional (Mentorship)
6. Awards Received
7. Certifications
8. Mutual Connections
9. Skill Endorsements

**Usage:** Reference career achievements and professional credibility.

### Bucket 6: Company Level
Company-wide information (24 data points):
- Company Website Language, Posts, Blog Entries
- News Mentions, IPO, Funding, Financial Reports
- M&A Activity (Acquired, Were Acquired, Merged)
- Growth, Hiring, Key Hires
- HQ Moves, New Locations
- Products, Features, Integrations releases
- Marketing Moves, Competitor Moves
- Negative/Positive Outputs, Midputs, Inputs

**Usage:** Trigger-based personalization at scale.

## 5 Types of Core-Static Relevance

Fallback relevance when personalization isn't possible:
1. **Demographic:** Buyer Persona
2. **Firmographic:** Company Segment
3. **Firmographic:** Company Industry Vertical
4. **Firmographic:** Company Market Geos
5. **Technographic:** Tech Stack

## Personalization Hooks

**Strong Hook (Verbatim Tie):**
- Direct quote or reference from their content
- Example: "In your recent post about X, you mentioned Y..."

**Lite Hook (Conceptual Tie):**
- Reference the theme/topic without direct quote
- Example: "I noticed you're focused on X..."

## Personalization Playbook by Category

**INBOUND:**
- First Line: Trigger-Based Relevance ONLY
- Second Line: CTA to Book Time (Optional: Core-Static Relevance)

**POSTBOUND/BRIDGEBOUND:**
- First Line: Trigger-Based Relevance + ("but more importantly") Personalization
- Second Line: Personalization "Hook" + Core-Static Relevance

**OUTBOUND:**
- First Line: Personalization Title or Summary + Personalization Excerpt
- Second Line: Personalization "Hook" + Core-Static Relevance

## No Personalization Playbook (Automated Templates)

**INBOUND:** Trigger-Based Relevance → CTA
**POSTBOUND/BRIDGEBOUND:** Trigger-Based Relevance → Core-Static Relevance
**OUTBOUND:** Core-Static Relevance (Pattern Interrupt) → Core-Static ("We work with...")

## Personalization Best Practices

**DO:**
- Custom prompts based on research
- Facts prospects consistently care about
- Time business was founded (owners proud of longevity)
- Recent company news/changes
- Tech stack signals

**DON'T:**
- Generic AI compliments ("Love your work!")
- Content that sounds same as what they already have
- Over-personalization that feels creepy
- Complimenting LinkedIn posts without substance

---

## AI Personalization Prompts (lemlist Style)

### ICP Identification Prompt
```
Find the top 3 most likely ICPs this person is prospecting based on {{companyDomain}}.
If unavailable, use {{companyDescription}}.

Rules:
- Keep ICPs to just job titles (max 3)
- Use shorter, abbreviated alternatives (CEO not Chief Executive Officer)
- Always use "and" before the last example
- Never end with a full stop
```

### Short Company Description Prompt
```
Describe the company in one concise sentence based on {{companyDomain}} or {{companyDescription}}.

Rules:
- Don't mention company name or ICP
- Maximum 8 words
- Keep tone neutral, all lower case
- No quotes in output
- Use main value prop from website

Output must fit in: "Getting people interested in [insert] isn't the easiest thing in the world."
```

### Similar Product/Service Prompt
```
Categorize the product/service type based on {{companyDomain}} or {{companyDescription}}.

Rules:
- Maximum 6 words, neutral tone, all lower case
- Keep it singular, avoid vagueness
- Can use abbreviations

Output must fit in: "We work with a similar [output]."
```

### Top 3 Problems Prompt
```
Identify top 3 problems of the main ICP based on {{companyDomain}} or {{companyDescription}}.

Requirements:
- Problems directly linked to lagging indicators
- Rank 1-3 with 1 being biggest
- Each problem max 10 words
- Don't capitalize, no full stop at end
- Add "and" before problem 3

Format: [Problem 1], [Problem 2], and [Problem 3]
```

### Subject Line Prompt
```
Write a two-word email subject line based on {{companyDomain}} or {{companyDescription}}.

Rules:
- MUST be exactly 2 words
- All lower case
- Relevant to user's business
- No sales/spam/buzz words
- Should flow into email naturally
```
