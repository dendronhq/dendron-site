---
id: DxucQoYEzu9VnBoYuFiqN
title: Map
desc: ''
updated: 1636746382200
created: 1634749668693
---


The following is the module schema which we use to organize code at Dendron. 
## Schema

- format using inline schema format as described in [[35 Easier Schemas|dendron://dendron.dendron-site/dendron.rfc.35-easier-schemas]]
- you can see an example of a hiearchy implementing this schema at [[pkg.plugin-core]]

```yml
- title: module
  id: modulue
  namespace: true
  children:
    - pattern: quickstart
      desc: how to start development
    - pattern: dev 
      desc: regular development process
        - title: troubleshooting
          pattern: trouble
        - pattern: build
          desc: "special instructions for building"
    - title: qa
      desc: quality assurance
      children:
        - title: debug
        - title: test
        - title: performance
          desc: how to profile code
    - title: ops
      desc: handle operational issues
      children:
        - title: logs
        - title: errors
        - title: deploy
    - title: architecture
      pattern: arch
      desc: general architecture for the module
      children:
        - title: lifecycle
        - title: state
          desc: how we manage state
    - title: concepts
    - title: topic
      pattern: t
      detail: A major component of the current module. Children are also modules
      namespace: true
      extends: module
    - title: reference
      pattern: ref
      detail: A minor component of the current module 
      namespace: true
```

## Wildcards

Wildcards are nodes that can be put as the children of anything. They can also live as sections inside a note

### Nodes
- Cook: Guide on how to accomplish a specific task
    - eg: [[Cook|dendron://dendron.dendron-site/pkg.plugin-core.dev.cook]]
- Tip: Optimizations on doing things better
    - eg: [[Tips|dendron://dendron.dendron-site/pkg.plugin-core.dev#tips]]
- Gotchas: Things to watch out for
    - eg: [[Gotchas|dendron://dendron.dendron-site/pkg.plugin-core.dev#gotchas]]

### Types

#### Wildcard as Child of Note

- hiearchy: {module}.dev.cook
    - how to do X in a certain module

### Wildcard as Section of Note

-  {module}.dev
```md
## Cook

### Adding a new command to plugin-core

...
```

### Choosing betwen Child vs Section

Following the [[Amoeba pattern|dendron://dendron.dendron-site/dendron.guides.workflows.amoeba]], wildcards should start of as sections of existing notes. If the content needs to be used in multiple places or exceeds 800 lines of text, it should be refactored into a child

## Ref vs Topic

A topic is a major component that requires its own `module` hiearchy to properly document. For example, [[Lookup|dendron://dendron.dendron-site/pkg.plugin-core.t.lookup]] is a topic of `plugin-core`.

A reference is a minor component that should hang as a leaf and should be self contained. For example, [[Decorations|dendron://dendron.dendron-site/pkg.plugin-core.ref.decorations]] is a reference in `plugin-core` because it is specific to VSCode. 

## Examples of using the schema

### How do I get started developing?

- schema: `{module}.quickstart`
- eg: [[Dendron Plugin Quickstart|dendron://dendron.dendron-site/pkg.plugin-core.quickstart]]

### How do I write or read logs?

- schema: `{module}.ops.logs`

### How do I handle errors?

- schema: `{module}.ops.errors`

### How do I create a new {X} in {Y}?
- schema: `{module}.dev.cook`
- eg: [[Add a new Command|dendron://dendron.dendron-site/pkg.plugin-core.dev.cook#add-a-new-command]]

### Architecture

#### What is lifecycle of a given command?
- schema: `{module}.arch.lifecycle`

### Testing

#### How do I write a test?
- schema: `{module}.qa.test

#### How do I debug a test?
- schema: `{module}.qa.debug
