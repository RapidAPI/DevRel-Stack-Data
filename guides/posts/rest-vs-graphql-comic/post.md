---
title: What's the difference between REST and GraphQL?
description: Let's take a look at how REST and GraphQL function, their differences, and which you should choose to use.
publishedDate: 2022-04-28T20:53:04.094Z
lastModifiedDate: 2022-04-28T20:53:04.094Z
authors:
    - emina
categories:
    - api
tags:
    - api
coverImage: ''
---

<Lead>
	REST and GraphQL are both API design styles. Let's take a look at how REST and GraphQL function, their differences, and which you should choose to use.
</Lead>

![REST vs GraphQL - What's the difference?](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/rest-vs-graphql-comic/images/1-rest-vs-graphql-cover.jpeg)

### Query Language vs Architectural Style

GraphQL is a query language that can request specific data from a server, represented as a fishing rod. REST is an architectural style that is popular in REST APIs used across the web. Here it is represented as a fishing net.

![REST vs GraphQL](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/rest-vs-graphql-comic/images/2-rest-vs-graphql-overview.jpeg)

### REST

REST APIs return data from a server in a way that returns the whole data set. This is represented as a fishing net catching a school of fish all together.

![REST API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/rest-vs-graphql-comic/images/3-rest-details.jpeg)

### GraphQL

GraphQL is represented as a single fish being caught on a hook, the same way GraphQL can return specific data. GraphQL does this thanks to schema definition language (SDL), and only requiring a single endpoint.

![GraphQL](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/rest-vs-graphql-comic/images/4-graphql-details.jpeg)

### Advantages

The advantages of REST are that its easy to use, flexible and scalable, and client and server independent. On the other hand, GraphQL is fast, requires less bandwidth, and can be tailored to your data needs.

![GraphQL and REST summary](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/rest-vs-graphql-comic/images/5-summary.jpeg)

### Which should you choose?

You should choose between GraphQL and REST based on your application's needs. The comic shows the fishing net being used to sell fish at a market, and the single fish from the hook being fed to a cat, representing how data requirements differ.

In general, GraphQL is more suitable for mobile applications and microservices, or where bandwidth might be a concern. REST APIs are fast, familiar, and provide everything a developer needs from an API service.

![GraphQL and REST](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/rest-vs-graphql-comic/images/6-which-should-you-use.jpeg)
