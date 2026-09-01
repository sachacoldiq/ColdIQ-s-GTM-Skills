# ICP Framework & Targeting Guide

How to define who you are targeting, score them, and turn that into title and keyword
patterns you can hand straight to Prospeo. Pair with `prospeo-list-building.md` for the filters.

### Boolean Formulas by ICP

#### SaaS Decision Makers
```
Title: (VP OR "Vice President" OR Director OR Head OR Chief) AND (Marketing OR "Demand Gen" OR "Growth" OR "Digital")
Company Keywords: (SaaS OR "B2B software" OR "cloud-based" OR "subscription")
Seniority: VP, Director, CXO
Industry: Computer Software, Internet, IT & Services
Headcount: 51-500
```

#### C-Suite Targeting
```
Title: (CEO OR "Chief Executive Officer" OR Founder OR "Co-Founder" OR "Managing Director" OR President OR Owner)
NOT: (assistant OR intern OR student OR "job seeking")
```

#### VP of Sales at Mid-Market Tech
```
Title: ("VP Sales" OR "Vice President Sales" OR "VP of Sales" OR "Head of Sales" OR CRO OR "SVP Sales")
Industry: Computer Software, Internet, SaaS
Headcount: 201-1000
```

#### HR / People Decision Makers
```
Title: (CHRO OR "Chief People Officer" OR "VP HR" OR "Head of People" OR "Head of HR" OR "Director of Talent")
NOT: (recruiter OR coordinator OR assistant OR intern OR generalist)
```

#### IT Decision Makers
```
Title: (CTO OR CIO OR CISO OR "VP Engineering" OR "VP IT" OR "Head of Engineering" OR "Director of IT")
NOT: (intern OR junior OR associate OR student)
```

#### Startup Founders (Seed to Series B)
```
Title: (Founder OR "Co-Founder" OR CEO OR "Chief Executive")
Company keywords: (seed OR "series A" OR "series B" OR startup OR "early stage")
Headcount: 1-200
Changed jobs in past 90 days: Yes
```

#### Multi-Role Targeting (Buying Committee)
```
Search 1 (Economic Buyer): CEO OR CFO OR "VP Finance"
Search 2 (Champion): "Head of Marketing" OR "Marketing Director" OR "VP Marketing"
Search 3 (User): "Marketing Manager" OR "Digital Marketing" OR "Demand Gen Manager"
Search 4 (Blocker): "General Counsel" OR "Head of Legal" OR "Compliance"
```

#### Exclude False Positives
```
Title: (Director OR VP OR Head) AND Marketing NOT ("Account Director" OR "Art Director" OR "Creative Director" OR assistant OR associate)
```
## ICP Framework
### Firmographic Criteria (Company-Level)

| Criterion | Description | Prospeo Filter |
|-----------|-------------|-----------------|
| Industry | Primary vertical | Industry filter |
| Company size | Employee count | Headcount filter |
| Revenue | Annual revenue | Revenue (Advanced+) |
| Geography | HQ location | HQ location |
| Growth rate | Headcount growth % | Growth filter |
| Funding stage | Seed to IPO | Keywords + external |
### Technographic Criteria

| Criterion | Source |
|-----------|--------|
| Tech stack | Prospeo AI Attributes + Integrations |
| CRM | Prospeo Integrations |
| Marketing automation | Prospeo Integrations |
| Competitive tools | Prospeo Competitive Intel |
### Behavioral/Intent Criteria

| Signal | Source |
|--------|--------|
| Job postings | Prospeo Company News (hiring) |
| Funding events | Prospeo Funding |
| Leadership changes | Prospeo Key Executive Events |
| Content engagement | Prospeo Website Traffic + Company News |
| Web visits | your website visitor tool |
### ICP Scoring (Tier System)

**Tier A (90-100 pts), "Perfect Fit"**
- ALL firmographic match, complementary tech, active intent, has budget
- Action: Maximum resources, multi-threaded outreach, ABM campaigns

**Tier B (70-89 pts), "Strong Fit"**
- Most firmographic match, partial tech match, some intent
- Action: Targeted outreach, personalized sequences

**Tier C (50-69 pts), "Moderate Fit"**
- Some firmographic match, limited tech data, no clear intent
- Action: Automated nurture, content marketing

**Tier D (<50 pts), "Poor Fit"**
- Significant mismatches
- Action: Exclude from outreach, inbound-only
### Scoring Matrix

| Criterion | Weight | Scoring |
|-----------|--------|---------|
| Industry match | 20 pts | Exact = 20, Adjacent = 10, None = 0 |
| Company size | 15 pts | Sweet spot = 15, Adjacent = 8, Outside = 0 |
| Revenue range | 15 pts | Sweet spot = 15, Adjacent = 8, Unknown = 0 |
| Geography | 10 pts | Primary = 10, Secondary = 5, Other = 0 |
| Technology fit | 15 pts | Complement = 15, Neutral = 8, Competitor = 5 |
| Growth signals | 10 pts | High = 10, Moderate = 5, Stagnant = 0 |
| Intent signals | 15 pts | Strong = 15, Some = 8, None = 0 |
| **Total** | **100 pts** | |
### List Segmentation

1. By buying stage: Cold, Warm, Hot
2. By persona: One list per buyer persona
3. By intent level: High/Medium/Low
4. By timezone: For cadence timing
5. Keep lists under 1,000 for personalization
6. Naming: `[Tier]-[Persona]-[Vertical]-[Geo]-[Date]`
## ABM List Building
### Target Account List

- **Tier 1 (1:1 ABM)**: 10-50 accounts, fully custom
- **Tier 2 (1:Few)**: 50-200 accounts, segment-based
- **Tier 3 (1:Many)**: 200-1,000 accounts, programmatic
### Contact Mapping Per Account

| Role | Typical Title | Purpose |
|------|--------------|---------|
| Economic Buyer | CEO, CFO, VP | Final budget approval |
| Champion | Director, Head of | Internal advocate |
| Technical Evaluator | Manager, Architect | Evaluates technical fit |
| End User | Analyst, Specialist | Daily user |
| Blocker | Legal, Compliance | Can slow/stop deal |
| Coach | Any level | Provides inside info |
