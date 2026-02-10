# Cold Email Deliverability & Compliance Guide

## 1. Email Authentication

### SPF (Sender Policy Framework)

**What it does:** Tells receiving servers which IP addresses/servers are authorized to send email for your domain.

**Setup:**
1. Go to your DNS provider
2. Add a TXT record:
```
Host: @
Type: TXT
Value: v=spf1 include:_spf.google.com ~all
```

**For multiple providers:**
```
v=spf1 include:_spf.google.com include:spf.protection.outlook.com include:sendgrid.net -all
```

**Common mistakes:**
- Multiple SPF records (only ONE allowed per domain — merge them)
- Using `+all` instead of `~all` or `-all`
- Exceeding 10 DNS lookups (each `include:` counts as one)

### DKIM (DomainKeys Identified Mail)

**What it does:** Adds a digital signature to outgoing emails proving they haven't been tampered with.

**Setup (Google Workspace):**
1. Google Admin Console → Apps → Gmail → Authenticate Email
2. Generate DKIM key (2048-bit recommended)
3. Add TXT record to DNS:
```
Host: google._domainkey
Type: TXT
Value: v=DKIM1; k=rsa; p=[your-public-key]
```
4. Back in Google Admin, click "Start Authentication"

**Verification:** Send test email, check headers for `dkim=pass`.

### DMARC (Domain-based Message Authentication)

**What it does:** Tells receiving servers what to do when SPF or DKIM fails, and where to send reports.

**Progressive setup:**
```
# Week 1-2: Monitor only (no blocking)
v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com

# Week 3-4: Quarantine failures
v=DMARC1; p=quarantine; pct=50; rua=mailto:dmarc@yourdomain.com

# Week 5+: Reject failures (full protection)
v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com
```

Add as TXT record:
```
Host: _dmarc
Type: TXT
Value: v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com
```

### Verification Checklist
- [ ] SPF: `dig TXT yourdomain.com` shows `v=spf1`
- [ ] DKIM: Email headers show `dkim=pass`
- [ ] DMARC: `dig TXT _dmarc.yourdomain.com` shows policy
- [ ] Use mail-tester.com or MXToolbox for full check

## 2. Domain Warmup

### New Domain Warmup Schedule

| Week | Daily Cold Emails | Warmup Emails | Total | Notes |
|------|------------------|---------------|-------|-------|
| **1** | 0 | 5-10 | 5-10 | Warmup tool only, no cold |
| **2** | 0 | 10-20 | 10-20 | Warmup tool, send/receive internally |
| **3** | 5-10 | 15-25 | 20-35 | Begin mixing cold cautiously |
| **4** | 10-20 | 20-30 | 30-50 | Monitor bounces and complaints |
| **5-6** | 20-30 | 20-30 | 40-60 | Gradual increase |
| **7-8** | 30-40 | 15-20 | 45-60 | Approaching steady state |
| **9+** | 30-50 | 10-20 | 40-70 | Full operations, keep warmup running |

### Warmup Tools

| Tool | Price | Method | Notes |
|------|-------|--------|-------|
| **Instantly** (built-in) | Included | Peer network warmup | Opens, replies, marks as important |
| **Lemwarm** (Lemlist) | Included with Lemlist | Similar peer network | Auto-adjusts volume |
| **Mailreach** | $25/mo per mailbox | Large warmup network | Detailed reports |
| **Warmbox** | $19/mo per mailbox | AI-powered warmup | Good standalone option |

### Key Rules
- **Never stop warmup** — keep 10-20/day even during active campaigns
- Warmup emails should come from real-looking domains
- Ensure replies and "move to primary" actions happen
- Monitor sender score throughout

### Domain Age Requirements

| Age | Status | Recommendation |
|-----|--------|----------------|
| 0-2 weeks | Brand new | No email. Set up DNS, create mailboxes, join warmup. |
| 2-4 weeks | Fresh | Warmup only. No cold email. |
| 4-8 weeks | Warming | Begin mixing cold (follow schedule above). |
| 8-12 weeks | Establishing | Moderate cold volume (30-50/mailbox/day). |
| 12+ weeks | Established | Full operations. Monitor ongoing. |
| 6+ months | Mature | Can push slightly higher volumes if reputation supports. |

**Minimum before first cold email: 4 weeks** (2 weeks aging + 2 weeks warmup)
**Ideal: 6-8 weeks** (2-4 weeks aging + 4 weeks warmup)

## 3. Inbox Placement

### Plain Text vs HTML

| Factor | Plain Text | HTML |
|--------|-----------|------|
| Deliverability | Better | Worse (more spam signals) |
| Trust signal | Feels personal | Feels like marketing |
| Tracking | Limited (no pixel) | Open tracking possible |
| Rendering | Universal | Can break across clients |
| Cold email best practice | **Preferred** | Avoid for cold |

**Rule: Use plain text for cold email. Always.**

### Sending Time Optimization
- Send during **business hours in recipient's timezone** (9 AM - 5 PM)
- Peak windows: **8-10 AM** and **1-3 PM** (Tuesday-Thursday)
- Random delays between emails: 30-120 seconds
- Vary sending times slightly day-to-day (not always at 9:00 AM)

### Reply Rate Impact on Deliverability

Reply rate is the **single most powerful positive signal**:

| Reply Rate | Status |
|-----------|--------|
| >15% | Excellent — strong positive reputation |
| >10% | Good — inbox placement stable |
| >5% | Minimum acceptable for sustained sending |
| <3% | Danger zone — deliverability will degrade |

**How replies help:** Creates a "conversation" (trust signal), recipients who reply rarely mark as spam, high replies offset occasional complaints.

## 4. Compliance

### CAN-SPAM (United States)

**Requirements:**
1. Accurate "From" and "Reply-To" headers
2. Non-deceptive subject lines
3. Identify as advertisement (flexibility on this)
4. Include valid physical postal address
5. Clear opt-out explanation
6. Honor opt-outs within 10 business days
7. Monitor compliance of third parties

**Penalties:** Up to $51,744 per email in violation.

**Key:** CAN-SPAM does NOT require prior consent. B2B cold email is compliant with unsubscribe + physical address.

### GDPR (EU/EEA/UK)

**Legal bases for B2B cold email:**

1. **Legitimate Interest (Article 6(1)(f))** — most common:
   - Conduct Legitimate Interest Assessment (LIA)
   - Email must be relevant to professional role
   - Easy opt-out required
   - Data sourced lawfully

2. **Consent (Article 6(1)(a))** — required in some countries (notably Germany)

**Country-specific:**
| Country | B2B Cold Email |
|---------|---------------|
| UK | Generally permitted (legitimate interest) |
| France | Permitted if relevant to professional role |
| Germany | Very restrictive — consent generally required |
| Netherlands | Permitted with legitimate interest |
| Nordic | Generally permit with legitimate interest |

**Requirements:** Lawful basis, transparency, right to object, data minimization, right to erasure, record keeping, privacy notice, data source disclosure.

**Compliant footer:**
```
You're receiving this because of your role as [Role] at [Company].
To opt out, reply "unsubscribe" or click here: [link]
Privacy policy: [link]
```

**Penalties:** Up to 4% of global annual revenue or EUR 20M.

### RFC 8058: One-Click Unsubscribe

**Required since February 2024** for bulk senders (5,000+/day to Gmail/Yahoo).

```
List-Unsubscribe: <https://yourdomain.com/unsubscribe?id=token>, <mailto:unsubscribe@yourdomain.com>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

Most cold email tools (Instantly, Smartlead, Lemlist) add these automatically.

## 5. Blacklist Monitoring

### Major Blacklists

| Blacklist | Severity | Impact |
|-----------|----------|--------|
| **Spamhaus ZEN** | Critical | Used by ~80% of ISPs |
| **Spamhaus DBL** | Critical | Domain-based |
| **Barracuda BRBL** | High | Corporate email gateways |
| **SpamCop** | Medium-High | Auto-expires 24-48 hrs |
| **SORBS** | Medium | Multiple lists |
| **URIBL / SURBL** | High | Checks domains in email body |

### How to Check

1. **MXToolbox**: mxtoolbox.com/blacklists.aspx (100+ blacklists)
2. **MultiRBL**: multirbl.valli.org (300+ blacklists)
3. **Google Postmaster Tools**: domain/IP reputation with Gmail
4. **Microsoft SNDS**: reputation with Outlook/Hotmail

**Frequency:** Daily during warmup, weekly during campaigns.

### Removal Process

| Blacklist | Process | Timeline |
|-----------|---------|----------|
| Spamhaus | Submit removal at spamhaus.org | 24-48 hrs |
| Barracuda | Self-service at barracudacentral.org | 12-24 hrs |
| SpamCop | Auto-expires (no manual removal) | 24-48 hrs |
| SORBS | Self-service at sorbs.net | Varies |

## 6. Infrastructure Best Practices

### Multiple Domains Strategy

```
Primary domain (NEVER for cold email):
  yourcompany.com → Website, support, team email

Cold outreach domains (3-5+):
  yourcompany.co
  getyourcompany.com
  tryyourcompany.com
  yourcompanyhq.com
  withyourcompany.com
```

**Rules:**
- 2-5 domains per SDR for rotation
- 2-3 mailboxes per domain
- Domain naming: clearly related to your brand
- Let domains age 2-4 weeks before warmup

### Sending Limits per Provider

| Provider | Technical Limit | Safe Cold Email Limit |
|----------|----------------|----------------------|
| **Google Workspace** | 2,000/day | 30-50/day per mailbox |
| **Google (new account)** | 500/day first 24h | 5-10/day during warmup |
| **Microsoft 365** | 10,000/day | 30-50/day per mailbox |
| **Gmail (free)** | 500/day | NOT recommended |

### Custom Tracking Domains

Always use a subdomain of your sending domain:
```
Type: CNAME
Host: track
Value: [provided by your email tool]
```

### Complete DNS Checklist

```
1. MX Records       → Points to email provider
2. SPF (TXT)        → v=spf1 include:[providers] -all
3. DKIM (TXT/CNAME) → [selector]._domainkey → public key
4. DMARC (TXT)      → _dmarc → v=DMARC1; p=reject; rua=mailto:...
5. Tracking CNAME    → track.[domain] → [tool's tracking server]
6. Return-Path CNAME → If required by sending tool
7. A Record          → Web server (landing/unsubscribe pages)
```

## 7. Bounce Management

### Hard vs Soft Bounces

| Type | Definition | Action |
|------|-----------|--------|
| **Hard Bounce** (5xx) | Permanent failure — address invalid | Remove immediately, never retry |
| **Soft Bounce** (4xx) | Temporary failure — server issue | Retry 2-3 times over 24-72 hrs |

### Acceptable Bounce Rates

| Rate | Status | Action |
|------|--------|--------|
| <1% | Excellent | Maintain practices |
| 1-2% | Acceptable | Monitor closely |
| 2-3% | Warning | Run verification |
| 3-5% | Dangerous | Pause campaigns, clean list |
| >5% | Critical | Stop immediately |

### Email Verification Tools

| Tool | Cost | Accuracy | Best For |
|------|------|----------|----------|
| **ZeroBounce** | $0.008/email | 98%+ | Comprehensive verification |
| **NeverBounce** | $0.008/email | 97%+ | Platform integrations |
| **Findymail** | ~$0.01/email | 99%+ B2B | Find + verify combined |
| **MillionVerifier** | $0.0005/email | 95%+ | Budget large lists |
| **Bouncer** | $0.008/email | 97%+ | EU-based (GDPR) |

### Verification Best Practices

1. **Verify 100% of emails before any campaign.** No exceptions.
2. **Re-verify lists older than 30 days.**
3. **Remove "unknown" and "catch-all" results** or treat with extreme caution.
4. **Remove role-based emails** (info@, admin@, sales@).
5. **Remove free email providers** for B2B outreach.
6. **Budget rule:** Verification costs ($0.005-0.01/email) are trivial vs damaged reputation.

## Pre-Launch Checklist

- [ ] 3-5 outreach domains purchased (not primary domain)
- [ ] Domains aged 2+ weeks
- [ ] Google Workspace or Microsoft 365 on each domain
- [ ] 2-3 mailboxes per domain
- [ ] SPF, DKIM, DMARC configured for each domain
- [ ] Custom tracking domain (CNAME) per domain
- [ ] Warmup running on every mailbox (2-4 weeks)
- [ ] 100% email verification before loading campaigns
- [ ] Blacklist monitoring alerts set up
- [ ] Compliant templates (physical address, unsubscribe)
- [ ] Legitimate interest assessment (if emailing EU)

## Active Campaign Monitoring

- [ ] Cold email volume: 30-50/mailbox/day
- [ ] Warmup tool running (10-20/day per mailbox)
- [ ] Bounce rate <2%
- [ ] Spam complaint rate <0.1%
- [ ] Reply rate >5%
- [ ] Blacklists checked weekly
- [ ] Google Postmaster + Microsoft SNDS reviewed weekly
- [ ] Plain text emails (no HTML/images)
- [ ] Sending during business hours in recipient's timezone
- [ ] Unsubscribes processed within 24 hours
- [ ] Mailbox rotation across campaigns
- [ ] Re-verify lists older than 30 days
