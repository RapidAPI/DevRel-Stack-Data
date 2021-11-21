---
title: Introduction To API Rate Limiting
slug: api-rate-limiting
description: API Rate Limiting is the process through which you limit the amount of traffic coming to your API by a single IP address.
publishedDate: 2021-11-19T18:41:43.732Z
lastModifiedDate: 2021-11-19T18:41:43.732Z
authors:
    - saad
category: api
tags:
    - rate-limiting
    - api
coverImage: ''
draft: false
---

<Lead>

When designing an API, you follow various best practices to ensure your API’s performance and success. Some of them include using the HTTP status codes, endpoint nesting, SSL certificate, using JSON for communication, etc. Another critical practice that plays a crucial role in your site’s uptime is rate-limiting.

</Lead>

Let’s take a look at it.

## What is API Rate Limiting?

It is the process through which you limit the amount of traffic coming to your API by a single IP address. API rate limiting also protects your site from Distributed Denial of Service (DDoS) attacks. If the attacker tries to tank your server by launching a DDoS attack, the rate-limiting will stop addressing the API requests after reaching a certain threshold.

The API Rate Limiting also helps to make your API scalable. If your API becomes popular out of the blue, there will be unexpected spikes of traffic that will cause lag. Thus, having rate-limiting will keep your API going for other developers.

## Types of Rate Limiting

There are two approaches to rate limiting. Let’s take a look at them.

### Key-level Rate Limiting

This rate-limiting level is more focused on controlling traffic from individual IP addresses to ensure that users do not go above their prescribed limit.

### API-Level Rate Limiting

This rate-limiting type deals with all the traffic coming to the API from all the users. It is to ensure that the overall API rate limit does not exceed.

## Methods of API Rate Limiting

Here are some of the methods you can use for API rate limiting.

- **Hard Stop:** Your API consumers will get an error when they call the API if they are over the limit.
- **Soft Stop:** You can implement a small period where the API calls will continue to succeed after the limit has been reached. You can use this period to let your API consumer know that they may have to subscribe to a new package.
- **Throttled Stop:** Another thing you can implement is to slow down the response time once the user has reached the limit.
