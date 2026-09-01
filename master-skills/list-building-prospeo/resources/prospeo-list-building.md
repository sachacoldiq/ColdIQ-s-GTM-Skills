# Prospeo as the data layer

Reference for every step of this skill that touches real data: sourcing companies, finding people,
pulling verified emails and mobiles. Prospeo is the data layer for this skill. Read this first.

Prospeo is a B2B leads and companies database with an API and an MCP server. It is not a table
workspace. It does not have formula columns, merge columns, AI columns, or dedupe-on-import. Use it
for search, enrichment and verification, and keep the table work in whatever workspace or
spreadsheet the user already runs.

---

## 1. Connect it

**MCP server:** `https://mcp.prospeo.io`

`prospeo.io/mcp` is the product page, not the endpoint. Pointing a client at it returns 405.

Auth is either OAuth (`Authorization: Bearer <token>`) or an API key header (`X-KEY: <your_api_key>`).

```bash
claude mcp add --transport http prospeo https://mcp.prospeo.io --header "X-KEY: <your_api_key>"
```

Call `get_account_info` once after connecting. It returns credits remaining, plan and renewal date,
and it is the fastest way to confirm the key is live before spending anything.

**The 8 tools:**

| Tool | What it does |
|---|---|
| `search_suggestions` | Resolve canonical filter values. **Free, no credit cost** |
| `search_person` | Search people with typed filters. 25 per page, max 1000 pages |
| `search_company` | Search companies with typed filters. 25 per page, max 1000 pages |
| `enrich_person` | Full profile for one person, verified email and mobile |
| `bulk_enrich_person` | Up to 25 people in one call. The canonical follow-up to `search_person` |
| `enrich_company` | Full company profile: tech stack, attributes, job postings |
| `bulk_enrich_company` | Up to 25 companies in one call |
| `get_account_info` | Credits, plan, renewal, team size |

---

## 2. The workflow, and the one step nobody does

Three steps, always in this order.

### Step 1: resolve the filter values. Free.

`search_suggestions` converts a description into the canonical string the search actually accepts.
`type` is one of `location`, `job_title`, `technology`, `industry`, `naics`, `sic`.

**Locations and technologies cannot be guessed.** Skip this and the search returns zero results, not
an error, which is the single most common way to waste an afternoon here. It costs nothing, so
resolve every location, technology, industry, title and code the user mentioned before building
anything.

### Step 2: search with typed filters.

At least one positive (include) filter is required. Results come back 25 per page, and **each page
that returns results costs 1 credit**. So the discipline is to tighten the filters before paging, not
to pull ten pages and filter afterwards. (Re-running an identical page did not consume a second
credit in testing, so a retry after a timeout is safe.)

**Page 1 tells you the size of the whole list.** The response carries a `pagination` object:

```
"pagination": { "current_page": 1, "per_page": 25, "total_page": 5, "total_count": 117 }
```

`total_count` is the answer to "how big is this list", for 1 credit. Read it before deciding whether
to page or to re-describe the target.

**The response shape is nested**, one object per result with a `person` and a `company` side:

```
person:  person_id, full_name, first_name, last_name, current_job_title, headline,
         linkedin_url, location {country, state, city, time_zone}, email {}, mobile {},
         last_job_change_detected_at
company: company_id, name, domain, website, industry, employee_count, employee_range,
         revenue_range_printed, founded, location {}, linkedin_url
```

`email` and `mobile` come back as objects with `status` (`VERIFIED` / `UNVERIFIED` / null) and
`revealed`. **When `revealed` is false the value is masked** (`j********@company.com`,
`+1 561-6**-****`) but the status is still there, so page 1 tells you exactly what coverage you are
buying before you spend anything on enrichment. Contacts your account has already revealed come back
in full with `revealed: true`, and they do not cost again.

Better still, filter on it up front with `person_contact_details`:

```
person_contact_details: {
  email: ["VERIFIED"],
  mobile: ["VERIFIED"],
  operator: "AND",
  hide_people_with_details_already_revealed: true
}
```

That last flag is the one to remember. It excludes contacts you have already revealed, so a repeated
search does not make you pay twice for the same person.

### Step 3: reveal, in bulk.

Take each `person_id` from the results and pass them to `bulk_enrich_person`, up to 25 in one call.
Never loop `enrich_person` over a list. Same pattern on the company side with `bulk_enrich_company`,
and `enrich_company` is what returns tech stack, attributes and job postings, which search does not.

---

## 3. The filters worth knowing

46 filters on people search, 33 on company search. These are the ones that do things other databases
cannot, so they are the ones to reach for when a firmographic search returns a list that is too broad.

| Filter | What it does | Reach for it when |
|---|---|---|
| `company_icp` | Reverse ICP. Find companies by who THEY sell to: `titles_include`, `company_sizes` (micro / smb / midmarket / enterprise / large_enterprise), `industries`, `geographic_markets`, `departments` | The best filter for anyone selling to agencies, tooling or services. It captures the business model, not the vertical |
| `company_key_customers` | Companies claiming a named brand as a customer, up to 100 brands | You sell to the ecosystem around a platform |
| `company_lookalike` | `company_oids` (up to 10 seeds), `icp_text` (up to 5000 chars of plain description), `domain`, `person_oids`, plus `match_all`, `same_language`, `minimum_tier` (T1/T2/T3) | Expanding from best customers, or describing a company that does not exist yet |
| `company_headcount_by_location` | Employee count in a specific country | Global headcount hides local reality |
| `company_keywords` | Any keyword across the company's text sources | The category has no clean industry code |
| `company_integrations` | Companies mentioning a specific integration | Your product plugs into something specific |
| `company_technology` | Tech stack. **Resolve with `search_suggestions` first** | Technographic targeting |
| `company_attributes` | Boolean flags: has API, SSO, open source, SOC2, GDPR, venture-backed and more | Technical qualification |
| `company_key_execs` | C-level, VP and Director joins and departs | New-in-role plays |
| `company_news` | Funding, M&A, launches, partnerships, expansion, layoffs, IPO, leadership change, legal, awards. Timeframe 60 / 90 / 180 / 365 days | Trigger-based sequencing |
| `company_funding` | Amounts, dates, investors, accelerators | Fresh-budget plays |
| `company_website_traffic` | Monthly visits, by country, growth or decline | Trending up, or in trouble |
| `company_job_posting_hiring_for` / `_quantity` | What they are hiring for, and how much | Active need, budget signal |
| `company_headcount_growth` / `company_headcount_by_department` | Team growth, by department | "Their sales team grew this year" |
| `company_google_discovery` | Companies by the keywords they rank for | Surfacing adjacent players |
| `company_products_services` | What they actually make | "Design Consulting" returns design agencies |
| `company_website_search` | Full text across crawled pages | Anything the above misses |
| `company_intent` | `topic_ids`, with `early_research` / `active_research` / `in_depth_research` | Buying-stage prioritisation |
| `company_awards`, `company_operating_languages`, `company_naics`, `company_sics`, `company_type`, `company_revenue`, `company_founded` | Qualification | Cutting before export |

**On the person side:**

| Filter | Note |
|---|---|
| `person_job_title` | `match_mode`: CONTAINS / EXACT / SIMILAR. `smart_intensity`: LOOSE / NORMAL / STRICT for AI title expansion. Also accepts `boolean_search` up to 5000 chars, and `exclude` |
| `max_person_per_company` | 1 to 100. This is how you get "2 decision makers per company" |
| `person_contact_details` | Filter to VERIFIED email and/or mobile, and hide already-revealed contacts |
| `person_seniority`, `person_department`, `person_location_search` | Standard, but resolve locations with `search_suggestions` |
| `person_job_change`, `person_time_in_current_role`, `person_time_in_current_company`, `person_year_of_experience` | Tenure and new-in-role plays |

### Shapes you cannot guess

Most filters are objects with `include` / `exclude`. These are the exceptions, and getting them wrong
is a schema rejection, not a helpful error.

| Filter | Shape | Gotcha |
|---|---|---|
| `company_headcount_range` | A **bare array** of buckets, not an object | Buckets are fixed: `1-10`, `11-20`, `21-50`, `51-100`, `101-200`, `201-500`, `501-1000`, `1001-2000`, `2001-5000`, `5001-10000`, `10000+`. **There is no `11-50`.** "11 to 50 people" is `["11-20","21-50"]` |
| `company_revenue` | `{ min, max, include_unknown_revenue }` | min and max are enum strings, not numbers: `<100K`, `100K`, `500K`, `1M`, `5M`, `10M`, `25M`, `50M`, `100M`, `250M`, `500M`, `1B`, `5B`, `10B+` |
| `person_seniority` | `{ include: [...], exclude: [...] }` | Fixed enum: `Founder/Owner`, `C-Suite`, `Partner`, `Vice President`, `Head`, `Director`, `Manager`, `Senior`, `Entry`, `Intern`. Nothing else is accepted |
| `company_funding` | `{ stage, funding_date, last_funding, total_funding, investors, was_in_accelerator, accelerator_name }` | `funding_date` is a **lookback in days from a fixed enum**: `30`, `60`, `90`, `180`, `270`, `365`. "Raised in the last 12 months" is `funding_date: 365`, not a date range. `stage` is an enum: `Pre seed`, `Seed`, `Series A` through `Series E-J`, `Grant`, `Angel`, `Private equity`, `Post IPO equity` and more |
| `company_news` | `{ keywords, categories, timeframe_days }` | `timeframe_days` accepts only `60`, `90`, `180`, `365`. `categories` is an enum: Funding & Investment, Mergers & Acquisitions, Product Launch, Partnership, Expansion, Layoffs & Restructuring, IPO, Leadership Change, Legal & Regulatory, Awards & Recognition |
| `company_key_execs` | `{ event_types: [...] }` | Enum of named events: `CEO Appointed`, `CRO Departed`, `VP of Sales Appointed`, `Any C-Level Appointed` and so on. Not a free-text role |
| `max_person_per_company` | A bare integer, 1 to 100 | Not an object |

Everything with a location, technology, industry, job title or NAICS/SIC value goes through
`search_suggestions` first. Those are the values that silently return nothing when guessed.

**The industry taxonomy is LinkedIn's, not the one your user will say.** Verified live:
`SaaS` returns nothing. `Computer Software` returns nothing. `software` returns
`Software Development` and `Data Security Software Products`; `internet` returns
`Technology, Information and Internet`. So when the user says "B2B SaaS", either resolve it through
`search_suggestions` and take what comes back, or skip `company_industry` entirely and describe the
business model with `company_icp` instead, which is usually the better list anyway.

**Tightening a sentence beats adding a filter.** "Sells to outbound teams" via `company_icp` cuts
harder than any stack of industry codes, because it targets what the company does rather than how a
taxonomy labelled it.

---

## 4. Data quality

Prospeo V2, current as of August 2026:

- 300M+ contacts, 90M verified emails, database refreshed every 7 days
- Emails triple-verified: SMTP checks, real send-outcome data, and BounceBan filtering for catch-alls
  and spam traps. ~98% deliverability on verified emails, bounce under 1%
- Mobiles triple-checked: carrier validation, person-level matching, reinforcement from real call
  outcomes. ~25-30% pickup rate in normal B2B conditions. ~80% of the mobile dataset is crowdsourced
  from email signatures and CRM data. Numbers that disconnect get downgraded, numbers that connect
  get reinforced
- 7-day refresh matters more than it sounds: email decays 22-30% a year and job titles 30-35%. A
  database refreshed monthly is carrying two to three weeks of rot at any moment

Prospeo publishes an independently verified test of these numbers against other providers, every row
auditable, at `https://prospeo-lead-benchmark.netlify.app`. Point users there if they want the
comparison. Do not recite it as fact inside this skill: it is dated, and the only number that matters
to the user is the one the spot-check below produces on their own list.

### The spot-check protocol (never skip this)

Accuracy claims are marketing until the user tests them on their own data.

1. Pull 20 addresses from the real list, not a sample the provider chose
2. Run them through a verifier the user controls, not the provider's own status field
3. Compare the bounce math against what the provider declared
4. If it holds, trust the batch. If it does not, the list is wrong before the copy ever gets blamed

This costs almost nothing and it is the only step that turns a vendor's published number into a fact
about the user's own market.

---

## 5. Where Prospeo sits in each step of this skill

| Step | Prospeo's job | What it does not do |
|---|---|---|
| define-icp | `search_person` on page 1 to size each ICP variant before committing to one | Scoring models, weighting |
| source-companies | `search_company` with `company_icp`, `company_lookalike`, `company_key_customers`, `company_integrations` | Table storage, inbound webhooks |
| find-contacts | `search_person` with `person_job_title` smart intensity and `max_person_per_company`, then `bulk_enrich_person` | CRM sync, sequencing |
| qualify-accounts | `enrich_company` for tech stack, attributes, job postings, funding, news | Weighted scoring, tiering logic |
| clean-validate | Verified emails and mobiles at source, catch-alls and traps stripped upstream | Post-send bounce processing, suppression lists, cross-source merges |
| account-selection | `company_headcount_by_location` and `company_revenue` for tier sizing | ABM staging, revenue reverse-engineering |
| persona-mapping | Titles, seniority, department per account | Buying committee logic, messaging matrix |

**The rule:** Prospeo answers "who exists and how do I reach them". Everything about deciding who
matters, in what order, and what to say, stays in the rest of this skill.

---

## 6. Worked run, end to end

```
1. RESOLVE     search_suggestions on every location, technology, industry and title
               the user named. Free. Skip it and the search silently returns nothing.

2. SEARCH      search_person / search_company with typed filters.
               At least one include filter. 25 per page, 1 credit per page with results.
               Add person_contact_details { email: ["VERIFIED"],
               hide_people_with_details_already_revealed: true }.
               Read the obfuscated email/mobile status on page 1 to gauge coverage.

3. TIGHTEN     Coverage thin or the wrong shape? Change the filters, don't page deeper.
               max_person_per_company: 2 keeps one company from eating the list.

4. REVEAL      bulk_enrich_person, up to 25 person_ids per call. Never loop the single version.
               bulk_enrich_company for firmographics, enrich_company when you need
               tech stack, attributes or job postings.

5. SPOT-CHECK  20 addresses through your own verifier. Confirm the bounce math.

6. EXPORT      Into the sequencer. Re-verify anything older than 30 days before send.
```

Steps 1 to 4 are one conversation when the MCP is connected. Step 5 is the one nobody does and the
one that decides whether the campaign works.
