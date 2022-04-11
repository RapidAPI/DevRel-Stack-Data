---
title: How to Build a Title Case App Using Title Case Converter API?
description: Sometimes it becomes confusing which letter to uppercase in a title, and we often end up uppercasing the wrong words. To take care of it, we can use an API from RapidAPI Hub and build a small application using it. So let's do just that in this piece.
lastModifiedDate: 2022-04-11T07:24:44.264Z
authors:
    - saad
categories:
    - apps
tags:
    - title-case-app
    - title-case
    - api
coverImage: ''
---

<Lead>

Sometimes it becomes confusing which letter to uppercase in a title, and we often end up uppercasing the wrong words. To take care of it, we can use an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and build a small application using it.

</Lead>

So today, I will build a title case app that takes a title and then uppercases the appropriate words in this piece. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to convert titles to uppercase. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “title case” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/rest"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the title case APIs. For this piece, I will use [Title Case Converter API](https://RapidAPI.com/Matt11/api/title-case-converter?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Title Case Converter API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/e93f8dcc82495e3ca109ba990e75d4be7130d738/guides/posts/build-title-case-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it somewhere. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss title-case-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `title-case-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/title-case-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Title <span className="text-secondary">Case</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Quickly title case your article titles
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Title Case App” and “Quickly title case your article titles”. You can change it to anything you prefer.

### → STEP #2

Now let’s create a input field to get the title from the user. Also, create a button for converting it to uppercase. For this, copy the following code and paste it into `pages/index.js`:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Title <span className="text-secondary">Case</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Quickly title case your article titles
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						type="text"
						autoFocus={true}
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Title..."
					/>
					<button className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
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
	const [title, setTitle] = useState(
		'text optimization using machine learning'
	);
	const [response, setResponse] = useState('');

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Title <span className="text-secondary">Case</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Quickly title case your article titles
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						type="text"
						value={title}
						onChange={e => setTitle(e.target.value)}
						autoFocus={true}
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Title..."
					/>
					<button className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Title Case Converter API](https://RapidAPI.com/Matt11/api/title-case-converter?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/e93f8dcc82495e3ca109ba990e75d4be7130d738/guides/posts/build-title-case-app/images/code-snippet.png)

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
			url: 'https://title-case-converter.p.rapidapi.com/v1/TitleCase',
			params: {title: req.query.title, style: 'AMA'},
			headers: {
				'X-RapidAPI-Host': 'title-case-converter.p.rapidapi.com',
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

This code makes an API call to the [Title Case Converter API](https://RapidAPI.com/Matt11/api/title-case-converter?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `convert` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import axios from 'axios';
import {useState} from 'react';

export default function Home() {
	const [title, setTitle] = useState(
		'text optimization using machine learning'
	);
	const [response, setResponse] = useState('');
	const [btnText, setBtnText] = useState('Convert');

	/**
	 *
	 *
	 * Converts the title to title case
	 */
	const uppercaseTitle = async e => {
		e.preventDefault();
		setBtnText('Converting...');
		try {
			const res = await axios.get(`/api/convert`, {
				params: {title}
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
				Title <span className="text-secondary">Case</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Quickly title case your article titles
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						type="text"
						value={title}
						onChange={e => setTitle(e.target.value)}
						autoFocus={true}
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Title..."
					/>
					<button
						className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
						onClick={e => uppercaseTitle(e)}
					>
						{btnText}
					</button>
				</form>
				{response && (
					<div className="flex flex-col mt-20 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
						<p className="mb-12 border border-secondary text-center text-primary font-raleway px-4 py-8 tracking-wide leading-8">
							{response.result}
						</p>
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

You can see that I have created a function, `uppercaseTitle`, to request the API. I have also created a piece of UI that is conditionally rendering on the screen based on the `response` state variable value.

When the user clicks the convert button, it will fire the function. Inside the function, an API call will take place that brings along an object which will then be saved in the `response` state variable.

## Wrap Up

That’s it. We have successfully built a [Title Case App](https://rapidapi-example-title-case-app.vercel.app/) using [Title Case Converter API](https://RapidAPI.com/Matt11/api/title-case-converter?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/title-case-app) of this web app.

In the end, it will look something like this:

![Title Case App built with Next.js and Title Case Converter API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/e93f8dcc82495e3ca109ba990e75d4be7130d738/guides/posts/build-title-case-app/images/cover.png)
