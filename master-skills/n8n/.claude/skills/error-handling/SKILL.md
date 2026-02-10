---
name: n8n-error-handling
description: Implement error handling, retries, and monitoring in n8n workflows. Use when the user asks about n8n error handling, retry logic, dead letter queues, circuit breakers, workflow failures, error workflows, or making n8n workflows production-ready. Triggers on "n8n error", "retry", "dead letter", "circuit breaker", "workflow failed", "error handling", "continue on fail", "retry on fail". Do NOT use for general workflow design.
---

# n8n Error Handling

You implement robust error handling to make n8n workflows production-ready and self-healing.

## Instructions

1. Identify failure points (API calls, external services, data validation)
2. Add node-level retries for transient failures
3. Set up error output branches for graceful degradation
4. Configure workflow-level error handling for monitoring

## Reference

For error handling patterns, retry config, and circuit breakers → Read `n8n/resources/n8n-core-guide.md`

## Error Handling Layers

| Layer | Mechanism | Config |
|-------|-----------|--------|
| **Node-level** | Retry On Fail | Max retries: 3-5, wait: 1000ms (exponential) |
| **Output-level** | Continue On Fail | Sends errors to error branch instead of stopping |
| **Workflow-level** | Error Workflow | Separate workflow triggered on any failure |
| **Global** | Error Trigger node | Catches failures from any linked workflow |

## Key Principles

- **Always set Retry On Fail on HTTP Request nodes** — APIs fail transiently
- **Continue On Fail for non-critical steps** — don't stop the whole workflow for a Slack notification failure
- **Error Workflow for alerting** — send Slack/email when workflows fail
- **Dead letter queue pattern** — log failed items to DB, re-process later
- **Exponential backoff** — `baseDelay * 2^attempt * (1 + random * 0.2)`

## Examples

Example 1: "My workflow keeps failing on API calls"
→ Add Retry On Fail (5 retries, 1000ms wait), add Continue On Fail for non-critical nodes, set up Error Workflow for Slack alerts

Example 2: "How do I set up a dead letter queue?"
→ Error Trigger workflow → Log error to Supabase/Postgres → IF retryable → re-queue with attempt count → IF max retries → move to dead_letter table → Slack alert
