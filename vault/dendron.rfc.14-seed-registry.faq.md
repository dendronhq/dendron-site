---
id: b33d1ad0-e50e-4af0-9c7c-758baad38e79
title: Faq
desc: ''
updated: 1623024484059
created: 1623021892393
---

## General

### Conflicting Schemas

By default, all schemas of a given seed are local to the given seed. This means they won't apply outside of the seed vault

### Hosting Private Registries
- [[Next Phase ⏩|dendron.ref.status#next-phase-]]

You will be able to specify on a per package level the registry you want to use. 

## Workflow

### Upgrading Seeds

For the current phase, seeds are un-versioned. When you add a seed, you get the vault and the git repository. Getting the latest changes is equivalent to doing a `git pull` in the repository. 

### Make Contributions to seeds

Because a seed is just a git repo, if it is hosted on github/gitlab, you can use the standard pull request procedure.


## Publishing
- [[Next Phase ⏩|dendron.ref.status#next-phase-]]

### How does publishing work with seeds?

See [[Publishing|dendron.rfc.14-seed-registry#publishing]]

### What if I include content from a seed in my published workspace via a note reference?

You should consult the [[license|dendron.rfc.14-seed-registry.configuration#license]] of any seed that you are planning on publishing and make sure to add the appropriate attributions. 