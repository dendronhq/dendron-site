---
id: FfyL5dSzFwX1iseI56oYy
title: Test
desc: ''
updated: 1636132323321
created: 1636128639000
---

## Unit Testing

### Writing
<!-- Writing unit test -->
All packages have tests written in `jest`. The are located under `src/__test__/{pkgName}`

```txt
- src/
    - __tests__/
        - api-server
        - common-all
        - common-server
        - dendron-cli
        - pods-core
        - engine-server
        - common-frontend
        - __snapshots__
```

When writing a test for a package, put the test underneath the `{pkgName}` folder

### Executing
<!-- Running unit test -->

#### Run All Tests
- Inside VSCode
  > Run Task: Test (bootstrap)

- Using CLI
```bash
dendron/bootstrap/scripts/testAll.sh
```

#### Run a Single Test
1. Open the `.spec.ts` file you want to test in VSCode
2. Use command prompt and run `> Tasks: Run tasks`
3. Run the following task `> npm:test:watch engine-test-utils`

