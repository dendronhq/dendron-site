---
id: 98f6d928-3f61-49fb-9c9e-70c27d25f838
title: Teams
desc: ""
updated: 1620679237155
created: 1617062224981
---

## Summary

This goes over some best practices when using Dendron for teams. To get started, you can use this [[quickstart|dendron.topic.teams.quickstart]].

## Workspace

We recommend setting up a workspace like the one below to get started. You can clone the following from our [github template](https://github.com/dendronhq/org-workspace-template). 

Use [[Vault Add|dendron.topic.commands#vault-add]] to create the following vaults. Foollow the instructions of [[converting a local vault to a remote vault|dendron.guides.cook#converting-a-local-vault-to-a-remote-vault]] to end up with the below setup (replace TODO with the url of your remote vaults).

```yml
version: 1
vaults:
    -
        fsPath: repos/org-private
        remote:
            type: git
            url: 'TODO'
        name: private
    -
        fsPath: repos/org-dev
        name: dev
        remote:
            type: git
            url: 'TODO'
useFMTitle: true
useNoteTitleForLink: true
usePrettyRefs: false
noXVaultWikiLink: true
site:
    copyAssets: true
    siteHierarchies:
        - handbook
    siteRootDir: docs
    usePrettyRefs: true
    siteUrl: 'TODO'
    title: Dendron
    duplicateNoteBehavior:
        action: useVault
        payload:
            - dendron
            - handbook
            - notes
            - aws
initializeRemoteVaults: true
useKatex: false
defaultInsertHierarchy: templates
```

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
- NOTE: you can get a copy of these schemas by adding this [vault](https://github.com/kevinslin/schemas)
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

### Vault Add ([[docs|dendron.topic.commands#vault-add]])

Adding vaults to your team's workspace is as easy as running this command and pointing to either a local or remote vault.

### Move note ([[docs|dendron.topic.commands#move-note]])

Move note will allow you to move notes quickly from one vault to another (potentially to make it public or provide more strict access control).

### Refactor Hierarchy ([[dendron.topic.commands#refactor-hierarchy]])

Use the refactor hierarchy command to bulk-move notes from one hierarchy/structure to another.

### [[Workspace: Add and Commit|dendron.topic.commands#workspace-add-and-commit]]

Easier management of multiple repos

## More helpful stuff

### Sync git repos
You can use the source code panel to pull all repos and push all repos. Download the [gitlens](https://github.com/eamodio/vscode-gitlens) extension and use the commits panel to push and pull everything at once.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/push-and-pull.jpg)

## Team Workflow Recommendations
- follow the [[quickstart|dendron.topic.teams.quickstart]] to setup your workspace
- use [[Workspace: Add and Commit|dendron.topic.commands#workspace-add-and-commit]] and pull/push at least once a day
- have users manage tasks in `user.{name}.journal.{date}` 

## 
- See the [Dendron handbook](https://handbook.dendron.so/notes/fc057be8-80e7-4a08-bca6-5bd6bc398eea.html) to see how we organize our own teams workspace 