---
title: How to Cache GraphQL APIs on the Client-side?
description: Client-side caching helps reduce unnecessary and redundant requests to the APIs. This guide will demonstrate how to cache a GraphQL API in React using Apollo.
publishedDate: 2022-02-10T16:27:05.876Z
lastModifiedDate: 2022-02-10T16:27:05.876Z
authors:
    - ahmadBilal
categories:
    - interactive
    - api
tags:
    - graphql
    - cache
    - client
coverImage: ''
---

<Lead>

Today, more and more applications are using GraphQL APIs, and their performance can be heavily improved by caching. Client-side caching helps reduce unnecessary and redundant requests to the APIs. Apollo is a tool used for fetching GraphQL APIs, and it lets you implement caching quickly.

</Lead>

Before diving into details, let's understand caching first.

## API Caching

If some recurring requests produce the same response, we can use a cached version to avoid the excessive load. This technique is caching.

There are two techniques of caching based on where you keep the cache.

1. **Client Caching**: Recurrent API requests are stored locally on the client side, reducing the need for additional API calls.

2. **Server Caching**: It reduces the load on the server by storing repeated calls in a cache on the server. As a result, the server does not have to process these requests.

In this guide, we will implement client caching using Apollo in our React application.

## Apollo

It is a data fetching tool tailored for GraphQL that allows you to fetch, cache, and modify data in applications. Because Apollo is meant for GraphQL, it enables you to interact with GraphQL APIs efficiently.

Let's dive in and see how it helps with caching.

### Using Apollo Client in React

The `apollo/client` library has built-in integration with React, and it takes advantage of React's features like hooks.

### → STEP #1 - Install Apollo Client

You can get started by installing the npm packages in your React application. Run the following command:

```jsx
npm install @apollo/client, graphql
```

### → STEP #2 - Initialize ApolloClient

Once installed, we need to initialize an instance of the client. You can initialize it in the component or page where you want to fetch the API, for example, the `index.js` file of your application.

In `index.js` import the following:

```jsx
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql
} from '@apollo/client';
```

Now, we can initialize a new instance of the `ApolloClient` and configure it to call our API.

```jsx
const client = new ApolloClient({
	uri: 'https://graphqlzero.almansi.me/api',
	cache: new InMemoryCache()
});
```

Here `uri` is the GraphQL API's endpoint we want to consume.

`cache` is what we are looking for. It uses an instance of the local `InMemoryCache` to cache data after fetching it. Each time you fetch data, the client will first look in the cache for the response. It will retrieve the cached response (if it exists) instead of sending the API request again.

### → FINAL STEP - Fetch Data

Finally, you can fetch data with the `useQuery` hook. We are defining our `GET_POST` query and calling it inside the `useQuery` hook like this:

```jsx
import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql
} from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://graphqlzero.almansi.me/api',
	cache: new InMemoryCache()
});

const GET_POST = gql`
	query {
		post(id: 1) {
			id
			title
			body
		}
	}
`;

export default function Home() {
	const {loading, error, data} = useQuery(GET_POST);

	return <ApolloProvider client={client}>...</ApolloProvider>;
}
```

Before fetching the API, the `useQuery` hook will first check the cache. If the request is present in the cache, it will use the cached version instead of sending a new request.

Check out this live component to see how our code works. It will send the first API request, and you will see it load. However, sending the request again will bring the cached version, and you won't see any loading state.

<GraphqlCaching />

## BONUS: Refreshing the Cache

We need to refresh the cache if the data on the server changes because although the requests will be the same, their response will be different. To get the latest response, Apollo offers two options:

### 1. Polling

It allows you to set an interval after which Apollo will fetch the latest data from the server, ignoring the local cache. For example, this code sets the interval to 0.5 seconds.

```jsx
const {loading, error, data} = useQuery(GET_POST, {pollInterval: 500});
```

### 2. Refetching

Refetching gives you manual control to get the current data from the server. You can implement it by adding the `refetch` variable to the hook and using an event like a button click to call `refetch()`.

```jsx
const {loading, error, data, refetch} = useQuery(GET_POST);
```

## Wrap Up

Caching offers many benefits to quality of service and performance, and Apollo's built-in client-side caching turns out to be helpful in this regard.
