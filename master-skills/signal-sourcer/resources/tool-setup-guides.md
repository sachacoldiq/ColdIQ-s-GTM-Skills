# Signal Tools Setup Guides

## 1. Trigify (formerly Triggery)

### What It Does
Tracks LinkedIn engagement to identify high-intent B2B prospects. Monitors specific profiles/companies for likes, comments, brand mentions, job changes, and viral posts.

### Key Features
- **Social Engagement**: Track likes/comments on any profile (not just yours)
- **Signal Monitoring**: Role changes, viral posts, company growth
- **Clay Integration**: Direct webhook to Clay tables
- **Data Export**: Full company data, job titles, engagement type

### Setup Process

1. **Create Trigify account** at trigify.io
2. **Add LinkedIn URLs** you want monitored (profiles, company pages)
3. **Configure signals**: Choose Engagement, Social Signals, etc.
4. **Set up Clay webhook**:
   - In Clay: Create table with webhook source, copy webhook URL
   - In Trigify: Select data sources → Enter Clay webhook URL → Test
5. **Trigify sends to Clay automatically** on each new signal

### What Gets Sent to Clay
- Person: name, title, company, LinkedIn URL
- Engagement: post URL, type (like/comment), text
- Company data: size, industry, domain
- Signal type: job change, viral post, etc.

### Pricing
- Plans based on number of tracked profiles and signal volume
- Free trial available
- Check trigify.io/pricing for current rates

---

## 2. RB2B

### What It Does
Person-level website visitor identification. Places a tracking pixel on your site and identifies individual visitors (name, email, LinkedIn, company) — not just companies.

### How It Works

**Person-Level (US Only)**
- JavaScript pixel in website `<head>`
- First-party cookies cross-referenced with third-party data
- Matches visitors to known identities
- Output: Name, email, LinkedIn profile, company, title
- Match rate: **40-45%** of US traffic

**Company-Level (Global)**
- IP-to-company matching
- Identifies organization of the visitor
- Match rate: **30-35%**

### Setup

1. **Sign up** at rb2b.com
2. **Install pixel**: Add JavaScript snippet to website `<head>`:
   ```html
   <script>
     !function(){/* RB2B pixel code */}();
   </script>
   ```
3. **Configure integrations**:
   - Slack: Real-time visitor alerts
   - Webhooks: Send to Clay, n8n, or CRM
   - HubSpot/Salesforce: Direct CRM push
4. **Set filters**: ICP criteria to only alert on relevant visitors

### Pricing (2026)

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | Person-level ID, 1 Slack workspace, basic features |
| **Pro** | $99/mo | Person + company level, webhooks, advanced filters, integrations |
| **Scale** | Custom | High-volume, API access, custom |

### Key Limitation
Person-level identification is **US-only**. For EU/global traffic, only company-level identification is possible (and is GDPR-compliant).

---

## 3. Common Room

### What It Does
Customer intelligence platform that aggregates signals across 50+ sources into unified profiles. Tracks community engagement, social activity, product usage, website visits, hiring, funding, and more.

### Signal Categories

**First-Party (Owned)**
- Product usage and feature adoption
- Website visits and page engagement
- CRM interactions

**Second-Party (Social & Community)**
- LinkedIn, GitHub, Reddit, Slack, Discord
- Twitter/X engagement
- Community forum activity
- Stack Overflow questions

**Third-Party (External)**
- Job changes (150M+ job listings)
- Company news (8M+ news signals)
- Hiring activity
- Funding events
- Keyword intent data

### Key Features
- **Person 360**: Every signal mapped to 200M+ B2B contacts
- **Auto-enrichment**: Company, title, email, social profiles
- **Signal scoring**: Built-in lead scoring across all sources
- **Workflows**: Automated actions based on signal combinations
- **AI Agents**: Auto-research and outreach recommendations

### Integrations (50+)
Salesforce, HubSpot, Slack, GitHub, Discord, LinkedIn, Twitter/X, Reddit, Stack Overflow, Discourse, Product analytics, Bombora, G2, and many more.

### Pricing (2026)

| Plan | Price | Contacts | Seats |
|------|-------|----------|-------|
| **Starter** | From $1,000/mo | 35K | 2 |
| **Team** | From $2,500/mo | 100K | 5 |
| **Enterprise** | Custom | 200K+ | 10+ |

Salesforce integration extra on Starter/Team; included in Enterprise.

---

## 4. Bombora

### What It Does
B2B intent data — measures when companies are actively researching topics related to your products. Core product: **Company Surge** scores.

### How Company Surge Works

1. **Data Co-op**: 5,000+ B2B websites share consumption data (86% exclusive to Bombora)
2. **NLP Analysis**: Content classified into **19,200+ B2B topics**
3. **Baseline Comparison**: Measures account consumption over 3 weeks vs 12-week baseline
4. **Surge Score**: Generated when activity significantly exceeds normal

**What Creates a Surge:**
- Number of employees from a company researching a topic
- Frequency of content consumption
- Depth of research
- All relative to their normal baseline

### Topic Taxonomy
- 19,200+ B2B topics (as of 2025, exceeding 17K)
- Covers every B2B category: cybersecurity, cloud, HR tech, marketing, finance
- Topics organized in clusters for broader monitoring
- Select topics relevant to your product → Bombora monitors surge

### Integration Options (100+)
- **CRM**: Salesforce, HubSpot (surge scores on account records)
- **ABM**: Demandbase, 6sense, Terminus, RollWorks
- **Ads**: LinkedIn Ads, programmatic DSPs
- **Sales Engagement**: Outreach, Salesloft
- **Data Warehouses**: Snowflake, BigQuery
- **Custom**: API access

### Pricing (2026)

| Tier | Annual Cost |
|------|------------|
| Basic Company Surge | From ~$30,000/yr |
| Enhanced Intent Data | ~$50,000-$100,000/yr |
| Full Audience Solutions | $100,000+/yr |

All contracts custom — no self-service or public pricing.

---

## 5. Other Signal Tools (Quick Comparison)

### Koala
- **Focus**: Product usage + website intent for PLG companies
- **Signals**: Pricing page visits, product usage patterns, 30+ sources
- **Best For**: Cross-selling, upselling existing customers
- **Pricing**: Free (3 seats); Growth: $750/mo; Business: contact sales

### Warmly
- **Focus**: Website visitor ID + AI sales orchestration
- **Signals**: 3 de-anonymization engines, job changes, intent
- **AI Chatbot**: Auto-engages, qualifies, books meetings
- **Pricing**: Free (500 visitors/mo); Data Only: $599/mo; AI agents: from $10K/yr

### 6sense
- **Focus**: AI revenue intelligence + predictive analytics
- **Signals**: 1T+ buyer behaviors daily, Signalverse technology
- **Best For**: Enterprise ABM with large budgets
- **Pricing**: ~$35,000-$130,000/yr

### ZoomInfo
- **Focus**: B2B database + intent + visitor tracking
- **Database**: 100M+ companies, 500M+ contacts
- **WebSights**: Anonymous company identification
- **Pricing**: From $14,995/yr; most pay $25K-$60K/yr; intent add-on: $5-15K extra

### Clearbit Reveal (Breeze Intelligence)
- **Focus**: Website visitor ID + enrichment (now HubSpot)
- **Key**: Requires HubSpot subscription post-acquisition
- **Pricing**: From $45/mo (100 credits)

### Leadfeeder (Dealfront)
- **Focus**: Company-level visitor ID (IP-to-company)
- **GDPR**: Fully compliant, EU data hosting
- **Pricing**: Free (100 companies); Paid: from EUR 99/mo

### Comparison Matrix

| Tool | Level | GDPR | Starting Price | Best For |
|------|-------|------|---------------|----------|
| **Koala** | Person + Product | Partial | Free/$750/mo | PLG cross-sell |
| **Warmly** | Person + Company | Company OK | Free/$599/mo | AI visitor engagement |
| **6sense** | Account | Yes | ~$35K/yr | Enterprise ABM |
| **ZoomInfo** | Person + Company | Partial | $14,995/yr | Database + intent |
| **Clearbit** | Company + Enrich | Yes | $45/mo | HubSpot-native |
| **Leadfeeder** | Company | Yes | Free/EUR 99/mo | GDPR company ID |

---

## 6. Website Visitor Tracking: Pixel vs IP

### Pixel-Based (Person-Level)
- JavaScript pixel sets first-party cookies
- Cross-references with third-party data
- Output: Individual person (name, email, LinkedIn)
- Match rate: **30-45%** (US traffic)
- Tools: RB2B, Warmly
- Limitation: **US-only** for person-level; cookie-dependent

### IP-Based (Company-Level)
- Maps visitor IP to company databases
- Output: Company name, industry, size (NOT individual)
- Match rate: **35-40%** (GDPR-compliant)
- Tools: Leadfeeder, Clearbit, Leadinfo, ZoomInfo
- Limitation: Company-only; shared IPs (VPN, coworking) add noise

### Decision Framework

| Scenario | Approach | Tool |
|----------|----------|------|
| US-focused, need person data | Pixel | RB2B + Warmly |
| Global/EU, need compliance | IP (company) | Leadfeeder, Leadinfo |
| HubSpot team | IP + enrichment | Breeze Intelligence |
| Enterprise ABM | Both + intent | 6sense + RB2B |
| PLG, product signals | Hybrid | Koala or Warmly |
| Budget, getting started | IP (free tier) | Leadfeeder Free or RB2B Free |
