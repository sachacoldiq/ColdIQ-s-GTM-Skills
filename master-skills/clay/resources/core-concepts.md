# Clay Core Concepts

## What is Clay?

Clay is a data enrichment and automation platform for sales and marketing teams. It enables:
- Sourcing leads from multiple sources
- Enriching data with 75+ providers (296+ integrations)
- Building automated workflows
- Personalizing outreach at scale
- Syncing with CRMs

## Tables

The foundation of Clay. Each table contains data (people, companies, etc.) that you can enrich and manipulate.

**Table types:**
- People tables (contacts)
- Company tables (companies)
- Custom tables (custom data)

**Table actions:**
- Rename, Duplicate, Delete
- Edit descriptions
- Convert formats
- Create from template
- Import files (CSV, etc.)
- Export/Download

## Columns

Each column represents a data type.

**Limits:**
- 70 columns max per table
- 30 action/integration columns max (40 with waterfall)
- 8,000 characters max per cell

**Column operations:**
- Rename, Pin, Duplicate, Delete
- Insert left/right
- Hide, Reorder, Sort, Filter, Merge
- Data type selection (crucial for proper functioning)
- AI-powered columns
- Colored columns for organization

**Data types available:**
- Text
- Number
- Date
- Text with tokens (default)
- Message drafting
- Enrichment waterfall
- Formula

**Changing data type:**
- Method 1: Right-click header → Edit Column → Select Data Type → Save
- Method 2: Click column title → hover on current type → dropdown → select

**Tips:**
- Use colors to group related columns (e.g., all email columns in blue)
- Deduplication is case-sensitive ("Clay" ≠ "clay"), whitespace counts ("Clay " ≠ "Clay")
- Create child columns to map specific enrichment endpoints

## Rows

Each row = one record (a person, a company, etc.)

**Row management:**
- Add rows manually
- Import from files
- Import from integrations
- Format rows (starting point, limits)
- Inspect cell details

## Workbooks

Connect and visualize multiple tables together. Useful for complex workflows that pass from one table to another.

## Folders

Organize tables by categories/projects.

## Clay as Data Intermediary

```
[INBOUND]                    [CLAY]                    [OUTPUT]
LinkedIn Ads      →          ┌─────────┐              → HubSpot
Organic Content   →          │ Enrich  │              → Salesforce
Newsletter        →          │ Score   │              → SmartLead
Webinars          →          │ Clean   │              → Instantly
Events            →          │ Qualify │              → Outreach
CRM Stale Data    →          └─────────┘              → Salesloft
```

**Key principle:** Data flows in → Transformation in Clay → Data flows out to other tools

**What Clay is NOT:**
- Not a CRM replacement (HubSpot/Salesforce)
- Not an email finder replacement (ZoomInfo/Apollo)
- It's a **complementary layer** that maximizes all your tools
