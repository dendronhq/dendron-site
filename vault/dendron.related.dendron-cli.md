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

## Publishing Commands

### buildSite

Build dendron site. 

```
dendron-cli buildSite

build notes for publication

Options:
  --version      Show version number                                   [boolean]
  --help         Show help                                             [boolean]
  --wsRoot       location of workspace                                [required]
  --vault        location of vault                                    [required]
  --writeStubs   writeStubs                                      [default: true]
  --incremental  use rsync to only copy files that changed
                                                      [boolean] [default: false]
  --dryRun       don't actually build                 [boolean] [default: false]
```

- eg
```
dendron-cli buildSite --wsRoot . --vault ./vault 
```

### publishNotes

Publish a dendron site

```
dendron-cli publishNotes

Build, commit, and push your notes for publication

Options:
  --version         Show version number                                [boolean]
  --help            Show help                                          [boolean]
  --wsRoot          location of workspace                             [required]
  --vault           location of vault                                 [required]
  --writeStubs      writeStubs                                   [default: true]
  --incremental     use rsync to only copy files that changed
                                                      [boolean] [default: false]
  --dryRun          don't actually build              [boolean] [default: false]
  --noPush          don't push the result                              [boolean]
  --publishRepoDir  repo to publish from. default is same as `wsRoot`
```

- eg:
```
dendron-cli publishNotes  --wsRoot . --vault ./vault 
```

###

## Pod Commands
- NOTE: you can find pod ids in the [[pods|dendron.topic.pod]] page. Just add a `.import|.export` to the end of the id (eg. `dendron.pod.json.import`)

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
