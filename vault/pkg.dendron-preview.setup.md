---
id: 59c41809-f3e9-457a-8b2c-7daecf7d338f
title: Setup
desc: ''
updated: 1619280911055
created: 1611516198276
---


# Checkout the projects
- mume: https://github.com/dendronhq/mume
    - used for markdown functionality
- preview enhanced: https://github.com/dendronhq/markdown-preview-enhanced
    - markdown extension for preview

# Setup

- mume
```sh
cd mume
yarn 
# if this is your first time running
yarn link
yarn watch
```

- markdown preview
```sh
cd markdown-preview-enhanced
yarn 
ine-server
# this requires that @dendronhq/engine-server have a symlink via `yarn link`
./scripts/link.sh
yarn watch
```
