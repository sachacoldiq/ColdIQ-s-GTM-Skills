# Waterfall Enrichment

## Concept

The waterfall chains multiple enrichment providers sequentially. If the first provider doesn't find the data, the next one takes over. Access to 150+ databases.

**Benefits:**
- Maximizes coverage (typically triples it)
- Optimizes costs (stops as soon as data is found)
- Improves data quality
- Credits refunded if no data found

## How It Works

1. Provider 1 searches → Found? Stop. Not found? Next.
2. Continue until data found or all providers exhausted
3. Automatic validation built-in (ZeroBounce by default)

## Recommended Inputs

- Primary: Company Domain
- Improves precision: Personal Social Profile URLs
- Fallback: Full Name + Company Name

## Setup Step-by-Step

**1. Add the enrichment**
- Click "Add enrichment"
- Search "Work Email" (or other)

**2. Configure the sequence**
- Under Waterfalls, select the waterfall
- Reorder, add, or remove providers
- Toggle switch to skip a specific provider

**3. Select input columns**
- Main input: Company Domain
- Ideal: Personal Social Profile URLs (improves precision)
- Fallback: Full Name + Company Name or Full Name + Personal Email

**4. Choose validation settings**
- Default: ZeroBounce
- Other validators available

**5. Execution**
- Clay dynamically passes through the waterfall
- If a provider finds a valid email → stop
- If no email found → credits refunded, move to next provider
- Continue until email found or all providers exhausted

## Example: Find Work Email (Enterprise Waterfall)

```
Provider 1: LeadMagic (2 credits) → Found? STOP
     ↓ Not found
Provider 2: Prospeo (2 credits) → Found? STOP
     ↓ Not found
Provider 3: Hunter (2 credits) → Found? STOP
     ↓ Not found
Provider 4: Apollo (3 credits) → Found? STOP
     ↓ Not found
Provider 5: RocketReach (3 credits) → Found? STOP
     ↓ Not found
Provider 6: FindyMail (2 credits) → STOP (no email found)
```

**Cost if found at Provider 4:** 2+2+2+3 = 9 credits (not 14)

**Key insight:** You only pay for providers used, not all of them.

## Coverage Comparison

- Single email finder = ~40% coverage
- Waterfall = 85%+ coverage

## Conditional Runs (Save Credits)

1. Add a new enrichment
2. Click "Run Settings" → "Conditional Run"
3. Use AI to generate a formula
4. Example: "Only run if existing email field is blank"

## Custom Waterfall

You can create your own combinations of integrations to maximize quality and coverage.

## Enrichment Providers (296+ integrations)

**Email Discovery:**
Hunter, Prospeo, Apollo.io, RocketReach, FindyMail, LeadMagic, DropContact, Icypeas, Nimbler, Mixrank, Wiza, FullEnrich

**Company Research:**
Apollo.io, Clearbit, PredictLeads, Harmonic.ai

**Email Validation:**
NeverBounce, Debounce, Enrichley, Zero Bounce, FindyMail, LeadMagic

**Location & Local Business:**
Google Maps, Yelp, Mapbox, Lob

**Web Scraping:**
Bright Data, Zenrows, Apify, PhantomBuster, Clay Scrapers

**Database & Webhooks:**
Postgres, Snowflake, Airtable, Coda, Google Sheets, Zapier, n8n

**Intent & Signals:**
Common Room, Teamfluence, Midbound
