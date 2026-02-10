# HTTP API Patterns & External Tool Integration

## When to Use HTTP API

- Tool without native Clay integration
- Custom API endpoints
- Tools with your own API key
- Middleware automation (n8n, Zapier, Make)

## Clay HTTP API Setup

### Configuration Steps
1. Create an HTTP API account (Headers)
2. Add headers (Authorization, Content-Type)
3. Configure the endpoint
4. Define the body (JSON)
5. Map columns

### Example: beehiiv Newsletter
```
Method: POST
Endpoint: https://api.beehiiv.com/v2/publications/{pub_id}/subscriptions
Headers:
  - Authorization: Bearer {API_KEY}
  - Content-Type: application/json
Body: {"email": {{Email}}}
```

### Example: DynaPictures (Custom Images)
```
Method: POST
Endpoint: https://api.dynapictures.com/v1/images
Headers:
  - Authorization: Bearer {{DYNAPICTURES_API_KEY}}
  - Content-Type: application/json
Body:
{
  "template_id": "your_template",
  "modifications": {
    "company_logo": "{{Company Logo URL}}",
    "person_name": "{{First Name}}",
    "background_image": "{{Ad Creative URL}}"
  }
}
```

### Example: Zapier/n8n Webhook
**Use case:** Slack notification when lead added to sequence

```
Method: POST
Endpoint: https://hooks.zapier.com/hooks/catch/xxxxx/yyyyy/
Body:
{
  "lead_name": "{{Full Name}}",
  "company": "{{Company}}",
  "email": "{{Work Email}}",
  "added_to_campaign": "{{Campaign Name}}"
}
```

## Run Settings

- Auto-update: ON/OFF
- Only run if: condition (e.g., {{Email}} exists)

## Integration Tips

1. Use native integrations when available
2. HTTP API for custom needs
3. Zapier/n8n as middleware when needed
4. Always test with one row first

## n8n/Zapier as Middleware

When Clay doesn't have a native integration:
- Use webhooks to send data from Clay to n8n/Zapier
- n8n processes and routes to final destination
- Useful for: Slack notifications, custom CRM updates, multi-step workflows

## Using Your Own API Keys

- If you have your own API key (e.g., OpenAI), connect it to Clay for free
- External sources (Zoominfo, Cognism, 6Sense) via HTTP/API = free
- Existing plans with a provider = usable for free in Clay
- Saves Clay credits significantly
