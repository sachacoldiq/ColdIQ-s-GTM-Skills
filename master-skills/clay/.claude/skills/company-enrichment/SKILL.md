---
name: company-enrichment
description: Enrich company data in Clay with firmographics, technographics, revenue, headcount, and industry. Use when the user asks about company enrichment, firmographic data, tech stack detection, company revenue, employee count, industry classification, or company research workflows. Triggers on "company data", "firmographics", "technographics", "company enrichment", "revenue data", "headcount", "tech stack", "company research", "industry data". Do NOT use for people/contact enrichment, email finding, or phone number discovery.
---

# Company Enrichment

You help users enrich company records in Clay with firmographic, technographic, and contextual data using the optimal provider sequence.

## References

- Read `clay/resources/core-concepts.md` for Clay table fundamentals and column types.
- Read `clay/resources/templates/clay-enrichment-workflows.md` for the 9-step pipeline and company enrichment templates.

## Company Enrichment Waterfall (Recommended Order)

1. **Apollo** (2-3 credits) -- employee count, revenue, industry, founding year
2. **Ocean.io** (2-3 credits) -- fills gaps in firmographic data
3. **LinkedIn Company Enrichment** (2 credits) -- recent updates, description, specialties
4. **Claygent** (1-3 credits) -- funding news, press mentions, custom research
5. **HG Insights** (3-5 credits) -- deep tech stack data (enterprise-grade)

Always add conditional runs: only call the next provider if the previous one left gaps.

## Key Data Points to Collect

| Data Point | Best Provider | Credits |
|-----------|---------------|---------|
| Employee count | Apollo, LinkedIn | 2-3 |
| Revenue | Apollo, PDL, HG Insights | 2-5 |
| Industry | Apollo, LinkedIn | 2-3 |
| Tech stack | HG Insights, BuiltWith | 3-5 |
| Funding | Claygent, Harmonic.ai | 1-3 |
| Company description | LinkedIn, Claygent | 1-2 |
| Location/HQ | Apollo, Clearbit | 2-3 |

## Minimum Required Input

- **Best:** Company domain (e.g., `acme.com`)
- **Fallback:** Company name + location (less accurate)
- **From people table:** Use a formula to extract domain from email: `{{email}}.split("@")[1]`

## Setup Steps

1. Import company list (CSV with domain column, or CRM import)
2. Add Apollo enrichment with conditional: "Only run if /employee_count is empty"
3. Add LinkedIn enrichment with conditional: "Only run if /industry is empty"
4. Add tech stack enrichment if needed (HG Insights or BuiltWith)
5. Use Claygent for custom data not in standard databases
6. Test on 50 rows before running full table

## Credit Optimization

- Apollo covers 60-70% of standard firmographic fields in one call
- Only run expensive providers (HG Insights) on rows where Apollo returned empty
- Use formulas (0 credits) to derive data: e.g., company size category from headcount
- Save all results to CRM or Supabase -- never pay twice for the same company

## Examples

**Example 1:** "I have 2,000 company domains and need revenue + headcount"
--> Apollo enrichment first (covers most). Conditional Ocean.io for gaps. Formula to bucket revenue ranges. Estimated cost: 2,000 x 3 credits = ~6,000 credits.

**Example 2:** "I need to know what tech stack my target accounts use"
--> HG Insights for enterprise-grade tech data (3-5 credits/row). Conditional: only run on companies with 50+ employees. Alternative: BuiltWith for website tech only (cheaper).

**Example 3:** "I imported 30K companies from Salesforce with only names, no domains"
--> Use Google Search via Claygent to find domains first. Then run standard company enrichment waterfall. Save enriched data back to Salesforce via CRM sync.
