---
id: 64f0e2d5-2c83-43df-9144-40f2c68935aa
title: Setup
desc: ''
updated: 1598651458825
created: 1598651458825
stub: false
---

# Setup

## Getting Started

### 1. Requirements
Before you begin, you need to make sure to have the following SDKs and tools:

- [Node.js >= 12.0.0](https://nodejs.org/download/release/latest-v10.x/)
  - We recommend using a version in [Active LTS](https://nodejs.org/en/about/releases/)

### 2. Clone and npm install
```console
git clone https://github.com/dendronhq/dendron.git
cd dendron
npm install
```

### 3. Build Code Plugin

- you should run this when building dendron for the first time and also every time you run a git pull
  - new dependencies might have been picked up between pulls and this makes sure that they are installed

```sh
./bootstrap/scripts/init.sh
```

- we recommend you use `vscode` to develop for dendron. there is a `dendron.code-workspace` file in the root of the monorepo that you should use when developing

### 4. Start Debugging

To start an instance of the Dendron with the Debugger, Run `Extension (plugin-core)` from the debug panel in vscode

![debugger](assets/images/start_debugger.gif)

_Note: Running via Run -> Start Debugging will not work unless you've previously targeted `Extension (plugin-core)`_


## Tips

To continuously compile all dependencies, run the following

```sh
./bootstrap/scripts/watch.sh
```

## Troubleshooting

In case something something goes wrong with a build step or you want to save time by not running everything, `init.sh` is just a thin wrapper around the following scripts, each of which can be run individually

- ./bootstrap/scripts/bootstrap.sh: `lerna bootstrap all packages`
- ./bootstrap/scripts/build.sh: `lerna build all packages`
- initialize template repo (this bundles the latest [dendron-template](https://github.com/dendronhq/dendron-template) with the plugin so that the right notes are initialized when a user creates their first workspace)
```sh
 cd packages/plugin-core/
 ./scripts/sync_vault.sh
```
