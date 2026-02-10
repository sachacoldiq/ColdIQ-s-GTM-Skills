---
name: table-setup
description: Create and configure Clay tables, choose column types, import data, and set up auto-update. Use when the user asks about creating a Clay table, choosing column types, importing data (CSV, CRM, LinkedIn), setting up views and filters, configuring auto-update, using the Chrome extension, or organizing workbooks. Triggers on "create table", "table setup", "column types", "data import", "auto-update", "Clay table", "workbook", "views", "filters", "CSV import", "Chrome extension", "Clip to Clay". Do NOT use for enrichment-specific questions, scoring, or formula writing.
---

# Table Setup

You help users create and configure Clay tables with the right structure, data types, imports, and auto-update settings.

## References

- Read `clay/resources/core-concepts.md` for tables, columns, data types, and workbooks.
- Read `clay/resources/workflow-patterns.md` for import methods, Chrome extension, views, filters, and auto-update.

## Table Limits

- **70 columns max** per table
- **30 action/integration columns** max (40 with waterfall)
- **8,000 characters** max per cell
- Deduplication is case-sensitive and whitespace-sensitive

## Column Data Types

| Type | Use For |
|------|---------|
| Text | Names, titles, descriptions |
| Number | Revenue, headcount, scores |
| Date | Founded date, last activity |
| Text with tokens | Default -- structured text |
| Enrichment waterfall | Multi-provider sequential enrichment |
| Formula | Calculated fields (0 credits) |
| Message drafting | Outreach copy generation |

## Data Import Options

1. **CSV/Excel** -- drag and drop, map columns
2. **CRM Import** -- HubSpot, Salesforce, Pipedrive, Close
3. **LinkedIn Sales Navigator** -- search export or URL list
4. **Chrome Extension** -- scrape structured data from any webpage
5. **Other Sources** -- Apollo, Google Maps, Yelp, GitHub, Google Scholar
6. **API/Webhook** -- Zapier, n8n, custom HTTP

## Auto-Update Configuration

| Table Setting | Column Setting | Result |
|--------------|----------------|--------|
| OFF | Any | Nothing runs automatically |
| ON | OFF | That column skipped |
| ON | ON | Column runs on new rows |

**WARNING:** Auto-update consumes credits on every refresh. Disable it when:
- You are still building/testing the table
- The table is a one-time import (not ongoing)
- Expensive enrichments do not need continuous refresh

## Auto-Dedupe Setup

- Set deduplication key: email, LinkedIn URL, or domain
- Keeps the OLDEST row, deletes newer duplicates
- Case-sensitive: "Clay" and "clay" are treated as different
- Enable before import to prevent duplicate enrichment spend

## Views and Filters

- Create views to segment data: "Enriched", "Missing Email", "Tier 1 Leads"
- Filter with AND/OR logic (up to 2 levels deep)
- Sorting: A-Z or Z-A, smallest-largest or reverse
- Each view = same data, different perspective

## Table Organization Best Practices

- Use colored columns to group related fields (e.g., blue for email, green for company)
- Create workbooks to connect related tables (companies --> people --> outreach)
- Name tables descriptively: "[Source] - [Purpose] - [Date]"
- Save column groups as templates for reuse across tables

## Examples

**Example 1:** "I want to start a new outbound campaign from scratch"
--> Create table from template "Sales Nav Import". Import CSV or connect Sales Navigator. Columns: name, title, company, domain, LinkedIn URL. Enable auto-dedupe on LinkedIn URL. Keep auto-update OFF until enrichment columns are configured.

**Example 2:** "How do I scrape a conference attendee list into Clay?"
--> Use Clay Chrome Extension. Navigate to attendee page. Click 2 items to auto-detect the list pattern. Map fields (name, company, title). Export directly to a new Clay table. Then enrich.

**Example 3:** "My table has 60 columns and is getting messy"
--> Hide completed/intermediate columns. Create views: "Overview" (key fields only), "Enrichment Status" (all enrichment columns), "Export Ready" (final clean data). Use colors to group: blue=contact, green=company, yellow=enrichment, red=scoring.
