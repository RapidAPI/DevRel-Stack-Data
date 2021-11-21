---
title: How to do Response Chaining using RapidAPI Client(PAW)?
description: Response Chaining allows you to use the data returned from one request to make further requests.
publishedDate: 2021-11-19T16:18:42.178Z
lastModifiedDate: 2021-11-19T16:18:42.178Z
authors:
    - ahmadBilal
category: api
tags:
    - paw
    - rapidapi-client
    - response-chaining
coverImage: ''
draft: false
---

<Lead>

Response Chaining allows you to use the data returned from one request to make further requests. [RapidAPI Client](https://RapidAPI.com/products/api-design?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) is a cross-platform fully-featured API developer tool that lets you easily parse data from previous responses and use it in your subsequent requests. Let's see how we can use it for chaining requests.

</Lead>

## What is Response Chaining?

Today, applications generally utilize more than one APIs for their requirements. Often in these applications, the response returned from one request is used to make another request to a different API or a different endpoint of the same API. This is called Response Chaining.

For example, let's say you want to get the ID of an object from a search endpoint, and in the subsequent request, you want to retrieve more details about it.

For testing such cases, you need an API tool that can manage the chaining of responses. RapidAPI and PAW joined hands to introduce [RapidAPI Client](https://RapidAPI.com/products/api-design?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel); which brings the features of PAW, a Mac-only tool to multiple platforms of Web, Windows, and Linux. It offers a complete end-to-end API tool for developers with features including Request Chaining.

## Getting Started

One of the best things about [RapidAPI Client](https://RapidAPI.com/products/api-design?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) is its intuitive UI. It is super easy to get started with it. Most other API tools require significant time to get used to, but with [RapidAPI Client](https://RapidAPI.com/products/api-design?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) it is pretty simple. Let's demonstrate how we can chain requests using it.

## → STEP #1: Log In to Web Client

For this guide, we will be using [RapidAPI Client](https://RapidAPI.com/products/api-design?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) for the web. First, click [here](https://rapidapi.com/products/api-design/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to navigate to its page and click on the **Get Started** button. You can use the same user account on Paw and RapidAPI. [Create an account](https://RapidAPI.com/auth/sign-up?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already.

## → STEP #2: Create Project

Once you log in, you will end up on your projects page, where you can go ahead and create a new project. It will prompt the project name and initialize a new project for you.

## → STEP #2: Specify and Send the First Request

Once you are in your project, you can create a new request by clicking on the **+** button in the left section. The left section is for managing requests and environments. The central section is where you can choose the type of request and URL of the endpoint, add headers, query parameters, and authentication.

I am going to make the first request to [Investing Cryptocurrency Markets](https://rapidapi.com/apidojo/api/investing-cryptocurrency-markets/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) at the `coins/search` endpoint. It returns a `pair_id` in response which I will use in our next request. This is what the first request and its response look like:

![Creating the First Request in RapidAPI Client](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/response-chaining/images/first-request.png)

As you can see on the right panel, we have a response. It contains the `pair_ID` for our input "Bitcoin". We are going to use it in the next request.

## → STEP #3: Create the Second Request

Now, I am going to create the second request. I will query the `coins/get-news` endpoint, which requires `pair_ID` as a parameter. After specifying the end-point, header, and basic parameters, the second request looks like this:

![Creating the Second Request](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/response-chaining/images/second-request.png)

## → STEP #4: Use the Response Value from the First Request

In the image above, you can see that the `pair_ID` parameter is empty. We want to use its dynamic value from the first response. To do so, right-click on the empty field and select `Response > Response Parsed Body`. Then select the first request, specify the response field as `data.pairs_attr[0].pair_ID`, and select JSON as the format.

![Using Value from the First Response](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/response-chaining/images/dynamic-value.png)

## → STEP #5: Use the Response Value from the First Request

Finally, we can go ahead and make the second request. Upon sending the second request, this is the response I receive:

![Response of the Second Request](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/response-chaining/images/second-response.png)

The request has fetched the news using a field we received in the first response. That's it, and we have successfully chained responses using the RapidAPI Client.
