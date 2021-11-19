---
title: Best Practices for Designing GraphQL APIs
slug: practices-designing-graphql-api
description: To design GraphQL API, there are some practices that should be followed. Let's take a look at some of them.
publishedDate: 2021-10-07T17:01:53.644Z
lastModifiedDate: 2021-10-07T17:01:53.644Z
authors:
  - saad
category: Best Practices
tags:
  - best-practices
coverImage: ''
draft: false
---

<Lead>
The GraphQL API is designed to provide you with the precise amount of data you request. With the REST API, you often encounter the problem of over-fetching and under-fetching. GraphQL solves these problems.
</Lead>

Some predefined best practices should be followed when developing a GraphQL API. Let’s take a look at some of them.

## Name All GraphQL Operations

There are two ways to create GraphQL queries. You can do it anonymously, or you can provide it with a name. The latter is the best way to do it.

You should always provide a name to GraphQL operations in your application. This will help you and your team to understand the purpose of a query. It also helps with the debugging operation.

## Only Query The Data You Need

The most significant advantage of GraphQL over REST API is its ability to fetch only the data the client needs. Nothing more, nothing less. If the query you are writing is sending more data than you need, you are over-fetching.

So when you are designing a GraphQL API, make sure that you request exactly the data you need.

## Use Fragments

You should use fragments to encapsulate related fields. The fragment can be shared across multiple operations, and this will make your queries short, consistent, and more readable than before.

## Query Global And User Data Separately

When developing an application, there is some global data that is common across all users. But there is also some user-specific data. It is a good practice that you query both types of data separately. This way, it can also be cached separately. So if a different user is now using a computer that was used by another user earlier, your app would only need to fetch the new user data and use the global data from the cache.
