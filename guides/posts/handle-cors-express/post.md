---
title: How to handle CORS in Express?
description: With Express.js, you can use JavaScript on the server. In this piece, we will look at how you can handle CORS in and Express backend.
publishedDate: 2022-02-13T18:31:12.981Z
lastModifiedDate: 2022-02-13T18:31:12.981Z
authors:
    - saad
categories:
    - http
tags:
    - express
    - cors
    - api
coverImage: ''
---

<Lead>

There are several technologies available that you can use for developing backend infrastructure. For instance, there is Python, Node.js and Express.js, Ruby on Rails, etc. Whatever technology you choose, you would have to handle CORS at the server so the frontend can access it via REST API.

</Lead>

Before we go into handling CORS, let’s briefly look at it.

## Cross-Origin Resource Sharing (CORS)

CORS is a mechanism implemented by browsers to block requests from domains other than the server's one. When a browser makes a request, it adds an origin header to the request message. If it goes to the server of the exact origin, it is allowed by the browser, and if it does not, the browser blocks it.

We have written a more detailed guide on CORS that you can find [here](https://RapidAPI.com/guides/cors?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

## Handling CORS in Express Backend

Handling CORS is simple enough in JavaScript. The folks who built Express.js (JavaScript backend framework) have also written a node package to enable CORS with different options. Let’s do it in steps to make things easier:

### → STEP #1

I am hoping you have a [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) backend set up. Open the terminal and type in the following command. Once you have done, press Enter.

```sh
npm install cors
```

This command will download and install [cors](https://www.npmjs.com/package/cors) package in your project. You can open the `package.json` file to see `cors` in the dependency object.

### → STEP #2

Now open your server’s entry point file and import `cors` at the top. Here is how you can do it:

```js
// es6 syntax
import cors from ‘cors’;

//commonjs syntax
const cors = require(‘cors’);
```

### → STEP #3

CORS is handled in your backend’s middlewares. So if you want to allow all CORS requests to your backend, you can do this using the following code snippet:

```js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
```

If you want your backend to be accessed via a single origin, you can do the following:

```js
const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
	origin: 'http://example.com',
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
```

The backend will only be accessible by the origin URL defined in the `corsOptions` object.

## Wrap Up

This was a brief introduction to handling CORS in your server. I hope you now know why your cross-origin requests fail and how to fix them.
