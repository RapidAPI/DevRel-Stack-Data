---
title: How to Consume GraphQL APIs in Svelte?
description: Svelte is one of the fastest-growing JavaScript frameworks and has captured the attention of many developers. If you want to build a Svelte application, this guide will demonstrate how to consume GraphQL APIs.
authors:
    - ahmadBilal
categories:
    - api
tags:
    - graphql
    - api
    - svelte
publishedDate: 2022-02-03T14:17:11.709Z
lastModifiedDate: 2022-02-03T14:17:11.709Z
coverImage: ''
draft: false
---

<Lead>
	Svelte is one of the fastest-growing JavaScript frameworks and has captured
	the attention of many developers.
</Lead>

## Svelte

[Svelte](https://svelte.dev/) is a new framework that is focused on building fast web applications. It runs at build time and converts declarative components into efficient and optimized JavaScript code.

## Consuming GraphQL APIs

You can consume GraphQL APIs in your Svelte application through one of the following ways:

1. Fetch API.

2. Apollo Client.

Let's see how each of them works in detail.

## Using Fetch API

For basic data fetching with GraphQL, you can use the built-in Fetch API in your Svelte app. Fetch API is included in all modern browsers, and it can work just fine for this purpose.

For this guide, we are going to use the `onMount` hook of Svelte inside the `<script></script>` tag, which means that the API request will be sent whenever the browser renders the component. If you want to trigger the request due to an event such as a button click, you can use the event handlers instead.

We will start by importing the `onMount` hook.

```jsx
import {onMount} from 'svelte';
```

Then, we can specify the query, and inside the `onMount` hook, we will create an async function that will send the request to the API.

```svelte
<script>
    import { onMount } from 'svelte';
    let country;
    let query = `{
    countries(namePrefix: "America") {
        edges {
            node {
                name
                flagImageUri
                }
            }
        }
    }`;
    onMount(async () => {
        const response = await fetch('https://geodb-cities-graphql.p.rapidapi.com/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        });
        country = response.data;
    });
</script>
```

You can see that we have created an empty variable `country`, and we are storing the API response in this variable. The fun thing about Svelte is that we can use this variable straight away in our HTML, so let's do that.

```svelte
<script>
    import { onMount } from 'svelte';
    let country;
    let query = `{
    countries(namePrefix: "America") {
        edges {
            node {
                name
                flagImageUri
                }
            }
        }
    }`;
    onMount(async () => {
        const response = await fetch('https://geodb-cities-graphql.p.rapidapi.com/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        });
        country = response.data;
    });
</script>

<div>
    {#if country}
        <h2>
            {country.name}
        </h2>
        <img src={country.flagImageUri} alt="Country Flag" />
    {:else}
        <p>loading...</p>
    {/if}
</div>
```

That's it. Our component will now show the data received from the API.

## Using Apollo Client

Apollo Client is a complete data fetching package for GraphQL APIs. It provides features like caching, loading and error states, etc.

To use Apollo, you will need to install the following NPM packages:

-   apollo/client
-   svelte-apollo
-   graphql

You can install them by running this command:

```sh
npm install @apollo/client svelte-apollo graphql
```

Next, import the following in your Svelte file.

```svelte
import {ApolloClient, gql} from '@apollo/client';
import {setClient, getClient, query} from 'svelte-apollo';
```

Then, inside the `<script>` tag, you can set up the Apollo Client like this:

```svelte
const client = new ApolloClient({
	uri: 'https://geodb-cities-graphql.p.rapidapi.com/'
});
setClient(client);
```

If you want to access the client in any other component, you can do it by using the `getClient` function.

```svelte
const client = getClient();
```

Finally, we can set up and send the query. We will use the same `onMount` hook to display the response. The final code will look like this:

```svelte
<script>
    import { ApolloClient, gql } from '@apollo/client';
    import { setClient, getClient, query } from 'svelte-apollo';
    import { onMount } from 'svelte';

    let country;
    const GETCOUNTRY = gql`
        query GetCountryData {
            countries(namePrefix: "America") {
                edges {
                    node {
                        name
                        flagImageUri
                    }
                }
            }
        }
    `;
    const client = new ApolloClient({
        uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
    });
    setClient(client);

    onMount(async () => {
        const response = query(client, { query: GETCOUNTRY });
        country = response.data;
    });
</script>

<div>
    {#if country}
        <h2>
            {country.name}
        </h2>
        <img src={country.flagImageUri} alt="Country Flag" />
    {:else}
        <p>loading...</p>
    {/if}
</div>
```

## Wrap Up

This guide was an introduction to consuming GraphQL APIs in Svelte. We hope that now you can start using GraphQL APIs in your awesome Svelte projects.
