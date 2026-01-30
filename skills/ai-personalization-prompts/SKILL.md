---
name: ai-personalization-prompts
description: 6 AI personalization prompts (lemlist style) plus 2 email templates - ICP Identification, Company Description, Similar Product, Top 3 Problems, Subject Line, Case Study Reference, and Similar Company Approach. Use when setting up AI-powered personalization, building Clay/lemlist workflows, or automating research.
---

# AI Personalization Prompts (lemlist Style)

## 1. ICP Identification Prompt

**Purpose:** Find top 3 most likely ICPs a company is prospecting

```
Find the top 3 most likely ICPs this person is prospecting based on {{companyDomain}}. If unavailable, use {{companyDescription}}.

Rules:
- Keep ICPs to just job titles (max 3)
- Use shorter, abbreviated alternatives (CEO not Chief Executive Officer)
- Always use "and" before the last example
- Never end with a full stop

Examples:
- Input: Chief Executive Officer → Output: CEOs
- Input: Chief Executive Officer, Business Development Representatives, Account Executive → Output: CEOs, BDRs and AEs
```

---

## 2. Short Company Description Prompt

**Purpose:** Create a concise company description that resonates

```
Describe the company in one concise sentence based on {{companyDomain}} or {{companyDescription}}.

Rules:
- Don't mention company name
- Don't mention ICP
- Maximum 8 words
- Keep tone neutral, all lower case
- No quotes in output
- Use main value prop from website

The output must fit grammatically in:
"Getting people interested in [insert description summary] isn't the easiest thing in the world."

Add (brackets) to some information in second half for emphasis.
```

---

## 3. Similar Product/Service Prompt

**Purpose:** Categorize what type of product/service the prospect offers

```
Categorize the product/service type based on {{companyDomain}} or {{companyDescription}}.

Rules:
- Maximum 6 words
- Neutral tone, all lower case
- No full stops
- Keep it singular
- Avoid vagueness
- Can use abbreviations ("tech" instead of "technology")

Output must fit grammatically in:
"We work with a similar [output]."
```

---

## 4. Top 3 Problems Prompt

**Purpose:** Identify top 3 problems the prospect's ICP is facing

```
Identify top 3 problems of the main ICP based on {{companyDomain}} or {{companyDescription}}.

Requirements:
- Problems should be directly linked to lagging indicators
- Rank 1-3 with 1 being biggest problem
- Link to main KPI each problem prevents reaching
- Each problem max 10 words
- Don't capitalize letters
- No full stop at end
- Add "and" before problem 3
- Avoid repeating words
- Avoid buzzwords/sales-y words

Format: [Problem 1], [Problem 2], and [Problem 3]

Must fit in phrase: "They book 25 meetings/month with leads struggling to [Problem 1], [Problem 2], and [Problem 3]"
```

---

## 5. Subject Line Prompt

**Purpose:** Create a 2-word subject line that peaks interest

```
Write a two-word email subject line based on {{companyDomain}} or {{companyDescription}}.

Rules:
- MUST be exactly 2 words
- All lower case
- Take words relevant to user's business
- No sales or buzzwords
- No spam words
- Should flow into the email naturally
- Goal: get them to open, then reply with interest
```

---

## 6. Case Study Reference Template

```
Our client [Lead Solution] used to prospect [ICP].

They focused on:
[Problem 1], [Problem 2], [Problem 3].

Since you focus on {{summary}}, might work well if you combined [free resource that could solve problems].

Could I share the outbound campaign they were using to book 35 meetings/month?
```

---

## 7. Similar Company Approach Template

```
Hi {{firstName}}, saw you focus on {{Company Summary}}.

A client of ours prospects {{ICP}} for a {{Similar product_service}}.

They help clients struggling to {{3 problems}}.

[SPINTAX CTA OPTIONS:]
- Can I share
- Can I show you
- Would it interest you to see
- Would you like me to share
- Would you be open to
- Might you be interested in
- If you have 15 minutes, I can share
- May I share
- Could I show you

...the email campaigns they were using to book 25+ meetings/month?

{{signature}}

p.s if not, happy to share how ai wrote this email ;)
```
