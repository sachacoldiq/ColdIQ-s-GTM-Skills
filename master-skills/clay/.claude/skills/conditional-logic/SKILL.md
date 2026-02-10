---
name: conditional-logic
description: Write Clayscript formulas, conditional runs, and credit-saving logic in Clay. Use when the user asks about Clayscript, Clay formulas, conditional runs, saving credits with logic, data manipulation, if/then logic, JavaScript formulas in Clay, or the AI formula generator. Triggers on "Clayscript", "formula", "conditional run", "credit saving", "data manipulation", "if/then", "JavaScript formula", "conditional formula", "Clay formula", "save credits", "only run if". Do NOT use for Claygent prompting, enrichment provider selection, or table structure questions.
---

# Conditional Logic & Clayscript

You help users write Clayscript formulas, set up conditional runs, and build credit-saving logic in Clay.

## References

- Read `clay/resources/formulas/clayscript-guide.md` for syntax, libraries, and AI formula generator.
- Read `clay/resources/expert-tips-eric-noski.md` for Rule 1 (conditionals on all paid integrations) and Rule 5 (formulas over AI).

## Core Rule: Formulas Cost 0 Credits

Formulas are FREE. Always prefer formulas over AI columns for:
- Cleaning/formatting data
- Combining fields (first + last name)
- If/then logic and scoring
- Abbreviations (New Jersey --> NJ)
- Extracting domain from email
- Any standard JavaScript operation

## Syntax

- **Describe mode:** Use `/field_name` to reference columns
- **Raw mode:** Use `{{FieldName}}`
- **Libraries available:** Lodash (`_`), Moment.js (`moment`), FormulaJS (VLOOKUP, IF, SUM)
- **Null safety:** Always add `|| ""` to avoid errors on empty cells

## Essential Conditional Run Formulas

```javascript
// Only run if field is empty (most common)
/email is empty

// Only run if previous enrichment completed but returned nothing
Clay.getCellStatus(#{{field_id}}) == "completed" AND {{previous_column}} == ""

// Only run on high-value leads
/lead_score > 70 AND /industry equals "SaaS"

// Only run if email is valid
/email_validation equals "valid" OR /email_validation equals "catchall valid"

// Skip already-enriched rows
/revenue is empty AND /domain is not empty

// Combined: CRM push only if ready
/email is not empty AND /email_validation equals "valid" AND /lead_score > 50
```

## Common Data Manipulation Formulas

```javascript
// Extract domain from email
{{email}}.split("@")[1] || ""

// Combine first + last name
({{first_name}} || "") + " " + ({{last_name}} || "")

// Capitalize first letter
({{name}} || "").charAt(0).toUpperCase() + ({{name}} || "").slice(1).toLowerCase()

// Bucket company size
{{employee_count}} > 1000 ? "Enterprise" : {{employee_count}} > 200 ? "Mid-Market" : {{employee_count}} > 50 ? "SMB" : "Startup"

// Clean LinkedIn URL
({{linkedin_url}} || "").replace(/\/$/, "").split("?")[0]
```

## AI Formula Generator

1. Add column --> select Formula type
2. Type instructions in plain English: "Extract the domain from the email column"
3. Use `/` to reference columns
4. Click "Generate Formula"
5. Verify sample output on 3-5 rows
6. Save

**Tip:** If the AI generator fails, screenshot the formula need and use ChatGPT -- it sometimes writes better Clayscript.

## Credit-Saving Checklist

1. Every paid enrichment MUST have a conditional run (non-negotiable)
2. Check if data already exists before calling a provider
3. Use formulas to derive data instead of enriching (e.g., company size bucket from headcount)
4. Chain conditionals: only run Provider 2 if Provider 1 returned empty
5. Disable auto-update on expensive columns during testing

## Examples

**Example 1:** "I want to only push leads to HubSpot if they have a valid email and score above 80"
--> Conditional run on CRM push column: `/email_validation equals "valid" AND /lead_score > 80`. This prevents bad data from entering your CRM.

**Example 2:** "How do I extract the company name from an email domain?"
--> Formula column: `({{email}} || "").split("@")[1].split(".")[0]`. Capitalize: `.charAt(0).toUpperCase() + .slice(1)`. Cost: 0 credits.

**Example 3:** "My Clay table is burning credits because enrichments run on every row"
--> Add conditional runs to every paid column. Minimum: "field is empty". Better: "field is empty AND /domain is not empty". Check auto-update settings (disable during testing). Review credit usage report.
