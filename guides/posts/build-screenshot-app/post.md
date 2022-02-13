---
title: How to build a Screenshot App using an API?
description: Screenshot APIs from RapidAPI Hub allow you to take automated, high quality and full page screenshots of a target website. This guide will demonstrate how to create our own Screenshot App using an API.
publishedDate: 2022-01-26T19:10:30.765Z
lastModifiedDate: 2022-01-26T19:10:30.765Z
authors:
    - 'ahmad-bilal'
categories:
    - apps
tags:
    - rapidapi
    - screenshot
    - app
coverImage: ''
---

<Lead>

Screenshots can assist you to test a feature, demonstrate how to complete a task, capture exactly what is taking place, and more. Screenshot APIs from RapidAPI Hub allow you to take automated, high quality and full page screenshots of a target website and you can also customize their resoultion.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of public APIs which over 3 million developers are using. You can explore them on RapidAPI Hub and select the best one for your next project.

Today, we will be building a web application that will allow users to get an automated screenshot of a given URL. APIs are available which offer fast screenshot generation, so let's build the app using one of them.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Screenshot" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub as a developer.
</Callout>

You will see that we have a lot of APIs to choose from. For our app, I will use the [Website Screenshot API](https://rapidapi.com/apishub/api/website-screenshot6/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to Website Screenshot API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-screenshot-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss screenshot-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `screenshot-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/screenshot-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors and fonts I will be using.

Our initial UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-screenshot-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-12">
				Screenshot <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Get screenshot of any given URL.
			</h2>
		</div>
	);
}
```

I added the following to `pages/_app.js`.

```jsx
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title>RapidAPI Devrel Example - Screenshot App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
```

### → STEP #2

As you can see in the UI preview, we require an input form to enter the URL of the target website. A search button will follow the input. Let's add these.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-12">
				Screenshot <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Get screenshot of any given URL.
			</h2>
			<form
				className="sm:mx-auto mt-12 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					e.preventDefault(); // Allow enter key to submit
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a url eg: https://RapidAPI.com"
				/>

				<button
					className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-background font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
```

This code will create the input fields and search button. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

Now, we need to store the user input in the input field. We can do it using React `useState` hook. We will use a couple of states for our app; let's add them. Check the comments to see the purpose of each state.

```jsx
import {useState} from 'react';

export default function Home() {
	const [url, setUrl] = useState(null); // Stores User Input URL
	const [response, setResponse] = useState(null); // Stores Response from the API
	const [loading, setLoading] = useState(false); // Stores the loading state to show loading indicator

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-12">
				Screenshot <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Get screenshot of any given URL.
			</h2>
			<form
				className="sm:mx-auto mt-12 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a url eg: https://RapidAPI.com"
					onChange={e => {
						setUrl(e.target.value); // Store input URL
						setResponse(null); // Remove previous screenshot
					}}
				/>

				<button
					className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-background font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
```

Notice how we are using the `onChange` handler on the input field to store their value in our `url` state.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Website Screenshot API](https://rapidapi.com/apishub/api/website-screenshot6/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API offers a single endpoint `GET Screenshot` to request the API. It takes the following parameters:

-   URL _Required_
-   Width _Required_
-   Height _Required_
-   Fullscreen _Optional_

![API Endpoint and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-screenshot-app/images/snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We will copy the `(JavaScript) Axios` ones, as you can see above.

Let's set up the API calls now. In the `pages/api` directory, create a file named `screenshot.js` and use the code snippet as follows:

```jsx
// In pages/api/screenshot.js
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://website-screenshot6.p.rapidapi.com/screenshot',
		params: {
			// Parameters
			url: req.query.url,
			width: '1920',
			height: '1080',
			fullscreen: 'false'
		},
		headers: {
			'x-rapidapi-host': 'website-screenshot6.p.rapidapi.com',
			'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
		}
	};

	axios
		.request(options)
		.then(function (response) {
			res.status(200).json(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
}
```

As you can see, we have specified all the parameters and for `url` we are using the dynamic `req.query.url` parameter. `req.query` is an object in Next.js that holds the input parameters coming from our client-side. We will pass the `url` state from our client-side to this API.

### → STEP #4

Now we need to create a function `getScreenshot` in the `pages/index.js` file to send a request to our APIs. The search button will trigger this function, which will make a GET request to our API.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [url, setUrl] = useState(null);
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	const getScreenshot = async () => {
		try {
			const res = await axios.get('api/screenshot/', {
				params: {url} // Pass the user input url to our API as a parameter
			});
			const {data} = res; // Destructure data from the response
			setResponse(data.screenshotUrl); // Store URL of screenshot received in API response
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-12">
				Screenshot <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Get screenshot of any given URL.
			</h2>
			<form
				className="sm:mx-auto mt-12 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					getScreenshot(); // Trigger the API call on submit
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a url eg: https://RapidAPI.com"
					onChange={e => {
						setUrl(e.target.value);
						setResponse(null);
					}}
				/>

				<button
					className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-background font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
```

Thanks to the `onSubmit` handler of the form, `getScreenshot` function will be triggered when the submit button is clicked or by pressing the enter key.

### → FINAL STEP

Finally, it is time to display the screenshot returned by the API. You can use the **Test Endpoint** button on the API's page to check the response.

The API returns a URL of the generated screenshot. We will use an `img` tag to display the screenshot on our page. Our final code looks like this:

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [url, setUrl] = useState(null);
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	const getScreenshot = async () => {
		try {
			setLoading(true);
			const res = await axios.get('api/screenshot/', {
				params: {url}
			});
			const {data} = res;
			setLoading(false);
			setResponse(data.screenshotUrl);
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-12">
				Screenshot <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Get screenshot of any given URL.
			</h2>
			<form
				className="sm:mx-auto mt-12 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					getScreenshot();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a url eg: https://RapidAPI.com"
					onChange={e => {
						setUrl(e.target.value);
						setResponse(null);
					}}
				/>

				<button
					className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-background font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
					type="submit"
				>
					{loading ? <>Loading..</> : <>Submit</>}
				</button>
			</form>
			{response && (
				<div className="mt-10 ">
					<h2 className="text-xl font-bold text-active">
						Screenshot
					</h2>
					<img
						src={response}
						className="mt-3 w-full h-full rounded-lg"
					/>
				</div>
			)}
		</div>
	);
}
```

I alos implemented the loading state, which will show `loading..` in the button while our API Call is under process. Finally, our app is ready and looks like this:

![Screenshot App built using Website Screenshot API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-screenshot-app/images/final.png)

## Wrap Up

All done. You can also check the deployed [Screenshot App](https://rapidapi-example-screenshot-app.vercel.app/) and find its code in the [RapidAPI Examples Repository](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/screenshot-app) on GitHub.
