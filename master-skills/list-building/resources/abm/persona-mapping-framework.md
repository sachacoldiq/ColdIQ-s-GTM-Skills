# Persona Mapping — Framework

How to identify, segment, and target personas within ABM accounts. Mapping personas to their jobs-to-be-done (JTBDs), pain points, and messaging.

---

## The Persona Mapping Principle

ABM targets *accounts*, but people buy — not companies. Persona mapping answers:
1. **Who** at the target account should see your ads?
2. **What** do they care about? (JTBDs, pain points)
3. **How** should messaging differ by persona?
4. **When** should BDRs reach out to which persona?

---

## Identifying Personas

### Step 1: Analyze Your Closed-Won Deals

Look at your CRM data for closed-won deals:

| Question | What You're Looking For | Source |
|---|---|---|
| Who was the primary contact on won deals? | Most common titles/roles | CRM deal contacts |
| Who initiated the buying process? | Champion persona | CRM first touch data |
| Who signed the contract? | Economic buyer persona | CRM deal owner notes |
| Who else was involved in evaluation? | Buying committee members | CRM activity log, call notes |
| What was their typical seniority? | IC vs Manager vs VP vs C-suite | CRM contact properties |

### Step 2: Map the Buying Committee

Most B2B deals involve 6-10 stakeholders. Map the roles:

| Role | Definition | Example Titles | Engagement Priority |
|---|---|---|---|
| **Champion** | Internal advocate who drives the deal | Product Manager, Head of Ops, Director of Growth | Primary — warm them first |
| **Economic Buyer** | Controls budget, signs the contract | VP/C-suite, Finance | Engage after champion is warm |
| **Technical Evaluator** | Assesses product capabilities | Engineering Lead, Solutions Architect, IT | Engage during demo/trial stage |
| **End User** | Will use the product daily | Analyst, Designer, Specialist, IC | Engage with product-focused content |
| **Blocker/Gatekeeper** | Can slow or kill the deal | Legal, Procurement, IT Security | Address concerns proactively |

### Step 3: Define Persona Attributes

For each persona, document:

| Attribute | What to Capture | Example |
|---|---|---|
| **Title patterns** | Common job titles | "Product Manager", "Head of Product", "VP Product" |
| **Seniority** | IC / Manager / Director / VP / C-suite | Manager - Director |
| **Function** | Department/team | Product, Engineering, Marketing |
| **JTBD** | Job to be done — what they're trying to accomplish | "Improve user onboarding to reduce churn" |
| **Pain points** | What's frustrating them today | "Can't see where users drop off", "Manual onboarding flows" |
| **Success metrics** | How their performance is measured | Activation rate, time-to-value, NPS |
| **Content preferences** | What content resonates | Case studies, data/benchmarks, peer recommendations |
| **Buying role** | Champion / Economic Buyer / Evaluator / User / Blocker | Champion |

---

## Persona Enrichment with Clay

### Custom Properties to Enrich

When building contact lists in Clay, enrich beyond standard fields:

| Property | How to Enrich | Why |
|---|---|---|
| **Persona** (custom) | Map from title using Clay AI/rules | Enables persona-specific campaigns |
| **Seniority** (custom) | Map from title (IC/Manager/Director/VP/C-Suite) | Different messaging by seniority |
| **Function** | Extract from LinkedIn profile | Department-specific JTBDs |
| **LinkedIn URL** | Apollo / Clay | For LinkedIn outreach + audience matching |
| **Verified email** | Email waterfall in Clay | For outreach sequences |

### Persona Assignment Rules

Create rules in Clay to auto-assign personas:

```
IF title contains "Product Manager" OR "PM" OR "Head of Product" OR "VP Product" OR "CPO":
  → Persona = "Product"

IF title contains "UX" OR "UI" OR "Designer" OR "Design Lead":
  → Persona = "UX/Design"

IF title contains "Marketing" OR "Growth" OR "PMM" OR "Demand Gen":
  → Persona = "Marketing"

IF title contains "CTO" OR "VP Engineering" OR "Engineering Manager":
  → Persona = "Engineering"

IF title contains "CEO" OR "COO" OR "Founder" OR "General Manager":
  → Persona = "Executive"

IF title contains "Customer Success" OR "CX" OR "Support":
  → Persona = "Customer Success"
```

---

## Persona-Based Messaging

### Messaging Matrix

| Persona | Primary JTBD | Pain Point | Messaging Angle | Ad Content Example |
|---|---|---|---|---|
| **Product** | Improve user activation/retention | Can't see user behavior, manual processes | "See exactly where users drop off" | Product analytics screenshots, feature walkthrough |
| **UX/Design** | Create better user experiences | No data on user flows, guesswork | "Design based on real user behavior" | Session replay demo, heatmap visuals |
| **Marketing** | Drive pipeline, prove ROI | Can't attribute conversions, poor lead quality | "Know which campaigns actually drive revenue" | ROI dashboards, attribution data |
| **Engineering** | Ship faster, reduce tech debt | Too many tools, complex integrations | "One platform, simple integration" | API docs, integration showcase |
| **Executive** | Hit revenue/growth targets | Slow growth, high churn, team misalignment | "Companies like yours grew X% with us" | Case study with numbers, ROI calculator |
| **Customer Success** | Reduce churn, improve NPS | Can't identify at-risk users proactively | "Spot churn risk before it's too late" | Health score dashboards, alert demos |

### Messaging by ABM Stage

| Stage | Product Persona | Executive Persona | UX Persona |
|---|---|---|---|
| **Awareness** | Industry trend / thought leadership about user analytics | "CEOs at top SaaS companies are investing in..." | Design community content, UX best practices |
| **Interested** | Feature comparison vs competitors | ROI data, business impact numbers | Session replay deep-dive, workflow demos |
| **Considering** | Product demo, free trial, technical walkthrough | Case study from peer company, executive briefing | Design-focused case study, UX workflow example |

---

## LinkedIn Targeting by Persona

### Two Approaches

**Approach 1: Contact List Upload (More Precise, More Expensive)**
1. Find specific contacts at target accounts in Clay/Apollo
2. Enrich with email
3. Upload to HubSpot as marketing contacts
4. Sync to LinkedIn via HubSpot Ad Audiences
5. Create separate campaigns per persona list

**Pros:** Very precise targeting
**Cons:** Expensive (Clay credits + HubSpot marketing contacts cost), complex to manage

**Approach 2: Company List + LinkedIn Native Filters (Recommended)**
1. Upload company list to LinkedIn (via HubSpot company list sync)
2. Use LinkedIn Campaign Manager's native filters to target personas:
   - Job Function: Product Management, Design, Marketing, etc.
   - Seniority: Director, VP, C-Suite
   - Job Title keywords: specific titles

**Pros:** Cheaper, simpler, leverages LinkedIn's data
**Cons:** Less precise (LinkedIn's job function mapping isn't perfect)

### LinkedIn Persona Filters

| Persona | LinkedIn Job Function | LinkedIn Seniority | Title Keywords |
|---|---|---|---|
| **Product** | Product Management | Manager, Director, VP | Product Manager, Head of Product, CPO |
| **UX/Design** | Design, Arts and Design | Manager, Senior, Director | UX Designer, Design Lead, Head of Design |
| **Marketing** | Marketing | Manager, Director, VP | Growth, PMM, Demand Gen, Head of Marketing |
| **Engineering** | Engineering, IT | Manager, Director, VP, CTO | Engineering Manager, CTO, VP Engineering |
| **Executive** | General Management | VP, CXO | CEO, COO, Founder, GM |
| **Customer Success** | Support | Manager, Director | CS Manager, Head of CS, VP Customer Success |

### Minimum Audience Rules

- **Minimum matched audience:** 300 LinkedIn members per campaign
- **Smaller audiences = higher CPMs** (more expensive)
- **At later ABM stages (Interested, Considering):** persona lists may be too small to run separately
- **Solution:** Combine personas at later stages, differentiate via ad content instead of targeting

---

## Persona Prioritization

### Which Personas to Target First

| Priority | Persona Type | Why | Budget Allocation |
|---|---|---|---|
| **1st** | Champions | They drive the deal internally | 40-50% of budget |
| **2nd** | Economic Buyers | They approve the purchase | 20-30% of budget |
| **3rd** | End Users | They validate product fit | 15-20% of budget |
| **4th** | Technical Evaluators | They assess during demo/trial | 5-10% of budget |

### When Budget is Limited

With $10K/month (one campaign group effectively):
1. **Don't split by persona.** Target all personas in one campaign group.
2. **Differentiate through content.** Create ads that speak to different JTBDs within the same campaign.
3. **Use LinkedIn filters to exclude irrelevant roles** (e.g., exclude HR, Finance, Legal from initial campaigns).
4. **Prioritize by JTBD/intent** instead of persona.

---

## Campaign Naming Convention (for Intent Tracking)

### Structure

```
[Campaign Name] - [Persona] - [Ad Type] - [JTBD/Intent] - [ABM Stage]
```

**Examples:**
- `Q1-Analytics - PM - Image - User-Activation - Awareness`
- `Q1-Analytics - UX - Video - Session-Replay - Interested`
- `Q1-Analytics - All - TLA - Industry-Trends - Awareness`

### Why Naming Matters

When ZenABM/Fibbler pushes engagement data to HubSpot, the campaign name is how you extract:
- Which **persona** engaged (for outreach targeting)
- Which **intent/JTBD** they cared about (for message personalization)
- Which **ABM stage** content resonated (for campaign optimization)

### Notion Database for Asset Management

Track all ad assets in a Notion database with properties:
- Persona
- Ad Type (Image, Video, TLA, Carousel, Text)
- Asset Description / JTBD
- ABM Stage (Awareness, Interested, Considering)
- ABM Campaign Name
- Status (Brief Done, Design In Progress, Ready, Launched)
- Owner
- Designer Assigned
- Performance Notes

Use formula fields to auto-generate campaign names from properties, ensuring clean naming that flows through to intent detection.

---

## Project Management: Asset Creation Workflow

### Process

```
1. ABM Manager defines campaign brief
   → Persona, intent, stage, messaging angle

2. Content owner writes ad copy brief
   → Headline, intro text, CTA, visual direction

3. Brief → Notion database (assigned to designer)

4. Designer creates visual assets
   → Follow LinkedIn specs (see linkedin-ads-abm-guide.md)

5. ABM Manager reviews + approves

6. Assets uploaded to LinkedIn Campaign Manager
   → Correct campaign group, campaign, naming convention

7. Track in Notion: launched date, performance notes
```

### Volume Expectations

| Campaign Scale | Ads Needed | Note |
|---|---|---|
| **First campaign** | ~100 ads across personas | Typical first ABM campaign |
| **Mature program** | 500+ ads over time | After 16 months |
| **Per campaign cycle** | 17-20 ads per intent group | Based on budget math |

**Critical:** Volume of ads must follow the budget math (see `linkedin-ads-abm-guide.md`). Don't create more ads than your budget can effectively serve.

---

## Measuring Persona Effectiveness

### Metrics by Persona

| Metric | What It Tells You |
|---|---|
| **CTR by persona** | Which personas engage most with ads |
| **CPC by persona** | Cost efficiency per persona |
| **Interested-stage conversion by persona** | Which personas move through the funnel |
| **Meeting book rate by persona** | Which personas are most receptive to outreach |
| **Pipeline generated by persona** | Which personas drive the most revenue |

### What to Do with the Data

| Finding | Action |
|---|---|
| Product personas have 2x the CTR of Engineering | Shift more budget to Product persona campaigns |
| Executive personas rarely click but deals with exec engagement close faster | Keep exec campaigns for influence, don't optimize for clicks |
| One persona never progresses past Aware | Revisit messaging or drop from targeting |
| BDRs get higher reply rates from Champions than Economic Buyers | Focus BDR outreach on Champions first |

*Source: ColdIQ*

---

> **Built by [ColdIQ](https://www.coldiq.com) & [Ivan Falco](https://www.linkedin.com/in/ivanfalco/en/).** For questions on implementation or anything not covered here, reach out to Ivan directly on [LinkedIn](https://www.linkedin.com/in/ivanfalco/en/).
