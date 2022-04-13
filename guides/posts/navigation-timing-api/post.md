---
title: Interactive Guide To Navigation Timing API
description: "TThis API helps you analyze your site’s performance by providing you with a set of methods to accurately identify the performance problems with your site’s code or resources. Let's look at what this API is and how you can use it in your websites."
publishedDate: 2022-02-27T14:45:59.314Z
lastModifiedDate: 2022-02-27T14:45:59.314Z
authors:
    - saad
categories:
    - interactive
    - web-apis
tags:
    - navigation-timing-api
    - web-api
    - api
coverImage: ''
---

<Lead>

A website’s performance is crucial for its success. If the site is taking too much time to load, there is a high chance that no one will like to use it irrespective of the services it provides. Most of the time, assets play a vital role in degrading performance.

</Lead>

This opens a need for a feature in your website specifically designed to handle the site’s analytical data. This analytical data will help the developers understand the cause of their site’s downtime.

There are several web APIs available for you to use. One of them is tailored to help you improve your site’s performance. It’s called Navigation Timing API. Let’s look at what it is and how you can use it in this piece.

## Navigation Timing API

This API helps you analyze your site’s performance by providing you with a set of methods to accurately identify the performance problems with your site’s code or resources. Because it's a web API, it can help provide the user's timing information that a browser can provide.

The data collected by the API is then sent to the server for processing. The data can be used in the database for the maintainer. There are multiple use cases to this API, for instance, measuring the time it takes to unload a page, how long a piece of code takes to execute on the browser and more.

This API provides four interfaces. Two of them are depreciated, one is experimental, and the other one is still in use.

### Performance Interface

This interface is part of the High-Resolution Timing API and is enhanced by Navigation Timing API, which provides you with a web page's performance information.

### PerformanceNavigationTiming Interface

This interface provides methods and properties to store and retrieve metrics regarding the browser’s document navigation events.

## Usage

Let’s take a look at how you can use this API in your web applications:

### → STEP #1

You need to create a project. For this, create a folder on your computer and open it in your preferred code editor.

### → STEP #2

Once you are done, create a file called index.html in your project directory and add basic HTML boilerplate code inside it. I have also provided the code below if you quickly want to copy-paste it.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Navigation Timing API</title>
	</head>
	<body>
		<script></script>
	</body>
</html>
```

### → STEP #3

You can test how long it takes to execute a piece of code using the `performance` interface of the Navigation Timing API. For this, you need to start the timestamp, run some piece of code, create another time stamp and then find the difference.

<LearnNavigationTimingAPI showTestPerformance />

You can also use the `domComplete` property to get a timestamp representing the time value equal to the time immediately before the user agent sets the current document readiness to complete.

<LearnNavigationTimingAPI showDomComplete />

## Support

The Navigation Timing API is widely supported across all primary desktop and mobile internet browsers, including Chrome, Edge, Firefox, Opera, and Safari.
