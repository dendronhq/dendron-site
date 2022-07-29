---
id: lzviz9odglotrbsgcp678i6
title: File Link
desc: ''
updated: 1659078529005
created: 1658828603919
---

> File link feature is at #stage.sprout

## Summary

A file link is a [[dendron.topic.links.wiki-link]] that links to files in your workspace that are not Dendron notes, or not in a Dendron vault.

### Getting started

#### Automatically creating file links

The easiest way to link to a file is using the [[Copy Note Link|dendron.topic.links.commands.copy-note-link]] command, which will automatically create a link for you. 

Similar to notes, [[Copy Note Link|dendron.topic.links.commands.copy-note-link]] command will create a [[Block Anchors|dendron://dendron.dendron-site/dendron.topic.note-reference.concepts.block-anchors]] for you if you have a region of text selected.

#### Manually creating file links

To manually create file links, you need to write the relative path to the file in a [[dendron.topic.links.wiki-link]]

The path should be relative to where your `dendron.yml` file is located. 

For example, if the root of your workspace contains `dendron.yml` and a folder called `src` in your project, you can write `[[src/index.js]]`. 

Alternatively, if you are linking to a file inside the `assets` folder of a vault, you can type `[[assets/example.py]]` to link to it.
