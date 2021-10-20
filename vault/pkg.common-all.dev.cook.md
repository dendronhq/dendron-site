---
id: 1jIkH5R6W3pM8IYR2gOji
title: Cookbook
desc: ''
updated: 1634737313404
created: 1634737110155
---

## Configuration

### Add New Config 

Dendron configuration is managed by [DendronConfig](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/workspace.ts).

Whenever you add a new entry with a default, make sure to do the following as well.
- [ ] Update [[Tests for Configuration|dendron://dendron.dendron-site/pkg.common-all.dev#tests-for-configuration]]
- [ ] document it under [[dendron config|dendron.topic.config.dendron]]
- [ ] update the json schema for the config, see [[#update-json-schema]]

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

## Common

### Tests for Configuration
- if defaults are changed, `Extension.test.ts` needs to be updated to reflect this

### Update json schema 

Run the following at the root of the dendron workspace

```sh
yarn gen:data
```

- [example issue](https://github.com/dendronhq/dendron/issues/613)