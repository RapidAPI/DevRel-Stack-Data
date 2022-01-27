---
title: How to build a Domain App using a WHOIS API and Next.js?
description: In this guide, we will be building a web application that will allow users to look up web domains and check their availability using an API from RapidAPI Hub.
publishedDate: 2021-12-17T15:57:17.709Z
lastModifiedDate: 2021-17-09T15:57:17.709Z
authors:
    - ahmadBilal
categories:
    - apps
tags:
    - rapidapi
    - domain
    - app
coverImage: ''
---

<Lead>

Today, public APIs provide a fast and convenient way to develop an application. Whether a small tool-based application or a big eCommerce portal, these APIs can be very serviceable.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore thousands of these on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that will allow users to look up web domains and check their availability. We have APIs that provide information about all the domains on the internet. Let's build the app using one of these APIs.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Domains" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see that we have a lot of options for Domain-related APIs. For our app, I am going to use the [NameAuditor WHOIS API](https://rapidapi.com/nameauditor/api/nameauditor-whois-check/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to NameAuditor WHOIS API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-domain-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. The free plan allows up to 500 requests per month. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss domain-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `domain-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/domain-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

Our initial UI should look like this.

![Preview of Our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-domain-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-open-sans items-center text-center min-h-screen">
			<h1 className="text-6xl text-active font-bold font-active mt-10">
				Domain Search
			</h1>
			<h2 className="text-primary text-2xl mt-6">
				Check availability and information of any domain.
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
				<title>RapidAPI Devrel Example - Domain App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
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

As you can see in the UI preview, we require a form to submit the domain keyword. The form will have an input field where the query keyword will go, followed by a submit button. Let's add these.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-open-sans items-center text-center min-h-screen">
			<h1 className="text-6xl text-active font-bold font-active mt-10">
				Domain Search
			</h1>
			<h2 className="text-primary text-2xl mt-6">
				Check availability and information of any domain.
			</h2>
			<form className="sm:mx-auto mt-20 justify-center sm:w-full flex flex-col sm:flex-row">
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-sm px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword"
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-sm px-5 py-3 bg-active text-base text-primary font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
```

This code will create the input field and submit button. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Now, we need to store the user input in the input field. We can do it using React `useState` hook. We will use two states; `keyword` for storing the input domain keyword and `response` to keep the API Response.

```jsx
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState(null);
	const [response, setResponse] = useState(null);

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-open-sans items-center text-center min-h-screen">
			<h1 className="text-6xl text-active font-bold font-active mt-10">
				Domain Search
			</h1>
			<h2 className="text-primary text-2xl mt-6">
				Check availability and information of any domain.
			</h2>
			<form className="sm:mx-auto mt-20 justify-center sm:w-full flex flex-col sm:flex-row">
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-sm px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword"
					onChange={e => {
						setKeyword(e.target.value); // Store input in the keyword state
						setResponse(null); // Set the previous response(if any) to null
					}}
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-sm px-5 py-3 bg-active text-base text-primary font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
```

The `onChange` handler on the input field will store the user input in our `keyword` state.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [NameAuditor WHOIS API](https://rapidapi.com/nameauditor/api/nameauditor-whois-check/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

### → STEP #5

The NameAuditor WHOIS API provides two endpoints. We need the `whois` endpoint to get domain-related information. You can see these endpoints on the left pane.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-domain-app/images/code-snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We are going to copy the `(JavaScript) Axios` ones, as you can see above.

Let's set up the API call now. In the `pages/api` directory, create a file `search.js` and use the code snippet as follows:

```jsx
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: `https://nameauditor-whois-check.p.rapidapi.com/whois/${req.query.keyword}`,
		headers: {
			'x-rapidapi-host': 'nameauditor-whois-check.p.rapidapi.com',
			'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
		}
	};

	axios
		.request(options)
		.then(function (response) {
			res.status(200).json(response.data);
		})
		.catch(function (error) {
			res.status(500).json(error.response.data.payload);
		});
}
```

We have specified the parameter `req.query.keyword`. `req.query` is an object that holds the input parameters coming from our client-side. Our API call is ready.

Now we need to create a function, say `getDomainInfo` in the `pages/index.js` file to send a request to our API `http://localhost:3000/api/search`. We want this function to be triggered using the search button or enter key. Let's make these changes to the index file.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState(null);
	const [response, setResponse] = useState(null);
	/**
	 * Fetches domain information for an input keyword
	 */
	const getDomainInfo = async () => {
		try {
			const res = await axios.get('api/search/', {
				params: {keyword}
			});
			const {data} = res;
			setResponse(data); // Store the response
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-open-sans items-center text-center min-h-screen">
			<h1 className="text-6xl text-active font-bold font-active mt-10">
				Domain Search
			</h1>
			<h2 className="text-primary text-2xl mt-6">
				Check availability and information of any domain.
			</h2>
			<form
				className="sm:mx-auto mt-20 justify-center sm:w-full flex flex-col sm:flex-row"
				onSubmit={e => {
					getDomainInfo();
					e.preventDefault(); // Prevent reloading on submit
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-sm px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword"
					onChange={e => {
						setKeyword(e.target.value);
						setResponse(null);
					}}
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-sm px-5 py-3 bg-active text-base text-primary font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
```

We are storing the API Response in the `response` state.

### → FINAL STEP

In the final step, we will display the results. You can use the **Test Endpoint** button on the [RapidAPI Hub page](https://rapidapi.com/nameauditor/api/nameauditor-whois-check/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) of the API to see the shape of the response. In our case, an example response looks like this:

![Example Response](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-domain-app/images/example.png)

We are going to traverse the `payload` object in the response, and show the details in a table. Finally, I also implemented loading and error states. Here is the final code of our app:

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState(null);
	const [response, setResponse] = useState(null);
	const [errorInfo, setErrorInfo] = useState(false);
	const [loading, setLoading] = useState(false);

	const getDomainInfo = async () => {
		try {
			setLoading(true);
			const res = await axios.get('api/search/', {
				params: {keyword}
			});
			const {data} = res;
			setLoading(false);
			setResponse(data);
		} catch (error) {
			setLoading(false);
			setErrorInfo(error.response.data);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-open-sans items-center text-center min-h-screen">
			<h1 className="text-6xl text-active font-bold font-active mt-10">
				Domain Search
			</h1>
			<h2 className="text-primary text-2xl mt-6">
				Check availability and information of any domain.
			</h2>

			<form
				className="sm:mx-auto mt-20 justify-center sm:w-full flex flex-col sm:flex-row"
				onSubmit={e => {
					getDomainInfo();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-sm px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter your keyword"
					onChange={e => {
						setKeyword(e.target.value);
						setResponse(null);
						setErrorInfo(null);
					}}
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-sm px-5 py-3 bg-active text-base text-primary font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						type="submit"
					>
						{loading ? <>Loading..</> : <>Search</>}
					</button>
				</div>
			</form>
			{errorInfo && (
				<div className="mt-10 max-w-3xl w-full">
					<h3 className="text-danger text-center text-xl">
						Error: {errorInfo}
					</h3>
				</div>
			)}
			{response && (
				<div className="mt-10 max-w-3xl w-full">
					<h3 className="text-primary text-center text-xl">
						The domain {keyword} is{' '}
						{response.payload.availability === 'available' ? (
							<span className="text-active">available</span>
						) : (
							<span className="text-danger">not available</span>
						)}
					</h3>
					{
						// If domain is already registered, show its details
						response.payload.availability !== 'available' && (
							<div>
								<h3 className="mt-10 text-primary text-xl">
									Details:
								</h3>
								<table className="w-full text-primary font-semibold mt-2 md:text-sm">
									<tbody className="bg-primary rounded-sm divide-y text-background overflow-x-scroll">
										<tr>
											<td className="px-4 py-4">
												Domain
											</td>
											<td className="border-l px-4 py-4">
												{response.payload.full}
											</td>
										</tr>
										<tr>
											<td className="px-4 py-4">
												Status
											</td>
											<td className="border-l px-4 py-4 capitalize">
												{response.payload.availability}
											</td>
										</tr>
										<tr>
											<td className="px-4 py-4">
												Registrant
											</td>
											<td className="border-l px-4 py-4">
												{
													response.payload
														.registrar_name
												}
											</td>
										</tr>
										<tr>
											<td className="px-4 py-4">
												Created On
											</td>
											<td className="border-l px-4 py-4">
												{new Date(
													response.payload.creation_date // Converting to dd/mm/yyyy format
												).toLocaleDateString()}
											</td>
										</tr>
										<tr>
											<td className="px-4 py-4">
												Expires After
											</td>
											<td className="border-l px-4 py-4">
												{
													response.payload
														.time_to_expire
												}
											</td>
										</tr>
										<tr>
											<td className="px-4 py-4">
												Updated
											</td>
											<td className="border-l px-4 py-4">
												{
													response.payload
														.time_since_last_update
												}{' '}
												ago
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						)
					}
				</div>
			)}
		</div>
	);
}
```

This is what our app looks like in its final form:

![Domain App built using NameAuditor WHOIS API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-domain-app/images/domain-app.png)

## Wrap Up

All done. Our [Domain Search App](https://rapidapi-example-domain-app.vercel.app/) is ready. Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/domain-app).
