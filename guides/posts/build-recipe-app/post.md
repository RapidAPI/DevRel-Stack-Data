---
title: How to build a Food Recipe App using Next.js and Spoonacular API?
description: Today, we will build a Food Recipe app using Spoonacular API from RapidAPI Hub.
publishedDate: 2022-01-06T19:10:30.765Z
lastModifiedDate: 2022-01-06T19:10:30.765Z
authors:
    - ahmadBilal
categories:
    - apps
tags:
    - rapidapi
    - recipe
    - spoonacular
    - app
coverImage: ''
---

<Lead>

Today, public APIs provide a fast and convenient way to develop an application. Whether you're building a small tool-based application or a big eCommerce portal, these APIs can be very serviceable.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs which over 3 million developers are using. You can explore thousands of them on RapidAPI Hub and select the best one for your next project.

Today, we will be building a web application that will allow users to search for food recipes quickly and conveniently. We have APIs that provide recipes from all over the world, so let's build the app using one of them.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Food Recipe" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub as a developer.
</Callout>

You will see that we have a lot of APIs to choose from. For our app, I will use the [Spoonacular API](https://rapidapi.com/spoonacular/api/recipe-food-nutrition/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), which is the most popular food API.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to Spoonacular API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-recipe-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss recipe-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `recipe-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/recipe-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors and fonts I will be using.

Our initial UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-recipe-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl font-bold text-active mt-20">
				Recipe Search
			</h1>
			<h2 className="text-primary text-2xl font-light mt-5">
				Search recipes from all over the world.
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
				<title>RapidAPI - Recipe App</title>
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

As you can see in the UI preview, we require an input form to submit the recipe query/keyword such as "cheeseburger". We also need two more input fields for diet type and excluded ingredients. A search button will follow the inputs. Let's add all these.

```jsx
export default function Home() {

  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl font-bold text-active mt-20">Recipe Search</h1>
      <h2 className="text-primary text-2xl font-light mt-5">
        Search recipes from all over the world.
      </h2>
      <form
        className="sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter a recipe"
        />
        <div className="mt-5 flex sm:flex-row flex-col justify-start">
          <div className="sm:w-1/3 w-full">
            <label className="block text-primary text-sm">Diet</label>
            <select
              className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
            >
              {[
                "none",
                "pescetarian",
                "lacto vegetarian",
                "ovo vegetarian",
                "vegan",
                "vegetarian",
              ].map((diet) => {
                return <option value={diet}>{diet}</option>;
              })}
            </select>
          </div>
          <div className="sm:ml-10 sm:w-1/3 w-full">
            <label className="block text-primary text-sm">
              Exclude Ingredients
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
              placeholder="cocunut"
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
```

This code will create the input fields and search button. I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>).

Now, we need to store the user input in the input field. We can do it using React `useState` hook. We will use a bunch of states for our app, let's add them. Check the comments to see the purpose of each state.

```jsx
import { useState } from "react";

export default function Home() {

  const [keyword, setKeyword] = useState(null); // Stores the input recipe name
  const [diet, setDiet] = useState(null); // Stores the diet type`
  const [exclude, setExclude] = useState(null); // Stores the excluded ingredients
  const [response, setResponse] = useState(null); // Stores the response from the API

  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl font-bold text-active mt-20">Recipe Search</h1>
      <h2 className="text-primary text-2xl font-light mt-5">
        Search recipes from all over the world.
      </h2>
      <form
        className="sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter a recipe"
          onChange={(e) => {
            setKeyword(e.target.value);
            setResponse(null); // Removes previous response when user types a new recipe
          }}
        />
        <div className="mt-5 flex sm:flex-row flex-col justify-start">
          <div className="sm:w-1/3 w-full">
            <label className="block text-primary text-sm">Diet</label>
            <select
              className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
              onChange={(e) => setDiet(e.target.value)}
            >
              {[
                "none",
                "pescetarian",
                "lacto vegetarian",
                "ovo vegetarian",
                "vegan",
                "vegetarian",
              ].map((diet) => {
                return <option value={diet}>{diet}</option>;
              })}
            </select>
          </div>
          <div className="sm:ml-10 sm:w-1/3 w-full">
            <label className="block text-primary text-sm">
              Exclude Ingredients
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
              placeholder="cocunut"
              onChange={(e) => setExclude(e.target.value)}
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
```

We use the `onChange` handlers on the input fields to store their values(`e.target.value`) in our states.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [Spoonacular API](https://rapidapi.com/spoonacular/api/recipe-food-nutrition/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API provides a vast number of usable endpoints which you can use in your app. The endpoints are divided into Compute, Extract, Search, Data, and Chat categories, and there are over 25 endpoints in the Search category alone. You can see these endpoints on the left pane in the image below. We will use the `Search Recipes` endpoint, which allows us to look up recipes using natural language.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-recipe-app/images/code-snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We are going to copy the `(JavaScript) Axios` ones, as you can see above.

Let's set up the API call now. In the `pages/api` directory, create a file named `search.js` and use the code snippet as follows:

```jsx
// In pages/api/search.js:
import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
		params: {
			query: req.query.keyword,
			diet: req.query.diet,
			excludeIngredients: req.query.exclude,
			number: '20',
			offset: '0'
		},
		headers: {
			'x-rapidapi-host':
				'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
			'x-rapidapi-key': NEXT_PUBLIC_RAPIDAPI_KEY
		}
	};

	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error.response);
	}
}
```

We have specified the parameters `req.query.keyword`, `req.query.diet` and `req.query.exclude`. `req.query` is an object in Next.js that holds the input parameters coming from our client-side.

### → STEP #4

Now we need to create a function `getRecipes` in the `pages/index.js` file to send a request to our API at `http://localhost:3000/api/search`.

The search button will trigger this function, which will make a GET request to our API. Let's make these changes to the index file.

```jsx
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [keyword, setKeyword] = useState(null);
	const [diet, setDiet] = useState(null);
	const [exclude, setExclude] = useState(null);
	const [response, setResponse] = useState(null);

	// Gets the recipes matching the input term
	const getRecipes = async () => {
		try {
			diet === 'none' ? (diet = '') : null; // Remove diet if 'none' is selected
			setLoading(true);
			const res = await axios.get('api/search/', {
				params: {keyword, diet, exclude} // Sending parameters to our API
			});
			const {data} = res; // Object destructuring to extract data from our response
			setResponse(data.results); // Store results in the response state
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl font-bold text-active mt-20">
				Recipe Search
			</h1>
			<h2 className="text-primary text-2xl font-light mt-5">
				Search recipes from all over the world.
			</h2>
			<form
				className="sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					getRecipes(); // Trigger getRecipes function when search button is clicked
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a recipe"
					onChange={e => {
						setKeyword(e.target.value);
						setResponse(null);
					}}
				/>
				<div className="mt-5 flex sm:flex-row flex-col justify-start">
					<div className="sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Diet
						</label>
						<select
							className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							onChange={e => setDiet(e.target.value)}
						>
							{[
								'none',
								'pescetarian',
								'lacto vegetarian',
								'ovo vegetarian',
								'vegan',
								'vegetarian'
							].map(diet => {
								return <option value={diet}>{diet}</option>;
							})}
						</select>
					</div>
					<div className="sm:ml-10 sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Exclude Ingredients
						</label>
						<input
							type="text"
							className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							placeholder="cocunut"
							onChange={e => setExclude(e.target.value)}
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

Thanks to the `onSubmit` handler of the form, `getRecipes` function will be triggered when the search button is clicked or by pressing the enter key in any input.

### → FINAL STEP

Finally, it is time to display the recipes returned by the API. You can use the **Test Endpoint** button to check the response. It will look like this:

```json
{
	"results": [
		{
			"id": 492560,
			"title": "Quick and Easy St. Louis-Style Pizza",
			"readyInMinutes": 27,
			"servings": 8,
			"sourceUrl": "https://www.cinnamonspiceandeverythingnice.com/st-louis-style-pizza/",
			"openLicense": 0,
			"image": "St--Louis-Style-Pizza-492560.jpg"
		},
		{
			"id": 587203,
			"title": "Taco Pizza",
			"readyInMinutes": 20,
			"servings": 6,
			"sourceUrl": "https://laurenslatest.com/taco-salad-pizza-with-doritos/",
			"openLicense": 0,
			"image": "Taco-Salad-Pizza-with-Doritos-587203.jpg"
		},
		{
			"id": 481601,
			"title": "Neapolitan Pizza and Honey Whole Wheat Dough",
			"readyInMinutes": 102,
			"servings": 8,
			"sourceUrl": "https://lifemadesimplebakes.com/2014/02/neapolitan-pizza-and-honey-whole-wheat-dough/",
			"openLicense": 0,
			"image": "Neapolitan-Pizza-and-Honey-Whole-Wheat-Dough-481601.jpg"
		}
	],
	"baseUri": "https://spoonacular.com/recipeImages/",
	"offset": 0,
	"number": 3,
	"totalResults": 257
}
```

We will use a map function to iterate through `results`, which is an array of objects carrying recipe details. I will be displaying the title, image, servings, time to get ready, and URL of every recipe. For the design, I used a grid to organize the details. Our final code looks like this:

```jsx
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [keyword, setKeyword] = useState(null);
	const [diet, setDiet] = useState(null);
	const [exclude, setExclude] = useState(null);
	const [response, setResponse] = useState(null);

	const getRecipes = async () => {
		try {
			diet === 'none' ? (diet = '') : null;
			setLoading(true);
			const res = await axios.get('api/search/', {
				params: {keyword, diet, exclude}
			});
			const {data} = res;
			setResponse(data.results);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl font-bold text-active mt-20">
				Recipe Search
			</h1>
			<h2 className="text-primary text-2xl font-light mt-5">
				Search recipes from all over the world.
			</h2>
			<form
				className="sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					getRecipes();
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a recipe"
					onChange={e => {
						setKeyword(e.target.value);
						setResponse(null);
					}}
				/>
				<div className="mt-5 flex sm:flex-row flex-col justify-start">
					<div className="sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Diet
						</label>
						<select
							className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							onChange={e => setDiet(e.target.value)}
						>
							{[
								'none',
								'pescetarian',
								'lacto vegetarian',
								'ovo vegetarian',
								'vegan',
								'vegetarian'
							].map(diet => {
								return <option value={diet}>{diet}</option>;
							})}
						</select>
					</div>
					<div className="sm:ml-10 sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Exclude Ingredients
						</label>
						<input
							type="text"
							className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							placeholder="cocunut"
							onChange={e => setExclude(e.target.value)}
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
			{response && ( // Render only if response is not null
				<div className="mt-10">
					<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{response.map(recipe => (
							<div key={recipe.id} className="pt-6">
								<div className="flow-root bg-light rounded-lg px-4 pb-8">
									<div className="-mt-6">
										<div className="flex items-center justify-center">
											<span className="p-2">
												<img
													src={
														`https://spoonacular.com/recipeImages/` +
														recipe.image
													}
													className="w-full h-full rounded-lg"
													alt={recipe.id}
												/>
											</span>
										</div>
										<div className="text-center justify-center items-center">
											<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
												{recipe.title}
											</h3>
											<span className="mt-2 text-sm text-secondary block">
												Ready in {recipe.readyInMinutes}{' '}
												minutes - {recipe.servings}{' '}
												Servings
											</span>
											<a
												className="mt-4 text-sm text-active block"
												href={recipe.sourceUrl}
											>
												Go to Recipe
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

This is what our app looks like in its final form:

![Recipe App built using Spoonacular API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-recipe-app/images/final-app.png)

## Wrap Up

All done. You can also check the deployed [Recipe App](https://rapidapi-example-recipe-app.vercel.app/) and find its code in the [RapidAPI Examples Repository](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/recipe-app) on GitHub.
