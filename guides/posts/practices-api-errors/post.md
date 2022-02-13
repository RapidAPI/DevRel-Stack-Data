---
title: Best Practices for Creating Good API Errors
description: What happens when a request to your API doesn't go as planned? An error response is displayed, and it is the only way for the developers to diagnose what went wrong. This guide will highlight some good practices you can apply during API error handling.
publishedDate: 2022-01-27T19:10:30.765Z
lastModifiedDate: 2022-01-27T19:10:30.765Z
authors:
    - 'ahmad-bilal'
categories:
    - bestPractices
    - api
tags:
    - api
    - errors
    - best
    - practices
coverImage: ''
draft: false
---

<Lead>

What happens when a request to your API doesn't go as planned? An error response is displayed, and it is the only way for the developers to diagnose what went wrong.

</Lead>

## Why Does Good Error Response Matter?

Whenever a client makes an API request, the API must respond to the client specifying whether the request was successful or not. HTTP Status Codes are used for this purpose.

However, in the case of failed requests, only the status codes are not enough since they simply define the categories of the errors. The following status codes are used to notify of errors.

-   `4xx` - Client sent an invalid request.
-   `5xx` - The server failed to process the request.

While these error codes are beneficial, they are not enough to explain the whole problem. We should combine them with proper error responses to communicate with the developers effectively.

## Features of a Good Error Response

An Error Response is an object returned by the API when a request fails. Here are some must-have elements of a good error response.

### HTTP Status Code

As we established earlier, the `4xx` and `5xx` HTTP Status Codes are used to show the category of the error that occurred. Including these standard error codes helps the developers understand what the error is and where it occurred.

For example, if a request causes a `500` error, it means the error has happened on the API's end. Therefore, choosing the appropriate status code for the error is critical.

### Human Readable Messages

Only the status codes are not enough to clarify the error. A clear, human-readable message goes a long way to pinpoint the actual cause of the error. For example, the Spoonacular API on RapidAPI Hub includes a human-readable error message with the error code:

```json
"message": "400 Bad Request - Your request is missing the following required parameters."
```

It is best to include a short title that will summarize the error, followed by a detailed error message explaining what went wrong.

### Documentation Reference

Finally, it will be awesome to include a link to a help page in your API documentation referring to the error. It will allow developers to fix the error quickly, massively improving the Developer Experience of your API. You can do so by adding a URL field in the error object like this:

```json
{
  "error": {
    ...
    "url": "https://rapidapi.com/example/api/docs"
  }
}
```

### Example of an Error Object

The Stripe API's error object can be an excellent example of an error response. A typical error response of the Stripe API contains the following elements:

-   **type** The type of error returned.

-   **code** The HTTP Status code of the error.

-   **message** A human-readable message providing more details about the error.

-   **param** Information about parameters if the error is parameter-related.

-   **decline_code** Stripe payment related information.

-   **payment_intent** Stripe payment related information.

## Wrap Up

That's pretty much it. We hope that this guide will help you improve your API's error Responses.
