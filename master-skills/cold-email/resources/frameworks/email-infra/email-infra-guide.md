---
name: email-infra
description: Plan, build, and maintain cold email sending infrastructure. Covers infrastructure sizing, domain acquisition, workspace/mailbox creation (Google Workspace + Microsoft 365), DNS configuration (SPF, DKIM, DMARC), connecting to sending platforms (Instantly), warm-up, going live, and ongoing monitoring. Use when setting up cold outreach infrastructure, troubleshooting deliverability, scaling sending capacity, or onboarding a new client's email infra.
---

# Cold Email Infrastructure

Complete guide to setting up and maintaining cold email sending infrastructure — from zero to live campaigns.

## The Redline (Follow In Order)

1. **Calculate** infrastructure needs
2. **Acquire** secondary domains
3. **Create** workspaces & mailboxes
4. **Configure** DNS (SPF, DKIM, DMARC)
5. **Connect** to sending platform (Instantly)
6. **Warm up** mailboxes (2–3 weeks minimum)
7. **Go live** with conservative limits
8. **Monitor** and maintain ongoing

For detailed walkthroughs of each step, see [email-infra-step-by-step.md](email-infra-step-by-step.md).
For DNS issues and deliverability problems, see [email-infra-troubleshooting.md](email-infra-troubleshooting.md).

---

## Critical Rules (Never Break These)

1. **Never use a primary domain for cold outreach.** Always use secondary domains.
2. **Maximum 2 mailboxes per domain.** Limits blast radius if a domain gets burned.
3. **One domain = one workspace/tenant.** Never add multiple domains to one Google Workspace or Microsoft 365 account.
4. **Use multiple registrars.** No single point of failure.
5. **Warm up for 2–3 weeks minimum** before sending any campaigns.
6. **Never disable warm-up** once campaigns are running.
7. **Start conservative, scale gradually.** Easier to add capacity than recover from deliverability damage.

---

## Infrastructure Sizing

### Core Formula

Work backwards: **Monthly goal → Daily volume → Mailboxes → Domains**

### Send Limits Per Provider

| Provider | Safe Daily Limit per Mailbox |
|---|---|
| Google Workspace | 15–25 emails/day |
| Microsoft 365 | 10–15 emails/day |

### Sizing Calculator

| Monthly Goal | Daily Volume | Mailboxes Needed (with 50% buffer) | Domains Needed |
|---|---|---|---|
| 3,000 | 150 | 10–12 | 5–6 |
| 7,500 | 375 | 18–23 | 9–12 |
| 15,000 | 750 | 38–45 | 19–23 |
| 30,000 | 1,500 | 75–90 | 38–45 |

### Sizing Steps

1. Define monthly email goal
2. Divide by 20 working days = daily volume
3. Divide daily volume by 20 (conservative) or 25 (aggressive) = mailboxes
4. Multiply by 1.5 = mailboxes with buffer
5. Divide mailboxes by 2 = domains needed

### Provider Split

| Provider | Allocation | Why |
|---|---|---|
| Google Workspace | 60% | Higher send limits, good deliverability |
| Microsoft 365 | 40% | Different infrastructure, risk diversification |

**Practical minimum: 15 mailboxes** (~375 emails/day capacity).

---

## Domain Acquisition

### Naming Patterns (Good)

For primary domain `acme.com`:
- acmehq.com, getacme.com, tryacme.com, goacme.com
- teamacme.com, hiacme.com, meetacme.com, acmeco.com

### Naming Patterns (Bad)

- Random strings, misspellings, spammy words (deals, offers)
- Numbers, excessive hyphens

### TLD Rules

- **.com is king** — best deliverability and trust
- **.org** acceptable as secondary
- **Avoid** .io, .ai, .co for cold email

### Recommended Registrars

Spread purchases across multiple:
- **Cloudflare** — no markup, great DNS management
- **Namecheap** — affordable, good for bulk
- **GoDaddy** — widely used
- **Squarespace** (ex–Google Domains) — reliable
- **Porkbun** — cheap, good reputation

### Per-Domain Checklist

- [ ] Domain registered
- [ ] Auto-renew enabled
- [ ] Whois privacy enabled
- [ ] Logged in tracking spreadsheet

---

## Workspace & Mailbox Setup

### Google Workspace (~$6/user/month, Business Starter)

1. Create new workspace at workspace.google.com
2. Add secondary domain → verify ownership via TXT record
3. Create mailboxes (max 2 per domain, real names)
4. DNS records configured during this step (see DNS section)

### Microsoft 365 (~$6/user/month, Business Basic)

1. Purchase plan at microsoft.com/microsoft-365/business
2. Add secondary domain → verify ownership via TXT record
3. Create mailboxes (max 2 per domain, real names)
4. **Critical: Enable SMTP & IMAP** in Admin Center → Users → Active Users → Mail → Manage email apps
5. **Wait 1 hour** after enabling SMTP before connecting to Instantly

### Mailbox Naming

**Good:** Real first names — alex@, sarah@, michael@, james@, emma@, david@
**Bad:** sales@, info@, noreply@, hello@, outreach@

**Pro tip:** Keep names consistent across domains (alex@ on all your domains).

### Profile Pictures

Add a professional headshot to every mailbox. This improves deliverability and reply rates. Do not skip.

---

## DNS Configuration

Every domain needs **all four records**. Missing one can tank deliverability.

| Record | Purpose |
|---|---|
| **MX** | Routes incoming email to your provider |
| **SPF** | Declares which servers can send for your domain |
| **DKIM** | Digital signature proving email authenticity |
| **DMARC** | Policy for handling SPF/DKIM failures |

### SPF Records

- Google: `v=spf1 include:_spf.google.com ~all`
- Microsoft: `v=spf1 include:spf.protection.outlook.com ~all`
- **Only ONE SPF record per domain** (most common mistake)

### DMARC Record

| Field | Value |
|---|---|
| Type | TXT |
| Host | _dmarc |
| Value | `v=DMARC1;p=none;sp=none;pct=100;rua=mailto:you@domain.com;ri=86400;aspf=r;adkim=r;fo=1` |

### Domain Forwarding

Redirect secondary domains → main website (301 permanent redirect). Makes domains look legitimate when prospects check.

### Custom Tracking Domain (Recommended)

CNAME record: `inst` → `prox.itrackly.com` (TTL 300)
Then configure in Instantly → Settings → Custom Tracking Domain.
**Cloudflare users:** proxy must be OFF (grey cloud).

### Testing DNS

1. **Instantly:** Email Accounts → Test domain setup (easiest)
2. **MXToolbox:** mxtoolbox.com — MX, SPF, DMARC, blacklist
3. **Mail-Tester:** mail-tester.com — deliverability score (aim 8+/10)
4. **Google Postmaster Tools:** postmaster.google.com — Gmail reputation

For DNS troubleshooting, see [troubleshooting.md](troubleshooting.md).

---

## Connecting to Instantly

### Google Accounts (OAuth — Recommended)

1. Email Accounts → Add New → Google → OAuth
2. Copy Client ID → Google Workspace Admin → Security → API Controls → Manage App Access
3. Configure new app → paste Client ID → select "Instantly OAuth Email v1"
4. Scope: All users, Access: Trusted
5. Return to Instantly → Login to complete

### Microsoft Accounts (One-by-One Only)

1. Email Accounts → Add New → Microsoft
2. Confirm SMTP is enabled → sign in
3. **Check "Consent on behalf of your organization"**
4. Accept permissions

**Microsoft cannot be bulk imported.** Plan time accordingly.

### Post-Connection Settings

- **Daily send limits:** Google 15–25, Microsoft 10–15
- **Custom tracking domain:** Enable per account
- **Account tags:** Organize by client / domain / provider
- **Slow ramp:** Enable — starts at 2/day, increases by 2/day

---

## Warm-Up

### Timeline

| Period | What Happens | Can Send Campaigns? |
|---|---|---|
| Week 1 | Foundation — low volume warm-up starts | No |
| Week 2 | Building — volume increases, health scores appear | No |
| Week 3 | Ready — health scores 70%+ (ideally 90%+) | Yes, conservatively |

**Minimum: 2 weeks. Recommended: 3 weeks.**

### Recommended Warm-Up Settings

| Setting | Value |
|---|---|
| Daily warmup limit | 10–15 |
| Reply rate | 30–40% |
| Increase by day | Enabled |
| Read emulation | Enabled |
| Open rate | 80–90% |
| Spam protection | 100% |
| Mark important | 30–50% |

### Warm-Up Pools

| Pool | Flame Color | Quality |
|---|---|---|
| Premium | Blue | Best — aged Google/Outlook accounts |
| Standard | Green | Good — default for all accounts |
| Basic | Orange | Lower — mostly SMTP |
| Disabled | Red | Needs reactivation (DNS issue likely) |

### Red Flame Recovery

1. Fix DNS (run "Test domain setup" in Instantly)
2. Click red flame → Request Reactivation Code
3. Check inbox for code → enter in Instantly

---

## Going Live

### Ramp Schedule

| Provider | Week 1 | Week 2–3 | Week 4+ |
|---|---|---|---|
| Google | 10–15/day | 15–20/day | 20–25/day |
| Microsoft | 5–10/day | 10–12/day | 12–15/day |

### Deliverability Settings (Instantly)

- **Text-only first email** — reduces spam filter triggers
- **Disable open tracking** — improves inbox placement (ColdIQ default)
- **ESP matching** — Google sends to Gmail, Microsoft sends to Outlook
- **Limit emails per company** — 2–3 per company per day (workspace-wide)
- **Slow ramp** — enable for new accounts only

### First Campaign

- Start with **50–100 leads**
- Monitor 2–3 days before scaling
- Scale by adding mailboxes, not pushing limits higher

### Healthy Metrics

| Metric | Healthy | Warning | Stop |
|---|---|---|---|
| Open rate | 50%+ | 30–50% | Below 30% |
| Reply rate | 2%+ | 1–2% | Below 1% |
| Bounce rate | Below 3% | 3–5% | Above 5% |
| Spam complaints | 0 | Any | Multiple |

---

## Ongoing Monitoring

### Daily (5 min)

- Check bounce rates (<5%), reply rates, spam complaints
- Spot-check 2–3 warm-up emails
- Watch for blacklist alerts

### Weekly (15 min)

- Google Postmaster Tools + Microsoft SNDS
- MXToolbox blacklist check
- Compare week-over-week trends

### Monthly (30 min)

- Update suppression list, audit bounces
- Review domain reputation, clean old leads
- Rotate warm-up email content

### Quarterly (1 hour)

- Full DNS audit across all domains
- Infrastructure cost review
- Strategic capacity planning

### Scaling Rule

- Increase volume by max **20% per week**
- Add new domains instead of pushing existing ones
- Stagger new domain launches (1 per week max)
- New domains go through full warm-up cycle

For detailed recovery protocols, see [email-infra-troubleshooting.md](email-infra-troubleshooting.md).

---

## Infrastructure Tracking Spreadsheet

Maintain a spreadsheet with:

| Domain | Registrar | Provider | Mailbox 1 | Mailbox 2 | Admin Email | Status |
|---|---|---|---|---|---|---|
| acmehq.com | Cloudflare | Google | alex@acmehq.com | sarah@acmehq.com | admin@you.com | Active |
| getacme.com | Namecheap | Microsoft | alex@getacme.com | sarah@getacme.com | admin@you.com | Warming |

Track: domain, registrar, provider, mailboxes, admin email, warm-up status, health score.

---

## Seasonal Expectations

| Period | Expected Impact |
|---|---|
| December holidays | 20–30% engagement drop, recovers mid-January |
| July–August | 10–20% drop (vacation season) |
| End of quarter | Lower response rates (prospects closing deals) |
| Industry conferences | 15–25% drop during event week |

Don't panic during seasonal dips. Investigate only if the drop exceeds norms or doesn't recover.

---

> **Built by [ColdIQ](https://www.coldiq.com) & [Ivan Falco](https://www.linkedin.com/in/ivanfalco/en/).** For questions on implementation or anything not covered here, reach out to Ivan directly on [LinkedIn](https://www.linkedin.com/in/ivanfalco/en/).
