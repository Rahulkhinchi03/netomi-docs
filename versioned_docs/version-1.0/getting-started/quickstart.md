---
id: quickstart
title: Quickstart
sidebar_position: 2
---

# Quickstart

This guide gets you from zero to a working Netomi integration in under 15 minutes.

## Prerequisites

Before you start, make sure you have:

- A Netomi account with API access enabled
- An API key from the Netomi dashboard
- A tool to make HTTP requests (curl, Postman, or your preferred HTTP client)

## Step 1: Get your API key

Log in to the Netomi dashboard and navigate to **Settings > API Keys**. Create a new key and copy it somewhere safe. You will not be able to see it again after closing the modal.

## Step 2: Make your first API call

Send a test request to verify your credentials:

```bash
curl -X GET https://api.netomi.com/v1/status \
  -H "Authorization: Bearer YOUR_API_KEY"
```

A successful response looks like this:

```json
{
  "status": "ok",
  "version": "1.0",
  "timestamp": "2026-04-15T06:00:00Z"
}
```

## Step 3: Submit your first ticket

```bash
curl -X POST https://api.netomi.com/v1/tickets \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "channel": "email",
    "subject": "Reset my password",
    "body": "I cannot log in to my account.",
    "customer_email": "user@example.com"
  }'
```

## Step 4: Check the resolution

Netomi will attempt to resolve the ticket automatically. Poll the ticket status endpoint to see the outcome:

```bash
curl -X GET https://api.netomi.com/v1/tickets/TICKET_ID \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Next steps

- Read [Core Concepts](../guides/core-concepts) to understand how Netomi processes tickets
- See the [API Reference](../api-reference/overview) for the full list of endpoints