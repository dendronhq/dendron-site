---
id: 98f6d928-3f61-49fb-9c9e-70c27d25f838
title: Teams
desc: ''
updated: 1628125026019
created: 1617062224981
---

## Summary

This goes over some best practices when using Dendron for teams. 

<!-- To get started, you can use this [[quickstart|dendron.topic.teams.quickstart]]. -->

## Workspace

We recommend getting started by using the example in our [github template](https://github.com/dendronhq/org-workspace-template). 

This will create a workspace with the following structure

```
.
└── workspace
    ├── org-private
    └── org-dev
```

Follow the instructions of [[converting a local vault to a remote vault|dendron.guides.cook#converting-a-local-vault-to-a-remote-vault]] if you wish to make each individual vault a github repository

## Vaults

### main
- org-private: 
  - for company private notes
- org-dev: 
  - for developer related notes

### optional
- org-admin: 
  - for sensitive data that you don't want to share with everyone in the company 
- org-public
  - for company material that you plan on publishing publically

## Schemas
- NOTE: you can get a copy of these schemas by adding this [vault](https://github.com/dendronhq/schema-library/tree/main/vault)
<!-- -->
- company.yml
  - this reflects your company hierarchy
- team.yml
  - this is used for your team
- user.yml
  - this is used for users

## Hiearchies
- user.{username}.journal.{date}: use for daily updates from individual people
- org.standup.{date}: use for standups
  - when the company grows, you can divide org into team specific standups (s/org/team.{teamName}/g)
- meet.journal.{date}: use for notes on meetings

## Example Workspace

```
.
├── .
├── dendron.code-workspace
├── dendron.yml
├── org-private/
│   ├── root.md
│   ├── acme.onboarding
│   ├── team.backend.onboarding
│   ├── team.backend.standup.2020.03.29
│   ├── ...
│   ├── user.alice.journal.2020.03.29
    └── user.bob.journal.2020.03.29
```

## Helpful Commands

When you're working with multiple repositories, here are a few useful commands to use:

### Vault Add ([[docs|dendron.ref.commands#vault-add]])

Adding vaults to your team's workspace is as easy as running this command and pointing to either a local or remote vault.

### Move note ([[docs|dendron.ref.commands#move-note]])

Move note will allow you to move notes quickly from one vault to another (potentially to make it public or provide more strict access control).

### Refactor Hierarchy ([[dendron.ref.commands|dendron.topic.refactoring#refactor-hierarchy]])

Use the refactor hierarchy command to bulk-move notes from one hierarchy/structure to another.

### Workspace Sync

![[dendron://dendron.dendron-site/dendron.ref.commands#workspace-sync,1:#*]]

### User Private Vaults

If you want to set it up so that each of your team members have private vaults in addition to the team vaults, have each of your team mebmers initialize a Dendron workspace locally. They can then add the team workspace as a remote [[workspace vault|dendron.topic.vaults#workspace-vault]] by entering the git endpoint where the workspace is located.

## Related
- See the [Dendron handbook](https://handbook.dendron.so/notes/fc057be8-80e7-4a08-bca6-5bd6bc398eea.html) to see how we organize our own teams workspace 
