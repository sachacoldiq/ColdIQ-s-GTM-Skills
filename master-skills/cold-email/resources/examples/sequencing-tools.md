# Sequencing Tool Recommendations

## Email Sequencing (Automated Outbound)

| Tool | Best For | Volume |
|------|----------|--------|
| **SmartLead** | High volume, AI warmup | 1000s/day |
| **Instantly** | Ease of use, good deliverability | 1000s/day |
| **Lemlist** | Multi-channel, images | Medium |
| **Apollo** | All-in-one (data + sending) | Medium |

## LinkedIn Sequencing

| Tool | Best For |
|------|----------|
| **HeyReach** | Automated LinkedIn outreach |
| **Expandi** | LinkedIn automation |
| **Dripify** | LinkedIn sequences |

## Multi-Channel Sequencing

| Tool | Channels |
|------|----------|
| **LaGrowthMachine** | Email + LinkedIn + Twitter |
| **Lemlist** | Email + LinkedIn |
| **Reply.io** | Email + LinkedIn + Calls |

## Integration Pattern with Clay

```
Clay Table
    ↓
[Add to SmartLead Campaign]
    ↓
Map variables:
- first_name → {{First Name}}
- last_name → {{Last Name}}
- email → {{Work Email}}
- first_line → {{AI First Line}}
- company → {{Company Name}}
- custom_1 → {{Use Case}}
```

## Cold Call Script (1 Minute — 5 Steps)

```
1. Pattern Interrupt Opening:
   "Hey {{firstName}}, this is [Name] from [Company]—
   I know I'm catching you out of the blue."

2. Permission-Based Transition:
   "Mind if I take 30 seconds to tell you why I called?
   Then you can decide if it's worth continuing."

3. Problem Statement:
   "I work with [ICP] who are struggling with [problem]."

4. Social Proof:
   "We just helped [similar company] achieve [result]."

5. CTA:
   "Is that something you're dealing with right now?"
```

## No-Show Phone Script

```
"Hey {{firstName}}, it's [Name] from [Company].

We had a call scheduled for [time]—
wanted to make sure everything's okay.

No worries if something came up.
Would [alternative time] work better?"
```

## Tone by Channel

**Agency Services:** Consultative, Strategic, Calm
**Accelerator:** Slang professional, Friendly, Curious
**Outbound Cold:** Pattern interrupt, Short, Clear

## Definition of Success
- Reply
- Conversation started
- Meeting booked

**NOT:** Long messages, Clever wording, Over-explaining, Sounding impressive
