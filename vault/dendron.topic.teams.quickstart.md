---
id: 31cb97b5-4ac7-48dd-abcf-107ce78ea8ae
title: Quickstart
desc: ''
updated: 1620082662383
created: 1617296496891
---


This guide will cover setting up the layout describe above. 

1. Run [[Initialize Workspace|dendron.topic.commands#initialize-workspace]] to create a new company workspace
1. Run [[Vault Add|dendron.topic.commands#vault-add]] and a new local vault named `org-private` 
1. Run [[Vault Remove|dendron.topic.commands#vault-remove]] to remove the default `vault` that got created when you created the workspace
1. For every vault you created, create a git repository and convert it to a remote vault by following the instructions [[here|dendron.guides.cook#converting-a-local-vault-to-a-remote-vault]]. When your done, the vaults section of your `dendron.yml` should look something like the below.
  ```yml
  vaults:
      -
          fsPath: dendron
          remote:
              type: git
              url: 'git@github.com:dendronhq/dendron.git'
  ```
1. Create a repo for your workspace and push this as well (eg. `workspace-{company}`)
1. For each user in your team, have them clone the workspace repo. They can run [[Change Workspace|dendron.topic.commands#change-workspace]] with the path to the workspace to initialize it. Dendron will initiate all remote vaults during the process.
1. (Optional): Add the [schema vault](https://github.com/kevinslin/schemas) as a [[remote vault|dendron.concepts#remote-vault]] to get access to some useful schemas