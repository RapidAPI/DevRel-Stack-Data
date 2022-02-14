---
title: How to Call APIs in Go?
description: APIs are a fundamental part of the web, and there are many awesome APIs waiting to be utilized. This guide will demonstrate how you can consume APIs in the Go programming language.
authors:
    - ahmadBilal
categories:
    - api
tags:
    - api
    - go
publishedDate: 2022-02-10T16:27:05.876Z
lastModifiedDate: 2022-02-10T16:27:05.876Z
coverImage: ''
draft: false
---

<Lead>
	APIs are a fundamental part of the web. Today, there are countless APIs
	waiting to be consumed in meaningful applications.
</Lead>

## Go

The Go programming language is an open-source project supported by Google. Focused on fast execution and ease of learning, Go has gained popularity, especially in areas like cloud engineering.

APIs are the backbone of any application, so let's see how we can call APIs in a Go application. I have divided the process into five steps which are as follows:

## → STEP 1: Find an API

First of all, let's find an API to use in our Go application. [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) enables you to choose from thousands of public APIs for use in your projects.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub in this fun interactive guide.
</Callout>

For this guide, we will use the [CarbonFootprint API](https://RapidAPI.com/carbonandmore-carbonandmore-default/api/carbonfootprint1/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) from RapidAPI Hub that gives us the carbon footprint data of travel.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button.

![Subscribe to CarbonFootprint API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-carbon-footprint-app/images/subscribe.png)

## → STEP 2: Import Packages

Now, let's get our hands dirty and start writing the code to consume the API. Go ahead and create a Go file named `main.go`. The first thing we will do in this file is import the required packages. We will add the following:

```go
package main

import(
    "net/http"
    "fmt"
    "io/ioutil"
)
```

The [`net/http`](https://pkg.go.dev/net/http) package deals with HTTP servers/clients and provides functionalities required to make HTTP requests. [`fmt`](https://pkg.go.dev/fmt) and [`io/ioutil`](https://pkg.go.dev/io/ioutil) implement some necessary I/O functions.

## → STEP 3: Formulate the API Request

We will use the `NewRequest` function of the `http` package to specify our API call because it allows us to set custom headers. The function takes three parameters.

1. HTTP Method.
2. API Endpoint URL.
3. Request Body (optional).

Let's add this function.

```go
package main

import(
    "net/http"
    "fmt"
    "io/ioutil"
)

func main() {

    url := "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar"
    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Print(err.Error())
    }
}
```

We also added an `if` statement to catch any possible errors and log them. To add headers in our API request, we can use the `Header.Add` function. Let's add our API key using it.

```go
package main

import(
    "net/http"
    "fmt"
    "io/ioutil"
)
func main() {
    url := "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar"
    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Print(err.Error())
    }

    req.Header.Add("x-rapidapi-key", "YOU_API_KEY")
}
```

Now we can send the request to receive the response from the API.

```go
package main
import(
    "net/http"
    "fmt"
    "io/ioutil"
)
func main() {
    url := "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar"
    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Print(err.Error())
    }
    req.Header.Add("x-rapidapi-key", "YOU_API_KEY")

    res, err := http.DefaultClient.Do(req)
    if err != nil {
        fmt.Print(err.Error())
    }
}
```

## → FINAL STEP: The Response

Finally, we can display the data returned by the API. Firstly, the client must close the response body when finished with it:

```go
defer res.Body.Close()
```

Now, we can access the response body using the `ioutil.ReadAll` function. After checking for errors, we can display the response as a string.

```go
package main
import(
    "net/http"
    "fmt"
    "io/ioutil"
)
func main() {
    url := "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar"
    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Print(err.Error())
    }
    req.Header.Add("x-rapidapi-key", "YOU_API_KEY")
    res, err := http.DefaultClient.Do(req)
    if err != nil {
        fmt.Print(err.Error())
    }

    defer res.Body.Close()
    body, readErr := ioutil.ReadAll(res.Body)
    if readErr != nil {
        fmt.Print(err.Error())
    }
    fmt.Println(string(body))
}
```

Run the file through your terminal, and you will see the API response like this:

```json
{
	"carbonEquivalent": 17.137
}
```

Now your application is ready to make API calls.

## Wrap Up

This guide was an introduction to consuming APIs in Go. We hope that now you can start using APIs in your awesome Go projects.
