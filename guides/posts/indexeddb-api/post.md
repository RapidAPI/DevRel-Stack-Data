---
title: Interactive Guide To IndexedDB API
description: It is a Web API that provides you with a non-relational database right inside your browser.
publishedDate: 2021-12-20T08:44:15.446Z
lastModifiedDate: 2021-12-20T08:44:15.446Z
authors:
    - saad
categories:
    - interactive
tags:
    - indexeddb
    - api
    - web-api
coverImage: ''
---

<Lead>

Building an offline web application mode requires more than just caching the files. You also need a database where you can store the application’s data. You can benefit from it since your application will use a browser to run.

</Lead>

A web browser like Chrome, Firefox, or Edge, contains a database that you can use at any point in your application. You can use this database using IndexedDB Web API. These browsers also have local storage, but it is limited in some use cases.

Let’s take a deeper look at IndexedDB API.

## IndexedDB API

It is a Web API that provides you with a non-relational database right inside your browser. It has object stores that can be used to store almost anything from JavaScript objects to files to blobs, etc. You can also perform transactions on IndexedDB.

IndexedDB is a low-level API for client-side storage of a significant amount of structured data. It uses indexes to do high performant searches of this data.

Each IndexedDB database is unique to an origin, i.e., a domain or a subdomain. It can not access or be accessed by any other domain. Also, data storage limits are pretty significant in IndexedDB, if they exist at all.

Here are some of the terms that you will find in IndexedDB:

-   **Database**: It is the storage space that holds your records. It contains the data that you would want to persist. You can use as many databases as you want for your application.
-   **Object Store**: The data store holds a particular type of data. You can think of it as buckets to store data. Typically, there is one object stored for each type of data you are storing.
-   **Index**: It is an object store used to organize data in another object store by an individual property of the data. Using this property, you use the index to fetch the data in the object-store.
-   **Transaction**: A transaction ensures database integrity by enwrapping the database operations or the group of operations. If even a single action in the transaction fails, none of them gets applied. The database then reverts to its earlier state.
-   **Cursor**: It is used to iterate over multiple records in a database.

## Using IndexedDB API

Let’s look at how you can use this web API to save and retrieve data from IndexedDB.

### Creating An IndexedDB Database

You need to create the database in your indexedDB. For this, you would need to open a connection first. While opening this connection, you define the name of your database and its version number. Later you will store data objects here.

Now you need to add handlers to your connection requests. We set three handlers, i.e., `onupgradeneeded`, `onsuccess`, `onerror`. If the database does not exist for an origin in the IndexedDB, the `onupgradeneeded` will be called first, creating the database. If it exists, the `onsuccess handler will be called.

<LearnIndexedDB createDatabase />

Once you click on the submit button, right-click on this page and open the chrome developer tools. Go to the Application tab and select `IndexedDB` from the storage section. You will see a database has been created there.

![IndexedDB API Instance Created](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/ba55ebf9b88a1a0f5b417b615bcd6946b0a7eb0d/guides/posts/indexeddb-api/images/createDB.png)

### Saving Data in IndexedDB

Let’s save some data in the database. For this, you would need to do a transaction. Ensure you have a database in the IndexedDB that is opened in your application. Select the data you want to store and perform a read and write transaction operation. After that, you can save the data in the specified object store.

<LearnIndexedDB writeInDatabase />

Once you click on the submit button, right-click on this page and open the chrome developer tools. Go to the Application tab and select `IndexedDB` from the storage section. You will see that the database you created earlier has an object with the data you have entered.

![Data Stored In IndexedDB](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/ba55ebf9b88a1a0f5b417b615bcd6946b0a7eb0d/guides/posts/indexeddb-api/images/writeDB.png)

### Retrieving data From IndexedDB

To retrieve the data, you need to perform the read-only transaction operation. You can get the data one at a time or get everything at once using the `getAll` function. Afterward, add a handler to your transaction request and then manipulate the data accordingly.

<LearnIndexedDB viewFromDatabase />

That’s all, folks! I hope this brief guide has provided you with enough knowledge that now you can use the IndexedDB API in your projects.
