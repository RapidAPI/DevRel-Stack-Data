---
title: Introduction to Barcode Detection API
description: "This API lets you decode different kinds of barcodes. It takes an image, performs operations on it, and produces a result accordingly. Let's take a look at how what this API is and how you can use it."
publishedDate: 2022-03-28T10:41:42.086Z
lastModifiedDate: 2022-03-28T10:41:42.086Z
authors:
    - saad
categories:
    - webApis
    - api
tags:
    - barcode
    - detection
    - barcode-detection-api
    - api
coverImage: ''
---

<Lead>

Every developer wants to make their site's user experience extraordinary. If the users can quickly go through it and have a good experience, they are successful. One of the ways to improve user experience is to introduce barcodes to your application.

</Lead>

You can use barcodes at several places during development. For instance, they can serve as an alternative way to sign in on a website; you can use them to eliminate the hassle of writing some piece of text for the user; they can also be used in your e-commerce websites for getting the product price. These are just some of the many use cases.

You also need to provide a way to scan barcodes through your website and then use the information it provides. Fortunately, a web API exists for this purpose. It's called Barcode Detection API. Let's take a look.

## Barcode Detection API

As the name suggests, this web API lets you decode different kinds of barcodes. It takes an image, performs operations on it, and produces a result accordingly. The image can be provided in various ways, such as through the `image`, `video` or `canvas` tags.

The Barcode Detection API supports a lot of different barcodes, including `aztec`, `data_matrix`, `qr_code`, `upc_a`, etc. Among all these, the `qr_code` is widely used for encoding information like text, URL, or other data.

## detect Method

The API provides a `detect` method that you can use to detect the barcode and then decode it. Here is how you do it:

```js
try {
	const barcodes = await barcodeDetector.detect(image);
	barcodes.forEach(barcode => console.log(barcode));
} catch (err) {
	console.error('Barcode detection failed:', e);
}
```

The image is the barcode that you want to detect and then decode to access the information it provides.

## Support

This API is not well supported across all major web browsers. It has partial support on Chrome, Edge, and Opera desktop versions and no support on Firefox and Safari.
