---
id: G1QTeuMGuNcWnthP96gYn
title: Qa
desc: ''
updated: 1631472417147
created: 1631471641632
---


## Manual Testing

### Using the Test Workspace

You can use the [[Test Workspace|dendron.dev.ref.test-workspace]] to check publishing changes.

- NOTE: we use `--attach` to speed up the export if a workspace is active. otherwise, drop the flag to initiliaze via the CLI
```sh
$REPO_ROOT={path/to/dendron/repo}
cd $REPO_ROOT/test-workspace
dendron exportPod --podId dendron.nextjs --config="dest=$REPO_ROOT/packages/nextjs-template" --attach
```

### Using your own workspace

Same instructions as above. Change into your own workspace instead of `$REPO_ROOT/test-workspace`
