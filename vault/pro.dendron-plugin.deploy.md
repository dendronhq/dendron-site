---
id: 2976e5df-c8b4-4176-9d3f-fe4220dfa9b6
title: Deploy
desc: ''
updated: 1621550684789
created: 1613863275374
---



## pre-req
```sh
npm install -g verdaccio
npm install -g yarn
npm install -g vsce
sudo apt-get install jq -y

git clone git@github.com:dendronhq/dendron.git dendron
git clone git@github.com:dendronhq/dendron.git dendron-build
```

- run verdaccio
```
verdaccio
```


## Build Local

### Pull Build
```sh
yarn
yarn bootstrap:build 
./bootstrap/scripts/helpers.sh
```

### Create Build

- publish from local
```sh
setRegLocal
verdaccio

./bootstrap/scripts/createBuild.sh
```

### Install Build
```sh
WORKSPACE_BUILD=/mnt/one/dendron-build
WORKSPACE_BUILD=/Users/kevinlin/projects/dendronv2/dendron/build/dendron/packages/plugin-core
cd $WORKSPACE_BUILD

./scripts/pullBuild.sh

# use this if you have ui changes
./scripts/pullBuildAndSync.sh

# see bundle
cd ~/.vscode-insiders/extensions/dendron.dendron-0.42.1-alpha.0/
cd ~/.vscode-oss/extensions/dendron.dendron-0.42.1-alpha.0/
```

- NOTE: when you are testing, remember that all dependencies are LOCAL which means running `git push` and relying on external workflows won't work at this point

## publish

- checkout
```
gco master
setRegRemote
```

- [ ] cherry pick if needed

```
version=minor
lerna version $version 
lerna publish from-package 
lerna publish from-package --ignore-scripts
```

- pull in new changes
```
sleep 60
git reset --hard
git clean -f
git fetch
gco master 
./scripts/pack_and_install.sh
```

## re-publish

```sh
./unpublish.sh
lerna publish from-package --ignore-scripts
```

## cleanup
```
cd $WORKSPACE_BUILD
gbD integ-publish

cd $WORKSPACE
gbD integ-publish
```


## cook

### unpublish a package

```
./unpublish.sh
```

## rest

### git 
```sh

yarn
yarn bootstrap:build 
. bootstrap/scripts/helpers.sh

```
