---
title: What is GraphQL? - A Beginner's Friendly Guide
description: There are a couple of things that make GraphQL unique. This guide will help beginners understand about GraphQL.
publishedDate: 2022-04-12T14:54:54.290Z
lastModifiedDate: 2022-04-12T14:54:54.290Z
authors:
    - maham
categories:
    - graphql
tags:
    - graphql
    - rest
coverImage: ''
---

<Lead>

GraphQL is an open-source query language used to deliver data to mobile and web applications. It's similar to REST in that it is used to fetch data for the application, but the methodology for how the data is retrieved is entirely different.

</Lead>

![An Introduction to GraphQL](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9cd0c86680eea80460d2101d9c20fdbd01f48aa9/guides/posts/intro-to-graphql/images/An-Introduction-to-GraphQL.jpeg)

While REST APIs are great and most used, GraphQL introduces a new API technique that can be deployed to improve efficiency and flexibility.

There are a couple of things that make GraphQL unique. Let's take a look at what they are.

![What is GraphQL?](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9cd0c86680eea80460d2101d9c20fdbd01f48aa9/guides/posts/intro-to-graphql/images/What-is-GraphQL.jpeg)

## Requesting Data With a Single Endpoint

GraphQL can request data from multiple resources in a single request. This feature is one of the defining characteristics of GraphQL. With a standard REST API, you would have to make multiple requests to fetch data from different endpoints for each resource type, but with GraphQL, this process is simplified. There's only one endpoint, and you can query whatever data you want in and whatever format suits the bill.

![Requesting Data With a Single Endpoint](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9cd0c86680eea80460d2101d9c20fdbd01f48aa9/guides/posts/intro-to-graphql/images/Requesting-Data-With-a-Single-Endpoint.jpeg)

## Receiving Information With Predictable Structure

The ability to control exactly what information your application receives from the server with a predictable structure is one of the key features of using GraphQL. Again this differentiates GraphQL APIs from the REST APIs.

## Operations in GraphQL

There are three types of operations that GraphQL models: **Query**, **Mutation** and **Subscription.**

-   query – a read-only fetch.
-   mutation – a write followed by a fetch.
-   subscription – a long-lived request that fetches data in response to source events.

Out of these three, two operations, i.e., query and mutation, are the most common actions.

![Most Common Operations](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9cd0c86680eea80460d2101d9c20fdbd01f48aa9/guides/posts/intro-to-graphql/images/Most-Common-Operations.jpeg)

## Benefits of GraphQL

When using REST APIs, you may end up fetching data from several endpoints that are not needed. This costs more time and resources. You can avoid that with GraphQL considering there is only one endpoint, and you can write the query only to fetch the data you need.

GraphQL also simplifies this a lot by defining the schema of our API. The schema for GraphQL API establishes the structure for how the data which is populated from backend data stores is formatted and nested. Then as part of the request to the GraphQL API, we can decide exactly what data our application requires.

Further, GraphQL reduces the bandwidth and is way faster than other APIs. It is best for complex systems and microservices. Learn more about when to use GraphQL [here](https://RapidAPI.com/guides/what-is-graphql-and-when-you-should-use-it?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

![Benefits of GraphQL](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9cd0c86680eea80460d2101d9c20fdbd01f48aa9/guides/posts/intro-to-graphql/images/Benefits-of-GraphQL.jpeg)

## Wrap Up

That's pretty much it, and I hope this guide helped you understand GraphQL. If you want to learn more about GraphQL, then [click here](https://RapidAPI.com/learn/graphql?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).
