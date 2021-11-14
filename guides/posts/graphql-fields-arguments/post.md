---
title: "Interactive Guide to GraphQL Queries: Fields and Arguments"
description: "GraphQL queries enable declarative data fetching and expose only a single endpoint that you can use to get data."
slug: "graphql-fields-arguments"
authors:
  - ahmadBilal
category: api
tags:
  - graphql
  - api
  - interactive
publishedDate: 2021-11-12T14:17:11.709Z
lastModifiedDate: 2021-11-12T14:17:11.709Z
coverImage: ""
draft: false
---

<Lead>
    GraphQL, a query language, is an API standard for data query and manipulation. GraphQL queries enable declarative data fetching and expose only a single endpoint that you can use to get data.
</Lead>

This guide will cover the ins and outs of GraphQL queries and how we can use them to fetch data.

## Introduction

To understand how GraphQl works, think of it as a graph. When requested, it exposes a single "edge" of the graph, which is an endpoint. This quality enables two significant features.

1. Users can specify what they want and get exactly that in response, nothing less, nothing more. As a result, a lesser amount of data needs to be transferred from server to client, improving the performance and scalability of applications.

2. Due to the single entry point, you can pass arguments to related fields of an object or query the same object with multiple arguments in one API call.

Let's take a deep dive to understand how these queries work.

## Queries

In other API standards, especially REST, you have different methods like GET, POST, PUT, etc. In GraphQL, you use queries to fetch data. These queries can be in short-hand syntax or wrapped in a custom named operation along with the query keyword.

```sql
// Shorthand syntax
users {
    name
}

// Named query

query getUsers {
    users {
        name
    }
}
```

Here `getUsers` is just a name we assign to the query operation to avoid ambiguity. Here is an example response to the above queries:

```JSON

{
  "data": {
    "users": [
        {
          "name": "Leanne Graham"
        },
        {
          "name": "Ervin Howell"
        },
      ]
  }
}
```

In the above query, `name` is a field.

## Fields

GraphQL queries are designed to specify the fields you want to request. Try the following interactive playground by adding or removing fields from the query. Submit it to see what effect the fields make on the response.

<GraphQLClient type="fields" />

You can tell that fields shape the responses in GraphQL as the request and response bodies are similar. Clients specify their expectations for the data to the server using these fields. This specification of fields allows GraphQL to avoid over-fetching issues. A similar REST API will return all the fields for each user, which can be detrimental to performance.

Each field can further be an object having two or more fields. This is the area where GraphQL shines. Like above, you can specify a selection for these subfields as well. Take a look at the following query:

```sql

users {
    name
    posts {
        title
    }
}
```

This query will return the names of users, along with only the titles of their posts.

## Arguments

In GraphQL, you can pass arguments to any field provided that it is specified in the schema. Try the following playground to see how arguments work:

<GraphQLClient type="arguments" />

RESTful APIs allow you to pass arguments only to a single endpoint. GraphQL enables you to give arguments for a field and its sub-fields in a single call. As a result, the server returns transformed data and eliminates the need to make multiple API calls. For example, the following query will return all the unfinished tasks of a selected user.

```sql
{
  user(id: "300") {
    name
    tasks(finished: false)
  }
}
```

For a field to accept arguments, it must have a supporting logic specified in the schema. Most of the time, selective fields such as `ID` are enabled to accept arguments. Therefore, in case your arguments are not being processed, make sure to check the schema to see whether it is supported or not.
