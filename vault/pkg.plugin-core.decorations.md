---
id: 74UyCLyLvCxFTQNgGgSRW
title: Decorations
desc: ''
updated: 1630915685807
created: 1630915066783
---

Dendron uses [`TextEditorDecorationType`](https://code.visualstudio.com/api/references/vscode-api#TextEditorDecorationType) to render decorations in the editor. See the file [`windowDecorations.ts`](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/features/windowDecorations.ts) for examples.

## Adding a new decoration

First, edit the `DECORATION_TYPE` object to define the decoration rules for your
new decoration. You define any text color, background color etc. at this step.
Also make sure to define `rangeBehavior`, VSCode uses this to decide when it's
okay to simply expand the decorated region when the user is typing.

Next, add a decorator function. See examples like `decorateUserTag` and
`decorateWikiLink` in the same file. The function should accept a markdown node,
then return a list of `DecorationAndType`, which is just a `DECORATION_TYPE` and
the decoration options for this node. The decoration options must include the
range to be decorated, but can also add per-node decorations to appear before or
after the decorated region (see the timestamp decorations, or tags for example).

Finally, add the decorator function to the `DECORATOR` map. Once you're done,
run the extension and create a new note to test out your new decoration. Make
sure to include an example note in your PR too.

To test your decoration, edit the file `WindowDecorations.test.ts`. The test
will roughly look like:

```ts
const blockAnchorDecorations = allDecorations!.get(
  DECORATION_TYPE.blockAnchor
);
expect(blockAnchorDecorations.length).toEqual(1);
expect(
  isTextDecorated("^anchor-1", blockAnchorDecorations!, document)
).toBeTruthy();
```
