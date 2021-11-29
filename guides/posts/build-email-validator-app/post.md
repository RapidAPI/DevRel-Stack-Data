---
title: How to build an Email Validator App Using Next.js and Email Validator API?
description: "Let's take a look at how you can build an email validator application."
publishedDate: 2021-11-12T20:22:52.607Z
lastModifiedDate: 2021-11-12T20:22:52.607Z
authors:
    - saad
categories:
		- apps
tags:
    - email-validator-app
coverImage: ''
---

You often receive spam emails that sometimes contain harmful content or links. We usually ignore these kinds of emails, but it can also happen that a few critical emails may end up in spam. And having these emails in spam makes us doubt their validity. You can build an application around this use case using an API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides you with thousands of these public APIs that you can use in your apps. Many APIs on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) have free versions available, but you can also buy a premium version if the free version does not satisfy your need.

Today, I am building an email validator application that will take an email and provide us with different information about its validity. So without any further ado, let’s jump in.

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to fetch the email validity information. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?tm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “email validity” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available APIs that provide this service. For this piece, I am using [E-mail Check Invalid or Disposable Domain API](https://rapidapi.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to IMDb API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/0f687aead197486a85c58dbdbc66ce0c3e0ee2ca/guides/posts/build-email-validator-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss email-validator-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `email-validator-app` has been created. Open this folder in your preferred code editor. I am going to use [VSCode](https://code.visualstudio.com/) for the project.

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

Before we move on to writing the code, open [this](​​https://github.com/RapidAPI/DevRel-Examples-External/blob/main/email-validator-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Email <span className="text-secondary">Validator</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check if an email address exists or not
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Email Validator App” and “Check if an email address exists or not”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and a validate button. The user will be able to type in the input field and use the validate button to check the email validity.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Email <span className="text-secondary">Validator</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check if an email address exists or not
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form
					className="flex w-full justify-center md:flex-col md:w-5/6"
					onSubmit={e => checkValidity(e)}
				>
					<input
						autoFocus={true}
						type="email"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter the email address..."
						onChange={e => setEmail(e.target.value)}
					/>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
						onClick={checkValidity}
					>
						Validate
					</button>
				</form>
			</div>
		</div>
	);
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the user input and the response we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';

export default function Home() {
	const [email, setEmail] = useState('');
	const [res, setRes] = useState(false);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Email <span className="text-secondary">Validator</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check if an email address exists or not
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form
					className="flex w-full justify-center md:flex-col md:w-5/6"
					onSubmit={e => checkValidity(e)}
				>
					<input
						autoFocus={true}
						type="email"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter the email address..."
						onChange={e => setEmail(e.target.value)}
					/>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
						onClick={checkValidity}
					>
						Validate
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

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [E-mail Check Invalid or Disposable Domain API](https:/RapidAPI.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We will use the `mailcheck` endpoint of the [E-mail Check Invalid or Disposable Domain API](https://RapidAPI.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to get the API response.

I am also going to use the code snippet of `(JavaScript) Axios` that [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides us.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/0f687aead197486a85c58dbdbc66ce0c3e0ee2ca/guides/posts/build-email-validator-app/images/code-snippet.png)

Create a file called `validate` in the `pages/api` directory and copy-paste the following code there:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://mailcheck.p.rapidapi.com/',
			params: {domain: req.query.email},
			headers: {
				'x-rapidapi-host': 'mailcheck.p.rapidapi.com',
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

Now let’s create a function in the `pages/index.js` file to request the `/api/validate` for the email validity information. You can just copy and replace the following code in `pages/index.js` file:

```js
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [email, setEmail] = useState('');
	const [res, setRes] = useState(false);

	/**
	 *
	 *
	 * Checks validity of en email
	 */
	const checkValidity = async e => {
		e.preventDefault();
		try {
			const res = await axios.get(`/api/validate`, {
				params: {email}
			});
			const {data} = res;
			setRes(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Email <span className="text-secondary">Validator</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check if an email address exists or not
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form
					className="flex w-full justify-center md:flex-col md:w-5/6"
					onSubmit={e => checkValidity(e)}
				>
					<input
						autoFocus={true}
						type="email"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter the email address..."
						onChange={e => setEmail(e.target.value)}
					/>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
						onClick={checkValidity}
					>
						Validate
					</button>
				</form>
				{res && (
					<div className="flex flex-col text-primary text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
						<table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
							<thead className="font-raleway uppercase tracking-wide">
								<tr>
									<th className="border text-left px-4 py-4">
										<span className="text-secondary">
											Information
										</span>
									</th>
									<th className="border text-left px-4 py-4">
										<span className="text-secondary">
											Result
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border px-4 py-4">Valid</td>
									<td className="border px-4 py-4 capitalize">
										{res.valid.toString()}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">
										Disposable
									</td>
									<td className="border px-4 py-4 capitalize">
										{res.disposable.toString()}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">Domain</td>
									<td className="border px-4 py-4">
										{res.domain}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">Text</td>
									<td className="border px-4 py-4">
										{res.text}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">Reason</td>
									<td className="border px-4 py-4">
										{res.reason}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
}
```

You can see that I have created a function, `checkValidity`, to get the API response. I have also created a table that is conditionally rendered on the screen based on the API results.

## Wrap Up

That’s it. We have successfully built a [Email Validator App](https://rapidapi-example-email-validator-app.vercel.app/) using [E-mail Check Invalid or Disposable Domain API](https://RapidAPIcom/Top-Rated/api/e-mail-check-invalid-or-disposable-domain?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/email-validator-app) of this web app.

In the end, it will look something like this:

![Email Validator App built with Next.js and E-mail Check Invalid or Disposable Domain API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/0f687aead197486a85c58dbdbc66ce0c3e0ee2ca/guides/posts/build-email-validator-app/images/cover.png)
