---
title: 'What is the difference between REST and GraphQL?'
description: 'Understand the different between REST APIs and GraphQL APIs.'
publishedDate: 2021-10-04T15:41:15.688Z
lastModifiedDate: 2021-10-04T15:41:15.688Z
authors:
  - saad
category: comparison
tags:
    - rest
    - graphql
coverImage: ''
---

<Lead>
	Different types of APIs exist nowadays. For instance, there are web APIs,
	Android APIs, REST APIs, GraphQL APIs, etc. All of these are different from
	each other in terms of usage and performance.
</Lead>

Let's take a look at what REST APIs and GraphQL APIs are and some of the differences.

## REST API

This is the most common type of API, and many people often confuse the term API with the REST API. REST APIs allow you to perform CRUD (create, read, update, and delete) operations between a client and a server. It connects your backend with your frontend so they can communicate with each other.

## GraphQL

It is a query language that allows you to read and mutate the data in APIs. With GraphQL, you can easily solve the problems of under-fetching and over-fetching. You get precisely the data that you request. No more, no else. You have a single entry point, i.e., /graphql, that you use to get the data.

## Differences Between REST And GraphQL APIs

You can use different methods to perform data operations in REST APIs. Whereas with GraphQL, you use queries and mutations to perform data operations.

With REST API, you often need to perform multiple API calls to get the desired data. Sometimes you get a lot of unnecessary data with a single API call. With GraphQL, you only get the data that you have requested.

If you have implemented the REST API in your application, you would probably have multiple endpoints to fetch different kinds of data. On the contrary, GraphQL only has a single entry point that you can use to read or manipulate other data formats.

REST APIs can leverage the caching feature. The different operations like GET, POST can be cached and stay in the browser history. But since GraphQL doesn't follow the HTTP specs and uses a single endpoint, it is then up to developers to make sure that caching is implemented.

## Final Words

Several other differences exist between REST API and GraphQL. In the end, it all comes down to the type of application you are building. If you are interested in saving bandwidth, you can use GraphQL. If you want to keep your server and client completely autonomous from one another, you can go with the REST API.
