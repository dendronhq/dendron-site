---
id: 0f4f9dd0-396b-4064-b451-97a2276ce4e1
title: Parsing Block Syntax
desc: ''
updated: 1621656837546
created: 1619807883119
---


## Tasks
- [x] parsing block links
    * Revised existing link parsing code to recognize block links. We can now parse links like `[[note#^block-id]]` and `[[#^block-id]]`. As an extra benefit, we also now allow links like `[[#header]]` for linking to headers within the same file.
- [x] parsing block anchors
- [x] parsing block reference link 

## Parsing block links
- see [[Block Links|rfc.10-blocks#block-links]]
- create a new remark plugin (eg. `dendronBlockLink.ts`)
    - example of existing plugin `engine-server/src/markdown/remark/wikiLinks.ts`
- create a parsing function that can identify a block link
- write tests (see `engine-test-utils/src/__tests__/engine-server/markdown/noteRefv2.spec.ts` as reference)

## Parsing block anchors
- see [[Block Anchor|rfc.10-blocks#block-anchor]]
- create a new remark plugin (eg. `dendronBlockAnchor.ts`)
- create a parsing function
- write tests

## Parsing block reference link 
- see [[Block Reference Link|rfc.10-blocks#block-reference-link]]
- add this to `dendronBlockLink`
- add an attribute to recognize if a block link is a regular link or a reference link
- write test
