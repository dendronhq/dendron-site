---
id: e82oo2p74z7bzx9t9w5oczc
title: Package Plugin
desc: ''
updated: 1660963444246
created: 1660956004860
---

Bundle plugin. Equivalent to the following

```sh
yarn install --no-lockfile
yarn build:prod
vsce package --yarn
```

### Options:
- --fast: when set, skip installing packages, skip uploading to sentry

### Env
- ANALYZE_BUNDLE: if set, create a treemap of dependencies using [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)
- DETECT_CIRCULAR_DEPS: if set, calculate circular dependencies

