---
title: What is GraphQL Schema Stitching?
description: GraphQL schema stitching is the process of creating a single GraphQL schema from multiple underlying GraphQL APIs. In this piece, we are going to look at why it exists and some of its use cases.
publishedDate: 2021-11-03T16:27:05.876Z
lastModifiedDate: 2021-11-03T16:27:05.876Z
authors:
    - saad
categories:
    - api
tags:
    - graphql
    - graphql-schema
coverImage: ''
---

<Lead>

GraphQL is a data query and manipulation language developed by Facebook. With GraphQL, you get precisely the data you request. No more, no less. You have a single entry point, i.e., `/graphql`, that you use to get the data.

</Lead>

You define a schema that describes all the possible data you may need to query in your application on your backend. The data is then later fetched using a syntax that replicates the data’s return shape in JSON.

Let’s take a look at one of the practices that are widely adopted when working with GraphQL.

## GraphQL Schema Stitching

It is the process of creating a single GraphQL schema from multiple underlying GraphQL APIs. You can use two or more GraphQL schemas and merge them into one endpoint to get data from all the underlying schemas. This provides you with a unified API that you can use to query multiple GraphQL schemas simultaneously. You can also use it to customize an existing GraphQL API.

## Why does Schema Stitching exist?

With GraphQL, you do not have to wait for a single request to resolve to fetch new data based on the response of the previous request. You can just query all the data at once to one schema. As the schema grows, you might want to break it up into modules that can be developed independently.

With `sitchSchemas`, you can combine multiple GraphQL APIs into one unified gateway proxy schema. It knows how different parts of the schema works, and because of this, it delegates portions of the requests to the relevant underlying subschemas.

## Use case of Schema Stitching

Here are some of its use cases:

-   You can stitch internal schemas with other internal schemas to ease deployment or versioning.
-   You can integrate different services by adding public APIs to your schema.
-   You can create a mashup API by combining multiple public APIs.
