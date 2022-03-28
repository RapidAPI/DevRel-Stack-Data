---
title: How to Manage API Calls in React Applications?
description: React is the most popular front-end JavaScript library for building user interfaces. This guide will describe the different ways you can use to manage API calls in your React applications.
publishedDate: 2022-03-25T15:57:17.709Z
lastModifiedDate: 2022-03-25T15:57:17.709Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - react
    - api
    - axios
    - fetch
    - swr
    - apollo
coverImage: ''
draft: false
---

<Lead>

React is the most popular front-end JavaScript library for building user interfaces. APIs are the backbone of any application, and there are many different ways you can use to manage API calls in your React applications.

</Lead>

Let's quickly go through some of these ways.

## Fetch API

Fetch API offers the simplest way to call APIs in your React applications. It is an asynchronous web API that comes with native JavaScript, and it returns the data in the form of promises.

Fetch API is included in all modern browsers, and you do not need to import any third-party library through yarn or npm. You can use the fetch API using the fetch method. It takes multiple arguments, including the API endpoint's URL, i.e., the path of the resource you are interested in fetching. Here is what an example API call looks like:

```js
async function getResponse() {
	const response = await fetch(
		'https://carbonfootprint1.p.rapidapi.com/CarbonFootprint' // endpoint url
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`); // handle errors
	}
	const data = await response.json(); // response
}
```

For more detail, check out our [Fetch API guide](https://rapidapi.com/guides/fetch-api-async-await).

## Axios

If you don't want to use the built-in Fetch API, you can opt for the many 3rd party libraries available on npm, and Axios is the most popular among them. It is basically a wrapper around the Fetch API and allows you to make HTTP requests using a promise-based HTTP client.

To use Axios, you need to install it using npm or yarn.

```sh
npm install axios
```

Then, you can make the API call using one of the following methods:

-   axios.get()
-   axios.post()
-   axios.put() and so on.

Here is what an example API call looks like:

```js
import axios from 'axios';
const fetchQuotes = async () => {
	try {
		const res = await axios.get(
			`https://famous-quotes4.p.rapidapi.com/random`,
			{
				headers: {
					'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
					'x-rapidapi-key': API_KEY
				},
				params: {category: 'all', count: '10'}
			}
		);
	} catch (err) {
		console.log(err);
	}
};
```

For more detail, you can check out our [guide on Axios](https://rapidapi.com/guides/use-axios-for-api-requests).

## SWR

SWR is a modern library of React hooks created by Vercel, the team behind Next.js. These hooks are intended to make data fetching better. SWR stands out because of the extra features like built-in caching, reusable data fetching, request deduplication, revalidation on focus, network discovery, etc.

The Fetch API and other libraries like Axios are enough for requesting data from APIs. However, they do not include features like caching or pagination. So, you have to implement these features manually, and this is where SWR comes in handy.

We need to install SWR using yarn or npm.

```sh
npm install swr
```

Then, we can employ the `useSWR` hook to make the API call like this:

```jsx
import useSWR from 'swr';
import axios from 'axios';

function RandomFact() {
	const fetcher = url => axios.get(url).then(res => res.data); // Fetcher function

	// SWR hook
	const {data, error} = useSWR(
		'https://random-facts2.p.rapidapi.com/getfact',
		fetcher
	);

	if (error) return <div>Request Failed</div>; // Error state
	if (!data) return <div>Loading...</div>; // Loading state

	return (
		<div>
			<h1>Random Fact:</h1>
			<p>{data.randomFact}</p>
		</div>
	);
}
```

For more detail, you can check out our [guide on SWR](https://rapidapi.com/guides/use-swr-hooks).

## Apollo Client

Today, more and more applications are using GraphQL APIs. While you can consume GraphQL APIs through the usual Fetch API or other methods mentioned above, Apollo offers a comprehensive tool for GraphQL data fetching. It gives you proper compatibility with GraphQL features like caching, subscriptions, and others because it is tailored for GraphQL APIs.

To use it, we can install Apollo Client using npm.

```sh
npm install @apollo/client
```

Here is what an example API call using Apollo looks like:

```jsx
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
	uri: 'https://geodb-cities-graphql.p.rapidapi.com/', // API endpoint
	cache: new InMemoryCache() // Cache
});

// GraphQL query
const GET_COUNTRY_DATA = gql`
	query GetCountryData {
		countries(namePrefix: "America") {
			name
			flagImageUri
		}
	}
`;
export default function Home() {
	// Send request to API through the useQuery hook
	const {loading, error, data} = useQuery(GET_COUNTRY_DATA);
	return (
		<ApolloProvider client={client}>
			<div>
				{/* Display response */}
				<span>{data.name}</span>
				<img src={data.flagImageUri} />
			</div>
		</ApolloProvider>
	);
}
```

For a deeper dive, we recommend reading the [guide on Apollo](https://rapidapi.com/guides/use-apollo-for-graphql).
