---
title: CORS
slug: cors
description: ""
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:51:01.833Z
draft: false
coverImage: ""
points: 15
---

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) or Cross-Origin Resource Sharing is a mechanism based on the HTTP headers that allows the server to respond from what origins the server can accept. The server can accept the request if it is being made from the same origin as the server but can reject requests from other origins or domains via [the same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). All major browsers enforce this same-origin policy.

When the client requests the server, the server can respond with the following headers indicating that the request from the client or domain is allowed:

```bash
Access-Control-Allow-Origin: https://www.website.com
```

The server can also respond with a wildcard if requests from all domains are allowed:

```bash
Access-Control-Allow-Origin: \*
```

It is also important to note here that if a request fails due to CORS, the details of the error are only visible in the browser’s console. CORS also doesn’t provide any protection against [CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF) (Cross-Site Request Forgery) attacks.

## Same-origin policy

[The same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) is a security mechanism that limits the ability of a document from one origin to interact with the resources present in a different origin. This security measure was taken to ensure that data from one domain can’t be stolen from another.

It should also be noted that any domain can request for a resource from another domain but they can’t access the response unless the response uses the correct CORS header.

## Prevention of CORS errors

Errors arising due to CORS can be prevented by using the correct configurations. You should always try to use wildcard or null in the CORS headers and allow requests from only trusted domains.

<Quiz
  question={
    <div><span tw="font-semibold">Quick Review:</span> The server returns that errors that occur due to CORS in the response?</div>
  }
  options={[{
    label: 'Yes',
    isCorrect: false,
  }, {
    label: 'No',
    isCorrect: true,
  }]}
/>
