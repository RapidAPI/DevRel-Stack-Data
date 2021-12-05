---
title: What is Service Mesh and How Does it Differ API Gateways?
description: Let's see how a Service Mesh is different from an API Gateway and which one you should prefer.
publishedDate: 2021-12-03T11:27:45.681Z
lastModifiedDate: 2021-12-03T11:27:45.681Z
authors:
    - ahmadBilal
categories:
    - api
tags:
    - service-mesh
    - api
    - gateway
coverImage: ''
---

<Lead>
	Businesses and developers who work with APIs have a high chance of coming
	across Service Mesh and API Gateways. They are both pages of the same book,
	but it can be confusing to prefer one against the other due to their
	overlapping features.
</Lead>

Let's take a look at them.

## Service Mesh

Service mesh is an infrastructure layer that oversees the communication between components and internal services. It is often used when the functionality of an application is broken down into microservices. Service Mesh monitors and secures the data flow between these services. For example, when a user logs into an app, service-A retrieves the user data, and service-B validates the user identity. A Service mesh will help these two services communicate with each other. Service-A will channel the data through the service mesh to service-B.

## API Gateway

An API Gateway is concerned with external communication, which typically sits between client and server. The API Gateway accepts requests from the client, understands these requests and determines which services are needed, and then combines them into a unified, seamless experience for the user. API Gateways’ features include authentication, routing, rate limiting, billing, monitoring, analytics, policies, alerts, security, etc.

Hence, API gateway is an API management tool that sits in front of one or more APIs and manages their requests, acting as a controller.

## Differences Between API Gateway and Service Mesh

At this point, you will be right to think that some of the functions performed by them are similar. Some of their functionalities overlap; for instance, they both can manage authentication, request routing, rate limiting, etc. Therefore, it is essential to point out the differences between the two approaches.

### Internal vs External

A service mesh intends to manage internal communication that includes service-to-service data flow within an application. On the other hand, API Gateways are focused on external communication that provides for client-to-service requests.

### Placement in Architecture

API Gateway is a public-facing component, and it sits between the network and the application. Hence, it sits before the service mesh in the application’s architecture. Any request made by a client will be received and routed by the gateway before it reaches the service mesh.

### APIs

API Gateways monitor and secure APIs while service mesh utilizes APIs to improve performance at scale.

### Ease of Use

API Gateways are a matured technology, while Service Mesh technologies are still emerging. Moreover, the deployment of API gateways is more straightforward and less complicated.

## Using API Gateway and Service Mesh Together

We have established that these two technologies have significant differences, which means they can be used together. Applications can use them together to benefit from both at the same time. In such a scenario, the API Gateway will handle the external requests and streamline them to the internal services. The service mesh will then manage the communication between these internal services.
