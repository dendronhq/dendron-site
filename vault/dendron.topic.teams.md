---
id: 98f6d928-3f61-49fb-9c9e-70c27d25f838
title: Teams
desc: ''
updated: 1617064962966
created: 1617062224981
published: false
---

## Summary

This goes over some best practices when using Dendron for teams. To get started, you can use [this template](TODO) to help you get started.

## Vaults

- core
  - work-main: your main workspace. unless there's a good reason, your notes should go in
  - user-{name}: individual specific vaults
- optional
  - work-public: material you want to share publicly (eg. FAQs, documentation, blogs, etc)

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
├── work-main/
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

When your working with multiple repositories, its we provide 

### Notes

This works with a small startup where everyone is kept up to date with everyone elses progress. 
