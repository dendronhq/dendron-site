---
id: 8b3bfb16-8330-4a78-85cc-45581c319450
title: 8 Multi Publish
desc: ''
updated: 1618790883101
created: 1618789793997
---

## Goals

Publish multiple sites using one workspace

### Sub Goals

Make it possible to share links of multiple published sites from one workspace.

## Context

Currently, to publish a new site, users have to create a new workspace, even if its to publish using the exact same vaults. 

Similarly, if a user wants to reference urls from multiple published sites, they would need to keep multiple workspaces open. 

## Proposal

Introduce a `sites` parameter that is made from multiple [[site objects|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration#global-configuration]].

When a user uses [[Copy Note URL|dendron://dendron.dendron-site/dendron.ref.commands#copy-note-url]], Dendron can output one of the following:
- if the note is part of **one** published site (as determined by `siteHierarchies` and `duplicateNoteBehavior`), we return the url
- if the note is part of **multiple** published sites, we return a dropdown asking the user to pick a url
- if the note is part of **zero** published sites, we return an error message 

## Details

### Calculating a published site

This can be bothersome since we need to keep track of all hiearchies that are published and determine if they are unique to a single vault. 

For phase one, we will default to returning a dropdown of all valid urls and having the user choose. 

## Example

```yml
sites:
    - 
    name: handbook
    copyAssets: true
    siteHierarchies:
        - handbook
    siteRootDir: docs
    usePrettyRefs: true
    siteUrl: 'https://handbook.dendron.so'
    title: Dendron Handbook
    duplicateNoteBehavior:
        action: useVault
        payload:
            - handbook
    - 
    name: wiki
    copyAssets: true
    siteHierarchies:
        - dendron
    siteRootDir: docs
    usePrettyRefs: true
    siteUrl: 'https://wiki.dendron.so'
    title: Dendron Wiki
    duplicateNoteBehavior:
        action: useVault
        payload:
            - dendron-site
```

## Tradeoffs

We're introducing more complexity in the configuration for an easier publishing experience. 
