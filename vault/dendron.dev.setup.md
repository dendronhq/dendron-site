---
id: 64f0e2d5-2c83-43df-9144-40f2c68935aa
title: Setup
desc: ''
updated: 1614313342658
created: 1598651458825
stub: false
---
## Getting Started

### 1. Requirements

Before you begin, you need to make sure to have the following SDKs and tools:

- [Node.js >= 12.0.0](https://nodejs.org/download/release/latest-v10.x/)
  - We recommend using a version in [Active LTS](https://nodejs.org/en/about/releases/)

### 2. Clone and npm install

```bash
git clone https://github.com/dendronhq/dendron.git
cd dendron
npm install
```

### 3. Build Repo

- you should run this when building dendron for the first time and also every time you run a git pull
  - new dependencies might have been picked up between pulls and this makes sure that they are installed

```bash
yarn bootstrap:bootstrap
yarn bootstrap:build 
```

- we recommend you use `vscode` to develop for dendron. there is a `dendron.code-workspace` file in the root of the monorepo that you should use when developing

### 4. Editing (the plugin)

At the root of the monorepo, open `dendron-main.code-workspace`. Open this with VSCode to start editing. While its not required to use VSCode, most of the helper scripts in this repository are created with VSCode in mind so using it will make development significantly easier.

### 5. Start Debugging (the plugin)

- NOTE: you don't need to do this if you are not directly working on the extension (eg. you're working on the [[server|dendron.pro.dendron-next-server]])

To start an instance of the Dendron with the Debugger, Run `Extension (plugin-core)` from the debug panel in vscode

![debugger](/assets/images/start_debugger.gif)

_Note: Running via Run -> Start Debugging will not work unless you've previously targeted `Extension (plugin-core)`_

## Tips

### Watch Monorepo
To continuously compile all dependencies, run the following

```bash
./bootstrap/scripts/watch.sh
```

## Troubleshooting

### Something went wrong during the build

In case something something goes wrong with a build step or you want to save time by not running everything, `init.sh` is just a thin wrapper around the following scripts, each of which can be run individually

- ./bootstrap/scripts/bootstrap.sh: `lerna bootstrap all packages`
- ./bootstrap/scripts/build.sh: `lerna build all packages`

### Changes not showing up in Dendron

1. Are you using the `Run extension` command on the debugger panel to test dendron? 

2. If you have one vscode instance which you have dendron installed and are also doing dendron development on, you might get a version conflict. in that case, use `Run extension with plugin disabled` in the debugger panel (or use a different version of vscode to run dendron vs develop)

## Testing

- see [[Testing|dendron.dev.testing]]

## Debugging

- see [[Debugging|dendron.dev.debug]]

## Style

- see [[Style|dendron.dev.style]]

