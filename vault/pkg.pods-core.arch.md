---
id: f4f48436-c54b-4ead-96d0-47493a859050
title: Arch
desc: ''
updated: 1623378191634
created: 1623377875289
---



# ExportPod

```ts
ExportPodImpl extends ExportPod
```

## Config

Configuration for a pod. Default parameters are pod specific. Implementation can choose to extend it

## LifeCycle

### Constructor

Creation of a new pod

### Execute

Called when pod executes
- gets config
- calls `validate`
- call `prepareNotesForExport`
- call `plant`
### Validate

Basic validation. Can be extended by custom implementations

### Plan

This is whats overwritten in implementations of pod
