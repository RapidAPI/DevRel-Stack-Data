---
title: Types of APIs
description: APIs are the backbone of software applications today. They connect applications of diverse architectures and help them communicate in order to perform CRUD operations. Let's take a look at the different types of APIs.
publishedDate: 2022-04-27T16:28:30.765Z
lastModifiedDate: 2022-04-27T16:28:30.765Z
authors:
    - ahmad-bilal
categories:
    - api
tags:
    - api
    - rest
    - graphql
    - soap
coverImage: ''
---

<Lead>
	In any application, the client needs to communicate with the server to work
	correctly. But how does this communication work? It is done through APIs,
	and there are many other instances where APIs come into action.
</Lead>

## What is an API?

The Application Programming Interface (API) is like a middle man connecting two sides. It is like a waiter who takes your order and brings you food, connecting the guests with the kitchen. So, it provides a channel that applications utilize to talk with each other. You put some information at one end, and the API takes that information and gets back with a result.

Today, there are countless APIs available on the world wide web that provide access to all kinds of data. You can use them to build web, desktop, mobile applications, CLI tools, extensions, and much more.

<Callout
	title="Get access to Thousands of APIs"
	linkText="Sign Up"
	linkHref="https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel"
>
	RapidAPI Hub is the world’s largest API hub where you can find all kinds of
	APIs according to your need.
</Callout>

## What are the different types of APIs?

We can categorize APIs in two main ways; their architecture and the type of access they allow.

## 1. By Architecture

Here are the different kinds of APIs in terms of architecture.

-   REST API
-   GraphQL API
-   Web API
-   Browser API

## REST API

REST is the most common type of API, and many people often confuse the term API with the REST API. REST APIs allow you to perform CRUD (create, read, update, and delete) operations between a client and a server. It connects your backend with your frontend so they can communicate with each other.

## GraphQL API

With GraphQL, you can specify what data you want and get exactly that in response, nothing less, nothing more. You have a single entry point, i.e., `/graphql`, that you use to get the data. They fix the issues of under-fetching and over-fetching and thus consume low bandwidth.

## SOAP API

SOAP API is another kind of web service that allows communication between client and server using the Simple Object Access Protocol (SOAP). The protocol is defined by the [W3C (World Wide Web Consortium)](https://www.w3.org/). SOAP APIs rely heavily on XML, and they are considered safer than REST APIs.

## Web API

When you are building a website, there are many Web APIs available that you can use. For example, the `Fetch API` allows you to get data from a server. The `DOM API` lets you manipulate the DOM elements. Both of these are web APIs. You can explore them further in our [interactive guides on web APIs](https://RapidAPI.com/guides/categories/web-apis).

## 2. By Type of Access

Here are the different kinds of APIs in terms of access.

-   Internal APIs.
-   Public APIs.
-   Partner APIs.
-   Composite APIs.

### Internal APIs

Also called private APIs, they are only accessible by internal systems and are hidden from external users. Only internal developers can access these APIs.

They are not meant for consumption outside of the company but rather for use across more internal development teams for better productivity and reuse of services.

### Public APIs

Public APIs are accessible to all the developers and other users. They are also called external APIs because external or third-party developers can access them.

They allow users to authenticate and authorize themselves with minimal restrictions. The registration may be in the form of an API Key or OAuth or be completely open. They are usually targeting external users to share different data or services. They are the most common type of APIs, [RapidAPI Hub](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) alone has over thirty thousand public APIs.

### Partner APIs

Partner APIs are exposed to and used by strategic business partners. They are not available to the public and require specific authorization to access them. In order to access partner APIs, there is an onboarding process with a particular workflow of validation.

### Composite APIs

A composite API is an API that combines multiple APIs into a single one for getting various kinds of data with a single request.

We can use composite APIs for various reasons, such as to make it easier for developers to use multiple services or to make it easier to manage multiple services.
