---
title: A Deep Dive Into Built-in Next.js REST API
description:
    Next.js lets you create API routes right inside the application as a
    serverless function. No need to set up a Node.js server. Just create a
    JavaScript file inside the pages/api directory. In this guide, let's take a
    deep look at the ins and outs of this built-in REST API.
publishedDate: 2022-04-21T10:55:21.099Z
lastModifiedDate: 2022-04-21T10:55:21.099Z
authors:
    - saad
categories:
    - api
tags:
    - rest-api
    - nextjs
    - api
coverImage: ''
---

<Lead>

When building an enterprise-scale web application, you often have to design the client and server sides separately. Depending on your requirements, you can choose any framework, library, or language. Each of them provides unique features that you can harness.

</Lead>

There are several technology stacks; for instance, the MERN stack comprises React.js for the client-side, Express.js and Node.js for the server-side, and MongoDB as the database. Similarly, the MEAN stack uses Angular instead of React. Both use Node.js and Express.js for writing server code, creating APIs, routes, etc.

With Next.js, you can write your REST APIs without setting up a Node.js server. We will look at this built-in REST API in a minute but before that, let’s have a quick introduction to Next.js.

## Next.js

It is a web framework built on top of React.js. Next.js extends the capabilities of React.js by providing the developers features like server-side rendering, static site generation, incremental static generation, a working REST API, file-system-based routing, dynamic routing, etc. It provides better optimization, additional structure, and features to your application.

Since it extends React.js, you can start by writing all the React.js code and eventually add Next.js features to your application. You can make the application server-side rendered, so all the data has been pre-fetched before loading the web app in the browser. Afterward, you can also write a simple REST API without setting up a Node.js server.

## Built-in REST API

Next.js lets you create API routes right inside the application as a serverless function. No need to set up a Node.js server. Just create a JavaScript file inside the `pages/api` directory. The name of the file will act as the API endpoint. If you want to create nested API routes, create a directory structure inside `pages/api`.

Now, let’s learn how you can create these routes yourself.

### → STEP #1: Setting Up Next.js Application

To work with Next.js, you will need to bootstrap its project. While you can do it yourself, the easier way is using its command-line tool, i.e., create-next-app. For this, run the following command inside your terminal:

```sh
npx create-next-app [app_name]
```

Replace the `[app_name]` with the name of your application.

### → STEP #2: Running The Application

After generating a simple Next.js boilerplate, open it in your preferred code editor. Now open your terminal inside this project directory and run the following command:

```sh
npm run dev
```

This will start the development server of your application.

### → STEP #3: Built-in API

Navigate to the `pages/api` directory. Inside it, you will find a `hello.js` file. Go ahead and open it. You will find that it is exporting a function that takes two parameters, i.e., request and response. And inside the exported function, a JSON response is sent via the response parameter. You can use the request object to access your API call's values sent as parameters.

If your app is running, go ahead and open this link in your browser. It will show the JSON response that you sent inside the exported function.

```
http://localhost:3000/api/hello
```

The response will look like this:

```json
{"name": "John Doe"}
```

### → STEP #4.1: Creating API Routes

Now it’s time to create your API route. For this, go ahead and create a JavaScript file inside `pages/api` directory. Let’s call this file `courses`. Once you are done, copy-paste the following code inside it:

```js
export default (req, res) => {
	res.status(200).json({
		firstCourse: 'Web Development',
		secondCourse: 'AI',
		thirdCourse: 'Mobile Development'
	});
};
```

I have already described the mechanics of the above code snippet in the last step. After you are done, go to this link. You will find all the courses listed as a JSON response in your web browser.

```
http://localhost:3000/api/courses
```

### → STEP #4.2: Nested API Routes

Creating nested API routes is also simple in Next.js. For this, create a directory inside the `pages/api`. Let’s call this directory `blog`. Inside it, create an `index.js` file and copy-paste the following code into it:

```js
export default (req, res) => {
    res.status(200).json({ name: ‘RapidAPI Blog' });
};
```

Now when you visit the following link, you will see a JSON response with a name key and `RapidAPI Blog` as its value:

```
http://localhost:3000/api/blog
```

Afterward, create another file inside `pages/api/blog` directory and give it the name `first.js`. Now copy-paste the following code inside this file:

```js
export default (req, res) => {
	res.status(200).json({name: 'First Blog'});
};
```

Now open the following link, and you will see `First Blog` written as a response:

```
http://localhost:3000/api/blog/first
```

## Wrap Up

There you have it. Now you know how to create REST API routes and nested routes in Next.js. Go ahead and start building some great applications using what you have learned today.
