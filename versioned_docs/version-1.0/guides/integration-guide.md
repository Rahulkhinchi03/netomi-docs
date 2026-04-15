---
id: integration-guide
title: Integration Guide
sidebar_position: 2
---

# Integration Guide

This guide covers how to connect Netomi to your existing support stack. Most integrations follow the same pattern: configure a channel connector, map your data fields, and test the escalation path before going live.

## Supported integrations

Netomi connects natively with the following platforms:

- **Helpdesks:** Zendesk, Freshdesk, Salesforce Service Cloud
- **CRMs:** Salesforce, HubSpot
- **Chat platforms:** Intercom, Drift, LiveChat
- **Custom systems:** via REST API and webhooks

## Setting up a Zendesk integration

### Step 1: Connect your Zendesk account

In the Netomi dashboard, go to **Integrations > Helpdesks > Zendesk**. Enter your Zendesk subdomain and generate an API token from your Zendesk admin panel. Paste the token into Netomi and click **Verify Connection**.

### Step 2: Map your ticket fields

Netomi needs to know which Zendesk fields correspond to its internal fields. At minimum, map the following:

| Netomi field | Zendesk field |
|---|---|
| subject | Subject |
| body | Description |
| customer_email | Requester email |
| priority | Priority |

### Step 3: Configure escalation

When Netomi cannot resolve a ticket, it needs to know where to send it. Under **Escalation Settings**, select the Zendesk group or agent queue that should receive unresolved tickets.

### Step 4: Test the connection

Use the built-in test tool to send a sample ticket through the integration. Verify it appears in Zendesk with the correct fields mapped.

## Setting up a webhook integration

If you are using a custom helpdesk or internal system, use webhooks to receive Netomi events.

### Register a webhook endpoint

```bash
curl -X POST https://api.netomi.com/v1/webhooks \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-system.com/webhooks/netomi",
    "events": ["ticket.resolved", "ticket.escalated"]
  }'
```

### Webhook payload structure

```json
{
  "event": "ticket.resolved",
  "ticket_id": "tkt_abc123",
  "resolution": "Automated response sent",
  "confidence": 0.92,
  "timestamp": "2026-04-15T06:00:00Z"
}
```

### Securing your webhook

Netomi signs every webhook payload with an HMAC-SHA256 signature using your webhook secret. Verify the signature on your server before processing the payload.

## Going live checklist

Before enabling Netomi in production, confirm the following:

- Confidence threshold is set appropriately for your use case
- Escalation path routes to the correct agent queue
- All ticket fields are mapped correctly
- Webhook endpoint is verified and signature validation is in place
- You have tested at least one resolved ticket and one escalated ticket end to end