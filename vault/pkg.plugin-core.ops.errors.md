---
id: uBMiK3BkA5HCxYNdiLLzI
title: Errors
desc: ''
updated: 1634590617855
created: 1634590601914
---

## Writing Errors
When handling a Dendron specific error, use the [DendronError](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/error.ts) class

Some things to keep in mind:

- when returning an error from the server, note that you'll need to convert the error to a plain object using [error2PlainObject](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/error.ts#L110)
- when displaying an error in a string, you'll need to convert the error using [stringifyError](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/error.ts#L106:L106)
- whenever possible, attach a [status](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/constants.ts#L18:L18) to an error
- whenever possible, attach a [severity](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/constants.ts#L45) to an error

## Reading Errors
