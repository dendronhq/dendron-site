---
id: c3800271-dd56-46fb-8de7-e850f3c006b7
title: Org Mode
desc: ''
updated: 1602131829574
created: 1602131829574
stub: false
---

# Org Mode

## Goals

Support org-mode sytnax within Dendron

## Details

This project discusses how to best incorporate org-mode functionality into dendron

## Proposals

1. support {file}.org files
2. support `org` syntax within `md` files


### 1. Support {file}.org files
- have dendron support .org files

- pros:
    - works with existing vscode extensions (eg. [vscode org-mode](https://marketplace.visualstudio.com/items?itemName=tootone.org-mode)
    - can be edited in emacs
- cons:
    - uncertain how to implement dendron specific syntax and features (eg. note references, schemas, etc)


## 2. support `org` syntax within `md` files
- implement org-mode as a fenced block

```org
* org mode syntax
```

- pros:
    - compatible with existing markdown tool chain
- cons:
    - might not be compatible with emacs and existing org-mode toolchain

## Thoughts

Currently i'm leaning towards 1). folks that want org-mode support in dendron can create markdown files and manually set the filetype to org mode. it's not ideal since you lose the preview but other functions like lookup still work. 

Changing filetype has a custom command. VSCode has a default shortcut (`cmd+k m` on mac) that can be re-mapped. 
```
"command": "workbench.action.editor.changeLanguageMode",
```

## Next
- [ ] look at prior work in this area (embedding org-mode in other applications)
- [ ] collect feedback
- [ ] figure out if `changeLanguageMode` accepts args (would be great if you could toggle to org-mode and back using a single shortcut)
- [ ] schedule org-mode implementation