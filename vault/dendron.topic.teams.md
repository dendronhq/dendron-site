---
id: 98f6d928-3f61-49fb-9c9e-70c27d25f838
title: Teams
desc: ""
updated: 1617254800475
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
