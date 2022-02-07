---
title: Introduction to GraphQL Subscriptions
description: GraphQL Subscriptions provide a way to fetch data from the server in real-time. A subscription is a continuously living request that pushes data to the client whenever a specific event happens.
authors:
    - ahmadBilal
categories:
    - interactive
    - api
tags:
    - graphql
    - api
    - subscriptions
publishedDate: 2022-01-29T14:17:11.709Z
lastModifiedDate: 2022-01-29T14:17:11.709Z
coverImage: ''
draft: false
---

<Lead>
	GraphQL, a query language, is an API standard for data query and
	manipulation. While GraphQL Queries are used to fetch data immediately,
	GraphQL Subscriptions provide a way to fetch data in real-time when a
	specific event happens.
</Lead>

If you are new to GraphQL, we recommend you to take a look at [GraphQL Queries](https://RapidAPI.com/guides/graphql-fields-arguments) before diving into Subscriptions.

## GraphQL Subscriptions

GraphQL subscriptions provide a way to fetch data from the server in real-time. A subscription is basically a continuously living request that pushes data to the client whenever a specific event happens.

## Real-Time Updates

Subscriptions are unique in the way they fetch data. They are queries that can update their results whenever a particular event occurs on the server-side. Because of their long-lived nature, they use the WebSocket protocol instead of HTTP.

Click the **Start Subscription** button in the interactive component below to see how subscription differs from a normal query. You will see how the subscription is able to fetch real time updates to the data.

<LearnGraphqlSubscriptions />

## Applications

GraphQL subscriptions are mostly used in cases where data is being updated in real-time. The advantage of using subscriptions is that you don't have to request large objects again and again when only a few of the object's fields are the ones that change. Instead, the server can push updates only to the particular fields as they occur.

For example, subscriptions can find their application in Chat and Analytics applications which involve event-based real-time updates.

## Usage

Here is how subscriptions are defined in the GraphQL schema and the client-side.

### GraphQL Schema

To use subscriptions, they need to be defined in the GraphQL schema on the server-side. You can define subscriptions by declaring a field of ` Subscription` type in the schema.

```graphql
type Subscription {
	userAdded(userID: ID!): User
}
```

This subscription looks for the `userAdded` mutation. Hence, it will notify the subscribed client whenever a new user is added. Similarly, we can create a subscription for any mutation that creates, reads, updates, or deletes data.

### Client Side

Now, clients can easily subscribe to the mutation by executing the following subscription query:

```graphql
subscription OnUserAdded($userID: ID!) {
	userAdded(userID: $userID) {
		id
		name
	}
}
```

This query will establish the client's connection to the server, and the server will push a response whenever the `userAdded` mutation executes. Also, like regular queries, the response will be structured according to our specification; for example, it will only include the id and name fields of the user in the response.

```json
{
	"data": {
		"userAdded": {
			"id": "9",
			"name": "John Doe"
		}
	}
}
```

### Setup

Subscriptions are long-lived queries, and they do not use the HTTP protocol; therefore, you need the [Apollo Client library](https://www.apollographql.com/docs/react/data/subscriptions/) to set up data fetching through subscriptions. Apollo Client employs WebSocket endpoints to implement GraphQL subscriptions.

## Final Note

We gave an initial introduction to GraphQl Subscription in this guide. It is one of the powerful features of GraphQL and makes real-time communication easier to implement.
