# Clayscript & Formulas Guide

## Overview

Formulas manipulate data without spending credits. They're based on **Clayscript** (JavaScript) and evaluate expressions row by row.

## Supported Libraries

**JavaScript standard:**
- Math, String, Array, Date, RegExp, Number, Object

**Lodash:**
- Full access via `_` for advanced data manipulation

**Moment.js:**
- Date/time operations via `moment`

**FormulaJS:**
- Familiar spreadsheet functions: VLOOKUP, IF, SUM, CONCATENATE, etc.

## Syntax

**Describe mode:** Use `/field` to reference columns
**Raw formula mode:** Use `{{FieldName}}`

## AI Formula Generator

1. Add a new column → select Formula
2. Type instructions in the AI Formula Generator box
3. Use "/" to reference columns
4. Click "Generate Formula"
5. Verify the sample output
6. Click "Save Formula"

## 3 Main Use Cases

1. **Conditional Formula:** Execute if a condition is true
2. **Formatting Data:** Format data properly
3. **Cleaning Data:** Clean and normalize data

## Common Conditional Formulas

```javascript
// Email exists
/email is not empty

// Email valid or valid catchall
/validation_result equals "valid" OR equals "catchall valid"

// Company type match
/company_type equals "B2B"

// Minimum score
/lead_score is greater than 50

// Combined conditions
/email is not empty AND /company_fit equals "true"

// Check column completion status
Clay.getCellStatus(#{{field_id}}) == "completed" AND {{previous_column}} == ""
```

## Prompt Templates for AI Columns

**Company Summary:**
```
Visit /company_domain and give me an exhaustive summary of what the company does.
```

**Fit Check:**
```
Based on this summary: /company_summary
Is this company a [TYPE]?
Output "true" if yes, "false" if no.
Only output true or false, nothing else.
```

**LinkedIn Post Summary:**
```
Here is a LinkedIn post: /linkedin_post
Summarize what they're talking about in one sentence.
If it's about politics, religion, or controversial topics, output "SKIP".
```

**Case Study Extraction:**
```
Visit /company_domain/case-studies and find their customer case studies.
For each case study, extract:
- Customer name
- What they helped them achieve
- Any metrics mentioned

If no case studies found, output "purple".
```

## Important Tips

- Replace smart quotes " " with straight quotes ""
- Column names must match exactly
- Add `|| ""` to avoid errors on null values
- No custom function or variable definitions supported
- Formulas cost 0 credits — always prefer them over AI when possible
