---
id: 5wXTADsi3MXxFtEX
title: Build Repo
desc: ''
updated: 1628544345725
created: 1626634616032
---

## Summary

In order to build Dendron locally, we need to have a second copy of Dendron checked out in the same monorepo to use with [[Verdaccio|dev.qa.verdaccio]]

## Setup

1. Create a new workspace
```sh
cd $DENDRON_ROOT
mkdir build
cd build
```
1. Clone Dendron
![[pkg.plugin-core.quickstart#^clone]]


## Cook

### Building the plugin

Regular build will install plugini in both `vscodium` and `vscode-insider`

```sh
cd build/dendron/packages/plugin-core
./scripts/pullBuild.sh 
```

NOTE: if changes include static assets, you will need to run the following commands afterwards

```sh
./scripts/sync_static.sh
./scripts/pack_and_install.sh
```
