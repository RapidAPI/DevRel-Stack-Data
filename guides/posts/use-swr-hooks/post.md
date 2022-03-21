---
title: How to fetch data from APIs using SWR Hooks in React?
description: SWR is a lightweight hooks library for data fetching. It allows you to utilize APIs in your React applications with features like built-in caching, TypeScript support, and revalidation. This guide will demonstrate how to use them.
publishedDate: 2022-03-16T20:53:04.094Z
lastModifiedDate: 2022-03-16T20:53:04.094Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - react
    - next
    - hooks
    - useSWR
    - api
coverImage: ''
---

<Lead>
 Today, more and more applications use APIs for one reason or another. SWR is a library that provides React hooks for fetching data from APIs.
</Lead>

## SWR

[SWR](https://swr.vercel.app/) is created by Vercel, the team behind Next.js, and is a lightweight library of React Hooks intended to make data fetching better. SWR stands for **Stale-While-Validate**, which refers to its features like built-in caching, reusable data fetching, request deduplication, revalidation on focus, network discovery, etc.

Under the hood, SWR has React Suspense, allowing it to wait for events before rendering the components. Finally, with TypeScript support, SWR is a promising package for interacting with APIs.

## Why does it matter?

The Fetch API and other libraries like Axios are enough for requesting data from APIs. However, they do not include features like caching or pagination. So, you have to implement these features manually, and this is where SWR comes in handy.

SWR does not compare to data fetching libraries because it acts as a wrapper around them and provides additional features. This means that you can use Fetch, Axios, or any other library while using SWR.

## useSWR()

SWR provides `useSWR` for interacting with APIs, which is a React Hook that accepts two arguments. It looks like this:

```js
const { data, error } = useSWR(url, fetcher)
```

Here `url` is the API's endpoint URL and `fetcher` is a function that will call the API using Fetch or any other library like Axios. It returns two things:

- **data** is the response to the request.

- **error** is the error occurred if the request fails.

## Usage

Let's talk a bit about how we can use it.

### Import useSWR

We need to install SWR before we can use the hook. Run the following command to install it:

```sh
npm install swr
```

Once it is installed, import it in your React component like this:

```js
import useSWR from "swr";
```

Then, you can initialize the hook inside your component:

```jsx
import useSWR from 'swr';

function Component() {
 // Using the hook
 const { data, error } = useSWR('https://random-facts2.p.rapidapi.com/getfact', fetcher);

 // Error and loading states
 if (error) return <div>Request Failed</div>;
 if (!data) return <div>Loading...</div>;

 // Display the data here
}
```

### Fetcher Function

Finally, we need to specify the `fetcher` function to fetch the API. `fetcher` is an async function that accepts the `url` (also called the key) as a parameter. It is just a wrapper of the Fetch API, and you can use it like this:

```js
const fetcher = url => fetch(url).then(r => r.json())
```

If you want, you can use other libraries like Axios instead.

```js
const fetcher = url => axios.get(url).then(res => res.data)
```

Here is a quick example of a component that uses Axios and `useSWR` to fetch random facts from the [Random Facts API on RapidAPI Hub](https://rapidapi.com/APILAB/api/random-facts2?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

```jsx
import useSWR from 'swr';
import axios from 'axios';

function RandomFact() {
 const fetcher = (url) => axios.get(url).then((res) => res.data);

 const { data, error } = useSWR('https://random-facts2.p.rapidapi.com/getfact', fetcher);

 if (error) return <div>Request Failed</div>;
 if (!data) return <div>Loading...</div>;

 return (
  <div>
   <h1>Random Fact:</h1>
   <p>{data.randomFact}</p>
  </div>
 );
}

```

## Conclusion

You can utilize the SWR hook to implement data fetching and complex features like pagination, mutation, and revalidation in your React applications.
