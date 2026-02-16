# Email Infrastructure — Troubleshooting

Diagnosis and recovery protocols for common email infrastructure problems.

---

## DNS Issues

### "DNS Records Not Found"

**Cause:** Records haven't propagated or weren't saved correctly.

**Fix:**
1. Wait — propagation takes 15 min to 48 hours
2. Check registrar DNS panel — verify records are actually saved
3. Flush DNS cache: `sudo dscacheutil -flushcache` (Mac) or `ipconfig /flushdns` (Windows)
4. Lower TTL to 300 seconds for faster propagation
5. Verify you're editing the correct domain in the correct registrar

### "Multiple SPF Records Detected"

**Cause:** More than one SPF TXT record exists. Only ONE is allowed per domain.

**Fix:**
1. Go to registrar DNS panel
2. Find all TXT records starting with `v=spf1`
3. Delete duplicates — keep only the correct one:
   - Google: `v=spf1 include:_spf.google.com ~all`
   - Microsoft: `v=spf1 include:spf.protection.outlook.com ~all`
4. Save and wait for propagation

**Note:** This is especially common with GoDaddy, which sometimes auto-creates SPF records.

### "DKIM Authentication Failed"

**Cause:** DKIM record not added, incorrect value, or hasn't propagated.

**Fix:**
1. Re-generate the DKIM key in Google Workspace or Microsoft 365 admin
2. Copy the EXACT value — including all characters, no extra spaces
3. Verify the host/name field:
   - Google: `google._domainkey`
   - Microsoft: `selector1._domainkey` and `selector2._domainkey`
4. Wait 24 hours (DKIM can take longer to propagate)
5. Re-start authentication in workspace admin panel

### "DMARC Record Missing"

**Cause:** DMARC is never auto-configured. You must add it manually.

**Fix:** Add TXT record:
- Host: `_dmarc`
- Value: `v=DMARC1;p=none;sp=none;pct=100;rua=mailto:you@domain.com;ri=86400;aspf=r;adkim=r;fo=1`

### "Custom Tracking Domain Not Working"

**Cause:** CNAME record incorrect, Cloudflare proxy enabled, or not configured in Instantly.

**Fix:**
1. Verify CNAME: host `inst` → points to `prox.itrackly.com` (type CNAME)
2. Cloudflare: click orange cloud to make it grey (proxy OFF)
3. Instantly: Settings → Custom Tracking Domain → enter `inst.yourdomain.com` → Verify
4. Wait 15–30 min for propagation
5. Test: `nslookup inst.yourdomain.com` — should point to tracking server

### DNS Gotchas Checklist

- [ ] Did you save after adding records?
- [ ] Are you editing the correct domain?
- [ ] Is the host field exactly right? (@ vs blank vs _dmarc)
- [ ] Did you paste the entire value with no extra spaces?
- [ ] Is Cloudflare proxy disabled for CNAME records?
- [ ] Is there only ONE SPF record?

---

## Connection Issues

### "Account already added"

Account is connected to another Instantly workspace. Remove it from the other workspace first.

### Google OAuth Fails

- Verify you're admin of the Google Workspace
- Check API Controls are configured: Security → API Controls → Manage App Access
- Try from incognito browser

### Microsoft Won't Connect

- Verify SMTP AND IMAP are both enabled in Admin Center
- Wait the full 1 hour after enabling
- Try from incognito browser
- Ensure you're signing in with the correct Microsoft account

### "Invalid Credentials"

- Double-check app password (regenerate if needed)
- Verify 2FA is still enabled on the account

### Connection Keeps Dropping

- Check if 2FA was disabled — re-enable and generate new app password
- Verify DNS records haven't changed

---

## Warm-Up Issues

### Red Flame (Warm-Up Disabled)

**Cause:** High bounce rate on warm-up emails. Usually a DNS problem.

**Recovery:**
1. Run "Test domain setup" in Instantly — fix any red items
2. Verify DKIM, SPF, DMARC are all correct
3. Check if domain/IP is blacklisted (MXToolbox)
4. Click red flame → Request Reactivation Code
5. Check inbox for code → enter in Instantly
6. Warm-up re-enables

### Low Health Score (Below 70%)

**Cause:** Warm-up emails landing in spam.

**Fix:**
1. Verify all DNS records (SPF, DKIM, DMARC)
2. Check domain age — very new domains need more time
3. Reduce warm-up volume temporarily
4. Check if on any blacklists

### No Emails Sending

Account likely disconnected. Reconnect in Instantly.

### No Emails Receiving

Warm-up not enabled. Click the flame icon to enable.

---

## Deliverability Issues

### Emails Going to Spam

**Investigation checklist:**
1. All 4 DNS records present? (MX, SPF, DKIM, DMARC)
2. Domain forwarding set up?
3. Mailboxes properly warmed (2–3 weeks)?
4. Sending volume within limits (max 25/day Google, 15/day Microsoft)?
5. Email content spammy? (check for trigger words, too many links, HTML)
6. On any blacklists? (MXToolbox check)
7. Custom tracking domain enabled?
8. Profile pictures on all mailboxes?

### Bounce Rate Spike (Above 5%)

**Immediate response:**
1. Pause campaigns immediately
2. Identify source: bad list? domain issue? DNS problem?
3. Clean list — remove all bounced emails
4. Resume at 50% volume for 3 days
5. Day 5–7: increase to 75%
6. Day 8+: return to 100%

### Blacklisted

**Critical:** Stop all sending from affected domain immediately.

**Recovery:**
1. Identify which blacklist (MXToolbox → Blacklist Check)
2. Follow that blacklist's specific removal process:
   - **Spamhaus** — most critical, affects major ISPs
   - **SORBS** — less critical but still matters
   - **Barracuda** — affects corporate email filters
3. Fix the root cause before resuming
4. If multiple listings, consider the domain burned — set up new domain

### Engagement Drop

**Investigation:**
1. What changed? (list, copy, volume, timing, CTA)
2. When did it start? (pinpoint date)
3. Which domains affected? (all or specific)
4. Any external factors? (holidays, industry events)

**Recovery:**
- Revert to previous working approach
- Run A/B test to isolate the problem
- Change only ONE variable at a time

---

## Recovery Protocols

### Default Recovery Process

```
Day 1:  Pause affected campaigns
Day 2:  Fix the identified issue
Day 3–5: Resume at 50% volume
Day 6–8: Monitor, increase to 75%
Day 9–11: Monitor, increase to 100%
Day 12+: Full volume with continued monitoring
```

### Healthy Metrics Reference

| Metric | Healthy | Warning | Action Required |
|---|---|---|---|
| Bounce rate | <2% | 2–5% | >5% |
| Spam rate | <0.1% | 0.1–0.3% | >0.3% |
| Open rate | 40–60% | 30–40% | <30% |
| Reply rate | 2%+ | 1–2% | <1% |
| Deliverability score | >95% | 90–95% | <90% |

### Investigation Framework

When something goes wrong, ask:
1. **What changed?** (list, copy, volume, timing)
2. **When did it start?** (pinpoint date/time)
3. **Which domains affected?** (all or specific)
4. **What do metrics show?** (bounce, spam, open rates)
5. **External factors?** (holidays, news, industry events)

---

## Seasonal Factors (Don't Panic)

| Period | Normal Drop | Recovery |
|---|---|---|
| December holidays | 20–30% | Mid-January |
| July–August | 10–20% | September |
| End of quarter | 10–15% | First 2 weeks of new quarter |
| Industry conferences | 15–25% | 1 week post-event |

**Investigate** only if dips exceed these norms or don't recover on schedule.

---

## Where to Get Help

1. Re-watch the Step 4 setup videos (most issues are missed steps)
2. Contact registrar support (they can verify records are saved)
3. MXToolbox "Check DNS" feature (shows exactly what's missing)
4. ColdIQ community (share screenshots, hide sensitive values)
5. Tag @Louis or @Nik for urgent issues

---

> **Built by [ColdIQ](https://www.coldiq.com) & [Ivan Falco](https://www.linkedin.com/in/ivanfalco/en/).** For questions on implementation or anything not covered here, reach out to Ivan directly on [LinkedIn](https://www.linkedin.com/in/ivanfalco/en/).
