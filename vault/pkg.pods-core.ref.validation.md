---
id: fdgqDQF5FgGfTiQCeLPJ9
title: Validation
desc: ''
updated: 1635787893555
created: 1635787826548
---

## Summary

Describes how pod configuration is validated

We use [ajv](https://ajv.js.org/guide/typescript.html) to validate schemas.

- location: src/utils.ts
```ts
  static validate<T>(config: Partial<T>, schema: JSONSchemaType<T>) {
    const validateConfig = ajv.compile(schema);
    const valid = validateConfig(config);
    if (!valid) {
      const errors = ajv.errorsText(validateConfig.errors);
      throw new DendronError({
        message: `validation errors: ${errors}`,
        payload: `error: ${JSON.stringify(validateConfig.errors)}`,
      });
    }
  }
```
