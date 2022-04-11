---
title: How to call APIs in Next.js?
description: Next.js extends the capabilities of React.js by providing the developers features like server-side rendering, static site generation, incremental static generation, a working REST API, file-system-based routing, dynamic routing, etc. Let's take a look at how you can call APIs in it.
publishedDate: 2022-04-11T07:24:44.264Z
lastModifiedDate: 2022-04-11T07:24:44.264Z
authors:
    - saad
categories:
    - api
tags:
    - nextjs
    - call-apis
    - api
coverImage: ''
---

<Lead>

There are several ways you can call REST APIs in your JavaScript web applications. You can use the `fetch` web API if you do not want to rely on external dependencies or use the `axios` node package.

</Lead>

In this piece, we will learn how you can consume APIs in Next.js. But before we go into that, let’s quickly have a brief introduction to Next.js. So without any further ado, let’s jump in!

## Next.js

It is a web framework built on top of React.js. Next.js extends the capabilities of React.js by providing the developers features like server-side rendering, static site generation, incremental static generation, a working REST API, file-system-based routing, dynamic routing, etc. It provides better optimization, additional structure, and features to your application.

Since it extends React.js, you can start by writing all the React.js code and eventually add Next.js features to your application. You can make the application server-side rendered, so all the data has been pre-fetched before loading the web app in the browser. Afterward, you can also write a simple REST API without setting up a Node.js server.

## Consuming APIs In Next.js

Since Next.js is another web framework, you can also make API calls in it. Let’s take a look at how you can do it.

### → STEP #1

We need to find an API that we will call using a Next.js application. For this, I will use the [JSON Placeholder API](https://jsonplaceholder.typicode.com/). You should also look at its website to see different available endpoints that you can experiment with while learning about APIs.

### → STEP #2

Now we need to set up a Next.js application. The simplest way to do it is by running the following command in your terminal:

```sh
npx create-next-app next-app
```

This command will create a `next-app` directory and set up everything you need inside it for your Next.js application.

### → STEP #3

Now open this directory in your preferred code editor. I will use VSCode. Afterward, run the application by opening the terminal in this directory and running the following command inside it:

```sh
npm run dev
```

It will start the development environment of your Next.js application.

### → STEP #4

Once you are done, open the `index.js` file inside the `pages` directory and delete all the code. Now copy and paste the following inside this file:

```jsx
import styles from '../styles/Home.module.css';

export default function Home() {
	const callAPI = async () => {};

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<button onClick={callAPI}>Make API call</button>
			</main>
		</div>
	);
}
```

The above code will render a button that will execute `callAPI` function when clicked.

Let’s write down the logic of how to call API inside the `callAPI` function.

```js
const callAPI = async () => {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};
```

I have not used any external package for calling the REST API. Instead, I went with the browser `fetch` API. Since the API call is asynchronous, I have awaited it. Afterward, I convert the response to JSON and then log it on the console.

Here is the complete code for your reference:

```jsx
import styles from '../styles/Home.module.css';

export default function Home() {
	const callAPI = async () => {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/1`
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<button onClick={callAPI}>Make API Call</button>
			</main>
		</div>
	);
}
```

Now go and click the button. It will make an API and then log the response on the console.

![JSON Placeholder response](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/e93f8dcc82495e3ca109ba990e75d4be7130d738/guides/posts/call-apis-next/images/call-api.png)

## Wrap Up

If you followed along until now, you would have successfully made an API call to the JSON Placeholder server from your Next.js application.

Now you know how simple and easy it is to call APIs in Next.js.
