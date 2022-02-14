---
title: How to use the Fetch API with async/await
description: Fetch API is a Web API that uses promises to make network requests over the HTTP/1.1 protocol. This guide will demonstrate how to handle these promises through async/await.
publishedDate: 2022-02-10T16:27:05.876Z
lastModifiedDate: 2022-02-10T16:27:05.876Z
authors:
    - ahmad-bilal
categories:
    - webApis
    - api
tags:
    - fetch-api
coverImage: ''
---

<Lead>

Fetch API is an asynchronous web API that comes with native JavaScript, and it returns the data in the form of promises.

</Lead>

You use several Web APIs without knowing that they are APIs. One of them is the Fetch API, and it is used for making API requests. Let’s take a look at it.

## Fetch API

To put it simply, the Fetch API lets you talk with other APIs. It is a Web API that uses promises to make network requests over the HTTP/1.1 protocol. You can make both same or cross-origin requests using the Fetch API.

Fetch API is included in all modern browsers, and you do not need to import any third-party library through yarn or npm. You can use the fetch API using the `fetch` method. It takes multiple arguments, including the API endpoint's URL, i.e., the path of the resource you are interested in fetching.

## The Response Object

Fetch API uses two objects, `Request` and `Response`. This `Response` object holds the data sent by the API. Fetch sends the `Request` and returns a promise, which is resolved to the `Response` object when the request completes. If the request fails, the promise is rejected.

To get the data received in the response, you need to wait for this promise to resolve into the `Response` object. One way is to use `then` to capture the response.

```js
fetch(
	'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
	{
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'your_api_key'
		}
	}
).then(response => {
	console.log(response);
});
```

## Using async/await

A better and cleaner way of handling the promise is through the async/await keywords. You start by specifying the caller function as `async` and then use `await` to handle the promise.

```js
async function getResponse() {
	const response = await fetch(
		'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
				'x-rapidapi-key': 'your_api_key'
			}
		}
	);
}
```

Because of the `await` keyword, the asynchronous function pauses until the promise is resolved. The `Response` object is assigned to `response` once the request completes.

## Extracting Data

Although we have the Response object now, we can't access the data inside it right away. The `response` object returned by `await fetch` supports multiple functions for different data formats, which include:

-   `response.json`: Returns data as a JSON Object.
-   `response.text`: Returns data in raw text.
-   `response.formData`: Returns data as [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
-   `response.blob`: Returns data as a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) Object.
-   `response.arrayBuffer`: Returns data as a [Array Buffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) Object.

All these functions return a promise which resolves into the specific data form. So we will use the `await` keyword again to extract the API response. Our code will take the following form:

```js
async function getResponse() {
	const response = await fetch(
		'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
				'x-rapidapi-key': 'your_api_key'
			}
		}
	);
	const data = await response.json(); // Extracting data as a JSON Object from the response
}
```

## Handling Errors

If the API request fails, we should handle the error and display an error message. With async/await, we can use the `.ok()` method to implement error handling:

```js
async function getResponse() {
	const response = await fetch(
		'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
				'x-rapidapi-key': 'your_api_key'
			}
		}
	);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
}
```

That is pretty much it. You are all set to use the Fetch API with `async/await`.
