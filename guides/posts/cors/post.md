---
title: 'What is CORS?'
description: 'Understanding what CORS is and how to deal with it.'
publishedDate: 2021-10-05T15:41:15.688Z
lastModifiedDate: 2021-10-05T15:41:15.688Z
authors:
  - saad
categories:
		- http
tags:
    - cors
coverImage: ''
---

<Lead>
	Have you ever requested data from some API but instead got an error like
	Cross-Origin Request Blocked? You might have also seen this while developing
	a full-stack application, and let’s take a look at it.
</Lead>

## Cross-Origin Resource Sharing (CORS)

CORS is a mechanism implemented by browsers that block websites to request data from some other URL. When a browser makes a request, it adds an origin header to the request message. If it goes to the server of the exact origin, it is allowed by the browser, and if it does not, the browser blocks it.

There are different types of requests that use CORS. For instance, the XMLHttpRequest or Fetch API both use CORS when invoked. The Web Fonts also require CORS to be enabled. If you use an image hosted on another server, it must be CORS compatible; otherwise, it will not render on the screen.x3

The browser ensures this type of strategy mainly because of security reasons. However, there are still ways to override it.

## Dealing With CORS

You can only fix the CORS error from the backend of the project. If it is a Node.js and Express.js backend, you can fix it by following steps:

### STEP #1

Install the Node.js CORS middleware by running the following command in your project terminal:

```sh
npm install cors
```

### STEP #2

Then you need to import this middleware in the file that is the entry point to your backend. You can do this by writing the following at the top of the file.

```js
const cors = require(‘cors’)
```

#### STEP #3

Now you need to register CORS middleware in your app and also provide it an origin. The origin is the URL of your front-end.

```js
app.use(cors({origin: ‘https://abc.com’}))
```

## How It Works

During cross-origin requests, the value of origin in the request header must match the value of Access-Control-Allow-Origin in the response header. The server sets the value of Access-Control-Allow-Origin. When you add an origin in the backend code, the CORS middleware uses it for cross-origin communication and only allows this URL to request resources from the server.
