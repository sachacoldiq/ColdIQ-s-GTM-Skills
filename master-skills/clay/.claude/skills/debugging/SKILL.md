---
name: debugging
description: Troubleshoot Clay workflow issues, fix common mistakes, resolve auto-update problems, and stop credit waste. Use when the user reports something not working in Clay, credits being wasted, auto-update issues, wrong enrichment results, empty columns, or workflow errors. Triggers on "not working", "error", "troubleshoot", "debug", "credits wasted", "auto-update issue", "Clay problem", "wrong results", "fix my workflow", "common mistakes", "empty results", "credits burning". Do NOT use for building new workflows from scratch, learning Clay basics, or pricing questions.
---

# Debugging Clay Workflows

You help users diagnose and fix problems in their Clay tables, enrichments, and automations.

## References

- Read `clay/resources/expert-tips-eric-noski.md` for the 6 table rules and 8 AI prompting rules.
- Read `clay/resources/workflow-patterns.md` for auto-update behavior and run settings.

## Top 10 Common Mistakes

### 1. No Conditional Runs on Paid Enrichments
**Symptom:** Credits burning on rows that already have data.
**Fix:** Add conditional run to every paid column: `/field is empty`. Non-negotiable.

### 2. Auto-Update Enabled During Testing
**Symptom:** Credits consumed every time new rows are added.
**Fix:** Set table-level auto-update to OFF while building. Only enable when workflow is finalized.

### 3. Wrong Input Column Mapped
**Symptom:** Enrichment returns empty or wrong results.
**Fix:** Verify input mapping. Email waterfall needs domain, not company name. LinkedIn enrichment needs profile URL, not company URL.

### 4. AI Prompt Doing Too Many Things
**Symptom:** Claygent/AI returns inconsistent or partial results.
**Fix:** One task per AI column. Split "check site + classify + extract" into 3 separate columns. GPT-4 Mini for each.

### 5. No Null Handling in Formulas
**Symptom:** Formula errors, "undefined" in cells.
**Fix:** Add `|| ""` to every variable reference: `({{field}} || "")`. Always handle empty cells.

### 6. Duplicate Rows Consuming Double Credits
**Symptom:** Same contact enriched multiple times.
**Fix:** Enable auto-dedupe before importing. Key: email or LinkedIn URL. Note: case-sensitive ("Clay" != "clay").

### 7. Using Expensive AI Models for Simple Tasks
**Symptom:** 3x credit cost with no quality improvement.
**Fix:** GPT-4 Mini / Claygent Neon for 90% of tasks. Only use GPT-4/Claude Opus for complex reasoning.

### 8. Not Saving Enriched Data Externally
**Symptom:** Paying to re-enrich the same records in a new table.
**Fix:** Push all enriched data to CRM or Supabase ($30/month for 11.4M+ records). Query before re-enriching.

### 9. Running Full Table Before Testing
**Symptom:** 10,000 credits wasted on a misconfigured column.
**Fix:** Always test with 50 rows first. Verify outputs. Then run full table.

### 10. Forgetting Column-Level Auto-Update
**Symptom:** Table auto-update is ON but some columns do not run.
**Fix:** Check both table-level AND column-level auto-update settings. Both must be ON for a column to auto-run.

## Diagnostic Checklist

When a user reports a problem, ask these questions:

1. **What enrichment/column is failing?** (name and type)
2. **What input columns are mapped?** (check for wrong mapping)
3. **Is there a conditional run?** (check the formula)
4. **What does the cell status show?** (completed, error, pending)
5. **Is auto-update ON or OFF?** (both table and column level)
6. **How many rows are affected?** (all vs. some)
7. **Did it work before?** (regression vs. new issue)

## Quick Fixes by Symptom

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| All cells empty | Wrong input column | Re-map inputs, check domain format |
| Some cells empty | Provider coverage gaps | Add more providers to waterfall |
| "Error" in cells | API rate limit or bad input | Wait and retry, or fix input data |
| Credits burning fast | Missing conditionals + auto-update ON | Add conditionals, disable auto-update |
| Inconsistent AI results | Prompt too complex | Split into multiple columns, add examples |
| Duplicates appearing | No auto-dedupe | Enable dedupe on email or LinkedIn URL |
| Formula showing "undefined" | Null values | Add `|| ""` to all variable references |

## Examples

**Example 1:** "My email waterfall is returning 0 results on all rows"
--> Check input mapping: is domain column mapped (not company name)? Check domain format: should be "acme.com" not "https://www.acme.com/". Check conditional run: is it blocking all rows? Verify: run manually on 1 row to isolate the issue.

**Example 2:** "My Clay table used 50,000 credits overnight"
--> Check auto-update: is it ON at table level? Check which columns have auto-update enabled. Check for expensive enrichments (phone = 2-25 credits each). Add conditional runs to all paid columns. Disable auto-update immediately to stop the bleed.

**Example 3:** "Claygent keeps returning different formats for the same question"
--> Add explicit output format in prompt: "Output exactly 'Yes' or 'No', nothing else." Use "purple" as null keyword. Add 3-4 examples of expected output. Use Claygent Neon, not GPT-4.
