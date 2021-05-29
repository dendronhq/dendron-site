---
id: 2fe96d3a-dcf9-409b-8a09-fdaa5a664433
title: Features
desc: ''
updated: 1617643671872
created: 1608528227846
nav_order: 1
---

### Nested Hierarchies

Publishing supports the same nested hierarchies as your notes and allows you to navigate via the sidebar.

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-hierarchy.gif" />

### Nav Based Hierarchy Hints

You can see at a glance which notes have children and explore them from the nav without refreshing the page. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/dendron.jekyll.gif)

### Edit on Github

Every page can accept one-click contributions as long as the contributor has a github account. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/jekyll.edit.jpg)

Example of making a contribution to Dendron. 

<a href="https://www.loom.com/share/4a1b67f3fd1a40dab16949e9ea5e53dc"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/4a1b67f3fd1a40dab16949e9ea5e53dc-with-play.gif"> </a>

### Lookup

If you'd rather not click, dendron-jekyll also supports path based lookup.

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-lookup.gif" />

### Permanent Ids

Every page is published using its unique ID which means that urls will never change, even if the filenames do.

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-ids.jpg" />

If you have a free github account, then you can host your Dendron notes for free using [github pages](https://pages.github.com/) 

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-domain.jpg" />

### Jekyll Liquid Tags and Variables

You can find the docs on this under [[liquid|dendron.topic.liquid]]

- NOTE: this will only be "compiled" in the published site but won't be rendered in the regular markdown 

<img style="max-width: 720px;" src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/site-liquid.gif" />

### Selective Publication

You can choose to publish your whole vault, a single domain, or multiple domains within your vault. If a note links to a note that is not publishable, Dendron will create a custom 404 page.

### Note References

Dendron has [[note references|dendron.topic.refs]] that let you inline either the whole note or parts of a note into another note. Publishing via Dendron will also publish note references as part of the process.

<a href="https://www.loom.com/share/8eb01f6c3196415c8aadc4992805a176"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/8eb01f6c3196415c8aadc4992805a176-with-play.gif"> </a>

### Backlinks

This is the equivalent to the [[backlinks panel|dendron.topic.workbench#backlinks]] when using the desktop app. 

Backlinks are automatically deduped and also work in a multi-vault setting. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Fullscreen_2_25_21__8_08_PM.jpg)

<!-- ### Bad Links Report

When building your site by running `Dendron: Build Pod`, Dendron will generate a bad links report of all wiki-links that did not resolve. It will also update the links to point to a 404 page instead. 

<a href="https://www.loom.com/share/91c4d7b023754b76b4d02519946603e0"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/91c4d7b023754b76b4d02519946603e0-with-play.gif"> </a>
 -->
