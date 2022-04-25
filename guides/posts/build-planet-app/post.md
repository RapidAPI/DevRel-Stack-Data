---
title: How to build a Planet App using Planets API?
description: There are several planets in the known universe. Each of them has specific properties and environments and is different from one another. Instead of looking at these properties on the internet, we can build a small web app for them. So in this piece, let's build a small planet app.
publishedDate: 2022-04-25T18:18:51.569Z
lastModifiedDate: 2022-04-25T18:18:51.569Z
authors:
    - saad
categories:
    - apps
tags:
    - rapidapi
    - planet-app
coverImage: ''
---

<Lead>

There are several planets in the known universe. Each of them has specific properties and environments and is different from one another. Instead of looking at these properties on the internet, we can build a small web app for them.

</Lead>

So today, I will build a planet app that will take the name of the planet and provide different properties associated with it. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to get the properties of a planet. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “planet apis” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://RapidAPI.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the planet APIs. For this piece, I will use [Planets by API-Ninjas API](https://RapidAPI.com/apininjas/api/planets-by-api-ninjas/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

It’s a free API so you don’t have to subscribe to it. But you need to save the value of `x-rapidapi-key` because it will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss planet-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `planet-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

### Project Files

When you open the project in your code editor, you will see the following directories and files in the root directory:

-   `pages` directory: Inside it, you will have files `index.js`, `_app.js`, and another directory called `api`. You only need to know about the `index.js` file that is the main entry point in your project.
-   `public` directory: This directory contains icons. You place your static files here to load later in the application.
-   `node_modules`: It’s another directory that contains all the node modules you are using in your application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/planet-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Planet</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
				Get Stats on your favorite planets
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Planet App” and “Get Stats on your favorite planets”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field to get the name of the planet from the user. I will also create a button for getting the planet's details. For this, copy the following code and paste it into `pages/index.js`:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Planet</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
				Get Stats on your favorite planets
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						autoFocus={true}
						type="text"
						className="border-none font-semibold outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Planet name..."
					/>
					<button className="outline- outline-active border border-active font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
```

This code is going to create an input field and a button. I have also styled them a little bit using [TailwindCSS]((https://tailwindcss.com/).

### → STEP #3

Let’s create some states to store the planet name and the response that we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```jsx
import {useState} from 'react';

export default function Home() {
	const [planet, setPlanet] = useState('Earth');
	const [response, setResponse] = useState(null);

	return (
		<div className="flex flex-col items-center">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Planet</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
				Get Stats on your favorite planets
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						autoFocus={true}
						type="text"
						className="border-none font-semibold outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Planet name..."
						value={planet}
						onChange={e => setPlanet(e.target.value)}
					/>
					<button className="outline- outline-active border border-active font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user writes something in the input field.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Planets by API-Ninjas API](https://RapidAPI.com/apininjas/api/planets-by-api-ninjas/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/91d49cf7f7ef820361037f8f0795294f76c34813/guides/posts/build-planet-app/images/code-snippet.png)

Now create a file with the name `info.js` inside the `pages/api` directory. It is going to make a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/info
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://planets-by-api-ninjas.p.rapidapi.com/v1/planets',
			params: {name: req.query.planet},
			headers: {
				'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com',
				'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
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

This code makes an API call to the [Planets by API-Ninjas API](https://RapidAPI.com/apininjas/api/planets-by-api-ninjas/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `info` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [planet, setPlanet] = useState('Earth');
	const [response, setResponse] = useState(null);
	const [btnText, setBtnText] = useState('Search');

	/**
	 *
	 *
	 * Get info of the planet
	 */
	const fetchPlanetInfo = async e => {
		e.preventDefault();
		setBtnText('Loading...');
		try {
			const res = await axios.get(`/api/info/`, {
				params: {planet}
			});
			setResponse(res.data[0]);
		} catch (err) {
			console.log(err);
		}
		setBtnText('Search');
	};

	return (
		<div className="flex flex-col items-center">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-active">Planet</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
				Get Stats on your favorite planets
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						autoFocus={true}
						type="text"
						className="border-none font-semibold outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Planet name..."
						value={planet}
						onChange={e => setPlanet(e.target.value)}
					/>
					<button
						className="outline- outline-active border border-active font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
						onClick={fetchPlanetInfo}
					>
						{btnText}
					</button>
				</form>
				{response && (
					<div className="flex flex-col text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
						<table className="w-full text-secondary mb-8 md:text-sm md:mx-2">
							<tbody>
								<tr>
									<td className="border px-4 py-4">
										Distance Light Year
									</td>
									<td className="border px-4 py-4 capitalize">
										{response.distance_light_year}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">
										Host Star Mass
									</td>
									<td className="border px-4 py-4 capitalize">
										{response.host_star_mass}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">
										Host Star Temperature
									</td>
									<td className="border px-4 py-4">
										{response.host_star_temperature}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">Mass</td>
									<td className="border px-4 py-4">
										{response.mass}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">Period</td>
									<td className="border px-4 py-4">
										{response.period}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">Radius</td>
									<td className="border px-4 py-4">
										{response.radius}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">
										Semi Major Axis
									</td>
									<td className="border px-4 py-4">
										{response.semi_major_axis}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">
										Temperature
									</td>
									<td className="border px-4 py-4">
										{response.temperature}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
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
```

You can see that I have created a function, `fetchPlanetInfo`, to request the API. I have also created a piece of UI that is conditionally rendering on the screen based on the `response` state variable value.

When the user clicks the search button, it will fire the function. Inside the function, an API call will take place that brings along an object which will then be saved in the `response` state variable.

## Wrap Up

That’s it. We have successfully built a [Planet App](https://rapidapi-example-planet-app.vercel.app/) using [Planets by API-Ninjas API](https://RapidAPI.com/apininjas/api/planets-by-api-ninjas/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/planet-app) of this web app.

In the end, it will look something like this:

![Planet App built with Next.js and Planets by API-Ninjas API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/91d49cf7f7ef820361037f8f0795294f76c34813/guides/posts/build-planet-app/images/cover.png)
