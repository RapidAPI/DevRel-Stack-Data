---
title: How to send data to the server via API?
description: There are different ways to send data along with the API request all the way to the server. You can either send it through the query string parameters or the request body. In this piece, let's learn how you can do it in your web app.
publishedDate: 2022-05-24T02:53:28.085Z
lastModifiedDate: 2022-05-24T02:53:28.085Z
authors:
    - saad
categories:
    - interactive
    - api
tags:
    - send-data-server
    - api
coverImage: ''
---

<Lead>

A lot goes in when making an API call. You have to select the appropriate request method depending on the endpoint. If the endpoint accepts a GET request, it will send you back data. If the accepting request is POST, you will send some data to the API, and you may receive a response.

</Lead>

Similarly, there are different ways to send data along with the API request all the way to the server. You can either send it through the query string parameters or the request body. The decision depends on the request method.

In this piece, let’s look at how and where you should use query parameters and the request body to send the data back to the server.

## Query String Parameter

It is the most common way to send data to the server. The query string parameter extends the base URL of the API by adding a query string at the end that includes field/value pairs. A query string is a string that starts with a `?` and includes parameters listed one after the another, separated by `&`. An example query string looks like this:

```sh
​​?guests=3&days=2&time=1400
```

The path of the query string parameter does not matter. You can set them as you go.

The query parameters are not limited to the GET request. You can add them to all kinds of API request methods, including POST, DELETE, PATCH, etc.

<LearnQueryRequestBody showQuery />

It is considered bad practice to send sensitive data like API keys, user credentials, etc., via query parameters. If the API request is interrupted in the middle, the data will be exposed to everyone.

## Request Body

Request body parameters are used when clients send data to the API. Generally, parameters are shipped in a JSON Object in POST, PUT, or PATCH requests.

The JSON object is included in the request body, so these parameters are called request body parameters. The endpoint remains simple, like `/hotels/find`, but you can include a JSON object with many key-value pairs in the request body.

```json
{
	"guests": 3,
	"city": "san francisco",
	"time": 1433524597
}
```

Although request body parameters are still used, they are not considered a parameter anymore in [OpenAPI v3.0](https://swagger.io/docs/specification/describing-request-body/).

<LearnQueryRequestBody showRequestBody />

## Using Fetch API To Send Data via Query Parameter

You need to have a small Node.js server set up to follow along. For this, you can refer to this [guide](https://RapidAPI.com/guides/build-rest-api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), where we talked about how to build a Node.js server in a few minutes.

### → STEP #1

I assume you have set up a Node.js server. Go ahead and run it on port 5500.

### → STEP #2

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Send Data via Query Parameter</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #3

We will send a get request to the server using the fetch. In the request, we will add some API query parameters.

```html
<script>
	(async () => {
		try {
			const res = await fetch('http://localhost:5500/hello?name=John', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: 'GET'
				})
			});
		} catch (err) {
			console.log(err);
		}
	})();
</script>
```

You can see that the API contains the query parameter `name`.

## Using Fetch API To Send Data via Request Body

All the steps till step #2 will stay the same. All you need to do is add a body object in the API call and change the request method to POST.

```html
<script>
	(async () => {
		try {
			const res2 = fetch('http://localhost:5500/hello?name=John', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: 'John Doe'
				})
			});
		} catch (err) {
			console.log(err);
		}
	})();
</script>
```

In the API request above, you can see that there is a body object that takes a string. Hence I have stringified the object.

## Wrap Up

That’s about it. Now you know how you send data to the server via an API.
