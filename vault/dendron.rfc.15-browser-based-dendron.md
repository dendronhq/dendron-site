---
id: 65697e1b-ca70-4e6c-be0b-5e977afc9c7d
title: 15 Browser Based Dendron
desc: ''
updated: 1623866427760
created: 1623330279745
---

## Goals

Creating a quick way to launch Dendron with minimal setup will lower the "Time to delight" experienced by our customers. It also opens the potential for supporting the iPad and other similar tablets while ensuring the portability of your notes. 

## Proposal

There are multiple ways of lowering time to delight:
1. Create a one-click install-able custom build of VSCodium that supports Dendron out of the box. 
2. Update a build of Theia to support Dendron and host it. Also provides a client that can be installed separately.  
3. Run a known good setup of Dendron and vscode using code-server. Provide a docker image that people use.  
4. Host the code-server instance under dendron.so. 

## Context
Right now, it requires multiple manual steps to run Dendron detailed in [[Getting Started|dendron.tutorial]]. 

### References
- https://github.com/cdr/code-server
- https://theia-ide.org/
    > Theia supports vscode extensions 
- https://github.com/vivumlab/vivumlab
- 
