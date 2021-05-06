---
id: efd9882c-8ddd-489c-974a-b5d4f4d365a2
title: Gotchas
desc: ''
updated: 1620329614573
created: 1620329143076
---

## Summary

A collection of rough edges and common issues

### root note is special

We currently don't support creating children of `root.md` This note is special. While the contents can be edited, creating a hierarchy off root is not officially supported

### root.schema.yml is special

For now, its best to not use this and create schemas using the [[Lookup Schema|dendron.topic.commands#lookup-schema]] command.

### multiple preview panes

The VSCode default markdown preview has the same icon as Dendron's Markdown Preview.  It is currently not possible to disable the builtin preview (we are looking into fixing this [here](https://github.com/dendronhq/dendron/issues/42)).

Meanwhile, you can open Dendron's markdown preview by clicking the preview button on the left of the menu bar or by using the `> Markdown Preview Enhanced: Open Preview to the Side` command

![Markdown preview](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/trouble-md.png)



