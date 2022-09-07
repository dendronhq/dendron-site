---
id: SsMGHoFVgyBdydzI5mn78
title: Publishing Features
desc: ''
updated: 1662572861091
created: 1631895790486
---

## Lookup and Search

Next Generation Publishing includes a combined lookup and search bar:

* This can work the same way that the "Lookup Note" command does in your editor. The bar will display the name of the current note, and you can use the bar to look up other notes.
* You can search through the titles and contents of your notes, if not using it like "Lookup Note", by using `?` as a prefix. Example: `? Onboarding`

![Lookup and search in combined search bar demo](https://org-dendron-public-assets.s3.amazonaws.com/images/publishing-combined-search-bar.gif)

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