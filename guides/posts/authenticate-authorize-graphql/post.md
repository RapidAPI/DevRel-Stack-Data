---
title: How to authenticate and authorize with GraphQL?
slug: authenticate-authorize-graphql
description: You can use REST APIs, GraphQL API, and gRPC to communicate between client and server. These communications also involve user authentications and authorization.
publishedDate: 2021-10-21T16:18:42.178Z
lastModifiedDate: 2021-10-21T16:18:42.178Z
authors:
    - saad
category: api
tags:
    - authenticate
    - authorize
    - graphql
coverImage: ''
draft: false
---

<Lead>

There are different types of API architecture available. You can use REST APIs, [GraphQL API](https://graphql.org/), and [gRPC](https://grpc.io/) to communicate between client and server. These communications also involve user authentications and authorization.

</Lead>

Let’s take a look at [GraphQL](https://graphql.org/) and how you can authenticate and authorize users using it.

## What is GraphQL?

It is a query language that allows you to read and mutate the data in APIs. With [GraphQL](https://graphql.org/), you can quickly solve the problems of under-fetching and over-fetching. You get precisely the data that you request. No more, no else. You have a single entry point, i.e., /graphql, that you use to get the data.

## GraphQL Authentication

There are different ways you can authenticate a user in GraphQL. You can use the HTTP header to pass the authentication credentials to the server or utilize JSON Web Token.

You can use [ApolloServer](https://www.apollographql.com/) for setting up GraphQL. The code below extracts the user token from the Authorization header included in each operation request. The server then processes the token and retrieves the appropriate user object for that token. Finally, it adds this object to the `context` object that is passed to every executed resolver.

Once everything is done, each resolver can use this object to determine what data the user can access and what the user can request.

```js
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
 typeDefs,
 resolvers,
 context: ({ req }) => {

   // Get the user token from the headers.
   const token = req.headers.authorization || '';

   // Try to retrieve a user with the token
   const user = getUser(token);

   // Add the user to the context
   return { user };
 },
});

server.listen().then(({ url }) => {
 console.log(`Server running at ${url}`)
});

```

## Authorization

There are different authorization methods that you can use with GraphQL. Here are some of them:

- **In Resolvers:** The individual field resolvers in GraphQL servers check the user role and then make decisions if the user is authorized or not.
- **With Data Models:** You can use the data models to put the authorization logic in one place and then use it in different areas.
- **With Custom Directives:** You can use the GraphQL schema directive to implement authorization.
