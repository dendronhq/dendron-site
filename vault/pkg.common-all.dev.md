---
id: 3c80629b-4048-48f0-bdfd-352645bda2ec
title: Dev
desc: |
  Development related
updated: 1633299662588
created: 1622079130106
---
## Gotchas

Do not use any libraries in `common-all` that cannot run in the browser. It is used as a dependency for both browser based and server based versions of Dendron. This means modules like `fs` cannot be used in common-all. 

For server based modules, put them into [[Common Server|pkg.common-server]] instead

## NoteProps

- try having plain objects on the note props

### Adding a new frontmatter property

In VSCode, you can use the "Goto symbol in workspace" command and type the function name or class name to find the following locations.

1. In `DNodeProps`, add the prop to the type. Unless the prop has to be mandatory for all notes, it should be optional (`prop?: type`). Most props don't have to be mandatory!
2. In `DNodeUtils.create` add prop name to `optionalProps`.
3. In `NoteUtils.serializeMeta` add prop name to `builtinProps`.
4. In `DNodeUtils.getCustomProps` add prop name to `blacklist`.
5. In `SchemaUtils.TEMPLATE_COPY_PROPS` add prop name if the prop should be copied over when a template note is used.
6. **If and only if** it's a prop that's required (mandatory) for all notes, in `foundation.ts` add prop name to `REQUIRED_DNODEPROPS`. Again, most props don't have to be mandatory.

## Configuration

### Add New Property

Dendron configuration is managed by [DendronConfig](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/workspace.ts).

Whenever you add a new entry with a default, make sure to do the following as well.

- [[Tests for Configuration|dendron://dendron.dendron-site/pkg.common-all.dev#tests-for-configuration]]
- [ ] document it under [[dendron config|dendron.topic.config.dendron]]

Before you submit, make sure to run the following at the root of the dendron repo

```sh
yarn gen:data
```

This will update the json schema definitions for `DendronConfig` which is used downstream by other packages

- [example issue](https://github.com/dendronhq/dendron/issues/613)

### Add New Default

1. Update the defaults [here](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/config.ts#L39:L39)
1. [[Tests for Configuration|dendron://dendron.dendron-site/pkg.common-all.dev#tests-for-configuration]]

### Migrating an existing configuration

Configuration migrations should be done in two phases

#### Phase I - Set new value as default

1. When migrating to a new configuration, always assume that the new configiuration could be `undefined` sinice migrations can fail 

- bug in our script, user cancels, etc

2. Make sure that we can fall back to the old configuration if no new configuration is found

- in case the migration doesn't take

3. When setting the next version, set it to the next **patch** version of whatever is currently released 

- otherwise, users getting the new patch won't get migrated

4. Report a metric to see how many users are usiing the old version without the new version present (this number should go to zero)

#### Phase 2 - Remove old vaule

1. Once the metric in 4 has reached a sufficient threshold, remove the old version

### Converting Code Config to Native Config

This uses dendron.yml for config instead of .code-workspace

- see commit 68556bf2
- [fix: Use new config when creating special notes by hikchoi · Pull Request #984 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/984)

### Common

#### Tests for Configuration
- if defaults are changed, `Extension.test.ts` needs to be updated to reflect this