---
id: 070f5adf-3ea3-4e83-b468-75d1b4b6094a
title: Quickstart
desc: ''
updated: 1620495903491
created: 1620494177780
nav_order: 1
---

## Setup

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
