---
id: core-concepts
title: Core Concepts
sidebar_position: 1
---

# Core Concepts

Before building a production integration, it helps to understand how Netomi processes a ticket from the moment it arrives to the moment it is resolved or escalated.

## How Netomi processes a ticket

Every ticket goes through three stages:

**1. Intake**
The ticket enters Netomi through a channel connector (email, chat, SMS, or API). Netomi normalises the input into a structured format regardless of the source channel.

**2. Resolution attempt**
Netomi's AI model attempts to match the ticket to a known resolution pattern. If the confidence score is above the configured threshold, the response is sent automatically. If not, the ticket is flagged for escalation.

**3. Escalation or closure**
Resolved tickets are closed and logged. Unresolved tickets are escalated to a human agent through the configured helpdesk integration.

## Key concepts

### Channels
A channel is the surface through which a customer contacts support. Netomi supports email, live chat, SMS, and voice. Each channel has its own connector configuration.

### Resolution confidence
Every AI response has a confidence score between 0 and 1. You configure the threshold above which Netomi responds automatically. A threshold of 0.85 means Netomi only auto-resolves tickets it is 85% or more confident about.

### Escalation paths
When a ticket cannot be resolved automatically, Netomi routes it to a human agent. You configure escalation paths per channel and per ticket category.

### Intents
An intent is a category of customer request that Netomi has been trained to recognise. Examples include password reset, order status, refund request, and account cancellation. You can add custom intents through the dashboard.

### Entities
Entities are structured data extracted from the ticket. For example, an order number, a date, or a product name. Netomi uses entities to personalise responses and route tickets correctly.

## What this means for your integration

When you send a ticket to Netomi via the API, you are feeding it into this pipeline. The response you get back will include the resolution status, the confidence score, and the escalation path if applicable. Design your integration around these three outcomes.