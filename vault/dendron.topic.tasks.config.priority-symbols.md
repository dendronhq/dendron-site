---
id: 4j7dwdloj6lg8bukvivd25s
title: prioritySymbols
desc: 'Map note priorities to symbols'
updated: 1657226933098
created: 1657226878366
---

## Summary
- type: `object`

## Description

{{fm.desc}}

The mapped symbol is what will be displayed for a task that has that
priority.

The key portion (left side of `:`) is the priority of the task, and value portion
(right side of `:`) is what will displayed in the editor, preview, and
publishing for that task.


## Example

```yml
workspace:
    task:
        prioritySymbols:
            H: "high"
            M: "medium"
            L: "low"
```
