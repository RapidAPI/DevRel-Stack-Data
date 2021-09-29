---
title: Principles of REST API design
slug: principles-of-rest-api-design
description: ""
publishedDate: 2019-08-22T15:20:28.000Z
lastModifiedDate: "2021-09-22T16:48:56.045Z"
draft: false
coverImage: ""
points: 20
---

REST APIs follows six design principles which are as follows:

1. **Client-server Separation:** The application which is requesting the resource is called the client and the application which has the resource is called the server. When the client requests a request to the server, the server sends a response to the client. The server can’t initiate a request to the client. In a RESTful API, the client and server are always kept independent of each other. This ensures that both the client and the server can be scaled independently.

2. **Stateless:** In a RESTful API, each request needs to contain the data that is necessary to process it. Servers aren’t allowed to store any data related to the client. No session or authentication state is stored on the server. If the client requires authentication, then the client needs to authenticate itself before sending a request to the server.

3. **Cacheable:** In REST APIs, the resources should be able to cache themselves either on the client or on the server. When a client requests a resource from the server, the response from the server will contain the information of whether the resource can be cached or not and for how long. The main idea of caching is to improve the performance of the client by reducing the bandwidth required to load the resource.

4. **Layered System:** In REST APIs, there can be multiple intermediaries between the client and the server. It isn’t always necessarily true that the client connects directly to the server and requests a resource. There can be multiple systems in between them that are responsible for handling security, traffic, balancing the load, redirection, etc. The client or the server doesn’t have any information about how many systems are in between them.

5. **Uniform Interface:** All requests and responses in a REST API should follow a common protocol. This allows the applications to evolve independently. The client and server can interact with each other in a single language irrespective of the architecture that they are based upon.

6. **Code on Demand (optional):** When a client requests a resource, the server can return executables as a part of the response. This is an optional constraint. In certain cases, this might help reduce the amount of code that has to be written on the client.
