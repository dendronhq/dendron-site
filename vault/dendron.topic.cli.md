---
id: RjBkTbGuKCXJNuE4dyV6G
title: CLI
desc: ''
updated: 1662659879765
created: 1636500007852
---

## Summary

The Dendron CLI exposes Dendron's functionality via the command line. 

## Setup

### Install Node.js

There are several approaches that can be taken to install Node.js to your desktop. Select one of the following:

- **Recommended**: Easiest path for non-devs/non-engineers: Visit the official [nodejs.org](https://nodejs.org/en/) website to download Node.js directly and install the appropriate package for your operating system.
- Alternatives:
  - [MacOS or Linux: Install Node.js via `nvm` (Node Version Manager)](https://github.com/nvm-sh/nvm)
  - [MacOS or Linux: Install Node.js via `nodenv` (instead of `nvm`)](https://github.com/nodenv/nodenv)
  - Microsoft docs: [Windows: Install Node.js via `nvm-windows`](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)

### Install dendron-cli

```sh
npm install -g @dendronhq/dendron-cli@latest
```

## Local Installation

If dendron-cli is installed in the local directory via npm
- Creates a package.json and package-lock.json
- dendron-cli is only accessible in the directory this is ran in
- dendron commands must be run like: `npx dendron <cmd>`
- This is best practice for repos doing publishing, etc.

```sh
npm install @dendronhq/dendron-cli@latest
```


## Common Options

### wsRoot

This only needs to be set if you are not executing the CLI from within the root of your [[workspace|dendron.concepts#workspace]] or in a subdirectory of an existing workspace

### vault

Path to a [[vaults|dendron.concepts#vaults]]. If not given and not a [[multi vault|dendron.topic.multi-vault]] workspace, Dendron will use the only existing vault. Otherwise, will ask for you to specify a vault

### useLocalEngine
Runs the command called using the in memory engine instead of connecting to a server.


## Debug Mode

To enable debug logging, set `LOG_LEVEL` to `debug`. 

```sh
LOG_LEVEL=debug dendron {your-command}
```
