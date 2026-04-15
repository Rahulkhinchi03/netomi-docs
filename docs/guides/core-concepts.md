---
id: core-concepts
title: Core Concepts
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Core Concepts

Before building a production integration, it helps to understand how Netomi processes a ticket from the moment it arrives to the moment it is resolved or escalated.

## How Netomi processes a ticket

Every ticket goes through three stages:

:::note Pipeline overview
Intake → Resolution attempt → Escalation or closure
:::

**Stage 1 — Intake**

The ticket enters Netomi through a channel connector (email, chat, SMS, or API). Netomi normalises the input into a structured format regardless of the source channel.

**Stage 2 — Resolution attempt**

Netomi's AI model attempts to match the ticket to a known resolution pattern. If the confidence score is above the configured threshold, the response is sent automatically. If not, the ticket is flagged for escalation.

**Stage 3 — Escalation or closure**

Resolved tickets are closed and logged. Unresolved tickets are escalated to a human agent through the configured helpdesk integration.

:::tip
Design your integration around these three outcomes: resolved, escalated, and processing. Every ticket ends in one of these states.
:::

---

## Key concepts

### Channels

A channel is the surface through which a customer contacts support. Netomi supports four channels:

| Channel | Description | Typical use case |
|---|---|---|
| Email | Asynchronous ticket submission | Support queues, billing questions |
| Chat | Real-time messaging | Live support, onboarding assistance |
| SMS | Mobile text messaging | Order updates, appointment reminders |
| Voice | Phone-based support | Complex issues, escalations |

---

### Resolution confidence

Every AI response has a confidence score between 0 and 1. You configure the threshold above which Netomi responds automatically.

<Tabs>
  <TabItem value="conservative" label="Conservative (0.90+)" default>

  Netomi only auto-resolves tickets it is 90% or more confident about. More tickets escalate to human agents. Recommended for sensitive domains like billing, legal, or healthcare.

```json
  {
    "confidence_threshold": 0.90
  }
```

  </TabItem>
  <TabItem value="balanced" label="Balanced (0.80)">

  A balance between automation and human oversight. Suitable for most general support use cases.

```json
  {
    "confidence_threshold": 0.80
  }
```

  </TabItem>
  <TabItem value="aggressive" label="Aggressive (0.70)">

  Netomi auto-resolves a higher volume of tickets. Recommended only after validating resolution quality on a sample of tickets.

```json
  {
    "confidence_threshold": 0.70
  }
```

  </TabItem>
</Tabs>

---

### Escalation paths

When a ticket cannot be resolved automatically, Netomi routes it to a human agent. You configure escalation paths per channel and per ticket category.

:::warning
Always test your escalation path before going live. An unresolved ticket with no escalation path configured will be silently dropped.
:::

---

### Intents and entities

<details>
<summary>What are intents?</summary>

An intent is a category of customer request that Netomi has been trained to recognise. Examples include password reset, order status, refund request, and account cancellation. You can add custom intents through the dashboard.

</details>

<details>
<summary>What are entities?</summary>

Entities are structured data extracted from the ticket — an order number, a date, or a product name. Netomi uses entities to personalise responses and route tickets correctly.

</details>

---

## Quick reference

| Concept | What it does | Where to configure |
|---|---|---|
| Channel | Source of the ticket | Integrations dashboard |
| Confidence threshold | Controls auto-resolution rate | Settings > AI Configuration |
| Escalation path | Routes unresolved tickets to agents | Settings > Escalation |
| Intent | Category of customer request | AI > Intent Management |
| Entity | Structured data extracted from ticket | AI > Entity Management |