---
id: 64f0e2d5-2c83-43df-9144-40f2c68935aa
title: Setup
desc: ''
updated: 1598651458825
created: 1598651458825
---

# Setup

## Getting Started

Before you begin, you need to make sure to have the following SDKs and tools:

- [Node.js >= 12.0.0](https://nodejs.org/download/release/latest-v10.x/)
  - We recommend using a version in [Active LTS](https://nodejs.org/en/about/releases/)

The basic commands to get the repository cloned and built locally follow:

```console
git clone https://github.com/dendronhq/dendron.git
cd dendron
npm install
```

## Build Code Plugin

- bootstrap dependencies

```sh
npx lerna bootstrap --scope @dendronhq/common-all  --scope @dendronhq/common-server --scope @dendronhq/engine-server --scope @dendronhq/plugin-core --scope @dendronhq/dendron-cli

```

- build dependencies

```sh
npx lerna run build --scope @dendronhq/common-all
npx lerna run build --scope @dendronhq/common-server
npx lerna run build --scope @dendronhq/engine-server
npx lerna run build --scope @dendronhq/dendron-cli
npx lerna run build --scope @dendronhq/plugin-core
```

- initialize template-repo

```sh
 cd packages/plugin-core/
 ./scripts/sync_vault.sh
```
