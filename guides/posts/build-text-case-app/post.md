---
title: How to build a Text Case App using ConvertText API?
description:
    If you are a programmer, you would know how many letter cases exist that you
    can use to declare your variables. There is the camel case, pascal case, kebab
    case, etc. In this piece, let’s build an application to convert text into
    different cases.
publishedDate: 2022-04-15T09:43:55.663Z
lastModifiedDate: 2022-04-15T09:43:55.663Z
authors:
    - saad
categories:
    - apps
tags:
    - rapidapi
    - text-case-app
coverImage: ''
---

<Lead>

If you are a programmer, you would know how many letter cases exist that you can use to declare your variables. There is the camel case, pascal case, kebab case, etc. You can convert whole pieces of text into these letter cases. So let’s do just that.

</Lead>

So today, I will build a text case app that takes a piece of text and then converts it into different cases. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to convert text to different letter cases. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “text case” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://RapidAPI.com/learn/rest"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the text cases APIs. For this piece, I will use [ConvertText API](https://RapidAPI.com/reblim/api/converttext/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to ConvertText API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/428663c2f3236c858dfff56bd4ef653a5d291a1f/guides/posts/build-text-case-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it somewhere. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss text-case-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `text-case-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/text-case-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Text <span className="text-secondary">Case</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Easily convert text between different letter cases
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Text Case App” and “Easily convert text between different letter cases”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field to get the text from the user and a dropdown to list all the available letter cases. I will also create a button for converting text to the selected letter case. For this, copy the following code and paste it into `pages/index.js`:

```jsx
export default function Home() {
	const cases = [
		{case: 'upper', label: 'Uppercase'},
		{case: 'lower', label: 'Lowercase'},
		{case: 'capital', label: 'Capital case'},
		{case: 'sentence', label: 'Sentence case'},
		{case: 'snake', label: 'Snake case'},
		{case: 'kebab', label: 'Kebab case'},
		{case: 'pascal', label: 'Pascal case'},
		{case: 'camel', label: 'Camel case'},
		{case: 'random', label: 'Random case'},
		{case: 'dot', label: 'Dot case'},
		{case: 'header', label: 'Header case'},
		{case: 'constant', label: 'Constant case'}
	];

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Text <span className="text-secondary">Case</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Easily convert text between different letter cases
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-4/5 justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter some text..."
					/>
					<select
						name="countries"
						className="border-none outline-none w-1/6 bg-primary ml-4 px-4 py-2 rounded-sm font-raleway md:w-full md:ml-0 md:mt-4"
					>
						{cases.map(caseItem => (
							<option
								value={caseItem.case}
								key={cases.indexOf(caseItem)}
							>
								{caseItem.label}
							</option>
						))}
					</select>
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4">
						Convert
					</button>
				</form>
			</div>
		</div>
	);
}
```

This code is going to create an input field and a button. I have also styled them a little bit using [TailwindCSS]((https://tailwindcss.com/).

### → STEP #3

Let’s create some states to store the title and the response that we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```jsx
import {useState} from 'react';

export default function Home() {
	const [string, setString] = useState(
		"RapidAPI Hub is world's largest API Hub."
	);
	const [selectedCase, setSelectedCase] = useState('upper');
	const [response, setResponse] = useState(null);

	const cases = [
		{case: 'upper', label: 'Uppercase'},
		{case: 'lower', label: 'Lowercase'},
		{case: 'capital', label: 'Capital case'},
		{case: 'sentence', label: 'Sentence case'},
		{case: 'snake', label: 'Snake case'},
		{case: 'kebab', label: 'Kebab case'},
		{case: 'pascal', label: 'Pascal case'},
		{case: 'camel', label: 'Camel case'},
		{case: 'random', label: 'Random case'},
		{case: 'dot', label: 'Dot case'},
		{case: 'header', label: 'Header case'},
		{case: 'constant', label: 'Constant case'}
	];

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Text <span className="text-secondary">Case</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Easily convert text between different letter cases
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-4/5 justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter some text..."
						value={string}
						onChange={e => setString(e.target.value)}
					/>
					<select
						name="countries"
						className="border-none outline-none w-1/6 bg-primary ml-4 px-4 py-2 rounded-sm font-raleway md:w-full md:ml-0 md:mt-4"
						onChange={e => setSelectedCase(e.target.value)}
					>
						{cases.map(caseItem => (
							<option
								value={caseItem.case}
								key={cases.indexOf(caseItem)}
							>
								{caseItem.label}
							</option>
						))}
					</select>
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4">
						Convert
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [ConvertText API](https://RapidAPI.com/reblim/api/converttext/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/428663c2f3236c858dfff56bd4ef653a5d291a1f/guides/posts/build-text-case-app/images/code-snippet.png)

Now create a file with the name `convert.js` inside the `pages/api` directory. It is going to make a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/convert
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: `https://converttext.p.rapidapi.com/${req.query.string}`,
			params: {type: `${req.query.case}`},
			headers: {
				'X-RapidAPI-Host': 'converttext.p.rapidapi.com',
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

This code makes an API call to the [ConvertText API](https://RapidAPI.com/reblim/api/converttext/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `convert` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [string, setString] = useState(
		"RapidAPI Hub is world's largest API Hub."
	);
	const [selectedCase, setSelectedCase] = useState('upper');
	const [btnText, setBtnText] = useState('Convert');
	const [response, setResponse] = useState(null);

	const cases = [
		{case: 'upper', label: 'Uppercase'},
		{case: 'lower', label: 'Lowercase'},
		{case: 'capital', label: 'Capital case'},
		{case: 'sentence', label: 'Sentence case'},
		{case: 'snake', label: 'Snake case'},
		{case: 'kebab', label: 'Kebab case'},
		{case: 'pascal', label: 'Pascal case'},
		{case: 'camel', label: 'Camel case'},
		{case: 'random', label: 'Random case'},
		{case: 'dot', label: 'Dot case'},
		{case: 'header', label: 'Header case'},
		{case: 'constant', label: 'Constant case'}
	];

	/**
	 *
	 *
	 * Converts the string to the selected case
	 */
	const convertString = async e => {
		e.preventDefault();
		setBtnText('Converting...');
		try {
			const res = await axios.get(`/api/convert`, {
				params: {
					string,
					case: selectedCase
				}
			});

			setResponse(res.data);
		} catch (err) {
			console.log(err);
		}
		setBtnText('Convert');
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Text <span className="text-secondary">Case</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Easily convert text between different letter cases
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-4/5 justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter some text..."
						value={string}
						onChange={e => setString(e.target.value)}
					/>
					<select
						name="countries"
						className="border-none outline-none w-1/6 bg-primary ml-4 px-4 py-2 rounded-sm font-raleway md:w-full md:ml-0 md:mt-4"
						onChange={e => setSelectedCase(e.target.value)}
					>
						{cases.map(caseItem => (
							<option
								value={caseItem.case}
								key={cases.indexOf(caseItem)}
							>
								{caseItem.label}
							</option>
						))}
					</select>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
						onClick={convertString}
					>
						{btnText}
					</button>
				</form>
				{response && (
					<p className=" mt-12 w-3/6 border border-secondary text-primary text-center font-raleway px-4 py-8 tracking-wide leading-8">
						{response.convertedText}
					</p>
				)}
			</div>
			<div className="absolute bottom-0 mt-8 flex justify-center items-end h-36 md:h-44">
				<p className="text-primary pb-12 md:w-60 md:text-center">
					Made by RapidAPI DevRel Team -{' '}
					<a href="https://github.com/RapidAPI/DevRel-Examples-External">
						<span className="transition duration-300 hover:text-secondary">
							See Examples Like this
						</span>
					</a>
				</p>
			</div>
		</div>
	);
}
```

You can see that I have created a function, `convertString`, to request the API. I have also created a piece of UI that is conditionally rendering on the screen based on the `response` state variable value.

When the user clicks the convert button, it will fire the function. Inside the function, an API call will take place that brings along an object which will then be saved in the `response` state variable.

## Wrap Up

That’s it. We have successfully built a [Text Case App](https://rapidapi-example-text-case-app.vercel.app/) using [ConvertText API](https://RapidAPI.com/reblim/api/converttext/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/text-case-app) of this web app.

In the end, it will look something like this:

![Text Case App built with Next.js and ConvertText API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/428663c2f3236c858dfff56bd4ef653a5d291a1f/guides/posts/build-text-case-app/images/cover.png)
