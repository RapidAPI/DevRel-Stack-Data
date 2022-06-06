---
title: 4 Things You Need To Do For Calling GraphQL APIs
description: The process of consuming GraphQL APIs is different from other types of APIs, such as REST. Here are four things you need to specify while calling a GraphQL API.

publishedDate: 2022-06-04T18:41:43.732Z
lastModifiedDate: 2022-06-04T18:41:43.732Z
authors:
    - 'ahmad-bilal'
categories:
    - api
    - graphql
tags:
    - graphql
    - method
    - query
    - endpoint
    - content-type
coverImage: ''
draft: false
---

<Lead>

GraphQL is a data query and manipulation language developed by Facebook. The process of consuming GraphQL APIs is different from other types of APIs, such as REST.

</Lead>

Before we start, let's quickly go through GraphQL and its basics.

## GraphQL

GraphQL, a query language, is an API standard for data query and manipulation. With GraphQL, you get precisely the data you request, no more, no less. Moreover, you can use a single entry point, i.e., `/graphql`, to get the data.

To understand how GraphQl works, think of it as a graph. When requested, it exposes a single "edge" of the graph, an endpoint. This quality enables users to specify what they want and get exactly that in response, nothing less, nothing more. As a result, a lesser amount of data needs to be transferred from server to client, improving the performance and scalability of applications.

## Calling GraphQL APIs

Whenever calling a GraphQL API, irrespective of the implementation, you will generally need to specify four things. So, keep the following things in mind.

### 1. HTTP METHOD

APIs use HTTP methods to perform different operations. REST APIs allow nine different HTTP methods for making requests to the server. However, we primarily use only the POST method for GraphQL APIs and include the following things in the request body:

-   Query.
-   Operation Name.
-   Variables.

### 2. Headers

We have to set the header to `content-type` of `application/json` for all GraphQL APIs. The reason is that we use queries to request data from GraphQL APIs, and these queries and their variables are sent in a JSON format.

### 3. Endpoint URL

As we discussed earlier, GraphQL exposes only a single endpoint, and you specify what you need using queries. So, we need to specify the URL for the sole GraphQL endpoint.

### 4. Query

In other API standards, especially REST, we use different HTTP methods and endpoints to get the required data. In GraphQL, we use queries to define the data we need. These queries can be in short-hand syntax or wrapped in a custom named operation and the query keyword. However, it is better to use named queries.

```graphql
# Shorthand syntax
users {
    name
}

# Named query
query getUsers {
    users {
        name
    }
}
```

So finally, we need to specify the query that includes the request and variables in a JSON structure.

<Callout
	title="Get access to Thousands of APIs"
	linkText="Sign Up"
	linkHref="https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel"
>
	RapidAPI Hub is the world’s largest API hub where you can find all kinds of
	APIs according to your need, including GraphQL.
</Callout>

## Wrap Up

We hope this guide helped you understand some fundamentals of calling GraphQL APIs in your applications. Start querying.
