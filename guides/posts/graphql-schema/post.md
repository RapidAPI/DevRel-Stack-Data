---
title: GraphQL Schema and its Types
description: GraphQL schema is the blueprint of a GraphQl API and describes the form of the data returned by the API. Let's take a look at its type system with examples.
publishedDate: 2022-03-16T20:53:04.094Z
lastModifiedDate: 2022-03-16T20:53:04.094Z
authors:
    - ahmad-bilal
categories:
    - api
tags:
    - graphql
    - graphql-schema
coverImage: ''
---

<Lead>

GraphQL is a data query and manipulation language developed by Facebook. With GraphQL, you get precisely the data you request. No more, no less. You have a single entry point, i.e., `/graphql`, that you use to get the data.

</Lead>

## GraphQL Schema

GraphQL schema is the blueprint of a GraphQl API. It describes what data we can query from the API and how the API will return the data.

You define a schema that describes all the possible data you may need to query in your application. The schema also specifies the queries and mutations your applications can use to read or update data on the server.

## Types

It all starts from types. The graphQL schema uses the types and interactions between them. You define an object type first and add fields of different types in it like this:

```graphql
type Address {
  street: String
  code: Int!
  location: Geo
}

type Geo {
    longitude: int!
    latitude: int!
}
```

Here `Address` is an object type with fields of `street`, `code`, and `location`. The exclamation mark (!) such as `Int!` marks the field as mandatory, which means it can't be null. An object type can also have another object as its field. Like in the above example, the location field has the `Geo` object type.

GraphQL Schemas use the Schema Definition Language (SDL), which defines the following types:

### 1. Scalar types

The built-in scalar types in GraphQL include ID, Float, Int, String, and Boolean.

### 2. Object types

As discussed in the example above, these are custom types that consist of their own fields (properties). Each field can have any of the available types.

- **Query type**

It is a special object type that provides the entry points for making queries. It also defines the data returned by the query.

Consider the following example query type:

```graphql
type Query {
  posts: [Post]
  users: [User]
}
```

This type allows the client to query posts and users, like this:

```graphql
query GetPosts {
  posts {
    title
  }
}
```

- **Mutation type**

It is similar to the query type, but it provides the entry points for creating or updating data. It also defines the data returned by the mutation. For example:

```graphql
type Mutation {
  addPost(title: String!, body: String!): Post
}
```

Clients can use this mutation like this:

```graphql
mutation CreatePost {
  addBook(title: "This is a new post", body: "lorem ipsum") {
    title
  }
}
```

The above mutation will create a new post and return its title.

- **Subscription type**

This object type allows clients to fetch data from the server in real-time. Read more about subscriptions in this [interactive guide](https://RapidAPI.com/guides/graphql-subscriptions).

### 3. Enum types

Enum types behave like scalar types but with a restricted list of options. For example:

```graphql
enum SortOrder {
  ASCENDING
  DESCENDING
}
```

Now, we can use this enum in other object types, and it will only accept `ASCENDING` or `DESCENDING` as its value.

### 4. Input types

These types allow the client to pass arguments in queries or mutations.

```graphql
input UpdatePostInput {
  title: String
  body: String
}
```

Using it to change our example in the mutation type has the following effect:

```graphql
# Without Input Type
type Mutation {
  addPost(title: String!, body: String!): Post
}

# With Input Type
type Mutation {
  addPost(content: UpdatePostInput!): Post
}
```

### 5. Union and Interface types

Finally, unions and interfaces are abstract types that allow a field to have multiple object types.
