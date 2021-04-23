---
id: 98f6d928-3f61-49fb-9c9e-70c27d25f838
title: Teams
desc: ""
updated: 1619211448487
created: 1617062224981
---

## Summary

This goes over some best practices when using Dendron for teams. To get started, you can use this [[quickstart|dendron.topic.teams.quickstart]].

## Vaults

- core
  - {company}: your main workspace. unless there's a good reason, your notes should go here.
  - user-{name}: individual specific vaults
- optional
  - {company}-public: material you want to share publicly (eg. FAQs, documentation, blogs, etc)
  - {company}-private: material you never want to share publicly

## Schemas
- NOTE: you can get a copy of these schemas by adding this [vault](https://github.com/kevinslin/schemas)
<!-- -->
- company.yml
  - this reflects your company hierarchy
- team.yml
  - this is used for your team
- user.yml
  - this is used for users

## Other Hiearchies
- standup
  - `standup.journal.*`: good for < 10 people
  - once you expand, you can division standup journals into teams
    - `team.{name}.standup.journal.*`
  - you can use [[note references|dendron.topic.refs]] to include standup updates from users individual `user` hiearchy

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
- use [code stream extension](https://marketplace.visualstudio.com/items?itemName=CodeStream.codestream) to add collaborative features like commenting into the IDE