---
title: What’s the Difference between PUT vs PATCH?
description: PUT is a method of modifying resources where the client sends data that updates the entire resource. Unlike PUT, PATCH applies a partial update to the resource. Let's take a look at the differences between these two methods in this piece.
publishedDate: 2022-02-07T08:44:50.338Z
lastModifiedDate: 2022-02-07T08:44:50.338Z
authors:
    - saad
categories:
    - http
    - comparison
tags:
    - put
    - patch
    - put-vs-patch
coverImage: ''
---

<Lead>

When learning web development and HTTP specification, it is not unlikely to find yourself getting confused about the type of verb to use and when to use it. With most applications on the internet being [CRUD (create, read/retrieve, updates, delete)](https://RapidAPI.com/blog/api-glossary/crud/), developers must learn how to match HTTP verbs to these actions. Typically, the verbs and actions are matched as follows:

</Lead>

-   [POST](https://RapidAPI.com/blog/api-glossary/post/) – Create
-   GET – Read/Retrieve
-   PUT/[PATCH](https://RapidAPI.com/blog/api-glossary/patch/) – Update
-   DELETE – Delete

From this mapping, it is not surprising that most people think that PUT and PATCH are allies that do the same thing. However, the reality is far more complex, especially when it comes to overlapping functionality and other complications. Actually, PUT and PATCH might be doing the same thing of updating a resource at a location, but they do it differently. Therefore, to understand more about these verbs, let’s dive deep into HTTP specification and identify the subtle differences between the two.

## What is PUT?

PUT is a method of modifying resources where the client sends data that updates the entire resource. It is used to set an entity’s information completely. PUT is similar to POST in that it can create resources, but it does so when there is a defined URI. If it already exists, PUT overwrites the entire entity and creates a new resource if it doesn’t exist.

For example, when you want to change a person's first name in a database, you need to send the entire resource when making a PUT request.

```json
{"first": "John", "last": "Doe"}
```

To make a PUT request, you need to send the two parameters; the first and the last name.

## What is PATCH?

Unlike PUT, PATCH applies a partial update to the resource.

This means that you are only required to send the data you want to update, and it won’t affect or change anything else. So if you're going to update the first name on a database, you will only be required to send the first parameter, the first name.

<HTTPClient
	url="https://rapidapi.com/guides/api/rest"
	appName="guides"
	isSampleCodeVisible
	method="PUT"
	allowedMethods={[
		{
			label: 'PUT',
			value: 'PUT'
		},
		{
			label: 'PATCH',
			value: 'PATCH'
		}
	]}
/>

## Differentiating PUT and PATCH Using an Analogy of Land

Imagine we have empty a piece of land where we can erect multiple houses. The land is divided into plots, and houses will be built on each plot as designated by numbers. All we need to do is determine which house will be built where.
When we translate the above information to REST, we will have the following:
https://domain.com/house

### PUT

Let's say plot 1 has a house that has been equipped with all the amenities. Making a PUT request can lead to a number of outcomes. However, to stick to the topic, let’s consider the following request: https://domain.com/house/1 using this payload:

```json
{
	"front_patio": true,
	"back_patio": true,
	"windows": 12,
	"doors": 4,
	"Balcony": false
}
```

Now that we have a house on plot 1, what will happen is that the data in the payload will replace every property on the house. So, if our payload only had the following information:

```json
{
	"doors": 5
}
```

We will have a house with doors, property, and nothing else since a PUT request overwrites everything.

What if we issue a PUT request on a resource that doesn’t exist. In this case, let’s say on plot 3: https://domain.com/house/3. In this case, a new resource will be created. But it is crucial to note that it is imperative to define the entire resource when making PUT requests, or else it could yield undesired results.

### PATCH

PATCH is used when you want to apply a partial update to the resource. Let’s assume the house on plot 1 has the following features:

```json
{
	"front_patio": true,
	"back_patio": true,
	"windows": 12,
	"doors": 4,
	"Balcony": false
}
```

And we want to make the following update:

```json
{
	"doors": 5
}
```

The result will be as follows:

```json
{
	"front_patio": true,
	"back_patio": true,
	"windows": 12,
	"doors": 5,
	"Balcony": false
}
```

We can also add a new feature that didn’t exist in the resource. For example, a garage and the result will be:

```json
{
	"front_patio": true,
	"back_patio": true,
	"windows": 12,
	"doors": 5,
	"Balcony": false,
	"garage": true
}
```

However, you should note that calling HTTP PATCH on a resource that doesn’t exist is bound to fail, and no resource will be created.

## A Summary of Differences/Similarities between PUT and PATCH

We can clearly outline the similarities/ differences between these two methods from the discussion above.

### Similarities between PUT and PATCH

The only similarity between the two is that they can both be used to update resources in a given location.

### Differences between PUT and PATCH

The main difference between PUT and PATCH requests is witnessed in the way the server processes the enclosed entity to update the resource identified by the Request-URI. When making a PUT request, the enclosed entity is viewed as the modified version of the resource saved on the original server, and the client is requesting to replace it. However, with PATCH, the enclosed entity boasts a set of instructions that describe how a resource stored on the original server should be partially modified to create a new version.

The second difference is when it comes to idempotency. HTTP PUT is said to be idempotent since it always yields the same results after making several requests. On the other hand, HTTP PATCH is basically said to be non-idempotent. However, it can be made to be idempotent based on where it is implemented.

## Final Verdict

Now that you have a clear outlook of the similarities/differences between PUT and PATCH, you will probably make the best choice when designing a RESTful API or a new web application. Understanding these subtle differences will help improve your experience when integrating and creating cooperative apps.
