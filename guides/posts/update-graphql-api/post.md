---
title: How to update GraphQL API?
description: As your application grows, the API connecting it to the client also grows with it. If the API is publicly available, other developers might be relying on it for their products.
publishedDate: 2021-10-21T16:18:42.178Z
lastModifiedDate: 2021-10-21T16:18:42.178Z
authors:
    - saad
categories:
    - api
tags:
    - graphql
coverImage: ''
---

<Lead>
	As your application grows, the API connecting it to the client also grows
	with it. If the API is publicly available, other developers might be relying
	on it for their products. The constantly updating of API could result in
	introducing changes that break their products.
</Lead>

So, it would be best if you version your API. In this piece, let’s take a look at how you should update your GraphQL API.

## Updating GraphQL API

According to the GraphQL [official](https://graphql.org/) website, you do not need to version your API. Instead, you can add new fields and types, and they will not impact the existing queries. Maintaining a single version and constantly evolving it in place rather than cutting new versions is often called continuous evolution.

Even with the continuous evolution of a GraphQL API, you would need to introduce some breaking changes. For instance, you are removing or renaming a top-level query or mutation, or you might be adding a new required input parameter. You are updating the API to improve the performance, or you might be fixing a security vulnerability where a field might be leaking sensitive data. All these scenarios introduce breaking changes.

Since we are not versioning the API, our API user’s product will go down within seconds if these changes are pushed at once. So to deal with this, with GraphQL, you can provide deprecation notices to the user. It will give the users some time to move away from the depreciated fields.

## Wrap Up

Although the GraphQL site says that you do not need to version your API, you can still version it like REST APIs. You can adopt the URL versioning approach as [Shopify](https://shopify.dev/api/usage/versioning#the-api-version-release-schedule) did in 2019. The major drawback will be that maintaining the old version will also consume a lot of resources.
