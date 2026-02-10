---
name: hiring
description: Hiring signal tracking for B2B outbound. Use when the user asks about hiring signals, job posting intent, new roles, missing roles, leaving employees, skills-targeting, role-targeting, headcount growth, or team expansion signals. Do NOT use for individual job changes (use job-changes skill) or general company events (use company-events skill).
---

# Hiring Signals

Hiring is the #6 buying signal by purchase correlation. It reveals budget allocation, growth trajectory, and priority areas. Hiring signals include new roles posted, missing roles at a company, leaving employees, and skills-based targeting.

## Reference Files

- Read `signal-sourcer/resources/buying-signals.md` for signal ranking and benchmarks
- Read `signal-sourcer/resources/signal-taxonomy.md` for firmographic triggers (Companies that Started Hiring)
- Read `signal-sourcer/resources/examples/signal-campaigns/gtm-plays.md` for plays 1-3, 5-7 (hiring-related GTM plays)

## Why Hiring Signals Work

- **Signals budget allocation** - if they are hiring for a role, budget exists
- **Shows growth trajectory** - expanding teams = scaling pain
- **Indicates priority areas** - what roles they hire reveals what they value
- **Ramp pressure** - new hires need tools to be productive fast
- Relevant job posting = 40 points (Tier 2 signal)
- Act within 24 hours of detection

## Five Hiring Signal Types

### 1. New Team Members (Play 1)
Company recently added members to relevant department. Reference the new hire by name, reach out 2-4 weeks after.

### 2. Leaving Employees (Play 6)
Team members recently left a relevant department. Position around the coverage gap, reach out 1-2 weeks after departure.

### 3. Missing Roles (Play 7)
Company lacks a specific title entirely. No "Content Manager" + $5M+ revenue = content gap your product can fill.

### 4. Skills-Targeting (Play 2)
LinkedIn profiles display specific skills relevant to your product. More precise than title-based targeting - Clay extracts skills from profiles.

### 5. Role-Targeting (Play 3)
Uncommon job titles indicate company priority. "RevOps Manager" = revenue operations is a budget line. "Growth Engineer" = technical growth function exists.

## Outreach Templates

**New team members:**
```
Noticed {{company}} just added {{new_hire_name}} to the {{department}} team.
Growing teams usually means [relevant challenge].
We helped {{similar_company}} handle this by [solution].
Worth a quick chat?
```

**Leaving employees:**
```
Saw {{former_employee}} recently left {{company}}.
That usually creates a gap in {{function_area}}.
We have been helping companies like {{similar_company}} cover that gap with [solution].
Worth exploring?
```

**Missing roles:**
```
Noticed {{company}} does not have a dedicated {{role}} yet.
Most {{industry}} companies at your stage handle {{function}} with [your solution type].
We helped {{similar_company}} do exactly that.
```

## Key Rules

- Job postings are public intent data - no privacy concerns
- Stack hiring + funding for strong compound signal (40 + 45 = 85pts Warm)
- Missing role signal works best for automation/outsourcing products
- Skills-targeting is more precise than title-based targeting
- Reference the growth challenge, not "I saw your job posting"

## Examples

Example 1: "Find companies hiring SDRs as a signal"
-> Clay: scrape job boards for SDR postings at ICP companies, enrich with company data, filter by size/industry, reach out to VP Sales referencing team growth and ramp challenges

Example 2: "Target companies that do not have a dedicated RevOps person"
-> Clay: pull ICP company list, check LinkedIn for "RevOps" titles, filter to companies with 0 results, reach out to VP Sales/CRO positioning your tool as the RevOps layer they are missing

Example 3: "Someone just left the marketing team at a target account"
-> 1-2 week window. Reference the coverage gap by name. Position your solution as a way to maintain output during the transition. SDR sequence within 24h of detection
