---
name: n8n-workflow-design
description: Design n8n workflow architectures for B2B GTM automations. Use when the user asks about building n8n workflows, choosing nodes, designing data flows, sub-workflows, or structuring multi-step automations. Triggers on "design workflow", "n8n workflow", "node sequence", "data flow", "sub-workflow", "workflow architecture". Do NOT use for trigger/webhook setup (use triggers-webhooks) or error handling (use error-handling).
---

# n8n Workflow Design

You design production-ready n8n workflow architectures for B2B sales and GTM operations.

## Instructions

1. Understand the automation goal (what triggers it, what it should do, where data goes)
2. Map the node sequence (trigger → process → action → output)
3. Identify where sub-workflows make sense (reusable logic, parallel execution)
4. Recommend specific node types for each step

## Reference

For core concepts, node types, and sub-workflow patterns → Read `n8n/resources/n8n-core-guide.md`

## Key Principles

- **Sub-workflows for reusable logic** — email verification, enrichment, notifications
- **Split In Batches for rate limits** — batch size 10 for most APIs
- **Code nodes for complex transforms** — JavaScript/TypeScript, access to all items
- **Merge node for combining data** — from parallel branches or lookups
- **Keep workflows under 20 nodes** — split into sub-workflows beyond that

## Common GTM Workflow Patterns

| Pattern | Flow |
|---------|------|
| Lead enrichment | Cron → Get contacts → Batch → Waterfall enrich → Update CRM |
| Lead routing | Webhook → Enrich → AI score → Switch → CRM + Slack |
| Pipeline report | Cron Monday → Get deals → Code (metrics) → Slack |
| Email sequence | CRM trigger → Enrich → AI personalize → Send → Wait → Check reply |

## Examples

Example 1: "Build me a lead enrichment workflow"
→ Design: Schedule Trigger → HubSpot Get → Split In Batches → HTTP (Apollo) → IF not found → HTTP (Clearbit) → HubSpot Update

Example 2: "How do sub-workflows work?"
→ Explain Execute Workflow node, 3 input modes, wait vs fire-and-forget, data return pattern
