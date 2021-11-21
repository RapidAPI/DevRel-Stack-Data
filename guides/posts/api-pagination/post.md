---
title: What is API Pagination?
description: Performance is the most critical factor of an API, and pagination is one way of optimizing it. Let's learn why.
publishedDate: 2021-10-01T17:10:30.765Z
lastModifiedDate: 2021-10-01T17:10:30.765Z
authors:
    - ahmadBilal
category: api
tags:
    - api
    - pagination
    - paging
coverImage: ''
---

<Lead>
	If you have ever navigated through multiple pages of Google Search results
	or clicked the "load more posts" button on a blog, you have seen pagination.
	API pagination works in a similar way.
</Lead>

## Why is API Pagination needed?

Imagine if Google showed all the search results on a single page. What would be the effect? For starters, it will take ages to compile and fit so many results on a single page. Not to mention the immense load each request will put on the server.

This is the same reason why we need pagination for APIs. The APIs tracking medium to large size databases can return millions of entities as results, if not more. Therefore, such APIs divide their responses and return them in "pages" to keep performance in check.

## Basics of API Pagination

Typically, all the endpoints of an API that return a list of entities must be paginated. Even if, at some point, the data is not large enough to require pagination, it may increase in the future. Modifying endpoints later can get complicated. Therefore, pagination must be kept in mind while designing an API.

You can choose what endpoint needs to be paginated. Depending upon the data, you can define a "Size" parameter that dictates how many entities are returned per page. Another endpoint, typically named "Page"(as in the current page number), will work together with Size to handle pagination. Paging also assumes that the responses are in some sort of order.

## Is API Pagination necessary?

Do you always need pagination? It depends on the API in question.

If the dataset it serves is small and well defined, the users can reduce the number of responses by being more specific in requests. In this scenario, you may not need to paginate your API. But still, it is considered a good practice to provide pagination through API calls.

## Types of API Pagination

Pagination can be implemented in different ways. Depending on the implementation, the types are as follows.

### Offset Paging

It is the most common and relatively simple type of pagination. It is implemented by two parameters, Limit (aka Size) and Offset (aka Page). It is frequently used for apps that are backed by a SQL Database. Because Limit and Offset keywords are already part of the SQL syntax, very little logic is required to implement Offset Paging.

### Keyset Paging

In this approach, a key or delimiter is selected by which data can be sorted. Then, they key is used as a reference to split data into pages.

For example, if data is sorted by user ids, then the key will be `since_user_id`. If the limit is set to 10, then the user will have to specify `since_user_id=10` to get results from 10 to 20.

### Cursor Paging

In cursor paging, in addition to the page requested, the API also returns a cursor. This cursor basically points to the contents of the next page. Hence paging is tightly controlled by logic on the API's end.

This guide was an introduction to API Pagination. In the next one, we dive deeper into its types to learn more about them.
