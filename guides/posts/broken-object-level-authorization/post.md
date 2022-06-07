---
title: ​​API Security - Broken Object Level Authorization Vulnerability
description: API vulnerabilities are a common thing that can break down your whole system if not treated. APIs may have vulnerabilities like broken authentication and authorization, insufficient logging and monitoring, lack of rate limiting, etc.
publishedDate: 2022-06-05T15:48:10.026Z
lastModifiedDate: 2022-06-05T15:48:10.026Z
authors:
    - maham
categories:
    - api-security
tags:
    - api
    - api-security
coverImage: ''
---

<Lead>

API security is the process of protecting APIs from attacks. As APIs are very commonly used, they are prone to attackers. API vulnerabilities are a common thing that can break down your whole system if not treated. APIs may have vulnerabilities like broken authentication and authorization, insufficient logging and monitoring, lack of rate limiting, etc. Regularly testing APIs will help you to identify vulnerabilities and address them.

</Lead>

According to the Open Web Application Security Project (OWASP), there are ten API vulnerabilities that should be taken care of when you build an API. In this guide, let’s look at the **Broken Object Level Authorization** vulnerability.

## Broken Object Level Authorization Vulnerability

Broken Object Level Authorization (BOLA) is also known as Insecure Direct Object Reference (IDOR). It is one of the most severe and most common API vulnerabilities. Authorization flaws are often the result of improperly implemented or misconfigured authorization.

Broken object level authorization (BOLA) is somewhat similar to broken function level authorization (BFLA), but it differs from BFLA as it targets the objects that APIs interact with instead of the API’s function as in the case of BFLA.

Almost all APIs are vulnerable to BOLA. It happens when an application does not correctly confirm that the user performing the request has the required privileges to access a resource of another user.
Broken Object Level Authorization (BOLA) vulnerabilities must be identified during the code development process, through regular architecture reviews, code reviews, and evaluating API request logs as current security scanning tools can’t detect these vulnerabilities.

## Broken Object Level Authorization’s Impact

When an application includes a BOLA vulnerability, the application has a strong probability of exposing sensitive information or data to attackers. There are two types of broken object level authorizations and they are as follows:

### BOLA Type Related to User ID

In this type of BOLA, the API endpoints receive a user ID and access the user object based on this ID. Things get more complicated when one user is supposed to manage other users by design.

### BOLA Type Related to Object ID

In this type of BOLA, the API endpoint receives an ID of an object which is not a user object.
Lack of security control and human errors are the main reasons for having broken object level authorization (BOLA) vulnerabilities.

## How To Prevent It?

You can prevent broken object level authorization vulnerability in multiple ways.

-   You should extract the ID from an auth token rather than use the ID that has been sent from the client. This is one of the keys of preventing broken object level authorization.
-   You should always use an authorization mechanism to check if the logged in user has access to perform the requested action on the record in every function that uses an input from the client to access a record in the database. This will avoid broken object level authorization vulnerability from taking place.
-   By implementing a proper authorization mechanism that relies on the user policies and hierarchy can also prevent BOLA from occurring.
-   Further, by using random IDs that cannot be guessed very easily can surely avoid these issues from taking place.

<Callout
	title="Get access to Thousands of APIs"
	linkText="Sign Up"
	linkHref="https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel"
>
	RapidAPI Hub is the world's largest API hub where you can find all kinds of
	APIs according to your need.
</Callout>
