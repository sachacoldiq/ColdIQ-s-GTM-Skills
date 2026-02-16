# Clay Operations — Credit Optimization

How to save up to $1,000/month on Clay credits through smart provider selection, conditional logic, and workflow automation.

---

## Credit Management Fundamentals

### Track Usage

Clay's dashboard shows credit consumption per integration. Monitor high-usage tools weekly.

### Pause Auto-Update

- **Why:** Auto-update enriches ALL new entries — wastes credits on duplicates or irrelevant data
- **How:** Run Settings → toggle off Auto-Update for specific columns until workflows are finalized

### Credit Rollovers

- Accumulate up to **2x your plan's limit** (e.g., 50K → 100K) for seasonal campaigns
- Buy mid-cycle credits at **1.5x standard rate** during surges without upgrading

### Downgrade with Retention

When reducing your plan, you retain up to **2x the new plan's credit limit** (e.g., downgrade from 50K/month to 25K/month but keep 50K credits temporarily).

---

## Optimizing Enrichments with Conditional Logic

### Multi-Stage Filtering (Tiered Enrichments)

Start with free/low-cost tools. Only trigger expensive options if free tools fail.

**Example workflow:**
1. **Step 1:** Clearbit (free) → fetch company domains
2. **Step 2:** If Clearbit fails → Google Search (1 credit)
3. **Step 3:** Enrich only verified data with LeadMagic (~$0.009/record)

### AI-Powered Conditional Rules

Use Clay's AI Formula Writer to create logic-based workflows:

- `"Only enrich if LinkedIn URL exists"`
- `"Skip enrichment for companies with <50 employees"`
- `IF(Clearbit Domain = blank, Run Google Search, "Skip")`

### Avoid Redundant Enrichments

- **Lookup Columns:** Integrate existing CRM data (Salesforce, HubSpot) to skip re-enriching the same records
- **Exclude low-value leads:** Filter out companies without emails or with <10 employees BEFORE enriching
- **Check for existing data:** Before running an enrichment, check if the column already has a value

---

## Cost-Efficient Alternatives

### Zero-Credit Options

| Task | Tool | Cost |
|---|---|---|
| News/scraping | Serper API | 0 |
| AI generation | GPT 4o-mini (API) | 0 |
| Domain lookup | Clearbit | 0 |
| Email verification | Reoon (one-time AppSumo purchase) | 0 |
| Google Maps scraping | Outscraper | 0 |
| Tech stack data | BuiltWith links | 0 |
| Cell manipulation | Clay AI Formula Writer | 0 |
| LinkedIn ad tracking | Serper API | 0 |

### Low-Cost Replacements

| Instead Of | Use | Savings |
|---|---|---|
| LinkedIn enrichment for company growth | LeadMagic ($0.009) | ~90% cost reduction |
| Clay email finder | Trykitt.ai via API ($0.004) | ~60% cheaper |
| Google Search + GPT | Serper API + GPT 4o-mini ($0.004) | Much cheaper |
| Semrush for e-com (2 credits) | Store Leads (1 credit) | 50% savings |

### HTTP/API Free Actions

Perform non-credit-consuming tasks like:
- Normalizing domains
- Generating notes
- Data formatting
- Replace Clay's email finder with Findymail or Prospeo via API keys

---

## Workflow Automation

### Automate with Trigify.io

Set up webhook-based workflows for:
- Tracking new funding rounds
- Monitoring hiring trends or competitor updates
- Alerts for new-in-role leads
- Evergreen campaigns (reduces manual intervention)

### Standardize with Templates

Pre-built templates minimize setup time and avoid redundant workflows:

- **Domain Name Template:** Clearbit → Serper → enrich domain data
- **LinkedIn Ads Template:** Serper API for ad campaign tracking
- **Email Waterfall Template:** Trykitt.ai → Prospeo → Datagma → LeadMagic → Reoon verify

### AI Formula Prompts

Automate data personalization and trend detection:

- **Extract first names:** `"Extract the first name from {{Full Name}}"`
- **Hiring trends:** `"If {{Job Title}} includes 'Manager' and {{Company Size}} > 200, flag for outreach"`
- **Industry categorization:** Use AI to categorize companies by vertical from description

---

## Batch Processing: The 5-for-1 Workflow

Chain multiple enrichments in one streamlined workflow:

1. **Find emails** — Trykitt.ai or Prospeo
2. **Verify emails** — Reoon Email Verifier
3. **Fetch LinkedIn data** — Clay LinkedIn integration
4. **Enrich tech stacks** — BuiltWith
5. **Append headcount** — LinkedIn + PredictLeads

---

## Scraping & Data Sourcing Hacks

### Google Maps Scraping
Use Outscraper (free with login) for bulk location scraping.

### Amazon / E-Commerce Data
Pair SmartScout (seller insights) with Store Leads (traffic trends).

### Competitor Profiling
Serper API + GPT 4o-mini for automated competitor insights (~$0.004/scrape).

### Tech Stack Data
Bypass expensive enrichments by using BuiltWith (free) and pairing with GPT 4o-mini for analysis.

### LinkedIn Data
Pull headcounts for just 1 credit using Clay's built-in LinkedIn integration instead of pricier HR tools.

### Ethical Scraping

- **Residential proxies:** Use tools like Bright Data's Scraping Browser to rotate IPs
- **Random delays:** Introduce 2–5 second delays between scrapes to avoid detection
- **CAPTCHA avoidance:** Mimic human behavior patterns

---

## Weekly Audit Checklist

- [ ] Review credit usage on Clay dashboard
- [ ] Identify failed API calls or high-cost enrichments
- [ ] Check for redundant enrichments across tables
- [ ] Verify auto-update is off on non-finalized tables
- [ ] Set alerts for high-consumption tools (Semrush: 2 credits, Zenrows: 3 credits)
- [ ] Review conditional logic — are free tools being tried first?
- [ ] Check Lookup Columns — is CRM data being reused?

---

## Key Takeaways

1. **Prioritize free tools** — Serper, Clearbit, BuiltWith, Reoon, Clay AI Formulas
2. **Optimize with conditional logic** — tiered enrichments, AI rules, modular templates
3. **Automate with purpose** — Trigify.io webhooks, evergreen campaigns
4. **Monitor and audit weekly** — credit dashboard, failed calls, inefficiencies
5. **Invest in lifetime solutions** — Reoon (one-time buy), Bright Data proxies
6. **Use API keys** — Replace Clay-native tools with cheaper API alternatives when possible

---

## Learning Resources

- **Clay University** — CRM enrichment, automated outbound, intent data modules
- **Clay Help Center** — [docs.clay.com](https://docs.clay.com/en/)
- **Clay Templates** — [clay.com/templates](https://www.clay.com/templates)
- **ColdIQ Coaching** — [coldiq.com/coaching](https://www.coldiq.com/coaching)
- **Bright Data** — [brightdata.com](https://brightdata.com/) (scraping browser, proxies)

---

> **Built by [ColdIQ](https://www.coldiq.com) & [Ivan Falco](https://www.linkedin.com/in/ivanfalco/en/).** For questions on implementation or anything not covered here, reach out to Ivan directly on [LinkedIn](https://www.linkedin.com/in/ivanfalco/en/).
