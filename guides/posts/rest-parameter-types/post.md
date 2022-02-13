---
title: Types of Rest API Parameters
description: There are several types of parameters found in REST APIs. While building a REST API, you need to decide which parameter suits the endpoint.
publishedDate: 2021-12-16T16:18:42.178Z
lastModifiedDate: 2021-12-16T16:18:42.178Z
authors:
    - 'ahmad-bilal'
categories:
    - api
tags:
    - rest
    - api
    - parameters
coverImage: ''
draft: false
---

<Lead>

There are several types of parameters found in REST APIs. While building a REST API, you need to decide which parameter suits an endpoint.

</Lead>

In simple terms, API parameters are options that can be passed with the endpoint to influence the response. They are like search filters; they single out the data you want to receive from the API.

## Types of REST API Parameters

Following are the most common types of parameters used in REST APIs:

-   **Path Parameters**
-   **Query String Parameters**
-   **Header Parameters**
-   **Request Body Parameters**

### Path Parameters

As their name suggests, they are included in the URL path of the endpoint. According to OpenAPI/Swagger spec, path parameters must be required and can't be optional. Curly braces around them usually indicate them.

```js
/service/users/{name}/posts/{id}
```

In the above example, `{name}` and `{id}` are path parameters. It can be confusing to separate path parameters from the endpoint path if you do not indicate them by curly braces or color-coding, etc. Therefore, the documentation should clearly describe the available parameters and their descriptions.

### Query String Parameters

They are the most commonly used parameters. We can specify them in the query string of the endpoint. A query string is a string that starts with a `?` and includes parameters listed one after the another separated by `&`. An example query string looks like this:

```js
?guests=3&days=2&time=1400
```

Unlike path parameters, the order of query string parameters does not matter.

```js
// Both of these will return the same result

/hotels/find?guests=3&days=2&time=1400

/hotels/find?time=1400&guests=3&days=2
```

An endpoint can take path and query string parameters at the same time.

```js
/hotels/find/{city}?time=1400&guests=3&days=2
```

### Header Parameters

These parameters are included in the request headers. Generally, request headers are used to keep authorization parameters. Header parameters usually remain the same for all endpoints. For example, the header parameters of an API from RapidAPI Hub look like this:

```js
headers: {
      "x-rapidapi-host": "telize.rapidapi.com",
      "x-rapidapi-key": your_api_key,
}
```

### Request Body Parameters

Request body parameters are used when clients send data to the API. Generally, parameters are shipped in a JSON Object in POST, PUT, or PATCH requests.

The JSON object is included in the request body, so these parameters are called request body parameters. The endpoint remains simple, like `/hotels/find`, but you can include a JSON object with many key-value pairs in the request body.

```json
{
	"guests": 3,
	"city": "san francisco",
	"time": 1433524597
}
```

Although request body parameters are still used, they are not considered a parameter anymore in [OpenAPI v3.0](https://swagger.io/docs/specification/describing-request-body/).

## Wrap Up

It is necessary to distinguish and learn API parameters whether you want to consume an API in your projects or build a new API.
