# Clay + n8n Integration & GTM Workflows

## Clay ↔ n8n Connection

### Clay → n8n (HTTP API to Webhook)

1. **In n8n**: Create a workflow with a Webhook trigger node. Copy the webhook URL.
2. **In Clay**: Add an HTTP API action column:
   - Method: POST
   - Endpoint: n8n webhook URL
   - Headers: Content-Type: application/json
   - Body: Map Clay columns to JSON fields
3. **Data flow**: When a row is enriched in Clay, it sends HTTP POST to n8n. The n8n workflow processes data, and the response is written back to the **same Clay row**.

### n8n → Clay (Sending Data)

1. **In Clay**: Create a table with webhook source. Copy the webhook URL.
2. **In n8n**: Use an HTTP Request node:
   - Method: POST
   - URL: Clay webhook URL
   - Body: JSON with your data

### Key Technical Notes

- Enable **Auto-Update** on Clay tables to process incoming webhook data automatically
- Use **Required to Run** toggle to prevent actions on empty rows
- Responses come back to the **same row** — use n8n's "Respond to Webhook" node to return data

## Common Clay + n8n Workflow Patterns

### Pattern 1: Lead Enrichment Pipeline
```
Clay (lead list)
  → HTTP to n8n webhook
  → n8n enriches via Apollo/Clearbit/Hunter
  → n8n returns enriched data
  → Clay receives in same row
  → Clay runs AI scoring
  → Clay pushes to CRM via n8n
```

### Pattern 2: AI SDR System
```
Clay (prospect data + enrichment)
  → n8n (AI-generated personalized emails via GPT-4)
  → n8n sends to Outreach/SalesLoft/Instantly
  → n8n logs results back to Clay
```

### Pattern 3: Real-Time Lead Routing
```
New lead (form/webhook)
  → n8n enriches via Clay waterfall
  → n8n scores lead (AI or rules)
  → IF hot → Slack alert to rep + CRM
  → IF warm → nurture sequence
  → IF cold → drip campaign
```

## CRM Integration Workflows

### HubSpot Node Capabilities

| Resource | Operations |
|----------|-----------|
| Contacts | Create, Update, Delete, Get, Search |
| Companies | Create, Update, Delete, Get, Search |
| Deals | Create, Update, Delete, Get, Search |
| Engagements | Create (calls, emails, meetings, notes) |
| Lists | Add/Remove contact |
| Tickets | Create, Update, Delete, Get |

### Salesforce Node Capabilities

| Resource | Operations |
|----------|-----------|
| Leads | Create, Update, Delete, Get, Convert |
| Contacts | Create, Update, Delete, Get |
| Accounts | Create, Update, Delete, Get |
| Opportunities | Create, Update, Delete, Get |
| Custom Objects | CRUD on any custom object |
| SOQL | Run arbitrary SOQL queries |

### CRM Workflow Patterns

#### Bi-Directional Sync (HubSpot ↔ Salesforce)
```
HubSpot Trigger (new contact)
  → Map fields
  → Check if exists in Salesforce (SOQL)
  → IF exists → Update Salesforce Contact
  → IF not → Create Salesforce Lead
  → Log sync to Google Sheets
```

#### Lead Scoring & Routing
```
HubSpot Trigger (form submission)
  → Enrich via Clearbit/Apollo
  → AI Score (GPT-4: 0-100 based on ICP fit)
  → Switch:
    → 80+ (Hot): Create deal + Slack alert to AE
    → 50-79 (Warm): Add to nurture sequence
    → <50 (Cold): Tag in HubSpot, drip campaign
```

#### Customer Onboarding
```
HubSpot Trigger (deal stage = "Closed Won")
  → Create project in PM tool
  → Send welcome email sequence
  → Create Slack channel
  → Schedule kickoff (Calendly)
  → Alert CSM team
```

## GTM/Sales Workflows

### Lead Routing
```
Webhook/Form Trigger (new lead)
  → Enrich (Clearbit/Apollo via HTTP)
  → AI Score (Code node or GPT-4)
  → Switch on score:
    ├─ Hot (80+) → HubSpot deal + Slack DM to AE
    ├─ Warm (50-79) → HubSpot "MQL" list + Slack #leads
    └─ Cold (<50) → Drip sequence + CRM tag
  → Log to Google Sheets
```

### Enrichment Pipeline (Waterfall)
```
Schedule Trigger (daily 7 AM)
  → Get new contacts from HubSpot (no enrichment date)
  → Split In Batches (size: 10, respects rate limits)
  → For each:
    ├─ Apollo lookup
    ├─ IF no result → Clearbit
    ├─ IF no result → Hunter.io
    └─ Merge results
  → Update HubSpot with enriched fields
  → Log stats to Slack #ops
```

### Slack Notifications

| Event | Channel | Content |
|-------|---------|---------|
| New high-value lead | #sales-alerts | Company, size, score, CTA link |
| Deal stage change | #pipeline | Deal, old→new stage, amount |
| Meeting booked | DM to AE | Prospect, company, time |
| Churn risk | #cs-alerts | Account, risk indicators |
| Weekly pipeline | #sales | Total deals, by stage, value |

### Email Sequences
```
Trigger (new MQL in HubSpot)
  → Enrich contact (sub-workflow)
  → AI: Generate personalized email (OpenAI)
  → Send via Gmail/Outreach/Instantly
  → Wait (3 days)
  → Check reply?
    ├─ YES → Alert AE, stop sequence
    └─ NO → Send follow-up #2
  → Wait (4 days)
  → Check reply?
    ├─ YES → Alert AE
    └─ NO → Final follow-up #3
  → Update HubSpot: "Sequence completed"
```

### Intent Signal Processing
```
Webhook (from 6sense/Bombora/G2)
  → Parse intent signal data
  → Match to HubSpot accounts
  → IF existing:
    ├─ Update intent score
    ├─ IF threshold → Slack alert to account owner
    └─ Add to ABM campaign
  → IF new:
    ├─ Create company in HubSpot
    ├─ Enrich (sub-workflow)
    └─ Route to SDR team
```

### Weekly Pipeline Report
```
Cron Trigger (Monday 8 AM)
  → HubSpot: Get all deals by stage
  → Code node: Calculate metrics
    - Total pipeline value
    - Deals per stage
    - Deals stuck >14 days
    - Week-over-week change
  → Format as Slack Block Kit
  → Send to #sales
  → Also log to Google Sheets
```
