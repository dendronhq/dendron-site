---
id: RoXgGa3xzzF9rdYDPDDUY
title: Backlinks
desc: ''
updated: 1635583014222
created: 1635581979547
---

## Overview

Backlinks are used to navigate note links in the other direction.

Backlinks are initialized during workspace init. See [`FileStorage.initNotes`](https://github.com/dendronhq/dendron/blob/be6f85b09229fc5850036b5e5c3eb5428deaf7f4/packages/engine-server/src/drivers/file/storev2.ts#L318) which calls [`FileStorage._addBackLinks`](https://github.com/dendronhq/dendron/blob/be6f85b09229fc5850036b5e5c3eb5428deaf7f4/packages/engine-server/src/drivers/file/storev2.ts#L370) to initialize them.

The backlinks are not later kept up-to-date as notes change, because it's
expensive to update them. Instead, they get recalculated on the run by [`BacklinksTreeDataProvider`](https://github.com/dendronhq/dendron/blob/105dc566be371a405d0b1372fe9b9c5afd9a497a/packages/plugin-core/src/features/BacklinksTreeDataProvider.ts#L171) when needed. The view itself might need to get refreshed however, which you can do by using `getExtension().backlinksTreeDataProvider?.refresh()`. See [`FileWatcher.refreshTree`](https://github.com/dendronhq/dendron/blob/a833aa16f7bf8d8c69e07caf5dd1e376de93a974/packages/plugin-core/src/fileWatcher.ts#L202) for an example.

## Common Issues

### Backlinks aren't updating!

First thing to check is that the links themselves are being updated.
`NoteSyncService.updateNoteMeta` is responsible for finding the links after
initialization, make sure it's finding the right links.

For files added outside of Dendron (git sync, file copied etc.), [`FileWatcher`](https://github.com/dendronhq/dendron/blob/a833aa16f7bf8d8c69e07caf5dd1e376de93a974/packages/plugin-core/src/fileWatcher.ts#L23) is responsible for updating notes. It also refreshes the tree and backlink views. Make sure these are functioning correctly.
