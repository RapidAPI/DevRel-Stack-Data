---
title: Interactive Guide to Console API
description: The Console API is the go-to debugging tool of millions of developers when working with JavaScript. You access it using the console interface. Let's take a look at what it is and how you can properly use it.
publishedDate: 2022-03-21T02:53:28.085Z
lastModifiedDate: 2022-03-21T02:53:28.085Z
authors:
    - saad
categories:
    - interactive
    - webApis
tags:
    - console-api
    - console
    - api
coverImage: ''
---

<Lead>

Developing applications involves writing a great deal of code that may not often work the first time. And that is why the concept of debugging exists. It is the process of finding and fixing bugs in your application.

</Lead>

There are multiple ways you can perform debugging. These code editors are equipped with a powerful debugger tool that you can use to add breakpoints to your code. There are also various other functions you can perform using it.

One of the most common and widely used approaches is logging data on your console. For this, the browser provides us with a web API. Let’s look at it and how you can use it properly.

## Console API

The Console API is the go-to debugging tool of millions of developers when working with JavaScript. You access it using the `console` interface. It is accessible via the global `window` object. You can use this API to view object/variable values on runtime or log messages on your console.

## console Interface

This API provides a single interface that contains all the functions. You can use it to access the browser’s debugging console. The debugging console is present in the developer tools of the modern web browser.

This interface provides several console methods. Let’s look at how to properly use these methods with the Console API.

## Usage

We will do it in a bunch of steps, so it is easy to follow along.

### → STEP #1

We need to set up a project. For this, create a folder on your computer and open it in your preferred code editor.

### → STEP #2

Once you are done, create `index.html` in your project directory and write down the basic HTML boilerplate code inside it. I have also provided the code below if you quickly want to copy-paste it.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Console API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #3

As mentioned earlier, the `console` interface contains several functions.

#### log Method

One of the most widely used is the `log` function that logs a message, variable value, objects, arrays on the browser console.

```html
<script>
	const num = [1, 2, 3, 4, 5];
	console.log(num);
</script>
```

Here I have created an array and logged it on the console. Here is another quick demo of this `log` function.

<LearnConsoleAPI showLog />

#### clear Method

The `clear` method of the `console` interface clears out the console for you. You can use it to clear the console when a button is pressed.

<LearnConsoleAPI showClear />

#### dir Method

This method is used to display the data in a hierarchical form such that it adds a black disclosure triangle where a child object exists with some content. When you click on it, it discloses the data.

<LearnConsoleAPI showDir />

#### dirxml Method

This method displays an interactive tree of the descendent elements of the specified XML/HTML element. Like the `dir` method, the output is present in the hierarchical form with the black disclosure triangles.

<LearnConsoleAPI showDirXML />

#### table Method

This method is used to display the data in a table. The data can be anything from a variable to an object to even an array.

<LearnConsoleAPI showTable />

These are some of the many functions that are provided to us by the Console API.

## Support

The Console API is supported across all major web browsers, including Chrome, Firefox, Safari, Opera, Edge.
