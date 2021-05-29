---
id: 61055b5f-6216-4fd3-b9a1-82f79017b59e
title: Examples
desc: ''
updated: 1620495882937
created: 1620495882937
---

### Incorporating a third party script

In this case, we're using [dendronutils](https://github.com/kalyan02/dendronutils), a third party script one of our users created to move todos between daily journal notes. The following script will move all incomplete todos (lines with `[ ]`) and move them over when you create a new daily journal


- dendron.yml
```yml
hooks:
    onCreate:
        -
            id: pogo
            pattern: daily.journal.*
            type: js
```

- pogo.js
```js
const path = require("path");
/**
 @params note: Object with following properties https://github.com/dendronhq/dendron/blob/dev-kevin/packages/common-all/src/typesv2.ts#L135:L153
 @params execa: instance of [execa](https://github.com/sindresorhus/execa#execacommandcommand-options)
 @params: _: instance of [lodash](https://lodash.com/docs)
 */
module.exports = async function({note, execa, _, NoteUtils, wsRoot}) {
    const cmd = path.join(__dirname, "..", "..", "dendronutils", "gettasks")
    const notePath = NoteUtils.getFullPath({wsRoot, note});
    const {stdout, stderr} = await execa(cmd, ["-file", notePath ]);
    const carryOver = stdout.split("\n").slice(1);
    note.body = [note.body].concat(carryOver).join("\n");
    return {note, payload:{stdout, stderr}};
};
```
