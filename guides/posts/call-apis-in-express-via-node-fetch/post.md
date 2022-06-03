---
title: How to use node-fetch to consume APIs on the Express server?
description: There is an npm package that can help you utilize the capabilities of fetch while writing Express code. It’s called node-fetch. In this piece, let’s learn how to use node-fetch on the Express server.
publishedDate: 2022-06-03T15:20:42.091Z
lastModifiedDate: 2022-06-03T15:20:42.091Z
authors:
    - saad
categories:
    - api
tags:
    - call-api-node-fetch-express
    - node-fetch
    - api
coverImage: ''
---

<Lead>

The client-side communicates with the server via the help of APIs. The backend developers write APIs so the client can request data. These APIs are used for performing CRUD (Create, Read, Update, and Delete) operations on the database.

</Lead>

APIs are not limited to being called on the client-side. You might have to request the public REST APIs on the server. Since `fetch` is a web API, you will not be able to use it on server code. Although there is an npm package that can help you utilize the capabilities of `fetch` while writing Express code. It’s called `node-fetch`.

In this piece, let’s learn how to use `node-fetch` on the Express server. But before we do that, we will look at the package itself.

## node-fetch

It is a lightweight npm package that lets you use `fetch` API in Node.js. The [node-fetch](https://www.npmjs.com/package/node-fetch) package has over 31 Million weekly downloads, and currently, more than 4.7 Million projects are relying on it. It has almost 7.6k stargazers and 911 forks. The package is well-maintained, so you would not have to worry about bug fixes.

## Using node-fetch on Server

I am hoping you have set up a Node.js Express server. If you haven’t, you can read this [piece](https://rapidapi.com/guides/build-rest-api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) where in six simple steps, we built a server from scratch.

We will do everything in steps to make things simpler and easier to learn.

### → STEP #1

You need to install `node-fetch` in your project. To do this, open a terminal inside your project directory and run the following there:

```sh
npm install node-fetch
```

Depending on your internet, it will take a minute to install `node-fetch` in your project. Now, if you open your `package.json` file, you will see `node-fetch` has appeared in dependencies.

### → STEP #2

Now it’s time to import `node-fetch` in your project files. For this, open the file where you want to call the public REST API and copy the following piece of code and paste it at the top of the file:

```js
// es6 syntax
import fetch from 'node-fetch';
```

This is ES6 syntax. It will not work if your server is following CommonJS syntax. So to deal with it, instead of the above line of code, you can import the following:

```js
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
```

Since `node-fetch` supports ES6 syntax, the above line of code is a workaround provided by the package developers to support CommonJS.

### → STEP #3

Once you have successfully downloaded the package and imported it, the only thing remaining is using it now. The package works the same way as the traditional `fetch` API. It takes an API endpoint and object as its second parameter where you define the HTTP request method, header, request body, etc.

For the sake of this piece, let’s call the [Famous Quotes API](https://RapidAPI.com/saicoder/api/famous-quotes4/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) available to you by [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). Kindly make sure you subscribe to it first before trying to use it.

We will make a GET request to the API on the Express server. To do this, we need to define the API endpoint:

```js
const url = `https://famous-quotes4.p.rapidapi.com/random?category=all&count=2`;
```

You can see that I have added two query parameters in the API endpoint. Afterward, we need to define an object. You can call it whatever you like but for now, let’s go with options.

```js
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
		'X-RapidAPI-Key': 'your-rapidapi-key'
	}
};
```

Replace `your-rapidapi-key` with the API key provided by [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) when you subscribe to the [Famous Quotes API](https://rapidapi.com/saicoder/api/famous-quotes4/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Lastly, let’s call the API. Here is how you do it:

```js
// promise syntax
fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

// async await syntax
try {
	const res = await fetch(url, options);
	const json = await res.json();
	console.log(json);
} catch (err) {
	console.log(err);
}
```

You can choose any one of the syntaxes that you like. Both will make the API call.

Here is the complete code snippet of consuming APIs on the Express server:

```js
// importing packages
const express = require('express');
const router = express.Router();

const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get(`/`, async function (req, res) {
	const url =
		'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
			'X-RapidAPI-Key': 'your-rapidapi-key'
		}
	};

	// promise syntax
	fetch(url, options)
		.then(res => res.json())
		.then(json => console.log(json))
		.catch(err => console.error('error:' + err));

	try {
		let response = await fetch(url, options);
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
});

module.exports = router;
```

You can see that I have made the API call inside an Express route.

## Wrap Up

That’s all, folks! Now you know that there is a `fetch` API available for Node.js that you can use to consume APIs on the server. I hope this piece helped you to learn more about it.
