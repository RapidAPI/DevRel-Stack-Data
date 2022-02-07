---
title: How to build a Grammar Check App using GrammarBot API?
description: 'You often have to write essays, articles, reports. Whether you are a student or a professional, it is a good idea to check your pieces via some application. So today, we will build a grammar checker app that will check our content for grammar errors.'
authors:
    - saad
categories:
    - apps
tags:
    - grammar-checker-app
    - rapidapi
    - app
publishedDate: 2022-02-07T08:22:37.323Z
lastModifiedDate: 2022-02-07T08:22:37.323Z
coverImage: ''
---

<Lead>

You often have to write essays, articles, reports. Whether you are a student or a professional, it is a good idea to check your pieces via some application to ensure there is no grammatical error. We can build a small application for this using an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

</Lead>

So in this piece, I am building a grammar checker app that will show us different grammar errors. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to check the grammar. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “grammar api” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to grammar APIs. For this piece, I am using [GrammarBot API](https://RapidAPI.com/grammarbot/api/grammarbot?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to GrammarBot API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9194737c75ae7ee099d20ee7c37ebaec87970f86/guides/posts/build-grammar-checker-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss grammar-checker-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `grammar-checker-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/grammar-checker-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along:

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Grammar <span className="text-danger">Checker</span> App
			</h2>
			<h3 className="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check to see if what you have written is Grammarly correct
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Grammar Checker App” and “Check to see if what you have written is Grammarly correct”. You can change it to anything you prefer.

### → STEP #2

Now let’s create two text areas, one for user content and the other to show the grammar mistakes, and a check button. For this, copy the following code and paste it in `pages/index.js`:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Grammar <span className="text-danger">Checker</span> App
			</h2>
			<h3 className="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check to see if what you have written is Grammarly correct
			</h3>
			<div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="Write/paste any content..."
					autoFocus={true}
				/>
				<div className="flex items-center">
					<button className="h-1/6 outline-none border border-danger font-bold font-raleway mx-12 px-12 rounded-sm bg-danger text-bc transition duration-300 hover:bg-bc hover:text-primary md:h-16 md:my-12">
						Check
					</button>
				</div>
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="See if its correct..."
					readOnly={true}
				/>
			</div>
		</div>
	);
}
```

This code is going to create two text areas and a button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the user content and the response that we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```jsx
import {useState} from 'react';

export default function Home() {
	const [text, settext] = useState('Sam are off to garden.');
	const [res, setRes] = useState('');

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Grammar <span className="text-danger">Checker</span> App
			</h2>
			<h3 className="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check to see if what you have written is Grammarly correct
			</h3>
			<div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="Write/paste any content..."
					autoFocus={true}
					value={text}
					onChange={e => settext(e.target.value)}
				/>
				<div className="flex items-center">
					<button className="h-1/6 outline-none border border-danger font-bold font-raleway mx-12 px-12 rounded-sm bg-danger text-bc transition duration-300 hover:bg-bc hover:text-primary md:h-16 md:my-12">
						Check
					</button>
				</div>
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="See if its correct..."
					readOnly={true}
					value={res}
				/>
			</div>
		</div>
	);
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user writes something. I am also setting the value of a text area to the state variable `res`. It is going to show the grammar error when this state variable will update.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [GrammarBot API](https://RapidAPI.com/grammarbot/api/grammarbot?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9194737c75ae7ee099d20ee7c37ebaec87970f86/guides/posts/build-grammar-checker-app/images/code-snippet.png)

Now create a file with the name `check.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/check
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'POST') {
		const options = {
			method: 'POST',
			url: 'https://grammarbot.p.rapidapi.com/check',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				'x-rapidapi-host': 'grammarbot.p.rapidapi.com',
				'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
			},
			params: {text: req.body.text, language: 'en-US'}
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

This code makes an API call to the [GrammarBot API](https://RapidAPI.com/grammarbot/api/grammarbot?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `check` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [text, settext] = useState('Sam are off to garden.');
	const [res, setRes] = useState('');
	const [btnText, setBtnText] = useState('Check');

	/**
	 *
	 *
	 * Check the text for grammar mistakes
	 */
	const checkGrammar = async () => {
		try {
			setBtnText('Checking...');
			const res = await axios.post('/api/check', {
				text
			});

			setRes(res.data.matches[0].message);
		} catch (err) {
			console.log(err);
		}

		setBtnText('Check');
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Grammar <span className="text-danger">Checker</span> App
			</h2>
			<h3 className="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check to see if what you have written is Grammarly correct
			</h3>
			<div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="Write/paste any content..."
					autoFocus={true}
					value={text}
					onChange={e => settext(e.target.value)}
				/>
				<div className="flex items-center">
					<button
						className="h-1/6 outline-none border border-danger font-bold font-raleway mx-12 px-12 rounded-sm bg-danger text-bc transition duration-300 hover:bg-bc hover:text-primary md:h-16 md:my-12"
						onClick={checkGrammar}
					>
						{btnText}
					</button>
				</div>
				<textarea
					type="text"
					className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
					placeholder="See if its correct..."
					readOnly={true}
					value={res}
				/>
			</div>
			<div className="flex flex-col mt-10 justify-end h-36 md:h-24">
				<p className="block mb-10 text-center text-secondary text-xs">
					Made by RapidAPI DevRel Team -{' '}
					<a
						className="hover:text-primary"
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

You can see that I have created a function, `checkGrammar`, for analyzing the content for grammatical errors. It will fetch the grammar errors from the API and then show it to the user in the right text area.

## Wrap Up

That’s it. We have successfully built a [Grammar Checker App](https://rapidapi-example-grammar-checker-app.vercel.app/) using [GrammarBot API](https://RapidAPI.com/grammarbot/api/grammarbot?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/grammar-checker-app) of this web app.

In the end, it will look something like this:

![Grammar Checker App built with Next.js and GrammarBot API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9194737c75ae7ee099d20ee7c37ebaec87970f86/guides/posts/build-grammar-checker-app/images/cover.png)
