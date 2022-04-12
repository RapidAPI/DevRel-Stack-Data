---
title: Interactive Guide To Web Animation API
description: A Web API that provides you the options to create animations and manipulate them using plain JavaScript with no external library is the Web Animation API. In this piece, let's take a look at it and how you can use it in your websites.
publishedDate: 2021-12-06T06:57:49.955Z
lastModifiedDate: 2021-12-06T06:57:49.955Z
authors:
    - saad
categories:
    - interactive
    - web-apis
tags:
    - web-animation-api
coverImage: ''
draft: false
---

<Lead>

Adding animations to your website can make it even more impressive than it was before. Animations not only improve the user experience but also give your site a fresh look.

</Lead>

There are a few ways you can add animations to your sites. You can do it through CSS using transitions and animations, or you can do it inside your JavaScript. If you follow the latter approach, you would know how much power you can have over your animations.

If you don’t know how to implement animations using vanilla JavaScript, please read this piece since I will teach you how you can do it.

## What is the Web Animation API?

A Web API that provides you the options to create animations and manipulate them using plain JavaScript with no external library is the Web Animation API. It aims to implement the power of CSS performance and the benefits of JavaScript, and its syntax is similar to CSS keyframes.

The Web Animation API lets you time and synchronizes the presentation of a web page by allowing you to animate DOM elements. Let’s take a look at its models:

### Timing And Animation Models

There are two models attached to the Web Animation API. The first one is the timing model that ensures how long your animation will take. All animations have iterations, and it has to know where it starts and ends. How long the animation will occur, etc. And these durations then create timelines.

The next model is the animation, where you define what should happen during a timeline. Here you provide all the CSS properties that you want to execute at a particular timeframe in your animation.

In simpler terms, you need to provide the properties you want the Web Animation API to execute along with the animation timeline.

## Getting Started With Web Animation API

Let’s look at how you can start working with the Web Animation APIs. For this, create a folder and open it in your preferred code editor. I am using VSCode. Now create an HTML file called `index.html` in your project folder.

Create a basic HTML boilerplate. Now copy and paste the following code inside your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Web Animation API</title>
		<style>
			.container {
				display: flex;
				justify-content: space-around;
				align-items: center;
				height: 100vh;
			}

			#red-circle {
				background-color: red;
				width: 100px;
				height: 100px;
				border-radius: 50%;
				border: 1px solid #ffffff;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div id="red-circle"></div>
		</div>

		<script></script>
	</body>
</html>
```

## Using The API

The Web Animation API is simple to use. It gives you an `animate` method that lets you use this API. This method takes two parameters. One is an array of objects that contains different CSS properties that you want to animate. And the other parameter is the timeline object. You can use the Web Animation API to animate any DOM element.

The first thing you would need to do is get the DOM element. You can either do it through the element’s id or using `querySelector`. Afterward, all you need to do is add animations and a timeline to your animation using the `animate` method.

Let’s take a look at how you can do this.

### Animation Property

As mentioned above, the first parameter of the `animate` method is an array of objects that contains CSS properties. These properties animate together throughout your animation.

<LearnWebAnimation showAnimation />

### Timing Property

The next thing is the animation timeline object. It can take different options — for instance, duration, iteration, delay, etc. The `duration` is a required property since it tells your browser the duration of your animation, and without it, there is no animation. Its value is in milliseconds.

The `iterations` property tells your browser how many times you want your animation to play. It can be a numeric digit or Infinity in case you want your animation never to stop.

The `direction` property tells the browser whether the animation runs forwards, backward, or switches direction on each iteration.

The `delay` property decides the delay of the animation after it is being played, and its value is also in milliseconds, just like the duration property.

The `easing` property is the rate of the animation’s change over time.

<LearnWebAnimation showTimeline />

### Playback

You can control your animation’s playback using the Web Animation API. Earlier I mentioned that the Web Animation API provides you with the benefits of JavaScript, and you will find them here.

With this API, you can decide when your animation should start or when it should be paused. You can also reverse your animation and even cancel it entirely if needed. You can set event listeners to buttons where you pause, cancel, and reverse your animations.

<LearnWebAnimation showPlayback />

That’s all, folks! I hope this brief guide has provided you with enough knowledge that you can now use the Web Animation API in your projects.
