---
id: endpoints
title: Endpoints
sidebar_position: 2
---

# Endpoints

## Tickets

### Submit a ticket

`POST /tickets`

Creates a new ticket and runs it through the Netomi resolution pipeline.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| channel | string | Yes | Source channel. One of `email`, `chat`, `sms`, `voice` |
| subject | string | Yes | Ticket subject line |
| body | string | Yes | Full ticket content |
| customer_email | string | Yes | Customer's email address |
| priority | string | No | One of `low`, `normal`, `high`. Defaults to `normal` |
| metadata | object | No | Custom key-value pairs attached to the ticket |

**Example request:**

```bash
curl -X POST https://api.netomi.com/v1/tickets \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "channel": "email",
    "subject": "Where is my order?",
    "body": "I placed an order 5 days ago and have not received it.",
    "customer_email": "customer@example.com",
    "priority": "high"
  }'
```

**Example response:**

```json
{
  "data": {
    "ticket_id": "tkt_abc123",
    "status": "processing",
    "created_at": "2026-04-15T06:00:00Z"
  }
}
```

---

### Get a ticket

`GET /tickets/:id`

Returns the current state of a ticket including resolution status and confidence score.

**Example request:**

```bash
curl -X GET https://api.netomi.com/v1/tickets/tkt_abc123 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Example response:**

```json
{
  "data": {
    "ticket_id": "tkt_abc123",
    "status": "resolved",
    "resolution": "Automated response sent to customer.",
    "confidence": 0.94,
    "channel": "email",
    "created_at": "2026-04-15T06:00:00Z",
    "resolved_at": "2026-04-15T06:00:03Z"
  }
}
```

---

### List tickets

`GET /tickets`

Returns a paginated list of tickets.

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| status | string | Filter by `processing`, `resolved`, or `escalated` |
| channel | string | Filter by channel |
| limit | integer | Number of results per page. Max 100. Defaults to 20 |
| cursor | string | Pagination cursor from previous response |

---

## Webhooks

### Register a webhook

`POST /webhooks`

Registers a URL to receive Netomi events.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| url | string | Yes | The endpoint URL to receive events |
| events | array | Yes | List of events to subscribe to |

**Supported events:**

| Event | Description |
|---|---|
| ticket.created | Fired when a new ticket is submitted |
| ticket.resolved | Fired when a ticket is resolved automatically |
| ticket.escalated | Fired when a ticket is sent to a human agent |

---

## Status

### Check API status

`GET /status`

Returns the current API status. Useful for health checks and monitoring.

**Example response:**

```json
{
  "status": "ok",
  "version": "1.0",
  "timestamp": "2026-04-15T06:00:00Z"
}
```