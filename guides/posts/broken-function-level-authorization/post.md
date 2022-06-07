---
title: ​​API Security - Broken Function Level Authorization Vulnerability
description: API vulnerabilities are a common thing that can break down your whole system if not treated. APIs may have vulnerabilities like broken authentication and authorization, insufficient logging and monitoring, lack of rate limiting, etc.
publishedDate: 2022-06-04T09:19:16.171Z
lastModifiedDate: 2022-06-04T09:19:16.171Z
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

According to the Open Web Application Security Project (OWASP), there are ten API vulnerabilities that should be taken care of when you build an API. In this guide, let’s look at the **Broken Function Level Authorization** vulnerability.

## Broken Function Level Authorization Vulnerability

Authorization flaws are often the result of improperly implemented or misconfigured authorization. Broken function-level authorization is when applications fail to limit sensitive functions to the authorized users.

Broken function level authorization (BFLA) is somewhat similar to broken object level authorization (BOLA), but it differs from BOLA as it targets API’s function instead of the objects that APIs interact with as in the case of BOLA.

## Broken Function Level Authorization’s Impact

The impact of this type of vulnerability is also very severe. It can cause information leakage, getting free items, creating or deleting accounts and even full account takeover of all the accounts.

BFLA is common with enterprise applications. Attacks occur at large scale when freely available tools are used more frequently.

The API is prone to attacks if a user can access administrator only endpoints or use sensitive functionalities by simply changing the value of a method (e.g. HTML) as its function-level authorizations are broken.

## Manifestation Ways of Broken Function Level Authorization

These issues can manifest itself in many ways as under:

### Deletion

Malicious users might modify or delete other users’ posts by using different HTTP methods. This occurs when an API doesn’t place restrictions to protect against these attacks.

### Becoming Admin

Any malicious user can simply add an admin header to their requests and gain access to this admin’s functionality pretending to be an admin. Thus, broken functional level authorization can be caused by both missing access control and the bad implementation of access control.

## How To Prevent It?

You can prevent broken function level authorization vulnerability in multiple ways.

-   You should implement granular, strict access control based on the user’s session and ensure that this access control is implemented consistently regardless of a request’s method, header, and URL parameters. This is one of the keys of preventing broken function level authorization.
-   You should deny all access by default. This will avoid broken function level authorization vulnerability from taking place.
-   By only allowing operations to users belonging to the appropriate group or role can also prevent BFLA from occurring.
-   Further, by properly designing and testing authorization you can prevent this. When you will not rely on the client to enforce admin access, then also these issues can be avoided.

<Callout
	title="Get access to Thousands of APIs"
	linkText="Sign Up"
	linkHref="https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel"
>
	RapidAPI Hub is the world's largest API hub where you can find all kinds of
	APIs according to your need.
</Callout>
