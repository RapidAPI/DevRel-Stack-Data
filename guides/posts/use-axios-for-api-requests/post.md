---
title: How to use Axios to make API requests?
description: There are a few ways you can request a REST API endpoint. You can use the `fetch` API or use external packages.
publishedDate: 2021-12-20T08:44:15.446Z
lastModifiedDate: 2021-12-20T08:44:15.446Z
authors:
    - saad
categories:
    - api
tags:
    - axios
    - api-requests
coverImage: ''
---

<Lead>

The REST APIs let you perform CRUD operations. There are a few ways you can request a REST API endpoint. You can use the `fetch` API or use external packages. If it is the latter case, many popular HTTP packages are available on npm. Axios is one of them. Let’s take a look at how you can perform API requests using [axios](https://www.npmjs.com/package/axios).

</Lead>

## Setting Up

To use `axios` for requesting APIs, you need to install it first in your project. Here is the command you would need to run for this in your terminal:

```sh
npm install axios
```

Once it’s done, import `axios` at the top of the file where you are interested in making API requests.

For this piece, I will use [Famous Quotes API](https://RapidAPI.com/saicoder/api/famous-quotes4?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It provides you with thousands of APIs that you can use in your application. Many APIs on RapidAPI Hub have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

### Making A Request

Take a look at the snippet below. If you want to make a GET request, you will use the `get` method of `axios`. If you’re going to make a POST, PUT, or DELETE request, you will use `post`, `put`, or `delete` method of `axios`. These are called HTTP methods.

The first parameter of these HTTP methods is the API you want to request, and the second parameter is an object where you can send params, headers, and your API request. The header is generally the area where you will add your API key.

```js
import axios from 'axios';

const requestAPI = async () => {
	try {
		const res = await axios.get(`API`, {
			headers: {},
			params: {}
		});
	} catch (err) {
		console.log(err);
	}
};
```

Here is an example of requesting data from an API using `axios`.

```js
import axios from 'axios';

const fetchQuotes = async () => {
	try {
		const res = await axios.get(
			`https://famous-quotes4.p.rapidapi.com/random`,
			{
				headers: {
					'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
					'x-rapidapi-key': API_KEY
				},
				params: {category: 'all', count: '10'}
			}
		);
	} catch (err) {
		console.log(err);
	}
};
```

This is pretty much it. Now go ahead and try to make some API calls using `axios`.
