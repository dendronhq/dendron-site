---
id: yYMuhi2TmTC63MysmtwqH
title: Faq
desc: ''
updated: 1642754279569
created: 1631989493092
---


### Why are pages slow in the local preview (`publish dev`)?

This is because Dendron has to build the pages trying to view when you click on
them. Once published, the pages are built ahead of time so there won't be any delay.

### How do I add a logo to my website?

You should add the logo image under the `assets` folder, inside a vault you are publishing.
Alternatively, you can also put the image on an external image host like imgur.
Then, set the [[logo configuration|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration#logo]] to use that logo.
