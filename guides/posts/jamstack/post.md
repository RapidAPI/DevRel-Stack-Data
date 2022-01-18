---
title: What is Jamstack?
description: It is a modern web development architecture based on JavaScript, APIs, and Markup. In this piece, we are going to look at Jamstack and what it is comprised of.
publishedDate: 2021-10-11T20:53:04.094Z
lastModifiedDate: 2021-10-11T20:53:04.094Z
authors:
    - saad
categories:
    - api
tags:
    - jamstack
coverImage: ''
---

<Lead>

When developing an application, the first step often involves choosing a technology stack. There are a lot of stacks from which you can select: MERNstack, MEANstack, LAMP, Jamstack, etc. Over the years, [Jamstack](https://jamstack.org/) is becoming more and more popular, and developers have started to adopt it to build entire applications.

</Lead>

Let’s take a look at what it is and why you should use it.

## Jamstack

It is a modern web development architecture based on JavaScript, APIs, and Markup. Jamstack is not made of a particular technology; and instead, it is a concept that a website can be delivered statically but provides dynamic content. Jamstack benefits from the principles of pre-rendering and decoupling that make your websites faster, more secure, and easier to scale.

Let’s take a look at the parts that make Jamstack.

### JavaScript

To develop the static Jamstack-based website, you can use any static site generator: [Gatsby](https://www.gatsbyjs.com/), [Hugo](https://gohugo.io/), [Eleventy](https://www.11ty.dev/), [Next.js](https://nextjs.org/), etc. You [pre-render](https://jamstack.org/glossary/pre-render/) the entire frontend into highly optimized static pages and assets during the build process. These pages can then be served through CDN, thus reducing the cost, complexity, and risk of dynamic servers.

### APIs

The Application Programming Interface (API) might be the most critical part of the Jamstack. It makes your web applications dynamic. Your application will request services from some other provider by making HTTP requests to an API using JavaScript. The service then sends back a response to your API request, and you display the results.

You can use as many APIs as you need in your Jamstack application. For instance, you are building an online e-commerce store with Jamstack. You can use Firebase Authentication API to sign up and sign in, stripe API to allow your users to purchase online, and Cloudinary API to store media content.

APIs can also be used to request data from the Internet. You can use APIs from [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to build Jamstack applications. For instance, you can develop a news application using Microsoft’s [Bing Search News](https://RapidAPI.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) API, or you can make a weather app using the [Open Weather Map](https://RapidAPI.com/community/api/open-weather-map/) API.

In the end, it all comes down to using APIs to improve your Jamstack site’s user experience.

### Markup

Markup is the first thing you are serving to a user, and it is either your handwritten HTML or the code that is eventually compiled down to HTML. The HTML is served statically, which means that it is not dynamically rendered from the server.
