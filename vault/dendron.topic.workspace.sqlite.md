---
id: r6e3yl55oa3bpvyhjq3wkt2
title: Sqlite
desc: ''
updated: 1661190995148
created: 1661190786019
published: false
---

## Summary

This is documentation for running Dendron using sqlite as the metadata backend. It is currently a #stage.germ feature

## Details

Switching to using sqlite as the metadatacan result in 30x speed up on lookup queries (50k notes, queries complete in ~5ms vs +150ms). The search is based off the SQLite's built-in [FTS5 extension](https://www.sqlite.org/fts5.html).

## Getting Started

1. Make sure you have `sqlite` available on your local machine. 
1. Add the following setting in dendronrc.yml or dendron.yml.
```yml
workspace:
  metadataStore: sqlite
```
1. Reload your workspace

You should notice a `metadata.db` file in the same directory as your `dendron.yml`. This file contains all the metadata for your workspace and will be used for lookup queries during runtime