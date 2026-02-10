# CRM Sync — HubSpot & Salesforce

## Supported CRMs
HubSpot, Salesforce, Pipedrive, Close, Attio

## Action Types

### Lookup (Read-Only)
- Pull data FROM CRM INTO Clay
- Doesn't modify anything in your CRM
- Experiment freely without risk

### Create & Update (Write)
- Push data FROM Clay TO CRM
- Real and permanent modifications
- Be careful and methodical

## HubSpot Setup

1. Click "Import"
2. Select "HubSpot"
3. Authenticate your account
4. Permissions granted automatically

## Salesforce Setup

1. Navigate to import action
2. Select Salesforce
3. Login and grant permissions
4. Choose: list or static report
5. **Note:** Reports limited to 2,000 records — prefer imports from lists

## Push to Email Sequencers

Clay integrates with:
- Instantly.ai
- lemlist
- Smartlead.ai
- HeyReach
- Sendspark
- Salesloft
- Outreach

## Best Practices

- Match by HubSpot ID for accuracy
- Use "ignore blank values" to protect clean fields
- Automate via API connections for continuous sync
- Test with one row first before bulk operations

## CRM Enrichment Example — Salesforce Cleanup

*30,000 records enriched and cleaned*

### Problem
- 30K Salesforce records
- Only: Company Name, Billing State, Company Owner
- No website, no LinkedIn, no revenue, no contacts

### Solution Workflow

```
Salesforce Import (30K records)
          ↓
    Google Search: "[Company Name] LinkedIn"
          ↓
    Extract LinkedIn Company URL
          ↓
    Enrich Company from LinkedIn
          ↓
    Find Company Domain
          ↓
    Revenue Waterfall
          ↓
    Find Marketing Contacts
          ↓
    Tech Stack (HG Insights)
          ↓
    Find Investors
          ↓
    Update Salesforce (push enriched data back)
```

### New Data Added

| Field | Source | Value |
|-------|--------|-------|
| Company LinkedIn URL | Google Search | Matching |
| Description | LinkedIn Enrich | Context |
| Industry | LinkedIn Enrich | Segmentation |
| Location | LinkedIn Enrich | Routing |
| Employee Count | LinkedIn Enrich | Sizing |
| Revenue | Waterfall (PDL, HG, Clearbit) | Qualification |
| Marketing Leaders | Find People | Contacts |
| Tech Stack | HG Insights | Targeting |
| Investors | Enrichment | Context |

### Key Insight

**Clay as a CRM cleaning layer:**
- Import from Salesforce
- Enrich everything
- Push back to Salesforce
- Auto-refresh on schedule
- CRM always clean and complete
