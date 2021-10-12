---
id: yQVhJtdQ40n3SLHJKAeeU
title: CLI
desc: ''
updated: 1633845719262
created: 1631401993170
---

## Commands

### init

Initialize nextjs template and all dependencies

### build

Prepare notes for publication. Runs [[Nextjs|dendron.topic.pod.builtin.nextjs]] pod in the background. 

#### options
- `--attach`: attach to running engine instead of a new engine ^bfvLB8BY4nLb
- `--overrides`: add additional config overrides 

#### example

![[dendron.topic.publishing-next.cook.common#build-notes,1:#*]]

#### with override

```
dendron publish build --override="siteUrl=foo.com"
```

### dev

Builds notes and starts a local dev server. Behind the scenes, runs `dendron publish build && npx next dev`

### export

Export notes as static HTML

#### options
- --target {target}: export to specific destination
    - syntax.target: 
        - github: creates a `/docs` directory and export notes there. If a `docs` folder exists, will issue prompt before deleting contents
- --yes: automatically say `yes` to all prompts