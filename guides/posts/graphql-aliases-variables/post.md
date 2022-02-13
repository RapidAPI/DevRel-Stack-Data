---
title: 'Interactive Guide to GraphQL Queries: Aliases and Variables'
description: "Let's try to understand the Aliases, Variables in GraphQL queries."
authors:
    - 'ahmad-bilal'
categories:
    - interactive
tags:
    - graphql
    - api
    - interactive
publishedDate: 2021-11-18T14:17:11.709Z
lastModifiedDate: 2021-11-18T14:17:11.709Z
coverImage: ''
draft: false
---

<Lead>
	GraphQL, a query language, is an API standard for data query and
	manipulation. GraphQL queries enable declarative data fetching and expose
	only a single endpoint that you can use to get data.
</Lead>

This guide is a continuation of our interactive series on GraphQL. In the [previous one](https://rapidapi.com/guides/graphql-fields-arguments), we learned about GraphQL queries, fields, and arguments. This guide will cover the use of aliases and variables in GraphQL queries.

## Introduction

To understand how GraphQl works, think of it as a graph. When requested, it exposes a single "edge" of the graph, which is an endpoint.

As a result, you can pass arguments to related fields or query the same object with multiple arguments in one API call.

## Aliases

What if you wanted to query the same field with different arguments? The initial thought will be to do something like this:

```graphql
{
	user(id: 2) {
		name
		username
		email
	}
	user(id: 4) {
		name
		username
		email
	}
}
```

However, this query will return an error because the query fields and response fields match. Hence there will be a conflict when deciding which one of the two arguments applies to a given field.

Aliases are used to avoid this error. You can query the same field with different arguments by using aliases. They allow you to change the name of the resulting field to prevent conflicts.

Let's change the above query using aliases:

```graphql
{
	firstUser: user(id: 2) {
		name
		username
		email
	}
	secondUser: user(id: 4) {
		name
		username
		email
	}
}
```

Now, we can get both results in one request as we are using aliases. Try the following interactive playground to understand aliases. Submit it to see the response to this query.

<GraphQLClient type="aliases" />

## Variables

Until now, we have hard-coded the arguments inside the query string, such as `id: 4`. However, in most applications, these arguments are dynamic. For example, there might be an option to look up a specific user on the client side. We could add these dynamic arguments inside the query string, but it is a bad practice. Because then, our client-side code would need to manipulate the query string dynamically at runtime and serialize it into a GraphQL-specific format.

The right way to pass dynamic arguments is by using GraphQL Variables. When sending the request, you can pass them as a separate object outside the query. See the following example:

```graphql
# Without using variables
user (id: 3) {
      id
      name
      email
   }

# Using variables
query getUser($input: ID!) {
   user (id: $input) {
      id
      name
      email
   }
}
```

To use variables for our arguments, we need to do these three things:

1. Replace hard-coded value with our variable name, like `id: $input` in the above example.

2. Declare the variable with its type to be accepted by the query, Like `$input: ID!`.

3. Pass the value for this variable in a separate dictionary when making the request. For the above query, we will pass variables in JSON like this:

    ```json
    variables: {
           "input": "3"
     }
    ```

The following interactive playground uses variables to pass arguments to the query. Enter an `id` value and submit it to see the response.

<GraphQLClient type="variables" />

## Default Variables

You can also set default values of the variables. You can assign them after the type declaration like this:

```graphql
query getUser($input: ID = 3) {
	user(id: $input) {
		id
		name
		email
	}
}
```

If no variable is provided, the `id` argument will default to the value 3.
