---
title: What is HTTP?
slug: what-is-http
description: ""
publishedDate: 2021-09-22T17:49:44.101Z
lastModifiedDate: 2021-09-22T17:33:57.169Z
draft: false
coverImage: ""
points: 5
lessons:
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/rest-apis/modules/http-methods/lessons/01-different-methods-of-http.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/rest-apis/modules/http-methods/lessons/02-get-request.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/rest-apis/modules/http-methods/lessons/03-post-request.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/rest-apis/modules/http-methods/lessons/04-patch-request.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/rest-apis/modules/http-methods/lessons/05-put-request.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/rest-apis/modules/http-methods/lessons/06-delete-request.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/rest-apis/modules/http-methods/lessons/07-head-request.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/rest-apis/modules/http-methods/lessons/08-connect-request.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/rest-apis/modules/http-methods/lessons/09-options-request.md
  - source: https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/learn/courses/rest-apis/modules/http-methods/lessons/10-trace-request.md
---

**HTTP** or Hypertext Transfer Protocol is an application layer protocol generally used by web services for serving HTML documents. A client makes a request to a server for a resource and the server sends a response. As HTTP is stateless, it doesn’t keep any information regarding any requests.

HTTP is a client-server protocol and there can be multiple intermediaries between them. There can be multiple proxies or gateways for managing cache, security, logging, authentication, and balancing traffic.

Although HTTP is a stateless protocol, the creation of sessions is possible by using HTTP cookies. Using session cookies, it is possible for the client to authenticate requests to the server.

HTTP can also control how and for how long the documents can be cached on the client or in the different layers between the client and the server.
