# Ads + Outbound Signaling — Guide

How ABM ads generate intent signals that trigger and personalize BDR outbound. The bridge between paid campaigns and sales outreach.

---

## The Core Idea

ABM ads aren't just demand generation — they're a **signal detection layer.** By running targeted ads to known accounts and tracking which ones engage, you identify intent *before* anyone fills out a form.

```
Ads create awareness → Engagement reveals intent → Intent triggers outbound → Outbound is personalized by what they engaged with
```

**This is "inbound-led outbound" powered by ad engagement data.**

Traditional cold outreach: 6-8% reply rate.
Signal-based outreach (ABM-warmed): 18-22% reply rate.
Multi-signal stacked: 35-40% reply rate.

---

## How Intent Signals Flow

### The Signal Pipeline

```
LinkedIn Campaign Manager (ads running)
  ↓
ZenABM / Fibbler (captures engagement per account per campaign)
  ↓
HubSpot Company Properties (quantitative + qualitative intent)
  ↓
Active Lists (accounts segmented by stage + intent)
  ↓
BDR gets Slack alert + lead with intent tags
  ↓
Personalized outreach based on WHAT they engaged with
```

### Two Types of Engagement Data

| Type | What It Captures | How It's Used |
|---|---|---|
| **Quantitative** | Impressions, engagements, clicks (counts) | Stage progression (Identified → Aware → Interested) |
| **Qualitative** | WHICH campaigns they engaged with | Intent detection + outreach personalization |

**Qualitative is the gold.** Knowing that an account clicked on your "Analytics vs Competitor X" campaign tells BDRs exactly what pain point to lead with.

---

## Intent Detection via Campaign Structure

### How Campaign Names Encode Intent

Structure your LinkedIn campaigns so engagement data reveals intent:

```
Campaign Group: [Intent/JTBD]
  ├── Campaign: [Intent] - [Ad Type] - [Stage]
  │     e.g., "Analytics-Competitor-Switch - Image - Awareness"
  │     e.g., "Onboarding-Automation - Video - Interested"
  │     e.g., "Session-Replay - TLA - Awareness"
```

When ZenABM pushes engagement data to HubSpot, the campaign name reveals the intent:
- Account engaged with "Analytics-Competitor-Switch" → They care about switching from a competitor's analytics
- Account engaged with "Onboarding-Automation" → They care about onboarding
- Account engaged with multiple intents → Hot, multi-need buyer

### HubSpot Intent Properties

| Property | Type | How It's Populated |
|---|---|---|
| `ABM Intent` | Multi-checkbox | Workflow: parse campaign name from ZenABM → assign intent checkboxes |
| `Primary Intent` | Single dropdown | Most-engaged campaign group = primary intent |
| `Intent Source` | Text (auto) | Campaign group name that generated most clicks |

### Workflow: Campaign Engagement → Intent Tags

```
Trigger: ZenABM/Fibbler updates company engagement properties

→ Parse campaign name for intent keyword:
   IF campaign contains "Analytics": check "Analytics" in ABM Intent
   IF campaign contains "Onboarding": check "Onboarding" in ABM Intent
   IF campaign contains "Competitor-Switch": check "Competitor Displacement" in ABM Intent
   (etc. for each campaign intent)

→ Copy ABM Intent from company → associated contacts (as tags)
→ BDR sees intent tags when prospecting
```

---

## When to Trigger BDR Outreach

### The Threshold: "Interested" Stage

**Don't hand off too early.** Outreach to accounts still in the "Aware" stage feels cold and wastes BDR time.

| ABM Stage | BDR Action | Why |
|---|---|---|
| Identified | No outreach | Haven't seen your ads yet |
| Aware | No outreach (usually) | Only seen ads, no active engagement |
| **Interested** | **Trigger BDR outreach** | 5+ clicks or 10+ engagements = active interest |
| Considering | Priority outreach + sales | Demo booked / trial started |
| Selecting | AE owns, BDR supports | Deal in pipeline |

### The BDR Alert

When an account hits "Interested":

**Slack notification should include:**
- Company name + LinkedIn URL
- ICP score + tier
- ABM Intent tags (what they engaged with)
- Key contacts found (name, title, email)
- Suggested angle based on intent
- Company context (size, industry, tech stack)

**Example Slack alert:**
```
🔥 ABM HOT: Acme Corp hit "Interested"
ICP Score: 85 (A-tier) | 500 employees | SaaS
Intent: Analytics, Competitor-Switch
7 clicks in last 30 days (up from 2)
Engaged with: "Analytics vs Mixpanel" campaign group

Key contacts:
- Jane Smith, VP Product (jane@acme.com)
- Mike Lee, Head of Analytics (mike@acme.com)

Suggested angle: They're evaluating analytics tools and 
comparing against Mixpanel. Lead with analytics feature 
comparison + case study from similar company.
```

---

## Personalizing BDR Outreach with Intent Data

### What BDRs Should Know Before Outreach

| Data Point | Where It Lives | How It Helps |
|---|---|---|
| **Intent tags** | Contact/Company in HubSpot | Tells BDR what the account cares about |
| **Campaign group engagement** | ZenABM dashboard / HubSpot | Shows depth of interest |
| **Engagement recency** | HubSpot (7d/30d/90d properties) | Timing — reach out when engagement is fresh |
| **Ad content they clicked** | ZenABM qualitative data | Know exactly which messaging resonated |
| **Persona** | Contact properties | Match messaging to their role |

### Outreach Personalization Framework

| Intent Signal | BDR Opening Angle | Content to Reference |
|---|---|---|
| Engaged with competitor comparison ads | "I noticed your team is evaluating [category]. Here's how we compare to [competitor]..." | Comparison one-pager, case study |
| Engaged with feature-specific ads (e.g., analytics) | "Given your team's focus on [feature area], thought you'd find this relevant..." | Feature deep-dive, product demo |
| Engaged with event/webinar TLAs | "Your colleagues seemed interested in [topic] from our recent event..." | Event recording, related content |
| Engaged with case study ads | "Companies similar to yours in [industry] are seeing [result]..." | Full case study, ROI data |
| Engaged with multiple intents | "Your team has been exploring several areas — [intent 1] and [intent 2]. Quick question..." | Tailored multi-solution pitch |

### Outreach Channels (Multi-Touch)

| Channel | Timing | Message Type |
|---|---|---|
| **Email** (personalized) | Day 1 of Interested stage | Intent-based, reference what they engaged with |
| **LinkedIn connection request** | Day 1-2 | Short, warm — "Noticed your team's interest in [topic]" |
| **LinkedIn message** | Day 3-5 (after connection accepted) | Deeper value — share relevant content |
| **Follow-up email** | Day 5-7 | Different angle or social proof |
| **Phone (if available)** | Day 7-10 (if no response) | Warm call referencing ad engagement |

### Email Template (Intent-Based)

```
Subject: [Company Name] + [Your Product] — quick thought on [Intent Area]

Hi [First Name],

I noticed your team at [Company] has been exploring [intent area] — 
[brief, specific reference to the ad topic they engaged with].

[1-2 sentences on how you solve that specific problem]

[Social proof: "Companies like [similar customer] saw [specific result]"]

Would it make sense to show you how [specific feature/solution] works? 
Happy to do a quick 15-min walkthrough.

[CTA: Calendar link or reply to book]
```

**Key rules:**
- Never say "I saw you clicked our ad." That's creepy.
- Reference the *topic* they showed interest in, not the *channel*.
- Lead with their pain point, not your product.
- Keep it short — the ad warmed them up, don't over-explain.

---

## Sequencing: Ads → Outbound Timeline

### The Full Motion

```
Week 1-4: Awareness ads running (Identified → Aware)
  - No outbound. Let ads do the warming.
  
Week 4-8: Accounts start hitting "Interested"
  - BDR alerts trigger
  - Personalized outreach begins for Interested accounts
  - Continue running ads (now showing solution-oriented content)

Week 8-12: Considering accounts emerge
  - Demos booked, trials started
  - BDR + AE joint engagement
  - Ads shift to case studies, ROI proof, product content

Week 12+: Pipeline generated
  - Measure pipeline per $ spent
  - Evaluate which intents produced best pipeline
  - Feed learnings back into next campaign
```

### Feedback Loop: Outbound → Ads

What BDRs learn from conversations should flow BACK to ad strategy:

| BDR Learning | Action |
|---|---|
| Prospects frequently mention a specific pain point | Create new ad campaign group around that pain point |
| A specific competitor keeps coming up | Build competitor displacement campaign |
| Prospects don't understand your product category | Invest more in awareness-stage educational content |
| Demo objections cluster around pricing | Create ROI/value justification ad content |
| Certain personas respond better than others | Shift ad budget toward those personas |

---

## Measuring Signal Quality

### Signal Effectiveness Metrics

| Metric | How to Measure | Target |
|---|---|---|
| **Reply rate from ABM-warmed leads** | Replies ÷ outreach sent (Interested stage only) | 18-22%+ (vs 6-8% cold) |
| **Meeting book rate (ABM vs cold)** | Meetings ÷ leads worked | 2-3x higher than cold |
| **Time from Interested → Demo** | Days between stage change and demo booking | <14 days |
| **Pipeline from ABM-sourced leads** | Pipeline $ from accounts that went through ABM stages | Track vs cold-sourced pipeline |
| **Intent prediction accuracy** | Did the intent tag match the actual buyer need? | >60% |

### What "Good" Looks Like

| Scenario | Signal Quality |
|---|---|
| BDR reaches out with intent angle, prospect says "Yes, that's exactly what we need" | Excellent — intent detection working |
| BDR reaches out, prospect says "Never heard of you" | Poor — may be clicking ads accidentally, or wrong persona |
| High engagement from an account but no reply to outreach | Medium — try different persona/contact at the account |
| Multiple people at account engaging | Excellent — buying committee forming |

---

## LinkedIn API Limitation (Important)

**LinkedIn's API obfuscates engagement data** if fewer than 3 members in an account engaged, or fewer than 3 total engagements/clicks in a timeframe.

**Workaround:**
- Group campaigns by intent (not persona) so more engagements roll up per campaign group
- Use cumulative (30d/90d) windows rather than 7d to accumulate enough data
- Tools like ZenABM aggregate at campaign-group level to maximize signal extraction

---

## Tools for Signal Detection

| Tool | Role in Signal Flow | Key Capability |
|---|---|---|
| **LinkedIn Campaign Manager** | Ad delivery + raw engagement data | Campaign-level engagement tracking |
| **ZenABM** | LinkedIn → CRM connector | Pushes both quantitative AND qualitative engagement (which campaigns), auto-updates ABM stages, intent detection |
| **Fibbler** | LinkedIn → CRM connector | Pushes quantitative engagement (impressions, clicks, engagements) per account — simpler/cheaper alternative |
| **HubSpot** | CRM + workflow automation | Stores intent, manages lists, triggers BDR alerts, syncs audiences |
| **Slack** | Real-time BDR alerts | Hot lead notifications with full context |
| **SalesLoft / HubSpot Sales** | Outbound sequencing | Personalized multi-touch sequences based on intent |

*Source: ColdIQ*

---

> **Built by [ColdIQ](https://www.coldiq.com) & [Ivan Falco](https://www.linkedin.com/in/ivanfalco/en/).** For questions on implementation or anything not covered here, reach out to Ivan directly on [LinkedIn](https://www.linkedin.com/in/ivanfalco/en/).
