---
id: 7oCz8CUItnr00KB3MjnJ9
title: Tips
desc: ''
updated: 1636352733990
created: 1636352167044
---

## Watching for files

There are if you want to watch for files being created/deleted/updated, but
either you are not in the plugin or the files you are trying to watch are not in
the workspace. Otherwise you can use VSCode's built-in file watcher.

### `EngineFileWatcher`

This is a generic file watcher that uses `chokidar` to watch for files being
created, updated, or deleted. The watcher is recursive, so it will watch for
files within subfolders too. This will **not** watch for any files/folders
starting with `.` (hidden files/folders on UNIX), as well as anything inside
`.git`, `node_modules`, and similar folders that shouldn't contain any files
relevant to Dendron.

The watchers **must** be disposed once you don't want to watch for stuff
anymore. Creating a watcher will create a disposable that you can use with
`DendronExtension.addDisposable` if you are in the plugin, otherwise you must
call the dispose function yourself.

### `FileAddWatcher`

This is a specialized form of `EngineFileWatcher` that only watches for files
being added. It further restricts the file watcher to only recurse down 3
folders deep. This limit is primarily to match the limit in native workspace
initialization, feel free to increase the limit if needed for another reason.