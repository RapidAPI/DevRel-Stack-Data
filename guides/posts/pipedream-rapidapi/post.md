---
title: Perform Sentiment Analysis on Tweets using Pipedream and RapidAPI
description: Pipedream is a serverless platform to connect APIs, and its combination with RapidAPI offers endless opportunities.
publishedDate: 2022-01-06T19:10:30.765Z
lastModifiedDate: 2022-01-06T19:10:30.765Z
authors:
    - ahmadBilal
categories:
    - api
tags:
    - rapidapi
    - pipedream
    - sentiment
    - tweets
---

<Lead>
	Pipedream is a serverless platform to connect APIs, and its combination with
	RapidAPI offers a powerful solution for interacting with APIs.
</Lead>

## Pipedream

[Pipedream](https://pipedream.com/) can connect APIs and applications to create automated workflows. These workflows are organized as a sequence of linear steps, specified using no-code building blocks or custom Node.js code.

Pipedream allows you to use the following as the steps of a workflow:

-   App events. For example, send or listen to a new message in a Slack Channel.

-   Custom Node.js code or any npm Package.

-   Outbound API requests.

![Example of Steps in a Pipedream workflow](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/example.png)

### What makes it different?

There are many no-code platforms for building workflows, but Pipedream stands out because it gives you code-level control when you need it — and no code when you don't. Workflows are composed of Node.js code, and steps are just Node functions, so you can easily pass data between steps and write code to process it.

Thanks to 500 integrated applications, npm support, and custom code ability, there is no limit to what you can achieve through Pipedream. Here are some example workflows:

-   [Listen for Twitter mentions and post to Slack.](https://pipedream.com/@/p_PACqq1q/edit)

-   [Get data from an API every day and add to Google Sheets.](https://pipedream.com/@pravin/example-4-get-data-from-an-api-on-a-schedule-and-add-to-google-sheets-p_8rCN7Qd/edit)

-   [Get Weather updates on a schedule.](https://pipedream.com/@tod/rapidapi-3-open-weather-wap-on-timer-with-params-p_rvCQNAR/edit)

## RapidAPI Hub

[RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) is the world's largest API platform with over 3 million developers using more than 30,000 APIs. There are APIs for querying all sorts of data, including Weather, Finance, Translation, Geolocation, Proxy, and more.

Imagine how much more we can do if we integrate APIs from RapidAPI Hub in Pipedream. Let's demonstrate that by building our own workflow.

## Tweet Sentimental Analysis

In this guide, we will create a workflow in Pipedream that does the following things:

-   Fetches popular tweets, replies, and retweets of a given hashtag using Twitter's integrated app in Pipedream.
-   Uses the [Text Analysis API](https://rapidapi.com/twinword/api/sentiment-analysis/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) from RapidAPI Hub to analyze the tweets.
-   Returns the response in a Google Sheet.

The whole process will take about 5 minutes. Let's jump right in.

### → STEP #1: Trigger

If you haven't already, sign up for [Pipedream](https://pipedream.com/). Now, go ahead and create a new workflow. In the first step, we need to specify a trigger, i.e., the event which will run our workflow. Select the HTTP API one.

![Selecting a Trigger](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/trigger.png)

Now Pipedream will assign a URL that will trigger the workflow. You can also choose other events such as the schedule trigger to execute the workflow after a given time interval.

### → STEP #2: Tweets

We will fetch the tweets in this step. Click the **+** button to add the next step and select the Twitter app.

![Creating the second step using the Twitter events](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/twitter.png)

We will use the **Standard Search** event for this workflow.

![Standard Twitter Search](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/standard-search.png)

In the **auth** section, go ahead and authenticate the Twitter app. Pipedream keeps your credentials encrypted, and you can revoke them anytime. Once your Twitter is connected, specify the search keyword, language, and count parameters as follows:

![Specify params for Search](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/params.png)

Pipedream will prompt you to deploy the workflow. Deploy it and then click the **send a test event** button to execute the workflow. As you can see, we have received the tweets.

![Tweets returned by the second step](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/tweets.png)

### → STEP #3: Connect RapidAPI

We need to integrate RapidAPI now. First, click the **+** button to add a new step. Then search for `RapidAPI` and choose the **Run Node.js code with RapidAPI** event.

![Integrating RapidAPI in Pipedream](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/api.png)

Now, head over to [Text Analysis API](https://rapidapi.com/twinword/api/sentiment-analysis/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) on RapidAPI Hub and subscribe to it. You will see your API key in a field named `X-RapidAPI-Key`; copy it.

![Subscribe and Copy the API Key](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/subscribe.png)

Go back to your workflow and connect RapidAPI using the key.

![Connect RapidAPI](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/connect.png)

### → STEP #4: API Calls

Now we will send requests to the API for analyzing the tweets. Remember we can write any custom Node.js code in these steps? That is what we will do here.

We can easily access the data returned from the previous step as `steps.search_twitter.$return_value`. Also, our API key is now safely stored in `auths.rapidapi`. To use any npm package, you can simply import it, and Pipedream will install it automatically.

I coded the following snippet, which sends an API request for every tweet received in the previous step:

```js
let axios = require('axios').default;
let responseArray = [];

for (let i = 0; i < steps.search_twitter.$return_value.statuses.length; i++) {
	const options = {
		method: 'POST',
		url: 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1',
		headers: {
			'content-type': 'application/json',
			'x-rapidapi-host': 'text-analysis12.p.rapidapi.com',
			'x-rapidapi-key': auths.rapidapi
		},
		data: {
			language: 'english',
			text: steps.search_twitter.$return_value.statuses[i].full_text
		}
	};

	try {
		let response = await axios(options);
		responseArray.push(response.data);
		console.log(responseArray);
	} catch (error) {
		console.error(error.response);
	}
}

return responseArray;
```

With all that set, test the workflow again. You can see that our API is working and analyzing all the tweets for their sentiments.

![Sentiment Analysis of Tweets](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/response.png)

### → Bonus Step: Export to Google Sheet

Finally, we can create another step to do something with these results. Let's send these results to a Google Sheet. Create a new step, select the Google Sheets App and choose the **Add Multiple Rows** action.

![Google Sheets Action](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/sheet-action.png)

After connecting it with your Google Drive account, you can send the data to the specified Sheet. As you can see in the screenshot below, the analyzed tweets are exported to my Sheet whenever I execute this workflow.

![Response Exported to Google Sheet](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/pipedream-rapidapi/images/sheet.png)

Our workflow is ready. You can check the code and try it here in the [RapidAPI - Tweet Analysis Workflow](https://pipedream.com/@ahmadbilaldev/rapidapi-tweet-analysis-p_pWCnAG3).

## Wrap Up

Pipedream offers a quick and convenient tool to automate tasks, albeit keeping control over them. Combine it with the countless APIs available at RapidAPI Hub, and you have a powerful solution for just about any implementation.
