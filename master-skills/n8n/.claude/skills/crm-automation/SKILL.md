---
name: n8n-crm-automation
description: Build CRM automations with n8n for HubSpot, Salesforce, lead routing, and Slack notifications. Use when the user asks about n8n CRM integration, n8n HubSpot workflows, n8n Salesforce sync, lead routing in n8n, Slack notifications from n8n, or pipeline reporting. Triggers on "n8n HubSpot", "n8n Salesforce", "n8n CRM", "lead routing n8n", "n8n Slack", "pipeline report n8n", "deal stage n8n". Do NOT use for Clay integration (use clay-integration).
---

# n8n CRM Automation

You build CRM-centric automations connecting HubSpot, Salesforce, Slack, and outreach tools via n8n.

## Instructions

1. Identify CRM operations needed (read, create, update, sync)
2. Set up OAuth2 authentication for CRM
3. Design the workflow with proper error handling
4. Test with a single record before scaling

## Reference

For CRM node capabilities, GTM workflows, and Slack patterns → Read `n8n/resources/clay-n8n-integration.md`
For authentication and credential setup → Read `n8n/resources/n8n-core-guide.md`

## CRM Node Capabilities

| CRM | Operations |
|-----|-----------|
| **HubSpot** | Contacts, Companies, Deals, Engagements, Lists, Tickets — CRUD + Search |
| **Salesforce** | Leads, Contacts, Accounts, Opportunities, Cases, Custom Objects, SOQL |

## Common CRM Workflow Patterns

| Pattern | Flow |
|---------|------|
| Lead routing | Form trigger → Enrich → AI score → Switch (Hot/Warm/Cold) → CRM + Slack |
| Bi-directional sync | HubSpot Trigger → Map fields → Check Salesforce → Create/Update |
| Deal stage alerts | CRM Trigger (stage change) → Slack Block Kit message → Log to Sheets |
| Weekly pipeline | Cron Monday → Get deals by stage → Code (metrics) → Slack #sales |
| Customer onboarding | Deal Closed Won → Create project → Welcome email → Slack channel |

## Key Principles

- **OAuth2 for production** — n8n handles token refresh automatically
- **Slack Block Kit** for rich notifications — header, fields, action buttons
- **Switch node for routing** — multiple outputs based on score/stage/territory
- **Batch updates** — Split In Batches when updating many CRM records

## Examples

Example 1: "Route new leads to the right AE"
→ HubSpot Trigger → Enrich (HTTP) → AI Score (OpenAI) → Switch (80+ Hot, 50-79 Warm, <50 Cold) → Create Deal + Slack DM

Example 2: "Send weekly pipeline report to Slack"
→ Schedule Monday 8AM → HubSpot Get Deals → Code (total value, deals by stage, stuck >14 days) → Slack Block Kit
