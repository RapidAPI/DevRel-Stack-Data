---
title: How to fetch data from APIs using React Query?
description: React Query is a library that provides a set of React hooks for data fetching. It makes data fetching easier with features like caching, re-fetching, revalidation, etc. This guide will demonstrate how to use it.
publishedDate: 2022-04-04T20:53:04.094Z
lastModifiedDate: 2022-04-04T20:53:04.094Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - react-query
    - fetch
    - api
coverImage: ''
---

<Lead>
	Today, more and more applications use APIs for one reason or another. React
	Query is a library that provides React hooks for fetching data from APIs.
</Lead>

## React Query

React Query is a library of React Hooks intended to make data fetching better. It offers the following features:

-   Built-in caching of data for future use.

-   Refetching.

-   Request cancellation.

-   Detecting outdated (stale) data and updating it.

-   Prefetching and pagination etc.

React Query also supports queries and mutations for GraphQL APIs. It offers a custom hook, `useQuery` for managing these features.

## Why does it matter?

The Fetch API and other libraries like Axios are enough for requesting data from APIs. However, they do not include features like caching or pagination. So, you have to implement these features manually, and this is where libraries like React Query come in. You can use it to implement complex features while keeping your code simple.

## useQuery()

React Query provides `useQuery` for interacting with APIs. It is a custom React Hook that accepts two parameters. It looks like this:

```js
const {data, error, isLoading} = useQuery(key, fetcher);
```

Here `key` is anything that uniquely identifies the query, and `fetcher` is a function that will call the API using Fetch or any other library like Axios. `data`, `error`, and `isLoading` are properties returned by the hook. Here are all the available properties:

```js
const {
	data,
	error,
	failureCount,
	isError,
	isFetchedAfterMount,
	isFetching,
	isIdle,
	isLoading,
	isPreviousData,
	isStale,
	isSuccess,
	refetch,
	remove,
	status
} = useQuery(key, fetcher);
```

## Usage

Let's talk a bit about how we can use it.

### Install React Query

We can install React Query using the following command:

```sh
npm install react-query
```

### Import and Configure Provider

Before we can start using the hook, we need to import `QueryClient` and `QueryClientProvider` from react-query like this:

```js
import {QueryClient, QueryClientProvider} from 'react-query';
```

Then, we will initialize the client and wrap our application with the provider to make it globally available. For example:

```jsx
// app.js
import {QueryClient, QueryClientProvider} from 'react-query';

// Initialze the client
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>....</Router>
		</QueryClientProvider>
	);
}
```

### Using the Hook

Now we can fetch data by using the `useQuery` hook inside any component:

```jsx
// Component.js
import {useQuery} from 'react-query';
```

We can call the hook inside the component like this:

```jsx
import {useQuery} from 'react-query';

function Component() {
	// Fetcher function
	const getFacts = async () => {
		const res = await fetch('https://random-facts2.p.rapidapi.com/getfact');
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery('randomFacts', getFacts);
}
```

Here `randomFacts` is the key, and `getFacts` is the async `fetcher` function that calls the API.

Finally, here is how we can display random facts from the [Random Facts API on RapidAPI Hub](https://rapidapi.com/APILAB/api/random-facts2?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) inside the component.

```jsx
import {useQuery} from 'react-query';

function Component() {
	// Fetcher function
	const getFacts = async () => {
		const res = await fetch('https://random-facts2.p.rapidapi.com/getfact');
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery('randomFacts', getFacts);

	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;

	// Show the response if everything is fine
	return (
		<div>
			<h1>Random Fact:</h1>
			<p>{data.randomFact}</p>
		</div>
	);
}
```

## Conclusion

React Query is another library that can match your data fetching needs in React applications.
