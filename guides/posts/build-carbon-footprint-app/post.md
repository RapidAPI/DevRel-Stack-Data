---
title: How to build a Carbon Footprint App using Next.js and the CarbonFootprint API?
description: In this guide, we will build a Carbon Footprint App that will use an API from RapidAPI Hub to calculate the carbon footprint of travel.
publishedDate: 2022-01-12T19:10:30.765Z
lastModifiedDate: 2022-01-12T19:10:30.765Z
authors:
    - 'ahmad-bilal'
categories:
    - apps
tags:
    - rapidapi
    - carbon
    - footprint
    - app
coverImage: ''
---

<Lead>

Today, public APIs provide a fast and convenient way to develop an application. Whether you're building a small tool-based application or a big eCommerce portal, these APIs can be very serviceable.

</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of these public APIs which over 3 million developers are using. You can explore thousands of them on RapidAPI Hub and select the best one for your next project.

In this guide, we will be building a web application that will allow users to get the Carbon Footprint of their travel. We will use an API to get the Footprint values of user's input.

## Stack

The stack for our app is going to be as follows. I am going to use [Next.js](https://nextjs.org/) for the client-side of our app and [TailwindCSS](https://tailwindcss.com/) for styling it.

Even if you don’t know about Next.js, being familiar with React will be enough for this guide. Tailwind is a CSS framework that provides utility classes to use directly in the markup, saving time during the development process.

## Choosing The API

Let’s find the API first. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Carbon Footprint" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub as a developer.
</Callout>

For our app, I will use the [CarbonFootprint API](https://rapidapi.com/carbonandmore-carbonandmore-default/api/carbonfootprint1/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel), which is the most popular one.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to CarbonFootprint API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-carbon-footprint-app/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. Save its value. We will need it later to call the API.

## Building The UI

We can create a Next.js boilerplate with TailwindCSS integrated by running the following command in your terminal.

```sh
npx create-next-app -e with-tailwindcss carbon-footprint-app
```

It will take some time to install the packages. After generating the boilerplate, you will see a folder with the name `carbon-footprint-app` has been created. Open this folder in your preferred code editor.

### Project Files

In our project folder, we will have the following folders and files. I will briefly break them down for you:

-   `pages` directory: It has the `index.js` file, which is the entry point of our app, basically the home page. It also has`_app.js` and another directory named `api`, where we will store the requests to our API.
-   `public` directory: It holds assets. You can place your static files here to load later in the application.
-   `package.json`: This file contains the metadata of your project.
-   `package-lock.json`: This file is responsible for tracking the exact version of every installed package.
-   `postcss.config.js`: This file contains [PostCSS](https://github.com/postcss/postcss) configurations.
-   `tailwind.config.js`: It contains [TailwindCSS](https://tailwindcss.com/) configurations.
-   `readme.md`: It’s a markdown file for documentation.

I will be using a particular set of colors for this app. You can use colors of your preference, but if you are interested in mine, open [this](https://github.com/RapidAPI/DevRel-Examples-External/blob/main/carbon-footprint-app/tailwind.config.js) file, and copy all of its content, then paste it inside the `tailwind.config.js` file in your project. These are Tailwind configurations for the colors and fonts I will be using.

Our UI should look like this.

![Initial UI of our App](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-carbon-footprint-app/images/preview.png)

With all that set, it's time to code the app. Let's jump right into it.

### → STEP #1

Open the `pages/index.js` file and remove all the existing code. Let's add the layout.

```jsx
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl font-bold text-active mt-20">
				Carbon Footprint
			</h1>
			<h2 className="text-primary text-2xl font-light mt-5">
				Calculate the Carbon Footprint of your travel.
			</h2>
		</div>
	);
}
```

I added the following to `pages/_app.js`.

```jsx
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title>RapidAPI - Carbon Footprint App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
```

### → STEP #2

As you can see in the UI preview, we require a form that should have a select field for the type of vehicle and an input field for the distance. A search button will follow the form. Let's add all these.

```jsx
export default function Home() {

  return (
    <div className="flex flex-col md:px-12 px-0 bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl font-bold text-active mt-20">Carbon Footprint</h1>
      <h2 className="text-primary text-2xl font-light mt-5">
        Calculate the Carbon Footprint of your travel.
      </h2>
      <form
        className="sm:mx-auto mt-20 md:max-w-3xl justify-center flex flex-col w-full sm:flex"
        onSubmit={(e) => {
          // Press Enter key to submit
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="sm:w-3/5 w-full">
            <label className="block text-primary text-sm">Vehicle</label>
            <select
              className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
              autoFocus={true}
              required
            >
              {[
                "SmallPetrolCar",
                "MediumPetrolCar",
                "LargePetrolCar",
                "SmallDieselCar",
                "MediumDieselCar",
                "LargeDieselCar",
                "MediumHybridCar",
                "LargeHybridCar",
                "MediumLPGCar",
                "LargeLPGCar",
                "MediumCNGCar",
                "LargeCNGCar",
                "SmallPetrolVan",
                "LargePetrolVan",
                "SmallDielselVan",
                "MediumDielselVan",
                "LargeDielselVan",
                "LPGVan",
                "CNGVan",
                "SmallMotorBike",
                "MediumMotorBike",
                "LargeMotorBike",
              ].map((diet) => {
                return <option value={diet}>{diet}</option>;
              })}
            </select>
          </div>
          <div className="sm:w-1/3 w-full">
            <label className="block text-primary text-sm">Distance (KM)</label>
            <input
              className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
              type="number"
              required
            />
          </div>
        </div>
        <button
          className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
          type="submit"
        >
          Get Footprint
        </button>
      </form>
      </div>
    </div>
  );
}
```

This code will create the input fields, and the submit button. The Select method is pre-filled with possible vehicle types as specified on the [API Endpoint page](https://rapidapi.com/carbonandmore-carbonandmore-default/api/carbonfootprint1/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

I have also styled and made them responsive using [TailwindCSS](<(https://tailwindcss.com/)>). Now, we need to store the user input in the input fields. We can do it using React `useState` hook. We will use three states for our app:

1. `vehicle` for storing the vehicle type, with `SmallPetrolCar` as the default value.
2. `distance` for storing the distance in km.
3. `response` for storing the API response.

```jsx
import { useState } from "react";

export default function Home() {
  const [vehicle, setVehicle] = useState("SmallPetrolCar");
  const [distance, setDistance] = useState(null);
  const [response, setResponse] = useState(null);

  return (
    <div className="flex flex-col md:px-12 px-0 bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl font-bold text-active mt-20">Carbon Footprint</h1>
      <h2 className="text-primary text-2xl font-light mt-5">
        Calculate the Carbon Footprint of your travel.
      </h2>
      <form
        className="sm:mx-auto mt-20 md:max-w-3xl justify-center flex flex-col w-full sm:flex"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="sm:w-3/5 w-full">
            <label className="block text-primary text-sm">Vehicle</label>
            <select
              className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
              autoFocus={true}
              required
              onChange={(e) => {
                setVehicle(e.target.value);
              }}
            >
              {[
                "SmallPetrolCar",
                "MediumPetrolCar",
                "LargePetrolCar",
                "SmallDieselCar",
                "MediumDieselCar",
                "LargeDieselCar",
                "MediumHybridCar",
                "LargeHybridCar",
                "MediumLPGCar",
                "LargeLPGCar",
                "MediumCNGCar",
                "LargeCNGCar",
                "SmallPetrolVan",
                "LargePetrolVan",
                "SmallDielselVan",
                "MediumDielselVan",
                "LargeDielselVan",
                "LPGVan",
                "CNGVan",
                "SmallMotorBike",
                "MediumMotorBike",
                "LargeMotorBike",
              ].map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div className="sm:w-1/3 w-full">
            <label className="block text-primary text-sm">Distance (KM)</label>
            <input
              className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
              type="number"
              required
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
        </div>
        <button
          className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
          type="submit"
        >
          Get Footprint
        </button>
      </form>
      </div>
    </div>
  );
}
```

We use the `onChange` handlers on the input fields to store their values(`e.target.value`) in our states.

### → STEP #3

Let’s integrate the API now. For this, first, create a `.env.local` file in the root directory of your project and paste the following into it:

```sh
NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY
```

Remember the `x-rapidapi-key` I asked you to save earlier? You need to replace `YOUR-RAPIDAPI-KEY` with its value. You get the key after subscribing to the [CarbonFootprint API](https://rapidapi.com/carbonandmore-carbonandmore-default/api/carbonfootprint1/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

Now download and add `axios` to your project. For this, run the following command in the terminal:

```sh
npm install axios
```

And import `axios` in `pages/index.js`.

```jsx
import axios from ‘axios’;
```

The API provides several usable endpoints which you can use in your app. You can see these endpoints on the left pane in the image below. We will use the `CarbonFootprintFromCarTravel` endpoint, which returns the Carbon Footprint for car travel.

![API Endpoints and (JavaScript) Axios Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-carbon-footprint-app/images/code-snippet.png)

For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options. We are going to copy the `(JavaScript) Axios` ones, as you can see above.

Let's set up the API call now. In the `pages/api` directory, create a file named `calculate.js` and use the code snippet as follows:

```jsx
// In pages/api/calculate.js:
import axios from 'axios';

export default function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel',
		params: {distance: req.query.distance, vehicle: req.query.vehicle},
		headers: {
			'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
			'x-rapidapi-key': NEXT_PUBLIC_RAPIDAPI_KEY
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
```

We have specified the parameters `req.query.distance` and `req.query.vehicle`. `req.query` is an object in Next.js that holds the input parameters coming from our client-side.

### → STEP #4

Now we need to create a function `calculateFootprint` in the `pages/index.js` file to send a request to our API at `http://localhost:3000/api/calculate`.

The search button will trigger this function, which will make a GET request to our API. Let's make these changes to the index file.

```jsx
import { useState } from "react";
import axios from 'axios';

export default function Home() {
  const [vehicle, setVehicle] = useState("SmallPetrolCar");
  const [distance, setDistance] = useState(null);
  const [response, setResponse] = useState(null);

  // Sends the API request te get the footprint.
  const calculateFootprint = async () => {
    try {
      const res = await axios.get("api/calculate/", {
        params: { vehicle, distance },
      });
      const { data } = res;
      setResponse(data); // Storing response in the response state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl font-bold text-active mt-20">Carbon Footprint</h1>
      <h2 className="text-primary text-2xl font-light mt-5">
        Calculate the Carbon Footprint of your travel.
      </h2>
      <form
        className="sm:mx-auto mt-20 md:max-w-3xl justify-center flex flex-col w-full sm:flex"
        onSubmit={(e) => {
          calculateFootprint(); // Trigger API call on submit
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="sm:w-3/5 w-full">
            <label className="block text-primary text-sm">Vehicle</label>
            <select
              className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
              autoFocus={true}
              required
              onChange={(e) => {
                setVehicle(e.target.value);
              }}
            >
              {[
                "SmallPetrolCar",
                "MediumPetrolCar",
                "LargePetrolCar",
                "SmallDieselCar",
                "MediumDieselCar",
                "LargeDieselCar",
                "MediumHybridCar",
                "LargeHybridCar",
                "MediumLPGCar",
                "LargeLPGCar",
                "MediumCNGCar",
                "LargeCNGCar",
                "SmallPetrolVan",
                "LargePetrolVan",
                "SmallDielselVan",
                "MediumDielselVan",
                "LargeDielselVan",
                "LPGVan",
                "CNGVan",
                "SmallMotorBike",
                "MediumMotorBike",
                "LargeMotorBike",
              ].map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div className="sm:w-1/3 w-full">
            <label className="block text-primary text-sm">Distance (KM)</label>
            <input
              className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
              type="number"
              required
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
        </div>
        <button
          className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
          type="submit"
        >
          Get Footprint
        </button>
      </form>
      </div>
    </div>
  );
}
```

We use the `onSubmit` handler of the form to trigger the `calculateFootprint` function on submitting the form through the enter key or submit button.

### → FINAL STEP

Finally, it is time to display the response returned by the API. We will show a div if our `response state` is not null. Here is the final code of our app:

```jsx
import { useState } from "react";
import axios from 'axios';

export default function Home() {
  const [vehicle, setVehicle] = useState("SmallPetrolCar");
  const [distance, setDistance] = useState(null);
  const [response, setResponse] = useState(null);

  // Sends the API request te get the footprint.
  const calculateFootprint = async () => {
    try {
      const res = await axios.get("api/calculate/", {
        params: { vehicle, distance },
      });
      const { data } = res;
      setResponse(data); // Storing response in the response state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl font-bold text-active mt-20">Carbon Footprint</h1>
      <h2 className="text-primary text-2xl font-light mt-5">
        Calculate the Carbon Footprint of your travel.
      </h2>
      <form
        className="sm:mx-auto mt-20 md:max-w-3xl justify-center flex flex-col w-full sm:flex"
        onSubmit={(e) => {
          calculateFootprint(); // Trigger API call on submit
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="sm:w-3/5 w-full">
            <label className="block text-primary text-sm">Vehicle</label>
            <select
              className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
              autoFocus={true}
              required
              onChange={(e) => {
                setVehicle(e.target.value);
              }}
            >
              {[
                "SmallPetrolCar",
                "MediumPetrolCar",
                "LargePetrolCar",
                "SmallDieselCar",
                "MediumDieselCar",
                "LargeDieselCar",
                "MediumHybridCar",
                "LargeHybridCar",
                "MediumLPGCar",
                "LargeLPGCar",
                "MediumCNGCar",
                "LargeCNGCar",
                "SmallPetrolVan",
                "LargePetrolVan",
                "SmallDielselVan",
                "MediumDielselVan",
                "LargeDielselVan",
                "LPGVan",
                "CNGVan",
                "SmallMotorBike",
                "MediumMotorBike",
                "LargeMotorBike",
              ].map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div className="sm:w-1/3 w-full">
            <label className="block text-primary text-sm">Distance (KM)</label>
            <input
              className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
              type="number"
              required
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
        </div>
        <button
          className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
          type="submit"
        >
          Get Footprint
        </button>
      </form>
      {response && (
        <div className="mt-10">
          <span className="text-2xl text-primary">
            The carbon footprint is{" "}
            <span className="font-bold">{response.carbonEquivalent}</span> KGs
          </span>
        </div>
      )}
      </div>
    </div>
  );
}
```

As you can see, our app is working as intended:

![Next.JS App built using CarbonFootprint API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-carbon-footprint-app/images/final.png)

## Wrap Up

All done. You can also check the deployed [Carbon Footprint App](https://rapidapi-example-carbon-footprint-app.vercel.app/) and find its code in the [RapidAPI Examples Repository](https://github.com/RapidAPI/DevRel-Examples-External/tree/main/carbon-footprint-app) on GitHub.
