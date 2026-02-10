---
name: n8n-clay-integration
description: Set up bidirectional Clay + n8n integrations for data enrichment and automation. Use when the user asks about connecting Clay to n8n, Clay webhooks in n8n, sending data from n8n to Clay, Clay HTTP API with n8n, or building Clay automation pipelines. Triggers on "Clay n8n", "n8n Clay", "Clay webhook n8n", "Clay automation", "Clay HTTP API n8n". Do NOT use for Clay-only workflows without n8n.
---

# Clay + n8n Integration

You build bidirectional integrations between Clay and n8n for automated data enrichment and GTM workflows.

## Instructions

1. Determine direction (Clay → n8n, n8n → Clay, or bidirectional)
2. Set up webhook connections
3. Configure data mapping between systems
4. Test with a single row before enabling auto-push

## Reference

For Clay + n8n patterns, CRM workflows, and GTM automations → Read `n8n/resources/clay-n8n-integration.md`
For HTTP API setup and middleware patterns → Read `n8n/resources/http-api-patterns.md`

## Integration Directions

### Clay → n8n
1. Create Webhook trigger in n8n, copy production URL
2. In Clay: add HTTP API enrichment column, POST to n8n URL
3. n8n processes data and returns response
4. Response writes back to **same Clay row**

### n8n → Clay
1. In Clay: create table with webhook source, copy webhook URL
2. In n8n: HTTP Request node, POST to Clay webhook URL
3. Data appears as new rows in Clay table

## Key Principles

- **Response writes to same row** — use Respond to Webhook node to return data to Clay
- **Enable auto-push in Clay** — for continuous automation
- **Required to Run toggle** — prevent Clay from running on empty rows
- **Test with 1 row first** — before enabling on full table

## Examples

Example 1: "Connect Clay to n8n for lead enrichment"
→ n8n Webhook → enrich via Apollo/Clearbit → Respond to Webhook with enriched data → Clay receives in same row

Example 2: "Push n8n results into Clay"
→ n8n HTTP Request (POST) → Clay webhook URL → data creates new rows in Clay table
