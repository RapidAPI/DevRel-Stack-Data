---
title: How to handle API Errors Using Response Helpers in Next.js?
description: In the course of Fetching APIs in Next.js, we may encounter an error if the API request doesn't go as planned. Let's see how to manage these errors using Next's Response Helpers.
publishedDate: 2022-04-15T07:24:44.264Z
lastModifiedDate: 2022-04-15T07:24:44.264Z
authors:
    - ahmad-bilal
categories:
    - api
tags:
    - nextjs
    - api
    - error-management
    - response-helpers
coverImage: ''
---

<Lead>

In the course of fetching APIs in Next.js, we may encounter an error if the API request doesn't go as planned. Let's see how to manage these errors using Next's Response Helpers.

</Lead>

## Next.js

It is a web framework built on top of React.js. Next.js extends the capabilities of React.js by providing the developers features like server-side rendering, static site generation, incremental static generation, a working REST API, file-system-based routing, dynamic routing, etc. It provides better optimization, additional structure, and features to your application. All in all, it is focused on better data fetching.

## API Errors

When a request to an API doesn't go as planned, an API error occurs. So, the API must respond to the client specifying whether the request was successful or not. In this case, we should send an error response, and it is the only way for the developers to diagnose what went wrong. HTTP Status Codes are used for this purpose. The following status codes notify about the errors.

-   `4xx` - Client error. Such as `404: Requested URL not found`.
-   `5xx` - Server error.

Informing the client about the error helps them understand the error and its cause.

## Next.js API Routes

Next.js provides API routes that allow you to create your own API. Any file inside the `pages/api` is dealt with as an API endpoint, which the client-side can access. Here is an example API route that fetches an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

```jsx
// pages/api/getColors.js
import axios from 'axios';
export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://random-palette-generator.p.rapidapi.com/palette/'
	};
	try {
		let response = await axios(options);

		// Send response to the client side
	} catch (error) {
		// Send error to the client side
	}
}
```

As you can see, we need some way to send the response and error (if any) to the client-side. This is where the Response Helpers come into play.

## Response Helpers

They are helper functions like those in Express.js that make managing HTTP requests and their response easy. They are available in the Server Response object, often abbreviated as `res` like the code above. Here are the main helper functions:

-   `res.send(body)`. It sends the HTTP response received from the API to the client.
-   `res.json(body)`. It sends the response in JSON.
-   `res.status(code)`. Sets an HTTP status code.

In order to send a successful response, we set its status code to 200 using the `.status` helper and combine it with `res.send` or `res.json`. For example:

```jsx
// pages/api/getColors.js
import axios from 'axios';
export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://random-palette-generator.p.rapidapi.com/palette/'
	};
	try {
		let response = await axios(options);
		// Sends response to the client side
		res.status(200).json(response.data);
	} catch (error) {
		// Send error to the client side
	}
}
```

Similarly, we can send an error message to the client-side if an error occurs. For example, to send a `500` error, we can do something like this:

```js
// pages/api/getColors.js
import axios from 'axios';
export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://random-palette-generator.p.rapidapi.com/palette/'
	};
	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		// Sends error to the client side
		res.status(500).send('Internal Server Error.');
	}
}
```

If you are using Axios, you can also set the error details dynamically using the `error.response` object.

```js
// pages/api/getColors.js
import axios from 'axios';
export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://random-palette-generator.p.rapidapi.com/palette/'
	};
	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		// Sends error to the client side
		res.status(error.response.status).send(error.response.data);
	}
}
```

Now you know how to manage API errors using Response Helpers in Next.js.
