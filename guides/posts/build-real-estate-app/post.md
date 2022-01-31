---
title: How to build a Real Estate App using Realty API?
description: Realty API from RapidAPI Hub offers an extensive set of details about the real estate properties in the USA. This guide will demonstrate how to create our own Real Estate App using the API.
publishedDate: 2022-01-18T19:10:30.765Z
lastModifiedDate: 2022-01-18T19:10:30.765Z
authors:
    - ahmadBilal
categories:
    - apps
tags:
    - rapidapi
    - real-estate
    - app
coverImage: ''
---

<Lead>

Today, public APIs provide a fast and convenient way to develop an application. Whether you're building a small tool-based application or a big eCommerce portal, these APIs can be very serviceable.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs which over 3 million developers are using. You can explore thousands of them on RapidAPI Hub and select the best one for your next project.

Today, we will be building a web application that will allow users to search for the properties available for sale in the United States. Today, APIs exist which provide us with updated real estate data, so let's build the app using one of them.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Real Estate" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub as a developer.
</Callout>

You will see that we have a lot of APIs to choose from. For our app, I will use the [Realty API](https://rapidapi.com/apidojo/api/realty-in-us/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), which offers the most features.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to Realty API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-real-estate-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss real-estate-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `real-estate-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/real-estate-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors and fonts I will be using.

Our initial UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-real-estate-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Real Estate <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover latest properties for sale anywhere in USA.
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
				<title>RapidAPI Devrel Example - Real Estate App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
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

As you can see in the UI preview, we require an input form to enter the location for the properties. We also need two more input fields for options like sort type and excluded minimum beds. Finally, a search button will follow the inputs. Let's add all these.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Real Estate <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover latest properties for sale anywhere in USA.
			</h2>
			<form
				className="sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					e.preventDefault(); // Allow enter key to submit the form
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the location for properties eg: New York"
				/>
				<div className="mt-5 flex sm:flex-row flex-col justify-start">
					<div className="sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Sort By
						</label>
						<select className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none">
							{[
								'relevance',
								'newest',
								'price_high',
								'price_low',
								'price_reduced_date',
								'sqft_high',
								'open_house_date',
								'photos'
							].map(value => {
								return <option value={value}>{value}</option>;
							})}
						</select>
					</div>
					<div className="sm:ml-10 sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Minimum Beds
						</label>
						<input
							type="number"
							className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							placeholder="1"
						></input>
					</div>
				</div>

				<button
					className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
}
```

This code will create the input fields and search button. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

Now, we need to store the user input in the input field. We can do it using React `useState` hook. We will use a bunch of states for our app; let's add them. Check the comments to see the purpose of each state.

```jsx
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState(null); // Stores input location keyword eg: "New York"
	const [sort, setSort] = useState(null); // Stores the sort preference
	const [beds, setBeds] = useState(null); // Stores the minimum beds
	const [response, setResponse] = useState(null); // Stores the properties returned in the API response

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Real Estate <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover latest properties for sale anywhere in USA.
			</h2>
			<form
				className="sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					e.preventDefault(); // Allow enter key to submit the form
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the location for properties eg: New York"
					onChange={e => {
						// Store value in state
						setKeyword(e.target.value);
						setResponse(null);
					}}
				/>
				<div className="mt-5 flex sm:flex-row flex-col justify-start">
					<div className="sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Sort By
						</label>
						<select
							className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							onChange={e => setSort(e.target.value)} // Store value in state
						>
							{[
								'relevance',
								'newest',
								'price_high',
								'price_low',
								'price_reduced_date',
								'sqft_high',
								'open_house_date',
								'photos'
							].map(value => {
								return <option value={value}>{value}</option>;
							})}
						</select>
					</div>
					<div className="sm:ml-10 sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Minimum Beds
						</label>
						<input
							type="number"
							className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							placeholder="1"
							onChange={e => setBeds(e.target.value)} // Store value in state
						></input>
					</div>
				</div>

				<button
					className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
}
```

Notice how we are using the `onChange` handlers on the input fields to store their values(`e.target.value`) in our states.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Realty API](https://rapidapi.com/apidojo/api/realty-in-us/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API provides all the information a Real Estate App needs. These endpoints deliver information about Properties, Agents, Mortgage, and Finance Tools. We will use the following two endpoints in our app:

1. `locations/auto-complete` gets auto-complete suggestions for location by city, ward, or street name to pass into the properties endpoint.
2. `properties/list-for-sale` allows us to look up properties available for sale.

You can see these endpoints on the left pane in the image below.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-real-estate-app/images/snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We will copy the `(JavaScript) Axios` ones, as you can see above.

Let's set up the API calls now. In the `pages/api` directory, create two files named `location.js` and `properties.js` and use the code snippet as follows:

```jsx
// In pages/api/location.js:
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/locations/auto-complete",
    params: { input: req.query.keyword },
    headers: {
      "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
      "x-rapidapi-key": NEXT_PUBLIC_RAPIDAPI_KEY,
    },
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

// In pages/api/properties.js:
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/properties/list-for-sale",
    params: {
      state_code: req.query.state_code,
      city: req.query.city,
      offset: "0",
      limit: "20",
      sort: req.query.sort,
      beds_min: req.query.beds,
    },
    headers: {
      "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
      "x-rapidapi-key": NEXT_PUBLIC_RAPIDAPI_KEY,
    },
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

We have specified the parameters `req.query.keyword`, `req.query.state_code`, `req.query.city` and more. `req.query` is an object in Next.js that holds the input parameters coming from our client-side. We will pass these values from our client-side now.

### → STEP #4

Now we need to create a function `getProperties` in the `pages/index.js` file to send a request to our APIs. The search button will trigger this function, which will make a GET request to our API.

First, this function will request the location endpoint to get city and state codes. Then, we will use these as parameters for requesting the properties endpoint.

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState(null);
	const [sort, setSort] = useState(null);
	const [beds, setBeds] = useState(null);
	const [response, setResponse] = useState(null);

	const getProperties = async () => {
		try {
			// Request the location endpoint to get location based on input keuyword
			const location = await axios.get('api/location/', {
				params: {keyword}
			});
			const {city, state_code} = location.data.autocomplete[0]; // Extract city and state from the response
			// Request the properties endpoint to get available properties
			const res = await axios.get('api/properties/', {
				params: {city, state_code, sort, beds} // Set parameters
			});
			const {data} = res;
			setResponse(data.listings); // Set response
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Real Estate <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover latest properties for sale anywhere in USA.
			</h2>
			<form
				className="sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					getProperties(); // Trigger the API call on submit
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the location for properties eg: New York"
					onChange={e => {
						setKeyword(e.target.value);
						setResponse(null);
					}}
				/>
				<div className="mt-5 flex sm:flex-row flex-col justify-start">
					<div className="sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Sort By
						</label>
						<select
							className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							onChange={e => setSort(e.target.value)}
						>
							{[
								'relevance',
								'newest',
								'price_high',
								'price_low',
								'price_reduced_date',
								'sqft_high',
								'open_house_date',
								'photos'
							].map(value => {
								return <option value={value}>{value}</option>;
							})}
						</select>
					</div>
					<div className="sm:ml-10 sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Minimum Beds
						</label>
						<input
							type="number"
							className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							placeholder="1"
							onChange={e => setBeds(e.target.value)}
						></input>
					</div>
				</div>

				<button
					className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
}
```

Thanks to the `onSubmit` handler of the form, `getProperties` function will be triggered when the search button is clicked or by pressing the enter key.

### → FINAL STEP

Finally, it is time to display the properties returned by the API. You can use the **Test Endpoint** button on the API's page to check the response.

We will use a map function to iterate through `response`, an array of property objects. I will be displaying the price, image, baths, beds, address, and URL of every property. For the design, I used a grid to organize the details. Our final code looks like this:

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [keyword, setKeyword] = useState(null);
	const [sort, setSort] = useState(null);
	const [beds, setBeds] = useState(null);
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	const getProperties = async () => {
		try {
			const location = await axios.get('api/location/', {
				params: {keyword}
			});
			const {city, state_code} = location.data.autocomplete[0];

			const res = await axios.get('api/properties/', {
				params: {city, state_code, sort, beds}
			});
			const {data} = res;
			setResponse(data.listings);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Real Estate <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover latest properties for sale anywhere in USA.
			</h2>
			<form
				className="sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					getProperties();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter the location for properties eg: New York"
					onChange={e => {
						setKeyword(e.target.value);
						setResponse(null);
					}}
				/>
				<div className="mt-5 flex sm:flex-row flex-col justify-start">
					<div className="sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Sort By
						</label>
						<select
							className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							onChange={e => setSort(e.target.value)}
						>
							{[
								'relevance',
								'newest',
								'price_high',
								'price_low',
								'price_reduced_date',
								'sqft_high',
								'open_house_date',
								'photos'
							].map(value => {
								return <option value={value}>{value}</option>;
							})}
						</select>
					</div>
					<div className="sm:ml-10 sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Minimum Beds
						</label>
						<input
							type="number"
							className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							onChange={e => setBeds(e.target.value)}
							placeholder="1"
						></input>
					</div>
				</div>

				<button
					className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
					type="submit"
				>
					Search
				</button>
			</form>
			{response && (
				<div className="mt-10">
					<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{response.map(property => (
							<div key={property.property_id} className="pt-6">
								<div className="flow-root bg-light rounded-lg px-4 pb-8">
									<div className="-mt-6">
										<div className="flex items-center justify-center">
											<span className="p-2">
												<img
													src={property.photo}
													className="w-full h-full rounded-lg"
												/>
											</span>
										</div>
										<div className="text-center justify-center items-center">
											<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-active tracking-tight">
												{property.short_price}{' '}
												{property.prop_type}
											</h3>
											<span className="mt-2 text-sm font-bold text-primary block">
												{property.beds} Bed -{' '}
												{property.baths_full} Bath
											</span>
											<span className="mt-2 text-sm text-secondary block">
												{property.address}
											</span>
											<a
												className="mt-4 text-sm text-active block"
												href={property.rdc_web_url}
											>
												Details
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
```

Finally, our app is ready and looks like this:

![Real Estate App built using Realty API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-real-estate-app/images/final.png)

## Wrap Up

All done. You can also check the deployed [Real Estate App](https://rapidapi-example-real-estate-app.vercel.app/) and find its code in the [RapidAPI Examples Repository](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/real-estate-app) on GitHub.
