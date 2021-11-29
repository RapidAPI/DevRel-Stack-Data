---
title: Introduction to APIs
description: APIs are used to communicate between two architectures in order to perform CRUD operations. Let's take a deeper look at it.
publishedDate: 2021-10-06T16:28:30.765Z
lastModifiedDate: 2021-10-06T16:28:30.765Z
authors:
    - saad
categories:
    - api
tags:
    - api
coverImage: ''
---

<Lead>
	In a web application, the server and the client codebase are autonomous. But
	the client needs to communicate with the server to work correctly. But how
	does this communication work? It is done through APIs, and there are many
	other instances where APIs come into action.
</Lead>

## What is an API?

The Application Programming Interface (API) is like a middle man, 2connecting two sides; a waiter takes your order and brings you food. It is a channel that applications utilize to talk with each other. You put some information at one end, the API takes that information and gets back with a result.

Many different types of APIs exist. You can use them to build web, desktop, mobile applications, CLI tools, extensions, and much more.

Here are different types of APIs that are available to use:

-   REST API
-   GraphQL API
-   Web API
-   Browser API

## REST API

This is the most common type of API, and many people often confuse the term API with the REST API. REST APIs allow you to perform CRUD (create, read, update, and delete) operations between a client and a server. It connects your backend with your frontend so they can communicate with each other.

## GraphQL API

With GraphQL, you get precisely the data you request. No more, no else. You have a single entry point, i.e., /graphql, that you use to get the data. This fixes the issues of under-fetching and over-fetching and thus consumes low bandwidth.

## Web API

When you are building a website, there are many Web APIs available that you can use. The fetch API allows you to get data from a server. The DOM API lets you manipulate the DOM elements. Both of these are web APIs.

## Browser API

This API exists to let you communicate with browsers. It is often used to build browser extensions. It provides different functions that you use to perform specific actions. For instance, if you are developing an extension that zooms into the page, you may use the `setZoom` function of the browser API to manipulate the zoom settings.
