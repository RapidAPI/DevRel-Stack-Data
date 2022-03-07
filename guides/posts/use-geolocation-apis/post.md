---
title: How to Get a Visitor's IP and Location Using an API?
description: Many applications like weather, maps, networking, and social media apps need to get their visitors' IP addresses and location data to function. These applications rely on IP and Geolocation APIs to do so, and this guide will show how you can use them in your projects.
publishedDate: 2022-03-03T08:44:15.446Z
lastModifiedDate: 2022-03-03T08:44:15.446Z
authors:
    - ahmad-bilal
categories:
    - api
tags:
    - geolocation
    - ip
    - api
coverImage: ''
---

<Lead>

Many applications like weather, maps, networking, and social media apps need to get their visitors' IP addresses and location data to function. These applications rely on IP and Geolocation APIs to do so, and this guide will show how you can use them in your projects.

</Lead>

## IP and Geolocation

Have you ever wondered how a website already knows your country, currency and language when you visit it? They do so by using one of the many IP and Geolocation APIs out there. These APIs identify the real-world geographic location of an internet-connected computer using its IP address. So, if you integrate these APIs in your application, they will get the geolocation data of your visitors.

## Use Cases

There are numerous use cases for IP Geolocation when you need to know where your audience is coming from. These include:

-   Displaying a different language based on location.
-   Restricting potentially dangerous IPs.
-   Implementing purchasing power parity based on the user's country.
-   Implementing geo-restrictions.
-   Showing the users their native currency and delivery information in an e-commerce application to enhance the user experience.
-   Pre-populating location-related input forms.

It is worth noting that IP addresses don't give the users' precise location, but they are accurate enough for regular uses like above.

## Using IP and Geolocation APIs

Let's jump in and see how we can use an API to get visitors' IP and location in our applications.

### Finding the API

Let’s find an IP Geolocation API first. [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of public APIs for use in your projects. So, head over to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "IP" or "Geolocation" in the search section.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about using RapidAPI Hub in this fun, interactive guide.
</Callout>

You will see that we have a lot of APIs to choose from. For our app, I am going to use the [IP Geo Location API](https://rapidapi.com/natkapral/api/ip-geo-location/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to IP Geolocation API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/use-geolocation-api/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. We are going to subscribe to the free plan for this guide.

Once subscribed, you will be back on the **Endpoints** page. In the central section, you should see a field named `x-rapidapi-key`. You can use this key to query the API now.

### Sending the API Request

Take a look at the two endpoints of the API. The **IP Lookup** endpoint takes any IP address and returns its geolocation data while the **Visitor Lookup** one gets the location data of the visitor(client). You can see these endpoints in the left pane of the image below.

![Endpoints of the API and JavaScript Code Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/use-geolocation-api/images/endpoints.png)

We will use the **Visitor Lookup** endpoint to get the IP and location of our application's visitors. We can use the automatically generated code snippets (you can see them in the image above) to formulate our API request. Here is what the request will look like in JavaScript code using Axios:

```js
import axios from 'axios';
async function getResponse() {
	const options = {
		method: 'GET',
		url: 'https://ip-geo-location.p.rapidapi.com/ip/check',
		params: {format: 'json'},
		headers: {
			'x-rapidapi-host': 'ip-geo-location.p.rapidapi.com',
			'x-rapidapi-key': YOUR_RAPIDAPI_KEY
		}
	};

	try {
		let response = await axios(options);
		console.log(response.data);
		// Do something with the response
	} catch (error) {
		console.error(error);
	}
}
```

You can also use Fetch to send the request, like this:

```js
async function getResponse() {
	const response = await fetch(
		'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
				'x-rapidapi-key': YOUR_RAPIDAPI_KEY
			}
		}
	);
	const data = await response.json();
	console.log(data);
}
```

Don't forget to replace `YOUR_RAPIDAPI_KEY` with your key in the `x-rapidapi-key` field. If you are using React, you can call this function in the `useEffect` hook to get the data whenever a visitor visits your application.

```js
useEffect(() => {
	getResponse(); // Get IP and Location data whenever the page (component) loads.
}, []);
```

### API Response

We are all set now. Try sending the request, and you will receive detailed information about IP and Location. In my case, it looks like this:

```json
{
	"ip": "13.228.169.5",
	"success": true,
	"type": "IPv4",
	"continent": "Asia",
	"continent_code": "AS",
	"country": "Singapore",
	"country_code": "SG",
	"country_flag": "https://cdn.ipwhois.io/flags/sg.svg",
	"country_capital": "Singapur",
	"country_phone": "+65",
	"country_neighbours": "",
	"region": "Central Singapore",
	"city": "Singapore",
	"latitude": 1.3553794,
	"longitude": 103.8677444,
	"asn": "AS16509",
	"org": "Amazon Data Services Singapore",
	"isp": "Amazon.com, Inc.",
	"timezone": "Asia/Singapore",
	"timezone_name": "Singapore Standard Time",
	"timezone_dstOffset": 0,
	"timezone_gmtOffset": 28800,
	"timezone_gmt": "GMT +8:00",
	"currency": "Singapore Dollar",
	"currency_code": "SGD",
	"currency_symbol": "$",
	"currency_rates": 1.361,
	"currency_plural": "Singapore dollars",
	"completed_requests": 1
}
```

## Wrap Up

That's all. Go ahead and add visitor tracking and geolocation features to your applications.
