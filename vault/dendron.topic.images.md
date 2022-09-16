---
id: a91fd8da-6895-49fe-8164-a17acd8d9a17
title: Images
desc: ''
updated: 1663207286049
created: 1595562035825
---
## Summary

Dendron extends regular Markdown image support by allowing custom CSS properties. Images can also be pasted into a note from your clipboard.

## Use Cases

- copy/paste images into Markdown text
- customize image size and styles using extended image link syntax

## Features
### Copy & Paste Images into Plaintext

Copy images into the text using the `> Paste Image` command. This command automatically copies an image from your clipboard to  `${currentFileDir}/assets/images` by default and adds a Markdown link to the image.

### Extended Images

Dendron allows you to extend your images by adding custom CSS properties to
them. This can allow you to display an image at a specific size, make it float
(text wrapping around image), add a border, or much more. Extended images work both in [[dendron://dendron.dendron-site/dendron.topic.preview]] and in [[Publishing|dendron.topic.publish]]. See the examples below:

#### Sizing

You can control the size of the image using `width` and `max-width` properties. `width` sets a fixed size for it, and `max-width` will set the maximum size but will allow smaller sizes (for example, on mobile). For example:

![](/assets/images/2020-09-13-08-45-00.png){max-width: 300px}

The code for this is:
```
![](/assets/images/2020-09-13-08-45-00.png){max-width: 300px}
```

#### Centering

This image will be smaller, and will be centered in the page.

![](/assets/images/2020-09-13-08-45-00.png){max-width: 300px, display: block, margin: 0 auto}

The code for it looks like this:
```
![](/assets/images/2020-09-13-08-45-00.png){max-width: 300px, display: block, margin: 0 auto}
```

#### Float & Border

![](/assets/images/2020-09-13-08-45-00.png){width: 20%, opacity: 0.7, float: right, margin: 20px, border: 5px solid black}

This image should be floating on the right, allowing text to wrap around it. It will be slightly translucent, and will have a black border around it. The code for it looks like this:
```
![](/assets/images/2020-09-13-08-45-00.png){width: 20%, opacity: 0.7, float: right, margin: 20px, border: 5px solid black}
```

#### Transform

![](/assets/images/2020-09-13-08-45-00.png){width: 20%, float: left, margin: 2rem 10px, transform: "perspective(150px) rotateY(30deg)"}

This image should be floating to the left, and should have a 3-D effect on it! The code for it looks like this:
```
![](/assets/images/2020-09-13-08-45-00.png){width: 20%, float: left, margin: 2rem 10px, transform: "perspective(150px) rotateY(30deg)"}
```

One important thing in this example is the `transform: " ... "` part. Note the quotes: they are optional in most cases, but in complex cases they might be required. We don't have anything to warn you if your YAML is broken for now, but you can check the Preview V2, and the previewed image won't apply the CSS if it's broken.

## Options 
### Allowed CSS properties

For safety reasons, Dendron doesn't allow you to set just any CSS property. Here's a list of ones that are allowed:

- width, min-width, max-width
- height, min-height, max-height
- float
- border
- margin
- padding
- opacity
- outline
- rotate
- transition
- transform
- transform-origin
- z-index

If these aren't enough for you, let us know by [sending a feature request](https://github.com/dendronhq/dendron/issues/new/choose) and we'll add it.

## Getting Started
### Link to Locally Saved Images

An easy way to insert a locally saved image to your Markdown note is to do the following:

1. Copy / save the image in your `assets/images` folder located in your vault,
2. In Dendron navigate to the note where you wish to input the image(s), and type `![Image_Description](assets/images/File_Name.png)`. Be sure to replace `Image_Description` and `File_Name.png` with the description of the image and the actual filename
3. Congratulations! You've inserted your first image.

### Copy & Paste an image in Plaintext
Dendron automatically inserts images in your clipboard using the `> Paste Image` command. The image is saved to `${currentFileDir}/assets/images` by default. This feature requires the [Paste Image](https://link.dendron.so/vscode-paste-image) VS Code extension.

<a href="https://www.loom.com/share/e1f6d207a1134f42b7a1a7750658acec">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/e1f6d207a1134f42b7a1a7750658acec-with-play.gif"> </a>
</a>

### Syntax for Extending Images

Extended images are the same as regular images, except that you add CSS properties at the end of it using an inline YAML map. This is simpler than it sounds, it looks like this:

```
![alt text (on mouse over)](/assets/image.png){width: 400px}
```

At the simplest, this can let you limit the width of the image. You can both set it to a fixed size like `400px`, or a ratio like `50%`.

To add multiple properties to an image, separate the properties with commas. This should look like:

```
![alt text (on mouse over)](/assets/image.png){width: 400px, height: 200px}
```