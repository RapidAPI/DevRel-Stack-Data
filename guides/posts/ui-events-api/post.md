---
title: 'Interactive Guide To UI Events API'
description: The UI Events API provides a way to handle these events and user interactions on a website.. In this piece, let's take a look at what it is and how you can use it in your web apps.
publishedDate: 2022-05-30T10:48:53.505Z
lastModifiedDate: 2022-05-30T10:48:53.505Z
authors:
    - saad
categories:
    - interactive
    - web-apis
tags:
    - ui-events-api
    - ui-events
    - web-apis
    - events
coverImage: ''
---

<Lead>

You can use all types of APIs when developing a website. For instance, the server REST API provides you the server data, the public REST API helps you develop Jamstack applications, web APIs lets you utilize browser capabilities, etc. Before we go any further, take a look at [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), which is home to over 35000+ public REST APIs that you can use to build your web apps.

</Lead>

<Callout
	title="Sign Up To Find Thousands of APIs"
	linkText="Read more"
	linkHref="https://RapidAPI.com/learn/hub"
>
	RapidAPI Hub is the world’s largest API hub, where you can find different
	APIs according to your needs.
</Callout>

Web APIs are essential to building a functioning site. The browser provides them so the developers can access the DOM, console, local storage, fire UI events, and more. All these web APIs play a significant role, but the UI Events API makes your web application interactive.

## UI Events API

There are all types of user interaction; for instance, the user can click on something, hover on anything, select something, double click on something, etc. The UI Events API provides a way to handle these events and user interactions on a website. The JavaScript that runs on the browser is event-driven, which in simplest terms, is it listens for the events triggered by the user interaction and executes them.

There are two types of UI events. The first is the events triggered via user interaction, and the second is the event interface that is passed down to the handlers of these events.

Let’s look at some of the UI Events API events.

### Focus And Blur Event

The focus event is triggered when the user provides focus to an element. The element can be an input field.

```js
const input = document.getElementById('username');

input.addEventListener('focus', () => {
	console.log('Focus gained.');
});
```

On the contrary, the blur event is triggered when an element loses focus.

```js
const input = document.getElementById('username');

input.addEventListener('blur', () => {
	console.log('Focus loosed.');
});
```

Here is a quick demo of the event in action:

<LearnUIEventAPI showFocusAndBlur />

### Context Menu Event

You can use this event to listen when the user right-clicks. You can also disable the context menu using it.

```js
const divPara = document.getElementById('para-div');

divPara.addEventListener('contextmenu', e => {
	e.preventDefault();
});
```

Here is a quick demo of the event in action:

<LearnUIEventAPI showContextMenu />

### Click Event

This is the most common type of events in UI Event API. It lets you execute a function when a particular element is clicked (mostly buttons).

```js
let number = 0;
const btn = document.getElementById('submit-btn');

btn.addEventListener('click', e => {
	e.preventDefault();
	number++;
	console.log('You have clicked: ', number);
});
```

Here is a quick demo of the event in action:

<LearnUIEventAPI showClick />

### Select Event

This event executes when you select an element, for instance, the text.

```js
const input = document.getElementById('username');

input.addEventListener('select', () => {
	console.log('Gotcha! You have selected the text.');
});
```

Here is a quick demo of the event in action:

<LearnUIEventAPI showSelect />

### Mouse Move Event

When the mouse cursor is moved over an element, this event fires.

```js
const div = document.getElementById('ui-div');

div.addEventListener('mousemove', () => {
	console.log('Cursor has moved over this area.');
});
```

Here is a quick demo of the event in action:

<LearnUIEventAPI showMouseMove />

These are some of the many events available to you using this API.

## Support

The API is widely supported in all versions of all major internet web browsers. So you do not need to worry about backward compatibility.
