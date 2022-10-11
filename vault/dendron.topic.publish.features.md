---
id: SsMGHoFVgyBdydzI5mn78
title: Publishing Features
desc: ''
updated: 1664194842835
created: 1631895790486
---

## Lookup and Search

Next Generation Publishing includes a combined lookup and search bar:
- Search through the titles and contents of your notes using the search bar. 
If you want the search to work the same way as the "Lookup Note" command does in your editor, add a prefix `/` like `/root`.

- To change the default behavior similar to that of lookup, update the [[search mode | dendron.topic.publish.config.searchMode]] to `lookup`. 
To do full text search add a prefix `?` like `? Onboarding`.

<div style="position: relative; padding-bottom: 53.28125%; height: 0;"><iframe src="https://www.loom.com/embed/d1a3ea8114a74588b904a92b8eb9100e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>


## Table of Contents

Next Generation Publishing includes a _table of contents_ (TOC) in the left-hand nav, as a [[tree of the site|dendron.topic.publish.sidebar]]. On the right-hand side, a TOC is generated for the current page.

![Right-hanv navigation table of contents demo](https://org-dendron-public-assets.s3.amazonaws.com/images/publishing-local-toc-right-nav.gif)

## Permanent Ids

Every page is published using its unique ID which means that urls will never change, even if the filenames do.

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-ids.jpg" />

If you have a free GitHub account, then you can host your Dendron notes for free using [GitHub Pages](https://pages.github.com/) 

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-domain.jpg" />


## Powerful open source publishing platform (via Next.js)

Dendron publishes your notes using a custom build [Next.js](https://nextjs.org/) [template](https://github.com/dendronhq/nextjs-template) that is optimized for rendering Dendron notes. 