---
title: How to build a Random Facts App using Random Facts API?
description: In this piece, I am going to show you how you can build a small random facts application in this piece using an API from RapidAPI Hub and Next.js.
authors:
    - saad
categories:
    - apps
tags:
    - random-facts-app
    - app
publishedDate: 2022-01-10T10:25:51.945Z
lastModifiedDate: 2022-01-10T10:25:51.945Z
coverImage: ''
---

<Lead>

There are so many absurd things and facts that exist in this world. To give them more visibility, we can build a small web application to display them.

</Lead>

So today, I am building a random facts app that will display different facts to the user. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to find the facts. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “facts apis” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to facts APIs. For this piece, I am using [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Random Facts API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9a5df4ccbcbedabedd630cb84c1e7b9a91b9e213/guides/posts/build-random-facts-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss random-facts-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `random-facts-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/random-facts-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Random <span className="text-active">Facts</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Take A Look At Some Random Interesting Facts
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Random Facts App” and “Take A Look At Some Random Interesting Facts”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an area where the fact will be displayed on the screen. Also, we need to create a button to fetch the next fact.

For this, copy the following code and paste it in `pages/index.js`:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Random <span className="text-active">Facts</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Take A Look At Some Random Interesting Facts
			</h3>
			<div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
				<div className="border border-secondary text-secondary font-raleway mb-12 ">
					<p className="px-4 py-4 tracking-wide leading-8"></p>
				</div>
				<button className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4">
					New Fact
				</button>
			</div>
		</div>
	);
}
```

I am using [TailwindCSS](https://tailwindcss.com/) to add CSS to all these HTML elements.

### → STEP #3

Let’s create a state variable to store the fact to display on the screen. For this, copy-paste the following code in `pages/index.js`.

```jsx
import {useState} from 'react';

export default function Home() {
	const [fact, setFact] = useState();
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Random <span className="text-active">Facts</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Take A Look At Some Random Interesting Facts
			</h3>
			<div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
				<div className="border border-secondary text-secondary font-raleway mb-12 ">
					<p className="px-4 py-4 tracking-wide leading-8">{fact}</p>
				</div>
				<button className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4">
					New Fact
				</button>
			</div>
		</div>
	);
}
```

You can see in the above code snippet that now I am displaying the fact from the `fact` state in the paragraph tag.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Random Facts API](https://rapidapi.com/APILAB/api/random-facts2?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9a5df4ccbcbedabedd630cb84c1e7b9a91b9e213/guides/posts/build-random-facts-app/images/code-snippet.png)

Now create a file with `fact.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/fact
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://random-facts2.p.rapidapi.com/getfact',
			headers: {
				'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
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

This code makes an API call to the [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `fact` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import {useState} from 'react';
import axios from 'axios';

export default function Home({data}) {
	const [fact, setFact] = useState(data.Fact);

	/**
	 *
	 *
	 * get random facts
	 */
	const getFact = async () => {
		try {
			const res = await axios.get(`/api/fact`);
			setFact(res.data.Fact);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Random <span className="text-active">Facts</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Take A Look At Some Random Interesting Facts
			</h3>
			<div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
				<div className="border border-secondary text-secondary font-raleway mb-12 ">
					<p className="px-4 py-4 tracking-wide leading-8">{fact}</p>
				</div>
				<button
					className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4"
					onClick={getFact}
				>
					New Fact
				</button>
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
	const res = await axios.get('http://localhost:3000/api/fact');
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

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It will make my application server-side, and the user will never see a loading state. You can also use getStaticProps instead of getServerSideProps, and the application will then fetch the data at build time.

I have also created a functions, i.e., `getFact` and set it to execute when the user click on the Next Fact button. It makes an API call to get the new fact.

## Wrap Up

That’s it. We have successfully built a [Random Facts App](https://rapidapi-example-quote-app.vercel.app/) using [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/random-facts-app).

In the end, it will look something like this:

![Random Facts App built with Next.js and Random Facts API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9a5df4ccbcbedabedd630cb84c1e7b9a91b9e213/guides/posts/build-random-facts-app/images/cover.png)
