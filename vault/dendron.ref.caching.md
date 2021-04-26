---
id: 93022442-b49b-4510-b695-e10d8651ecfe
title: Caching
desc: ''
updated: 1619460217214
created: 1619455498421
---

Dendron writes the metadata of all notes for a given vault to the following file inside the vault `.dendron.cache.json`.

This cache file is read by Dendron at startup to speed up initial indexing - if the file has not changed, Dendron will load metadata from the cache instead of re-indexing the file. 

To disable this behavior, you can set [[noCaching|dendron.topic.config#nocaching]] to `true` inside `dendron.yml`