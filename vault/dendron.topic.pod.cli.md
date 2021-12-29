---
id: W5bX7FK5WujZms84ZMcyU
title: CLI
desc: ''
updated: 1636827226117
created: 1636827226117
---

## Common Options

- --configPath: path to a custom yml configuration for the pod

## Commands

### Export Pod

- export a pod

- eg: Export notes to JSONPod

```
dendron exportPod --podId dendron.json --wsRoot . 
```

### Import Pod

- eg: Import notes from FilePod

```
dendron importPod --podId dendron.markdown --wsRoot . 
```

### Publish Pod

- eg: Publish a note as regular Markdown

#### Options
- --query: name of note to publish

#### Examples

Publish `dendron.md` note as Markdown
```sh
dendron publishPod --wsRoot . --podId dendron.markdown --query dendron
```
