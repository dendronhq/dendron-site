---
id: 0m6xgvziygc8flce3uz08vf
title: Delete
desc: ''
updated: 1660333339724
created: 1660333257189
---
## Summary

{{fm.desc}}
Delete a note by fname and vault. If note doesn't exist, return an error.

## Options

### fname
- type: string

Note fname. REQUIRED

### vault

Note vault name. If more than one vault exists, this is required.

## Examples

```bash
dendron note delete --fname "mytest" --vault vaultName
```