---
title: 'A complete introduction to GraphQL API.'
date: 'Feb 3 2022'
---

## A complete introduction to GraphQL API.

GraphQL is a query language that lets your client request the server to send only the required data.

GraphQL was created by developers at Facebook in 2012.

GraphQL was developed to support the complicated data structures required to show the Facebook News Feed on the mobile application.

Using GraphQL, the client can request the necessary data using a single endpoint with a defined schema.

Considering you're building a blogging platform, you will need to fetch posts, author, published date, comments, and other associated data with a particular post.

With a standard REST API, you can design such an API very easily.

But now consider that you want to display comments only on the web app, not the mobile app.

It's almost impossible to achieve this with a single REST API.

This is where GraphQL can help you.

The client can ask for the data they need, and the server will return with only that data.

GraphQL relies on a strongly typed schema.

This means that the schema acts as a contract between the client and the server.

The predefined schema allows the client to specify the exact shape of thereturned datad.

This Schema is known as Schema Definition Language.

Schema Definition Language is nothing but the syntax of writing schemas in GraphQL query language, and it's pretty intuitive.

Consider the `User` schema below written in Schema Definition Language: 👇🏻

The `User` type has two fields, `name` and `email` with type String.

```
type User {
    name: String!
    email: String!
}
```

The exclamation mark (!) at the end depicts that the fields are required.

Moving forward, Schema Definition Language allows you to establish relationships between types.

For example, a `Blog` is associated with a particular `User`.

```
type User {
    name: String!
    email: String!
    blogs: [Blog!]!
}

type Blog {
    athour: User!
}
```

There are two GraphQL operations - Queries and Mutations using which you can fetch data and save data to the GraphQL server.

### Queries

When requesting data from a GraphQL server, the client has to send some information to the server.

Based on this information, the server will send the response. This information is known as a query.

```
{
    user(id: 1){
        name
        email
    }
}
```

### Mutations

You can use a "mutation" when you want to save data to a GraphQL server.

You can create, update, and delete data from a GraphQL server using mutations.

```
{
    createUser(
        name: "John Doe",
        email: "john@doe.com",
    ) {
        name
        email
    }
}
```

The ability of GraphQL to define the exact request and response structure helps us cut down on the resources and bandwidth required to fetch data.

With that being said, this is the end of this thread. We hope you found this thread helpful.💙

Head over to [RapidAPI Hub](https://RapidAPI.com/hub) and get access to excellent GraphQL APIs.
