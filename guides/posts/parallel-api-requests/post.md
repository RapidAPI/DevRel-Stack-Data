---
title: How to make multiple API requests in parallel?
description: If a function makes multiple API requests, you can send these API requests concurrently instead of sending them one by one. This guide will demonstrate how you can make parallel API requests.
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - parallel
    - api
    - calls
publishedDate: 2022-02-18T14:17:11.709Z
lastModifiedDate: 2022-02-18T14:17:11.709Z
coverImage: ''
draft: false
---

<Lead>
	If you need to make multiple API requests, you can send these API requests
	concurrently instead of sending them one by one.
</Lead>

Sometimes, we need to make multiple API calls at once. For example, let's say we have an array, and we want to make an API request for each element of that array. We will use a loop to iterate over the array and make the calls; however, there are two different approaches to do this.

## Sequential vs. Parallel API Calls

There are two types of API calls, depending on how they are made.

### 1. Sequential API Calls

Sequential API calls are executed one by one, i.e., the second call is made after the first call completes. This approach is not ideal for performance because if you have ten requests and each request takes one second to execute, the total execution time will add up to ten seconds.

### 2. Parallel API Calls

To avoid slow execution, we can send all the API calls at once and execute them in parallel. As a result, there is no particular order in which the calls finish their execution, but their execution times do not add up since they run together.

## Making Parallel Calls in JavaScript

It can be tricky to figure out how to make parallel but asynchronous API calls. In JavaScript, you can use the `Promise.all()` method to achieve this.

### Promise.all()

The `Promise.all()` method takes an array of promises as an input and returns a single promise that resolves to the results of all the input promises. Every API call is essentially a promise, so we can feed all the API calls in `Promise.all()`, which will execute them together.

Let's say our API Call looks like this:

```js
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
```

Check out the following code, which implements parallel calls:

```js
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array of ids

const responses = await Promise.all(
	ids.map(async id => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		); // Send request for each id
	})
);
```

We are using the `map` function to iterate the `ids` array and send an API call for each `id`. The `Promise.all()` method receives an array of promises like this:

```
[
    fetch(`https://jsonplaceholder.typicode.com/posts/1`),
    fetch(`https://jsonplaceholder.typicode.com/posts/2`),
    fetch(`https://jsonplaceholder.typicode.com/posts/3`),
    ...
]
```

It waits for each promise to resolve. Once they resolve, it stores all the responses in the `responses` array.

### Final Note

One thing to note is that `Promise.all()` will reject entirely even if one of the API calls fails. To avoid this, you can use the `Promise.allSettled()` method, which resolves even when all promises are rejected. It includes the status(resolved or rejected) of promises in the result.
