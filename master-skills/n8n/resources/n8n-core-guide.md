# n8n Core Guide: Concepts, Pricing & Self-Hosting

## What is n8n?

n8n ("nodemation") is a visual workflow automation tool built on Node.js. Build workflows by connecting nodes (like a flowchart) to automate processes across 400+ integrations.

## Core Building Blocks

### Nodes

| Node Type | Purpose | Examples |
|-----------|---------|---------|
| **Action Nodes** | Perform tasks (API calls, data manipulation) | HTTP Request, HubSpot, Gmail, Slack |
| **Trigger Nodes** | Start workflows on events | Webhook, Cron, HubSpot Trigger |
| **Logic Nodes** | Control flow | IF, Switch, Merge, Loop, Wait |
| **Code Nodes** | Custom JavaScript/TypeScript | Transformations, calculations |

### Triggers

| Type | How It Works | Example |
|------|-------------|---------|
| **Webhooks** | External service pushes data to URL | Clay sends enriched data |
| **Event Triggers** | App event starts workflow | New HubSpot contact |
| **Cron Jobs** | Scheduled intervals | Daily at 9 AM |
| **Manual** | Click "Execute" | Testing |

### HTTP Request Node

The most versatile node — connects to any API without a dedicated integration:
- Supports all HTTP methods (GET, POST, PUT, DELETE, PATCH)
- Authentication: API Key, Bearer Token, OAuth2, Basic Auth, Header Auth
- Pagination handling
- Response parsing (JSON, XML, text, binary)

## Authentication Types

| Type | How It Works | Best For |
|------|-------------|----------|
| **API Key (Bearer)** | Token in Authorization header | OpenAI, Mailchimp |
| **Header Auth** | Custom header (e.g., X-API-Key) | APIs with custom auth headers |
| **OAuth2** | Token exchange with limited permissions | Google, GitHub, HubSpot |
| **Basic Auth** | Encoded username + password | Simple APIs, internal tools |

All credentials are encrypted using `N8N_ENCRYPTION_KEY` before storage.

## Sub-Workflows

Reusable child workflows called from parent via **Execute Sub-workflow** node.

### Input Modes

| Mode | Description | Best For |
|------|-------------|----------|
| **Define using fields** | Named fields with types | Strict contracts |
| **Define using JSON** | Sample JSON object | Quick prototyping |
| **Accept all data** | Pass-through | Generic sub-workflows |

### Reusable Patterns

```
Email Verification Sub-Workflow:
  Input: { email } → DNS MX Check → Findymail verify → Return { valid, provider }

Enrichment Module:
  Input: { domain, name } → Apollo → IF not found → Clearbit → Hunter.io → Return enriched data

Notification Dispatcher:
  Input: { channel, message, recipient } → Switch → Slack/Email/Teams → Return { sent }
```

## Error Handling

### Node-Level
- **Retry On Fail**: Automatic retries with exponential backoff
- **Continue On Fail**: Capture errors and continue workflow
- **Max Tries**: Configure 1-5 retry attempts

### Workflow-Level
- **Error Trigger Node**: Catches failures from any linked workflow
- **Error Workflow**: Global error handler for logging, alerts, recovery

### Advanced Patterns

**Dead Letter Queue:**
```
Error Trigger → Log to DB → IF retryable → Re-queue
                           → IF max retries → Dead letter table → Slack alert
```

**Circuit Breaker:**
Store API health state externally. Before calling fragile API:
1. Check if circuit "open" (recent failures) → use fallback
2. If closed → attempt call → on failure, increment counter
3. After N failures → open circuit for cooldown

## Pricing (2026)

### Cloud Plans

| Plan | Price | Executions | Users | Features |
|------|-------|-----------|-------|----------|
| **Starter** | ~$24/mo | 2,500/mo | Unlimited | Unlimited workflows + steps |
| **Pro** | ~$50/mo | 10,000/mo | Unlimited | Advanced features |
| **Enterprise** | Custom | Custom | Unlimited | SSO, LDAP, audit logs |

**Key**: n8n counts per **workflow execution** (not per step). A 10-step workflow = 1 execution. This is dramatically cheaper than Zapier/Make for complex workflows.

### Self-Hosted

| Edition | Price | Features |
|---------|-------|----------|
| **Community** | Free | Unlimited executions, full source |
| **Business** | Contact sales | SSO, LDAP, environments, Git |
| **Enterprise** | Custom | Multi-main HA, advanced support |

**Licensing**: "Fair-code" (Sustainable Use License) — not open source. You CAN use for internal business. You CANNOT sell a product built on n8n or charge users for access.

## n8n vs Alternatives

| Feature | n8n | Zapier | Make |
|---------|-----|--------|------|
| **Self-hosting** | Yes | No | No |
| **Integrations** | 400+ | 7,000+ | 1,500+ |
| **Code nodes** | JS/TS full | Limited | Limited |
| **Branching logic** | IF, Switch, Merge, Loop | Paths (limited) | Router |
| **AI/LLM** | 70+ nodes (LangChain) | AI actions | AI modules |
| **Custom nodes** | Yes (npm) | No | No |
| **Pricing model** | Per execution | Per task (step) | Per operation |

### Cost Comparison (10-step workflow, 10K runs/month)

| Platform | Cost |
|----------|------|
| **n8n (self-hosted)** | ~$55/mo (infra only) |
| **n8n (cloud)** | ~$50-60/mo |
| **Zapier** | ~$300+/mo (100K tasks) |
| **Make** | ~$65/mo (100K ops) |

### When to Choose Each

**n8n**: Self-hosting needed, technical team, complex logic, AI workflows, cost-conscious at scale
**Zapier**: Widest integrations, non-technical team, quick simple automations
**Make**: Balance of power/usability, budget-conscious, agencies

## Self-Hosting

### Docker Compose (Production)

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:16
    environment:
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: n8n
    volumes:
      - postgres_data:/var/lib/postgresql/data

  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    environment:
      DB_TYPE: postgresdb
      DB_POSTGRESDB_HOST: postgres
      DB_POSTGRESDB_DATABASE: n8n
      DB_POSTGRESDB_USER: n8n
      DB_POSTGRESDB_PASSWORD: ${POSTGRES_PASSWORD}
      N8N_ENCRYPTION_KEY: ${N8N_ENCRYPTION_KEY}
      N8N_BASIC_AUTH_ACTIVE: "true"
      N8N_BASIC_AUTH_USER: ${N8N_USER}
      N8N_BASIC_AUTH_PASSWORD: ${N8N_PASSWORD}
      GENERIC_TIMEZONE: Europe/Paris
      N8N_HOST: n8n.yourdomain.com
      N8N_PROTOCOL: https
      WEBHOOK_URL: https://n8n.yourdomain.com/
      EXECUTIONS_DATA_PRUNE: "true"
      EXECUTIONS_DATA_MAX_AGE: 168
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      - postgres

volumes:
  postgres_data:
  n8n_data:
```

### Key Environment Variables

| Variable | Description |
|----------|-------------|
| `N8N_ENCRYPTION_KEY` | Encrypts credentials (set before first boot!) |
| `DB_TYPE` | `sqlite` or `postgresdb` |
| `EXECUTIONS_MODE` | `regular` or `queue` (for scaling) |
| `EXECUTIONS_DATA_PRUNE` | Auto-delete old execution data |
| `N8N_CONCURRENCY_PRODUCTION_LIMIT` | Max concurrent executions |

### Queue Mode (Horizontal Scaling)

Requires PostgreSQL + Redis. Separates UI/scheduling from execution workers.

```
n8n-main (UI + API) → Redis (job queue) → Worker 1, Worker 2, ...
                                          ↓
                                    PostgreSQL (shared state)
```

Scale workers based on execution volume. Each worker handles `N8N_CONCURRENCY_PRODUCTION_LIMIT` concurrent jobs.

### Production Architecture (10K-100K executions/month)

```
Load Balancer (nginx/Caddy + SSL)
  ├── n8n-main (1 instance, 2 vCPU, 4GB RAM)
  ├── n8n-worker x2-4 (each 2 vCPU, 4GB RAM)
  ├── PostgreSQL (managed, 2 vCPU, 4GB RAM)
  └── Redis (managed, 1GB RAM)
```

Estimated cost: $150-300/month on major cloud providers.

### Database Choice

| Database | Use Case | Queue Mode |
|----------|----------|-----------|
| **SQLite** | Dev, low-volume | Not supported |
| **PostgreSQL** | Production | Required |
