# Beginner Workflow — Step by Step

*Source: Matt — Agency owner, 100K+ cold emails/month*

## The Complete Workflow

```
1. IMPORT DATA
   ↓
2. ENRICH MISSING EMAILS (waterfall or single provider)
   ↓
3. MERGE COLUMNS
   ↓
4. VALIDATE EMAILS
   ↓
5. GET COMPANY SUMMARY (cheap AI)
   ↓
6. CHECK IF FIT (better AI)
   ↓
7. PUSH TO SEQUENCER
```

## Step 1: Import Data

**Options:**
- CSV upload
- HubSpot/Salesforce sync
- Apollo integration
- Clay's native "Find People"

**Note:** External data (Apollo) is often better quality than Clay native

## Step 2: Enrich Missing Emails

**Built-in Waterfall:**
- Add enrichment → Work Email Waterfall
- Multiple providers: LeadMagic, Prospeo, etc.
- Stops as soon as an email is found

**External Provider (saves money):**
- Use your own API key
- Connect Prospeo directly
- Saves Clay credits

## Step 3: Merge Columns

- Merge emails from different sources
- One clean "Final Email" column

## Step 4: Validate Emails

**Native Clay Providers:**
- Debounce, Enrichly, Hunter, LeadMagic, NeverBounce

**Via API (recommended for catchalls):**
- ListKit/Listman.io = validates catchalls with precision
- Configure an HTTP API call

**CRITICAL — Conditional Formula:**
```
Only run if /work_email is not empty
```
→ Don't waste credits on empty cells

## Step 5: Company Summary (Cheap AI)

**Model:** GPT-4 mini ($0.00126/call)

**Prompt:**
```
I want you to visit this website /company_domain and give me
an exhaustive summary of what the company does in as many
paragraphs as possible.
```

**Why separate:**
1. Reusable for other prompts
2. Cheap model for intensive scraping
3. Smart model for interpretation

**Conditional Formula:**
```
Only run if /listkit_results equals "valid" OR "catchall valid"
```

## Step 6: Check Fit (Smart AI)

**Model:** Claude 3.5 Sonnet (better interpretation)

**Prompt:**
```
I'm going to feed you a company description and I want you
to tell me if the company is a B2B company or a B2C company.

If they are a B2B company then output "B2B"
If they are a B2C company then output "B2C"

Only output B2B or B2C, nothing else.

Here is the company summary: /company_summary
```

**IMPORTANT:** "Only output X or Y, nothing else"
- Makes filtering easy
- No paragraphs of justification

**Conditional Formula:**
```
Only run if /company_summary exists
```

## Step 7: Push to Sequencer

**Native integrations:**
- SmartLead
- Instantly
- Others via API

**Conditional Formula:**
```
Only run if /company_type equals "B2B"
```

**Mapping:**
- First name, Last name, Email
- Company domain, LinkedIn profile
- Custom fields

## Best Practices

**Always test small:**
- Run 10 rows first
- Check the outputs
- Then run all

**Save credits:**
- Cheap AI (GPT-4 mini) for scraping
- Smart AI (Claude) for interpretation
- Conditional formulas everywhere

**Common mistakes:**
- Forgetting to feed data to the prompt (e.g., /company_summary)
- Running before checking the conditional formula
- Using expensive AI for everything
