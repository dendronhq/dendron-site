---
id: 2b87ceb3-2a90-4dee-ab8e-980172ecaef1
title: Errors
desc: ''
updated: 1630791786886
created: 1620879891784
---


## Summary

This page describes how we handle errors in Dendron.

Any error that is throw by Dendron should extend from [`DendronError`](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/error.ts). 

## Details
- If a function can return multiple errors, use `DendronCompositeError` to wrap up multiple errors
- When returning errors from a server, use `error2PlainObject` to extract the common properties
- When logging errors, use `stringifyError` (regular `stringify` will [omit fields](https://stackoverflow.com/questions/18391212/is-it-not-possible-to-stringify-an-error-using-json-stringify))
- If applicable, use 


## API 

### ERROR_STATUS

These match to common errors in Dendron. You can find the full list [here](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/constants.ts)

### ERROR_SEVERITY

```ts
/**
 * Labels whether error is recoverable or not
 */
export enum ERROR_SEVERITY {
  /**
   * Recoverable 
   */
  MINOR = "minor",
  /**
   * Non-recoverable 
   */
  FATAL = "fatal",
}
```