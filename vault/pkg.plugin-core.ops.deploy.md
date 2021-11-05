---
id: OJwaDZjuGYaBSShHmDaSf
title: Deploy
desc: ''
updated: 1635532261838
created: 1635532194153
---


## Manual Build

```sh
git checkout -b prerelease/$VERSION
# tee is to help debug any issues
yarn build:patch:local | tee /tmp/out
```
