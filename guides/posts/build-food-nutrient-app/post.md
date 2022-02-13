---
title: How to build a Food Nutrient App using Calorie Ninja API?
description: You often need to find out what kind of nutrients a particular food contains. In this piece, we are building a small web app just for this using an API from RapidAPI Hub.
publishedDate: 2022-01-17T04:02:09.132Z
lastModifiedDate: 2022-01-17T04:02:09.132Z
authors:
    - saad
categories:
    - apps
tags:
    - rapidapi
    - nutrient-app
    - food-nutrient
coverImage: ''
---

<Lead>

You often need to find out what kind of nutrients a particular food contains. There any many calculators available on the internet. But you can build your own using an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

</Lead>

Today, I am building a food nutrient app that will show the user quantity of different nutrients present in a food. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to search for food nutrients. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “food nutrients” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to food APIs. For this piece, I am using [CalorieNinja API](https://rapidapi.com/calorieninjas/api/calorieninjas?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

It is a free API, so you do not need to subscribe to it. However, you will need your RapidAPI key. Go ahead and save the `x-rapidapi-key` so you can use it later.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss food-nutrient-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `food-nutrient-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

### Project Files

When you open the project in your code editor, you will see the following directories and files in the root directory:

-   `pages` directory: Inside it, you will have files `index.js`, `_app.js`, and another directory called - `api`. You only need to know about the `index.js` file that is the main entry point in your project.
-   `public` directory: This directory contains icons. You place your static files here to load later in the application.
-   `node_modules`: It’s another directory that contains all the node modules you are using in your application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/food-nutrient-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Food <span className="text-secondary">Nutrient</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Shows Different Nutrient Quantity in A Food
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Food Nutrient App” and “Shows Different Nutrient Quantity in A Food”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and a search button. The user will be able to type the food name in the input box and use the search button to get the nutrient details.

For this, copy the following code and paste it in `pages/index.js`:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Food <span className="text-secondary">Nutrient</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Shows Different Nutrient Quantity in A Food
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter the name of any food..."
					/>
					<button className="outline-none border border-secondary text-bc font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the food name and the nutrient details that we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```jsx
import {useState} from 'react';

export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Food <span className="text-secondary">Nutrient</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Shows Different Nutrient Quantity in A Food
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter the name of any food..."
						onChange={e => setName(e.target.value)}
					/>
					<button className="outline-none border border-secondary text-bc font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user types something in the input box.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [CalorieNinja API](https://rapidapi.com/calorieninjas/api/calorieninjas?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/543850dc152729797a102841c58e4bce9278f26c/guides/posts/build-food-nutrient-app/images/code-snippet.png)

Now create a file with the name `nutrient.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/nutrient
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
			params: {query: req.query.name},
			headers: {
				'x-rapidapi-host': 'calorieninjas.p.rapidapi.com',
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

This code makes an API call to the [CalorieNinja API](https://rapidapi.com/calorieninjas/api/calorieninjas?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `nutrient` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [name, setName] = useState('');
	const [res, setRes] = useState(null);

	/**
	 *
	 *
	 * Fetch nutrient information of a given food
	 */
	const fetchNutrients = async e => {
		e.preventDefault();
		try {
			const res = await axios.get(`/api/nutrient`, {
				params: {
					name
				}
			});
			setRes(res.data.items[0]);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Food <span className="text-secondary">Nutrient</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Shows Different Nutrient Quantity in A Food
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter the name of any food..."
						onChange={e => setName(e.target.value)}
					/>
					<button
						className="outline-none border border-secondary text-bc font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
						onClick={fetchNutrients}
					>
						Search
					</button>
				</form>
				{res && (
					<div className="flex flex-col text-primary text-sm text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
						<table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
							<thead className="font-raleway uppercase tracking-wide text-secondary">
								<tr>
									<th className="border border-x-0 text-left px-4 py-4">
										Nutrient
									</th>
									<th className="border border-x-0 text-left px-4 py-4">
										Quantity
									</th>
								</tr>
							</thead>
							<tbody className="text-primary">
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Calories
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.calories}
									</th>
								</tr>
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Carbohydrates
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.carbohydrates_total_g} g
									</th>
								</tr>
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Cholesterol
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.cholesterol_mg} mg
									</th>
								</tr>
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Fat Saturated
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.fat_saturated_g} g
									</th>
								</tr>
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Total Fat
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.fat_total_g} g
									</th>
								</tr>
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Fiber
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.fiber_g} g
									</th>
								</tr>
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Potassium
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.potassium_mg} mg
									</th>
								</tr>
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Protein
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.protein_g} g
									</th>
								</tr>
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Serving Size
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.serving_size_g} g
									</th>
								</tr>
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Sodium
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.sodium_mg} mg
									</th>
								</tr>
								<tr>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										Sugar
									</th>
									<th className="border border-x-0 border-secondary text-left px-4 py-4">
										{res.sugar_g} g
									</th>
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

You can see that I have created a function, `​​fetchNutrients`, to request the API. I have also created a piece of UI that is conditionally rendering on the screen based on the `res` state variable’ value.

## Wrap Up

That’s it. We have successfully built an [Food Nutrient App](https://rapidapi-example-food-nutrient-app.vercel.app/) using [CalorieNinjas API](https://RapidAPI.com/calorieninjas/api/calorieninjas?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/food-nutrient-app).

In the end, it will look something like this:

![Food Nutrient App built with Next.js and CalorieNinjas API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/543850dc152729797a102841c58e4bce9278f26c/guides/posts/build-food-nutrient-app/images/cover.png)
