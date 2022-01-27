---
title: Interactive Guide To HTML Drag and Drop API
description: The Drag and Drop API lets you drag an element and drop it in a particular zone. In this piece, I have explained the working of drag and drop API and how you can use it to build apps.
publishedDate: 2022-01-10T10:25:51.945Z
lastModifiedDate: 2022-01-10T10:25:51.945Z
authors:
    - saad
categories:
    - interactive
    - webApis
tags:
    - drag
    - drop
    - html-drag-drop
    - api
coverImage: ''
---

<Lead>

Have you ever wondered how you can drag and drop content on some websites? It is done using the HTML Drag and Drop API. For instance, if you have used a kanban style board like GitHub project board, you can drag around a todo card into the in-progress or completed area.

</Lead>

Let’s take a deeper look into how it works and how you can use it in your web application.

## HTML Drag and Drop API

This API lets you make elements draggable in a website. All you need to do is set the value of `draggable` property to true. Afterward, you would need to write down appropriate functions to handle different events like the `drag`, `drop`, `dragover`, etc. These events fires at different intervals when you start dragging an element.

## Getting Started With The API

Let’s look at how you can use HTML drag and drop API in a website. Create a folder and open it in your preferred code editor to get started. Now create an HTML file in your project folder.

Copy and paste the following code in this file.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>HTML Drag And Drop API</title>
	</head>
	<body>
		<p draggable="true">Howdy, you! You can drag me around.</p>
	</body>
</html>
```

When you run the code, you will see that you can drag around the content you have in the paragraph tag.

<LearnDragAndDrop showDraggable />

Let’s take this a step further.

### Using Drag Events

I mentioned earlier that you could use multiple drag events alongside the draggable attribute. You can not only drag an element but also drop it in a defined drop zone.

Let’s take a look at this.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>HTML Drag And Drop API</title>
		<style>
			.drag-container,
			#drop-zone {
				height: 100px;
			}
		</style>
	</head>
	<body>
		<div class="drag-container">
			<p draggable="true" id="drag-element">I am draggable.</p>
		</div>
		<div id="drop-zone">
			<h2>Drop Zone</h2>
		</div>
		<script>
			const dragElement = document.getElementById('drag-element');

			dragElement.addEventListener('dragstart', function (e) {
				e.dataTransfer.setData('id', e.target.id);
			});
		</script>
	</body>
</html>
```

In the above code snippet, I have attached an event listener, `dragstart`, to the div with id `drag-element`. As soon as you start dragging an element, the function attached with the `dragstart` event listener will fire. Here you save the data of the draggable element, mostly its id and other important information.

Now let’s implement a drop zone to drop your draggable element.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>HTML Drag And Drop API</title>
		<style>
			.drag-container,
			#drop-zone {
				height: 100px;
			}

			.drag-container {
				background-color: aqua;
			}

			#drop-zone {
				background-color: cornflowerblue;
			}
		</style>
	</head>
	<body>
		<div class="drag-container">
			<p draggable="true" id="drag-element">I am draggable.</p>
		</div>
		<div id="drop-zone">
			<h2>Drop Zone</h2>
		</div>
		<script>
			const dragElement = document.getElementById('drag-element');
			const dropZone = document.getElementById('drop-zone');

			dragElement.addEventListener('dragstart', function (e) {
				e.dataTransfer.setData('id', e.target.id);
			});

			dropZone.addEventListener('drop', function (e) {
				e.preventDefault();

				const dragElementID = e.dataTransfer.getData('id');
				const dropElement = document.getElementById(dragElementID);
				e.target.appendChild(dropElement);
			});

			dropZone.addEventListener('dragover', function (e) {
				e.preventDefault();
			});
		</script>
	</body>
</html>
```

I have created another div. It will be our dropzone. Afterward, I have attached an event listener to the drop zone div where I listen for the drop event.

Earlier, I saved the ID of the drag element using the `setData` function of the `dataTransfer` object. Now when this drag element is dropped on the drop zone, the ‘drop’ event listener will fire, retrieve the ID of the draggable element, fetch its DOM implementation, and lastly, append the drag element to the drop zone.

I have given height and background color to both divs, so you separate them easily.

I have attached another event listener, `dragover`, to the drop zone. It fires when an element is on top of the drop zone. Here, I am preventing the page from reloading using the event object's `preventDefault` method.

<LearnDragAndDrop showDragAndDrop />

There are a bunch of other event listeners that you can use with the drag and drop API. It will depend on your requirement.

That’s all, folks! I hope this brief guide has provided you with enough knowledge that now you can use the HTML Drag and Drop API in your projects.
