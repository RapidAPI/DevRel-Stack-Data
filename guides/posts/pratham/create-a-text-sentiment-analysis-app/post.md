---
title: "How to Create a Text Sentiment Analysis App using React"
description: "Text sentiment analysis is a machine learning and natural language processing technique to analyze the text sentiment of a writer."
slug: "create-text-sentiment-analysis-app-using-react"
authors:
  - pratham
category: api
tags:
  - react
  - api
publishedDate: "2021-09-23T08:00:00+08:00"
coverImage: ""
---

<Lead>
  Text sentiment analysis is a machine learning and natural language processing technique to analyze the text sentiment of a writer. The sentiment can be positive, negative, or neutral. Text sentiment analysis, also known as opinion mining, is a deep area of research. In this blog, we will make a text sentiment analysis application using an API available on RapidAPI Hub.
</Lead>

[Text Analysis](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/) is an excellent API available on [RapidAPI Hub](https://rapidapi.com/hub) using which you can create a text analysis application. [Text Analysis](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/) has several other endpoints as well which let you perform sentiment-analysis, text-summarization, language-detection, article-extraction, named-entity-recognition on text. You can also analyze text from a whole website or from documents and images using this API.

We will be focusing on the text analysis endpoint in this particular article. Let’s get started.

## How to connect to the Facial Text Analysis API

RapidAPI handles all the API development things very effectively. You don’t need to worry about any complicated stuff related to API like rate-limiting factors, authentication, authorization. RapidAPI does all the communications by itself. You just need to register on RapidAPI Hub if you want to use any API. RapidAPI provides you a single API key using which you can access over 35,000 APIs conveniently.

Go to [RapidAPI Hub](https://rapidapi.com/hub) and create a free account.

![sign up page of RapidAPI](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/guides/posts/pratham/create-a-text-sentiment-analysis-app/images/rapidapi-homepage.jpeg)

The majority of the APIs offer a freemium plan. You don’t even need to add credit card details to access them. Visit [Text Analysis](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/) API on RapidAPI Hub. It is completely free and has only one subscription plan which allows you to make 100 API calls per second.

![pricing page of text-analysis API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/guides/posts/pratham/create-a-text-sentiment-analysis-app/images/text-analysis-pricing-page.jpeg)

Just click on the "Subscribe" button of the Basic plan.

Now we are good to create a Text Sentiment Analysis App using React and this API.

## Play around with Text Analysis API

Once you subscribe, you can test the API and check the response this [Text Analysis](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/) API returns. You can test multiple endpoints with different parameters using the API playground. Let’s try to dig in with our current API to integrate it with our application.

![homepage of text-analysis API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/guides/posts/pratham/create-a-text-sentiment-analysis-app/images/text-analysis-homepage.jpeg)

1. Endpoint
Here, you can take a quick look at the endpoints an interface supports. You can also search for a distinct endpoint.
2. Documentation
Here, you can access and change all the necessary details required to test an endpoint. For example, you can pass values in the different parameters in the documentation section.
3. Code
Every developer wants and loves this section. You can copy-paste the code directly from here. RapidAPI supports 20 programming languages with 40 different libraries.

The [Text Analysis](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/) API has many endpoints. You can play around with each one of them separately. For this particular project, we need the POST sentiment-analysis endpoint. This endpoint lets us analyze a paragraph of 1000 characters.

Select the POST sentiment-analysis endpoint and scroll down a little bit in the documentation section. You will find a request body section, here you can pass the string you want to analyze.

Great, we are all set to hit the "Test Endpoint" button.

![click Test Endpoint button to test text analysis API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/guides/posts/pratham/create-a-text-sentiment-analysis-app/images/text-analysis-homepage-test-api.jpeg)

After hitting the "Test Endpoint" button, you will see the endpoint (API) result in the third section of API Playground.

![response of text analysis API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/guides/posts/pratham/create-a-text-sentiment-analysis-app/images/response.jpeg)

In the response body (returned data from the server) you will get an `aggregate-sentiment` object which contains all the negative, positive, neutral, and compound values of the string. The response body all contains the sentiment key which tells us the overall `sentiment` of the text.

## Integrate Text Analysis API into Your React Application

[React](https://reactjs.org/) is a front-end JavaScript library for building user interfaces. In this article, you will learn how to integrate an API into your React application and build a text sentiment analysis. Just follow the steps below.

**1. Create a React Application**

[Create React App](https://github.com/facebook/create-react-app) is the simplest way to set up a React application by running one command.

```bash
npx create-react-app sentiment-analysis
```

You will need to have [Node.js](https://nodejs.org/en/) (version >= 6) on your local machine. If you haven’t, just download it for free.

`create-react-app` command will create a folder for you with all the necessary files and folders required for a React application. You will get a `node_modules`, `public`, and `src` folder.

**2. Create a Form**

We want a form in our application where users can add the test in order to retrieve the sentiment. We just need an input field and a submit button in the form.

Go to your project folder (sentiment-analysis that we just created in the first step) and you’ll find that React created a bunch of other folders and files for us. We don’t need to check them all right now.

Just Go to the `sentiment-analysis folder > src > App.js` file and create a form with an URL input field and a submit button.

```js
function App() {
  return (
    <div>
      <form action="">
        <input type="text" name="text" id="text" placeholder="Enter your text here." />
        <input className="btn" type="submit" value="Analyze" />
      </form>
    </div>
  );
}
export default App;
```

Run the application to check the output by running the following command from the root of the project and go to https://localhost:3000

```bash
npm start
````

![text sentiment analysis application](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/guides/posts/pratham/create-a-text-sentiment-analysis-app/images/app.jpeg)

**3. Copy-paste the code snippet from RapidAPI Hub**

We are all set to integrate Text Analysis API code into our application. You don’t even need to write the code. RapidAPI provides the code snippet in 20 programming languages with 40 libraries’ support.

Go to the [Test Analysis](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/) API homepage and copy the code snippet from the Copy Snippets section of the API playground.

Select the JavaScript language and [axios](https://github.com/axios/axios) method from the dropdown menu and click on the "Copy Code" button.

![copy code snippet of text analysis API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/guides/posts/pratham/create-a-text-sentiment-analysis-app/images/text-analysis-copy-code.jpeg)

Create a function `fetchData()` in the App.js file and paste the code inside that function.

We need to install axios library first in order to use it in our application. Run the following command from the root of the project.

```bash
npm install axios
```

**4. Let the user enter the text and get the sentiment**

We are almost done! We just need to validate the form so that the user can enter the text to get the result.

Let’s complete the form first. Create two `useState` hooks in the App.js file, one for handling the state of text that the user enters and the second for loading while API fetching the response from the server.

```jsx
const [text, setText] = useState("");
const [isLoading, setIsLoading] = useState(true);
<form
  onSubmit={(event) => {
  event.preventDefault();
  fetchData();
  setText("");
  setIsLoading(true);
}}
  action=""
>
  <input
    onChange={(event) => setImageLink(event.target.value)}
    type="text"
    name="text"
    id="text"
    value={text}
    placeholder="Enter your text here…"
  />
  <input className="btn" type="submit" value="Analyze" />
</form>
```

As simple as that, we are setting the text entered by the user inside the text variable and calling the `fetchData` function on form submit.

Let’s create another `useState` hook for storing the response that the server returns.

```js
const [sentiment, setSentiment] = useState("");
```

Modify the `fetchData` function a little bit to store the `sentiment` response string.

```js
.then(function (response) {
  setSentiment(response.data.sentiment);
  setIsLoading(false);
})
```

Render the sentiment on the webpage when API successfully returns the data. You can do this by adding some paragraph tags inside the return method in the App.js file.

If you missed some parts, this is how the entire App.js file looks like.

```jsx
import React, { useState } from "react";
import axios from "axios";
function App() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  function fetchData() {
    const options = {
      method: "POST",
      url: "https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "text-analysis12.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
      data: {
        language: "english",
        text: text,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSentiment(response.data.sentiment);
        setIsLoading(false);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
  return (
    <div>
      <h1>Text Sentiment Analysis</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setText("");
          fetchData();
        }}
        action=""
      >
        <input
          onChange={(event) => setText(event.target.value)}
          type="text"
          name="text"
          id="text"
          value={text}
          className="input"
          placeholder="Enter your text here…"
        />
        <input className="btn" type="submit" value="Analyze" />
      </form>
      {isLoading ? (
        <div className="data">
          <p>Loading…</p>
        </div>
      ) : (
        <div className="data">
          <p>Sentiment: <span>{sentiment}</span></p>
        </div>
      )}
    </div>
  );
}
export default App;
```

One important thing to note here is that we have passed the API key as

```js
"x-rapidapi-key": process.env.REACT_APP_API_KEY,
```

`x-rapidapi-key` is your API key that RapidAPI provides using which you can access over 35,000 excellent APIs. It’s always recommended to pass the API key as an environment variable because it’s a confidential thing. Anyone can use your API subscription if they have your API key.

Create a `.env` inside the sentiment-analysis folder and add your API key inside `REACT_APP_API_KEY`(you can call it whatever you want but it should start with the prefix `REACT_APP_ `) variable. Now you can access it inside the App.js file as `process.env.REACT_APP_API_KEY`.

**5. Output**

Yay! Run the `npm start` command, and you’ll see the result at http://localhost:3000/.

![text sentiment analysis app with API reponse in the console](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/guides/posts/pratham/create-a-text-sentiment-analysis-app/images/api-response.jpeg)

You can check the working project [here](https://codesandbox.io/s/festive-turing-j979h).

Add basic styling to make it more appealing.

![text sentiment analysis application](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/dev/guides/posts/pratham/create-a-text-sentiment-analysis-app/images/text-sentiment-analysis.jpeg)

Go to [RapidAPI Hub](https://rapidapi.com/hub) and create a free account to get your API key. The fun part is that you can use over 35,000 excellent APIs with just one API key. So it’s worth creating a free account on RapidAPI Hub.

With that said, we hope you enjoy this article. Peace out!! Keep coding! We will catch you with the next excellent project idea.
