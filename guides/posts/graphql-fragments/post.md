---
title: 'Interactive Guide to GraphQL Fragments'
description: 'GraphQL queries enable declarative data fetching but may become complicated when you want to interact with many fields. GraphQL fragments solve this problem by allowing you to reuse parts of a query. This interactive guide will explain how they work.'
authors:
    - 'ahmad-bilal'
categories:
    - interactive
tags:
    - graphql
    - fragments
    - interactive
publishedDate: 2022-02-25T14:17:11.709Z
lastModifiedDate: 2022-02-25T14:17:11.709Z
coverImage: ''
---

<Lead>

GraphQL, a query language, is an API standard for data query and manipulation. GraphQL queries enable declarative data fetching but may become complicated when you want to interact with many fields. GraphQL fragments solve this problem by allowing you to reuse parts of a query.

</Lead>

This guide is a continuation of our interactive series on GraphQL. We will recommend giving the following articles a read if you haven't already:

-   [GraphQL Queries, Fields, Arguments](https://RapidAPI.com/guides/graphql-fields-arguments).
-   [GraphQL Aliases and Variables](https://RapidAPI.com/guides/graphql-aliases-variables).
-   [GraphQL Mutations](https://RapidAPI.com/guides/graphql-mutations)
-   [GraphqL Subscriptions](https://RapidAPI.com/guides/graphql-subscriptions)
-   [GraphqL Caching (Client-side)](https://RapidAPI.com/guides/graphql-client-caching)

This guide will cover Fragments in GraphQL and how we can use them while fetching data.

## GraphQL

To understand how GraphQl works, think of it as a graph. When requested, it exposes a single "edge" of the graph, which is an endpoint. This quality enables two significant features.

1. Users can specify what they want and get exactly that in response, nothing less, nothing more. As a result, a lesser amount of data needs to be transferred from server to client, improving the performance and scalability of applications.

2. Due to the single entry point, you can pass arguments to related fields of an object or query the same object with multiple arguments in one API call.

## GraphQL Fragments

GraphQL fragments allow you to create reusable parts of a query. We are aware of the nature of GraphQL, which enables us to specify the fields we want. Due to this, we may face situations where we have two queries, and we need to ask for the same fields in both of them. Instead of specifying the same repetitive fields in different queries, we can define them once in a reusable GraphQL Fragment. A fragment can encapsulate multiple fields as well as their sub-fields.

On the surface, their importance may seem trivial, but queries and mutations of real-life applications can be very complicated, which is why fragments are used.

### Usage

Try the following playground to understand better how fragments work. Click the **Use Fragment** button to see how these fragments change queries:

<GraphQLClient type="fragments" />

The basic syntax of a fragment looks like this:

```graphql
fragment fragmentName on ObjectType {
	field1
	field2
	field3 {
		subfield1
	}
}
```

Here `ObjectType` is the name of the object type whose fields are required. A fragment can only be used for objects of the same type. Once you define the fragment, you can use it in any query or mutation using this syntax:

```graphql
...fragmentName
```

Doing so will minimize your query size, as you can see in the playground above. Fragments can also access the variables declared in the query or mutation.

## Wrap Up

Fragments offer a neat way to split complicated GraphQL queries into smaller and manageable parts. We hope that this guide helped you understand GraphQL Fragments.
