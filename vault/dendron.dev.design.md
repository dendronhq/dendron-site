---
id: c160ddce-edec-4f6e-841b-418d6030fa37
title: Design
desc: ''
updated: 1598651922993
created: 1598651922993
stub: false
---

# Design

## Major Components

### Dendron Engine 
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/engine-server)

This is responsible for Dendron's hierarchal index and lookup capabilities. It also contains Dendron specific markdown parsers. 

### Dendron Plugin
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/plugin-core)

This is the Dendron VSCode extension. 

### Dendron Common All
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/common-all)

This is a bunch of types and utilities that is consumed by multiple Dendron dependencies

### Dendron Common Server
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/common-server)

This is common utilities that are used by server-side versions of Dendron (currently, this is the only available built of Dendron - in the future, the plan is to have a browser only client)

### Dendron CLI
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/dendron-cli)

This package lets you access Dendron via CLI. You can currently use it to build a Dendron vault into a Dendron compatible site. In the future, we plan on exposing all the functionality of Dendron via the CLI. 


### Dendron LSP Server

This packages contains the vscode LSP server implementation for Dendron. The LSP server will start the `Dendron Express Server` in order to query the engine.

### Dendron Express Server

This package contains the express server implementation for Dendron.

### Dendron Express Client

This package contains the nodejs API client for the `Dendron Express Server`

## Architecture

### LSP Related functionality
```
Dendron Plugin <-> LSP Server <-> Express Server <-> Dendron Engine
```

### Non-LSP Functionality

```
Dendron Plugin <-> Express Server
```

### CLI

- if no server is set
```
Dendron CLI <-> Dendron Engine
```

- if server is set (able to use engine instead of re-indexing)
```
Dendron CLI <-> Express Server <-> Dendron Engine
```