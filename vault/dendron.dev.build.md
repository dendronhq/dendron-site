---
id: 12Fdg5uE6nZdukrdLNRdm
title: Build
desc: ''
updated: 1636153493066
created: 1631029707711
---


## Cook

### Building from clean repo

Sometimes you'll need to rebuild the workspace from scratch. Run the following command to do so

```
./bootstrap/scripts/cleanup.sh
yarn setup
```


### Building without uploading to sentry

```sh
export SKIP_SENTRY=1 yarn build:patch:local
```

### Manual bump and publish package versions

If you need to manually bump the current package version number for any reason

```sh
# values are "patch|minor"
UPGRADE_TYPE=

echo "bumping..."
dendron dev bump_version --upgradeType $UPGRADE_TYPE

echo "publishing packages..."
lerna publish from-package --ignore-scripts

echo "sync nextjs-template"
VERSION=$(cat lerna.json | jq -r ".version")
pushd packages/nextjs-template/
git add .
git commit -m "chore(release): sync nextjs-template with dendron $VERSION"
git push
popd
```
