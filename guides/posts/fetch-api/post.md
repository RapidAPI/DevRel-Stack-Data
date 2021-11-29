---
title: Introduction to the Fetch API
description: Fetch API is a Web API that uses promises to make network requests over the HTTP/1.1 protocol.
publishedDate: 2021-11-03T16:27:05.876Z
lastModifiedDate: 2021-11-03T16:27:05.876Z
authors:
    - saad
categories:
    - webApis
tags:
    - fetch-api
coverImage: ''
---

<Lead>

When building a website, you use JavaScript to make it interactive. JavaScript helps create animations, execute something when an event takes place, manipulate DOM, data fetching from some API, and much more.

</Lead>

There are several Web APIs that you use without knowing it is an API. One of them is the `fetch` function, also known as the `fetch` API for making API requests. Let’s take a look at it.

## What is the fetch API?

It is a Web API that uses promises to make network requests over the HTTP/1.1 protocol. You can make both same or cross-origin requests using the Fetch API. This API takes at least one argument, i.e., the path of the resource you are interested in fetching. When the response is received, it is converted to JSON.

## How to fetch API?

Let’s take a look at how you can use fetch API.

```js
fetch(`YOUR-API`)
	.then(res => {
		res = res.json();
	})
	.catch(err => {
		console.log(err);
	});
```

You call the fetch API by invoking the `fetch` function. Since it returns a promise, you can use `then` to capture the response. The `catch` will capture any error you may encounter while making an API request. If you do not specify the HTTP method, the fetch API will use GET by default.

If you want to make a POST, PUT or DELETE request, you will need to provide a second parameter to the fetch API, which will be an object. This object will take two keys: method and body. In the method key, you will set the HTTP method that you want to use. In the body, you will provide the payload to send to the server.

```js
fetch(`YOUR-API`, {
	method: 'METHOD-NAME',
	body: JSON.stringify({
		payLoadkey: `value`
	})
})
	.then(res => {
		res = res.json();
	})
	.catch(err => {
		console.log(err);
	});
```

You can call any REST API using the fetch API in your websites.
