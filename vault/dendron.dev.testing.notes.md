---
id: bf26c697-3e70-4e34-b15d-ef40c4b7d429
title: Notes
desc: ''
updated: 1610816370506
created: 1610816231328
---

Thank you [Mark H. Choi](https://github.com/hikchoi/cerebrarium) for the below notes

## Session goal
- Add a test for MarkdownPublishPod
- Show how tests are set up for Dendron

## watch

```bash
cd bootstrap/scripts
./watch.sh
```
- Dendron is made up of a multiple typescript projects
- This script will watch all of them and compile them when you make change to the code.

---

## Testing in Dendron

- All tests are managed with jest.
    - Except the plugin itself, which uses mocha
        - mocha is very well integrated into VSCode's [test harness](https://en.wikipedia.org/wiki/Test_harness)
- Any test code that are not testing plugin functionality are
    - located in the `__tests__` directory
    - in the file name formatted `TestName.spec.ts`
- To run a test, use VSCode tasks
    - `cmd` + `shift` + `p`, -> `Task: Run Task` in the command palette
    - Select the appropriate task to run.
        - These are vscode wrappers around bash scripts.
    - In our case, we want to test `MarkdownPod.spec.ts`
    - Type `npm:test:watch` in the task comman palette
    - There will be a number of selections, marked with which project's test it will be running.
        - Select the one marked with `pods-core`, as we are testing pods today.
    - This will open a terminal and run `jest --watch` on the specific test we are interested in.
        - Now jest will run all the tests for you every time you change your test code
- Writing new tests
    - Start a new [describe block](https://jestjs.io/docs/en/api#describename-fn), and give it an appropriate name.
    - Write a new test case.
        - Use `runEngineTest`
            - Multiple versions of this exists
            - Make sure you import the right version of this.
                - This is a typescript thing (?)
        - There are preset scenarios for testing
            - These are `PreSetupHookFunctions`
            - They set up hard-coded notes in a vault so that they can be used in a test
    - Quick jest tip: use snapshots to grab a test result (something long that you don't really want to construct manually), and use that for your assertions
        - These can be found in `__tests__/__snapshots__`
        - Don't forget to remove the snapshot code for the final test code if it isn't necessary.
    - Clean up any unused code / warnings
- After writing all the tests, check again by running the entire test suite
    - Run `Test: bootstrap` found under `Task: Run Task`
        - This will all tests in all packages.
        - We want to do this before commiting because Dendron is a mono-repo, and most packages have dependencies on each other.
        - We want to make sure our changes aren't breaking something elsewhere.
        - Github action that will automatically do this for every push will be coming soon.
- If you want to be more careful, you can also test the plugin itself at this point.
    - The above step tests every single package that is not a plugin.
    - To run tests for the plugin itself, run `Extension Integ Tests (plugin-core)`, which can be found in the Run pane.