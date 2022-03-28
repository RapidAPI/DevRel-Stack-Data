---
title: 'Interactive Guide to GraphQL Unions and Interfaces'
description: 'GraphQL queries enable declarative data fetching but may become complicated when you want to interact with many fields of different types. GraphQL Unions and Interfaces are abstract types that allow a field to have multiple object types. They make it easier to use the API and handle different scenarios.'
authors:
    - 'ahmad-bilal'
categories:
    - interactive
tags:
    - graphql
    - unions
    - interfaces
publishedDate: 2022-03-25T15:57:17.709Z
lastModifiedDate: 2022-03-25T15:57:17.709Z
coverImage: ''
---

<Lead>

GraphQL, a query language, is an API standard for data query and manipulation. GraphQL queries enable declarative data fetching but may become complicated when you want to interact with many fields of different types. GraphQL Unions and Interfaces are abstract types that allow a field to have multiple object types. They make it easier to use the API and handle different scenarios.

</Lead>

This guide is a continuation of our interactive series on GraphQL. We will recommend giving the following articles a read if you haven't already:

-   [GraphQL Queries, Fields, Arguments](https://RapidAPI.com/guides/graphql-fields-arguments).
-   [GraphQL Aliases and Variables](https://RapidAPI.com/guides/graphql-aliases-variables).
-   [GraphQL Fragments](https://RapidAPI.com/guides/graphql-fragments).
-   [GraphQL Mutations](https://RapidAPI.com/guides/graphql-mutations)
-   [GraphqL Subscriptions](https://RapidAPI.com/guides/graphql-subscriptions)
-   [GraphqL Caching (Client-side)](https://RapidAPI.com/guides/graphql-client-caching)

This guide will cover the abstract types in GraphQL and how we can use them while fetching data.

## GraphQL

To understand how GraphQl works, think of it as a graph. When requested, it exposes a single "edge" of the graph, an endpoint. This quality enables two significant features.

1. Users can specify what they want and get exactly that in response, nothing less, nothing more. As a result, a lesser amount of data needs to be transferred from server to client, improving the performance and scalability of applications.

2. Due to the single entry point, you can pass arguments to related fields of an object or query the same object with multiple arguments in one API call.

## GraphQL Unions

Using GraphQL Unions, we can unify completely different types into a single type. They are useful when you want to use a single field to represent multiple types. The types may or may not have overlapping fields. Take a look at the following types as an example:

```graphql
type Book {
	id: ID!
	title: String!
	author: String!
}

type Movie {
	id: ID!
	title: String!
	director: String!
}
```

Each of these types has its own fields, but we can add them to a union type which can resolve to either one of these types. We can define the union like this:

```graphql
union Media = Book | Movie
```

Now, we can use the union type in our query with the help of [fragments](https://RapidAPI.com/guides/graphql-fragments):

```graphql
query {
	search(text: "William Shakespeare") {
		title
		... on Book {
			__typename
			author
		}
		... on Movie {
			__typename
			director
		}
	}
}
```

So, this search query can return either an author if the result is a book or the director if the result is a movie. Here `__typename` is used to identify the type of the result (Book or Movie).

Try the following interactive playground to see how the union type works:

<GraphqlUnionsInterfaces unions />

## GraphQL Interfaces

If the fields of multiple types overlap, we can use the Interface type to define a common set of fields. This way, we would not have to specify the same fields in multiple types, and the schema will remain clean. So for the Movie and Book types above, we can define the following interface:

```graphql
interface Media {
	id: ID!
	title: String!
}
```

And the types can implement this interface like this:

```graphql
type Book implements Media {
	author: String!
}

type Movie implements Media {
	director: String!
}
```

Try the following interactive playground to see how the interface type works:

<GraphqlUnionsInterfaces interfaces />

## Wrap Up

Unions help when we want to combine different types into a single type, while Interfaces help when we want to define a common set of fields for multiple types. You can use it to make your GraphQL API more robust.
