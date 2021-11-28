---
title: 'Interactive Guide to GraphQL Mutations'
description: "Let's try to understand the GraphQL Mutations."
authors:
    - ahmadBilal
category: interactive
tags:
    - graphql
    - api
    - interactive
publishedDate: 2021-11-24T14:17:11.709Z
lastModifiedDate: 2021-11-24T14:17:11.709Z
coverImage: ''
draft: false
---

<Lead>
	GraphQL, a query language, is an API standard for data query and
	manipulation. While GraphQL Queries are used for data fetching, GraphQL
	Mutations are used for modifying server-side data that includes creating,
	updating, or deleting it.
</Lead>

This guide is a continuation of our interactive series on GraphQL. In the previous guides, we have already talked about [GraphQL Queries, Fields, Arguments](https://RapidAPI.com/guides/graphql-fields-arguments) and [GraphQL Aliases and Variables](https://RapidAPI.com/guides/graphql-aliases-variables). This guide will cover the use of Mutations in GraphQL.

## Introduction

In REST APIs, we generally use the GET method for fetching data and PUT, PATCH, etc, to manipulate data. A similar distinction exists in GraphQL, which lets you perform two types of operations: queries and mutations. Queries are used for fetching data, while mutations are more about modifying data.

So from a REST point of view, GraphQL Queries are equivalent to GET and POST requests while mutations are comparable to methods like DELETE, PUT, PATCH, etc.

## Mutations

Mutations allow us to modify or change the data on the backend. Whenever you want to add, update, or delete data, you will have to specify the request as a mutation.

Mutations are pretty similar to queries in terms of structure other than the "mutation" keyword.

### Adding Data

Consider the following example in which the query fetches a user while the mutation creates a new user.

```graphql
# Query
query getUser($input: ID!) {
	user(id: $input) {
		id
		name
		email
	}
}

# Mutation
mutation AddNewUser($userInput: CreateUserInput!) {
	createUser(input: $userInput) {
		id
		name
	}
}
```

The mutation `AddNewUser` expects a variable `input` of type `CreateUserInput` having required parameters for creating a new user. It needs to be defined in the `variables` object like this:

```json
{
	"userInput": {
		"name": "John Doe",
		"username": "johndoe",
		"email": "johndoe@gmail.com",
		"phone": "12345",
		"website": "johndoe.com"
	}
}
```

Here is the response we get for this mutation:

```json
{
	"data": {
		"createUser": {
			"id": "11",
			"name": "John Doe"
		}
	}
}
```

As you can see, like queries, mutations also return the data specified in the fields. Play around with the following interactive component to see how mutations work:

<GraphQLClient type="mutations" />

### Updating or Deleting Data

Like above, you can use mutations to update data on the server side. The following mutation will update the user using the given `id`.

```graphql
mutation UpdateUser($inputID: ID!, $userInput: UpdateUserInput!) {
	updateUser(id: $inputID, input: $userInput) {
		id
		name
	}
}
```

```json
// Variables object
{
	"inputID": "2",
	"userInput": {
		"name": "John Doe",
		"username": "johndoe",
		"email": "johndoe@gmail.com",
		"phone": "12345",
		"website": "johndoe.com"
	}
}
```

Here is the corresponding response of this mutation:

```json
{
	"data": {
		"updateUser": {
			"id": "2",
			"name": "John Doe"
		}
	}
}
```

The last thing to note is that each mutation must be defined within the GraphQL API type definitions. For instance, the `createUser` and `updateUser` mutations are defined in the API's schema as follows:

```graphql
type Mutation {
	createUser(input: CreateUserInput!): User
	updateUser(id: ID!, input: UpdateUserInput!): User
}
```

So if you are consuming a GraphQL API, take a look at its schema to see how you can write mutations.
