---
id: overview
title: API Overview
sidebar_position: 1
---

# API Overview

The Netomi REST API gives you programmatic access to the full platform. You can submit tickets, retrieve resolutions, manage integrations, and monitor performance — all through HTTP requests.

## Base URL

`https://api.netomi.com/v1`

All endpoints are relative to this base URL.

## Authentication

The Netomi API uses Bearer token authentication. Include your API key in the `Authorization` header of every request:

```bash
Authorization: Bearer YOUR_API_KEY
```

API keys are scoped to your account and carry full permissions. Treat them like passwords. Do not expose them in client-side code or public repositories.

## Request format

All request bodies must be JSON. Set the `Content-Type` header accordingly:

`Content-Type: application/json`

## Response format

All responses return JSON. A successful response includes a `data` object. An error response includes an `error` object with a `code` and `message`.

**Success:**

```json
{
  "data": {
    "ticket_id": "tkt_abc123",
    "status": "resolved"
  }
}
```

**Error:**

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid or missing API key"
  }
}
```

## Rate limiting

The API is rate limited to 1000 requests per minute per API key. If you exceed this limit, the API returns a `429 Too Many Requests` response. The response includes a `Retry-After` header indicating when you can resume requests.

## Versioning

The current API version is `v1`. The version is included in the base URL. When breaking changes are introduced, a new version will be released and the previous version will be supported for a minimum of 12 months.

## Error codes

| Code | HTTP status | Description |
|---|---|---|
| unauthorized | 401 | Invalid or missing API key |
| forbidden | 403 | Valid key but insufficient permissions |
| not_found | 404 | Resource does not exist |
| validation_error | 422 | Request body failed validation |
| rate_limited | 429 | Too many requests |
| server_error | 500 | Internal server error |