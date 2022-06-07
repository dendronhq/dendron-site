---
id: RjBkTbGuKCXJNuE4dyV6G
title: CLI
desc: ''
updated: 1649972734461
created: 1636500007852
---

## Summary

The Dendron CLI exposes Dendron's functionality via the command line. 

## Prerequisites

### Install Node.js

There are several approaches that can be taken to install Node.js to your desktop. Select one of the following:

- Easiest path for non-devs/non-engineers: Visit the official [nodejs.org](https://nodejs.org/en/) website to download Node.js directly and install the appropriate package for your operating system.
- [MacOS or Linux: Install Node.js via `nvm` (Node Version Manager)](https://github.com/nvm-sh/nvm)
- [MacOS or Linux: Install Node.js via `nodenv` (instead of `nvm`)](https://github.com/nodenv/nodenv)
- Microsoft docs: [Windows: Install Node.js via `nvm-windows`](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)
- Microsoft docs: [Ubuntu running in Windows Subsystem for Linux (WSL2): Install Node.js via `nvm`](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)

### Verify Node.js

- Verify that node is available in VS Code in a terminal.

- Run the command: [`Terminal: Create New Terminal`](https://code.visualstudio.com/docs/editor/integrated-terminal)
- Run the following in the terminal: `node --version`
- You should see a version number printed out. It's recommended to at least be the latest LTS Version of Node.js
- If you see `command not found`, you might need to restart your terminal, login session, or system before attempting to verify again

## Installation

### Local directory

> Dendron recommends installing `dendron-cli` in the local directory in order to avoid conflicts at the global level, and to keep Dendron versions isolated to each workspace. This is also beneficial for CI/CD systems, sharing repositories, and publishing your notes since `package-lock.json` or `yarn.lock` can ensure all users/systems are using the same `dendron-cli`.

```sh
# If dendron-cli is installed in the local directory via npm
# - Creates a package.json and package-lock.json
# - dendron-cli is only accessible in the directory this is ran in
# - dendron commands must be run like: `npx dendron <cmd>`
# - This is best practice for repos doing publishing, etc.
npm install @dendronhq/dendron-cli@latest
```

### Globally accessible

```sh
# If dendron-cli is installed at a global level via npm
# - dendron-cli is accessible via any directory
# - Ensures dendron-cli can run without the `npx` prefix
# - dendron commands must be run like: `dendron <cmd>`
npm install -g @dendronhq/dendron-cli@latest
```

## Common Options

![[dendron://dendron.dendron-site/dendron.ref.cli#common-options,1:#engine-commands]]

## Engine Commands

![[dendron://dendron.dendron-site/dendron.ref.cli#engine-commands,1:#publishing-commands]]

## Note Command

![[dendron://dendron.dendron-site/dendron.topic.notes.cli]]

## Publishing Commands

![[dendron://dendron.dendron-site/dendron.ref.cli#publishing-commands,1:#pod-commands]]

## Pod Commands

![[dendron://dendron.dendron-site/dendron.ref.cli#pod-commands,1:#*]]


## Vault Commands

![[dendron://dendron.dendron-site/dendron.ref.cli#vault-commands,1:#*]]

## Workspace Commands

![[dendron://dendron.dendron-site/dendron.ref.cli#workspace-command,1:#*]]

## Dev Commands

![[dendron://dendron.dendron-site/dendron.ref.cli#dev-command,1]]
