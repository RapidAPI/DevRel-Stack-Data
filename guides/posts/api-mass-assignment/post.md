---
title: A brief guide on API Mass Assignment Vulnerability
description: It is a severe API threat that arises when you save the request body as it is on the server instead of getting values from it one by one. In this piece, let's take a quick look at it.
publishedDate: 2022-05-24T02:53:28.085Z
lastModifiedDate: 2022-05-24T02:53:28.085Z
authors:
    - saad
categories:
    - api-security
    - api
tags:
    - api-mass-assignment
    - api
coverImage: ''
---

<Lead>

API vulnerabilities are a common thing that can break down your whole system if not patched. Hackers can leverage them to add additional code to your app or get access to your database. This can turn into a huge fiasco real quick. So it is always a good idea to put additional measures.

</Lead>

According to the Open Web Application Security Project (OWASP), there are ten API vulnerabilities that should be taken care of when you build an API. In this piece, let’s look at one of them.

## API Mass Assignment

It is a severe API threat that arises when you save the request body as it is on the server instead of getting values from it one by one. It allows the user to initialize or overwrite server-side variables that the application does not intend.

Generally, it is easy to spread an object to create its copy and save it in the database, but this practice should be avoided. It is because if someone figures out the request payload, they can send more key values that can alter their presence on the web application.

A more appropriate way to do it would be to create a new object on the server-side by extracting only the fields you need from the request body and saving that object.

## How To Prevent It?

You can prevent API mass assignment in multiple ways.

-   As described earlier, you should not explicitly bind incoming data and internet objects because the user can send more data than required.
-   Write a schema to define all the types and patterns you will accept in the request and then implement it on runtime.
-   You should set the read-only property to true for all the fields that can be retrieved from the API request body but should not be modified by the user.
-   You should also explicitly define the request body and query parameters you are expecting from an API request.
