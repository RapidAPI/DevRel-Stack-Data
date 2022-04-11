---
title: Interactive Guide to XMLHttpRequest API
description: XMLHttpRequest a Web API that lets you communicate with the server via a REST API endpoint to fetch data and then show it to the user without refreshing the page. Let's take a look at what this API is and how you can use it in your web applications.
publishedDate: 2022-02-13T18:31:12.981Z
lastModifiedDate: 2022-02-13T18:31:12.981Z
authors:
    - saad
categories:
    - interactive
    - web-apis
tags:
    - xmlhttprequest-api
    - web-api
    - api
coverImage: ''
---

<Lead>

Sometimes you do not want to use a framework or library to develop your website. Instead, you rely on plain old HTML, CSS, and Vanilla JavaScript. They all work well, but there are a few limitations. One is page refresh to show updated data.

</Lead>

Fortunately, a Web API exists that helps you fetch data from an API and then show it to the user without refreshing the page. It’s XMLHttpRequest API, and in this piece, we will look at it and how you can use it on your websites.

## XMLHttpRequest API

As mentioned earlier, it’s a Web API that lets you communicate with the server via a REST API endpoint to fetch data and then show it to the user without refreshing the page. You can also send data to the server in the background via this API.

Despite its name, the XMLHttpRequest API is not limited to XML data. You can also request JSON data via this API.

There are multiple properties and methods that come along with this API. Let’s discuss a few of them:

### readyState

It is a property of the XMLHttpRequests API that lets you know the state of the request. The state can be `UNSENT`, `OPENED`, `HEADERS_RECEIVED`, `LOADING`, `DONE`.

### status

This property returns an unsigned short with the status of the response to the request.

### open

It is a method provided by the API to initialize an HTTP request. It takes five arguments, among which three are optional. The first required argument is the HTTP method, and the second is the API endpoint.

### abort

This API method aborts all HTTP request if it has already been sent.

## Usage

Let’s take a look at how you can use this API in your web applications:

## → STEP #1

You need to create a project. For this, create a folder on your computer and open it in your preferred code editor.

## → STEP #2

Once you are done, create a file called `index.html` in your project directory and add basic HTML boilerplate code inside it. I have also provided the code below if you quickly want to copy-paste it.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>XMLHttpRequest API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

## → STEP #3

Now let’s see how you can make the request. First, you need to initialize the XMLHttpRequest API instance. Here is how you do it:

```js
const xhr = new XMLHttpRequest();
```

Now we need to call the `open` method that I discussed above.

```js
xhr.open(method, url);
```

We need to change the response type to JSON to let the API know that we need JSON formatted data:

```js
xhr.responseType = 'json';
```

The last thing we need to do is send the request. Here is how you do it:

```js
xhr.send();
```

You also need to handle the response you receive when you make the API call. For this, you set `onload` event listener on the XMLHttpRequest instance.

```js
xhr.onload = () => {
	console.log(xhr.response);
};
```

You can also wrap the entire XMLHttpRequest code in a promise and then await it to make it asynchronous. I have also created a quick demo for better understanding.

<LearnXMLHttpRequestAPI url="https://rapidapi.com/guides/api/rest" />

## Support

The XMLHttpRequest API is supported across all modern web browsers, including Chrome, Firefox, Edge, Opera, and Safari.
