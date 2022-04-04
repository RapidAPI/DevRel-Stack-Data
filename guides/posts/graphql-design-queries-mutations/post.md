---
title: How to Define GraphQL Queries and Mutations?
description: GraphQL schema is the blueprint of a GraphQl API and describes the form of the data returned by the API. Let's see how to define queries and mutations in the GraphQL schema.
publishedDate: 2022-03-30T20:53:04.094Z
lastModifiedDate: 2022-03-30T20:53:04.094Z
authors:
    - ahmad-bilal
categories:
    - api
tags:
    - graphql
    - design
    - queries
    - mutations
coverImage: ''
---

<Lead>

GraphQL is a data query and manipulation language developed by Facebook. With GraphQL, you get precisely the data you request, no more, no less. Moreover, you can use a single entry point, i.e., `/graphql`, to get the data.

</Lead>

## GraphQL Schema

GraphQL schema is the blueprint of a GraphQl API. It describes what data we can query from the API and how the API will return the data.

You define a schema that describes all the possible data you may need to query in your application. The schema also specifies the queries and mutations your applications can use to read or update data on the server.

## Designing GraphQL Queries

Let's jump in and see how we can define queries in the GraphQL Schema.

### Object Type

It all starts from object types. First, we will define the object type we want to query and add the relevant fields to it. Let's suppose we are creating an API that fetches movies. Let's define a `Movie` object type that looks like this:

```graphql
type Movie {
	id: Int!
	title: String!
	description: String
}
```

Here `Movie` is an object type with fields of `id`, `title`, and `description`. The exclamation mark (!) sets a field as mandatory, which means it can't be null. So, the fields `id` and `title` are compulsory in this type, while `description` is optional.

### Query Type

It is a special object type that provides the entry points for making queries. All the queries are defined inside this object.

```graphql
type Query{
  # Define queries here
}
```

To get all the movies in our API, we will define a `movies` query:

```graphql
type Query {
	movies: [Movie!]!
}
```

As you can see, we also specify the data returned by the query as `[Movie!]!`. This syntax means that it will always return an array, and each element in the array will be a `Movie` object.

Now, what if we want to fetch a particular movie? We can define a `movie` query like this:

```graphql
type Query {
	movies: [Movie!]!
	movie(id: Int!): Movie
}
```

The `movie` query takes an `id` parameter, which is the movie's id we want to fetch. Then it returns a `Movie` object.

### Usage

Now, we can use these queries like this:

```graphql
# Fetches all the movies
query movies {
  id
  title
  description
}

# Fetches a particular movie
query movie(id: 200) {
  id
  title
  description
}
```

## Defining GraphQL Mutations

Like queries, you can define mutations within the `Mutation` type.

### Mutation Type

Let's say we want to allow a mutation to create a new movie. We can define a `createMovie` mutation like this:

```graphql
type Mutation {
	createMovie(title: String!, description: String): Movie
}
```

It will accept a title and description and create a new movie. Finally, it will return a `Movie` object of the newly added movie in the response.

### Usage

We can use the mutation like this:

```graphql
query createMovie(title: "The Matrix", description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.") {
  id
  title
  description
}
```

If we run this mutation, the API will return data like this:

```json
{
	"data": {
		"createMovie": {
			"id": 200,
			"title": "The Matrix",
			"description": "A computer hacker learns from mysterious rebels about the true nature ofhis reality and his role in the war against its controllers."
		}
	}
}
```

That's all. You can see how easily we can define queries and mutations in the schema. Now, you only need to create resolver functions to handle them, and your API will be good to go.
