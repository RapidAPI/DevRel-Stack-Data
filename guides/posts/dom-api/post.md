---
title: Introduction to the DOM API
description: DOM is a Web API that provides you with different methods that you can use to manipulate the HTML elements on the screen.
publishedDate: 2021-11-03T16:27:05.876Z
lastModifiedDate: 2021-11-03T16:27:05.876Z
authors:
    - saad
categories:
    - webApis
tags:
    - dom-api
    - dom
coverImage: ''
---

<Lead>

A website is made up of three layers. HTML creates the structure, CSS makes this structure look good, and JavaScript adds interactiveness. All these layers work together to provide you with the best user experience. There are several other parts involved as well, but these three might be the most important ones.

</Lead>

Let’s focus on JavaScript. It provides you with different Web APIs that you use to produce different transitions, interactivity, etc. Among all the JavaScript Web APIs, DOM is probably the most used one. So let’s take a look at it.

## Document Object Model (DOM)

You might have seen the word `DOM` on the Internet while searching for something Vanilla JavaScript-related. DOM is a Web API that provides you with different methods that you can use to manipulate the HTML elements on the screen. It allows JavaScript to change web structure, style, and content.

## How to use DOM API?

Using the `document` class, you can use DOM API right out of the box in your JavaScript. Let’s take a look at how it works.

Assume I need to get a particular element from the viewport, and I can use the DOM API to do this.

```js
const element = document.getElementById('YOUR-ID');
```

You can see that I am using the `getElementById` function to handpick a particular element and then store it in a variable called `element`. You can also get all the elements that have a specific class.

```js
const elements = document.getElementsByClassName('YOUR-CLASS-NAME');
```

The `getElementsByClassName` will return an array of all the elements with the specified class name.

You can also add event listeners to the HTML elements using DOM API. Event listeners allow the developer to invoke a function when a particular event occurs, i.e., the user clicks a button, adds some input in the text field, etc.

```js
const btn = document.getElementById('YOUR-ID');

btn.addEventListener('onclick', () => {
	console.log('Button is clicked.!');
});
```

You can see that I am getting a DOM element using its id and saving it in a variable called `btn`. Then I am adding an event listener to the `btn`. For the first parameter of the `addEventListener` function, I am telling it which event to listen for, i.e., onclick. For the second parameter, I am giving it a function that will be invoked as soon as that event happens.

These are just a few examples of how DOM API is used.
