---
name: find-contacts
description: Find contacts and decision makers at target companies using Sales Navigator boolean search, Clay Find People, and export tools. Use when user asks about "find contacts", "find people", "boolean search", "Sales Navigator search", "export leads", "Evaboot", "PhantomBuster", "decision makers", "buying committee", "title targeting", "contact list". Do NOT use for company sourcing (use source-companies) or email verification (use clean-validate).
---

# Find Contacts — Sub-Skill

You help users find the right contacts at target companies using boolean search, Clay Find People, and export tools. Always read the reference files before responding.

## References

- Read `list-building/resources/sales-navigator-guide.md` — sections: Boolean Search, Boolean Formulas by ICP, Export & Scraping Tools, List Building Best Practices.
- Read `list-building/resources/lead-sources-guide.md` — section: Find People (FREE in Clay).

## Boolean Search Operators

| Operator | Syntax | Example |
|----------|--------|---------|
| AND | `AND` | `VP AND Marketing` |
| OR | `OR` | `CEO OR "Chief Executive"` |
| NOT | `NOT` | `VP NOT assistant` |
| Quotes | `"exact"` | `"Vice President"` |
| Parentheses | `(group)` | `(CEO OR CTO) AND SaaS` |

**Limits:** Boolean works in Title, Company, Keywords fields only. Max ~1,000 characters. No wildcards. Nesting 2-3 levels deep.

## Ready-Made Boolean Formulas

- **SaaS Decision Makers:** `(VP OR "Vice President" OR Director OR Head OR Chief) AND (Marketing OR "Demand Gen" OR "Growth" OR "Digital")` + Company Keywords: `(SaaS OR "B2B software" OR "cloud-based" OR "subscription")` + Seniority: VP, Director, CXO + Industry: Computer Software, Internet, IT & Services
- **C-Suite:** `(CEO OR Founder OR "Managing Director" OR "Chief Executive" OR "Chief Operating") NOT (assistant OR intern OR student)`
- **VP Sales Mid-Market:** `("VP Sales" OR "Vice President Sales" OR "Head of Sales" OR CRO)` + Industry: Software, Headcount: 201-1000
- **Buying Committee:** Run 4 separate searches — Economic Buyer (`CEO OR CFO OR "VP Finance"`), Champion (`"Head of Marketing" OR "Marketing Director"`), Technical Evaluator (`"Marketing Manager" OR "Demand Gen Manager"`), End User/Blocker (`"General Counsel" OR "Head of Legal"`)

> **Note:** For comprehensive formulas with all title variants, see `sales-navigator-guide.md` → Boolean Formulas by ICP section.

## Bypassing the 2,500 Result Limit

Sales Navigator caps at 2,500 results per search. Bypass by segmenting:
1. **Geography** — Split by state, city, or region
2. **Industry** — Same title across different industries
3. **Company size** — Break 51-500 into 51-200 and 201-500
4. **Seniority** — Separate searches per level (VP, Director, Manager)
5. **First name** — Filter A-F, G-L, M-R, S-Z
6. **Time filters** — "Changed jobs in 90 days", "Years in position"

## Clay Find People (Free)

1. New Table -> Find People
2. Filters: Job Titles, Location, Keywords, Min connections, Certifications, Past experience
3. Generic logo = scraping LinkedIn (free, no credit cost)
4. Best for quick lookups and supplementing Sales Nav results

## Export Tools

| Tool | Price | Best For |
|------|-------|----------|
| Evaboot | $29-99/mo | Clean, verified Sales Nav exports |
| PhantomBuster | $69-439/mo | Multi-step automation workflows |
| Captain Data | $399/mo | Agencies, repeatable extraction |
| Apollo.io | Free-$119/mo | Own database, no scraping risk |

**Recommended flow:** Build list in Sales Nav -> Export with Evaboot -> Enrich in Clay -> Verify emails -> Segment for outreach.

## Examples

**Example 1:** "I need to find VP of Marketing at SaaS companies with 50-500 employees"
-> Sales Nav boolean: `("VP Marketing" OR "Vice President Marketing" OR "Head of Marketing" OR "Director of Marketing")`. Filters: Industry = Computer Software, Headcount = 51-500, Seniority = VP/Director. If >2,500 results, segment by geography. Export with Evaboot.

**Example 2:** "I want to map the entire buying committee at my target accounts"
-> Run 4 searches: (1) Economic Buyer: `CEO OR CFO OR "VP Finance"`, (2) Champion: `"Head of Marketing" OR "Marketing Director"`, (3) Technical: `"Marketing Manager" OR "Demand Gen Manager"`, (4) Blocker: `"General Counsel" OR "Head of Legal"`. Save each as separate Sales Nav list. Export and tag by role.

**Example 3:** "How do I find founders of recently funded startups?"
-> Boolean: `(Founder OR "Co-Founder" OR CEO)`. Filters: Headcount 1-200, Changed jobs past 90 days. Company keywords: `(seed OR "series A" OR "series B" OR startup)`. Supplement with Clay Find People using "Past experience" filter.
