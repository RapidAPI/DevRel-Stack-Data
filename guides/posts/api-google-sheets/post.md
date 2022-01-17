---
title: How to use an API in Google Sheets?
description: 'Here is how you can supercharge your Google Sheets by calling APIs and embedding their responses within the sheets.'
publishedDate: 2022-01-12T19:10:30.765Z
lastModifiedDate: 2022-01-12T19:10:30.765Z
authors:
    - ahmadBilal
categories:
    - api
tags:
    - rapidapi
    - sheets
    - google
coverImage: ''
---

<Lead>

Google Sheets is a powerful tool for storing and managing different kinds of data. Many people use these sheets to keep their income, expenditures, targets, form responses, and more.

</Lead>

## RapidAPI for Google Sheets

The [RapidAPI add-on for Google Sheets](https://workspace.google.com/marketplace/app/rapidapi_for_google_sheets/873111215514) supercharges these sheets by allowing you to use any API from RapidAPI Hub. [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) lets you choose from thousands of APIs which over 3 million developers are using.

Using the add-on, you can perform tasks like email validation, geo-location, currency exchange, data imports, and much more without leaving the sheet. Moreover, it provides a getter function that can be dragged down to as many cells as you want for dynamic data fetching.

## Usage

Let's go through a practical example to see how we can integrate APIs in Google Sheets. I will use an exchange rate API to convert the currencies of amounts present in a sheet. I have divided the process into four easy steps.

### → STEP #1: Installation

To install the plugin, head to [this link](https://workspace.google.com/marketplace/app/rapidapi_for_google_sheets/873111215514) and install the add-on. They will prompt you for required permissions as this add-on requests external APIs.
By default, the add-on will be disabled in your sheets. Before using it in a sheet, you must enable it for that sheet. To do so:

1. Open the sheet in which you want to use the add-on.
2. Open the “Add-ons” menu at the top of the window.
3. Click “Manage Add-ons”.
4. Click on the three dots menu and select **Use in this document**.

![Enabling the RapidAPI add-on](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/api-google-sheets/images/enable.png)

### → STEP #2: Find the API

Now, we will find an API that suits our use case. Go to [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) and [create an account](https://RapidAPI.com/auth/sign-up?referral=/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) if you haven’t already. Then, search for "Currency Exchange" in the search section.

For this guide, I am going to use the [Currency Conversion and Exchange Rates](https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel). Go ahead and subscribe to the API.

![Subscribe to the API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/api-google-sheets/images/subscribe.png)

### → STEP #3: Formulate the Request

The add-on offers two functions:

1. `=GET(URL, selectPath, rapidApiKey, parameters)`: If the API returns a single object in the response.
2. `=GETARR(URL, arrPath, selectPath, rapidApiKey, parameters)`: If the API returns an array of objects in the response.

We will use the GET function for this guide. First, focus on the code snippet of the API as it will help us formulate the GET function.

![Code Snippet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/api-google-sheets/images/snippet.png)

Now, let's go over the parameters of the GET function.

-   **URL** - this is the URL of the endpoint you’re using. In our case, it’ll be: `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert`.

-   **SelectPath** - this will highlight what part of the response data you want to pull into the spreadsheet. You can see the response by testing the API endpoint. As you can see in the following image, we need the `result` field.

![Testing the Endpoint](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/api-google-sheets/images/response.png)

-   **rapidApiKey** - this is your API key to use APIs through RapidAPI. You can find it in the `X-RapidAPI-Key` field.

-   **Parameters** - For each parameter (as seen in the code snippet screenshot), you should pass two arguments to the function - the parameterName and parameterValue. In our case, the parameters are "from", "to" and "amount". Note that the parameter value can also reference another cell to get the value dynamically.

Our GET function will thus be:

`=GET("https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert", "result", "your-key-here", "from", "EUR", "to", "USD", "amount", B2)`

### → FINAL STEP

Head over to your Google Sheet now. I am using the following mock data:

![Google Sheet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/api-google-sheets/images/sheet.png)

In the "Amount" cell C2, paste the GET function we formulated above.

![Get Function](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/api-google-sheets/images/get.png)

Once you enter, it will make the API call, and you will get the exchanged amount in USD. Notice how I am using the cell value B2 as the amount parameter? Now, you can just drag the cell down, and B3, B4 will replace B2, and so on for each cell. As you can see, all the amounts are exchanged and filled in their respective cells.

![Results](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/api-google-sheets/images/results.png)

That's all it takes to integrate any API from RapidAPI Hub into your Google Sheets.
