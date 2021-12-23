---
id: 8514245e-6405-4759-8dda-ab77cf173075
title: Scripts
desc: ''
updated: 1600964220962
created: 1600964220962
stub: false
---
## Problem Statement

You have scripts that you want to organize and whose outputs you might want to render using Dendron. 

## Solution

Currently (2020.09.24), Dendron's convention for any file that is not Markdown is to keep it under an assets folder in your vault.

```
.
└── workspace
    └── vault
        ├── root.md
        ├── ...
        └── assets
            ├── images/
            └── scripts/
```

For example, images are saved under `assets/images/` and referenced as `/assets/images/*` inside your notes. 

You can do the same with scripts by keeping them under a `scripts` directory. 

You can navigate to them via regular VS Code `(cmd|ctrl+p)`, and then include them as code chunks in your Markdown. 

The Dendron preview accepts running code chunks. You can see the instructions [here](https://shd101wyy.github.io/markdown-preview-enhanced/#/code-chunk)

VS Code is also adding native support for notebooks so as that support becomes more mature, we'll probably look into making this process less kludgy. 

