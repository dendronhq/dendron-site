---
id: ZN81TCMae9DK4QdMgOhbw
title: Export
desc: ''
updated: 1641279150888
created: 1641277681803
published: false
---

## Summary
The Markdown Export Pod exports Dendron Markdown to regular Markdown. It convert note references and Dendron specific syntax to regular Markdown.

## Config

### wikiLinkToUrl
- default: false
- type: boolean

If set to true and `siteUrl` is set, convert wiki links to Markdown links that use `siteUrl` as root. 

### convertUserNotesToLinks
- type: boolean
- default: false

If set to true, converts user notes([[user.${username}]] or @username) to markdown links.

### convertTagNotesToLinks
- type: boolean
- default: false

If set to true, converts tag notes([[tags.${tagName}]] or #tagName) to markdown links.

### addFrontmatterTitle
- type: boolean

If set to true, adds note title from the frontmatter to the start of exported note as h1 header.

## Quickstart

To change the default behavior,

1. Run [[Configure Export Pod V2|dendron://dendron.dendron-site/dendron.ref.commands#configure-export-pod-v2]] and select `MarkdownExportV2`.
1. If the config already exists, select the config from quickpick else enter a generic id for you new config.
1. Add the following
  ```Yml
  wikiLinkToURL: true
  convertTagNotesToLinks: false
  convertTagNotesToLinks: false
  ```
1. Run `Dendron: Export Pod V2` and select your config.
