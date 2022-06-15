---
id: 0fbg5vbv5jzb0623pbi4v3t
title: Quickstart
desc: "Getting started customizing the theme for the preview"
updated: 1654578075011
created: 1653544545225
---

## Summary

{{fm.desc}}

## Prerequisites

- Make sure you are using the latest Dendron and VSCode version.

## Steps

### Picking the light or dark theme

1. Open the `dendron.yml` file, at the root of your Dendron workspace.
1. Edit the `preview.theme` configuration, so the config file will look like the following:

   ```yaml
   preview:
     theme: light # or dark
     ...
   ```

1. Close and reopen the note preview. It should now use your preferred theme!

### Applying a custom theme

![](https://org-dendron-public-assets.s3.amazonaws.com/images/preview-custom-theme-example.png)

You can apply a custom theme by writing a custom CSS file.

1. Follow the instructions in the [[previous section|dendron://dendron.dendron-site/dendron.topic.theme.preview.quickstart#picking-the-light-or-dark-theme]], but set the theme to `custom` instead.
1. Create a file named `custom.css` at the root of your workspace, next to the `dendron.yml` file. Inside this file, add the following contents. Modify the colors used however you'd like.

   ```css
   body, .ant-layout {
     /* The background color of the preview. */
     background-color: #002b5c;
   }

   body,
   h1,
   h2,
   h3,
   h4 {
     /* Text color for the text, not including links. */
     color: #ffffff;
   }

   a,
   a:hover,
   a:active {
     /** Color for links, except ones that have been already visited. */
     color: #b2f7ef;
   }
   ```

### Going back to the default theme (use your current VSCode theme colors)

1. Open the `dendron.yml` file, at the root of your Dendron workspace.
1. Remove the `preview.theme` configuration.
1. Close and reopen the note preview.
