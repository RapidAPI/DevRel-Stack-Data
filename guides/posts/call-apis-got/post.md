---
title: How to consume APIs using GOT in Node.js?
description:
    Node.js is a JavaScript runtime built on top of Chrome's V8 engine. In
    layman's terms, you can now run JavaScript in your terminal. In this piece, we
    will learn how to use the got node package to consume APIs in Node.js.
publishedDate: 2022-04-04T02:56:29.227Z
lastModifiedDate: 2022-04-04T02:56:29.227Z
authors:
    - saad
categories:
    - api
tags:
    - nodejs
    - api
coverImage: ''
---

<Lead>

There are several ways to call REST APIs. You can use the `fetch` web API, which comes by default in all major web browsers. There are node packages like `axios` and `got` that let you call a REST API with different HTTP methods. All these ways are pretty simple and easy to use.

</Lead>

Between [axios](https://www.npmjs.com/package/axios) and [got](https://www.npmjs.com/package/got), the latter provides more features and covers a wide range of use cases. `got` is a lighter, human-friendly, and powerful HTTP request library explicitly designed to work with Node.js. It supports pagination, RFC compliant caching, makes an API request again if it fails, supports cookies out of the box, etc.

Let's take a quick look at how you can use `got` to call a simple REST API using Node.js. We will use an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) for testing purposes. But before we go there, let's take a quick look at Node.js and REST APIs.

## Node.js

Before Node.js, you could only run JavaScript inside a web browser. It is a JavaScript runtime built on top of Chrome's V8 engine. In layman's terms, you can now run JavaScript in your terminal.

You need to download and install Node.js on your computer to get started. You can achieve this either by a version manager like nvm, n, etc. or by downloading it directly from the [Node.js](https://nodejs.org/en/download/) website. After installing it, open your terminal and run the following command:

```sh
node -v
```

If everything has gone smoothly, this command will show you the version of Node.js installed on your computer.

## REST API

It is the most common type of API, and many people often confuse the term API with the REST API. REST APIs allow you to perform CRUD (create, read, update, and delete) operations between a client and a server. It connects your backend with your frontend so they can communicate with each other.

Besides connecting your client and server, you can also find public REST APIs that provide you with data from some server when you make a call to it.

## Using got To Make API Call

Let's do all this in a bunch of steps to make things simpler and easier.

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create a `package.json` file inside this directory. This file contains the project's metadata. Open it and paste the following inside it:

```json
{
	"name": "got-test",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "node index.js"
	},
	"keywords": [],
	"type": "module",
	"author": "",
	"license": "ISC"
}
```

You can also create all this data by running the following command in your terminal.

```sh
npm init
```

If you want to keep the default values in your `package.json` file, run the following command:

```sh
npm init -y
```

### → STEP #2

In our project, we need to install the [got](https://www.npmjs.com/package/got) node package. To do this, open a terminal in the project directory and run the following command:

```sh
npm install got
```

Make sure you have a working internet connection. It will take some time and install `got` in your project directory.

### → STEP #3

We need to find an API that we will call using the `got` package. For this, I will use the [JSON Placeholder](https://jsonplaceholder.typicode.com/) API. You should look at its [website](https://jsonplaceholder.typicode.com/) to see different available endpoints.

### → STEP #4

Now create a JavaScript file called `index.js` in the root directory. We will write all the code inside this file.

### → STEP #5

The first thing we need to do is import `got` package at the top.

```js
import got from 'got';
```

The `got` package no longer supports CommonJS syntax, so we are using the ESM syntax.

Now create a simple asynchronous function. Name it anything you like. I am naming it `getData`.

```js
import got from 'got';

const getData = async () => {};
```

Now add a `try/catch` block inside this function. This will handle errors in case the API call fails. Now inside the `try` block, write the logic to make the API call using `got`.

```js
import got from 'got';

const getData = async () => {
	try {
		const res = await got
			.get('https://jsonplaceholder.typicode.com/posts/1')
			.json();
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};
```

Here, I have made a GET request to the JSON Placeholder API. It will return a response which I am logging on the terminal later.

Now we need to call this function.

```js
getData();
```

Afterward, run this file. For this, open the terminal in this directory and run the following command:

```sh
npm run test
```

It will take a minute and then log the following response on the terminal:

```json
{
	"userId": 1,
	"id": 1,
	"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
	"body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}
```

## Wrap Up

This is how simple and easy it is to call APIs using `got`. Now go ahead and try it yourself.
