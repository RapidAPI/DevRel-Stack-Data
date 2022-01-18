---
title: Introduction to REST API Principles
description: In this piece, let’s look at six ground principles of REST API laid down by Dr. Fielding (creator of REST API).
publishedDate: 2021-10-26T10:25:53.100Z
lastModifiedDate: 2021-10-26T10:25:53.100Z
authors:
    - saad
categories:
    - api
tags:
    - rest
    - principles
coverImage: ''
---

<Lead>

These days REST APIs are used everywhere for client-server communication. Developers are also adopting GraphQL, but a staggering amount still uses RESTful APIs regularly. REST API uses HTTP methods like GET, PUT, POST, and DELETE to request a server perform a particular action.

</Lead>

Let’s look at six ground principles of REST API laid down by Dr. Fielding _(creator of REST API)_.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub.
</Callout>

## Representational State Transfer (REST) API

Before we discuss the principle, here is a quick overview of a REST API: REST APIs allow you to perform CRUD (create, read, update, and delete) operations between a client and a server. It connects your backend with your frontend so they can communicate with each other.

## REST API Principles

## Stateless

The REST API is stateless meaning that every HTTP request happens in complete isolation. When the client makes the HTTP request, it will contain all the necessary information to make the server understand the requests sent from the client.

## Client-Server

Both the client and the server are completely autonomous in every way. Their communication will only happen using the REST API. This improves the portability of the codebase across multiple platforms and also helps with making the server scalable.

## Uniform Interface

REST API provides four interfaces to achieve uniformity.

-   Resource identification
-   Resource manipulation using representations
-   Self-descriptive messages
-   Hypermedia as the engine of application state

## Cacheable

REST API is often made cacheable to improve the performance of the application. It reduces the server load and the client uses the cached response if the user is requesting the same resources. It also dynamically decreases the load time of your application.

## Layered System

REST API relies on layered system architecture where applications are allowed to be more stable by limiting the component behavior. This helps with improving the application security as components in each layer cannot interact beyond the next immediate layer they are in.

## Code on Demand

This is not a required constraint. It allows a client code to be downloaded and to be used within the application.
