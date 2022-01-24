---
title: API Schemas and their Types
slug: api-schemas
description: An API Schema defines how the data is structured in the API implementation. This information is useful for the developers to interact with an API and its endpoints.
publishedDate: 2022-01-19T18:41:43.732Z
lastModifiedDate: 2022-01-19T18:41:43.732Z
authors:
    - ahmadBilal
categories:
    - api
tags:
    - schema
    - api
coverImage: ''
draft: false
---

<Lead>

A schema is a metadata that shows how data is structured. Like database schemas, there are schemas for APIs that serve the same purpose. API Schema is a valuable API tool and must be picked accordingly.

</Lead>

## Why are API Schemas Needed?

API Schemas describe the offered resources, endpoints, supported operations, and representations of an API. So, developers can take advantage of these schemas to integrate and use APIs.

Moreover, these schemas allow you to generate reference documentation dynamically, making your APIs more discoverable. Developers can use them to judge whether the API fits their needs or not.

## Benefits

Besides the use-cases we mentioned above, API Schemas also offer benefits in API maintenance. Keeping your documentation updated as you iterate on your API can be a challenging feat. Publishing a schema for your API is a neat way to keep the documentation updated and maintained.

## Types of API schemas

We can categorize API Schemas into types based on the API specification language used. These types include OpenAPI (Swagger), API Blueprint, and RAML. OpenAPI is the most common and widely used specification. Let's learn more about it.

### OpenAPI

OpenAPI is a specification format for generating API Schemas. It uses JSON or YAML to describe an API using the following pointers:

-   Basic information of the API, including title, description, and version.

-   Available endpoints of the API, such as `/posts`.

-   All the operations offered in an endpoint such as `GET /posts`, `POST /user`, etc.

-   Input and output parameters for each operation.

Here is an example of the OpenAPI schema in JSON.

```json
{
	"openapi": "3.0.0",
	"info": {
		"title": "Simple API overview",
		"version": "2.0.0"
	},
	"paths": {
		"/": {
			"get": {
				"operationId": "listVersionsv2",
				"summary": "List API versions",
				"responses": {
					"200": {
						"description": "200 response",
						"content": {
							"application/json": {
								"examples": {
									"foo": {
										"value": {
											"versions": [
												{
													"status": "CURRENT",
													"updated": "2011-01-21T11:33:21Z",
													"id": "v2.0",
													"links": [
														{
															"href": "http://127.0.0.1:8774/v2/",
															"rel": "self"
														}
													]
												},
												{
													"status": "EXPERIMENTAL",
													"updated": "2013-07-23T11:33:21Z",
													"id": "v3.0",
													"links": [
														{
															"href": "http://127.0.0.1:8774/v3/",
															"rel": "self"
														}
													]
												}
											]
										}
									}
								}
							}
						}
					},
					"300": {
						"description": "300 response",
						"content": {
							"application/json": {
								"examples": {
									"foo": {
										"value": "{\n \"versions\": \"CURRENT\""
									}
								}
							}
						}
					}
				}
			}
		},
		"/v2": {
			"get": {
				"operationId": "getVersionDetailsv2",
				"summary": "Show API version details",
				"responses": {
					"200": {
						"description": "200 response",
						"content": {
							"application/json": {
								"examples": {
									"foo": {
										"value": {
											"version": {
												"status": "CURRENT",
												"updated": "2011-01-21T11:33:21Z",
												"media-types": [
													{
														"base": "application/xml",
														"type": "application/vnd.openstack.compute+xml;version=2"
													},
													{
														"base": "application/json",
														"type": "application/vnd.openstack.compute+json;version=2"
													}
												],
												"id": "v2.0",
												"links": [
													{
														"href": "http://127.0.0.1:8774/v2/",
														"rel": "self"
													}
												]
											}
										}
									}
								}
							}
						}
					},
					"203": {
						"description": "203 response",
						"content": {
							"application/json": {
								"examples": {
									"foo": {
										"value": {
											"version": {
												"status": "CURRENT",
												"updated": "2011-01-21T11:33:21Z",
												"media-types": [
													{
														"base": "application/xml",
														"type": "application/vnd.openstack.compute+xml;version=2"
													},
													{
														"base": "application/json",
														"type": "application/vnd.openstack.compute+json;version=2"
													}
												],
												"id": "v2.0",
												"links": [
													{
														"href": "http://23.253.228.211:8774/v2/",
														"rel": "self"
													},
													{
														"href": "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
														"type": "application/vnd.sun.wadl+xml",
														"rel": "describedby"
													}
												]
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
```

## Conclusion

Publishing a schema for your API possesses many benefits and is a good practice to adopt for your APIs.
