---
title: Best Practices for GraphQL API Security
description: With the rise of APIs, API security demands more focus than ever. GraphQL APIs are a tad different from conventional REST APIs, so let's discuss some practices specifically for GraphQL APIs.
authors:
    - 'ahmad-bilal'
categories:
    - bestPractices
tags:
    - graphql
    - api
    - security
    - best-practices
publishedDate: 2022-03-29T14:17:11.709Z
lastModifiedDate: 2022-03-29T14:17:11.709Z
coverImage: ''
draft: false
---

<Lead>

With the rise of APIs, API security demands more focus than ever. GraphQL APIs are a tad different from other APIs like REST, so this guide will share some practices specifically for securing GraphQL APIs.

</Lead>

## GraphQL APIs

GraphQL, a query language, is an API standard for data query and manipulation. GraphQL queries enable declarative data fetching and expose only a single endpoint that you can use to get data.

To understand how GraphQl works, think of it as a graph. When requested, it exposes a single "edge" of the graph, which is an endpoint.

## Best Practices

Here are a few good practices to ensure a robust GraphQL API implementation.

### Use Depth Limiting

As mentioned earlier, GraphQL allows you to specify the exact data you want by nesting the fields. While this is an advantage, it can also be a bad thing. Consider the following query that fetches the posts of a user:

```graphql
{
  user(id: '12') {
    posts {
      title
    }
  }
}
```

An attacker can use such nesting to create complex cyclical queries like this:

```graphql
# Depth : 7+
query largeNestedQuery {
  user(id: "12") {
    posts {
      user {
        posts {
          user {
            posts {
              user {
                  # and more..
              }
            }
          }
        }
      }
    }
  }
}
```

As you can see, this query is several levels deep, and it can create a big loop. Queries like this are computationally expensive and may render your API unresponsive. Thus, to protect the API from such queries, you should limit the nesting depth.

You can set a specific number (e.g., 7) to limit the nesting depth for your API. Then, if a query has more than seven levels of nesting, it will be rejected.

### Use Timeout

Depth limiting is not always practical, so another thing you can do is to set a time limit for the queries. If a query takes longer than the time limit, a timeout will occur and reject it. So, a GraphQL server must implement a timeout to secure the API from slow and malicious queries.

### Rate Limiting

Other than limiting the time and depth of the queries, you can also limit the number of queries allowed in a specific time window. This process is called rate limiting, but unlike REST APIs it is not very straightforward for GraphQL APIs.

The reason is that in GraphQL, you can have several requests inside a single query. So, a single GraphQL query can have an equal cost as a hundred REST calls. Such a query will follow your rate limit (such as five requests per minute), but it will be very costly for your server.

So, GraphQL rate limiting is a bit more complicated. For effective rate limiting, you can use a cost-based algorithm to apply the rate limit as GitHub does with their [GraphQL API](https://docs.github.com/en/graphql/overview/resource-limitations#rate-limit).

### Do Cost Analysis of Queries

As the name suggests, cost analysis estimates the cost of a query. It restricts a query if it is computationally expensive. There are different ways to determine the query cost, and they depend on the API in question.

### Use Pagination

If you are fetching large amounts of data, it is always good to use pagination. It limits the number of resources the clients can access in a single request. If we don't use pagination, a query for all the resources in a big collection may slow down or crash your server. You can set pagination limits to avoid this. For example, if you have a pagination limit of 100, the first query will return an error:

```graphql
InvalidQuery {
  posts(first: 500) {
    title
    body
  }
}

ValidQuery {
  posts(first: 100) {
    title
    body
  }
}
```

### Protect Against Batch Requests

[GraphQL Aliases](https://rapidapi.com/guides/graphql-aliases-variables#aliases) allow you to query the same field with different arguments inside a single query. Without aliases, the query will return an error. This is called batching, and you can try it out here:

<GraphQLClient type="aliases" />

It is a great feature, but it can be dangerous as well. Clients may use excessive batch requests to intentionally slow down the API or scrape data from the API. Take a look at the following query, which uses aliases to query all the data of `users` in a single request:

```graphql
query BadQuery {
  alias1: users { subField1 subField2 ...}
  alias2: users { subField1 subField2 ...}
  ...
  alias100: users { subField1 subField2 ...}
  ...
  alias1000: users { subField1 subField2 ...}
  ...
}
```

We can avoid this vulnerability by implementing effective rate and cost limits.

## Final Note

That's pretty much it. We hope that this guide will help you keep your GraphQL API secure and performant.
