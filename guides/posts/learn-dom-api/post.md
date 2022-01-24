---
title: Interactive Guide To Learn DOM API
description: A Document Object Model (DOM) expresses your screen viewport as a series of DOM nodes. In this piece, we are going to look at how you can use DOM API in your websites.
publishedDate: 2021-11-19T18:41:43.732Z
lastModifiedDate: 2021-11-19T18:41:43.732Z
authors:
    - saad
categories:
    - interactive
    - webApis
tags:
    - dom-api
coverImage: ''
draft: false
---

<Lead>

An API lets you communicate between two entities. The most common type of API, i.e., REST API, enables you to pass messages such as JSON objects, arrays between two or more machines. Then comes the Web APIs.

</Lead>

Web APIs are different kinds of APIs that provide you with methods that you can use to access various properties of the viewport. It also gives you a `fetch` API to make REST API calls. If you are interested in learning it, we have written a [detailed piece](https://rapidapi.com/guides/learn-fetch-api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) about it.

In this piece, let’s take a deeper look into DOM API and how it works.

## What is the DOM API?

A Document Object Model (DOM) expresses your screen viewport as a series of DOM nodes. The nodes can be viewed collectively as a part of a tree, and each node of the viewport can be manipulated using the DOM API methods. You can also add event listeners to any DOM node to perform specific actions when a particular event is triggered.

As mentioned earlier, DOM contains nodes that are part of a logical tree on a bigger scale. Each branch of the tree ends in a node, and each node includes objects. Each of these objects holds specific properties associated with that node. And with DOM methods, you can manipulate these properties and change the document’s structure, style, and even content.

In simple terms, DOM lets you interact with your HTML elements using JavaScript. For instance, you have created a button using the button tag, and now you want this button to perform an action. How can you achieve this?

Here the DOM API comes into the picture. Using one of its methods, you set a JavaScript function to trigger when the button clicks. In another example, you want to show the input text in the website when the user stops typing it and has saved it. You can also achieve this using the DOM API.

We have previously written a short piece on DOM API that you can find [here](https://rapidapi.com/guides/dom-api?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

## Getting Started With DOM

Let’s look at how you can start working with the DOM API. For this, create a folder and open it in your preferred code editor. I am using VSCode. Now create an HTML file called `index.html` in your project folder.

Create a basic HTML boilerplate. If you don’t know how to create one then just copy-paste the following in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>DOM API</title>
	</head>
	<body></body>
</html>
```

Now open this file in your web browser. You will see a blank webpage because there is nothing in the body tag.

To manipulate the DOM, you need to add the script tag just before the closing tag of the `body`. Now create some HTML tags as I have created below. You can also copy and paste the following code into your HTML file.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>DOM API</title>
	</head>
	<body>
		<div id="main">
			<p>Lorem Ipsum</p>
		</div>
		<div class="container">
			<div class="subcontainer">
				<h3>RapidAPI Hub</h3>
			</div>
			<div class="subcontainer">
				<h3>RapidAPI Client</h3>
			</div>
			<div class="subcontainer">
				<h3>RapidAPI Testing</h3>
			</div>
			<div class="subcontainer">
				<h3>RapidAPI Provider</h3>
			</div>
			<button id="btn">Submit</button>
		</div>
		<script type="application/javascript"></script>
	</body>
</html>
```

### Using DOM API

You can use the DOM API using the `document` keyword. Every DOM API method can be accessed using it. And we will also use it now to interact with the DOM.

If you are following along, you will have created a webpage that contains some `divs` and `h3` tags along with a button. Let’s use a few DOM methods now.

#### Picking Elements Using Id

Assume now you need to handpick a particular element of your webpage. There are a few ways you can go about this. The most common is using the element’s unique id to manipulate it. DOM API provides a function for this, i.e., `document.getElementById`.

Just paste the following code in the script tag.

```js
const res = document.getElementById('main');
console.log(res);
```

<LearnDOM showId />

You will see the HTML element logged in your console when you run the code. The reason behind this is I am saving the value that I am receiving using the DOM API in the `res` variable and then logging it on the console.

#### Using Class Names

You can also collectively pick all the elements belonging to a particular class using the DOM API. For this, you have a function called `document.getElementsByClassName`.

You can use it by copying the following code in the script tag.

```js
const subcontainer = document.getElementsByClassName('subcontainer');
console.log(subcontainer);
```

<LearnDOM showClass />

This DOM method will return an array, and each array index contains the DOM element that has the provided class. You can manipulate it however you like.

#### Query Selector And Query Selector All

Sometimes you want to pick a particular element from your webpage. You can do it using the element’s id or its class. It can be a challenge if that element does not have an id or if it has a class, but you don’t want to fetch all the elements of that class.

All this can become easy using the query selector DOM API method. It takes a particular selector for reference and returns the first element that matches it.

```js
const element = document.querySelector('div.subcontainer');
console.log(element);
```

<LearnDOM showQuerySelector />

You can see that I am telling the query selector to get me the first div that has a class of `subcontainer`.

Sometimes you are interested in fetching all the instances that match that provided selector. You can do this using the `querySelectorAll` method.

```js
const allElements = document.querySelectorAll('div.subcontainer');
console.log(allElements);
```

<LearnDOM showQuerySelectorAll />

#### Event Listener

Earlier I mentioned that you could perform a specific action when a button is clicked using the DOM API. You can achieve this by adding an event listener to a particular DOM element. Let’s take a look at it.

Copy and paste the following code inside the script tag.

```js
const btn = document.getElementById('btn');

btn.addEventListener('onclick', function () {
	console.log('RapidAPI Hub is GitHub for APIs.');
});
```

As you can see that first, I am picking the DOM element using its id and storing it in a variable called `btn`. The element I am picking is a button, and I am adding an event listener to it.
The event listener takes two parameters. The first parameter is the event it should listen for, which in our case, is a click event. The second parameter is a function that triggers when the event occurs.

<LearnDOM showEventListener />

That’s pretty much it, folks! By going through this piece, I hope you understand how to use the DOM API in your websites.
