---
title: Best Practices for Naming API Endpoints
description: How you name the API endpoints plays a major role because developers interact with your APIs through these endpoints.
publishedDate: 2022-01-04T19:10:30.765Z
lastModifiedDate: 2022-01-04T19:10:30.765Z
authors:
    - ahmadBilal
categories:
    - best-practices
tags:
    - api
    - endpoints
    - best
    - practices
coverImage: ''
draft: false
---

<Lead>

API endpoints are URLs used to access your API. RESTful APIs have a base URL combined with a name to access the API endpoints. The base URL stays the same while the name changes for each endpoint.

</Lead>

For example, the following are some endpoints of a Recipe API on RapidAPI Hub.

-   `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search`

-   `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients`

-   `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients'`

Notice how the last part of the URL changes with each endpoint while the rest remains the same. These are the names of endpoints, and it is important to name them correctly.

## Why Does it Matter?

At the end of the day, an API's purpose is to deliver information; and endpoints are the gateways for this information. A developer can not use your API if your endpoints are confusing.

Moreover, most developers prefer to use an API before adopting it, which often means testing an endpoint to see the response. Inconsistent naming may force them to choose another API.

## Best Practices

Here are some best practices you can apply while naming API endpoints.

### Avoid Being Too technical

It is easy to get carried away in technical jargon while explaining an endpoint, but you may end up with complex names. It is best to choose the simplest and most commonly used words as endpoint names to allow the users to guess their functionality. Leave the technical details for the documentation.

### Use Nouns

Let's say an endpoint returns all the posts of a user. You might be tempted to name the endpoint as a verb like `getPosts`, however, this is generally considered a bad practice.

The function being performed should be specified by the HTTP Request method (GET, POST, DELETE, etc.) only. Therefore it is better to use simple common nouns like:

`https://example.rapidapi.com/recipes` instead of `https://example.rapidapi.com/recipes`.

### Action Verbs

Using verbs like get, post, delete, etc., is not advised because the HTTP request methods should specify them. However, you can use verbs to describe specific actions on an entity.

For example: `https://example.rapidapi.com/user/authenticate`

### Lowercase Letters

Endpoint URLs are case-sensitive. Therefore, use lower case names consistently to avoid confusion.

### No Shortened Names

Shortened or abridged names do more harm than good as they can be highly confusing to others. It is better to use the complete form instead.

For example, prefer `https://example.rapidapi.com/user/first-name` instead of `https://example.rapidapi.com/usr/fn`

### Avoid Special Characters

Special characters are entirely unnecessary for endpoint names. Moreover, it is better to avoid using unsafe characters like brackets, spaces, and pipes.

### Adjectives

Adjectives do not belong in an endpoint name, and they should only be defined using the endpoint parameters.

For example, Instead of `https://example.rapidapi.com/recent-posts`, specify `recent` as the endpoint parameter.

## Wrap Up

That's pretty much it. We hope some of these best practices will help you improve your API's Developer Experience.
