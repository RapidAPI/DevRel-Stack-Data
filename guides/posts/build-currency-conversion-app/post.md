---
title: How to build a Currency Conversion App using Next.js and Currency Conversion API?
description: Today, I am going to build a Currency Conversion app using Currency Conversion API from RapidAPI Hub and Next.js.
publishedDate: 2021-10-25T16:19:49.280Z
lastModifiedDate: 2021-10-25T16:19:49.280Z
authors:
    - saad
category: apps
tags:
    - rapidapi
    - currency-conversion-app
coverImage: ''
---

<Lead>

There are thousands of APIs available on [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) that you can use to build different products. [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides you with a broad category of APIs ranging from Finance to Payments. Today, I have decided to use a [Currency Conversion API](https://RapidAPI.com/principalapis/api/currency-conversion-and-exchange-rates/) from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to build a small application that will convert one concurrency to another. So without any further ado, let’s jump in.

</Lead>

## Stack

We need to choose a stack first to build this application. I have decided to go with the [Jamstack](https://jamstack.org/) since we will make a couple of API calls without having a proper backend.

I am going to use [Next.js](https://nextjs.org/) for the client-side and [TailwindCSS](https://tailwindcss.com/) for the styling.

If you don’t know about Next.js, it is a JavaScript framework built on top of React and provides features like server-side rendering, static site generation, etc. Tailwind is a CSS framework that provides utility classes to speed up the development process.

## Choosing The API

Let’s decide which API we are going to use. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already and then search for "currency conversion" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

I am using [Currency Conversion and Exchange Rates API](https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) by [Principal APIs](https://rapidapi.com/user/principalapis/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

To use this API, you need to subscribe to it first. You can do this by clicking on **Subscribe to Test** button.

![Subscribe to Currency Conversion and Exchange Rates API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-currency-conversion-app/images/subscribe.jpg)

Once you click the button, you will be redirected to another page where different available subscription packages will be shown. Let’s go with the free one for now.

After all this, you will be redirected back to the original page. Here you will have a key `x-rapidapi-key`. Save it. It will be used later in the application.

## Building The UI

You can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal. So let’s do that.

```sh
npx create-next-app -e with-tailwindcss currency-converter-app
```

This command is going to take a minute to set everything up. After it is finished generating the boilerplate, you will see a folder with the name `currency-converter-app` has been created. Open this folder in your preferred code editor. I am going to use [VSCode](https://code.visualstudio.com/) for the project.

### Project Files

When you open the project in your code editor, you will see the following directories and files in the root directory:

-   `pages` directory: Inside it, you will have files `index.js`, `_app.js`, and another directory called `api`. You only need to know about the - - - `index.js` file that is the main entry point in your project.
-   `public` directory: This directory contains icons. You place your static files here to load later in the application.
-   `node_modules`: It’s another directory that contains all the node modules you are using in your application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

Before we move on to writing the code, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/currency-converter-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are some TailwindCSS configurations I have done specifically for this project. I have added some colors that you do not have by default with TailwindCSS and also have set some screen sizes.

Now let’s start writing the code. I am going to do it in steps so you can follow along.

### → STEP #1

Open the`pages/index.js` file and remove all the existing code. After this, copy-paste the following code there:

```js
export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Currency <span className="text-danger">Conversion</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
				Convert Different Concurrencies Quickly
			</h3>
		</div>
	);
}
```

It is going to create two headings for you with the text "Currency Conversion App" and "Convert Different Concurrencies Quickly". You can change it to anything you prefer.

### → STEP #2

Now create a new folder called `components` in the root directory. Inside it, create a new file called `Input.js`. Now copy-paste the following code inside this file:

```js
const Input = ({dropdown, onChange, label, symbols}) => {
	const arrOfSymbols = Object.keys(symbols);

	return (
		<div className="flex flex-col h-16 mb-12">
			<label
				htmlFor={label}
				className="text-primary text-2xl font-raleway pb-2 font-bold"
			>
				{label}
			</label>
			{(dropdown && (
				<select
					name="countries"
					onChange={e => onChange(e.target.value)}
					className="px-4 py-2 rounded"
				>
					{arrOfSymbols.map(symbol => (
						<option
							value={symbol}
							key={arrOfSymbols.indexOf(symbol)}
						>
							{symbols[symbol]}
						</option>
					))}
				</select>
			)) || (
				<input
					type="number"
					placeholder="Enter amount..."
					className="border-none outline-none bg-primary px-4 py-2 rounded-sm font-raleway"
					onChange={e => onChange(e.target.value)}
				/>
			)}
		</div>
	);
};

export default Input;
```

It is a separate component that I have created for adding input fields in my application. If the dropdown value is set to `true`, the `Input` component will render a dropdown list. The list is going to show the user different currency options.

This component is receiving `symbols` object as a prop. The `symbols` object contains different currency exchange options. I have created a separate array for the keys of the `symbol` object. Later, I am mapping this array to generate the dropdown list.

If the dropdown value is set to `false`, the Input component will render a text field that will only accept numbers.

The component is also receiving `onChange` function, which I have set to both the dropdown and input text field’s `onChange` event. Now, if the value of input fields changes, the `onChange` function will trigger.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file and paste the following in it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

You need to replace `YOUR-RAPIDAPI-KEY` here with the API key you got when you subscribed to the [Currency Conversion and Exchange Rates API](https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It is the value of `x-rapidapi-key` that you saved earlier.

Now download and add `axios` in your project. For this, run the following command in the terminal:

```sh
npm install axios
```

Now import `axios` at the top of the `pages/index.js`.

```js
import axios from ‘axios’;
```

### → STEP #4

There are more than 190+ countries in the world. Since almost everyone has a different currency, it was challenging to write down their three code currency symbols.

The [Currency Conversion and Exchange Rates API](https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides an endpoint that can get you all these symbols as a response. I am going to this endpoint along with the code snippet [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) provides us.

![Symbols endpoint of Currency Conversion and Exchange Rates API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-currency-conversion-app/images/symbols-endpoint.jpg)

For this, create a `symbol.js` file in `pages/api` directory, and paste the following code in it:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols',
			headers: {
				'x-rapidapi-host':
					'currency-conversion-and-exchange-rates.p.rapidapi.com',
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

Now copy-paste the following code, and put it inside the `pages/index.js` file:

```js
import {useState} from 'react';
import axios from 'axios';
import Input from '../components/Input';

export default function Home({symbols}) {
	const [convertFrom, setConvertFrom] = useState('ANG');
	const [convertTo, setConvertTo] = useState('ANG');
	const [amount, setAmount] = useState(null);

	return (
		<div className="flex flex-col items-center">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Currency <span className="text-danger">Conversion</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
				Convert Different Concurrencies Quickly
			</h3>
			<div className="flex flex-col justify-between w-3/6 md:w-5/6">
				<Input
					label="Convert from"
					dropdown={true}
					onChange={setConvertFrom}
					symbols={symbols}
				/>
				<Input
					label="To Currency"
					dropdown={true}
					onChange={setConvertTo}
					symbols={symbols}
				/>
				<Input
					label="Your Amount"
					dropdown={false}
					onChange={setAmount}
					symbols={{}}
				/>
				<button className="bg-danger w-2/5 border-none outline-none py-2 rounded uppercase font-raleway transition duration-300 hover:shadow-custom pointer">
					Convert
				</button>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await axios.get('http://localhost:3000/api/symbol');
	const {data} = res;
	const {symbols} = data;

	if (!symbols) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			symbols
		}
	};
}
```

I am using server-side rendering so that all the currency symbols fetches before the application loads. I have also created different states to store the data.

I have used the `Input` component that we created earlier to render different fields on the viewport. I am sending the `onChange` prop in the `Input` component that will get triggered when the value of the input field changes.

### → STEP #5

Now let’s convert the currency. For this, we are going to use a different endpoint of our API.

![Covert endpoint of Currency Conversion and Exchange Rates API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-currency-conversion-app/images/convert-endpoint.jpg)

For this, create a `convert.js` file in the `pages/api` directory and paste the following code there:

```js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		console.log(req.query.convertFrom);
		const options = {
			method: 'GET',
			url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
			params: {
				from: `${req.query.convertFrom}`,
				to: `${req.query.convertTo}`,
				amount: `${req.query.amount}`
			},
			headers: {
				'x-rapidapi-host':
					'currency-conversion-and-exchange-rates.p.rapidapi.com',
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

Now open the `pages/index.js` file and copy-paste the following code there:

```js
import {useState} from 'react';
import axios from 'axios';
import Input from '../components/Input';

export default function Home({symbols}) {
	const [convertFrom, setConvertFrom] = useState('ANG');
	const [convertTo, setConvertTo] = useState('ANG');
	const [amount, setAmount] = useState(null);
	const [convertedAmount, setConvertedAmount] = useState(null);

	/**
	 *
	 *
	 * Fetch the converted amount
	 */
	const convertCurrency = () => {
		const options = {
			method: 'GET',
			url: 'http://localhost:3000/api/convert',
			params: {convertFrom, convertTo, amount}
		};

		axios
			.request(options)
			.then(function (response) {
				const {data} = response;
				setConvertedAmount(Math.floor(data.result));
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	return (
		<div className="flex flex-col items-center">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Currency <span className="text-danger">Conversion</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
				Convert Different Concurrencies Quickly
			</h3>
			<div className="flex flex-col justify-between w-3/6 md:w-5/6">
				<Input
					label="Convert from"
					dropdown={true}
					onChange={setConvertFrom}
					symbols={symbols}
				/>
				<Input
					label="To Currency"
					dropdown={true}
					onChange={setConvertTo}
					symbols={symbols}
				/>
				<Input
					label="Your Amount"
					dropdown={false}
					onChange={setAmount}
					symbols={{}}
				/>
				<button
					className="bg-danger w-2/5 border-none outline-none py-2 rounded uppercase font-raleway transition duration-300 hover:shadow-custom pointer"
					onClick={convertCurrency}
				>
					Convert
				</button>
				{convertedAmount && (
					<div className="flex w-3/5 rounded border-primary text-primary my-6 md:w-full">
						<p className="font-raleway font-bold text-lg uppercase tracking-wider md:text-base">
							Converted Amount: <span className="text-danger">{`${convertedAmount} ${convertTo}`}</span>
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await axios.get('http://localhost:3000/api/symbol');
	const {data} = res;
	const {symbols} = data;

	if (!symbols) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			symbols
		}
	};
}
```

You can see that I have added another function called `convertCurrency` that will trigger when the user clicks on the `Convert` button. Inside the function, I am making an API call to my Next.js API `convert` route. This API route will request the [Currency Conversion and Exchange Rates API](https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and then send the response it receives to the client.

I have created another state variable to store the converted amount. When the request is successful at client-side, the converted amount is stored to the `convertedAmount` state variable.

When the `convertedAmount` changes from null to some other value, it will trigger a UI piece that will show the converted amount.

## Wrap Up

This is it. We have successfully built a [Currency Converter application](https://rapidapi-example-currency-conversion.vercel.app/) using the [Currency Conversion and Exchange Rates API](https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). You can find the code of this web app [here](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/currency-converter-app?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). It will look something like this:

![Currency Conversion application using Next.js and Currency Conversion and Exchange Rates API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-currency-conversion-app/images/currency-conversion-app.png)
