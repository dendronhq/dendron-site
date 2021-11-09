---
id: 93022442-b49b-4510-b695-e10d8651ecfe
title: Caching
desc: ''
updated: 1619793919083
created: 1619455498421
---

## Summary

Dendron writes the metadata of all notes for a given vault to the following file inside the vault `.dendron.cache.json`.

This results in over 5x improvements of initialization times for workspaces with over 10k notes.

This cache file is read by Dendron at startup to speed up initial indexing - if the file has not changed, Dendron will load metadata from the cache instead of re-indexing the file. 

To disable this behavior, you can set [[noCaching|dendron.ref.config#nocaching]] to `true` inside `dendron.yml`


## Details

Dendron caches the following properties for each note:
- frontmatter 
- wikilinks

The following information is not cached and is read each time at startup:
- note contents
- vault metadata
