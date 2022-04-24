---
title: Interactive Guide to Server-Side Rendering (SSR) for Fetching APIs in Next.js
description: Next.js extends React by offering the developers multiple ways of data fetching, and Server Side Rendering (SSR) is one of them. Let's see how we can fetch data from APIs using SSR.
publishedDate: 2022-04-22T03:14:44.264Z
lastModifiedDate: 2022-04-22T03:14:44.264Z
authors:
    - ahmad-bilal
categories:
    - interactive
tags:
    - nextjs
    - api
    - server-side-rendering
    - ssr
coverImage: ''
---

<Lead>

Next.js allows you to fetch data in different ways depending on your requirement. These ways include Static Generation, Server Side Rendering, and Incremental Static Regeneration.

</Lead>

Let's see how we fetch data from APIs using Server-Side Rendering (SSR) in Next.js. But before we do that, let's go through a brief introduction to Next.js.

## Next.js

It is a web framework built on top of React.js. Next.js extends the capabilities of React.js by providing the developers features like server-side rendering, static site generation, incremental static generation, a working REST API, file-system-based routing, dynamic routing, etc. It provides better optimization, additional structure, and features to your application.

Since it extends React.js, you can start by writing all the React.js code and eventually add Next.js features to your application. You can make the application server-side rendered, so all the data has been pre-fetched before loading the web app in the browser. Afterward, you can also write a simple REST API without setting up a Node.js server.

## Server-Side Rendering (SSR)

As the name suggests, SSR renders the page on the server before sending it to the browser. Unlike static generation, where the HTML is generated at build time, SSR generates the HTML on each request. When the user requests a page, the server fetches the data, pre-renders the page, and sends it to the user. It is helpful when your page frequently needs to get updated data from APIs, such as the current time.

Check out the following example, which fetches the current time, to see how SSR works in Next.js.

<LearnNext showSSR />

### How to Use SSR?

You can use SSR by exporting an `async` function called `getServerSideProps` on your page. The `getServerSideProps` function is called before the page is rendered. Once it has fetched the data, it returns the data to the page. This results in a delay before the page is rendered, as seen in the above interactive example.

Here is the code for an example page that fetches the latest time using SSR:

```js
function Page({time}) {
	// Render the fetched time
}

// Triggered on each request
export async function getServerSideProps() {
	// Fetching data from an API
	const res = await fetch('https://worldtimeapi.org/api/ip');
	const time = await res.json();

	// Pass the data to the page via props
	return {props: {time}};
}

export default Page;
```

So, Server Side Rendering (SSR) allows us to manage pages that need to fetch data on each request. However, it is slower than Client-Side Rendering because it gets the data before rendering the page. It is a popular feature of Next.js, and we hope this guide helped you understand how it works.
