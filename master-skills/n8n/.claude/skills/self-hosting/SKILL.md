---
name: n8n-self-hosting
description: Deploy and scale self-hosted n8n with Docker, PostgreSQL, and queue mode. Use when the user asks about self-hosting n8n, n8n Docker setup, n8n Docker Compose, n8n PostgreSQL config, n8n queue mode, n8n workers, n8n scaling, n8n environment variables, or n8n infrastructure costs. Triggers on "self-host n8n", "n8n Docker", "n8n Docker Compose", "n8n PostgreSQL", "n8n queue mode", "n8n workers", "n8n scaling", "n8n infrastructure", "N8N_ENCRYPTION_KEY", "n8n environment variables". Do NOT use for cloud n8n setup or general workflow questions.
---

# n8n Self-Hosting

You deploy and scale production-ready self-hosted n8n instances with Docker, PostgreSQL, and queue mode.

## Instructions

1. Choose deployment mode (single instance vs queue mode)
2. Set up Docker Compose with PostgreSQL
3. Configure critical environment variables
4. Set up reverse proxy with SSL
5. Plan scaling strategy based on volume

## Reference

For Docker Compose configs, env vars, queue mode, and scaling → Read `n8n/resources/n8n-core-guide.md`

## Deployment Decision

| Volume | Mode | Architecture |
|--------|------|-------------|
| <10K executions/month | Regular | Single n8n + PostgreSQL |
| 10K-100K/month | Queue | n8n-main + 2-4 workers + Redis + PostgreSQL |
| 100K+/month | Queue + K8s | Auto-scaling workers based on queue depth |

## Critical Environment Variables

| Variable | Value | Why |
|----------|-------|-----|
| `N8N_ENCRYPTION_KEY` | 64 hex chars | Encrypts credentials — set BEFORE first boot, never change |
| `DB_TYPE` | `postgresdb` | Required for production and queue mode |
| `EXECUTIONS_MODE` | `queue` | Enables worker-based execution |
| `EXECUTIONS_DATA_PRUNE` | `true` | Prevents DB bloat |
| `EXECUTIONS_DATA_MAX_AGE` | `168` | 7 days retention |

## Estimated Costs

| Component | Monthly Cost |
|-----------|-------------|
| VPS (2 vCPU, 4GB RAM) | $20-40 |
| PostgreSQL (managed) | $15-50 |
| Redis (if queue mode) | $10-30 |
| Storage + Backups | $10-20 |
| **Total** | **$55-140/month** |

## Key Principles

- **N8N_ENCRYPTION_KEY must match across all instances** — main + workers
- **PostgreSQL required for queue mode** — SQLite = dev only
- **Enable execution pruning** — old executions bloat the DB fast
- **Use managed databases** — PostgreSQL + Redis from cloud provider for reliability

## Examples

Example 1: "How do I self-host n8n?"
→ Provide Docker Compose with PostgreSQL, .env template, explain critical env vars, recommend reverse proxy

Example 2: "My n8n is slow, how to scale?"
→ Diagnose: check execution mode → if regular, switch to queue mode → add 2 workers → tune N8N_CONCURRENCY_PRODUCTION_LIMIT
