---
title: How to consume GraphQL APIs in React using URQL?
description: Today, more and more applications are using GraphQL APIs. If you are using React, you can choose from multiple ways to consume a GraphQL API, and URQL is one of them.
publishedDate: 2022-06-01T18:41:43.732Z
lastModifiedDate: 2022-06-01T18:41:43.732Z
authors:
    - 'ahmad-bilal'
categories:
    - api
    - graphql
tags:
    - graphql
    - urql
    - react
    - api
coverImage: ''
draft: false
---

<Lead>

Today, more and more applications are using GraphQL APIs. While you can consume GraphQL APIs through the usual `fetch` API, `axios` or Apollo, **URQL** provides a versatile tool for GraphQL data fetching.

</Lead>

Let's take a look at it.

## URQL

[URQL](https://formidable.com/open-source/urql/) is a tailored data fetching tool for GraphQL that allows you to fetch, cache, and modify data in applications. Because it is meant for GraphQL, it will enable you to code efficiently while adhering to modern development practices.

### How does it compare to other data fetching packages?

You can always use the Fetch API, Axios, and React Query for fetching GraphQl APIs. To discover these ways further, you can read our [guide](https://RapidAPI.com/guides/graphql-fetch-ways) about them. However, they don't support GraphQL-specific features like subscriptions or caching as GrapQL clients do. When it comes to GraphQL clients, Apollo is the most popular one. However, URQL is comparatively lightweight, and it stands out because of its flexibility, ease of use, and performance.

With that said, let's take a quick look at using URQL in React.

## Using URQL in React

The [urql](https://www.npmjs.com/package/urql) library has built-in integration with React, and it takes advantage of React's features like hooks. Let's demonstrate how we can use it in a React application. The whole process can be divided into the following four steps.

### → STEP #1 - Install URQL

You can get started by installing the npm package in your React application. Run the following command:

```js
npm install urql
```

We also recommend installing `graphql`, which libraries require when working with GraphQL APIs.

```js
npm install graphql
```

If you use `yarn`, run the following command:

```sh
yarn add urql graphql
```

### → STEP #2 - Initialize Client

Once installed, we need to initialize an instance of the URQL client. You can initialize it in the component or page where you want to fetch the API, such as the `App.js` or `index.js` file of your application.

In `index.js`, import the following:

```js
import {createClient, Provider} from 'urql';
```

Now, we can initialize a new instance of the client. We configure it to call [GeoDB API](https://rapidapi.com/wirefreethought/api/geodb-cities-graphql/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), a GraphQL API from [RapidAPI Hub](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) that provides data about countries and cities.

```js
import {createClient, Provider} from 'urql';

const client = createClient({
	url: 'https://geodb-cities-graphql.p.rapidapi.com/'
});
```

Here `url` is the endpoint of the GraphQL API we want to consume.

<Callout
	title="Get access to Thousands of APIs"
	linkText="Sign Up"
	linkHref="https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel"
>
	RapidAPI Hub is the world’s largest API hub where you can find all kinds of
	APIs according to your need.
</Callout>

### → STEP #3 - Connect to the Provider

`Provider` connects the initialized client to your React application. To do so, you need to wrap the required component/page, which needs to access the GraphQL data with `<Provider value={client}></Provider>`. In our case, we will wrap our `index.js` file.

```jsx
import {createClient, Provider} from 'urql';

const client = createClient({
	url: 'https://geodb-cities-graphql.p.rapidapi.com/'
});

export default function Home() {
	return (
		<Provider value={client}>
			<div>
				<h2>Consuming GraphQL API in React.</h2>
			</div>
		</Provider>
	);
}
```

### → FINAL STEP - Fetch Data

Finally, you can fetch data with the `useQuery` hook. After defining your query, you can call it inside the `useQuery` hook like this:

```js
// index.js
import React from 'react';
import {createClient, Provider, useQuery} from 'urql';

const client = createClient({
	url: 'https://geodb-cities-graphql.p.rapidapi.com/'
});

const GetCountryQuery = `
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
	// useQuery hook
	const [result] = useQuery({
		query: GetCountryQuery
	});

	// Get data, loading and error states
	const {data, fetching, error} = result;

	// Handle loading and error states
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	// Display data returned from API
	return (
		<Provider value={client}>
			<div>
				<span>{data.name}</span>
				<img src={data.flagImageUri} />
			</div>
		</Provider>
	);
}
```

The `useQuery` hook will automatically get data from the API whenever the component loads/renders.

## Wrap Up

If you are building a React application that heavily relies on data from a GraphQL API, URQL offers a convenient tool for you without a huge learning curve.
