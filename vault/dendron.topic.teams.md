---
id: 98f6d928-3f61-49fb-9c9e-70c27d25f838
title: Teams
desc: ""
updated: 1617292454453
created: 1617062224981
published: false
---

## Summary

This goes over some best practices when using Dendron for teams. To get started, you can use [this template](TODO) to help you get started.

## Vaults

- core
  - {company}: your main workspace. unless there's a good reason, your notes should go here.
  - user-{name}: individual specific vaults
- optional
  - {company}-public: material you want to share publicly (eg. FAQs, documentation, blogs, etc)
  - {company}-private: material you never want to share publicly

## Schemas

- company.yml
  - this reflects your company hierarchy
- team.yml
  - this is used for your team
- user.yml
  - this is used for users

## Example Workspace

```
.
├── .
├── dendron.code-workspace
├── dendron.yml
├── acme/
│   ├── root.md
│   ├── acme.onboarding
│   ├── team.backend.onboarding
│   ├── team.backend.journal.2020.03.29
│   └── ...
├── user-alice
│   └── user.alice.journal.2020.03.29
└── user-bob
    └── user.bob.journal.2020.03.29
```

## Helpful Commands

When you're working with multiple repositories, here are a few useful commands to use:

### Vault Add ([[docs|dendron.topic.commands#vault-add]])

Adding vaults to your team's workspace is as easy as running this command and pointing to either a local or remote vault.

### Move note ([[docs|dendron.topic.commands#move-note]])

Move note will allow you to move notes quickly from one vault to another (potentially to make it public or provide more strict access control).

### Refactor Hierarchy ([[dendron.topic.commands#refactor-hierarchy]])

Use the refactor hierarchy command to bulk-move notes from one hierarchy/structure to another.

### Notes

This works with a small startup where everyone is kept up to date with everyone elses progress.


## Quickstart

This guide will cover setting up the layout describe above. 

1. Run [[Initialize Workspace|dendron.topic.commands#initialize-workspace]] to create a new company workspace
1. Run [[Vault Add|dendron.topic.commands#vault-add]] and a new local vault named `{company}` (replace with your company name)
1. Run [[Vault Add|dendron.topic.commands#vault-add]] again for all users in your company `user-{username}`
1. Run [[Vault Remove|dendron.topic.commands#vault-remove]] to remove the default `vault` that got created when you created the workspace
1. For every vault you created, create a git repository and convert it to a remote vault by following the instructions [[here|dendron.guides.cook#converting-a-local-vault-to-a-remote-vault]]. When your done, the vaults section of your `dendron.yml` should look something like the below.
  ```yml
  vaults:
      -
          fsPath: dendron
          remote:
              type: git
              url: 'git@github.com:dendronhq/dendron.git'
      -
          fsPath: user-kevin
          remote:
              type: git
              url: 'git@github.com:dendronhq/user-fred.git'
      -
          fsPath: user-kpats
          remote:
              type: git
              url: 'git@github.com:dendronhq/user-fred.git'
  ```
1. Create a repo for your workspace and push this as well (eg. `workspace-{company}`)
1. For each user in your team, have them clone the workspace repo. They can run [[Change Workspace|dendron.topic.commands#change-workspace]] with the path to the workspace to initialize it. Dendron will initiate all remote vaults during the process.

- NOTE: if you already have existing individual vaults, you can transfer files by using the `mv` command and then running `> Reload Window` to sync up the metadata

## Workflows

Dealing with knowledge across multiple repositories can be 