---
id: lopw6ef2mzlghwoi7syc2ta
title: Code with Docs
desc: 'Using Dendron with Code Docs'
updated: 1654903401220
created: 1654902793635
---

## Summary

{{fm.desc}}

## Details

Dendron's code base is a monorepo. Documentation is sorted in the `docs/` folder.
The docs folder represent a dendron workspace. Note that this is a separate git repo.
When a user opens up the dendron workspace using vscode, dendron recognizes the `dendron.yml` file under `docs` and pulls down remote vaults (in this case, https://github.com/dendronhq/dendron-docs.git)

The dendron monorepo is available on [github](https://github.com/dendronhq/dendron-docs.git)

## Layout

```
.
├── lerna.json
└── ...
    └── docs/
        └── dendron.yml
```

## dendron.yml

```yml
...
workspace:
    vaults:
        -
            fsPath: dendron-docs
            name: dendron.docs
            selfContained: true
            siteUrl: https://docs.dendron.so
            remote:
                type: git
                url: https://github.com/dendronhq/dendron-docs.git
```
