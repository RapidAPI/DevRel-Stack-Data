---
title: How to build a Phone Number Validation App using Phone Validate API?
description: In this piece, I am going to show you how you can build a small phone number validation app using an API from RapidAPI Hub and Next.js.
authors:
    - saad
categories:
    - apps
tags:
    - validation
    - api
    - phone-number
publishedDate: 2021-12-13T14:43:14.809Z
lastModifiedDate: 2021-12-13T14:43:14.809Z
coverImage: ''
---

<Lead>

Sometimes you get a phone number that you are unsure if it is correct. Although many services can validate your number, almost all of them are paid. If you are a developer like me, we can create our application for this.

</Lead>

Today, I am building a phone number validation application to validate any phone number for you. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to search for public holidays. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “phone number validation” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to validation APIs. For this piece, I am using [Phone Validate API](https://rapidapi.com/neutrinoapi/api/phone-validate/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

It is a free API, so you do not need to subscribe to it. However, you will need your RapidAPI key. Go ahead and save the `x-rapidapi-key` so you can use it later.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss phone-number-validate-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `phone-number-validate-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/phone-number-validate-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-5xl text-primary pt-20 pb-6 md:text-3xl">
				Phone Number <span className="text-secondary">Validation</span>{' '}
				App
			</h2>
			<h3 className="text-active text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check if a Phone Number is valid or not
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Phone Number Validation App” and “Check if a Phone Number is valid or not”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and a validate button. The user will be able to type the phone number in the input box and use the validate button to get the validation details.

For this, copy the following code and paste it in `pages/index.js`:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-5xl text-primary pt-20 pb-6 md:text-3xl">
				Phone Number <span className="text-secondary">Validation</span>{' '}
				App
			</h2>
			<h3 className="text-active text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check if a Phone Number is valid or not
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form
					className="flex w-full justify-center md:flex-col md:w-5/6"
					onSubmit={e => fetchValidation(e)}
				>
					<input
						autoFocus={true}
						type="number"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm md:w-full"
						placeholder="Enter the phone number..."
					/>
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-background text-primary transition duration-300 hover:bg-active hover:text-background md:ml-0 md:mt-4">
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

Let’s create some states to store the phone number and the validation details we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';

export default function Home() {
	const [number, setNumber] = useState('');
	const [res, setRes] = useState(null);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-5xl text-primary pt-20 pb-6 md:text-3xl">
				Phone Number <span className="text-secondary">Validation</span>{' '}
				App
			</h2>
			<h3 className="text-active text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check if a Phone Number is valid or not
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form
					className="flex w-full justify-center md:flex-col md:w-5/6"
					onSubmit={e => fetchValidation(e)}
				>
					<input
						autoFocus={true}
						type="number"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm md:w-full"
						placeholder="Enter the phone number..."
						onChange={e => setNumber(e.target.value)}
					/>
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-background text-primary transition duration-300 hover:bg-active hover:text-background md:ml-0 md:mt-4">
						Validate
					</button>
				</form>
			</div>
		</div>
	);
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user selects the year.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Phone Validate API](https://rapidapi.com/neutrinoapi/api/phone-validate/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/1474911ae42073cc6622b4d86d0d1a7290b15b55/guides/posts/build-phone-number-validation-app/images/code-snippet.png)

Now create a file with the name `validate.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/holiday
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const options = {
			method: 'POST',
			url: 'https://neutrinoapi-phone-validate.p.rapidapi.com/phone-validate',
			headers: {
				'x-rapidapi-host': 'neutrinoapi-phone-validate.p.rapidapi.com',
				'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
			},
			data: {number: req.body.number}
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

This code makes an API call to the [Phone Validate API](https://rapidapi.com/neutrinoapi/api/phone-validate/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `holiday` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```js
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [number, setNumber] = useState('');
	const [res, setRes] = useState(null);

	/**
	 *
	 *
	 * Check if phone number is valid or not
	 */
	const fetchValidation = async e => {
		e.preventDefault();
		try {
			const res = await axios.post(`/api/validate`, {number});
			const {data} = res;
			setRes(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-5xl text-primary pt-20 pb-6 md:text-3xl">
				Phone Number <span className="text-secondary">Validation</span>{' '}
				App
			</h2>
			<h3 className="text-active text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check if a Phone Number is valid or not
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form
					className="flex w-full justify-center md:flex-col md:w-5/6"
					onSubmit={e => fetchValidation(e)}
				>
					<input
						autoFocus={true}
						type="number"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm md:w-full"
						placeholder="Enter the phone number..."
						onChange={e => setNumber(e.target.value)}
					/>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-background text-primary transition duration-300 hover:bg-active hover:text-background md:ml-0 md:mt-4"
						onClick={fetchValidation}
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
										{JSON.stringify(res.valid)}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">
										Country
									</td>
									<td className="border px-4 py-4 capitalize">
										{res.country}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">
										Country Code
									</td>
									<td className="border px-4 py-4">
										{res['country-code3']}
									</td>
								</tr>
								{res['prefix-network'] && (
									<tr>
										<td className="border px-4 py-4">
											Prefix Network
										</td>
										<td className="border px-4 py-4">
											{res['prefix-network']}
										</td>
									</tr>
								)}
								<tr>
									<td className="border px-4 py-4">
										International Number
									</td>
									<td className="border px-4 py-4">
										{res['international-number']}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">
										Local Number
									</td>
									<td className="border px-4 py-4">
										{res['local-number']}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">
										International Calling Code
									</td>
									<td className="border px-4 py-4">
										{res['international-calling-code']}
									</td>
								</tr>
								<tr>
									<td className="border px-4 py-4">Type</td>
									<td className="border px-4 py-4">
										{res.type}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
			</div>
			{res && (
				<div className="flex flex-col mt-4 justify-center">
					<p className="block mb-10 text-center text-primary text-xs">
						Made by RapidAPI DevRel Team -{' '}
						<a
							className="hover:text-active"
							href="https://github.com/RapidAPI/DevRel-Examples-External"
						>
							See more examples like this
						</a>
					</p>
				</div>
			)}
		</div>
	);
}
```

You can see that I have created a function, `fetchValidation`, to request the API. I have also created a piece of UI that is conditionally rendering on the screen based on the `res` state variable’ value.

## Wrap Up

That’s it. We have successfully built an [Public Holiday App](https://rapidapi-example-phone-number-validation-app.vercel.app/) using [Phone Validate API](https://rapidapi.com/neutrinoapi/api/phone-validate/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/phone-number-validate-app).

In the end, it will look something like this:

![Phone Number Validation Application built with Next.js and Phone Validate API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/1474911ae42073cc6622b4d86d0d1a7290b15b55/guides/posts/build-phone-number-validation-app/images/cover.png)
