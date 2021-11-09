---
id: 61G1r6bCYP4AO0nTrX3Yx
title: Build Styles
desc: ''
updated: 1636431294025
created: 1636431092573
---

## Summary
- stage: [[tags.stage.seed]]

This builds all css used in plugin views


NPM Script
```sh
yarn build:styles
```

Script File
- loc: scripts/buildStyles.js

## Lifecycle
1. fetch styles from other packages
    - dendron-next-server
1. concat all styles into a single file
1. write styles to `./public` folder
