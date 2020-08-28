---
id: c160ddce-edec-4f6e-841b-418d6030fa37
title: Design
desc: ''
updated: 1598651922993
created: 1598651922993
---

# Design

## Major Components

### Dendron Engine 
- [repo](https://github.com/dendronhq/dendron/tree/master/packages/engine-server)

This is responsible for Dendron's hierarchal index and lookup capabilities. 

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