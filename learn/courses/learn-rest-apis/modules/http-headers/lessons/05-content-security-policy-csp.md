---
title: Content Security Policy (CSP)
slug: content-security-policy-csp
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T17:51:21.642Z"
draft: false
coverImage: ""
points: 15
---

[CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) is a protocol which can be used to provide an additional level of security over various issues like [XSS](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting), data injection, etc. CSP can be enabled on a server by passing [the Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP response header. It is a security measure that prevents attacks from running malicious content on a web application.

Using CSP, it is possible to limit the amount of data sources that a web application can load. This is done by properly configuring the CSP headers.

The syntax looks like this:

```bash
Content-Security-Policy: <policy-directive>; <policy-directive>
```

An example of a CSP header can be the following:

```bash
Content-Security-Policy: default-src https://website.com; img-src *; child-src 'none';
```

You can enforce HTTPS for all the resources that your application use by using the following CSP policy:

```bash
Content-Security-Policy: default-src https:; script-src https: 'unsafe-inline'; style-src https: 'unsafe-inline'
```

CSP can prevent errors which occurs due to unsigned inline JavaScript and CSS style tags as well as JavaScript code using `eval()`.

CSP should be used for any application containing user interactions via forms or applications which provide the option to download files. It isn’t necessary for simple static sites.
