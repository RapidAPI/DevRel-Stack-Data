---
title: How to Call APIs in Angular?
description: APIs are a fundamental part of the web, and there are many awesome APIs waiting to be utilized. This guide will demonstrate how you can consume APIs in an Angular application.
authors:
    - ahmad-bilal
categories:
    - api
tags:
    - api
    - angular
publishedDate: 2022-03-03T16:27:05.876Z
lastModifiedDate: 2022-03-03T16:27:05.876Z
coverImage: ''
draft: false
---

<Lead>
	Calling APIs is a major part of any web application. Today, countless APIs
	are waiting to be consumed in meaningful applications, whether React, Vue,
	Svelte or Angular-based.
</Lead>

## Angular

Angular, led by Google, is an open-source front-end framework. Focused on building user interfaces for web and mobile applications, it is among the most popular JavaScript frameworks for building applications.

Angular is built on TypeScript and offers a powerful CLI to develop Angular applications. With that said, let's see how we can call APIs in an Angular application. I have divided the process into steps which are as follows:

## → STEP 1: Find an API

First of all, let's find an API to use in our Go application. [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) enables you to choose from thousands of public APIs for use in your projects.

<Callout
	title="Deep dive"
	linkText="Read more"
	linkHref="https://rapidapi.com/learn/hub"
>
	Learn more about how to use RapidAPI Hub in this fun interactive guide.
</Callout>

For this guide, we will use the [Random Facts API](https://RapidAPI.com/APILAB/api/random-facts2/?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel) from RapidAPI Hub that gives us the carbon footprint data of travel.

To use this API, you need to subscribe to it first. You can do this by clicking on the **Subscribe to Test** button, which will redirect you to the pricing page. You can select the free plan for this guide.

![Subscribe to Random Facts API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/build-random-facts-app/images/subscribe.png)

After all this, you will be redirected back to the original page. Here you will have a field named `x-rapidapi-key`. It is your API key. Save it somewhere because we will need it in the application later.

## → STEP 2: Create the application

We need the official Angular CLI to create a new Angular application and develop it. Run the following command in your terminal to install the CLI:

```sh
npm install -g @angular/cli
```

Once installed, we can use the command `ng` to access the CLI. The following command will create a new application named `api-angular`.

```sh
ng new api-angular
```

Once you are done, open this project in your preferred code editor.

## → STEP 3: Start the application

To run the app, open the terminal in the `api-angular` directory and run the following command:

```sh
ng serve
```

This command will serve your application, an2d you will be able to view the starter app by navigating to [`http://localhost:4200/`](http://localhost:4200/).

## → STEP 4: Formulate the API Request

Now, let's get our hands dirty and start writing the code to consume the API. The first thing we need to do is to import the `HttpClientModule`, which allows us to make HTTP requests. So, go ahead and import it in your `src/app/app.module.ts` file.

```ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; // importing the http module

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule // adding it in the imports
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
```

Now, you can add the call to the API in any component of the application. Open the `app.component.ts` file, and import the `HttpClient` and `HttpHeaders` modules as follows:

```ts
import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private http: HttpClient) {}
	title = 'api-angular';
}
```

Now, we will use the `http.get` method to send the request to the API. Our API call will look like this in code:

```ts
let headers = new HttpHeaders({
	'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
	'x-rapidapi-key': 'your-api-key'
});
this.http
	.get<any>('https://random-facts2.p.rapidapi.com/getfact', {
		headers: headers
	})
	.subscribe(data => {
		console.log(data);
	});
```

Notice how we added the headers, including our RapidAPI key. Replace the value of the `x-rapidapi-key` in the above code snippet with the API key you saved earlier.

## → FINAL STEP: The API response

Finally, we can wrap the API call in the `ngOnInit()` method, a lifecycle hook in Angular which is fired whenever a component finishes loading. After adding the API call in the hook, the `ngOnInit` hook will trigger the API call whenever the component loads. The final code looks like this:

```ts
//app.component.ts
import {Component, OnInit} from '@angular/core'; // Importing OnInit hook
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	// Implementing OnInit
	constructor(private http: HttpClient) {}

	title = 'api-angular';

	ngOnInit() {
		// API Call
		let headers = new HttpHeaders({
			'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
			'x-rapidapi-key': 'your-api-key'
		});
		this.http
			.get<any>('https://random-facts2.p.rapidapi.com/getfact', {
				headers: headers
			})
			.subscribe(data => {
				console.log(data);
			});
	}
}
```

Now our application is ready to make API calls. Reload your application and check your console. You will see a random fact like this:

![Random Fact returned by the API](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/call-apis-angular/images/response.png)

## Wrap Up

This guide was an introduction to consuming APIs in Angular. We hope that now you can start using APIs in your awesome Angular projects.
