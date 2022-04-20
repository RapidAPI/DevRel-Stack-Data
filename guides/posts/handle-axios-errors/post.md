---
title: How to handle API Errors Using Axios?
description: In the course of fetching APIs, if the API request doesn't go as planned, we may encounter errors. Let's see how to manage these errors using Axios.
publishedDate: 2022-04-20T07:24:44.264Z
lastModifiedDate: 2022-04-20T07:24:44.264Z
authors:
    - ahmad-bilal
categories:
    - api
tags:
    - axios
    - errors
    - api
coverImage: ''
---

<Lead>

In the course of fetching APIs, if the API request doesn't go as planned, we may encounter errors. Let's see how to manage these errors using Axios.

</Lead>

## Axios

If you don't want to use the built-in Fetch API, you can opt for the many 3rd party libraries available on npm, and Axios is the most popular among them. It is essentially a wrapper around the Fetch API and allows you to make HTTP requests using a promise-based HTTP client.

## API Errors

When a request to an API doesn't go as planned, an API error occurs. So, the API must respond to the client specifying whether the request was successful or not. In this case, we should send an error response, and it is the only way for the developers to diagnose what went wrong. HTTP Status Codes are used for this purpose. The following status codes notify about the errors.

-   `4xx` - Client error. Such as `404: Requested URL not found`.
-   `5xx` - Server error.

Informing the client about the error helps them understand the error and its cause.

## Using Axios

To handle errors in a standard API call using Axios, we use a `try...catch` block. For example, take a look at the following code, which fetches random quotes from the [Famous Quotes API](https://RapidAPI.com/saicoder/api/famous-quotes4?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

```js
import axios from 'axios';
const fetchQuotes = async () => {
	try {
		const res = await axios.get(
			`https://famous-quotes4.p.rapidapi.com/random`
		);
	} catch (error) {
		// Do something with the error here
	}
};
```

If an error occurs, the `catch` block captures it. We need to add some logic in this block to handle the errors. We have to take care of three scenarios of errors:

1. Request is made, but the server responds with an error.

2. Request is made, but no response is received from the server.

3. When an error occurs while setting up the request.

To handle these scenarios, we can use an `if-else` block like this:

```js
try {
	const res = await axios.get(`https://famous-quotes4.p.rapidapi.com/random`);
} catch (error) {
	if (error.response) {
		// Request made but the server responded with an error
	} else if (error.request) {
		// Request made but no response is received from the server.
	} else {
		// Error occured while setting up the request
	}
}
```

It is critical to check for the `request` and `response` properties because there will be no `response` property if we do not receive a response. Similarly, there will be no `request` property if the request is not set up. Let's take a look at these properties.

### error.response

If the request is made and the server gives an error response, the error object will have a `response` property. It means that a 4XX or 5XX error has occurred. The response object has many properties which we can log, like the `status` property, which has the status code of the error.

### error.request

`error.request` is the request object of the HTTP request that the client made. It contains information such as the HTTP method, URL, and the headers sent with the request. For Axios, it is an instance of `XMLHttpRequest` when running in the browser and an instance of `http.ClientRequest` when executed in Node.js. We use it when we do not receive a valid response from the API due to a poor network or unauthorized access.

## Logging Errors

Finally, we can use these properties to log errors properly. It will look like this in code:

```js
try {
	const res = await axios.get(`https://famous-quotes4.p.rapidapi.com/random`);
} catch (error) {
	if (error.response) {
		// Request made but the server responded with an error
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);
	} else if (error.request) {
		// Request made but no response is received from the server.
		console.log(error.request);
	} else {
		// Error occured while setting up the request
		console.log('Error', error.message);
	}
}
```

Now you know how to manage API errors using Axios. Find a suitable API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and integrate it into your projects using Axios.
