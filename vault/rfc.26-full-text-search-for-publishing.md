---
id: VaCraUDApW60xi0EDfBK9
title: 26 - Full Text Search for Publishing
desc: ''
updated: 1631209688877
created: 1631209599122
---

## Goals

Enable full text search for Next Publishing

Desired properties:
- [ ] re-use our lookup engine (fuse) [^1] to also do full text search
- [ ] full text search should be done client side (with option to change to server side in the future - aka this should be pluggable)
- [ ] ideally, we can construct search index at build time vs run time
- [ ] full text search should not block or slow down initial page load
- [ ] if full text search is not ready, should show progress indicator in search bar

## Context

Next Publishing currently does not have full text search

## Details

## Open Questions
- should we use lookup to do both full text search and hierarchy lookup (current implementation in 11ty) or do we want to do something different?

## Example

## Discussion
- [26 - Full Text Search for Publishing · Discussion #1320 · dendronhq/dendron](https://github.com/dendronhq/dendron/discussions/1320)

## Lookup
[^1]: Client side full text search using fuse.js and is described [[here|pkg.dendron-engine.t.lookup]]
