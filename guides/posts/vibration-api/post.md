---
title: Introduction To Vibration API
description: "The API lets you access the vibration mechanism of the supported device. You can use this API to vibrate the host device or execute a vibrational pattern. Let's briefly look at what it is and how you can use it."
authors:
    - saad
categories:
    - web-apis
tags:
    - vibration-api
publishedDate: 2022-03-14T06:43:50.124Z
lastModifiedDate: 2022-03-14T06:43:50.124Z
coverImage: ''
---

<Lead>

When developing websites, you often want to add some additional features that are limited to the mobile version of your site. They only show up when the client views your site on their cell phones. Among these features, one of the common ones is accessing the vibration hardware of the phone.

</Lead>

It can become difficult to access the hardware directly. Fortunately, there is an easier way to do it. We can consume the vibration API of the web APIs to make the user’s phone vibrate. Let’s look at this API.

## Vibration API

The API lets you access the vibration mechanism of the supported device. You can use this API to vibrate the host device or execute a vibrational pattern. This API provides the ability to access the vibrational motor, and if it does not exist, it simply does nothing. The API is supported across all major internet browsers except Safari.

The vibration API provides a vibrate method that takes a single parameter. It can be an integer or an array of integers. If it is the former, the device will vibrate for milliseconds passed as the parameter. But if you have given an array of integer values, it will generate an alternating pattern in which the device is vibrating and not vibrating.

## Usage

Let’s quickly look at how you can use this API in your websites.

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called index.html inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vibration API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Now create a vibrate button and attach a function on the button's `onclick` event handler.

```html
<button onclick="vibrateNow()">vibrate</button>
```

### → STEP #3

Now write this `vibrateNow` function inside the script tag.

```html
<script>
	function vibrateNow() {
		window.navigator.vibrate(200);
	}
</script>
```

Now test your website on a mobile device with a functional vibrational motor, and you will feel a vibrate that will last for 200 milliseconds when you click on the vibrate button.
