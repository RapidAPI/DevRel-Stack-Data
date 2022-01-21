---
title: How to build a US Zip Code Info App using US Zip Code Information API?
description: You can get a lot of information from an area’s zip code. Instead of looking it up on the Internet, we can build an app for it using an API from RapidAPI Hub. In this piece, let's do just this and build an app to get information associated with a zipcode.
publishedDate: 2022-01-21T11:59:13.377Z
lastModifiedDate: 2022-01-21T11:59:13.377Z
authors:
    - saad
categories:
		- apps
tags:
    - rapidapi
    - us-zipcode-info-app
coverImage: ''
---

<Lead>

You can get a lot of information from an area’s zip code. Instead of looking it up on the Internet, we can build an app for it using an API from RapidAPI Hub.

</Lead>

So today, I am building a zipcode information app for the United States that will provide different information associated with a zip code. So without any further ado, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the frontend and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to find the zip code information. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “zipcode information” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to zip code APIs. For this piece, I am using [US Zip Code Information API](https://RapidAPI.com/dkr73/api/us-zip-code-information/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to US Zip Code Information API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/78324f90550742a05986521a9d2d12fe3021e006/guides/posts/build-us-zip-code-info-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss us-zipcode-info-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `us-zipcode-info-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/us-zipcode-info-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				US <span className="text-secondary">Zipcode</span> Info App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Checkout different information associated with a zipcode
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “US Zipcode Info App” and “Checkout different information associated with a zipcode”. You can change it to anything you prefer.

### → STEP #2

Now let’s create an input field and a search button. The user will write down the zip code in the input field, and the search button can get him the information.

For this, copy the following code and paste it in `pages/index.js`:

```jsx
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				US <span className="text-secondary">Zipcode</span> Info App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Checkout different information associated with a zipcode
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="number"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Enter the zipcode..."
					/>
					<button className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
```

This code is going to create an input field and a button. I have also styled them a little bit using [TailwindCSS](https://tailwindcss.com/).

### → STEP #3

Let’s create some states to store the provided zip code and the information we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```jsx
import {useState} from 'react';

export default function Home() {
	const [code, setCode] = useState('');
	const [info, setInfo] = useState(null);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				US <span className="text-secondary">Zipcode</span> Info App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Checkout different information associated with a zipcode
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="number"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Enter the zipcode..."
						onChange={e => setCode(e.target.value)}
					/>
					<button className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
```

You can see that I have added an `onChange` event handler to set the state value as soon as the user types in the input fields.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [US Zip Code Information API](https://RapidAPI.com/dkr73/api/us-zip-code-information/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

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

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/78324f90550742a05986521a9d2d12fe3021e006/guides/posts/build-us-zip-code-info-app/images/code-snippet.png)

Now create a file with `info.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

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
			url: 'https://us-zip-code-information.p.rapidapi.com/',
			params: {zipcode: req.query.code},
			headers: {
				'x-rapidapi-host': 'us-zip-code-information.p.rapidapi.com',
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

This code makes an API call to the [US Zip Code Information API](https://RapidAPI.com/dkr73/api/us-zip-code-information/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `info` endpoint I mentioned above.

Once you are done, copy the following code in the `pages/index.js` file:

```jsx
import {useState} from 'react';
import axios from 'axios';

export default function Home() {
	const [code, setCode] = useState('');
	const [info, setInfo] = useState(null);
	const [btnText, setBtnText] = useState('Search');

	/**
	 *
	 *
	 * Fetch area information using zipcode
	 */
	const fetchInfo = async e => {
		e.preventDefault();
		try {
			setBtnText('Loading...');
			const res = await axios.get(`/api/info`, {
				params: {
					code
				}
			});

			setInfo(res.data[0]);
		} catch (err) {
			console.log(err);
		}
		setBtnText('Search');
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				US <span className="text-secondary">Zipcode</span> Info App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Checkout different information associated with a zipcode
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="number"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
						placeholder="Enter the zipcode..."
						onChange={e => setCode(e.target.value)}
					/>
					<button
						className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
						onClick={fetchInfo}
					>
						{btnText}
					</button>
				</form>
			</div>
			{info && (
				<div className="flex flex-col text-primary text-sm text-raleway mt-12 w-4/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
					<table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
						<tbody className="text-primary">
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									Area code
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.AreaCode}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									City
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.City}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									City Alias Mixed Case
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.CityAliasMixedCase}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									City Alias Name
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.CityAliasName}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									City Delivery Indicator
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.CityDeliveryIndicator}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									City Mixed Case
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.CityMixedCase}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									City State Key
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.CityStateKey}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									City Type
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.CityType}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									County
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.County}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									County ANSI
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.CountyANSI}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									County FIPS
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.CountyFIPS}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									County Mixed Case
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.CountyMixedCase}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									Day Light Saving
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.DayLightSaving}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									Elevation
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.Elevation}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									Facility Code
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.FacilityCode}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									Finance Number
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.FinanceNumber}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									Latitude
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.Latitude}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									Longitude
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.Longitude}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									Preferred Last Line Key
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.PreferredLastLineKey}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									State
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.State}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									Time Zone
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.TimeZone}
								</th>
							</tr>
							<tr>
								<th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
									Carrier Route Rate Sortation
								</th>
								<th className="border border-x-0 border-secondary text-left px-4 py-4">
									{info.CarrierRouteRateSortation}
								</th>
							</tr>
						</tbody>
					</table>
				</div>
			)}

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

I have created a `fetchInfo` function that makes an API call when the user clicks on the `search` button. When the call is successful, all the zipcode information is stored inside the `info` state variable. On the value of `info`, I am conditionally rendering a piece of UI that displays all the information we receive from the API.

## Wrap Up

That’s it. We have successfully built a [US Zip Code Info App](https://rapidapi-example-us-zipcode-info-app.vercel.app/) using [US Zip Code Information API](https://RapidAPI.com/dkr73/api/us-zip-code-information/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the source code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/us-zipcode-info-app).

In the end, it will look something like this:

![US Zipcode Info App built with Next.js and US Zip Code Information API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/78324f90550742a05986521a9d2d12fe3021e006/guides/posts/build-us-zip-code-info-app/images/cover.png)
