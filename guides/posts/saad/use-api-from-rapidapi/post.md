---
title: How to use APIs from RapidAPI Hub?
slug: use-api-from-rapidapi
description: The APIs are a crucial part of web development. You heavily rely on them to get the required resource from the Internet.
publishedDate: 2021-10-11T20:53:04.094Z
lastModifiedDate: 2021-10-11T20:53:04.094Z
authors:
    - saad
category: api
tags:
    - rapidapi
    - api
coverImage: ''
draft: false
---

<Lead>
The APIs are a crucial part of web development. You heavily rely on them to get the required resource from the Internet. But it often becomes difficult to find an API that is perfect for your need. There are some repositories on the Internet, but they only have listed down APIs and not provided a way to use them.
</Lead>

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) is the world’s largest API hub that provides over 30,000 APIs to its users. It is simple and provides all types of APIs ranging from data to weather to payments APIs. Everything is present in one place.

## Using An API From RapidAPI

Let’s look at how you can get your desired API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel).

### STEP #1

If you are new to the website, the first thing you would have to do is sign up on RapidAPI Hub. For this, you can click [here](https://RapidAPI.com/auth/sign-up?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel), or you can open RapidAPI’s [website](https://RapidAPI.com/?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) and click on the Sign Up button at the top right corner.

![RapidAPI Sign Up Page](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9375cbac274a15059e98e43d39839408e79db5e6/guides/posts/saad/use-api-from-rapidapi/images/sign-up.png)

You can either create a new account or sign up using your Google, GitHub, or Facebook account. I am going to use my GitHub account to sign up.

### STEP #2

Once you are signed up, you will see a welcome message from RapidAPI Hub.

![RapidAPI Hub](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9375cbac274a15059e98e43d39839408e79db5e6/guides/posts/saad/use-api-from-rapidapi/images/rapidapi-hub.png)

Here you have categories in the left sidebar, a search box at the top, and some recommended APIs. Let’s search for weather in the search box.

### STEP #3

You will see a lot of different APIs as a search result. Let’s select the [Open Weather Map](https://RapidAPI.com/community/api/open-weather-map/?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) API for this example. Now click on Subscribe to Test.

![API Subscription](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9375cbac274a15059e98e43d39839408e79db5e6/guides/posts/saad/use-api-from-rapidapi/images/subscribe.jpg)

Once clicked, it will take you to another page. Here you would have to select a usage plan. Let’s choose the basic plan that is also free. After this, go back to the `Endpoints` page.

### STEP #4

This page is divided into three sections: The leftmost part shows different endpoints, the middle one where you can set options related to the API, and the right part where you can see different code examples of how to use the API.

If you scroll down in the middle part, you will see an option called `X-RapidAPI-Key`. It is the API key that you would need to use any API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel). Make sure that it is secure.

![RapidAPI API Key](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9375cbac274a15059e98e43d39839408e79db5e6/guides/posts/saad/use-api-from-rapidapi/images/api-key.jpg)

Now select the endpoint you need from the left sidebar and the language you are using for your application from the right sidebar. Once selected, you will see the code you need to write to use the API. I am going to use the `(JavaScript) fetch` option.

![API Code Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/9375cbac274a15059e98e43d39839408e79db5e6/guides/posts/saad/use-api-from-rapidapi/images/code-snippet.jpg)

Copy this code and paste it into your application, and that’s it. You have successfully integrated the Open Weather Map API from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=guides.rapidapi.com&utm_medium=DevRel&utm_campaign=DevRel) Hub into your application.
