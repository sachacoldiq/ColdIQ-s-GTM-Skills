# Claygent Guide

## What is Claygent?

AI research agent that combines Google Search, ChatGPT, and web scraping into a single tool. It browses the web, finds public data, and reports results. Use Claygent when data doesn't exist in standard databases and you need real-time, nuanced information from the web.

## How to Access

1. Open a table
2. Go to the Enrichment panel (right side)
3. Select "Claygent" under the AI section

## Model Selection

| Model | When to Use | Cost |
|---|---|---|
| **Claygent Neon** | 90% of tasks — extraction, formatting, simple lookups | Lowest |
| **GPT-4 Mini** | Slightly more complex reasoning, still cheap | Low |
| **GPT-4** | Deep reasoning, multi-step analysis | Higher |
| **Claude Opus** | Deep reasoning, nuanced interpretation | Higher |

**Rule: Use Neon or GPT-4 Mini for everything.** Advanced models are benchmarked for solving calculus — you just want to say "I saw on your website you help fitness enthusiasts breathe better." Fix problems with better prompts, not more expensive models.

## Credit Cost

- Simple questions (yes/no, single lookup): 1 credit
- Deeper analyses (multi-page scraping, reasoning): 2-3 credits
- Always use conditional runs to avoid wasting credits on empty rows

## Claygent vs Standard Enrichments

| Use Case | Use This |
|---|---|
| Email/phone/company data | Standard enrichments (Apollo, Prospeo, etc.) |
| Data exists in a database | Standard enrichments |
| Data doesn't exist in databases | **Claygent** |
| Need real-time web context | **Claygent** |
| Very specific/nuanced information | **Claygent** |
| Scraping a specific webpage | **Claygent** |

## 8 Prompting Rules (Eric Noski)

### Rule 1: The 10-Minute Manual Research Rule
Ask yourself: "What would I do if I researched this person for 10 minutes?" What information would I look for? THEN automate that with Claygent. Never guess what you could do — start from manual research.

### Rule 2: One Task Per Claygent
**Bad:** Claygent that checks site content + decides if e-commerce + classifies industry
**Good:** Claygent #1: Retrieve site content → Use AI #2: Is it a CPG? → Use AI #3: What products? → Use AI #4: What industry?

AI fails when given too many tasks. GPT-4 Mini costs almost nothing — separate the tasks.

### Rule 3: Use "purple" as Null Keyword
When nothing is found, output a specific keyword like **"purple"** instead of letting AI say "No information found" in 100 different ways. Makes downstream filtering easy.

```
If no case study found, output 'purple'
```

### Rule 4: Always Include Examples in Prompts
Even a mediocre prompt becomes excellent with 3-4 examples. Manually research a few cases, include them in the prompt. Shows AI exactly what you want.

### Rule 5: Use the Metaprompter
1. Go to ChatGPT
2. Explain what you want to accomplish
3. Ask: "Create a prompt for this"
4. Ask: "What questions do you have to improve this prompt?"
5. Answer the questions → improved prompt

### Rule 6: Ask for Reasoning Before the Answer
"Tell me the reasoning why you think it's this kind of company before you give me the final answer." AI predicts the next word — by explaining first, it has more context to answer better.

### Rule 7: Prepare for Edge Cases
20% of the work = putting integrations together. **80% = adjusting the AI.** Review outputs constantly — as soon as an output doesn't look right, adjust the prompt.

### Rule 8: Iterate Without Spending Credits
Use the builder to test and iterate on prompts before running on the full table. Test on 1-3 rows in the builder until the output is exactly what you want.

## Prompt Template

```
Visit {{company_url}}.

[Specific instruction — one task only]

Return format: [text/number/URL/true-false]

If not found, output 'purple'.

Examples:
- Input: Acme Corp → Output: "Series B, $25M, 2024"
- Input: Widget Inc → Output: "purple"
```

## Output Formatting

Available formats: text, number, URL, true/false, custom

Always specify the exact format you want in the prompt to avoid inconsistent outputs.

## Examples

**Example 1: Detect free trial availability**
```
Visit {{company_url}}. Does this company offer a free trial?
Look for: "free trial", "try for free", "start free", "demo", "trial period".
Return 'Yes' if found, 'No' if not found, 'purple' if the page cannot be loaded.
```

**Example 2: Extract case study industries**
```
Visit {{company_url}}/customers or {{company_url}}/case-studies.
List the industries of the first 3 case studies shown.
Format: "Industry1, Industry2, Industry3"
If no case studies page exists, output 'purple'.
```

**Example 3: Check for competitor mentions**
```
Search Google for: site:{{company_domain}} "{{competitor_name}}"
Does this company mention {{competitor_name}} on their website?
Return 'Yes' if found with the specific page URL, 'No' if not found.
```

**Example 4: Find hiring signals from careers page**
```
Visit {{company_url}}/careers or {{company_url}}/jobs.
Count the number of open roles. List the departments hiring.
Format: "X open roles — Engineering, Sales, Marketing"
If no careers page exists, output 'purple'.
```
