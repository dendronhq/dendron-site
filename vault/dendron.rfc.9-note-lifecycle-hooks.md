---
id: d2f8fe67-36c7-4600-b745-c22bdcb5b2cf
title: 9 Note Lifecycle Hooks
desc: ''
updated: 1620342469709
created: 1619706504483
---

## Goals

Create hook system that can execute custom logic when notes are being changed.

## Context

We currently have limited ways of programmatically updating a note while editing in Dendron. This RFC aims to introduce a hook mechanism to allow users to add their own custom logic.

## Proposal
1. Add a `hooks` field in `dendron.yml`
    ```yml
    hooks:
      onCreate:
          - id: addEmoji
            # optional filter 
            pattern: "*"
            type: js
      onDelete: ...
      onChange: ...
    ```
1. Add a hooks section in the dendron workspace
    ```
    - hooks
        - addEmoji.js
    ```
1. Hooks should have the following format
    ```js
    /**
     @params note: Object with following properties https://github.com/dendronhq/dendron/blob/dev-kevin/packages/common-all/src/typesv2.ts#L135:L153
     @params execa: instance of https://github.com/sindresorhus/execa#execacommandcommand-options
     */
    module.exports = async function({note, execa}) {
        // do some changes
        return note;
    };
    ```

## Details

At startup, Dendron will register all hooks found in the `hooks` section of `dendron.yml`. At runtime, when Dendron creates/updates/changes a note, it will call the corresponding hook in the order they were registered via the yml.

Dendron currently supports a node minimum runtime of v12 which means javascript hooks that target this environment should be supported. 

We also have an escape hatch for non-javascript executables using [execa](#execacommandcommand-options) to execute an existing binary. Note that you'll have to pass in the note object yourself to the given binary. 

You can see the example of a note object [[here|pro.dendron-engine.ref.note-response]]

## Example

### Basic
- dendron.yml
```yml
hooks:
    onCreate:
        - id: addEmoji
          # only add to journals matching daily.*
          pattern: "daily.*"
          type: js
```
- hooks/addEmoji.js
```js
module.exports = async function({note}) {
    note.body += 🌱
    return note;
};
```
### Using a go extension
- this example uses [dendronutils](https://github.com/kalyan02/dendronutils)
- we assume the following layout
```
.
├── vault
├── hooks
│   └── moveTasks.js
└── bin
    └── gettasks
```

```yml
hooks:
    onCreate:
        - id: moveTasks
          pattern: "daily.journal.*"
          type: js
```

- hooks/moveTasks.js
```js
module.exports = async function({note, execa}) {
    execa()
};
```

## Tradeoffs
- adding hooks to the note lifecycle can add extra latency to function calls
- shelling out using `execa` is ugly and really a placeholder until we get url endpoints working

## Future work
- being able to register arbitrary url endpoints as extensions

## Discussion
- Submit feedback in our [github discussion](https://github.com/dendronhq/dendron/discussions/680)
