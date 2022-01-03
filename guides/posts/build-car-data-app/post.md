---
title: How to build a Car Data app using Car Data API?
description: Today, I am building a car data pp that will provide you with different car details depending on their make and model.
authors:
    - saad
categories:
    - apps
tags:
    - car-data-app
    - app
publishedDate: 2022-01-03T09:34:31.065Z
lastModifiedDate: 2022-01-03T09:34:31.065Z
coverImage: ''
---

<Lead>

If you were a car enthusiast like me, you would have often found yourself searching for different cars, their make, model, etc. Instead of searching for a particular car, we can build an application to see all the car details.

</Lead>

So today, I am building a car data pp that will provide you with different car details depending on their make and model. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to find the horoscope. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “car data apis” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to quotes APIs. For this piece, I am using [Car Data API](https://rapidapi.com/principalapis/api/car-data?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Car Data App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/6a0d3c1e542809cfb1aee26671f8d9b6c8fe9cac/guides/posts/build-car-data-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss car-data-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `car-data-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

### Project Files

When you open the project in your code editor, you will see the following directories and files in the root directory:

-   `pages` directory: Inside it, you will have files `index.js`, `_app.js`, and another directory called - - `api`. You only need to know about the `index.js` file that is the main entry point in your project.
-   `public` directory: This directory contains icons. You place your static files here to load later in the application.
-   `node_modules`: It’s another directory that contains all the node modules you are using in your application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/car-data-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Car <span className="text-secondary">Data</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get Different Car Information
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Quote App” and “A Simple App to Get You Motivated”. You can change it to anything you prefer.

### → STEP #2

Now let’s create input fields and a search button. The user will be able to provide the make and model of a car using the input fields and the search button can get them the details.

For this, copy the following code and paste it in `pages/index.js`:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Car <span className="text-secondary">Data</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get Different Car Information
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						type="text"
						className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Make..."
					/>
					<input
						type="text"
						className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Model..."
					/>
					<button className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
```

This code is going to create two input fields and a button. I have also styled them a little bit using [TailwindCSS](https://tailwindcss.com/).

### → STEP #3

Let’s create some states to store the provided data and the car details we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```jsx
import {useState} from 'react';

export default function Home() {
	const [make, setMake] = useState('');
	const [model, setModel] = useState('');
	const [res, setRes] = useState();

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Car <span className="text-secondary">Data</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get Different Car Information
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						type="text"
						className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Make..."
						onChange={e => setMake(e.target.value)}
					/>
					<input
						type="text"
						className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Model..."
						onChange={e => setModel(e.target.value)}
					/>
					<button className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user types in the input fields.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Car Data API](https://rapidapi.com/principalapis/api/car-data?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` in your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/5e204c20a282c42de8cc6939ee7aa62e24049955/guides/posts/build-car-data-app/images/code-snippet.png)

Now create a file with the name `info.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/info
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const make = req.query.make || '';
		const model = req.query.model || '';

		const options = {
			method: 'GET',
			url: 'https://car-data.p.rapidapi.com/cars',
			params: {
				limit: '50',
				page: '0',
				make: make,
				model: model
			},
			headers: {
				'x-rapidapi-host': 'car-data.p.rapidapi.com',
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
	} else {
		res.status(400);
	}
}
```

This code makes an API call to the [Car Data API](https://rapidapi.com/principalapis/api/car-data?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `info` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import {useState} from 'react';
import axios from 'axios';

export default function Home({data}) {
	const [make, setMake] = useState('');
	const [model, setModel] = useState('');
	const [res, setRes] = useState(data);

	/**
	 *
	 *
	 * Fetch car details
	 */
	const fetchCarDetails = async e => {
		e.preventDefault();
		try {
			const res = await axios.get(`/api/info`, {
				params: {
					make,
					model
				}
			});
			setRes(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Car <span className="text-secondary">Data</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get Different Car Information
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						type="text"
						className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Make..."
						onChange={e => setMake(e.target.value)}
					/>
					<input
						type="text"
						className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Model..."
						onChange={e => setModel(e.target.value)}
					/>
					<button
						className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
						onClick={e => fetchCarDetails(e)}
					>
						Search
					</button>
				</form>

				<div className="flex flex-col text-primary text-sm text-raleway mt-12 w-4/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
					<table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
						<thead className="font-raleway uppercase tracking-wide text-secondary">
							<tr>
								<th className="border border-x-0 text-left px-4 py-4">
									<span className="text-danger">Year</span>
								</th>
								<th className="border border-x-0 text-left px-4 py-4">
									<span className="text-danger">Type</span>
								</th>
								<th className="border border-x-0 text-left px-4 py-4">
									<span className="text-danger">Make</span>
								</th>
								<th className="border border-x-0 text-left px-4 py-4">
									<span className="text-danger">Model</span>
								</th>
							</tr>
						</thead>
						<tbody className="text-primary">
							{res.map(info => (
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										<span className="text-danger">
											{info.year}
										</span>
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										<span className="text-danger">
											{info.type}
										</span>
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										<span className="text-danger">
											{info.make}
										</span>
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										<span className="text-danger">
											{info.model}
										</span>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className="flex flex-col mt-10 justify-end h-36 md:h-24">
				<p className="block mb-10 text-center text-secondary text-xs">
					Made by RapidAPI DevRel Team -{' '}
					<a
						className="hover:text-active"
						href="https://github.com/RapidAPI/DevRel-Examples-External"
					>
						See more examples like this
					</a>
				</p>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await axios.get('http://localhost:3000/api/info');
	const {data} = res;

	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			data
		}
	};
}
```

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It will make my application server-side, and the user will never see a loading state. You can also use `getStaticProps` instead of `getServerSideProps`, and the application will then fetch the data at build time.

I have created a `fetchCarDetails` function that makes an API call when the user clicks on the `search` button.

## Wrap Up

That’s it. We have successfully built a Horoscope App](https://rapidapi-example-car-data-app.vercel.app/) using [Car Data API](https://rapidapi.com/principalapis/api/car-data?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/car-data-app).

In the end, it will look something like this:

![Car Data App built with Next.js using Car Data API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/5e204c20a282c42de8cc6939ee7aa62e24049955/guides/posts/build-car-data-app/images/cover.png)
