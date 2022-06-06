---
title: How to get Longitude and Latitude from an Address?
description: Geocoding refers to the process of converting any given address into latitude and longitude coordinates. Let's see how we can do this using an API from RapidAPI Hub.
publishedDate: 2022-06-03T18:41:43.732Z
lastModifiedDate: 2022-06-03T18:41:43.732Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - geocoding
    - longitude
    - latitude
    - address
coverImage: ''
draft: false
---

<Lead>

Geocoding refers to the process of converting any given address into latitude and longitude coordinates. Let's see how we can do this using an API from RapidAPI Hub.

</Lead>

## Geocoding

Geocoding is the process of transforming the way we express an address. For example, the address "1600 Amphitheatre Parkway, Mountain View, CA" translates to longitude: -122.08452402711126 and latitude: 37.42197601004595.

It covers the following two techniques:

-   **Geocoding**: Converting physical addresses into longitude and latitude coordinates.

-   **Reverse Geocoding**: Converting longitude and latitude coordinates into physical addresses.

### Why is it needed?

We are aware of physical addresses as a way to express location. These are human-readable addresses, but they are not ideal for machine processing. For example, we can't use "Golden Gate Bridge, Golden Gate Brg, San Francisco, CA, 94129, United States of America" as a key to store a location in a database. We need coordinates to do that.

Most applications use Map APIs to implement location-related features. These APIs require longitude and latitude coordinates to function. So, these APIs either offer geocoding features, or we need to use some other API for geocoding.

## Geocoding using an API

Let's see how we can convert a physical human-readable address into longitude and latitude. We need a geocoding API for this purpose, so let's find one.

Head over to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Geocoding" in the search section.

<Callout
	title="Get access to Thousands of APIs"
	linkText="Sign Up"
	linkHref="https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel"
>
	RapidAPI Hub is the world’s largest API hub where you can find all kinds of
	APIs according to your need.
</Callout>

You will see that we have a bunch of options for Geocoding APIs. For our app, I will use [Latitude Longitude API](https://rapidapi.com/apishub/api/address-from-to-latitude-longitude/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel).

It offers two endpoints, one for geocoding and one for reverse geocoding. To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to the API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/geocoding/images/subscribe.png)

Once you click the button, you will be redirected to the pricing page, which will show the subscription packages for the API. The free plan allows up to 100 requests per month, so we will subscribe to the free plan for this guide.

### Testing the API

Once subscribed, you will be back on the **Endpoints** page. Click on the **Address to Coordinates** endpoint. Enter "Golden Gate Bridge" in the **Address** field under the required parameters section. Click the **Test Endpoint** button.

![Test the API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/geocoding/images/test.png)

You will get the following response:

```json
{
	"Results": [
		{
			"Relevance": 1,
			"longitude": -122.47846999999996,
			"latitude": 37.81914000000006,
			"address": "Golden Gate Bridge, Golden Gate Brg, San Francisco, CA, 94129, United States of America",
			"street": "Golden Gate Brg",
			"city": "San Francisco",
			"subregion": "City and County of San Francisco",
			"country": "United States of America",
			"postalcode": "94129"
		},
		{
			"Relevance": 1,
			"longitude": 120.84068000000002,
			"latitude": 24.252490000000023,
			"address": "Golden Gate Bridge, Tai Chang Vil., Dongshi District, Taichung City, 423, Taiwan",
			"city": "Dongshi District",
			"region": "Tai Chang Vil.",
			"country": "Taiwan",
			"postalcode": "423"
		},
		{
			"Relevance": 1,
			"longitude": 120.83581000000004,
			"latitude": 24.219630000000052,
			"address": "Golden Gate Bridge, 31 111巷 城興街, Xia Cheng Vil., Dongshi District, Taichung City, 423, Taiwan",
			"addressnumber": "31",
			"street": "111巷 城興街",
			"city": "Dongshi District",
			"region": "Xia Cheng Vil.",
			"country": "Taiwan",
			"postalcode": "423"
		}
	]
}
```

As you can see, the API gives us Coordinates of all the addresses that match the query.

### Integrating the API

In a similar fashion, you can use the other endpoint for reverse geocoding. For easy integration, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) automatically generates snippets in multiple languages and options, for example, JavaScript with Axios. You can use the snippet to integrate the API into your application, and you will be good to go.

## Wrap Up

If your application relies on location-related data, geocoding is an integral part of its function. We hope that this guide helped you understand the full particulars of geocoding.
