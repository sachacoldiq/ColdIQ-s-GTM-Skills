# Expert Tips — Eric Noski

*Source: Eric Noski — Clay's earliest employee, runs the largest Clay usage (37M rows/week, 6M+ emails/month)*

## The 6 Rules for Clay Tables

### Rule 1: Conditional Formula on ALL Paid Integrations
- Even if it's just "first name must not be empty"
- Always build this habit to avoid wasting credits
- This is non-negotiable

### Rule 2: Use Functions (Advanced Feature)
- Send data to a separate table → run workflow → send data back
- Allows changing a workflow once for 15+ tables
- Avoids modifying each table individually

### Rule 3: Save ALL Paid Data
- To your CRM or a platform like Supabase
- Supabase: $30/month for 11.4M+ records
- Clay doesn't save your data like Apollo/ZoomInfo
- You will reuse this data — save it

### Rule 4: Use Scheduled Sources for Evergreen Campaigns
- Put your entire TAM in HubSpot ($15/month)
- Create an active segment/list
- Let the campaign run automatically
- No more manual CSV uploads

### Rule 5: Don't Use AI When Formulas Will Do
- Cleaning data → Formula
- Combining data → Formula
- If/then statements → Formula
- Scoring leads → Formula
- Abbreviations (New Jersey → NJ) → Formula
- Everything JavaScript can do = Formula

### Rule 6: Formulas = JavaScript
- If you need a complex formula: screenshot → ChatGPT
- The AI formula generator is powerful but sometimes ChatGPT does better

## 8 AI Prompting Rules

### Rule 1: The 10-Minute Manual Research Rule
- Ask yourself: "What would I do if I researched this person for 10 minutes?"
- What information would I look for?
- THEN automate that with Clay
- Never guess what you could do with Clay

### Rule 2: AI Does Only ONE Thing at a Time
**Bad:**
- Claygent that checks site content + decides if e-commerce + classifies industry

**Good:**
- Claygent #1: Retrieve site content
- Use AI #2: Is it a CPG?
- Use AI #3: What products do they sell?
- Use AI #4: What industry?

AI "farts" if you give it too many tasks. GPT-4 mini costs almost nothing — separate the tasks.

### Rule 3: Safeguards When Not Enough Context
- Use a keyword like **"purple"** when nothing is found
- "If no case study found, output 'purple'"
- Makes downstream filtering easy
- AI will otherwise say "No information found" in 100 different ways

### Rule 4: ALWAYS Use Examples in Prompts
- Even a mediocre prompt becomes excellent with examples
- Manually research 3-4 examples
- Include them in the prompt
- Shows AI exactly what you want

### Rule 5: Use the Metaprompter
1. Go to ChatGPT
2. Explain what you want to accomplish
3. Ask: "Create a prompt for this"
4. Then ask: **"What questions do you have to improve this prompt?"**
5. Answer the questions
6. Improved prompt

### Rule 6: For Difficult Prompts, Ask for Reasoning BEFORE the Answer
- "Tell me the reasoning why you think it's this kind of company before you give me the final answer"
- AI predicts the next word
- By explaining first, it has time to answer better

### Rule 7: Prepare for Edge Cases
- 20% = putting integrations together
- **80% = adjusting the AI**
- Most fail because they think the opposite
- Review constantly — as soon as an output doesn't please → adjust the prompt

### Rule 8: Use GPT-4 Mini for EVERYTHING
- Advanced models are benchmarked for solving calculus
- You just want to say "I saw on your website you help fitness enthusiasts breathe better"
- GPT-4 mini handles this perfectly
- Fix everything with prompts, not with more expensive models
