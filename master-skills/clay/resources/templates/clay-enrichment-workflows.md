# Clay Enrichment Workflows

## 9-Step Workflow (90%+ Data Coverage)

### Step 1: Upload & Clean
- Import CSV (minimum: company + domain)
- Remove duplicates
- Clay auto-standardizes names
- Clean any errors manually

### Step 2: Company Enrichment Waterfall

Sequence (each fills gaps from previous):
1. Apollo → employee count, revenue, industry
2. Ocean.io → missing firmographic data
3. LinkedIn → recent company updates
4. Claygent → funding news, press mentions
5. RB2B → website visitor data (if applicable)

### Step 3: People Enrichment
- LinkedIn Sales Navigator search within companies
- Filter: titles, seniority, recent hires (90 days)
- Apollo as backup source
- Limit: 3-5 decision makers per company

### Step 4: Email Waterfall (The Money Step)
- Single finder = 40% coverage
- Waterfall = 85%+ coverage

Sequence:
1. Apollo
2. Prospeo
3. LeadMagic
4. Findymail
5. Clay native patterns

### Step 5: Email Verification
- MillionVerifier bulk verification (primary)
- Clay native verification (backup)
- Remove: invalid, disposable
- Flag: risky emails for manual review
- Target: Under 2% bounce rate (critical)

### Step 6: Phone Numbers
- LeadMagic (primary)
- BetterContact (for missing)
- Clay pattern matching for direct lines
- Verify against do-not-call lists

### Step 7: Custom Data Points (Claygent)
- Recent job changes (hiring intent)
- Tech stack indicators
- Funding/growth signals
- Competitor mentions
- Social activity patterns

### Step 8: Scoring & Segmentation

Lead Score Components (100 points total):
- Company size match: 25 pts
- Recent signals: 25 pts
- Email deliverability: 25 pts
- ICP fit: 25 pts

Tier Assignments:
- Tier 1 (80-100): Immediate outreach
- Tier 2 (60-79): Nurture sequence
- Tier 3 (<60): Long-term nurture

### Step 9: Export & Integrate
- Export to Instantly/LemList
- Push high-value leads to CRM
- Set up Make/n8n automation for ongoing enrichment

## Pro Tips
- Run in batches of 250 (optimizes Clay credits)
- Set up templates for repeatable workflows
- Monitor credit usage (waterfall burns fast)
- Test with 50 records first before full run
- Timeline: 1,000 prospects = 2-3 hours vs 40+ hours manual

## 58 Clay Templates (8 Categories)

**1. List Building & Prospecting (8 templates, Beginner)**
- Apollo → Clay Import
- Sales Navigator → Clay
- Clay Find Companies/People
- Lookalike Finder
- Competitor Customer Finder
- TAM/SAM Builder

**2. Contact Discovery & Enrichment (7 templates, Beginner)**
- Email waterfalls
- Phone enrichment
- Email validation workflows

**3. Signal-Based Campaigns (9 templates, Intermediate)**
- Job Change Tracker
- Champion Reactivation
- Hiring Signal Detector
- Funding Tracker
- Tech Stack Change Detector
- Headcount Growth Trigger
- News-Based Outreach
- Leadership Change Tracker
- Multi-Signal Stacker

**4. Inbound & Intent Workflows (7 templates, Intermediate)**
- Website visitor follow-up
- Form abandonment recovery
- Content engagement triggers

**5. AI Research & Personalization (8 templates, Intermediate-Advanced)**
- Deep company research
- Personalized messaging at scale
- AI-generated insights

**6. Account Intelligence (6 templates, Advanced)**
- Deep-dive research workflows
- Qualification automation

**7. RevOps & Integrations (7 templates, Advanced)**
- Data cleanliness automation
- System connections
- CRM sync workflows

**8. Industry-Specific Plays (6 templates, All Levels)**
- Vertical-specific templates
- Industry trigger configurations

## Delivery-Ready Templates

**General High-Volume:**
- Leadmagic - Apollo - Bouncebean - Import Template

**Segmented by Title/Industry:**
- Leadmagic - Apollo Import - Persona Segment

**Email Enrichment:**
- Leadmagic - Clay - Enrich Prospect Emails

**Standard Sales Nav Workflow:**
- Prospeo - Sales Nav - Leads Import Template

**Alternative Sales Nav Flow:**
- Vayne - Sales Nav - Import Template
