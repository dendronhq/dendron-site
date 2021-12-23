---
id: 31d1e024-fe37-477b-b525-d94b0c136aeb
title: Publish
desc: ''
updated: 1639015704375
created: 1617328001523
---

## Summary
Publish Dendron Markdown to regular Markdown. Convert note references and Dendron specific syntax to regular Markdown.

## Config
### wikiLinkToUrl
- default: false

If set to true and `siteUrl` is set, convert wiki links to Markdown links that use `siteUrl` as root. 


## Quickstart

1. Run [[Configure Pod|dendron.ref.commands#configure-pod]] and select `publish markdown`
1. Add the following
  ```Yml
  wikiLinkToURL: true
  ```
1. Run [[Publish Pod|dendron.ref.commands#publish-pod]] and select `publish markdown`
