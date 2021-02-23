---
id: 2976e5df-c8b4-4176-9d3f-fe4220dfa9b6
title: Deploy
desc: ''
updated: 1614053227384
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


## build and source

```sh
yarn
yarn bootstrap:build 
. bootstrap/scripts/helpers.sh
```

## test local

- publish from local
```
gco -b integ-publish
setRegLocal

version=minor
lerna version $version --no-git-tag-version 

git add .
git commit -m "integ: publish $version"
git push --set-upstream origin integ-publish --force

lerna publish from-package 
node bootstrap/scripts/genMeta.js
```

- pull in new changes
```sh
WORKSPACE_BUILD=/mnt/one/dendron-build
WORKSPACE_BUILD=/Users/kevinlin/projects/dendronv2/dendron/build/dendron
cd $WORKSPACE_BUILD

git reset --hard
git clean -f
git checkout --track origin/integ-publish

# installing
cd packages/plugin-core
./scripts/package.sh
./scripts/install.sh
```

- test changes

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
```

- pull in new changes
```
git reset --hard
git clean -f
gco master 
sleep 60
./scripts/pack_and_install.sh
```

```
gbD integ-publish
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
