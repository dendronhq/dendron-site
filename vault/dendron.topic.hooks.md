---
id: 12551d19-04c2-4d26-ac1e-d23ff3181a9c
title: Hooks
desc: ''
updated: 1620489378953
created: 1620426131596
---

## Summary
- status: [[Early Seed 🌱|dendron.ref.status#early-seed-]]

Hooks allow users to attach custom scripts to various parts of Dendron's lifecycle.

## Use Cases
- carry over all your uncompleted todos from one note to the next
- pull in the weather report in your daily journal note
- automatically add citations to all images in a note on save

## Getting Started

To create a hook, run [[Hook Create|dendron.topic.commands#hook-create]]. You can set the `hookName` to `hello` and change the `hookFilter` to `hello.*`.

When you run this command, Dendron will do two things:
1. Create an entry in `dendron.yml` about the hook
2. Create `{workspace}/hooks/{hookName}.js`

This should lead to a page like the following:

```js
/**
 @params wsRoot: string, root of your current workspace
 @params note: Object with following properties https://github.com/dendronhq/dendron/blob/dev-kevin/packages/common-all/src/typesv2.ts#L135:L153
 @params NoteUtils: utilities for working with notes. [code](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/dnode.ts#L307:L307)
 @params execa: instance of [execa](https://github.com/sindresorhus/execa#execacommandcommand-options)
 @params _: instance of [lodash](https://lodash.com/docs)
 */
module.exports = async function({wsRoot, note, NoteUtils, execa, _}) {
    // do some changes
    return {note};
};

```

- add the following line to the change
```js
module.exports = async function({wsRoot, note, NoteUtils, execa, _}) {
    note.body = note.body + "hello"
    return {note};
};
```

After you are done, run [[Reload Index|dendron.topic.commands#reload-index]]. Now use lookup to create `hello.one`

You should get something like the following:


![hooks image](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/highlight-hello.jpg)

## Cleaning Up

To delete your hook, run [[Hook Delete|dendron.topic.commands#hook-delete]]. This will remove the hook entry in `dendron.yml` and also delete the hook script (script deletion is optional).

## Configuration
- See [[here|dendron.topic.config.dendron#hooks]] for configuration details.

## Errors

### NoteProps is undefined
- cause: a hook function isn't returning a valid `{note}` object. make sure your returning a dictionary instead of simply `note`
- fix: inspect your hook function and make sure its returning a `{note}` object

### hook X has missing script
- cause: you defined a hook without a script
- fix: create a script for your hook function in `hooks/{script}.js`


## Related
- [[9 Note Lifecycle Hooks|dendron.rfc.9-note-lifecycle-hooks]]