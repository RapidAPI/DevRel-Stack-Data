---
title: What Are HTTP Interceptors and How To Set Them Using Axios?
description: HTTP Interceptors allow us to check or modify all the incoming or outgoing HTTP requests in our application. We can use them if we want to apply something like an authorization header to all the requests. Let's see how to set HTTP interceptors for API requests using Axios.
publishedDate: 2022-04-04T20:53:04.094Z
lastModifiedDate: 2022-04-04T20:53:04.094Z
authors:
    - ahmad-bilal
categories:
    - http
    - interactive
tags:
    - axios
    - http
    - interceptors
coverImage: ''
---

<Lead>

HTTP Interceptors allow us to check or modify all the incoming or outgoing HTTP requests in our application. We can use them if we want to apply something like an authorization header to all the requests.

</Lead>

## HTTP Interceptors

There are many use-cases where HTTP Interceptors can come in handy. Since they intercept all the API calls, we can use them to apply some logic before or after the API call. These interceptors have access to the complete request and response body. So, if we want to apply some logic to all the requests, we can add it once using an interceptor instead of writing separate code for every request. Here are some examples of things we can do.

-   Apply an authorization header to all the requests.

-   Prefix all the requests with the server name.

-   Log all the requests and responses.

-   Set a global error catch.

-   Resend the request if it fails.

## Axios

Axios is a data fetching package that lets you send HTTP requests using a promise-based HTTP client. One of the notable features of Axios is its ability to intercept all the HTTP requests and responses. Let's see how we can use its interceptor.

### Usage

To use `axios` for requesting APIs, you need to install it first in your project. Here is the command you would need to run for this in your terminal:

```sh
npm install axios
```

Once it’s done, import `axios` at the top of the file where you are interested in making API requests.

```js
import axios from 'axios';
```

For this piece, I will use the [Famous Quotes API](https://RapidAPI.com/saicoder/api/famous-quotes4?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It provides you with thousands of APIs that you can use in your application.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

Here is a request that fetches quotes from the API using `axios`.

```js
import axios from 'axios';

const fetchQuotes = async () => {
	try {
		const res = await axios.get(
			`https://famous-quotes4.p.rapidapi.com/random`
		);
	} catch (err) {
		console.log(err);
	}
};
```

### Request Interceptor

We can set an interceptor for the request using the `.interceptors.request.use` property.

```js
import axios from 'axios';

axios.interceptors.request.use(config => {
	// Print this before sending any HTTP request
	console.log('Request was sent');

	return config;
});

const fetchQuotes = async () => {
	try {
		const res = await axios.get(
			`https://famous-quotes4.p.rapidapi.com/random`
		);
	} catch (err) {
		console.log(err);
	}
};
```

Try writing a log message in the following interactive component and click send. You should see the log message printed in your browsers console before the request is sent.

![Logged Message](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/http-interceptors-axios/images/log.png)

Let's say we want to add some headers to all the requests. We can do it like this:

```js
axios.interceptors.request.use(config => {
	config.headers['Header-1'] = 'Value';
	config.headers['Header-2'] = 'Value';
	return config;
});
```

### Response Interceptor

We can also set an interceptor for an HTTP response using the `.interceptors.response.use` property.

```js
import axios from 'axios';

axios.interceptors.response.use(config => {
	// Print this when receiving any HTTP response
	console.log('Response was received');

	return config;
});

const fetchQuotes = async () => {
	try {
		const res = await axios.get(
			`https://famous-quotes4.p.rapidapi.com/random`
		);
	} catch (err) {
		console.log(err);
	}
};
```

These interceptors will apply to all the requests and responses now.
