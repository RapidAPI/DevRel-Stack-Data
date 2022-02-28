---
title: 'What exactly is an HTTP Cookie.'
date: 'Feb 15 2022'
---

### What exactly is an HTTP Cookie.

Have you ever imagined how you stay logged in even after you close the tab?

Or how do items stay in your cart when you refresh or close a tab?

The answer is cookies.

HTTP cookies, also known as web cookies or browser cookies, are nothing but a piece of data that the server sends to the browser.

Although HTTP protocol itself is stateless, meaning no connection between two successive requests.

But HTTP cookies allow us to store meaningful states.

Session management, like login, shopping carts, score, is the widespread use case of HTTP cookies.

We can use cookies for the client-side storage but it is not recommended as they are sent with every request which may slow down the computer performance.

We have Web Storage API like localStorage and sessionStorage for client-side storage.

After you make an HTTP request, the server sends the cookies using `Set-Cookie` HTTP header.

One thing to note here is that server can send as many `Set-Cookie` headers as required.

Here is how a simple cookie is sent by the server. 👇🏻

```bash
Set-Cookie: <cookie-name>=<cookie-value>
```

The browser sends the stored cookies with the request using `Cookie` HTTP header.

We can mention one or more cookies inside the `Cookie` header.

Here's a typical syntax.

```bash
Cookie: user-id=123; session-id: 321
```

Cookies are generally meant to stay for a shorter amount of time. However, you can mention the time periods.

The session cookie expires when the current session is closed.

You can use `Expires` or `Max-Age` HTTP headers to define the lifecycle of a particular cookie.

There is always a security risk in cookies as the data stored is accessible and mutable by the users.

You can use the two methods below to minimize the attack. 👇🏻

### Use httpOnly attribute

The `httpOnly` attribute prevents accessing cookies by the client-side script.

```bash
Set-Cookie: id=123; HttpOnly
```

### Use SameSite attribute

Use `SameSite=Strict` to prevent from cookies being sent with cross-site requests.

```bash
Set-Cookie: id=123; SameSite=Strict
```

With that being said, this is pretty much it for this thread. Follow [@Rapid_API](https://RapidAPI.com/hub) for more exclusive content.
