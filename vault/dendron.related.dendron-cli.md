---
id: 8b03ed06-4f46-46e0-8652-c6abf2266a79
title: Dendron-cli
desc: ''
updated: 1599709645355
created: 1599709645355
stub: false
---

# Dendron CLI 🚧

The Dendron CLI exposes Dendron's functionality via the command line. 

## Installation
```
npm install -g @dendronhq/dendron-cli
```

## Usage

- NOTE: `refactorFM` is still under construction. It is broken and iwll not run

```
dendron-cli <command>

Commands:
  dendron-cli backfill    backfill frontmatter
  dendron-cli build-site  build static site
  dendron-cli exportPod   export a pod
  dendron-cli importPod   import a pod
  dendron-cli refactorFM  refactor frontmatter 

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

## Commands

### Export Pod
- export a pod

- eg: Export notes to JSONPod
```
dendron-cli exportPod --podId dendron.pod.json --vault "/Users/kevinlin/Dendron/vault" --podsDir /Users/kevinlin/Dendron-es/pods
```

### Import Pod

- eg: Import notes from FilePod
```
dendron-cli importPod --podId dendron.pod.file --vault "/Users/kevinlin/Dendron-es/vault" --podsDir /Users/kevinlin/Dendron-es/pods
```