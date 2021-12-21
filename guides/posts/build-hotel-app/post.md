---
title: How to build a Hotel App using Hotels API and Next.js?
description: Let's see how we can build a hotel booking app using an API from RapidAPI Hub.
publishedDate: 2021-12-09T15:57:17.709Z
lastModifiedDate: 2021-12-09T15:57:17.709Z
authors:
    - ahmadBilal
categories:
    - apps
tags:
    - rapidapi
    - hotel
    - app
coverImage: ''
---

<Lead>

Today, public APIs provide a fast and convenient way to develop an application. Whether a small tool-based application or a big eCommerce portal, these APIs can be very serviceable.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs for use in your projects. You can explore thousands of these on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and select one for your next project.

Today, we will be building a web application that will allow users to look up hotels and book them. We have APIs that provide information about hotels in the whole world. Let's build the app using one of these APIs.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find a hotel API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Hotels" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see that we have a lot of options for Hotel-related APIs. For our app, I am going to use the [Hotels API by API Dojo](https://rapidapi.com/apidojo/api/hotels4/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to Hotels API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-hotel-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. The free plan allows up to 500 requests per month. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss hotel-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `hotel-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/hotel-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors I will be using.

Our initial UI should look like this.

![Preview of Hotel App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-hotel-app/images/initial-ui.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```js
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Hotel Booking <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover and Book Hotels using Hotels API from RapidAPI Hub.
			</h2>
		</div>
	);
}
```

I added the following to `pages/_app.js`.

```js
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title>RapidAPI Devrel Example - Hotel App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
```

### → STEP #2

As you can see in the preview, we require two inputs, one for the destination and the second for other details like check-in, check-out, and the number of guests. Both of these inputs will have respective buttons for submitting the queries.

```js
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Hotel Booking <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover and Book Hotels using Hotels API from RapidAPI Hub.
			</h2>

			<div className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
					placeholder="Enter your destination city"
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10">
						Search
					</button>
				</div>
			</div>

			<div className="mt-10 w-full sm:mx-auto lg:mx-0">
				<div className="md:grid md:grid-cols-6 gap-1 flex flex-col">
					<div className="rounded-l-lg col-span-2 col-span-2 flex flex-col py-2 items-center bg-primary">
						<label
							for="check-in"
							className="py-2 text-sm font-semibold uppercase"
						>
							Check-in
						</label>
						<input id="startDate" type="date" />
					</div>
					<div className="col-span-2 py-2 flex flex-col items-center bg-primary">
						<label
							for="check-out"
							className="py-2 text-sm font-semibold uppercase"
						>
							Check-out
						</label>
						<input id="check-out" type="date" />
					</div>
					<div className="col-span-1 py-2 flex flex-col items-center bg-primary overflow-hidden">
						<label
							for="guests"
							className="py-2 text-sm font-semibold uppercase"
						>
							Guests
						</label>
						<input
							id="guests"
							type="number"
							placeholder="Total guests"
							className="text-center"
						/>
					</div>
					<div className="col-span-1 bg-active hover:opacity-80 rounded-r-lg">
						<button
							type="submit"
							className="w-full h-full md:py-0 py-4 text-primary font-bold break-words"
						>
							Find Hotels
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
```

This code will create both of the input fields and submit buttons. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Now, we need to store the user input using React `useState` hooks. We will use a bunch of states for our application and the `onChange` handlers on every input to set their values. Check the following code and comments for a breakdown of these states.

```js
import {useState} from 'react';

export default function Home() {
	const [searchCity, setSearchCity] = useState(null); // Stores user's input destination keyword eg: new york.
	const [city, setCity] = useState(null); // Stores the destination_id received in the API Response eg: 23412.
	const [checkIn, setCheckIn] = useState(null); // Check-in Date.
	const [checkOut, setCheckOut] = useState(null); // Check-out Date.
	const [guests, setGuests] = useState(null); // Number of guests.
	const [hotels, setHotels] = useState(null); // Stores the available hotels received in the API Response.

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Hotel Booking <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover and Book Hotels using Hotels API from RapidAPI Hub.
			</h2>

			<div className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
					placeholder="Enter your destination city"
					onChange={e => {
						setCity(null); // Remove previous response
						setSearchCity(e.target.value);
					}}
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10">
						Search
					</button>
				</div>
			</div>

			<div className="mt-10 w-full sm:mx-auto lg:mx-0">
				<div className="md:grid md:grid-cols-6 gap-1 flex flex-col">
					<div className="rounded-l-lg col-span-2 col-span-2 flex flex-col py-2 items-center bg-primary">
						<label
							for="check-in"
							className="py-2 text-sm font-semibold uppercase"
						>
							Check-in
						</label>
						<input
							id="startDate"
							type="date"
							onChange={e => setCheckIn(e.target.value)}
						/>
					</div>
					<div className="col-span-2 py-2 flex flex-col items-center bg-primary">
						<label
							for="check-out"
							className="py-2 text-sm font-semibold uppercase"
						>
							Check-out
						</label>
						<input
							id="check-out"
							type="date"
							onChange={e => setCheckOut(e.target.value)}
						/>
					</div>
					<div className="col-span-1 py-2 flex flex-col items-center bg-primary overflow-hidden">
						<label
							for="guests"
							className="py-2 text-sm font-semibold uppercase"
						>
							Guests
						</label>
						<input
							id="guests"
							type="number"
							placeholder="Total guests"
							className="text-center"
							onChange={e => setGuests(e.target.value)}
						/>
					</div>
					<div className="col-span-1 bg-active hover:opacity-80 rounded-r-lg">
						<button
							type="submit"
							className="w-full h-full md:py-0 py-4 text-primary font-bold break-words"
						>
							Find Hotels
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
```

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Hotels API](https://rapidapi.com/apidojo/api/hotels4/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

The [Hotels API](https://rapidapi.com/apidojo/api/hotels4/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides all the endpoints a hotel application would need, including locations, property details, and user reviews. You can see these endpoints on the left pane. For this guide, we are going to use the following endpoints:

-   `locations/v2/search` for looking up the destination city.

-   `properties/list` for getting a list of available hotels in that city.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-hotel-app/images/code-snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We are going to copy the `(JavaScript) Axios` ones, as you can see above.

Let's set up the API calls now. In the `pages/api` directory, I am going to create two files, `city.js` and `hotels.js`, and use the code snippets as follows:

```js

// City.js
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/locations/v2/search",
    params: { query: req.query.searchCity, locale: "en_US", currency: "USD" },
    headers: {
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
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

// Hotels.js
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/properties/list",
    params: {
      destinationId: req.query.city,
      pageNumber: "1",
      pageSize: "25",
      checkIn: req.query.checkIn,
      checkOut: req.query.checkOut,
      adults1: req.query.guests,
      sortOrder: "GUEST_RATING",
      locale: "en_US",
      currency: "USD",
    },
    headers: {
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
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

We have specified the parameters, `req.query` is an object that holds the input parameters coming from our client-side. Our API call is ready. Now we need to create two functions in the `pages/index.js` file to send the client-side requests to our APIs `http://localhost:3000/api/city` and `http://localhost:3000/api/hotels`. In the `pages/index.js` file, add the following functions:

```js
/**
 * Fetches destination_id for the input city
 */
const getCity = async () => {
	try {
		const res = await axios.get('api/city/', {
			params: {searchCity}
		});
		const {data} = res;
		setCity(data.suggestions[0].entities[0].destinationId);
	} catch (error) {
		console.log(error);
	}
};

/**
 * Fetches the list of hotels for the given city_id and parameters.
 */
const getHotels = async () => {
	try {
		const res = await axios.get('api/hotels/', {
			params: {city, checkIn, checkOut, guests}
		});
		const {data} = res;
		setHotels(data.data.body);
	} catch (error) {
		console.log(error);
	}
};
```

The responses of both calls are stored in the `city` and `hotels` states. We use the response `city` received in the first call to request the available hotels in the second API call. This approach is called response chaining.

### → FINAL STEP

In the final step, we will display the results. In the `getHotels` function, The API returns an array of objects, one object for each hotel. Each object has all the information you need about the given hotel, from its price to the thumbnail image.

We will use a map function to iterate through this array of objects. I will be displaying each hotel’s title, thumbnail, rating, and price. For the design, I used a grid to organize cards for each hotel. Lastly, don't forget to bind the two functions to their respective buttons using the `onClick` handlers. Our final code looks like this:

```js
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [searchCity, setSearchCity] = useState(null);
	const [city, setCity] = useState(null);
	const [checkIn, setCheckIn] = useState(null);
	const [checkOut, setCheckOut] = useState(null);
	const [guests, setGuests] = useState(null);
	const [hotels, setHotels] = useState(null);

	const getCity = async () => {
		try {
			const res = await axios.get('api/city/', {
				params: {searchCity}
			});
			const {data} = res;
			setCity(data.suggestions[0].entities[0].destinationId);
		} catch (error) {
			console.log(error);
		}
	};

	const getHotels = async () => {
		try {
			const res = await axios.get('api/hotels/', {
				params: {city, checkIn, checkOut, guests}
			});
			const {data} = res;
			setHotels(data.data.body);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Hotel Booking <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover and Book Hotels using Hotels API from RapidAPI Hub.
			</h2>

			<div className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
					placeholder="Enter your destination city"
					onChange={e => {
						setCity(null);
						setSearchCity(e.target.value);
					}}
				/>

				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						onClick={() => getCity()} // Call getCity() when clicked
					>
						Search
					</button>
				</div>
			</div>

			{city && (
				<div className="mt-10 w-full sm:mx-auto lg:mx-0">
					<div className="md:grid md:grid-cols-6 gap-1 flex flex-col">
						<div className="rounded-l-lg col-span-2 col-span-2 flex flex-col py-2 items-center bg-primary">
							<label
								for="check-in"
								className="py-2 text-sm font-semibold uppercase"
							>
								Check-in
							</label>
							<input
								id="startDate"
								type="date"
								onChange={e => setCheckIn(e.target.value)}
							/>
						</div>
						<div className="col-span-2 py-2 flex flex-col items-center bg-primary">
							<label
								for="check-out"
								className="py-2 text-sm font-semibold uppercase"
							>
								Check-out
							</label>
							<input
								id="check-out"
								type="date"
								onChange={e => setCheckOut(e.target.value)}
							/>
						</div>
						<div className="col-span-1 py-2 flex flex-col items-center bg-primary overflow-hidden">
							<label
								for="guests"
								className="py-2 text-sm font-semibold uppercase"
							>
								Guests
							</label>
							<input
								id="guests"
								type="number"
								placeholder="Total guests"
								className=" text-center"
								onChange={e => setGuests(e.target.value)}
							/>
						</div>
						<div className="col-span-1 bg-active hover:opacity-80 rounded-r-lg">
							<button
								type="submit"
								className="w-full h-full md:py-0 py-4 text-primary font-bold break-words"
								onClick={() => getHotels()} // Call getHotels() when clicked
							>
								Find Hotels
							</button>
						</div>
					</div>
				</div>
			)}

			{hotels && (
				<div className="mt-16">
					<h3 className="text-secondary text-2xl">
						Hotels in{' '}
						<span className="text-active">{hotels.header}</span>
					</h3>
					<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{hotels.searchResults.results.map(hotel => (
							<div key={hotel.id} className="pt-6">
								<div className="flow-root bg-light rounded-lg px-2 pb-6">
									<div className="-mt-6">
										<div className="flex items-center justify-center">
											<span className="p-3 rounded-md shadow-lg">
												<img
													src={
														hotel.optimizedThumbUrls
															.srpDesktop
													}
													width={300}
													height={300}
													alt={hotel.name}
												/>
											</span>
										</div>
										<div className="text-center justify-center items-center">
											<h3 className="mt-2 text-lg text-center font-medium text-primary tracking-tight">
												{hotel.name}
											</h3>
											<div className="flex flex-col mt-5 items-center">
												<span className="mt-2 mb-4 max-w-xs text-sm text-secondary block">
													Rating:{' '}
													{hotel.guestReviews
														?.rating && (
														<>
															{
																hotel
																	.guestReviews
																	?.rating
															}
														</>
													)}
												</span>
												<span className="text-2xl font-bold text-active">
													{
														hotel.ratePlan?.price
															.current
													}
												</span>
											</div>
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

This is what our app looks like in its final form:

![Hotel App built with Next.js using Hotels API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-hotel-app/images/hotel-app.png)

## Wrap Up

All done. Our [hotel app](https://rapidapi-example-hotel-app.vercel.app/) is ready. Just like this, you can utilize the remaining endpoints to create a full-fledged hotel booking application. Find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/hotel-app).
