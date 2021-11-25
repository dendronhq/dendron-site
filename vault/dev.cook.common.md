---
id: qdfa7PG6X0kbXJuMX86h3
title: Common
desc: ''
updated: 1631232655996
created: 1631232243783
---

## Verdaccio

[Verdaccio](https://verdaccio.org/) is an open source local NPM registry. We use it to test out publishing and link together projects internally before publishing

- NOTE: only run verdaccio when you need to test publishing. otherwise, this will pollute the `yarn.lock` file with `localhost` entries which will fail in CI/CD

### Setup Verdaccio

```sh
npm install -g verdaccio
```

![[dendron.dev.cook.common#switch-to-local-npm,1:#*]]

- create a user
```sh
npm login {user}
# follow login instructions
# this allows you to run `npm publish`
CTRL+C
```

### Switch to local npm

```sh
# source helpers 
. bootstrap/scripts/helpers.sh
# change registry to local endpoint
setRegLocal
# run local endpoint
verdaccio
```


### Switch back to remote endpoint
```sh
# switch back to remote endpoint
setRegRemote
```

### Publishing Packages Locally

After you setup a local npm registry, you can run the following commands to publish locally

```sh
lerna publish from-package --ignore-scripts
# updates meta.json with latest package versions
node bootstrap/scripts/genMeta.js
```
