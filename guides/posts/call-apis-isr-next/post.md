---
title: Interactive Guide to Incremental Static Regeneration (ISR) for Fetching APIs in Next.js
description: Next.js extends React by offering the developers multiple ways of data fetching, and Incremental Static Regeneration (ISR) is one of them. Let's see how we can fetch data from APIs using ISR.
publishedDate: 2022-04-14T03:14:44.264Z
lastModifiedDate: 2022-04-14T03:14:44.264Z
authors:
    - ahmad-bilal
categories:
    - interactive
tags:
    - nextjs
    - api
    - incremental-static-generation
    - isr
coverImage: ''
---

<Lead>

Next.js allows you to fetch data in different ways depending on your requirement. These ways include Static Generation, Server Side Rendering, and Incremental Static Regeneration.

</Lead>

Let's see how we fetch data from APIs using Incremental Static Regeneration (ISR) in Next.js. But before we do that, let's go through a brief introduction to Next.js.

## Next.js

It is a web framework built on top of React.js. Next.js extends the capabilities of React.js by providing the developers features like server-side rendering, static site generation, incremental static generation, a working REST API, file-system-based routing, dynamic routing, etc. It provides better optimization, additional structure, and features to your application.

Since it extends React.js, you can start by writing all the React.js code and eventually add Next.js features to your application. You can make the application server-side rendered, so all the data has been pre-fetched before loading the web app in the browser. Afterward, you can also write a simple REST API without setting up a Node.js server.

## Incremental Static Regeneration (ISR)

Incremental Static Regeneration allows us to generate and update pages after the site is built. It can efficiently use static generation on a per-page basis without rebuilding the entire site. So, ISR combines the benefits of server-side rendering (SSR) with static site generation (SSG). With ISR, you can generate a static page and define an interval after which the page will be rebuilt.

### How to Use ISR?

You can use ISR by adding the `revalidate` property to `getStaticProps` function. It looks like this in code:

```js
export async function getStaticProps() {
	// API Call to get current time
	const res = await fetch('https://worldtimeapi.org/api/ip');
	const time = await res.json();

	return {
		props: {
			time
		},
		// Regenerate the page after 5 seconds
		revalidate: 5
	};
}
```

The `revalidate` property specifies a time interval and instructs `Next` to rebuild the page if a request comes after that interval. By doing so, it can fetch the new changes on a static page. In the code above, we have a static page that fetches time from an API at build time. `revalidate: 5` sets it to rebuild if a request comes after five seconds. Here is how it will work:

-   Initially, when you load the page, it will show the old time.

-   If you reload the page after 10 seconds, it will trigger the page rebuild and fetch the API. However, since the page is static, it will still show the old time.

-   Finally, when you reload again, it will show the new page with the latest time.

Try the interactive component below to see this in action.

<LearnNext ISR />

### On Demand Revalidation

This is a new feature of ISR where instead of waiting for an interval, you can generate static pages on-demand. Imagine an E-commerce website with `10,000` pages. You can generate 1000 pages on build time and set other pages to be built on demand. So, when a user visits a non-generated page, the server will show a fallback version (loading state) while building the required page in the background. Once it is done, the server will show the new page.

This feature allows you to choose which pages are generated on build time and which are generated on demand. It is extra helpful because ISR only builds the required pages, not the whole site.

## Wrap Up

Incremental Static Regeneration (ISR) presents a hybrid alternative to SSR and SSG. It is a popular feature of Next.js, and we hope this guide helped you understand how it works.
