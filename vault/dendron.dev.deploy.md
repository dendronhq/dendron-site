---
id: WmBgdjNJqOfiQ4NNnctuG
title: Deploy
desc: ''
updated: 1631029849101
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

- restore workspace
```
rm -rf node_modules
cd {workspace}
git reset --hard
lerna bootstrap
```