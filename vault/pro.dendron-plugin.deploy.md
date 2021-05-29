---
id: 2976e5df-c8b4-4176-9d3f-fe4220dfa9b6
title: Deploy
desc: ''
updated: 1622238951999
created: 1613863275374
---



## pre-req
- install [[Verdaccio|dendron.dev.setup#working-with-verdaccio]]

### Install locally
- install jq

```sh
npm install -g vsce
npm install -g yarn

### Create Build Folder

```
cd dendron
mkdir build
git clone https://github.com/dendronhq/dendron.git
cd dendron/packages/plugin-core/
```

## Build Local

### Create Build

- publish from local
```sh
. bootstrap/scripts/helpers.sh
setRegLocal
verdaccio

./bootstrap/scripts/createBuild.sh
```

### Install Build
```sh
# navigate to build
pushd build/dendron/packages/plugin-core

echo "cleaning..."
rm -r out

echo "checkout..."
git reset --hard
git clean -f
git checkout master
git fetch
git branch -D integ-publish
git checkout --track origin/integ-publish

echo "installing..."
yarn install --no-lockfile

echo "package..."
./scripts/pack_and_install.sh
echo "done"
```

- sync UI changes
```
# optional, add before package
echo "syncing..."
./scripts/sync_static.sh
```

- NOTE: when you are testing, remember that all dependencies are LOCAL which means running `git push` and relying on external workflows won't work at this point

## Publish New Version

### pre-req
- vsce 
- ovsx


- login to vsce
```
vsce login dendron
```

- get access to osvx
```
cat $OSVX_ACCESS > ~/.osvx
```

### Build

- checkout
```sh
setRegRemote
gco master
git pull
git merge dev-kevin
```

- minor
```sh
echo "creating release..."
./bootstrap/scripts/createInsider.sh
echo "patching 11ty
./bootstrap/scripts/patch11tyVersion.sh
```

- major
```sh
echo "creating release..."
./bootstrap/scripts/createRelease.sh
echo "patching 11ty
./bootstrap/scripts/patch11tyVersion.sh
```


## Other
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

### install a specific version

```
version=0.42
./scripts/install.sh
```