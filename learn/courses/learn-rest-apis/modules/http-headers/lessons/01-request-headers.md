---
title: Request headers
slug: request-headers
description: ""
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:49:36.007Z
draft: false
coverImage: ""
points: 10
---

In a HTTP request, [the Request headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header) are used to pass information about the request. It contains information about the requested resource and the client which is making the request.

A request header can contain information about type of the request, the URL to which the request is being made, authentication details, cache policy as well as the user agent.

Some of the popular request headers are:

## Accept
The [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header is used to inform the server about the type of data that the client is able to understand.

```json
Accept: text/html
Accept: application/xhtml+xml
Accept: image/png
```

## Accept-Encoding
The [Accept-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) HTTP header is used to inform the server about the type of encoding the client is able to understand.

```json
Accept-Encoding: gzip
Accept-Encoding: gzip, compress
```

## Authorization
The [Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) HTTP header is used to pass credentials which lets the server authenticate a client and provide access to protected resources.

```json
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
Authorization: Bearer eyYWxhZGRpbjpvcGVuc2VzYW1l
```

## Accept-Language
The [Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) HTTP header is used to let the server know which local is preferred and understood by the client.

```json
Accept-Language: fr-CH
Accept-Language: en-US
```

## Cache-Control
The [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) HTTP header holds caching instructions for both the client and the server.

```json
Cache-Control: stale-while-revalidate=60
Cache-Control: no-cache
```

Use the interactive component below to understand the `Cache-Control` HTTP header from a `GET` request. Click on the **Submit** button to request a response from the server:

<HTTPClient
  url="https://reqres.in/api/users"
  method="GET"
  isRequestMethodChangeDisabled
  isResponseBodyVisible={false}
  isResponseHeadersVisible
/>

<Quiz
  question={
    <div><span tw="font-semibold">Quick Review:</span> Can the server determine the type of the data passed in the body of the request based on the request headers?</div>
  }
  options={[{
    label: 'Yes',
    isCorrect: false,
  }, {
    label: 'No',
    isCorrect: true,
  }]}
/>
