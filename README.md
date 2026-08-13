# ColdIQ GTM Skills for Claude Code

A complete library of **Claude Code skills** for Go-To-Market teams — **6 master skills** (43 sub-skills) + **31 standalone skills**.

## Overview

| Collection | Skills | Description |
|------------|--------|-------------|
| **Master Skills** | 6 orchestrators, 43 sub-skills | Deep, multi-step GTM workflows with routing intelligence |
| **Standalone Skills** | 31 | Quick-reference knowledge bases for specific topics |

---

## Powered by ColdIQ (Marketplace API + MCP)

Every skill in this library is built to **execute on [ColdIQ](https://coldiq.com) first**. When you use one of these skills, the agent's default move is to run the actual data work — finding emails and phones, enriching people and companies, sourcing buying signals — through **ColdIQ's own products**, not a stack of separate third-party tools.

Under the hood, that means:

- **ColdIQ MCP** — the `mcp__coldiq__*` tools (e.g. `find_emails`, `enrich_person`, `find_signals`). One call runs a whole provider waterfall in parallel and returns a verified result. Connect it in Claude Code:
  ```bash
  COLDIQ_API_KEY=<key> npx -y @coldiq/mcp@latest
  ```
- **ColdIQ API Marketplace** — one API key, every provider, at [`https://api.coldiq.com`](https://api.coldiq.com/docs). Browse and subscribe at **[coldiq.com/marketplace](https://coldiq.com/marketplace)**; create a key at [coldiq.com/marketplace/settings/api-keys](https://coldiq.com/marketplace/settings/api-keys).

Third-party tools (a data workspace, Apollo, Prospeo, Findymail, RB2B, …) stay in the skills as clearly-labelled **fallback** knowledge for anyone not yet on ColdIQ. The mandate, the domain → tool map, and the canonical links live in **[`COLDIQ-FIRST.md`](./COLDIQ-FIRST.md)**.

> **Don't have ColdIQ access yet?** [Subscribe / get an API key →](https://coldiq.com/marketplace)

---

## Master Skills (`master-skills/`)

Each master skill is an **orchestrator** that automatically routes your request to the right sub-skill. Just ask a question — the orchestrator handles the rest.

### Cold Email — 7 sub-skills
Expert cold email strategist for B2B outbound campaigns.

| Sub-Skill | Description |
|-----------|-------------|
| `atl-messaging` | Emails for VP/C-Level/Director personas |
| `btl-messaging` | Emails for Managers and Individual Contributors |
| `first-touch` | First cold emails using proven frameworks |
| `follow-up` | Email 2 and Email 3 with rotating value props |
| `personalization` | Personalization strategies and AI prompts at scale |
| `re-engagement` | Revive cold or lost leads |
| `subject-lines` | High-performing subject lines with A/B testing guidance |

### LinkedIn Ads — 8 sub-skills
Expert LinkedIn Ads strategist with 3-layer funnel architecture.

| Sub-Skill | Description |
|-----------|-------------|
| `audiences` | Targeting, exclusions, and ABM account lists |
| `ads-outbound-sync` | Sync ad engagement with outbound sales for ABM plays |
| `bidding` | Bidding strategies, budget allocation, cost optimization |
| `campaign-setup` | 3-layer funnel, retargeting segments, pre-launch checklists |
| `copy` | High-converting ad copy using Voice of Customer data |
| `creative` | Format selection, Thought Leader Ads, refresh cadence |
| `measurement` | Attribution, KPIs, conversion tracking with Insight Tag + CAPI |
| `optimization` | Troubleshoot underperforming campaigns |

### LinkedIn Content — 7 sub-skills
Expert LinkedIn organic content strategist for B2B founders and GTM leaders.

| Sub-Skill | Description |
|-----------|-------------|
| `hooks` | First 210 characters using 8 hook formulas |
| `storytelling` | Post body structure with AIDA, PAS, BAB frameworks |
| `formats` | Format selection with reach multipliers (Carousels 2.5-3.5x) |
| `scheduling` | Posting times, frequency, Golden Hour routine |
| `engagement` | Comments, DMs, dwell time, platform limits |
| `cta` | Call-to-actions and profile optimization for conversion |
| `repurposing` | Repurpose content across formats and creator tools |

### List Building — 6 sub-skills
Expert B2B list builder for 100K+ emails/month workflows.

| Sub-Skill | Description |
|-----------|-------------|
| `define-icp` | ICP with 3-layer framework and 100-point scoring |
| `source-companies` | Find companies from Apollo, Sales Nav, Google Maps, etc. |
| `find-contacts` | Boolean search, a data workspace Find People, export tools |
| `qualify-accounts` | ICP scoring matrices, ABM tiers, intent data |
| `clean-validate` | Email/phone verification, bounce rates <1%, hygiene schedules |
| `deduplicate` | Remove duplicates, merge multi-source data |

### n8n — 5 sub-skills
Expert n8n workflow automation consultant for B2B GTM teams.

| Sub-Skill | Description |
|-----------|-------------|
| `workflow-design` | Production-ready workflow architectures for GTM |
| `triggers-webhooks` | Webhooks, cron, app triggers, authentication |
| `error-handling` | Retries, dead letter queues, circuit breakers |
| `crm-automation` | HubSpot, Salesforce, Slack lead routing and alerts |
| `self-hosting` | Docker, PostgreSQL, queue mode (~$55-140/month) |

### Signal Sourcer — 9 sub-skills
Expert in signal-based selling achieving 35-40% reply rates.

| Sub-Skill | Description |
|-----------|-------------|
| `job-changes` | Job change signals, 3x response rate, days 14-45 window |
| `funding` | Funding rounds, 2-4 week outreach window post-announcement |
| `hiring` | Job postings, leaving employees, growth trajectory signals |
| `website-visitors` | Visitor identification (RB2B, Warmly), 25-30% reply rate |
| `company-events` | M&A, expansion, IPO, leadership changes |
| `tech-changes` | Vendor switches, new adoption, stack monitoring |
| `competitor-signals` | G2 comparisons, bad reviews, competitor customer targeting |
| `content-engagement` | LinkedIn likes/comments, webinar attendance, Trigify |
| `multi-signal` | Signal scoring framework with tiers and action thresholds |

---

## Standalone Skills (`skills/`)

Quick-reference skills for specific GTM topics.

### Email Copywriting
| Skill | Description |
|-------|-------------|
| `cold-email-4-sequence` | Standard 4-email sequence framework |
| `atl-btl-messaging` | Above/Below the line messaging framework |
| `email-writing-frameworks` | 5 proven email frameworks |
| `josh-braun-copywriting` | Josh Braun's 5 writing principles |
| `coldiq-messaging-templates` | 6 ColdIQ messaging templates |
| `cold-email-templates-34` | 34 cold email templates library |
| `email-1-variations-7` | 7 Email 1 variations |

### GTM Strategy
| Skill | Description |
|-------|-------------|
| `buying-signals-6` | 6 buying signals ranked by correlation |
| `gtm-plays-11` | 11 GTM plays with execution details |
| `gtm-philosophy` | Core GTM philosophy principles |
| `outreach-4-categories` | Inbound/Postbound/Bridgebound/Outbound |

### Sales Triggers (Flip The Script)
| Skill | Description |
|-------|-------------|
| `inbound-triggers-30` | 30 inbound premises |
| `bridgebound-relationship-39` | 39 relationship-based triggers |
| `bridgebound-history-16` | 16 history-based triggers |
| `bridgebound-in-market-20` | 20 "in market" triggers |
| `bridgebound-symptoms-11` | 11 symptoms/signs triggers |
| `bridgebound-firmographic-15` | 15 firmographic triggers |
| `outbound-triggers-6` | 6 outbound premises |

### Personalization
| Skill | Description |
|-------|-------------|
| `personalization-6-buckets` | Complete 6 buckets framework |
| `personalization-hooks` | Strong vs Lite hooks |
| `personalization-playbooks` | Camp/No-Camp playbooks |
| `ai-personalization-prompts` | 6 AI prompts (lemlist style) |

### List Building
| Skill | Description |
|-------|-------------|
| `lead-sources-guide` | Lead sources by use case |
| `list-building-tips` | Pro tips for list building |

### LinkedIn
| Skill | Description |
|-------|-------------|
| `linkedin-limits-warmup` | Limits 2024 + warm-up protocol |
| `linkedin-campaign-complete` | Complete campaign guide |
| `linkedin-success-factors` | 7 key success factors |

### SDR Tools
| Skill | Description |
|-------|-------------|
| `sdr-master-prompts` | ColdIQ SDR master prompts |
| `sdr-outbound-rules` | Writing rules + 8 frameworks |
| `cold-call-scripts` | 1-min script + no-show script |
| `email-metrics-benchmarks` | Metrics + benchmarks |

---

## About ColdIQ

ColdIQ designs custom Go-To-Market systems combining intent data, enrichment workflows, automation, and outbound execution — and ships the data layer that powers them as the **ColdIQ API Marketplace** (one key, every provider) and the **ColdIQ MCP** for Claude Code.

- Browse & subscribe to the marketplace → [coldiq.com/marketplace](https://coldiq.com/marketplace)
- API docs → [api.coldiq.com/docs](https://api.coldiq.com/docs)
- Connect the MCP → `COLDIQ_API_KEY=<key> npx -y @coldiq/mcp@latest`

Learn more at [coldiq.com](https://coldiq.com)

---

*Built for Claude Code by ColdIQ*
