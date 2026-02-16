# Email Infrastructure — Detailed Reference

Step-by-step walkthroughs for each phase of the setup. The SKILL.md has the quick reference; this file has the full detail.

---

## Step 1: Calculate Infrastructure Needs

### The Process

1. **Define monthly email goal** — how many cold emails per month?
2. **Calculate daily volume** — divide by 20 working days
3. **Calculate mailboxes** — divide daily volume by 20 (conservative) or 25 (aggressive)
4. **Add 50% buffer** — multiply by 1.5 for rotation, warm-up, and account issues
5. **Calculate domains** — divide total mailboxes by 2
6. **Decide provider split** — 60% Google Workspace, 40% Microsoft 365

### Write Down Your Numbers

- Monthly email goal: ___
- Daily volume: ___
- Mailboxes needed (with buffer): ___
- Domains needed: ___
- Google mailboxes (60%): ___
- Microsoft mailboxes (40%): ___

---

## Step 2: Domain Acquisition — Full Walkthrough

### Planning Your Domain Names

Brainstorm **2x the number you need** — some won't be available.

For primary domain `acme.com`, good patterns:
- Prefix: getacme.com, tryacme.com, goacme.com, hiacme.com, meetacme.com
- Suffix: acmehq.com, acmeco.com, acmegroup.com
- Team: teamacme.com, acme-team.com

### Purchasing Process

1. **Spread across registrars** — example split for 10 domains:
   - 3 from Cloudflare
   - 3 from Namecheap
   - 2 from GoDaddy
   - 2 from Squarespace
2. **Stick to .com** (.org acceptable as backup)
3. **Enable auto-renew** on every domain immediately
4. **Enable Whois privacy** (usually free)
5. **Start your tracking spreadsheet** — log every domain, registrar, and status

### Why Multiple Registrars Matter

If one registrar flags your account, has an outage, or changes policy — you lose only 25% of capacity instead of 100%. No single point of failure.

---

## Step 3: Google Workspace Setup — Full Walkthrough

### Per Domain (Repeat for Each)

1. Go to workspace.google.com → Get Started
2. Enter real business details
3. Add your secondary domain
4. Verify domain ownership (TXT record in DNS)
5. Create first user (e.g., alex@yourdomain.com)
6. Create second user (e.g., sarah@yourdomain.com)
7. Choose Business Starter plan (~$6/user/month)

### Video Tutorials by Registrar

- **Google Domain → Google Workspace:** https://www.loom.com/share/a230d197ed24480095ce2ccdeaeca3e6 (9 min)
- **Namecheap → Google Workspace:** https://www.loom.com/share/8aa8eb5e98904b6f91ca8797a0fd82d1 (11 min)
- **GoDaddy → Google Workspace:** https://www.loom.com/share/4c61ea43a89846be92f835ca0850f296 (7 min)

### What the Videos Cover

- Domain forwarding setup
- Domain verification (TXT record)
- MX record configuration
- SPF record creation
- DKIM generation and setup
- DMARC manual setup
- User account creation

---

## Step 4: Microsoft 365 Setup — Full Walkthrough

### Per Domain (Repeat for Each)

1. Go to microsoft.com/microsoft-365/business
2. Choose Business Basic (~$6/user/month)
3. Create admin account
4. Add secondary domain → verify with TXT record
5. Create users (max 2 per domain)
6. **Enable SMTP & IMAP:**
   - Admin Center (admin.microsoft.com) → Users → Active Users
   - Select user → Mail → Manage email apps
   - Check **IMAP** and **Authenticated SMTP** → Save
7. **Wait 1 hour** before connecting to Instantly

### Video Tutorials by Registrar

- **GoDaddy → Microsoft 365:** https://www.loom.com/share/b5dea267f88b4bdb864e08d8d3f96aaf (12 min)
- **Namecheap → Microsoft 365:** https://www.loom.com/share/cf362a64841a4bdaa6f1a9e5b8c517d0 (10 min)

### Common Mistake

Trying to connect Microsoft accounts to Instantly before the 1-hour SMTP propagation window. Set a timer.

---

## Step 5: DNS Configuration — Full Walkthrough

### Record-by-Record Setup

**MX Records** — configured automatically during workspace setup (via videos above).

**SPF Record:**

| Provider | TXT Record Value |
|---|---|
| Google | `v=spf1 include:_spf.google.com ~all` |
| Microsoft | `v=spf1 include:spf.protection.outlook.com ~all` |

**Only one SPF record per domain.** If you see duplicates (common with GoDaddy), delete the extras.

**DKIM Record:**
- Google: Generate in Google Workspace Admin → Apps → Gmail → Authenticate Email
- Microsoft: Two CNAME records (selector1._domainkey, selector2._domainkey)
- Copy the EXACT value — no extra spaces, all characters

**DMARC Record:**

| Field | Value |
|---|---|
| Type | TXT |
| Host/Name | _dmarc |
| Value | `v=DMARC1;p=none;sp=none;pct=100;rua=mailto:you@domain.com;ri=86400;aspf=r;adkim=r;fo=1` |

DMARC is never added automatically — you must add it manually every time.

### Domain Forwarding Setup

Redirect secondary domains to your main website:
- Redirect type: Permanent (301)
- Forward path: No (root domain only)
- SSL: On

**Registrar-specific guides:**
- GoDaddy: Set up in domain settings → Forwarding
- Namecheap: Set up in domain settings → Redirect Domain
- Google Domains/Squarespace: Domain settings → Website → Forwarding

### Custom Tracking Domain Setup

1. Add CNAME record: `inst` → `prox.itrackly.com` (TTL 300)
2. Cloudflare: ensure proxy is OFF (grey cloud, not orange)
3. Instantly → Settings → Custom Tracking Domain → enter `inst.yourdomain.com`
4. Click Verify → Enable
5. Wait 15–30 min for propagation

### DNS Propagation Timeline

| Record Type | Typical | Maximum |
|---|---|---|
| MX, SPF, DKIM | 15 min – 4 hours | 48 hours |
| DMARC | 15 min – 4 hours | 48 hours |
| CNAME (tracking) | 15–30 min | 4 hours |

**Pro tip:** Set TTL to 300 seconds before making changes (speeds up propagation). Increase to 3600 after confirmed working.

---

## Step 6: Connecting to Instantly — Full Walkthrough

### Google OAuth (Recommended)

1. Instantly → Email Accounts → Add New → Connect existing accounts → Google
2. Choose Option 1: OAuth
3. Copy the Client ID
4. Google Workspace Admin Console → Security → API Controls → Manage App Access
5. Configure new app → paste Client ID
6. Select "Instantly OAuth Email v1" from results
7. Scope: All users, Access: Trusted
8. Return to Instantly → Login

### Google App Password (Backup Method)

1. Enable 2FA on the Google account
2. Google Account → Security → App Passwords → generate for "Mail"
3. In Instantly: Option 2: App Password → enter email + generated password

### Google Bulk Import (10+ accounts)

1. Generate app passwords for each account
2. Download Instantly's CSV template
3. Fill in: email, app password, host settings
4. IMAP: imap.gmail.com:993 | SMTP: smtp.gmail.com:587
5. Upload via Add New → Any Provider → Bulk Import from CSV

### Microsoft (One-by-One Only)

1. Instantly → Email Accounts → Add New → Microsoft
2. Confirm SMTP enabled → Yes
3. Sign in with Microsoft account
4. **Check "Consent on behalf of your organization"**
5. Accept permissions

Microsoft accounts **cannot** be bulk imported.

### Post-Connection Checklist (Per Account)

- [ ] Set daily send limits (Google: 15–25, Microsoft: 10–15)
- [ ] Enable custom tracking domain (if set up)
- [ ] Add account tags (client, domain, provider)
- [ ] Enable slow ramp (starts at 2/day, +2/day)
- [ ] Run "Test domain setup" — all green

---

## Step 7: Warm-Up — Full Walkthrough

### Enabling Warm-Up

**Individual:** Email Accounts → click flame icon next to account
**Bulk:** Select accounts with checkbox → three dots → Enable warmup

### Settings Configuration

Navigate to: Account → Settings → Warm-up settings

| Setting | New Accounts | Established Accounts |
|---|---|---|
| Daily warmup limit | 10–15 | 20–30 |
| Reply rate | 30–40% | 30–40% |
| Increase by day | On | Optional |
| Read emulation | On | On |
| Open rate | 80–90% | 80–90% |
| Spam protection | 100% | 100% |
| Mark important | 30–50% | 30–50% |

### Email Filters (Keep Inbox Clean)

**Gmail:**
1. Find warm-up filter tag in Instantly (Account Settings → Warmup filter tag)
2. Gmail → Settings → Filters → Create filter with tag in Subject/Has words
3. Actions: Skip inbox, Apply label "Warmup"

**Outlook:**
1. Copy filter tag from Instantly
2. Outlook → Rules → Create rule: Subject/body contains [tag]
3. Actions: Mark as read, Move to "Warmup" folder

### Monitoring During Warm-Up

Check daily:
- Health score (aim 90%+, minimum 70%)
- Flame color (green/blue = good, red = problem)
- Sent AND received counts (both should increase)

---

## Step 8: Going Live — Full Walkthrough

### Pre-Launch Checklist

- [ ] All accounts warmed 2–3 weeks
- [ ] Health scores 70%+ (ideally 90%+)
- [ ] No red flames
- [ ] DNS test all green
- [ ] Custom tracking domain enabled
- [ ] Lead list verified (email verification tool)
- [ ] Email copy written and reviewed
- [ ] Unsubscribe/opt-out included

### Deliverability Settings in Instantly

Navigate to: Campaign → Settings → Advanced Deliverability

1. **Text-only first email:** Enable "Always send first email as text-only"
2. **Disable open tracking:** Enable (ColdIQ default — tracking ≠ success metric)
3. **ESP matching:** Enable (Google sends to Gmail, Microsoft sends to Outlook)
4. **Limit emails per company:** Set 2–3/day, workspace-wide

### Slow Ramp Guidance

- **New accounts:** Enable slow ramp (starts at 2, +2/day until max)
- **Established accounts already sending:** Do NOT enable — it resets them to 2/day
- **New accounts added to existing campaigns:** Enable for those specific accounts only

### First Campaign Launch

1. Start with 50–100 leads
2. Set 3–8 minute random delays between emails
3. Send Tuesday–Thursday, 8–11am recipient timezone (B2B default)
4. Monitor for 2–3 days
5. If metrics healthy, scale up gradually
6. **Scale by adding mailboxes, not by pushing limits higher**

### Inbox Rotation

Add all healthy accounts to campaign rotation. More accounts = lower volume per account = better deliverability.

---

## Step 9: Monitoring — Full Walkthrough

### Daily Routine (5 min — morning coffee check)

- [ ] Bounce rates <5%
- [ ] Reply rates consistent
- [ ] No spam complaint notifications
- [ ] No blacklist alerts
- [ ] Spot-check 2–3 warm-up emails

### Weekly Deep Dive (15 min)

- [ ] Google Postmaster Tools check
- [ ] Microsoft SNDS scores
- [ ] MXToolbox blacklist status
- [ ] Week-over-week open/reply rate comparison
- [ ] Bounce rate trending

### Monthly Audit (30 min)

- [ ] Update suppression list
- [ ] Audit bounce patterns
- [ ] Review domain reputation trends
- [ ] Clean old unresponsive leads
- [ ] Rotate warm-up email content
- [ ] Review infrastructure costs

### Quarterly Review (1 hour)

- [ ] Full DNS audit (all records still correct across all domains)
- [ ] Sender reputation deep dive
- [ ] Warm-up service effectiveness review
- [ ] Strategic capacity planning
- [ ] Document lessons learned

### Scaling Protocol

- Max 20% volume increase per week
- Stagger new domain launches (1 per week max)
- New domains go through full warm-up cycle
- Never add volume AND change copy simultaneously

### Monitoring Tools

**Free:**
- Google Postmaster Tools — Gmail reputation
- Microsoft SNDS — Outlook reputation
- MXToolbox — blacklist checking
- Mail-Tester — periodic email scoring

**Already Included:**
- Instantly analytics — primary monitoring
- Warm-up dashboards — daily health

---

> **Built by [ColdIQ](https://www.coldiq.com) & [Ivan Falco](https://www.linkedin.com/in/ivanfalco/en/).** For questions on implementation or anything not covered here, reach out to Ivan directly on [LinkedIn](https://www.linkedin.com/in/ivanfalco/en/).
