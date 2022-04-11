---
title: What is Battery Status API?
description: It is another web API designed to help developers access the power information of their user's devices. Let's take a look at it and see how it works.
publishedDate: 2022-03-21T02:53:28.085Z
lastModifiedDate: 2022-03-21T02:53:28.085Z
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - battery-status-api
    - battery-status
    - api
coverImage: ''
---

<Lead>

Laptops have become extremely popular due to their high-end performance, mobility, and capacity to run on battery. These devices run software applications and web apps that are often specifically tailored to increase or decrease the app's performance based on the battery level. Such web apps need a communication channel with the operating system to get the power information.

</Lead>

Since a web app runs on a browser, it is exposed to multiple web APIs that perform different functions. One such API is the Battery Status API which provides the user's battery information.

## Battery Status API

It is another web API designed to help developers access the power information of their user's devices. The developers can get information about the user's battery charge level and perform relevant operations accordingly, for instance, for saving all the user work in case of low battery stats.

Another use of Battery Status API is when dealing with WebSockets. A full-duplex connection requires constant use of system memory. Since it is always running in the background, the battery can deplete quickly. So with the Battery Status API, you can stop the connection for some time when the battery hits a certain level.

## Usage

Let's quickly look at how you can use this API in your websites.

### → STEP #1

Create a directory on your computer and open it in your preferred code editor. Once you are done, create an HTML file called `index.html` inside this directory. Now write a basic HTML boilerplate. I have also provided it below that you can copy and paste.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Battery Status API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #2

Now create a `Battery Information` button and attach a function on the button's `onclick` event handler.

```html
<button onclick="getBatteryInfo()">Battery Information</button>
```

### → STEP #3

Now write this `getBatteryInfo` function inside the script tag.

```html
<script>
	function getBatteryInfo() {
		navigator
			.getBattery()
			.then(battery => {
				console.log(battery);
			})
			.catch(err => console.log(err));
	}
</script>
```

Now run this file, click on the `Battery Information` button, and open the console. There you will find all the battery-related information that you will receive from the Battery Status API.
