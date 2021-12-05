---
title: How to implement Rate Limiting to your API on RapidAPI Hub?
description: Rate Limiting is the process through which you limit the number of requests coming to your API in a certain amount of time.
publishedDate: 2021-12-03T18:41:43.732Z
lastModifiedDate: 2021-12-03T18:41:43.732Z
authors:
    - ahmadBilal
categories:
    - api
tags:
    - rate-limiting
    - api
    - rapidapi
coverImage: ''
draft: false
---

<Lead>

Rate Limiting is the process through which you limit the number of requests coming to your API in a certain amount of time. For example, you can set the number of requests allowed per hour.

</Lead>

APIs can slow down or even crash if they receive too many requests within a timeframe. Rate Limiting allows API providers to keep their APIs running for all users by controlling the number of requests.

Rate Limiting is essential to ensure the performance and scalability of an API. Many APIs also utilize rate-limiting to prevent Distributed Denial of Service (DDoS) attacks. All in all, rate-limiting is a critical defensive measure for APIs to protect against excessive use.

## Types of Rate Limiting

Two different approaches are used to implement rate-limiting. They are as follows.

### API-Level Rate Limiting

This rate-limiting type deals with all the traffic coming to the API from all the users. It is to ensure that the overall API rate limit does not exceed.

### Key-level Rate Limiting

Key-level rate limiting is more focused on controlling traffic from individual IP addresses to ensure that users do not go above their prescribed limit. It is the most common approach.

## Implementing Rate Limiting through RapidAPI Hub

[RapidAPI Hub for Providers](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) makes it very easy for you to manage your APIs. You can concentrate on building your APIs, and RapidAPI will cover the rest, including rate-limiting.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/rapidapi-hub-provider/introduction"
>
	Learn more about it in this interactive guide.
</Callout>

As an API provider on RapidAPI, you can choose to implement a Rate Limit to cap the API access. Because many providers use a pricing strategy that includes multiple price plans, you can also apply different rate limits to different plans accordingly.

![Example of different rate limits for plans](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-rate-limit/images/example.png)

### Adding the limit

Let's go ahead and see how we can implement rate-limiting. Navigate to the [Provider Dashboard](https://rapidapi.com/provider?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). Inside the API you want to rate limit, go to **Definition** and click on the **Plans and Pricing** tab.

![Plans and Pricing Tab](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-rate-limit/images/plans-tab.png)

Scroll down, and you will see your plans listed. To implement rate limiting on a specific plan, you can click the **edit** button.

![Edit a plan](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-rate-limit/images/edit-plan.png)

Let's add it to the basic plan by clicking the edit button. First, toggle the Rate Limit switch to enable it. Now, you can specify the number of requests and the timeframe.

![Specify the Limit](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/how-to-rate-limit/images/add-limit.png)

Save your changes once you are done. That's all. As you can see, it is pretty simple to apply rate limits in RapidAPI.
