---
title: "What is a Webhook"
description: "No request is required for a webhook. Instead, the response is sent whenever a specified event occurs."
slug: "webhook"
authors:
  - pratham
category: api
tags:
  - api
publishedDate: 2021-10-12T08:00:00+08:00
lastModifiedDate: 2021-10-12T08:00:00+08:00
coverImage: ""
---

<Lead>
  A webhook is an API concept that's growing in popularity. But in webhooks, no request is required. Instead, the response is sent whenever a specified event occurs.
</Lead>

## API vs. Webhook

Webhooks provide similar functionality as APIs do but they work differently.

With a standard REST API, you send a request and get a response.
However, no request is required for a webhook. Instead, the response is sent whenever a specified event occurs.

## How Webhooks Work

When a specified event occurs, a webhook makes an HTTP request to a designated URL. This allows you to push data to your application the moment a particular event happens.

## When to Use Webhooks

Webhooks are commonly used when real-time data is required, but the data changes relatively infrequently.

Instead of sending repeated API requests to get live data, a webhook can be triggered every time there is an update.

Webhook can be triggered when there is an update, and this will ensure you have accurate data without having to make frequent API requests, which can be costly or use a lot of bandwidth.

Webhooks are also used to create notifications that are triggered by specific events, making them very common for e-commerce, communication, social media, and other platforms you probably use every day.

## Webhook Maturity

Webhooks are the second most commonly used technology, right behind REST APIs. Webhooks are also used by many of today’s leading software companies, including Twilio, Square, and MailChimp — so we believe they are here to stay.
