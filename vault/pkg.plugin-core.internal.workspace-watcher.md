---
id: mtBAFUzF5O35N9we5A5Nz
title: Workspace Watcher
desc: ''
updated: 1624821539178
created: 1624821292865
---


## Summary
Goes over how Dendron saves a note


- src/WorkspaceWatcher.ts

```ts
onWillSaveTextDocument (event) {
	uri = event.document.uri;
	engine :=

	if !isPathInWorkspace(uri)
		return
	...

	note = getNote(uri)
	newHash = genHash(getContent(uri))
	if note.hash != newHash {
		applyTextEdit(updated = $now)
		engine.update(note)
	}
}
```
