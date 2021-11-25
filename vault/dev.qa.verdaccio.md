---
id: 7tLYKjTIXKWItRr0
title: Verdaccio
desc: ''
updated: 1626634396957
created: 1626634278984
---

## Summary

We use [verdaccio](https://verdaccio.org/), a "A lightweight open source private npm proxy registry", to test publishing locally. 

## Setup

1. Install verdaccio
```sh
DENDRON_ROOT=/path/to/monorepo
npm install -g verdaccio
cd $DENDRON_ROOT
```
1. Switch To verdaccio
```sh
# we have helper scripts to set local registry
source bootstrap/scripts/helpers.sh
setRegLocal
```
1. Run registry
```
verdaccio
```
1. Create a local npm account
```sh
npm login
# NOTE: use username of `dendron`
username: dendron
passwod: ...
```

## Cook

### Use local registry

```sh
cd $DENDRON_ROOT
source bootstrap/scripts/helpers.sh
setRegLocal
verdaccio
```	

### Use remote registry

```sh
cd $DENDRON_ROOT
source bootstrap/scripts/helpers.sh
setRegRemote
```	
