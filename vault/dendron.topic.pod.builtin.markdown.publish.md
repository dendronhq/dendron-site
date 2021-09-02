---
id: 31d1e024-fe37-477b-b525-d94b0c136aeb
title: Publish
desc: ''
updated: 1629325541841
created: 1617328001523
---

## Summary
Publish Dendron Markdown to regular markdown. Convert note references and dendron specific syntax to regular markdown.

## Config
- default: false

If set to true and `siteUrl` is set, convert wiki links to markdown links that use `siteUrl` as root. 


## Quickstart

1. Run [[Configure Pod|dendron.topic.commands#configure-pod]] and select `publish markdown`
1. Add the following
  ```Yml
  wikiLinkToURL: true
  ```
1. Run [[Publish Pod|dendron.topic.commands#publish-pod]] and select `publish markdown`
