---
id: 9wND5ZkFaEyOI1QtqrZA3
title: Assign Category to Task
desc: ''
updated: 1640763206212
created: 1636474909745
---

## Summary
How we assign `category` to tasks.

## Prerequisites
None

## Process
1. Read over the different [[categories|#categories]] and use your best judgement to apply the correct type
1. If the commit involves [[#breaking-changes]], add a `BREAKING: <desc>` in a newline after the commit
1. When in doubt, add a question in `#dendron-team` channel 

## Examples
1. Examples of features:
    - introducing a new command
    ```
    feat(commands): introduce Dendron Magic Command

    docs: <PR/link to docs>
    ```
1. Examples of enhancements
    - lookup has new icons
    ```
    enhance(lookup): add magic icon toggle to lookup

    docs: <PR/link to docs>
    ```
1. Examples of chores:
    - we improved the build pipeline
    - we added a new analytics event
    ```
    chore(build): make build pipeline 50% faster
    ```
1. Example of a breaking change
    - change the name of an api
    ```
    chore(commands): rename search to lookup
    BREAKING: this changes the `Dendron: Search` command to `Dendron: Lookup`
    ```

## Reference

### Categories
By type, we mean type as specified by [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

Dendron has the following types:
- feat: new feature work
- enhance: enhancement of existing feature
- fix: fixing an existing feature
- chore: internal work

### Breaking Changes

This includes introducing changes that are backwards incompatible with existing feature set. 

## Related
- [[Assign Scope to Feature|dendron://dendron.dendron-site/area.product.sop.assign-scope-to-feature]]
