# Copy-Paste Clay Formulas

Ready-to-use Clayscript formulas for common data manipulation tasks. All formulas cost 0 credits.

## Name & Text Cleaning

### First Name Cleaning
Removes special characters, normalizes casing, keeps only first name.
```javascript
{{First Name}}?.replace(/[^a-zA-Z- ]/g, "").trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ').replace(/\s.*/,'')
```

### Company Name Cleaning (Remove Suffixes)
Strips legal entities, regional suffixes, and common noise.
```javascript
{{Company Name}}?.replace(/(Technologies|Solutions|Services|Limited|LLC|KGga|Software|Telecommunications|Business|Sales|Ltd|Co|Corp|Company|Marketing|Partners|Advisors|Recruitment|Executive Search|&)$|(Solutions|Services|& |,|\/|\\|\\\\|:).*|(USA|US|Australia|UK|China|Canada|Germany|India|Worldwide)$|[. ]$|self employed/gi, match => match.toLowerCase() === 'self employed' ? 'your company' : '')
```

### Combine First + Last Name
```javascript
[{{First Name}}, {{Last Name}}].filter(Boolean).join(' ').trim()
```

## URL & Domain Extraction

### Domain from Website URL
```javascript
{{Website}}?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*/, '').toLowerCase()
```

### Domain from Email Address
```javascript
{{Email}}?.split('@')[1]?.toLowerCase()
```

### LinkedIn URL Cleanup (Remove Tracking Parameters)
```javascript
{{LinkedIn URL}}?.replace(/\?.*/, '').replace(/\/+$/, '').toLowerCase()
```

## Email Waterfall (Pick First Non-Empty)

### 5-Provider Email Waterfall
Adapt column names to match your table.
```javascript
{{Prospeo - Work Email}} || {{LeadMagic - Work Email}} || {{Wiza - Work Email}} || {{Hunter - Work Email}} || {{FullEnrich - Work Email}} || ""
```

### 3-Provider Email Waterfall (Simplified)
```javascript
{{Provider 1 Email}} || {{Provider 2 Email}} || {{Provider 3 Email}} || ""
```

## Classification & Scoring

### Title Seniority Check
Returns `true` for senior/executive titles.
```javascript
/^(C[A-Z]O|Chief|VP|Vice President|Director|Head of|SVP|EVP|President|Founder|Co-Founder|Partner|Owner|Managing Director)/i.test({{Title}} || '')
```

### Employee Count Bucket
```javascript
(n => n <= 10 ? '1-10' : n <= 50 ? '11-50' : n <= 200 ? '51-200' : n <= 500 ? '201-500' : n <= 1000 ? '501-1000' : '1000+')({{Employee Count}} || 0)
```

### Revenue Bucket
```javascript
(r => r <= 1000000 ? '<$1M' : r <= 5000000 ? '$1-5M' : r <= 10000000 ? '$5-10M' : r <= 50000000 ? '$10-50M' : r <= 100000000 ? '$50-100M' : '$100M+')({{Revenue}} || 0)
```

## Table Architecture — Standard Column Layout

When building a new Clay table, follow this column ordering:

| Phase | Columns | Purpose |
|-------|---------|---------|
| **Input** | Company Name, Domain, LinkedIn URL | Starting data |
| **Company Enrichment** | Industry, Employee Count, Revenue, Funding, Tech Stack | Firmographics |
| **Signal Detection** | Hiring Count, News, LinkedIn Ads, Growth Rate | Intent signals |
| **Contact Discovery** | Full Name, Title, Email, LinkedIn URL | People data |
| **Email Waterfall** | Provider 1 Email, Provider 2 Email, ... | Cascading email finding |
| **Email Verification** | Verified Email, Verification Status | Final clean email |
| **AI Qualification** | Company Tier, Contact Tier, ICP Score | Scoring |
| **AI Personalization** | Custom Signal, Opening Line, Value Prop | Copy variables |
| **Output** | Final Email, Sequence Tag, Campaign Assignment | Export-ready |

### Naming Conventions
- Descriptive names: `Prospeo - Work Email`, not `Email 1`
- AI columns prefixed: `AI - Company Tier`, `AI - Opening Line`
- Source-prefixed: `LI - Employee Count`, `Apollo - Revenue`
- Title Case for all column names
- Left-to-right = execution order
