---
id: be12c6a8-14d4-4a10-ae28-d8e0bb78397d
title: Troubleshooting
desc: ''
updated: 1620495892921
created: 1620495892921
---

## Errors

### NoteProps is undefined
- cause: a hook function isn't returning a valid `{note}` object. make sure your returning a dictionary instead of simply `note`
- fix: inspect your hook function and make sure its returning a `{note}` object

### hook X has missing script
- cause: you defined a hook without a script
- fix: create a script for your hook function in `hooks/{script}.js`
