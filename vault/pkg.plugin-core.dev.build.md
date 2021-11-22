---
id: mwDT040wz5nBKtctjvNrQ
title: Build
desc: ''
updated: 1637529455222
created: 1635705939396
---


## Cleanup

```sh
echo "removing all deps..."
./bootstrap/scripts/cleanup.sh
echo "re-installing..."
yarn setup
```

## Build

### Building without uploading to sentry

```sh
export SKIP_SENTRY=1 yarn build:patch:local
```

### Fast Re-build

This is if you've already build the plugin locally and need to re-built it (you ran a `yarn build:{version}:local`).
The regular [[cleanup script|#cleanup]] will remove all `node_modules` across all packges. 
The fast rebuild will only remove `node_modules` from packages where it needs to be removed. 

1. Remove generated assets
    ```sh
    npx lerna run clean --parallel --scope "@dendronhq/{dendron-plugin-views,dendron-next-server,plugin-core}"
    ```
1. Restore package.json
    ```sh
    git reset --hard
    ```
1. Re-build assets
    ```
    echo "link packages..."
    lerna bootstrap
    echo "re-building packages..."
    # NOTE: order matters, must run serially
    npx lerna run build --scope @dendronhq/dendron-next-server
    npx lerna run build --scope @dendronhq/dendron-plugin-views
    npx lerna run build --scope @dendronhq/plugin-core
    ```
1. Make your changes
1. Build again


### Fast mode

## Webpack

Dendron uses webpack to bundle all dependencies before creating a VSIX file. 

- Development:
    - does not apply minimizer
- Production:
    - applies minimizer

Assets:
- assets/static -> dist/static


## Static Assets
- static assets for plugin-core gets synced from multiple sources
- two phases:
    - 1. collect 
    - 2. pack

#### collect
- loc: src/utils/build.ts

```ts
syncStaticAssets
    delete /assets/static
    cp next-server/out /assets/static
    cp next-server/assets/js /assets/static/js
    cp api-server/assets/static /assets/static/js

    cp dendron-plugin-views/build/static/css /assets/static/css
    cp dendron-plugin-views/build/static/js /assets/static/js
```

#### pack
- loc: webpack.common.js

```sh
cp assets/static static
cp assets/dendron-ws dendron-ws
cp ../dendron-yml.validator.json dendron-yml.validator.json
... 
```

## Related
- [[Changelog|dendron://dendron.dendron-site/pkg.plugin-core.ref.build#changelog]]
- [[Dev CLI|dendron://dendron.dendron-site/dendron.dev.cli]]