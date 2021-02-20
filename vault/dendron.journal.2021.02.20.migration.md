---
id: acd429ee-c458-421d-a087-ea0da07b64e0
title: Migration
desc: ''
updated: 1613844174407
created: 1613844030110
---

## Workspace Upgrade

We recently ( 2021.02.13 ) upgraded Dendron's backend to use [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/). 

This comes with a bunch of [[performance and size improvements|dendron.release.changelog#house-cleaning]] when developing Dendron.

If you currently have Dendron checked out, you'll need to run the following commands to migrate over to using the yarn build method. 

```sh
# get latest version
git pull

npm install -g yarn
# remove old node_modules
./bootstrap/scripts/cleanup.sh
yarn bootstrap:bootstrap
yarn bootstrap:build 

```