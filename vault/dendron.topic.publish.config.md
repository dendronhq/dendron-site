---
id: fabYbPyk3DMCMoG92lIrq
title: Config
desc: ''
updated: 1640727025047
created: 1637772506823
---

## Summary

Publishing configuration for Dendron NextJS Publishing.

- NOTE: this is a work in progress, currently, refer to configuration options [[here|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration]]

## Scopes

Configuration introduced here have three different scopes:
- vault: applies over a vault
- hierarchy: apply over a hierarchy
- note: apply over a single note

## Organization

Controls the structure of notes in published page

### Collection
- scopes: [note]

This feature is inspired by [jekyll collections](https://jekyllrb.com/docs/collections/).
When set on a note, marks the given note and all children of it as a collection. 


## SEO

Search engine optimization related settings

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


## Static Assets

Publishing non dendron notes (eg. pictures, css, scripts, etc)

### Workspace Properties

#### copyAssets

- default: true

Copy assets from vault to site.
