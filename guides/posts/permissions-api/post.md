---
title: Introduction To Permissions API
description: 'This web API lets you access the permission status of different APIs in a generalized manner. Using it, you can see whether a particular API has been granted permission or not. In this piece, we will briefly look at it and see how to use it.'
publishedDate: 2022-02-20T15:55:14.958Z
lastModifiedDate: 2022-02-20T15:55:14.958Z
authors:
    - saad
categories:
    - webApis
    - api
tags:
    - permission-api
    - web-api
    - api
coverImage: ''
---

<Lead>

A web API sometimes requires to request permission from the user to work. For instance, the notification API will need explicit permission from the user to show different notifications. This is just one example.

</Lead>

Since many APIs require different permissions, it can become messy to check the permission status of each API. So to take care of it, there is a web API designed for handling the permissions
status of different APIs. It’s called Permissions API. Let’s take a look at it.

## Permissions API

This web API lets you access the permission status of different APIs in a generalized manner. Using it, you can see whether a particular API has been granted permission or not. Unfortunately, this API is not supported on both Safari and Internet Explorer. It is also not supported on several versions of Firefox.

## Usage

Let’s look at how you can use this API. Let’s do it in steps to make it easier to follow:

### → STEP #1

Now create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Permissions API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Now inside the `script` tag, access the Permissions API via the `navigator` object.

```js
navigator.permissions.query({name: 'camera'});
```

The `query` method takes an argument that is an object. The object takes a key/value pair where the key is the `name` and its value is the permission you want to access. It is a Promise, so you can attach the `then` method to access a response.

```js
navigator.permissions.query({name: 'camera'}).then(status => {
	console.log(status);
});
```

The `status` is an object that will contain two key/value pairs. The first one is the `state` of the permission, and the second is the `onchange` function that will execute as soon as the permission changes.
