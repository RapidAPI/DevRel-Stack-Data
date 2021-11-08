---
title: How to use RapidQL to get data from multiple APIs and databases
slug: rapidql
description:  RapidQL lets developers query multiple API resources and databases at a time, combining them to create one unified query.
publishedDate: 2021-10-02T19:10:30.765Z
lastModifiedDate: 2021-10-02T19:10:30.765Z
authors:
  - bilal
category: api
tags:
  - api
  - rapidql
coverImage: ''
draft: false
---

<Lead>
RapidQL lets developers query more than one API resource and database at a time, combining them to create one unified query.
</Lead>

## RapidQL

RapidQL is an Open Source project by RapidAPI that allows you to aggregate data from multiple databases and Web APIs. Using a unified query enables you to fetch, combine and aggregate data in a single call.

It employs nesting to incorporate many inputs within one request. As a result, RapidQL makes it convenient to extract data from multiple sources simultaneously. The returned data can also be used concurrently to form further queries.

## Single Call to Multiple APIs or Databases

What if you needed to use a Geolocation API to grab an address, detect the users' city and get the weather there using another Weather API? Or maybe you wanted to pull users' information from a database and verify their emails through a verification API simultaneously. RapidQl allows you to do all that and more in a single call.

## How to use RapidQL

### Installation

You can get started right away by installing the [npm module](https://www.npmjs.com/package/rapidql).

```js
npm install rapidql
```

Then you can go ahead and require it in your project before initializing it.

```js
const RapidQL = require('RapidQL');
const rql = new RapidQL({}); // Default parameters and connection details can be initialized here.
```

### Querying

Once you have initialized it, you can perform queries using the `.query()` method. It affords two arguments:

1. The query string itself.
2. (optional) The base context for passing any parameters in the queries.

Following is an example that combines two queries in a single call.

```js
rql.query(`{
    - MySQL.RQLDemo.rqlDemo.find(){
        city,
        Http.get(
            url:"https://community-open-weather-map.p.rapidapi.com/weather",
            params: {
                "units": "imperial",
                "q" : city
            }
        )
        {}
    }
}`)
```

First, it will send a request to the database for the city. Then, using the response, it will invoke the [Open Weather API](https://rapidapi.com/community/api/open-weather-map/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) to find the weather in that city.

Pretty neat stuff, right? You can read the documentation and explore RapidQL further in its [GitHub Repository](https://github.com/RapidAPI/rapidql).
