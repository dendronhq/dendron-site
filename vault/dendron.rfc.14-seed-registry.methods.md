---
id: 945a1bf2-2d6c-4792-87d0-bf87b7f94182
title: Methods
desc: ''
updated: 1623022471761
created: 1623022056338
---

### add

```sh
dendron reg add dendron.dendron-site
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
dendron reg info dendron.dendron-site

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

### publish

Publish your own seed to the registry

```sh
dendron reg publish 
```

- NOTE: phase I publishing might involve submitting a pull request

### schema

Get schema for the vault

```sh
dendron reg schema dendron.dendron-site

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

```sh
dendron reg remove dendron.dendron-site

dendron.dendron-site removed
```

### search

```sh
# by default, do search
dendron reg search dendron-site

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

