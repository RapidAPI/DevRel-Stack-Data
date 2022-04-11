---
title: How To Set Request Headers Using Axios?
description: HTTP headers allow clients and servers to talk to each other and pass extra bits of information or instructions. Request headers are sent from the client to the server. Let's see how to set them using Axios.
publishedDate: 2022-04-04T20:53:04.094Z
lastModifiedDate: 2022-04-04T20:53:04.094Z
authors:
    - ahmad-bilal
categories:
    - http
tags:
    - axios
    - request
    - headers
coverImage: ''
---

<Lead>

HTTP is a protocol that web apps use to fetch data from the internet. Everything on your browser is transmitted over HTTP using requests. Headers are a vital part of these requests.

</Lead>

## HTTP Request Headers

HTTP headers allow clients and servers to talk to each other and pass extra bits of information or instructions. Request headers include additional information sent by the client to the server. They usually contain instructions about the required data and information about the client. The server can use these headers to customize the response. Some examples of request headers include:

-   Content-Type
-   Authentication and Authorization.
-   Encoding.

## Axios

Axios is a data fetching package that lets you send HTTP requests using a promise-based HTTP client. Let's see how we can use it to add request headers to an HTTP request.

### Usage

To use `axios`, you need to install it first in your project. Here is the command you would need to run in your terminal:

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
	const res = await axios.get(`https://famous-quotes4.p.rapidapi.com/random`);
	return res.data;
};
```

Now, there are multiple ways to set request headers. The most common way is to use the `headers` property of the `axios` object like this:

```js
import axios from 'axios';

const fetchQuotes = async () => {
	const res = await axios.get(
		`https://famous-quotes4.p.rapidapi.com/random`,
		{
			headers: {
				'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
				'x-rapidapi-key': API_KEY
			}
		}
	);
	return res.data;
};
```

You can also add these headers using a `config` object for a cleaner code.

```js
import axios from 'axios';

const fetchQuotes = async () => {
	const config = {
		headers: {
			'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
			'x-rapidapi-key': API_KEY
		}
	};

	const res = await axios.get(
		`https://famous-quotes4.p.rapidapi.com/random`,
		config
	);
	return res.data;
};
```

### Default headers

Your application may have multiple API requests, and you may want to set request headers for all of them. Instead of adding the headers to each request, you can put them as default headers, and they will apply to all the requests. To do so, use the `defaults.headers` property of the `axios` object.

This snippet will add the `x-rapidapi-key` header to all the requests.

```js
axios.defaults.headers.common['x-rapid-api-key'] = API_KEY;
```

If you want to add headers only to specific request types like `GET`, you can use the `defaults.headers.get` property. This snippet will add the `x-rapidapi-key` header to all the GET requests.

```js
axios.defaults.headers.get['x-rapid-api-key'] = API_KEY;
```

### Request Interceptors

Finally, you can also use request interceptors to add the headers. Request Interceptors allow us to modify all the HTTP requests before sending them. We can set an interceptor for the request using the `.interceptors.request.use` property and specify our headers like this.

```js
import axios from 'axios';

axios.interceptors.request.use(config => {
	config.headers['x-rapidapi-host'] = 'famous-quotes4.p.rapidapi.com';
	return config;
});
```

For more detail, check out our guide on [HTTP Interceptors](https://RapidAPI.com/guides/http-interceptors-axios).

## Final Note

This guide was an overlook on setting HTTP request headers using Axios. You can find more guides on [HTTP](https://RapidAPI.com/guides/categories/http) here.
