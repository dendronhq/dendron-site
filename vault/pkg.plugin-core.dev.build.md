---
id: mwDT040wz5nBKtctjvNrQ
title: Build
desc: ''
updated: 1636322961819
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