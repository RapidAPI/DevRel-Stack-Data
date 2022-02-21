---
title: How to build a REST API using Node.js and Express.js in 5 minutes
description: For retrieving, deleting, creating or updating existing data, we need a communication channel to move the data around. That's where a REST API comes in. In this piece, we are going to build a REST API using Node.js and Express.js.
publishedDate: 2022-02-20T15:55:14.958Z
lastModifiedDate: 2022-02-20T15:55:14.958Z
authors:
    - saad
categories:
    - api
tags:
    - rest-api
    - build-rest-api
    - api
coverImage: ''
---

<Lead>

When developing an application, you often need to create REST APIs to communicate with the server. The question is, why do you need a server? While there are many reasons, one is you perform all the database operations on the backend, so the sensitive data is not exposed to the browser.

</Lead>

Since you need to either retrieve, delete, create or update existing data, you need a communication channel to move the data around. And that channel is the REST API. If you want to read more about REST APIs, check out this [article](https://RapidAPI.com/guides/what-is-rest-and-when-you-should-use-it?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Before we dive into how you can make a REST API, let’s first take a look at Node.js and Expres.js.

## Node.js And Express.js

Before Node.js, you could only run JavaScript inside a web browser. It is a JavaScript runtime built on top of Chrome’s [V8](https://v8.dev/) engine. In layman terms, you can now run JavaScript in your terminal.

Express.js is a backend Node.js framework used to set up a Node.js based server. It is minimal and flexible and provides a robust set of features for web and mobile applications. You can create routes, middlewares, and everything you need in a server using it.

## Build A REST API

Let’s go ahead and start building a REST API using Node.js and Express.js. We will do it in steps to make it easier to follow.

### → STEP #1

You can skip this step if you have already installed Node.js on your computer. If you haven’t, you can download the latest version from [here](https://nodejs.org/en/download/). Afterward, install it on your computer and then restart it.

### → STEP #2

Now create a directory on your computer and open it in your preferred code editor. Now create a `package.json` file inside this directory and copy-paste the following code there:

```json
{
	"name": "rest-api",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"keywords": [],
	"author": "",
	"license": "ISC"
}
```

You can write your name as a value to the `name` key.

We need to install Express.js in this project. For this, open your terminal inside this directory and run the following command:

```sh
npm install express
```

You can run your Node.js server via the `node` command, but the drawback is that you would have to restart the server whenever there is a change in the server files. What we can do is use `nodemon` instead. It will run the server without the previously mentioned drawback.

```sh
npm install -D nodemon
```

I am installing `nodemon` as a developer dependency because your server code will not depend on it.

Once done, update your `package.json` file to add the `script` key. It will take an object as its value. Inside the object, you will define the commands and what they do. Add the `server` key in this object with the value `nodemon index.js`.

Here is an updated `package.json` file that you can refer to just in case:

```json
{
	"name": "rest-api",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"server": "nodemon index.js"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"nodemon": "^2.0.15"
	},
	"dependencies": {
		"express": "^4.17.3"
	}
}
```

### → STEP #3

Now create a file called `index.js` in your project directory and import express inside it.

```js
//commonjs syntax
const express = require('express');

//or

// ES6 syntax
import express from 'express';
```

Now create an express application by adding the following code in the `index.js` file:

```js
const app = express();
```

We need to introduce a middleware so our server recognizes the incoming request objects as JSON objects. For that, add the following piece of code in `index.js` file:

```js
app.use(express.json());
```

Lastly, we need to listen for a connection to know that our server is running. You can do this by adding the following lines of code in your `index.js` file:

```js
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
```

After all this, the `index.js` file will look something like this:

```js
// importing packages
const express = require('express');
const app = express();

// middlewares
app.use(express.json());

// port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
```

### → STEP #4

Create a folder called `routes` in the root directory and inside this folder, create a file called `hello.js`. Inside the file, copy-paste the following code:

```js
// importing packages
const express = require('express');
const router = express.Router();

router.get(`/`, function (req, res) {
	res.status(200).json({msg: `It's a GET request.`});
});

router.post(`/`, function (req, res) {
	res.status(200).json({msg: `It's a POST request.`});
});

router.put(`/`, function (req, res) {
	res.status(200).json({msg: `It's a PUT request.`});
});

router.delete(`/`, function (req, res) {
	res.status(200).json({msg: `It's a DELETE request.`});
});

module.exports = router;
```

I am importing packages at the top of the file and creating a router using the express package. Afterward, I have written four functions of `router` to handle the GET, POST, PUT, and DELETE requests. In each of these functions, I am passing a callback function as the second parameter to send a response to the client.

Lastly, I am exporting the router I have just created from this file.

### → STEP #5

Import this file inside the `index.js` file using the following code:

```js
const hello = require('./routes/hello');
```

Now register this route in your application like this:

```js
// adding routes
app.use('/hello', hello);
```

The functions inside the `hello.js` file will run when the client requests the `/hello` endpoint. For instance, `https://api/hello`.

The code in the `index.js` file will look like this in the end:

```js
// importing packages
const express = require('express');
const app = express();
const hello = require('./routes/hello');

// middlewares
app.use(express.json());

// adding routes
app.use('/hello', hello);

// port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
```

### → STEP #6

Now start the server by running the following command in the terminal:

```sh
npm run server
```

Go to [this](http://localhost:5500/hello) URL. You will see a response like the following:

![GET request API response](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/7a12cc3371acdc4efc481ec468aad6ebe9080153/guides/posts/build-rest-api/images/response.png)

The GET request is executing because when you call an API via the browser’s address bar, it makes a GET request to the API.

## Wrap Up

If you followed along until now, you would have successfully created a REST API. Since it is a server, make sure you handle CORS; otherwise, your API requests will be blocked. We have also written a [piece](https://RapidAPI.com/guides/handle-cors-express?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on how you can do it. Other than this, I hope this article helped you understand how to create a simple REST API.
