---
id: G1QTeuMGuNcWnthP96gYn
title: Qa
desc: ''
updated: 1631471858370
created: 1631471641632
---


## Manual Testing

### Using the Test Workspace

You can use the [[Test Workspace|dendron.dev.ref.test-workspace]] to check publishing changes.

```sh
$REPO_ROOT={path/to/dendron/repo}
dendron exportPod --podId dendron.nextjs --config="dest=$REPO_ROOT/packages/nextjs-template" --attach
```