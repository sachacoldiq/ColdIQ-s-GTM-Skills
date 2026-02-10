# Workflow Patterns & Best Practices

## 5 Standard Workflow Patterns

### Pattern 1: Lead Sourcing
```
Source (LinkedIn/Apollo) → Enrichment (Email/Phone) → Validation → Push to CRM/Sequencer
```

### Pattern 2: Account Research
```
Company List → Firmographic Enrichment → Tech Stack → Decision Makers → Outreach
```

### Pattern 3: Intent-Based Outreach
```
Job Change Monitor → Filter (ICP fit) → Personalization → Sequencer
```

### Pattern 4: Data Hygiene
```
CRM Import → Dedupe → Re-enrich → Validate Emails → Update CRM
```

### Pattern 5: Waterfall Enrichment
```
Lead → Provider 1 → (if empty) Provider 2 → (if empty) Provider 3 → Output
```

## Common Use Cases

### Sales Development
- Lead sourcing from ICP criteria
- Contact enrichment (email, phone)
- Personalization data gathering
- Push to sales engagement tools

### Account-Based Marketing
- Target account list building
- Buying committee mapping
- Intent signal tracking
- Multi-channel outreach coordination

### Recruiting
- Candidate sourcing
- Contact information finding
- Company research
- Outreach automation

### Market Research
- Company database building
- Technology landscape mapping
- Competitive intelligence
- Industry analysis

## Data Import & Sourcing

### File Sources
- CSV, Excel, Google Sheets

### CRM Integrations
- HubSpot, Salesforce, Pipedrive, Close

### LinkedIn
- LinkedIn Sales Navigator
- LinkedIn URLs
- LinkedIn Company Pages

### Other Sources
- Apollo.io, Google Maps, Yelp, GitHub, Hacker News, Google Scholar

## Chrome Extension

### 1. Clay for Chrome (Primary)
- Extract structured data from web pages
- Auto-detect lists on pages
- Map your own lists (click 2 items → automatic selector)
- Map Page Recipes (templates for similar pages)
- Export to Clay table, CSV, or clipboard

### 2. Clip to Clay
- Save entire pages to Clay tables

### Use Cases
- Agency directories
- Competitor pages
- Case studies
- Conference participant lists
- Expert directories

## Views, Filters & Sorting

### Views
Saved combinations of filters, sorts, and column customizations.
- Switch via dropdown menu
- Add/Duplicate/Delete views
- Each view = different perspective on same data

### Filters
- AND logic: all conditions must be true
- OR logic: at least one condition true
- Up to 2 levels of filter group depth
- Types: equal to, not equal to, is empty, is not empty, boolean

### Sorting
- Ascending: A→Z, small→large
- Descending: Z→A, large→small

## Auto-Update & Auto-Dedupe

### Auto-Update
- Enable/disable at table level AND column level
- Table OFF = nothing runs auto (overrides everything)
- **Caution:** Consumes credits on each refresh

| Table | Column | Result |
|-------|--------|--------|
| OFF | Any | Nothing runs automatically |
| ON | OFF | That column doesn't auto-run |
| ON | ON | Column runs automatically |

### Auto-Dedupe
- Based on email, LinkedIn URL, or other unique identifier
- Keeps data clean, saves credits (no double enrichment)
- **Limitation:** Keeps the OLDEST row, deletes newer entries
- Case-sensitive ("Clay" ≠ "clay"), whitespace counts ("Clay " ≠ "Clay")

## Run Settings & Conditional Runs

### How to Access
1. Add an enrichment
2. In the side panel, find "Run Settings"
3. Find the "Only run if" box
4. Use "Use AI" or write manually

### Logical Operators
- **AND:** All conditions must be true
- **OR:** At least one condition true
- **NOT:** Inverts a condition (e.g., `NOT {{status}} == "Closed"`)

### Common Use Cases
- Upload to CRM only if valid email
- Add to sequence if lead_score > 80 AND industry == "SaaS"
- Run personal email waterfall only if work email not found

## Templates

### Create from Template
1. +Create New → Table → Use Template
2. Choose the template
3. Click "Add to Workspace"

**Note:** Created tables become independent from the original template.

### Save Your Own Template
- Duplicate your table → move to separate workbook → add "[Template Do Not Delete]" to title
- Or: Actions → Share as template (creates public template with structure + 1 row only)

### Column Group Templates
- In a table, click "Add enrichment" → "Templates" → search your template

### Save Templates
- AI prompts: Save custom prompts as templates in "Use AI"
- Group columns: Select multiple columns → "Save as Template"
- Waterfall sequences: Build custom waterfalls → save as template
