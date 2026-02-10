---
name: people-enrichment
description: Find and enrich contacts at target companies in Clay. Use when the user asks about finding decision makers, people enrichment, LinkedIn enrichment, title or seniority filtering, buying committee mapping, contact discovery at companies, or Sales Navigator imports. Triggers on "find contacts", "find people", "people enrichment", "decision makers", "LinkedIn enrichment", "title filtering", "seniority", "buying committee", "Sales Navigator". Do NOT use for email-specific waterfall setup, phone number finding, or company-only enrichment.
---

# People Enrichment

You help users find and enrich contacts at target companies using Clay's people search and LinkedIn enrichment capabilities.

## References

- Read `clay/resources/core-concepts.md` for Clay table fundamentals.
- Read `clay/resources/workflow-patterns.md` for lead sourcing patterns and data import methods.

## People Discovery Workflow

```
Company List (with domains)
        |
   Find People (by title + seniority)
        |
   LinkedIn Enrichment (profile data)
        |
   Filter (ICP match)
        |
   Email/Phone Waterfall (separate sub-skills)
```

## Best Sources for Finding People

1. **LinkedIn Sales Navigator** -- most accurate for B2B, filter by title/seniority/company
2. **Apollo Find People** -- large database, good coverage, 2-3 credits
3. **Clay Find People** -- native Clay search across multiple providers
4. **CRM Import** -- pull existing contacts from HubSpot/Salesforce

## Key Filtering Criteria

- **Title keywords:** VP, Director, Head of, Manager, Chief, C-level
- **Seniority levels:** C-Suite, VP, Director, Manager
- **Department:** Sales, Marketing, Engineering, Finance, Operations
- **Recent hires:** joined in last 90 days (high intent signal)
- **Limit:** 3-5 decision makers per company (avoid over-enrichment)

## Setup Steps

1. Start with a company table that has domains or LinkedIn company URLs
2. Add "Find People" enrichment -- specify title keywords and seniority
3. Map company domain or LinkedIn company URL as input
4. Set limit to 3-5 contacts per company
5. Add LinkedIn Profile enrichment for each found person
6. Filter by ICP fit using formulas or AI column
7. Proceed to email/phone waterfall (separate sub-skills)

## LinkedIn Enrichment Data Points

| Data Point | Source | Notes |
|-----------|--------|-------|
| Full name | LinkedIn Profile | Auto-split into first/last |
| Current title | LinkedIn Profile | Most accurate source |
| Seniority | LinkedIn Profile | C-Suite, VP, Director, etc. |
| Location | LinkedIn Profile | City, state, country |
| Tenure | LinkedIn Profile | Time at current company |
| Past companies | LinkedIn Profile | Career history |
| Skills | LinkedIn Profile | For personalization |
| Connections | LinkedIn Profile | Network size indicator |

## Conditional Runs (Save Credits)

- Only enrich people if company matches ICP: `/company_employee_count > 50 AND /industry equals "SaaS"`
- Only search for more contacts if fewer than 3 found: `/contacts_found < 3`
- Skip enrichment if LinkedIn URL already exists: `/linkedin_url is not empty`

## Examples

**Example 1:** "I have 500 companies and need to find the VP of Sales at each"
--> Use Clay Find People with title filter "VP Sales" OR "VP of Sales" OR "Head of Sales". Limit to 2 per company. Then LinkedIn enrich for full profile. Estimated: 500 x 3 credits = ~1,500 credits for discovery + 1,000 x 2 credits for enrichment.

**Example 2:** "I want to map the entire buying committee for enterprise deals"
--> Search for 3-5 people per company across titles: VP Sales, VP Marketing, CTO, CFO, Head of Ops. Use separate Find People columns for each persona. Total: 5 columns x 500 companies = 2,500 lookups.

**Example 3:** "I imported Sales Navigator leads but they only have LinkedIn URLs"
--> Add LinkedIn Profile enrichment column with the URL as input. This gives you name, title, company, location. Then extract company domain and run company enrichment. Cost: 2 credits per profile.
