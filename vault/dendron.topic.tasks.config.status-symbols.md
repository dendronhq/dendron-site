---
id: g35ew0xgi09w3s0srqj0r75
title: statusSymbols
desc: 'Map note statuses to other symbols'
updated: 1657226766903
created: 1657226629722
---

## Summary
- type: `object`

## Description

{{fm.desc}}

The mapped symbol is what will be displayed for a task that has that
status.

The key portion (left side of `:`) is the status of the task, and value portion
(right side of `:`) is what will displayed in the editor, preview, and
publishing for that task.

## Example

```yaml
workspace:
    task:
        statusSymbols:
            "shipped": "🛳️"
```