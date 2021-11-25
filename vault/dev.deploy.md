---
id: WmBgdjNJqOfiQ4NNnctuG
title: Deploy
desc: ''
updated: 1634506366961
created: 1631029844001
---


## Cook

### Manually publish a single package

- publish a version
```sh
rm package.json
cd {package}/file
yarn
npm version {bump}
npm publish
```

### Build a new package version

1. Build new version
    - this will build a `{version}.vsix` in `plugin-core`
    ```sh
    yarn build:[prerelease|patch|minor]:[local|remote]
    ```
2. Restore workspace
    - when building locally, this will make a bunch of modifications to your workspace (eg. remove workspace symlinks for actual dependencies) 
    - run the following to reset your workspace for development
    ```sh
    git reset --hard
    ./bootstrap/scripts/restorePackageState.sh
    yarn setup
    ```
### Override plugin version

- NOTE: this only works if you don't have any changes to plugin-core's downstream dependencies

1. Update version number on `plugin-core/package.json`
1. Run the following inside plugin-core
    ```sh
    # tee is optional for capturing log output
    vsce package --yarn | tee /tmp/out.log
    ```

### Publish local package versions remotely

```sh
dendron dev publish  --publishEndpoint remote
```

### Build in fast mode
- fast mode skips typechecking
```sh
env FAST=1 yarn build:$VERSION_UPGRADE:$ENDPOINT
```

## Related
- [[CLI|dev.cli]]
- [[Dev|dendron://dendron.docs/pkg.dendron-cli.t.dev]]
