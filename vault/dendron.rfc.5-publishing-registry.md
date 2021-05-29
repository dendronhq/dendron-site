---
id: 21b2e152-95f7-4904-8a8e-8d4d0b8c950c
title: 5 Publishing Registry
desc: ''
updated: 1614550954834
created: 1614183727211
---

## Goals

Make it possible to discover, link, and build upon other published digital gardens. 

## Tenets
- extensible
- accessible
- interoperable

## Use Cases
- link to and from other gardens with automatic reference tracking and citations
- discovery of gardens based on topics and interests

## Proposal

Create both a spec and an initial implementation of the spec to keep a registry of digital gardens. 

- Metadata for Garden:
    - url: domain 
    - updated: epoch, last updated
    - created: epoch, created
    - author: name of author
    - author.email: email of author
    - linksTo: all gardens that this one links to, updated during upload
    - linksFrom: all gardens that link to the current page, dynamically calculated and cached
    - schemas: list of [[Schemas|dendron.topic.schema]] adopted by the garden
    - tags: list of tags
    - license: license for garden
    - host: hosting platform

- Metadata for individual page:
    - should be similar to that of garden

## Example
```
curl ENDPOINT/gardens/{username}/{gardenName}

url: dendron.so
tags: [pkm, vscode, note-taking]
updated: 1614184037
created: 1614182037
primaryAuthor: Kevin Lin
linksFrom:
- kiran/homepage
- nikita/homepage
- ...
linksTo:
- dendronhq/pkm
host: 
  type: git
  url: https://github.com/dendronhq/dendron-site.git
  scope: public

```

## Tradeoffs

- TBD
