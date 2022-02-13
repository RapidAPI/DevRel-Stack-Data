---
title: How to fetch data from APIs using React Hooks?
description: React Hooks are the way to go if you want to utilize an API in your React application. This guide will demonstrate how to use them for calling APIs in React.
publishedDate: 2021-11-26T20:53:04.094Z
lastModifiedDate: 2021-11-26T20:53:04.094Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - react
    - hooks
    - useState
    - useEffect
    - api
coverImage: ''
---

<Lead>
	Today, more and more applications use APIs for one reason or another. React
	Hooks are the way to go to utilize an API in your React application. This
	guide will show you why and how.
</Lead>

## React Hooks

Hooks were introduced in [React 16.8](https://github.com/facebook/react/blob/main/CHANGELOG.md#1680-february-6-2019). They let you use state, and other React features in your functional components without writing a class. For interacting with APIs, you will mostly need to use the following Hooks:

### useState

The React [useState](https://reactjs.org/docs/hooks-reference.html#usestate) Hook allows us to track the state of a functional component. This state can be any type of property such as the input value of an input field, the value of a selected checkbox, or multiple values of a form.

### useEffect

The [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) Hook is used to run some functions during a component's lifecycle, such as running a function on a page’s first load or calling a function whenever a state changes.

## Fetching Data from APIs

These Hooks can seem foreign if you are new to React. However, these will become common to you as they are some of the most commonly used hooks in React. Let's see how we can use them for calling APIs.

### API

Let's say we want to build a music-related app, and we need to fetch data from an API. If you are interested, you can read [detailed how-to guide](https://rapidapi.com/guides/build-music-app) for building this app. We will only focus on using React Hooks in this guide.

### useState

Imagine a scenario where we want to implement a search bar for searching song titles in our application. The API will return matching results according to our search. For a scenario like this, we will need the `useState` Hook for storing the user's search input and sending it as a request to the API.

We need to do the following things when we start using `useState` Hooks. We need to import them and initialize them as follows:

```js
// Importing the Hook
import {useState} from 'react';

// Initializing it inside the component function
const [input, setInput] = useState(null); // Defaults to null
```

We discussed a scenario above where we want to store our search input; let’s see how we can achieve it.

```js
import {useState} from 'react';

export default function Home() {
	const [input, setInput] = useState(null);

	return (
		<div>
			<input
				type="text"
				placeholder="Search for a song"
				onChange={e => setInput(e.target.value)} // Updating the state with input field value.
			/>
			<button>Search</button>
		</div>
	);
}
```

In the code above, we are storing the input value of the search field in our `input` state using the `setInput` function. After this, we can use this value in a function that will make the API call.

```js
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [input, setInput] = useState(null);
	const [response, setResponse] = useState(null);

	// Function which requests the API for search results.
	const getSearchResults = async () => {
		try {
			const res = await axios.get('api/search/', {
				params: {input} // Using the input state.
			});
			setResponse(res); // Saving response in another state.
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Search for a song"
				onChange={e => setInput(e.target.value)}
			/>
			<button onClick={() => getSearchResults()}>Search</button>
			{response && <span>{response.title}</span>}
		</div>
	);
}
```

Now, whenever the "Search" button is clicked, our function will run and send the search field input as a parameter of our API Request. This is how we can utilize the `useState` hook. You can also store the response in another state and render it in your application, as I have done above.

### useEffect

We can use this Hook in cases like fetching data from an API whenever a component is loaded, removed, or updated. For example, we might want to display a list of popular songs on the homepage of our music app whenever it is loaded.

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
}, []); // (Optional) any variable/component specified in this array is monitored. If it changes, the logic in the mounted part will be executed
```

Now, if we want to get the popular songs whenever the page is loaded, we will do something like this:

```js
useEffect(() => {
	getPopularSongs();
}, []);
```

This will trigger the `getPopularSongs` function (which sends a request to the API) whenever the page is loaded.

You can do much more if you combine the `useState` and `useEffect` hooks, like triggering an API request whenever a given state changes. Let's say you want to add filters to the search and send a new request whenever they are applied without pressing the search button again. You can create checkboxes and store their selected values in a state `filter`. Then you can add the `filter` state to the `useEffect` hook like this:

```js
useEffect(() => {
	getSearchResults();
}, [filter]); // getSearchResults will be triggered whenever the state "filter" changes.
```

## Conclusion

You can utilize these hooks to meet all your data fetching needs in React. Once comfortable with them, you can also create custom hooks for your app.
