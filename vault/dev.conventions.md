---
id: RFU8kowsO2Ywxr36uJKl8
title: Conventions
desc: ''
updated: 1631746050602
created: 1631745881605
---

## Error Handling

All errors thrown in Dendron should be an instance of `DendronError`. Code in `common-all/src/error.ts`


- updated: 2021-09-15
```ts
export type DendronErrorProps = {
  name: string;
  /**
   * General message
   */
  message: string;
  /**
   * Arbitrary payload
   */
  payload?: any;
  /**
   * See {@link ERROR_SEVERITY}
   */
  severity?: ERROR_SEVERITY;
  /**
   * Optional HTTP status code for error
   */
  code?: StatusCodes;
  /**
   * Custom status errors
   */
  status?: string;
  /**
   * Raw Error object
   */
  error?: Error;
};
```

## Properties
- code:
    StatusCodes is exported by `@dendronhq/common-all`. It is a list of enums defined by [http-status-codes](https://www.npmjs.com/package/http-status-codes)
