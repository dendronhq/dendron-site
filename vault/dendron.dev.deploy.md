---
id: WmBgdjNJqOfiQ4NNnctuG
title: Deploy
desc: ''
updated: 1632062054841
created: 1631029844001
---

## Related
- [[CLI|dendron.dev.cli]]

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