---
id: 98f6d928-3f61-49fb-9c9e-70c27d25f838
title: Teams
desc: 'Collaborate on knowledge with a team'
updated: 1657825553020
created: 1617062224981
---

## Summary

{{fm.desc}}

## Workspace

We recommend getting started by using the example in our [GitHub template](https://github.com/dendronhq/template.engineering-team-workspace). 

This will create a workspace with the following structure

```
.
└── workspace
    ├── org-private
    │   └── notes
    │       └── ...
    ├── org-public
    │   └── notes
    │       └── ...
    └── org-dev
        └── notes
            └── ...
```

## Vaults

### main
- org-private: 
  - for company private notes (eg. roadmap, projects, meetings)
- org-public: 
  - for public notes (eg. wiki, blog, faq)
- org-dev: 
  - for developer related notes (eg. coding guidelines, docs, rfcs)



## Helpful Commands

When you're working with multiple repositories, here are a few useful commands to use:

### Vault Add ([[docs|dendron.ref.commands#vault-add]])

Adding vaults to your team's workspace is as easy as running this command and pointing to either a local or remote vault.

### Move note ([[docs|dendron.topic.refactoring.commands.move-note]])

Move note will allow you to move notes quickly from one vault to another (potentially to make it public or provide more strict access control).

### Refactor Hierarchy ([[docs|dendron.topic.refactoring.commands.refactor-hierarchy]])

Use the refactor hierarchy command to bulk-move notes from one hierarchy/structure to another.

### Workspace Sync

![[dendron://dendron.dendron-site/dendron.topic.workspace.commands.sync#summary,1]]

## Related
- See the [Dendron handbook](https://handbook.dendron.so/notes/fc057be8-80e7-4a08-bca6-5bd6bc398eea.html) to see how we organize our own teams workspace 
