---
title: How to use an API with React?
description: React is the most popular front-end JavaScript library for building user interfaces. APIs are the backbone of any application, and this guide will demonstrate how to call an API in a React application.
publishedDate: 2022-04-15T20:53:04.094Z
lastModifiedDate: 2022-04-15T20:53:04.094Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - react
    - api
    - call
coverImage: ''
---

<Lead>
	Today, more and more applications use APIs for one reason or another.
	Countless APIs are waiting to be consumed in meaningful applications,
	whether React, Vue, Svelte or Angular-based.
</Lead>

## React

React is the most popular front-end JavaScript library for building user interfaces. It is open source and has a massive community of developers learning it and building real-life applications. Learning how to consume APIs is a significant part of web development, so let's see how we can consume APIs in a React application.

## How to make the API Call?

There are many different ways you can use to make API calls in your React applications. The most popular ones include the Fetch API and Axios.

### Fetch API

Fetch API offers the simplest way to call APIs in your React applications. Fetch API is included in all modern browsers, and you do not need to import any third-party library through yarn or npm. You can use the fetch API using the fetch method like this:

```js
const response = await fetch('https://api.com/endpoint');
const data = await response.json();
```

### Axios

If you don't want to use the built-in Fetch API, you can opt for the many 3rd party libraries available on npm, and Axios is the most popular among them. To use Axios, you need to install it using npm or yarn. Then, you can make the API call like this:

```js
import axios from 'axios';

const getResponse = async () => {
	const res = await axios.get(`https://api.com/endpoint`);
};
```

You can check out our guide on the [ways to make API calls in React](https://rapidapi.com/guides/manage-api-calls-react) for other methods.

## Where to put the API Call?

For React, we can place the API calls inside a function or in a `useEffect` hook. React hooks let you use state, and other React features in your functional components without writing a class. [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) is a React Hook that is used to run any code during a component's lifecycle, such as running a function on a page's first load or calling a function whenever a state changes.

## Fetching Data from APIs

Let's demonstrate an API call in React.

### Find an API

First of all, let's find an API to use in our React application. For this guide, we will use the [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) from RapidAPI Hub that returns random facts when requested.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://RapidAPI.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub in this fun interactive guide.
</Callout>

To use this API, you need to subscribe to it first by clicking on the **Subscribe to Test** button.

![Subscribe to Random Facts API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-random-facts-app/images/subscribe.png)

### Create the Application

To create a new React application, run the following command in your terminal:

```sh
npx create-react-app api-call
```

Once installed, we can run the application using the following command:

```sh
npm start
```

This command will run your application, and you will be able to view the starter app by navigating to [`http://localhost:3000/`](http://localhost:3000/).

### Create a state

Imagine a scenario where we want to implement a button that will trigger the API call in our application. The API will return a random fact when the button is pressed. For a scenario like this, we will need the `useState` Hook for storing the API's response.

Open the `src/index.js` file. We need to do the following things before using `useState` Hooks. We need to import them and initialize them as follows:

```jsx
// Importing the Hook
import {useState} from 'react';

// Initializing it inside the component function
const [fact, setFact] = useState(null); // Defaults to null
```

Our `fact` state is ready, so let's add a button now.

```jsx
import {useState} from 'react';

export default function Home() {
	const [fact, setFact] = useState(null);

	return (
		<div>
			<button>Get a Random Fact</button>
		</div>
	);
}
```

### API Call

Now, we can add the function to make the API call using Axios. Install Axios by this command:

```sh
npm install axios
```

Now, add the caller function like this.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [fact, setFact] = useState(null);

	// Function which requests the API.
	const getRandomFact = async () => {
		try {
			const options = {
				method: 'GET',
				url: 'https://random-facts2.p.rapidapi.com/getfact',
				headers: {
					'X-RapidAPI-Key': 'your-key'
				}
			};
			// Make API Call
			const res = await axios.request(options);
			setFact(res); // Save response in the state.
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<button onClick={() => getRandomFact()}>Get a Random Fact</button>
		</div>
	);
}
```

We also added an `onClick` handler on the button. So, our `getRandomFact` function will run whenever the button is clicked and send the API request. Finally, we can render the `fact` state like this:

```jsx
return (
	<div>
		<button onClick={() => getRandomFact()}>Get a Random Fact</button>
		<p>{fact}</p>
	</div>
);
```

### useEffect

Let's say we don't want a button to trigger the API call. Instead, we want to fetch the API whenever our page is loaded. We can use the `useEffect` Hook for cases like these. We can use it to call an API whenever a component is loaded, removed, or updated.

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
}, []);
// any component/state specified in this [] array is monitored for changes
```

Now, if we want to call the API and get a random fact whenever the page is loaded, we will do something like this:

```js
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Home() {
	const [fact, setFact] = useState(null);
	const getRandomFact = async () => {
		try {
			const options = {
				method: 'GET',
				url: 'https://random-facts2.p.rapidapi.com/getfact',
				headers: {
					'X-RapidAPI-Key': 'your-key'
				}
			};
			const res = await axios.request(options);
			setFact(res);
		} catch (error) {
			console.log(error);
		}
	};
	// Call the API when the component loads.
	useEffect(() => {
		getRandomFact();
	}, []);

	return (
		<div>
			<p>{fact}</p>
		</div>
	);
}
```

As you can see, without any button, it will trigger the `getRandomFact` function whenever the page/component loads. You can check a live preview of this app [here](https://rapidapi-example-random-facts-app.vercel.app/).

You can do much more if you combine the `useState` and `useEffect` hooks, like triggering an API request whenever a given state changes. Suppose we want to add filters and send a new request automatically whenever they are applied. Then you can add a `filter` state to the `useEffect` hook like this:

```js
useEffect(() => {
	getRandomFact();
}, [filter]);
// Any change in "filter" state will trigger getRandomFact()
```

## Conclusion

This guide was an introduction to consuming APIs in React. We hope that now you can start using APIs in your awesome React projects.
