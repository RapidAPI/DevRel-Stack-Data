---
title: What is Schema Definition Language (or SDL)?
description: ''
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:32:39.415Z
draft: false
coverImage: ''
points: 10
---

Schema Definition Language is nothing but the syntax of writing schemas in GraphQL query language, and it's pretty intuitive.

Consider the `User` schema below written in Schema Definition Language:

```graphql
type User {
	name: String!
	email: String!
}
```

The `User` type has three fields, `name`, `email`, and `blogs`. The `name` and `email` have type `String`.

<Callout>

The exclamation mark (`!`) depicts that the fields are _required_.

</Callout>

Schema Definition Language allows you to establish relationships between types. For example, a `Blog` is associated with a particular `User`.

```graphql
type User {
	name: String!
	email: String!
	blogs: [Blog!]!
}

type Blog {
	author: User!
}
```

Click on the 'Add "name" field' button in the component below to construct the syntax of a simple blog application.

<GraphQLSDL />
