---
title: How to build a weather app using Next.js and WeatherAPI?
description: In this piece, let's build a weather application using an API from RapidAPI Hub and Next.js.
publishedDate: 2021-10-11T20:53:04.094Z
lastModifiedDate: 2021-10-11T20:53:04.094Z
authors:
    - saad
categories:
		- apps
tags:
    - rapidapi
    - weather-app
coverImage: ''
---

<Lead>
	RapidAPI Hub is the world’s largest API hub with more than 35,000 APIs
	available. Anyone can build an API and monetize it on RapidAPI. The
	developers use these APIs in their applications. They can try the API for
	free, and if they like it, they can purchase them.
</Lead>

Today, I have decided to use one of the APIs from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and build a small application from it. Let’s build this application together.

## Stack

Let’s start by choosing the web stack. I am a huge fan of Jamstack (JavaScript, API, and Markdown). So, let’s go with it in this example.

I am using [Next.js](https://nextjs.org/) for the framework and [Tailwind CSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Finding The API

The next thing we have to do is find the API we will be using. For this, head over to the [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and create an account. Once you do that, search for a "weather" API.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

I have decided to go with the first result, i.e., [Open Weather Map](https://RapidAPI.com/community/api/open-weather-map/) API. It has a popularity of 9.9 out of 10. Its latency is 367ms and provides a 100% service level.

To use the API, you need to subscribe to it first. For this, all you need to do is click on the Subscribe button, and you will be directed to another page.

![Subscribe to Open Weather Map API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-weather-app/images/weather-api.jpg)

Here you will be asked to choose any of the available packages. Let’s go with the free package that has a hard limit of 500 requests per month. Subscribe to it.

You will be directed back to the endpoint section now. Your API key is written here in front of the label `X-RapidAPI-Key`. You will need it later in the application.

## Setting Up The UI

Now let’s create a Next.js app that has Tailwind CSS integrated inside of it. For this, open your terminal and type the following there:

```sh
npx create-next-app -e with-tailwindcss weather-app
```

This command is going to take a minute to set everything up. After it is finished generating the boilerplate, you will see a folder with the name `weather-app` has been created. Open this folder in your preferred code editor. I am going to use [VSCode](https://code.visualstudio.com/) for the project.

### Project Files

When you will open the project in your code editor, you will see the following directories and files in the root directory:

-   `pages` directory — Inside it, you will have files `index.js`, `_app.js`, and another directory called `api`. You only need to know about the `index.js` file that is the main entry point in your project.
-   `public` directory — This directory contains icons. You place your static files here to load later in the application.
-   `node_modules` — It’s another directory that contains all the node modules you are using in your application.
-   `package.json` — This file contains the metadata of your project.
-   `package-lock.json` — This file is responsible for tracking the exact version of every package that is installed.
-   `postcss.config.js` — This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js` — It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md` — It’s a markdown file for documentation.

Now let’s create the user interface of our application. I am going to do it in steps.

### → STEP #1

Open the `pages/index.js` file and remove all the boilerplate code. You can copy-paste the following code in your `index.js` file.

```js
export default function Home() {
	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<div>
				<h2 className="font-raleway text-5xl font-extrabold mb-10 sm:text-4xl">
					Weather App
				</h2>
			</div>
		</div>
	);
}
```

You can see I have created a div that has another div inside of it that contains an h2 heading.

### → STEP #2

Let’s create a search box and a button now. You can build it however you like. I am going with the minimal design. So I am putting the input box and the button side by side.

Here is the code so far till this step:

```js
export default function Home() {
 return (
  <div className="flex justify-center items-center h-screen flex-col">
   <div>
    <h2 className="font-raleway text-5xl font-extrabold mb-10 sm:text-4xl">
     Weather App
    </h2>
   </div>
  </div>
     <div className="flex sm:flex-col">
    <input
     type="text"
     placeholder="City..."
     className="outline-indigo mr-6 rounded-sm pl-4 w-64 font-raleway sm:mr-0 sm:mb-4 sm:py-1"
    />
    <button
     className="outline-none border-none font-bold font-raleway px-12 py-2 rounded-sm bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white"
    >
     Search
    </button>
   </div>
 );
}
```

### → STEP #3

We need to show the temperature now. The template for this will be conditionally rendered on the screen. So to do that, we need to create states. Based on the data inside the states, we can then conditionally render the template on the screen.

We also need to do error handling in case the API responds with status code 404.

Here is the code till this point:

```js
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [temp, setTemp] = useState(null);
	const [minTemp, setMinTemp] = useState('');
	const [maxTemp, setMaxTemp] = useState('');
	const [err, setErr] = useState(false);

	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<div>
				<h2 className="font-raleway text-5xl font-extrabold mb-10 sm:text-4xl">
					Weather App
				</h2>
			</div>
			<div className="flex sm:flex-col">
				<input
					type="text"
					placeholder="City..."
					className="outline-indigo mr-6 rounded-sm pl-4 w-64 font-raleway sm:mr-0 sm:mb-4 sm:py-1"
					onChange={e => setCity(e.target.value)}
				/>
				<button
					onClick={getWeather}
					className="outline-none border-none font-bold font-raleway px-12 py-2 rounded-sm bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white"
				>
					Search
				</button>
			</div>
			{temp && (
				<div className="mt-10 flex flex-col justify-start bg-indigo-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
					<div className="flex mb-4">
						<p className="w-64 sm:w-41">Temperature:</p>
						<p>{temp} ° C</p>
					</div>
					<div className="flex mb-4 sm:w-41">
						<p className="w-64">Temperature Min:</p>
						<p>{minTemp}° C</p>
					</div>
					<div className="flex">
						<p className="w-64 sm:w-41">Temperature Max:</p>
						<p>{maxTemp}° C</p>
					</div>
				</div>
			)}
			{err && (
				<div className="mt-10 bg-red-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
					<p>Couldn't fetch weather results.</p>
				</div>
			)}
		</div>
	);
}
```

## Integrating the API

It’s time to integrate the API now. For this, create a `.env.local` file in the root directory. You need to place your API key here that you received when you subscribed to the API.

Copy the following in the `.env.local` and replace the `Your-RapidAPI-Key` with the API key.

```sh
NEXT_PUBLIC_OPEN_WEATHER_API_KEY=Your-Rapid-Key
```

You can use the fetch API for making the API call but I am going to use `axios` instead. Open your terminal and type the following there:

```sh
npm install axios
```

Once installed, import `axios` at the top. You can do this like this:

```js
import axios from ‘axios’;
```

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the (JavaScript) Axios one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-weather-app/images/code-snippet.jpg)

Now I need to save the user input in the state variable ‘city`so it can be sent through the API later. For this, I am setting the`onChange`event in the`input`tag. I am also writing a`getWeather` function that will make the API call when the search button is clicked. Once the API provides a response, the data will be saved in the state variables.

Here is the code so far:

```js
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [city, setCity] = useState('');
	const [temp, setTemp] = useState(null);
	const [minTemp, setMinTemp] = useState('');
	const [maxTemp, setMaxTemp] = useState('');
	const [err, setErr] = useState(false);

	/**
	 *
	 * fetch weather information of the given city
	 */
	const getWeather = () => {
		// resetting states
		setErr(false);
		setTemp(null);

		const options = {
			method: 'GET',
			url: 'https://community-open-weather-map.p.rapidapi.com/weather',
			params: {q: `${city}`, units: 'metric'},
			headers: {
				'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
				'x-rapidapi-key': process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY
			}
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				const {data} = response;
				const newTemp = Math.ceil(data.main.temp);
				const newMinTemp = Math.ceil(data.main.temp_min);
				const newMaxTemp = Math.ceil(data.main.temp_max);

				setTemp(newTemp);
				setMinTemp(newMinTemp);
				setMaxTemp(newMaxTemp);
			})
			.catch(function (error) {
				console.error(error);
				setErr(true);
			});
	};

	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<div>
				<h2 className="font-raleway text-5xl font-extrabold mb-10 sm:text-4xl">
					Weather App
				</h2>
			</div>
			<div className="flex sm:flex-col">
				<input
					type="text"
					placeholder="City..."
					className="outline-indigo mr-6 rounded-sm pl-4 w-64 font-raleway sm:mr-0 sm:mb-4 sm:py-1"
					onChange={e => setCity(e.target.value)}
				/>
				<button
					onClick={getWeather}
					className="outline-none border-none font-bold font-raleway px-12 py-2 rounded-sm bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white"
				>
					Search
				</button>
			</div>
			{temp && (
				<div className="mt-10 flex flex-col justify-start bg-indigo-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
					<div className="flex mb-4">
						<p className="w-64 sm:w-41">Temperature:</p>
						<p>{temp} ° C</p>
					</div>
					<div className="flex mb-4 sm:w-41">
						<p className="w-64">Temperature Min:</p>
						<p>{minTemp}° C</p>
					</div>
					<div className="flex">
						<p className="w-64 sm:w-41">Temperature Max:</p>
						<p>{maxTemp}° C</p>
					</div>
				</div>
			)}
			{err && (
				<div className="mt-10 bg-red-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
					<p>Couldn't fetch weather results.</p>
				</div>
			)}
		</div>
	);
}
```

If you take a look at the `getWeather` function, you will see I have copy-pasted the code snippet that RapidAPI Hub provided me earlier.

## Wrap Up

This is it. We have successfully built a weather application using the Open Weather Map API. It will look something like this:

[![Weather App built using Open Weather Map API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-weather-app/images/app.png)](https://rapidapi-example-weather-app.vercel.app/)

If you want to take a look at the code, you can find it [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/weather-app). I have also deployed it on Vercel. Here is the live [link](https://rapidapi-example-weather-app.vercel.app/) to it.
