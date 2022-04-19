---
title: Interactive Guide to Geolocation API
description:
    This web API returns the geographical latitudes and longitudes and the
    accuracy to which it is correct. It utilizes the device’s GPS chip to get
    location. In this piece, let's take a look at what it is and how you can use
    it in your websites.
publishedDate: 2022-04-18T09:08:41.175Z
lastModifiedDate: 2022-04-18T09:08:41.175Z
authors:
    - saad
categories:
    - web-apis
    - interactive
tags:
    - geolocation-api
    - web-api
    - api
coverImage: ''
---

<Lead>

Having access to your user’s location can be quite valuable. If you embed this feature into your website, you can utilize your user’s location data and perform certain operations. For instance, you can provide appropriate discounts on your e-commerce store based on your user’s location. You can also show your users tailored content based on their current location.

</Lead>

There are different ways you can get the location of your customers. There are several paid APIs available to help you get the location of your customers. The Geolocation web API may help you. Let’s take a deeper look into this API.

## Geolocation API

This web API returns the geographical latitudes and longitudes and the accuracy to which it is correct. It utilizes the device’s GPS chip to get location. If the chip is not present, it uses the cellular triangulation method to get the coordinates. The accuracy may vary in this case along with other factors.

The Geolocation API requires the user to explicitly permit the website to enable location services. The permission can later be overridden if the user desires.

The API provides three methods. Let’s briefly look at each of them.

### getCurrentPosition()

As the name suggests, this method provides the user's current location data. It takes three parameters, among which two are optional.

The first is a callback function that will execute once the API has the location. It will take a single location object as a parameter.
The second callback function is optional, but it is used to handle the error.
The third parameter is also optional, and it is an object that defines options for the API.

### watchPosition()

This method registers the device location and then executes the callback function whenever the position changes with respect to the original position.

### clearWatch()

This method unregisters the effect of `watchPosition()` method.

## Usage

Let’s look at how you can use this API to store credentials.

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Geolocation API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Now create a button that will get the current user location. Ensure that you attach an `onclick` event handler to this button.

```html
<button onclick="getLocation()">Get location</button>
```

### → STEP #3

Now inside the `script` tag, write a `getLocation` function that will call the Geolocation API. In the end, the code will look like this:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Geolocation API</title>
	</head>
	<body>
		<button onclick="getLocation()">Get location</button>
		<script>
			const getLocation = () => {
				navigator.geolocation.getCurrentPosition(
					position => {
						const coord = position.coords;
						console.log(coord.accuracy);
						console.log(coord.latitude);
						console.log(coord.longitude);
					},
					err => {
						console.log(`Error: ${error.message}`);
					},
					{
						enableHighAccuracy: true,
						timeout: 5000,
						maximumAge: 0
					}
				);
			};
		</script>
	</body>
</html>
```

Now run this file and click on the `Get location` button. Afterward, open the browser console. You will find out that the latitudes, longitudes, and accuracy have been logged there.

<LearnGeolocationAPI />

## Support

The Geolocation API is supported across all major internet browsers, including Chrome, Firefox, and Safari. Although, for security reasons, your site would need an SSL certificate to use this web API.
