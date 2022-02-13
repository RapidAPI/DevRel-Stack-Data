---
title: How to consume GraphQL APIs in React using Apollo
slug: use-apollo-for-graphql
description: Today, more and more applications are using GraphQL APIs. If you are using React, you can choose from multiple ways to consume a GraphQL API, and Apollo is one of them.
publishedDate: 2022-01-19T18:41:43.732Z
lastModifiedDate: 2022-01-19T18:41:43.732Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - schema
    - api
coverImage: ''
draft: false
---

<Lead>

Today, more and more applications are using GraphQL APIs. While you can consume GraphQL APIs through the usual `fetch` API or `axios` package, Apollo offers a comprehensive tool for GraphQL data fetching.

</Lead>

Let's take a look at it.

## Apollo Client

Apollo Client is a state management library for JavaScript. It is a tailored data fetching tool for GraphQL that allows you to fetch, cache, and modify data in applications. Because it is meant for GraphQL, it will enable you to code efficiently while adhering to modern development practices.

Apollo Client is more than a data fetching package, as it also includes state management, which means you don't need to track the loading and error states manually.

## Using Apollo Client in React

The `apollo/client` library has built-in integration with React, and it takes advantage of React's features like hooks. Let's demonstrate how we can use it in a React application. The whole process can be divided into the following four steps.

### → STEP #1 - Install Apollo Client

You can get started by installing the npm package in your React application. Run the following command:

```js
npm install @apollo/client
```

We also recommend installing `graphql`; a package that helps parse GraphQL queries.

```js
npm install graphql
```

### → STEP #2 - Initialize ApolloClient

Once installed, we need to initialize an instance of the client. You can initialize it in the component or page where you want to fetch the API, for example, the `index.js` file of your application.

In `index.js` import the following:

```js
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql
} from '@apollo/client';
```

Now, we can initialize a new instance of the `ApolloClient` and configure it to call our API.

```js
const client = new ApolloClient({
	uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
	cache: new InMemoryCache()
});
```

Here `uri` is the endpoint of the GraphQL API we want to consume. `cache` uses an instance of the local `InMemoryCache` to cache data after fetching it. Each time you fetch data, the client will first look in the cache for the response. If it exists, it will retreive the cached response insteaded of sending the API request.

### → STEP #3 - Connect to ApolloProvider

`ApolloProvider` connects the initialized client to your React application. To do so, you need to wrap the required component/page, which needs to access the GraphQL data with `<ApolloProvider></ApolloProvider>`. In our case, we will wrap our `index.js` file.

```js
import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql
} from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
	cache: new InMemoryCache()
});

export default function Home() {
	return (
		<ApolloProvider client={client}>
			<div>
				<h2>Consuming GraphQL API in React.</h2>
			</div>
		</ApolloProvider>
	);
}
```

### → FINAL STEP - Fetch Data

Finally, you can fetch data with the `useQuery` hook. After defining your query, you can call it inside the `useQuery` hook like this:

```js
// index.js
import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql
} from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
	cache: new InMemoryCache()
});

const GET_COUNTRY_DATA = gql`
	query GetCountryData {
		countries(namePrefix: "America") {
			edges {
				node {
					name
					capital
					flagImageUri
					currencyCodes
				}
			}
		}
	}
`;

export default function Home() {
	const {loading, error, data} = useQuery(GET_COUNTRY_DATA);

	return (
		<ApolloProvider client={client}>
			<div>
				<span>{data.name}</span>
				<img src={data.flagImageUri} />
			</div>
		</ApolloProvider>
	);
}
```

The `useQuery` hook will automatically fetch the API whenever the component loads/renders. If you want to manually call the API after a specific event, such as a button click, you can choose the `useLazyQuery` hook instead.

## Wrap Up

If you are building a React application that heavily relies on data from a GraphQL API, Apollo Client offers a robust tool for you.
