---
title: Best Practices for Securing API Keys
description: API keys are encrypted strings that allow APIs to authenticate applications. This guide will highlight some good practices of using API keys keeping security in mind.
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - practices
    - api
    - keys
publishedDate: 2022-03-16T20:53:04.094Z
lastModifiedDate: 2022-03-16T20:53:04.094Z
coverImage: ''
draft: false
---

<Lead>

API keys are encrypted strings that allow APIs to authenticate applications. They grant access to API calls and are used to keep track of the API usage. Therefore, it is crucial to use them securely.

</Lead>

## API Keys

You should always be aware of who is calling your APIs. Validating the clients of an API to identify if they are who they claim to be is called API authentication. Authentication allows an API to restrict access to its endpoints, which is essential for securing an API.

One way APIs control access is by using encrypted strings called keys. With API keys, you can verify the identity of each app or user and mitigate the risks of unauthorized access. Moreover, the keys help maintain a log and determine the extent of resources accessed.

For example, [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) (which hosts thousands of public APIs) generates secret keys for implementing API Authentication that look like this.

![Example of an API Key](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/practices-api-authentication/images/key.png)

## Why Secure API Keys?

API keys allow APIs to limit access to the API endpoints based on the requirements and implement rate and usage limits. If they are exposed, any unauthorized user can access the API through your account. So, let's take a look at a few best practices to keep in mind for securing the API keys.

## Best Practices

### Don't Embed in Code

One of the most common mistakes developers make is hardcoding the API keys in their applications. Later, they may push the code to a public GitHub repository where the key is exposed to everyone. Stack Overflow is full of questions in which the developers forget to remove API keys from the problem code. This allows anyone reading the question to use the exposed key to access the API.

### Store API Keys Securely

Instead of embedding them in code, use environment variable (`.env`) files or secrets to store API keys. Don't forget to add the `.env` files to `gitignore` before pushing your code to a GitHub repository so that the file never gets exposed.

### Regenerate Keys

Regenerate your API keys regularly and update the keys in your applications. Doing so will render the exposed key useless.

### Restrict access

One of the ways to avoid the dangers of key exposure is to restrict what the key can do. APIs should allow the end-users to limit the API key access to specific actions. They can create separate keys for separate actions like GitHub does with their tokens.

### Review Your Code

Finally, check your code manually for any keys or sensitive authentication information before submitting the code.

## Final Note

That's pretty much it. We hope that this guide will help you secure your API keys better.
