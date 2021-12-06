---
title: How to build a COVID-19 Vaccine Stats App using Covid 19 World Vaccination Data API?
description: Today, I am building an application that will provide the COVID-19 vaccine statistics across different countries.
publishedDate: 2021-12-06T06:43:23.822Z
lastModifiedDate: 2021-12-06T06:43:23.822Z
authors:
    - saad
categories:
		- apps
tags:
    - rapidapi
    - covid-vaccine-stats-app
coverImage: ''
---

<Lead>

The world has been fighting against COVID-19 since the start of 2020. At that time, there were no vaccines, but fortunately, several companies have developed them. And because of the availability, everyone should get vaccinated as soon as possible.

</Lead>

Today, I am building an application that will provide the COVID-19 vaccine statistics across different countries. So without any further, let’s jump in!

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/).

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s find an API that we can use to fetch the vaccine details. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?tm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for “covid vaccine” in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

You will see different search results related to all the available APIs that provide this service. For this piece, I am using [Covid 19 World Vaccination Data](https://rapidapi.com/jamesrabels@gmail.com/api/covid-19-world-vaccination-data/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Covid 19 World Vaccination Data API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/921e2aafdccb1fecf813bb7e92c5c2f2616c0b5f/guides/posts/build-covid-vaccine-stats-app/images/subscribe.png)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss covid-vaccine-app
```

This command is going to take a minute to set everything up. After generating the boilerplate, you will see a folder with the name `covid-vaccine-app` has been created. Open this folder in your preferred code editor. I will use [VSCode](https://code.visualstudio.com/) for this project.

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
    `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/covid-vaccine-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
				COVID-19 <span className="text-primary">Vaccine</span> Stats App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Look up COVID-19 Vaccination Stats Across Different Countries
			</h3>
		</div>
	);
}
```

It will create two headings for you with the text “Time App” and “Get Time-related information according to an area”. You can change it to anything you prefer.

### → STEP #2

Now let’s create a dropdown list and a search button. The user will be able to select the country of their choice from the list and use the search button to get the vaccination details of that country.

For this, create a new folder called `components`. Inside this folder, create a file called `Dropdown.js`. Copy and paste what you will find in [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/covid-vaccine-app/components/Dropdown.js) file in your `Dropdown.js`.

Now copy the following code and paste it in `pages/index.js`:

```js
import Dropdown from '../components/Dropdown';

export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
				COVID-19 <span className="text-primary">Vaccine</span> Stats App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Look up COVID-19 Vaccination Stats Across Different Countries
			</h3>
			<div className="flex justify-center items-center mb-8 w-5/6 md:items-center md:flex-col">
				<Dropdown />
				<button className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4 md:w-5/6">
					Search
				</button>
			</div>
		</div>
	);
}
```

This code is going to create an input field and button. I have also styled them a little bit using [TailwindCSS](<(https://tailwindcss.com/)>).

### → STEP #3

Let’s create some states to store the country code the user will select and save the response that we will receive from the API. For this, copy-paste the following code in `pages/index.js`.

```js
import {useState} from 'react';
import Dropdown from '../components/Dropdown';

export default function Home() {
	const [countryCode, setCountryCode] = useState('ABW');
	const [res, setRes] = useState(null);

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
				COVID-19 <span className="text-primary">Vaccine</span> Stats App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Look up COVID-19 Vaccination Stats Across Different Countries
			</h3>
			<div className="flex justify-center items-center mb-8 w-5/6 md:items-center md:flex-col">
				<Dropdown onChange={setCountryCode} />
				<button className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4 md:w-5/6">
					Search
				</button>
			</div>
		</div>
	);
}
```

You can see that I am sending the `setCountryCode` function to the Dropdown component as a prop.

### → STEP #4

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR_RAPID_API_KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key that I told you to save earlier.

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #5

We are using the `home` endpoint of the [Covid 19 World Vaccination Data](https://rapidapi.com/jamesrabels@gmail.com/api/covid-19-world-vaccination-data/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) to get the vaccination details.

RapidAPI Hub provides you with code snippets in different languages for integrating the API. I am going to use the `(JavaScript) Axios` one.

![Fetching data using (JavaScript) Axios](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/921e2aafdccb1fecf813bb7e92c5c2f2616c0b5f/guides/posts/build-covid-vaccine-stats-app/images/code-snippet.png)

Now create a file with the name `vaccine.js` inside the `pages/api` directory. It is going to create a REST API endpoint for you. The endpoint point will look like this:

```sh
http://localhost:3000/api/vaccine
```

Now copy the following code in this file:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		if (!req.query.countryCode) {
			const options = {
				method: 'GET',
				url: 'https://covid-19-world-vaccination-data.p.rapidapi.com/',
				params: {iso: 'ABW'},
				headers: {
					'x-rapidapi-host':
						'covid-19-world-vaccination-data.p.rapidapi.com',
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
			const options = {
				method: 'GET',
				url: 'https://covid-19-world-vaccination-data.p.rapidapi.com/',
				params: {iso: req.query.countryCode},
				headers: {
					'x-rapidapi-host':
						'covid-19-world-vaccination-data.p.rapidapi.com',
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
		}
	} else {
		res.status(400);
	}
}
```

This code makes an API call to the [Covid 19 World Vaccination Data](https://rapidapi.com/jamesrabels@gmail.com/api/covid-19-world-vaccination-data/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) on the server and returns the results to the user. It executes when the user makes an API call to the `vaccine` endpoint I have mentioned above.

I have added a condition in the code to differentiate whether the API call is made before the website is loaded.

Once you are done, copy the following code in the `pages/index.js` file:

```js
import {useState} from 'react';
import axios from 'axios';
import Dropdown from '../components/Dropdown';

export default function Home({data}) {
	const [countryCode, setCountryCode] = useState('ABW');
	const [res, setRes] = useState(data[data.length - 1]);

	/**
	 *
	 *
	 * Fetch vaccine information of a country
	 */
	const fetchInfo = async () => {
		try {
			const res = await axios.get(`/api/vaccine`, {
				params: {countryCode}
			});

			const {data} = res;
			setRes(data[data.length - 1]);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
				COVID-19 <span className="text-primary">Vaccine</span> Stats App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Look up COVID-19 Vaccination Stats Across Different Countries
			</h3>
			<div className="flex justify-center items-center mb-8 w-5/6 md:items-center md:flex-col">
				<Dropdown onChange={setCountryCode} />
				<button
					className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4 md:w-5/6"
					onClick={fetchInfo}
				>
					Search
				</button>
			</div>
			<div className="flex flex-col text-raleway mt-6 w-3/6 h-4/5 md:w-5/6 md:h-full md:mb-12">
				<table className="bg-white w-full text-secondary text-lg mb-8 md:text-sm md:mx-2">
					<thead className="font-raleway uppercase tracking-wide">
						<tr>
							<th className="border border-secondary text-primary text-lg font-bold text-left px-4 py-4">
								Information
							</th>
							<th className="border border-secondary text-primary text-lg font-bold text-left px-4 py-4">
								Value
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-secondary px-4 py-4">
								Country
							</td>
							<td className="border border-secondary px-4 py-4">
								{res.country}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4">
								Vaccines
							</td>
							<td className="border border-secondary px-4 py-4">
								{res.vaccines}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4">
								Daily Vaccination Per Million
							</td>
							<td className="border border-secondary px-4 py-4">
								{res.daily_vaccinations_per_million}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4">
								People Fully Vaccinated
							</td>
							<td className="border border-secondary px-4 py-4">
								{res.people_fully_vaccinated}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4">
								People Fully Vaccinated Per Hundred
							</td>
							<td className="border border-secondary px-4 py-4">
								{res.people_fully_vaccinated}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4">
								People Vaccinated
							</td>
							<td className="border border-secondary px-4 py-4">
								{res.people_vaccinated}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4">
								People Vaccinated Per Hundred
							</td>
							<td className="border border-secondary px-4 py-4">
								{res.people_vaccinated_per_hundred}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4">
								Total Vaccination
							</td>
							<td className="border border-secondary px-4 py-4">
								{res.total_vaccinations}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4">
								Total Vaccination Per Hundred
							</td>
							<td className="border border-secondary px-4 py-4">
								{res.total_vaccinations_per_hundred}
							</td>
						</tr>
						<tr>
							<td className="border border-secondary px-4 py-4">
								Source
							</td>
							<td className="border border-secondary px-4 py-4 text-primary underline">
								<a href={res.source_website}>
									{res.source_name}
								</a>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="flex flex-col mt-4 justify-center">
					<p className="block mb-8 text-center text-secondary text-xs">
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
		</div>
	);
}

export async function getServerSideProps() {
	const res = await axios.get('http://localhost:3000/api/vaccine');
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

I am using the Next.js `getServerSideProps` function to fetch the data from the server. It will make my application server-side, and the user will never see a loading state. You can also use `getStaticProps` instead of `getServerSideProps`, and the application will then fetch the data at build time.

I have also created a table to display the values that our application will receive from the API.

## Wrap Up

This is it. We have successfully built a [COVID-19 Vaccine Stats App](https://rapidapi-covid-vaccine-stats-app.vercel.app/) using the [Covid 19 World Vaccination Data](https://RapidAPI.com/jamesrabels@gmail.com/api/covid-19-world-vaccination-data/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel). You can find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/covid-vaccine-app). It will look something like this:

![COVID Vaccine Stats Application built with Next.js and Covid 19 World Vaccination Data API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/921e2aafdccb1fecf813bb7e92c5c2f2616c0b5f/guides/posts/build-covid-vaccine-stats-app/images/cover.png)
