---
title: Versioning REST APIs
slug: versioning-rest-apis
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:47:38.968Z"
draft: true
coverImage: ""
points: 20
---

Imagine that you are working in an extensive application that releases new versions of an API every day. A lot of other applications depend on your API for their features to work as expected. When a bug gets released in your API, all the applications that rely on your API will stop working. Maintaining uptime for any application is essential, and having downtime because of the bug will cause many problems. One way to resolve this problem is by version control.

A good versioning strategy will ensure that at least one version of your API will work as expected. Because of this, the applications using the buggy version can fall back to a previous version.

Generally, version control is maintained in a changelog which the consumers of an API can refer to. Versioning can be breaking and non-breaking.

## Different types of versioning strategies

1. **URI versioning:** This is the most common versioning strategy, although it violates every URI should contain a unique resource. When a URI version is done, all the resources get updated to a new version. URI versioning can also cause issues with caching. An example of this strategy is the following:

```bash
https://website.com/api/v1/users
https://website.com/api/v2/users
```

2. **Query parameters versioning:** This strategy states the version of an API by using query parameters. An example of this kind of strategy can be the following:

```bash
https://website.com/users?version=1
```

3. **Custom headers versioning:** Versioning can also be done by passing custom request headers. An example will be the following:

```bash
curl -H "accept-version: 1" https://website.com/users
```
