---
id: 945a1bf2-2d6c-4792-87d0-bf87b7f94182
title: Methods
desc: ''
updated: 1624071086578
created: 1623022056338
---

### add

Add a seed to the current workspace. Requires the full id of the seed

```sh
dendron seeds add dendron.dendron-site
```

- changes in dendron.yml
```yml
seeds: 
  dendron.dendron-site: { registry: root }
vaults:
  - fsPath: vault1
  - fsPath: vault
    seed: dendron.dendron-site
```

- on file system
```
.
└── workspace
    ├── vault1
    ├── ...
    └── seeds
        └── dendron.dendron-site
            ├── dendron.yml
            └── vault
                ├── dendron.md
                └── ...

```


### info

Get information about a seed

```sh
dendron seeds info dendron.dendron-site

# output
name: dendron.dendron-site
publisher: dendron
email: support@dendron.so
deps: 0
version: 1
license: CC BY 4.0
desc: Documentation for dendron - the hierarchal knowledge base that grows as you do
url: https://wiki.dendron.so
dist:
  git: https://github.com/dendronhq/dendron-site.git
```


### init 

Initialize a new seed

Options:
- create_workspace: create a new dendron workspace as a seed
- convert_workspace: convert existing workspace as a seed

### publish

Publish your own seed to the registry

```sh
dendron seeds publish 
```

- NOTE: phase I publishing might involve submitting a pull request

### schema

Get schema for the vault

```sh
dendron seeds schema dendron.dendron-site

schemas:
  dendron:
    nodes:
      dendron: 
        topic: major areas 
        tutorial: how to get started
        ref: reference material
        ...
```

### remove

Remove a seed from the current workspace. Also removes the repository

```sh
dendron seeds remove dendron.dendron-site

dendron.dendron-site removed
```

### search

```sh
# by default, do search
dendron seeds search dendron-site

name: dendron.dendron-site
desc: Documentation for dendron - the hierarchal knowledge base that grows as you do

# search with fuzzy matching
dendron search dendron.*

name: dendron.dendron-site
desc: Documentation for dendron - the hierarchal knowledge base that grows as you do

name: dendron.vscode
desc: Documentation for vscode

name: dendron.pkm
desc: Documentation for PKM
...
```

