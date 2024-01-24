---
title: 'What is GraphQL and when you should use it'
description: With GraphQL, you get precisely the data you request. No more, no else. You have a single entry point, i.e., /graphql, that you use to get the data. In this piece, let's briefly look at it and in which cases you should use it.
publishedDate: 2021-10-04T15:41:15.688Z
lastModifiedDate: 2021-10-04T15:41:15.688Z
authors:
    - saad
categories:
    - api
tags:
    - graphql
coverImage: ''
---

<Lead>
	When you are working on a large-scale application, it often happens that you
	would need to fetch large chunks of data. Sometimes, you need to perform
	multiple API calls to get the desired results using a REST API. It is called
	under-fetching.
</Lead>

Sometimes you need a small amount of data, but instead, you get a lot of unnecessary data with a single API call. This is called over-fetching.

GraphQL exists to help you with these problems. It is a query language that allows you to read and mutate data in APIs.

## How does GraphQL work?

With GraphQL, you get precisely the data you request. No more, no else. You have a single entry point, i.e., /graphql, that you use to get the data.

On your backend, you define a schema that describes all the possible data that you may need to query in your application. The data is then later fetched using a syntax that replicates the data's return shape in JSON.

The schema is defined using the `type` keyword. The `type` can have multiple fields, and you can make a field required by putting an exclamation mark (!) in front of it. The `type Query` is the main entry point for the client, and this is where the client reads the data from and then uses it in the application.

There is also a `type` that exists to let you manipulate the data using GraphQL. It's called Mutation. Inside this `type`, you can put calls to different functions that later change your data.

When a user performs a data action from the frontend, the generated query is sent to the backend. There it gets validated against predefined schemas. So when GraphQL finds a schema against the query, it then executes the validated query.

## When To Use GraphQL

There are many scenarios where you can make use of GraphQL. Let's take a look at some of them:

-   In applications where problems of under-fetching and over-fetching exist, GraphQL can take care of it.
-   When you want to get precise data from the API using a single API, you can use GraphQL.
-   When you want to reduce the miscommunication between the client and the server, you can use GraphQL because of its strongly defined data types.
-   You can use GraphQL for applications that you know will be used by people with limited bandwidth.
