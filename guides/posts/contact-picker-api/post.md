---
title: Introduction to Contact Picker API
description: Contact Picker API lets you open up a piece of UI from which the user can select the contact they wish to import into the website. In this piece, let's take a quick look at this API.
publishedDate: 2022-04-04T02:56:29.227Z
lastModifiedDate: 2022-04-04T02:56:29.227Z
authors:
    - saad
categories:
    - web-apis
    - api
tags:
    - contact-picker-api
    - web-api
    - api
coverImage: ''
---

<Lead>

Every web application has a unique set of features designed specifically around the application’s theme. If it is a search engine, you would be adding functionalities for users to search any query. Likewise, an email application lets you send professional messages and emails to multiple personnel.

</Lead>

Underlying all these features, there is often an API that is bringing them to life. One such feature allows users to select the contact details right from the web application. It is usually simple to achieve in mobile applications, yet it becomes difficult with websites.

Fortunately, a web API provides the same feature but in a web application. Let’s take a look at it.

## Contact Picker API

This web API lets you open up a piece of UI from which the user can select the contact they wish to import into the website. The API provides three interfaces. Among them, the `ContactManager` interface provides a `select` method used to get the contact details.

The API provides only one-off access to the user’s contact, making the developers request access to user contact’s every time they need it. It is a security feature and ensures the user contact book is not unnecessarily exposed.

As mentioned above, the API provides three interfaces.

### ContactAddress

This interface represents the physical address of the contact. You can access it after getting the contact from the user and then fetching the address using the `address` array.

### ContactManager

This interface contains the `select` and `getProperties` methods that are used to select contacts and get an array of available properties in contacts, respectively.

### Navigator.contacts

It returns the instance of API via the `ContactManager` interface.

## Usage

This API is asynchronous in nature. Here is a quick snippet of how you can use it:

```js
const getUserContacts = async () => {
	try {
		const contacts = await navigator.contacts.select();
		console.log(contacts);
	} catch (err) {
		console.log(err);
	}
};
```

When the function executes, it will open a popup where the user contacts will be listed. Once the user selects the contacts, they will be saved in the `contacts` variable. Afterward, you can do use this data however you like.

Note that this feature is only available in the mobile version of your web application. It will not work in the web version.

## Support

The Contact Picker API is only available in a secure and top-level browsing context. It does not have support across the desktop versions of major web browsers like Chrome, Safari, Firefox, etc. Although, it currently supports mobile versions of Chrome, Opera, and Samsung Internet browser.
