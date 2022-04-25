---
title: 'Axios vs. Fetch: What to use for Making HTTP Requests?'
description: Getting data from APIs is a fundamental operation of any web application. Both Fetch and Axios are widely used for making HTTP requests to APIs. Let's see how they differ and how we can use them.
publishedDate: 2022-04-22T16:27:05.876Z
lastModifiedDate: 2022-04-22T16:27:05.876Z
authors:
    - ahmad-bilal
categories:
    - api
tags:
    - fetch
    - axios
    - http-requests
    - apis
coverImage: ''
---

<Lead>

APIs are the backbone of any application, and there are many different ways you can use to make API calls in your applications. Axios and Fetch are the most popular among them.

</Lead>

Before we start, we need an API. Sign up on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) which provides you with thousands of APIs that you can use in your applications. For this guide we will use the [Famous Quotes API](https://RapidAPI.com/saicoder/api/famous-quotes4?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel); it returns a random quote on each request.

## Fetch API

Fetch API offers the simplest way to call APIs in your React applications. It is an asynchronous web API that comes with native JavaScript, and it returns the data in the form of promises.

Fetch API is included in all modern browsers, and you do not need to import any third-party library through `yarn` or `npm`.

### Basic Usage

Fetch API offers the `fetch()` method to send API requests. It takes multiple arguments, like the API endpoint's URL, i.e., the path of the resource you are interested in fetching. Here is what an example API call looks like:

```js
async function getData() {
	// API Call
	const response = await fetch(
		'https://famous-quotes4.p.rapidapi.com/random'
	);
}
```

### Response Handling

To get the data received in the response, you need to transform it manually like this:

```js
async function getData() {
	const response = await fetch(
		'https://famous-quotes4.p.rapidapi.com/random'
	);
	// Extract data from response
	const data = await response.json();
}
```

### Headers and Parameters

You can also add parameters and headers to the API call using the `body` and `header` properties.

```js
async function getData() {
	const response = await fetch(
		'https://famous-quotes4.p.rapidapi.com/random',
		{
			// HTTP Method
			method: 'GET',
			// Parameters
			body: JSON.stringify({
				a: 10,
				b: 20
			}),
			// Headers
			headers: {
				'api-key': '12345'
			}
		}
	);
}
```

As you can see, we need to manually stringify the data while sending it as a request body.

## Error Handling

The Fetch API provides an `.ok()` method. We can use it to implement error handling:

```js
async function getData() {
	const response = await fetch(
		'https://famous-quotes4.p.rapidapi.com/random'
	);
	// Handle errors
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const data = await response.json();
}
```

## Axios

If you don't want to use the built-in Fetch API, you can opt for the many 3rd party libraries available on npm, and Axios is the most popular among them. It is basically a wrapper around the Fetch API and allows you to make HTTP requests using a promise-based HTTP client.

### Basic Usage

To use Axios, you need to install it using npm or yarn.

```sh
npm install axios
```

Unlike Fetch, Axios provides a different function for each HTTP method. You can fetch data using any of the following methods:

-   axios.get()
-   axios.post()
-   axios.put() and so on.

Here is what an example API call looks like:

```js
import axios from 'axios';

const getData = async () => {
	// API Call
	const response = await axios.get(
		`https://famous-quotes4.p.rapidapi.com/random`
	);
};
```

### Response Handling

Axios automatically transforms the data received in the response. You don't need to do anything special like `response.json` to get the data.

### Headers and Parameters

Using the ' header ' and ' data ' properties, you can add parameters and headers to the API call.

```js
import axios from 'axios';
const fetchData = async () => {
	const res = await axios.get(
		`https://famous-quotes4.p.rapidapi.com/random`,
		{
			headers: {
				'api-key': '12345'
			},
			data: {
				a: 5,
				b: 10
			}
		}
	);
};
```

Unlike Fetch, we don't need to stringify the data manually.

## Error Handling

To handle errors in a standard API call using Axios, we use a `try...catch` block. Inside the block, we can use the error object returned by Axios to log the errors. Here is an example:

```js
try {
	const res = await axios.get(`https://famous-quotes4.p.rapidapi.com/random`);
} catch (error) {
	if (error.response) {
		// Request made but the server responded with an error
		console.log(error.response.data);
		console.log(error.response.status);
	} else if (error.request) {
		// Request made but no response is received from the server.
		console.log(error.request);
	} else {
		// Error occured while setting up the request
		console.log('Error', error.message);
	}
}
```

For a deeper dive, you can check out our detailed [guide on error handling with Axios](https://rapidapi.com/guides/handle-axios-errors).

### Additional Features

Axios also offers additional features for data fetching that are not available in the Fetch API. These features include but are not limited to:

-   [HTTP Request Interceptors](https://rapidapi.com/guides/http-interceptors-axios): They allow us to check or modify all the incoming or outgoing HTTP requests in our application.
-   Custom Instances.
-   Request Timeouts and more.

## Conclusion

Fetch API is a quick and more straightforward way to get started with APIs. However, if you want require the extra features, you are better off with a third-party package like Axios.
