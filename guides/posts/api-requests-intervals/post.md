---
title: How to send API requests with intervals using setInterval()?
description: During web development, we often need to send repeated API requests with intervals. It can be done to fetch updated data, show changes without having to reload, etc. This guide will describe how we can call APIs with intervals,
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - intervals
    - api
    - calls
publishedDate: 2022-02-18T14:17:11.709Z
lastModifiedDate: 2022-02-18T14:17:11.709Z
coverImage: ''
draft: false
---

<Lead>

We often need to send continuous API requests with intervals. It can be done to fetch updated data, show changes without having to reload, etc. Let's see how we can implement it in React.

</Lead>

During web development, we may need to fetch data from an API every so often, and the way can do that is with the `setInterval()` function.

## Using setInterval()

`setInterval()` is a globally available JavaScript method that makes a function execute repeatedly after a certain time interval. It needs two parameters; the function to execute and the time interval in milli seconds. This code will send the API call after every second:

```js
setInterval(exampleFunction, 1000);
```

### API request

We can pass an API call inside the `setInterval()` to make it run repeatedly.

```js
setInterval(() => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
}, 2000);
```

Once this interval is created, it will send the API request after every two seconds. However, we need to do a couple more things before using it.

### Stopping the Repeated Calls

We may need to check for some condition and stop the repeating calls if the condition holds true. For example, we may want to send a total of 5 repeated requests only. For this purpose, we can use the `clearInterval()` function. It takes the interval ID as a parameter, which is returned by the `setInterval()`.

```js
let intervalID = setInterval(() => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
}, 2000);

if (condition) {
	clearInterval(intervalID); // Stop the interval if the condition holds true
}
```

### Clearing the Interval

When a `setInterval()` is created, it stays in the memory until it is cleared. So, we need to clean the interval when the component is unmounted, to make sure that there are no memory leaks. Hence, it is a good idea to always implement `setInterval` in a `useEffect` hook.

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

We want to create the interval when the component mounts, and clear it when the component unmounts, so the hook will look like this:

```js
useEffect(() => {
	let interval = setInterval(() => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	}, 2000);

	return () => {
		clearInterval(interval);
	};
}, []);
```

This will avoid memory leaks by cleaning up the interval whenever the component re-renders or unmounts.
