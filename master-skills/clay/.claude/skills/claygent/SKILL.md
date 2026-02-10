---
name: claygent
description: Use Clay's AI research agent (Claygent) for web research, custom data extraction, and information that does not exist in standard databases. Use when the user asks about Claygent, AI research in Clay, web browsing for data, custom data points, real-time company research, or scraping with AI. Triggers on "Claygent", "AI research", "Clay AI agent", "web research in Clay", "browse web", "research agent", "custom data points", "scrape with AI". Do NOT use for standard enrichments available via providers, Clayscript formulas, or general AI text generation without web research.
---

# Claygent -- AI Research Agent

You help users leverage Claygent for research tasks that require web browsing and custom data extraction beyond standard enrichment providers.

## Reference

Read `clay/resources/prompts/claygent-guide.md` for model options, credit costs, output formatting, and best practices.

## When to Use Claygent vs Standard Enrichment

| Use Claygent | Use Standard Enrichment |
|-------------|------------------------|
| Data not in any database | Email, phone, firmographics |
| Real-time web research needed | Static company/people data |
| Custom/nuanced questions | Industry, revenue, headcount |
| Competitor mentions, case studies | Tech stack (use HG Insights) |
| Funding news, press mentions | LinkedIn profile data |

## Model Selection

- **Claygent Neon** (1-2 credits) -- Clay's flagship, optimized for extraction into columns. Use this 90% of the time.
- **GPT-4** (2-3 credits) -- only for complex reasoning tasks
- **Claude Opus** (2-3 credits) -- only for complex reasoning tasks

**Rule:** GPT-4 Mini / Claygent Neon handles 90% of tasks. Do not overspend on advanced models.

## Prompting Rules (from Eric Noski)

1. **One task per Claygent column** -- never combine "check site + classify + extract" in one prompt
2. **Use "purple" as null keyword** -- "If not found, output 'purple'" (easy to filter downstream)
3. **Include 3-4 examples** in every prompt -- even mediocre prompts become excellent with examples
4. **Ask for reasoning before answer** on complex tasks -- improves accuracy significantly
5. **10-minute manual research rule** -- research 3-4 records manually first, then automate that exact process

## Prompt Template

```
Visit /company_domain and answer: [SPECIFIC QUESTION]

Rules:
- Only use information found on the website
- If not found, output "purple"
- Output format: [text/number/true-false/URL]

Example outputs:
- "Series B, $25M from Sequoia"
- "purple"
```

## Credit Optimization

- Simple yes/no questions: 1 credit
- Deeper analysis: 2-3 credits
- Iterate in the builder (free) before running on full table
- Add conditional run: only run Claygent on rows where standard enrichment left gaps
- Never use Claygent for data available via standard providers (email, phone, revenue)

## Common Use Cases

1. **Free trial detection** -- "Does this company offer a free trial?"
2. **Case study extraction** -- "Find customer case studies and extract metrics"
3. **Hiring signals** -- "Check careers page for open [role] positions"
4. **Competitor mentions** -- "Does this company mention [competitor] on their site?"
5. **Content topics** -- "What are the last 3 blog post topics?"
6. **Technology signals** -- "Does the website use [specific tool]?"

## Examples

**Example 1:** "I want to know if my prospects offer a free trial"
--> Claygent column with prompt: "Visit /domain. Does this company offer a free trial, demo, or trial period? Output 'Yes' or 'No'. If unclear, output 'purple'." Cost: 1 credit/row. Model: Claygent Neon.

**Example 2:** "I need to find recent funding rounds for 500 companies"
--> Claygent column: "Search Google for '/company_name funding round'. What is the most recent funding round? Output format: '[Series], $[Amount] from [Investor]'. If nothing found, output 'purple'." Cost: 2 credits/row.

**Example 3:** "I want personalized icebreakers based on their latest blog post"
--> Step 1: Claygent to extract latest blog topic (1 credit). Step 2: Separate AI column (GPT-4 Mini) to write icebreaker from that topic (1 credit). Never combine both in one column.
