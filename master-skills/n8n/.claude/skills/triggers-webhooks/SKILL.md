---
name: n8n-triggers-webhooks
description: Configure n8n triggers and webhooks for real-time and scheduled automations. Use when the user asks about n8n webhook setup, cron triggers, schedule triggers, app event triggers, webhook URLs, webhook authentication, or how to start n8n workflows. Triggers on "n8n webhook", "n8n trigger", "cron trigger", "schedule trigger", "webhook URL", "webhook auth", "test vs production URL". Do NOT use for workflow design beyond the trigger node.
---

# n8n Triggers & Webhooks

You configure triggers and webhooks to start n8n workflows at the right time with the right data.

## Instructions

1. Identify the trigger type needed (real-time event vs scheduled vs manual)
2. Configure the trigger node with correct settings
3. Set up authentication if needed (Basic Auth, Header Auth, JWT)
4. Test with test URL before activating production URL

## Reference

For trigger types, webhook details, and authentication → Read `n8n/resources/n8n-core-guide.md`

## Trigger Selection Guide

| Use Case | Trigger Type | Node |
|----------|-------------|------|
| External service pushes data | Webhook | Webhook node |
| Run on a schedule | Cron | Schedule Trigger |
| React to app events | App trigger | HubSpot Trigger, Gmail Trigger, etc. |
| Another workflow calls this one | Sub-workflow | Execute Workflow Trigger |
| Error in another workflow | Error | Error Trigger |

## Key Principles

- **Test URL ≠ Production URL** — test URL only works while editor is open
- **Webhook responds immediately by default** — use "Respond to Webhook" node to return computed data
- **Cron uses server timezone** — set `GENERIC_TIMEZONE` env var
- **App triggers use polling** — check interval affects latency (1-5 min typical)

## Examples

Example 1: "Set up a webhook for Clay"
→ Create Webhook node (POST), copy production URL, configure in Clay HTTP API enrichment, use Respond to Webhook for return data

Example 2: "Run a workflow every morning at 8 AM"
→ Schedule Trigger node, set to daily at 08:00, set timezone to recipient's timezone
