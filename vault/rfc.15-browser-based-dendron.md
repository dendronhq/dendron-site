---
id: 65697e1b-ca70-4e6c-be0b-5e977afc9c7d
title: 15 Browser Based Dendron
desc: ''
updated: 1634923321545
created: 1623330279745
---

## Goals

Creating a quick way to launch Dendron with minimal setup will lower the "Time to delight" experienced by our customers. It also opens the potential for supporting the iPad and other similar tablets while ensuring the portability of your notes. 

## Context
Right now, it requires multiple manual steps to run Dendron detailed in [[Getting Started|dendron.tutorial]]. We need to make it easy for someone to see the benefits of Dendron earlier in the product lifecycle. 

## Proposal

There are multiple ways of lowering time to delight:
1. Create a one-click install-able custom build of VSCodium that supports Dendron out of the box. 
2. Update a build of Theia to support Dendron and host it. Also provides a client that can be installed separately.  
3. Run a known good setup of Dendron and vscode using code-server. Provide a docker image that people use.  
4. Host the code-server instance under dendron.so. 

## Phases

People will want to sync their notes across multiple end-points. This needs to be as easy as a cloud-hosted solution. They also need to continue owning their notes like our current local-first, git-based approach. If we're careful not to sacrifice our local-first principle for the sake of ease-of-use, we can roll out a solution with a few checkpoints. 

1. Crawl: Provide a managed set of instructions so that Github hosted notes can be served if someone runs their own server. 
    - Details - can use [vivum lab](https://vivumlab.com/docs/welcome) to potentially create a one-click install to a local server of the customers choice. 
2. Walk: Hosted notes can be accessed remotely. Managed deploy and provisioning to a remote server (AWS, Google Cloud).
    - Details - Kubernetes to deploy to cloud-provider of choice. Could provide sign-in to multiple git-providers (Gitlab/Bitbucket. 
3. Run: Abstract away hosting altogether (but still support syncing notes with Github/Gitlab etc. so they're always accessible). Native clients (iOS, Android, Windows) that can sync with server and be eventually consistent with Github, Gitlab, Bitbucket etc.
    - Details: Collaboration (through live-share) + review (through PRs) will not require a database implementation.  

### References
- https://github.com/cdr/code-server
- https://theia-ide.org/
    > Theia supports vscode extensions but may potentially face compatibility issues. 
- https://github.com/vivumlab/vivumlab
 
