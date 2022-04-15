---
title: What is Depth Limiting in APIs?
description: Rate limiting is a way to limit the requests coming to an API. GraphQL APIs have another way of restricting requests called depth limiting. This method resists queries based on their depth.
publishedDate: 2021-14-04T18:41:43.732Z
lastModifiedDate: 2021-14-04T18:41:43.732Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - depth-limiting
    - api
    - graphql
coverImage: ''
draft: false
---

<Lead>

Rate limiting is a way to limit the requests coming to an API. But GraphQL APIs have another way of restricting requests called depth limiting, which restricts queries based on their depth.

</Lead>

APIs can slow down or even crash if they receive too many requests within a timeframe. Request Limiting allows API providers to keep their APIs running for all users by controlling the number of requests.

Similarly, GraphQL APIs can slow down or crash if a query is exceedingly complex. We can use depth limits to tackle this issue. Let's quickly go over GraphQL APIs first.

## GraphQL APIs

GraphQL, a query language, is an API standard for data query and manipulation. GraphQL queries enable declarative data fetching and expose only a single endpoint that you can use to get data.

To understand how GraphQl works, think of it as a graph. When requested, it exposes a single "edge" of the graph, which is an endpoint.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://RapidAPI.com/learn/graphql-apis/introduction"
>
	Learn more about GraphQL APIs in this fun interactive guide.
</Callout>

## Depth Limiting

Depth Limiting restricts GraphQL operations based on their depth to avoid large nested queries. As we discussed earlier, GraphQL allows you to specify the exact data you want by nesting the fields. While this is an advantage, it can also be a bad thing. Consider the following query:

```graphql
{
  user(id: '12') { # depth 0
    posts {        # depth 1
      title
    }
  }
}
```

It fetches the titles of all the posts for a user. It uses nesting to traverse the `user` and `posts` fields to get their titles.

GraphQL's design allows queries to grow without bounds. Suppose we have `User` type that has a list of posts.

```graphql
{
	user(id: "12") {
		posts {
			title
		}
	}
}
```

And the `Posts` type also allows to get the users like this:

```graphql
{
	posts(id: "12") {
		user {
			name
		}
	}
}
```

An attacker can use such nesting to create complex cyclical queries like this:

```graphql
query badQuery {     # depth 0
  user(id: "12") {   # depth 1
    posts {          # depth 2
      user {         # depth 3
        name
        posts {      # depth 4
          user {     # depth 5
            posts {  # depth 6
              title
              user { # depth 7
                     # and more..
              }
            }
          }
        }
      }
    }
  }
}
```

As you can see, this query is several levels deep, and it can create a big loop. Queries like this are computationally expensive and may render your API unresponsive. Thus, we can apply depth limits to protect the API from them.

You can set a specific number (e.g., 7) to limit the nesting depth for your API. Then, if a query has more than seven levels of nesting, it will be rejected. Picture a malicious query having 100s of levels without a depth limit. It will be devastating, right? This is why depth limits are applied.
