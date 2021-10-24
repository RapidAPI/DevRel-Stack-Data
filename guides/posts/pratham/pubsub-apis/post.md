---
title: "Introduction to Publish/Subscribe Pattern Based API"
description: "Publish/Subscribe (Pub/Sub) is an asynchronous messaging style used in serverless and microservices architectures."
slug: "introduction-publish-subscribe-pattern-based-api"
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
  Publish/Subscribe (Pub/Sub) is an asynchronous messaging style used in serverless and microservices architectures. With this model, messages are not sent to a specific subscriber but are instead categorized to be available to all subscribers of the category.
</Lead>

### How Pub/Sub Pattern Based APIs Work

The main characteristic of Pub/Sub APIs is the existence of publishers and subscribers, as the name implies. Publishers categorize messages and those that are subscribed to a specified category receive that message.
For example,

Kafka APIs are considered to be a type of Pub/Sub based APIs. Other types of APIs and microservices can also be built around a Pub/Sub system, including REST APIs.

For example, REST APIs use POST and DELETE operations to integrate with Pub/Sub.

- POST operations publish messages and create subscriptions.
- DELETE is used to unsubscribe.

### When to Use Pub/Sub Pattern Based APIs

- Pub/Sub based APIs are a great addition to architecture systems that involve many independent or decoupled components.
- Pub/Sub based APIs can be used to provide event-driven notifications as a result of specific events that occur within the system. This style of system is also highly scalable compared to more traditional client-server infrastructure.

### Maturity of Pub/Sub Pattern Based APIs

Pub/Sub systems have been around since the late 1980s. However, Pub/Sub systems and Pub/Sub-based APIs also have more modern implementations.

One of the most notable is the Cloud Pub/Sub by Google Cloud. Based on this, we believe Pub/Sub-based APIs are here to stay, and these systems may inspire new types of APIs — like Kafka.
