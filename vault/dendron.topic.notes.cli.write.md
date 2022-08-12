---
id: sw1qsmshxuk8evhlqwx47nf
title: Write
desc: ''
updated: 1660331987531
created: 1660331813104
---
## Summary

{{fm.desc}}
Creates a new note if fname/vault doesn't exist or updates body of existing note

## Options

### fname
- type: string

Note fname. REQUIRED

### vault

Note vault name. If more than one vault exists, this is required.

### body
- type: string
- default: ""

Note body. This will override existing note body if note exists

## Examples

```bash
dendron note write --fname "mytest" --vault vault --body "this is a body"
```