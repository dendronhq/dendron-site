---
id: d2f8fe67-36c7-4600-b745-c22bdcb5b2cf
title: 9 Note Lifecycle Hooks
desc: ''
updated: 1630731523440
created: 1619706504483
---

## Goals

Create plugin system that can execute custom logic when notes are being changed.

## Context

We currently have limited ways of programmatically updating a note while editing in Dendron. This RFC aims to introduce a plugin mechanism to allow users to add their own custom logic.

## Proposal
1. Add a `plugins` field in `dendron.yml`
    ```yml
    plugins:
      onCreate:
          - id: addEmoji
            # optional filter 
            pattern: "*"
            type: js
      onDelete: ...
      onChange: ...
    ```
1. Add a plugins section in the dendron workspace
    ```
    - plugins
    - addEmoji.js
    ```
1. Plugins should have the following format
    ```js
    /**
     @params note: Object with following properties https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/typesv2.ts
     @params execa: instance of https://github.com/sindresorhus/execa#execacommandcommand-options
     */
    module.exports = async function({note, execa}) {
        // do some changes
        return note;
    };
    ```

## Details

At startup, Dendron will register all plugins found in the `plugins` section of `dendron.yml`. At runtime, when Dendron creates/updates/changes a note, it will call the corresponding plugins in the order they were registered via the yml.

Dendron currently supports a node minimum runtime of v12 which means javascript plugins that target this environment should be supported. 

We also have an escape hatch for non-javascript executables using [execa](#execacommandcommand-options) to execute an existing binary. Note that you'll have to pass in the note object yourself to the given binary. 

You can see the example of a note object [[here|pkg.dendron-engine.ref.note-response]]

## Example

- dendron.yml
```yml
plugins:
    onCreate:
        - id: addEmoji
        # only add to journals matching daily.*
        pattern: "daily.*"
        type: js
    onDelete: ...
    onChange: ...
```
- plugins/addEmoji.js
```js
module.exports = async function({note}) {
    note.body += 🌱
    return note;
};
```

## Tradeoffs
- adding plugins to the note lifecycle can add extra latency to function calls
- shelling out using `execa` is ugly and really a placeholder until we get url endpoints working

## Future work
- being able to register arbitrary url endpoints as extensions

## Discussion
- Submit feedback in our [github discussion](https://github.com/dendronhq/dendron/discussions/680)
