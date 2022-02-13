---
title: How to call APIs using TypeScript?
description: 'TypeScript is the superset of JavaScript that offers type-checking to avoid issues related to types. This guide describes how to make type-safe calls to APIs using TypeScript.'
publishedDate: 2022-01-13T19:10:30.765Z
lastModifiedDate: 2022-01-13T19:10:30.765Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - api
    - typescript
coverImage: ''
---

<Lead>

TypeScript helps developers by offering static typing, which enforces type checks during development instead of during run time. Consequently, the code quality and readability are also improved.

</Lead>

## API Calls

The process of calling APIs in TypeScript differs from JavaScript. These are the additional tasks you need to do in TypeScript:

-   Assigning a type to the API call.
-   Assigning a type to the API response.

### API

I will use the [Currency Conversion and Exchange Rates](https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) as the API for this guide. Go ahead and subscribe to it. On the Endpoints page, select the **Convert** endpoint and click on the **Test Endpoint** button to get the response.

Following is the response we receive from the API:

```json
{
	"success": true,
	"query": {
		"from": "USD",
		"to": "EUR",
		"amount": 750
	},
	"info": {
		"timestamp": 1642403043,
		"rate": 0.876002
	},
	"date": "2022-01-17",
	"result": 657.0015
}
```

### Creating the Interface

Next, we need to create an interface to describe the response properties. Later on, we will assign this interface as a type to the API call and response.

We can create the interface by observing the JSON response above, and it will look like this.

```js
interface ConversionData {
    success: boolean
    query: {
        from: string
        to: string
        amount: number
    }
    info?: {
        timestamp: string
        rate: number
    }
    date: string
    result: number
}
```

After `info`, the question mark means that the info object is optional. This is helpful for values that the API may not return.

### API Call

We will create a function `getConvertedData` that will house the code for fetching the API. Say we are using the Fetch API, which returns a Promise. This Promise will then resolve into an object of the type `ConversionData`.

Let's assign the types to this function:

```js
function getConvertedData(): Promise<ConversionData> {
	// API call will go here.
}
```

### API Response

Now, we need to populate this function with code for fetching the API. [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. Go back to the [Conversion API Page](https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select the (JavaScript) fetch code snippet:

![JavaScript Fetch Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/api-call-typescript/images/snippet.png)

If you copy this snippet and use it in the function, your TypeScript compiler will show an error. That is because your function expects a return value of type `ConversionData` while you have not specified any type currently. If no type is specified, TypeScript assumes the `any` type. We need to cast the response type from `any` to `ConversionData`.

After making the required changes, our function will look like this:

```js
function getConvertedData(): Promise<ConversionData> {
	return fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
			'x-rapidapi-key': 'your_api_key',
		},
	})
		.then((response) => response.json()) // Parse the response in JSON
		.then((response) => {
			return response as ConversionData; // Cast the response type to our interface
		});
}
```

That is pretty much it, and now we can successfully interact with the API in TypeScript.
