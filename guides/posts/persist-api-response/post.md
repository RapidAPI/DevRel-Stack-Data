---
title: How to use local storage to persist the API response in a React.js application?
description: Sometimes the API response does not change and provides the same data every time. So to avoid unnecessary re-renders, you can save the response. In this piece, we will learn how to use local storage to persist API response.
publishedDate: 2022-06-06T19:10:30.765Z
lastModifiedDate: 2022-06-06T19:10:30.765Z
authors:
    - saad
categories:
    - api
tags:
    - persist-api-response
    - api
coverImage: ''
draft: false
---

<Lead>

When you make a GET request to a REST API, it brings you data. You store this data in some state variable to perform actions on it. You might have to filter it to extract useful information and then display it on the screen. But what if you know the response will not change, and you want to persist it to eliminate unnecessary API calls on rerenders? What should you do in this scenario?

</Lead>

There are several ways to go about it, but the most common might be using the browser's local storage. It comes in handy when saving small-sized data like strings, arrays, objects, etc. It can save the data forever if you do not remove it.

In this piece, let’s look at how you can persist API response in a React.js application to avoid unnecessary API calls. So let’s jump in!

## Kind of API Response To Persist

We need to be clear about what kind of API data you should persist. Sometimes you know the API response will not change, for instance, the user’s age, name, and email. If your application requires this information often, you can save it in the local storage to avoid unnecessary API calls. There are several other use-cases.

Just to be cautious, you should still make the API call after some time if there is an update or delete the saved data inside the local storage when the user updates the data using the website. You can write code to check if the data exist in the local storage. If it doesn’t, you can make the API call again.

## Persist API Response

Let’s do it in steps to make things simpler:

### → STEP #1

We need to get a React boilerplate. For this, run the following command in your terminal:

```sh
npx create-react-app example-project
```

It will take some time, depending on your internet connection. Once it’s done, open the project in your code editor.

### → STEP #2

Open `App.js` file located inside the `src` directory. This is the file where we will write the code. Remove all the code that is currently inside it. Now write a simple React component.

```jsx
const UIComonent = () => {
	return <div></div>;
};

export default UIComonent;
```

### → STEP #3

The next thing that we need is to create two simple buttons. The first will make the API call, and the second will delete the local storage response.

```jsx
const UIComponent = () => {
	return (
		<div>
			<button onClick={callAPI}>Call API</button>
			<button onClick={deleteData}>Delete data</button>
		</div>
	);
};

export default UIComponent;
```

I have also attached event listeners to each button. Now we need to create the attached functions.

```jsx
import {useState} from 'react';

const UIComponent = () => {
	const [user, setUser] = useState();

	const callAPI = async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users/1'
			);
			const data = await response.json();
			localStorage.setItem('user', JSON.stringify(data));
			setUser(data);
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteData = () => {
		window.localStorage.removeItem('user');
		setUser(null);
	};

	return (
		<div>
			<button onClick={callAPI}>Call API</button>
			<button onClick={deleteData}>Delete</button>
			{user && <pre>{JSON.stringify(user, null, 4)}</pre>}
		</div>
	);
};

export default UIComponent;
```

I have also created a state variable to save the API response in the above code snippet. Based on this variable, I have conditionally rendered the response on the screen. Inside the `callAPI` function, you can see that I have stored the response in the local storage. The `deleteData` deletes the information we have stored in the local storage.

### → STEP #4

Lastly, to retrieve the data from local storage before the component renders, we will use the React `useEffect` hook.

```jsx
useEffect(() => {
	if (window.localStorage !== undefined) {
		const data = window.localStorage.getItem('user');
		data !== null ? setUser(JSON.parse(data)) : null;
	}
}, []);
```

In the above code snippet, we have checked if the data exist in the local storage. If it exists, we retrieved it and set the value of the state variable.

If you have followed along till this point, try to make the API call and then refresh the page. You will see that the API response will still render on the screen. Now click on the delete button and refresh the page. The response will not appear again.

<APIResponseLocalStorage />

## Wrap Up

That’s pretty much to it. We have successfully persisted API response using local storage. All the code we wrote above is the baseline code on top of which you can add more functionalities. For instance, you can call the API after some time or disable the `Call API` button like in the demo.
