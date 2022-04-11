---
title: Interactive Guide to Battery Status API
description: It is another web API designed to help developers access the power information of their user's devices. Let's take a deep look at what this API is and how you can use it in your web applications.
publishedDate: 2022-03-28T10:41:42.086Z
lastModifiedDate: 2022-03-28T10:41:42.086Z
authors:
    - saad
categories:
    - interactive
    - web-apis
tags:
    - battery-status-api
    - learn-battery-status-api
    - battery-staus
    - api
coverImage: ''
---

<Lead>

APIs are an essential part of every product you develop, whether web-based, mobile-based, or desktop-based. They act as a bridge between two or more entities and let you communicate between devices, browsers, servers, and more.

</Lead>

There are several types of APIs. The REST APIs are used in a client-server architecture; web APIs help you access functionalities via your browser, GraphQL APIs help you precisely query the right amount of data, etc.

Since APIs cover such a vast ground, they also help you manage the performance of your applications. For instance, the battery status API provides you battery details of your client's computer so you can increase or decrease your website's performance accordingly. In this piece, we will learn about this API and look at how we can use it.

## Battery Status API

It is another web API designed to help developers access the power information of their user's devices. The developers can get information about the user's battery charge level and perform relevant operations accordingly, for instance, for saving all the user work in case of low battery stats. Depending on the client's device power level, they can also limit their site's resource utilization or improve the performance.

A full-duplex connection requires constant use of system memory. So with the Battery Status API, you can stop the connection when the battery hits a certain level and remove it from the background.

## Interface

This API provides two interfaces that entangle with one another. Let's take a look at them.

### BatteryManager

This interface holds all the information related to the battery. For instance, information like whether it is charging or not, how long it takes to charge the battery back to 100%, how much time you have in seconds until the battery is completely depleted, your battery charge level, etc.

<LearnBatteryStatusApi showBatteryStats />

### navigator.getBattery()

This method returns a promise that is an instance of the BatteryManager interface. It also contains events that you can listen to for performing different actions.

## Usage

We will do it in a bunch of steps, so it is easy to follow along.

### → STEP #1

We need to set up a project. For this, create a folder on your computer and open it in your preferred code editor.

### → STEP #2

Once you are done, create `index.html` in your project directory and write down the basic HTML boilerplate code inside it. I have also provided the code below if you quickly want to copy-paste it.

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

### → STEP #3

Create a button that, when clicked, log the battery details in the console.

```html
<button onclick="getBatteryStats()">Battery Stats</button>
```

### → STEP #4

Now create `getBatteryStats` function inside the script tag.

```html
<script>
	const getBatteryStats = async () => {
		try {
			const battery = await navigator.getBattery();
			console.log(battery);
		} catch (err) {
			console.log(err);
		}
	};
</script>
```

After this, when you click on the `Battery Stats` button, it will log the details in the console.

### → STEP #5

As mentioned earlier, the `getBattery()` interface also provides events that you can listen to for executing code. One of those events is the `chargingchange` event tells you whether the client's computer is plugged in or running on battery.

<LearnBatteryStatusApi showChargingStatus />

You can also execute some code when the client's battery level drops. For this, you will have to listen to the `levelchange` event listener. It will run every time the battery decreases a level or increases.

<LearnBatteryStatusApi showBatteryLevel />

## Support

This API is supported across Chrome, Edge, and Opera on desktop. Firefox and Safari do not currently provide support for it.
