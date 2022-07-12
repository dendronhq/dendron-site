---
id: 80zzgn5f933e08rtapmfpwg
title: taskCompleteStatus
desc: 'A list of statuses that represent a task that is complete'
updated: 1657226999307
created: 1657226948011
---

## Summary
- type: ``
- default: `` 
- required: ``
- frontmatter: ``

## Description

{{fm.desc}}.

If a task note has a status that matches anything in this list, the task is considered to be
complete.

This is used in the preview and publishing, where a link to a completed task is
displayed with a checked box, as opposed to an empty checkbox for all other
tasks.

You'll likely want to use this only for tasks that are considered "successful",
so tasks that have been dropped, blocked, or failed are not displayed with a
checkmark.

## Example

```yaml
workspace:
    task:
        taskCompleteStatus: ["x", "done"]
```
