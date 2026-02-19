---
name: email-infra
description: Complete cold email infrastructure setup, DNS configuration, warmup, and troubleshooting. Use when the user asks about email infrastructure setup, domain purchasing for cold email, DNS configuration, MX/SPF/DKIM/DMARC setup, email warmup, mailbox provisioning, Google Workspace or Microsoft 365 for cold email, Instantly setup, going live with campaigns, deliverability monitoring, email blacklist recovery, warm-up troubleshooting, or scaling email infrastructure. Triggers on "email infra", "setup domains", "buy domains", "DNS setup", "MX records", "SPF record", "DKIM", "DMARC", "warmup", "warm up", "Instantly setup", "mailbox setup", "Google Workspace cold email", "Microsoft 365 cold email", "domain warmup", "email blacklist", "deliverability issue", "scaling email", "how many domains", "how many mailboxes". Do NOT use for email copywriting (use copywriting or first-touch) or general deliverability concepts (handled by orchestrator).
---

# Email Infrastructure

You help users set up, configure, and troubleshoot cold email infrastructure from zero to live campaigns.

## Reference

Read these resources based on the user's question:

- **Complete setup guide: domains, DNS, warmup, monitoring** → Read `{SKILL_BASE}/resources/frameworks/email-infra/email-infra-guide.md`
- **Step-by-step walkthroughs with video tutorials** → Read `{SKILL_BASE}/resources/frameworks/email-infra/email-infra-step-by-step.md`
- **Diagnosis and recovery for DNS, connection, warmup, deliverability issues** → Read `{SKILL_BASE}/resources/frameworks/email-infra/email-infra-troubleshooting.md`

## Critical Rules (Never Break)

1. Never use primary domain for cold outreach
2. Max 2 mailboxes per domain
3. One domain = one workspace (never mix)
4. Use multiple registrars (no single point of failure)
5. Warm up 2-3 weeks minimum before sending
6. Never disable warm-up once campaigns running
7. Start conservative, scale gradually

## Infrastructure Sizing Formula

- Monthly goal / 20 working days = daily volume
- Daily volume / 20-25 per mailbox = mailboxes needed
- Mailboxes x 1.5 (buffer) / 2 = domains needed
- Provider split: 60% Google Workspace, 40% Microsoft 365

## DNS (All 4 Records Required)

| Record | Purpose |
|--------|---------|
| MX | Routes incoming email |
| SPF | Declares sending servers |
| DKIM | Digital signature authentication |
| DMARC | Policy for SPF/DKIM failures |

## Warmup Timeline

- Week 1: Foundation (no campaigns)
- Week 2: Building (no campaigns)
- Week 3: Ready (health scores 70%+, ideally 90%+)

## Going Live Ramp Schedule

| Week | Google | Microsoft |
|------|--------|-----------|
| 1 | 10-15/day | 5-10/day |
| 2-3 | 15-20/day | 10-12/day |
| 4+ | 20-25/day | 12-15/day |

## Healthy Metrics

- Open rate: 50%+
- Reply rate: 2%+
- Bounce rate: <3% (target <2%)
- Spam rate: <0.1%
- Deliverability score: >95%

## Examples

**Example 1:** "I want to send 3,000 emails per month, how many domains do I need?"
→ Read email-infra-guide.md. Calculate: 150/day → 10-12 mailboxes → 5-6 domains. Split 60/40 Google/Microsoft.

**Example 2:** "My warm-up shows a red flame in Instantly"
→ Read email-infra-troubleshooting.md. Run "Test domain setup", verify all 4 DNS records, check domain age, request reactivation.

**Example 3:** "Walk me through setting up a new domain from scratch"
→ Read email-infra-step-by-step.md. Follow 9-step process: calculate needs → buy domain → Google/Microsoft setup → DNS → connect Instantly → warmup → go live → monitor.
