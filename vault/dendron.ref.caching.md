---
id: 93022442-b49b-4510-b695-e10d8651ecfe
title: Caching
desc: ''
updated: 1619455498421
created: 1619455498421
---

Dendron creates a cache of note metadata on startup. This is to speed up startup performance - instead of re-indexing everything each time, Dendron will pull the data from the cache if the contents of the note are unchanged. Dendron writes the cached metadata as as `.dendron.cache.json` file inside each vault. You are free to commit this to source control if you want your cache to persist between machines.
