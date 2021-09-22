---
title: Request headers
slug: request-headers
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:49:36.007Z"
draft: true
coverImage: ""
points: 10
---

In a HTTP request, [the Request headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header) are used to pass information about the request. It contains information about the requested resource and the client which is making the request.

A request header can contain information about type of the request, the URL to which the request is being made, authentication details, cache policy as well as the user agent.

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
