---
id: fabYbPyk3DMCMoG92lIrq
title: Config
desc: ''
updated: 1637773031736
created: 1637772506823
---

## Summary

Publishing configuration for Dendron NextJS Publishing.

- NOTE: this is a work in progress, currently, refer to configuration options [[here|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration]]

<!-- ## General

### Note Properties

#### permalink
- default: ""

Override URL for the note -->

## Static Assets

### Workspace Properties

#### copyAssets

- default: true

Copy assets from vault to site.

## Page Visibility

### Note Properties


## SEO

### Note Properties

#### image
- default: ""
- syntax: 
    - `image.url`: string
    - `image.alt`: string
- example
    ```yml
    image:
        url: https://org-dendron-public-assets.s3.amazonaws.com/images/blog-mobile-editor-header.png
        alt: A tree with many branches in full bloom
    ```
Sets image url for the page. Image shows up in image preview on social media sites


