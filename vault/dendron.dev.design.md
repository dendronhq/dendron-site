---
id: c160ddce-edec-4f6e-841b-418d6030fa37
title: Design
desc: ''
updated: 1613007487633
created: 1598651922993
stub: false
---
## Overview

Dendron is composed of three main components and a collection of complementing libraries.

Below is a sketch of the General Architecture
```
|Dendron Plugin| (vscode) <-> |API Server <-> Dendron Engine| (local express server)
```
## Major Components

### Dendron Plugin
- name: @dendronhq/plugin-core
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/plugin-core)

This is the Dendron VSCode extension

### Dendron Engine
- name: @dendronhq/engine-server
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/engine-server)

This is responsible for Dendron's hierarchal index and lookup capabilities. It also contains Dendron specific markdown parsers. While the name says `server`, there is no server that comes with the engine

### Dendron API Server
- name: @dendronhq/api-server
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/api-server)

This package contains the express server implementation for Dendron. It provides a REST based shim to allow the Dendron plugin to talk to the engine.


## Other Components
### Dendron Common All

- name: @dendronhq/common-all
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/common-all)

This is a bunch of types and utilities that is consumed by multiple Dendron dependencies

### Dendron Common Server

- name: @dendronhq/common-server
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/common-server)

This is common utilities that are used by server-side versions of Dendron (currently, this is the only available built of Dendron - in the future, the plan is to have a browser only client)

### Dendron CLI

- name: @dendronhq/dendron-cli
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/dendron-cli)

This package lets you access Dendron via CLI. 

<!-- ### Dendron Server

This packages contains the vscode LSP server implementation for Dendron. The LSP server will start the `Dendron Express Server` in order to query the engine. -->



<!-- ### LSP Related functionality

```
Dendron Plugin <-> LSP Server <-> Express Server <-> Dendron Engine
``` -->

<!-- ### Non-LSP Functionality -->

<!-- - if no server is set

```
Dendron CLI <-> Dendron Engine
```

- if server is set (able to use engine instead of re-indexing)

```
Dendron CLI <-> Express Server <-> Dendron Engine
```
 -->
