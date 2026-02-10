# Signal Scoring & Signal-Based Selling Framework

## Building a Signal Scoring System

### Step 1: Define Signal Categories

**First-Party Signals (Strongest)**
- Website behavior (pages, frequency, recency)
- Product usage (feature adoption, usage spikes)
- Email engagement (opens, clicks, replies)
- Content downloads (whitepapers, case studies)
- Event attendance (webinars, demos)

**Second-Party Signals (Strong)**
- LinkedIn engagement (likes/comments on your posts)
- G2/review site activity (comparisons, reviews)
- Community engagement (Slack, Discord, GitHub)
- Social mentions and discussions

**Third-Party Signals (Moderate to Strong)**
- Bombora/intent data surges
- Job changes (champion to new company)
- Funding rounds
- Hiring signals (relevant roles)
- Technology stack changes
- Company news (expansion, acquisitions)

### Step 2: Assign Weights

#### Tier 1 — Hot Signals (50-100 points)

| Signal | Points | Rationale |
|--------|--------|-----------|
| Demo/pricing request | 100 | Direct buying intent |
| 3+ pricing page visits in 7 days | 80 | Active evaluation |
| Champion job change to target account | 75 | Warm intro opportunity |
| Multiple stakeholders from same account | 70 | Buying committee forming |
| Product trial signup | 65 | Hands-on evaluation |
| G2 comparison with competitors | 60 | Active vendor comparison |
| 5+ website visits in 2 weeks | 50 | Sustained interest |

#### Tier 2 — Warm Signals (20-49 points)

| Signal | Points | Rationale |
|--------|--------|-----------|
| Series A/B/C funding | 45 | Budget availability |
| Relevant job posting | 40 | Organizational need |
| Bombora topic surge (score 70+) | 40 | Active research |
| Case study download | 35 | Research phase |
| LinkedIn engagement with your content | 30 | Brand awareness |
| Webinar attendance | 25 | Category interest |
| 3+ blog post visits | 20 | Early research |

#### Tier 3 — Cool Signals (5-19 points)

| Signal | Points | Rationale |
|--------|--------|-----------|
| Company news (expansion) | 15 | Potential trigger |
| Single website visit | 10 | Awareness only |
| Industry report download | 10 | General interest |
| Email open (no click) | 5 | Minimal engagement |
| Social follow (no engagement) | 5 | Passive awareness |

### Step 3: Apply Recency Multipliers

| Recency | Multiplier |
|---------|-----------|
| Last 24 hours | 1.5x |
| Last 7 days | 1.2x |
| Last 14 days | 1.0x |
| Last 30 days | 0.7x |
| 30+ days ago | 0.3x |

### Step 4: Multi-Signal Stacking

| Scenario | Signals | Score | Priority |
|----------|---------|-------|----------|
| **Red Hot** | Pricing page (80) + Champion job change (75) + Bombora surge (40) | 195 | Immediate action |
| **Very Warm** | Funding (45) + Hiring (40) + 3 blog visits (20) | 105 | Same-day outreach |
| **Warm** | Website visit (10) + LinkedIn engagement (30) + Email click (15) | 55 | Nurture sequence |
| **Cool** | Blog visit (10) + Email open (5) | 15 | Monitor only |

### Step 5: Action Thresholds

| Score Range | Heat Level | Action |
|-------------|-----------|--------|
| 150+ | Red Hot | Immediate manual outreach by AE |
| 100-149 | Hot | SDR personalized sequence within 24h |
| 50-99 | Warm | Automated nurture + SDR monitoring |
| 20-49 | Cool | Marketing nurture campaigns |
| 0-19 | Cold | Monitor for signal changes |

### Implementation Tools

- **Common Room**: Built-in scoring across 50+ sources
- **Koala**: Product + website signal scoring
- **Clay**: Custom scoring formulas with enrichment data
- **HubSpot/Salesforce**: Native lead scoring with intent integration
- **6sense**: AI predictive scoring

---

## Signal-Based Selling Framework

### Core Principle

**Relevant signal + Right action + Right timing = Smarter outbound**

Replace volume-based prospecting with intent-driven outreach. Instead of 1,000 cold emails, send 50 highly relevant messages to people showing buying signals.

### Signal Tier System & Response SLAs

#### Tier 1: Drop-Everything Signals (< 1 hour)

| Signal | Action | Channel | Owner |
|--------|--------|---------|-------|
| Demo request | Personal follow-up + calendar link | Email + Phone | AE |
| 3+ pricing page visits (VP+) | Personalized email referencing pricing | Email | SDR |
| Champion job change to target | Congratulations + re-engagement | LinkedIn + Email | AE |
| Multiple stakeholders from same company | Map buying committee, multi-touch | All channels | AE + SDR |

#### Tier 2: Act-Today Signals (< 24 hours)

| Signal | Action | Channel | Owner |
|--------|--------|---------|-------|
| Funding round ($10M+) | "Congratulations" + relevant case study | Email | SDR |
| Relevant job posting | Connect hiring pain to your solution | LinkedIn + Email | SDR |
| Bombora surge score 70+ | Reference their research area | Email | SDR |
| G2 comparison activity | Send competitive battlecard | Email | SDR |

#### Tier 3: Act-This-Week Signals (< 72 hours)

| Signal | Action | Channel | Owner |
|--------|--------|---------|-------|
| Funding round (<$10M) | Lighter congratulations + nurture | Email | Marketing |
| 3+ content articles read | Send related premium content | Email | Marketing |
| Webinar attendance | Recording + related offer | Email | SDR |
| Industry news mention | Comment on news + soft touch | LinkedIn | SDR |

#### Tier 4: Monitor & Nurture (Automated)

| Signal | Action | Channel |
|--------|--------|---------|
| Single website visit | Add to retargeting audience | Ads |
| Email open (no click) | Continue nurture sequence | Email |
| Social follow | Engage with their content | LinkedIn |

### Response Time Benchmarks

| Signal Type | Best Practice | Industry Average | Impact |
|-------------|--------------|-----------------|--------|
| Inbound demo | < 5 minutes | 42 hours | 21x more likely to qualify at 5 min vs 30 min |
| Website visitor (high intent) | < 1 hour | 24-48 hours | 10x higher conversion same-day |
| Champion job change | < 24 hours | 1-2 weeks | 3x higher win rate as first mover |
| Funding announcement | < 72 hours | 1-2 weeks | Window closes as competitors swarm |
| Intent surge | < 24 hours | Not tracked | 50% of value lost after 7 days |

### Building "Plays" (Signal-to-Action Playbooks)

Each play includes:
1. **Trigger**: Specific signal or combination
2. **Qualification**: Does account/contact match ICP?
3. **Action sequence**: Exactly what to do
4. **Messaging template**: Personalized to the signal
5. **Timing**: Response SLA
6. **Owner**: Who is responsible
7. **Escalation**: What if no response

#### Example Play: "Champion Job Change"
```
TRIGGER: Past customer/champion changes jobs to target account
QUALIFICATION: New company fits ICP (size, industry, tech)
TIMING: Within 24 hours
SEQUENCE:
  Day 0: LinkedIn connection request + congratulations
  Day 1: Email referencing past relationship + how you helped before
  Day 3: Share relevant case study for their new industry
  Day 7: Phone call attempt
  Day 10: Final email with soft CTA (coffee chat, not demo)
OWNER: AE who owned the relationship
ESCALATION: Day 14 → automated nurture
```

#### Example Play: "Website Visitor + Intent Surge"
```
TRIGGER: VP+ visits pricing page AND Bombora surge 60+ on relevant topic
QUALIFICATION: Company in ICP, contact is decision-maker
TIMING: Within 1 hour
SEQUENCE:
  Hour 0: Slack alert to assigned SDR/AE
  Hour 1: Personalized email referencing their likely pain
  Day 1: LinkedIn connection + value-add message
  Day 2: Phone call attempt
  Day 3: Email #2 with case study
  Day 5: LinkedIn voice note or video message
OWNER: SDR for outreach, AE cc'd
ESCALATION: If engagement → AE takes over immediately
```

### Workflow Automation Stack

```
Signal Sources           Orchestration          Action Layer
--------------           -------------          ------------
RB2B (website)     -->   Clay (enrich +   -->   Outreach/Salesloft
Trigify (LinkedIn)       filter + route)        (email sequences)
Common Room        -->                    -->   LinkedIn (manual/
(community)              HubSpot/SFDC          automated)
Bombora (intent)   -->   (CRM + scoring)  -->   Slack (real-time
                                                alerts to reps)
```

### Performance Benchmarks

| Approach | Reply Rate | Contract Value |
|----------|-----------|---------------|
| Cold outreach (no signal) | 6-8% | Baseline |
| Single signal-based | 18-22% | 2-3x baseline |
| Multi-signal stacked (3+) | 35-40% | 3-4x baseline |
| Signal + ABM multi-touch | 36% meeting rate | Highest |
