---
title: A Guide To Learn Fetch API
description: Fetch API is an asynchronous web API that comes with native JavaScript, and it returns the data in the form of promises. In this piece, let's take a look at how you can use Fetch API in your web apps.
publishedDate: 2021-11-12T20:22:52.607Z
lastModifiedDate: 2021-11-12T20:22:52.607Z
authors:
    - saad
categories:
    - interactive
    - webApis
tags:
    - fetch-api
coverImage: ''
---

<Lead>

There are thousands if not millions of APIs available on the Internet. Each API provides a different kind of information. You can use these APIs in your websites, android applications, desktop applications, and more.

</Lead>

There are multiple ways to call an API in your web application and then use the information it brings. One of them is by using the Fetch API. Let’s take a deeper look into it.

## What is the Fetch API?

In the simplest terms, the fetch API lets you talk with other REST APIs. It is an asynchronous web API that comes with native JavaScript, and it returns the data in the form of promises. Unlike other HTTP packages, you do not install it via npm or yarn, and you can also use it to call any backend service.

The fetch API is implemented in multiple interfaces that include Window and WorkerGlobalScope, etc. The Window is the global object that contains the DOM document, and it has several other functions, namespaces, objects related to the DOM. Because of this, fetch API is readily available to you for use when you are building a web application.

You can use the fetch API using the `fetch` method. It takes multiple arguments, and among them, one of them is required, i.e., the REST API URL.

If you are interested in looking at a more concise piece on fetch API, you can find it [here](https://rapidapi.com/guides/fetch-api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

## Fetch API Internals

The fetch API is built on top of Request and Response objects along with other things.
The Request object comes into play when you are making an HTTP request. Similarly, you receive a response with the help of the Response object. For communicating with the REST API, the fetch API uses HTTP/1.1 protocol that is unidirectional.

## HTTP Methods with Fetch API

To call a REST API, you need to use the HTTP methods. These methods let the calling API know what process it needs to perform. Does it need to send you back some data, or do you want to add some new records to your database? There are multiple use cases involved.

Here is a quick overview of the four most commonly used HTTP methods.

-   `GET`: You request data with this HTTP method. It can also take some query parameters if you need to send some data along with the API request.
-   `POST`: When you need to create some records in the database, you use the HTTP POST method.
-   `PUT`: This method lets you update the existing database record.
-   `DELETE`: As the name suggests, you can remove or delete data from the database with the DELETE method.

The fetch API uses the GET method by default if you do not provide any method type. Let’s look at how you can use the fetch API with different HTTP methods to call an API.

<HTTPClient
	appName="guides"
	isSampleCodeVisible
	allowedMethods={[
		{
			label: 'GET',
			value: 'GET'
		},
		{
			label: 'POST',
			value: 'POST'
		}
	]}
/>

## What are `method`, `headers` and `body`?

There are a couple of objects that you can send along with your API request with the help of fetch API. Each of these has different functions and achieves a particular task.

### Method

The method key lets you define the HTTP method for your API call. You can set its value to any [HTTP method](https://rapidapi.com/guides/everything-need-know-http-request-methods?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) you need, for instance, GET, DELETE, PATCH, etc.

### Headers

The `headers` is an object that you send along with your API request. It lets you pass additional information that you do not want to include in the request’s body. Headers are divided into four types: request headers, response headers, representation headers, payload headers.

You can use the headers to let the server know the type of data the client can accept. Here you can also define the type of encoding that the client can understand. You also put your API key here, so it is securely sent to the calling API or server.

<HTTPClient
	appName="guides"
	isResponseHeadersVisible
	isSampleCodeVisible
	allowedMethods={[
		{
			label: 'GET',
			value: 'GET'
		},
		{
			label: 'POST',
			value: 'POST'
		}
	]}
/>

If you want to have a deeper look into Headers, you can look at [this](https://rapidapi.com/guides/ten-widely-used-http-headers?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) piece.

### Body

When you use HTTP methods like `POST`, `PUT`, `DETELE`, etc., you need to send some information along with your request. It can be an object ID you want to delete from the database or some new object you want to store in the database. All this information goes into the body object.

## How to handle API responses with Fetch API?

As mentioned earlier, fetch is an asynchronous API that returns a promise. There are two ways you can handle the incoming response; You can create an async function and await the response or use the `then` keyword. Under the hood, both will work in the same way.

If you are using the `then` keyword, you need to put all the logic related to handling API data inside it.

## How to handle errors with the Fetch API?

There are two ways to go about error handling with fetch API. Using the async/await function, you can put your API call in the try/catch block. The try block will try to make the API call, and if it receives an error, the catch block will handle it.

The second way is if you are using the promising chaining with the `then` method, you can add another method called `catch` to handle the error. You can log the error on the console, or you can notify the user or both.

That’s pretty much it, folks! I hope you have a deep understanding of how to use the fetch API in your web applications to build incredible products.
