---
title: How to Schedule API Calls using setTimeout()?
description: During web development, we often need to schedule API requests and send them after a specified period of time. This guide will describe how we schedule API calls using the JavaScript setTimeout() mehtod.
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - delay
    - settimeout
    - api
    - calls
publishedDate: 2022-02-24T14:17:11.709Z
lastModifiedDate: 2022-02-24T14:17:11.709Z
coverImage: ''
draft: false
---

<Lead>

We often need to schedule API requests and send them after a specified delay. This guide will describe how we schedule API calls using the JavaScript setTimeout() method.

</Lead>

During web development, we have two options that we can use for scheduling tasks, `setTimeout` and `setInterval`.

## setTimeout vs setInterval

Both are built-in global methods in the Document Object Model and are used to schedule tasks. Still, they function differently. `setInterval` executes a task continuously after intervals, while `setTimeout` invokes a function only once after a specified delay. We will discuss `setTimeout` in this guide, but if you are interested, you can read our guide on [scheduling API calls with setInterval](https://rapidapi.com/guides/api-requests-intervals).

## Using setTimeout()

`setTimeout()` is an asynchronous method, and it works by setting a timer according to the specified delay. When the timer expires, the given task is executed. It needs two parameters; the function to run and the delay for which the timer should wait specified in milliseconds. This code will trigger the `exampleFunction` after the delay of one second:

```js
setTimeout(exampleFunction, 1000);
```

Note that `setTimeout` expects a reference to the function, so do not add `()` after the function, as you can see above.2

### API request

`setTimeout()` is asynchronous; therefore, it will not pause the execution of other functions, which is evident from this example:

```js
setTimeout(() => {
	console.log('1st Call');
}, 5000);

setTimeout(() => {
	console.log('2nd Call');
}, 2000);

// Output:
// 2nd Call
// 1st Call
```

We can pass an API call inside the `setTimeout()` to execute it after a certain delay.

```js
setTimeout(() => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
}, 2000);
```

Once this timer is created, it will send the API request after two seconds. However, we need to do a couple more things before using it.

### Clearing the Timer

We may need to check for some conditions and stop the repeating calls if the condition holds true. For example, you may want to add a button to cancel the timer. For this purpose, we can use the `clearTimeout()` function. It takes the timer ID as a parameter, which is returned by the `setTimeout()`.

```js
let timerID = setTimeout(() => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
}, 2000);

if (condition) {
	clearTimeout(timerID); // Stop the interval if the condition holds true
}
```

### useEffect

When a `setTimeout()` is created, it stays in the memory until it is cleared. So, we need to clean the interval when the component is unmounted to ensure no memory leaks. Hence, it is a good practice to implement `setInterval` in a `useEffect` hook.

To start using the `useEffect` hook, we need to import it:

```js
import {useEffect} from 'react';
```

Then, we can use the hook as follows:

```js
useEffect(() => {
	// this part is run when component is mounted

	return () => {
		// (Optional) this part is run when component is unmounted
	};
}, []); // Dependency Array (Optional): Any variable/component specified in this array is monitored, and the useEffect is triggered whenever it changes
```

We want to create the timer when the component mounts and clear it when the component unmounts so that the hook will look like this:

```js
useEffect(() => {
	let timer = setTimeout(() => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	}, 2000);

	return () => {
		clearTimeout(interval);
	};
}, []);
```

This code will avoid memory leaks by cleaning up the interval whenever the component re-renders or unmounts.
