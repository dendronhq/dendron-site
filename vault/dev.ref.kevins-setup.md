---
id: 10e86d42-e3e3-4aae-92ad-c086b776f34e
title: Kevins Setup
desc: ''
updated: 1612801485282
created: 1612801401299
---


Dendron has a lot of moving parts so I try to divide my workspace accordingly.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/dev.kevin.jpg)

- 1: What I'm working on
- 2 and 3: Related project (eg. if 1 was the plugin, 2 & 3 might be `engine-server` and `api-server` respectively)
- 4 and 5: This is where I keep common utils/libs (eg. `common-all`, type definitions, etc)

Since your screen space can be pretty small when doing this, I use the following keyboard shortcut to trigger maximizing panes

```json
{ 
    "command": "workbench.action.toggleEditorWidths",
    "key": "ctrl+cmd+m"
}
```

I also try to document the main logic when I run into it in the {project}.internals hierarchy on our site: https://dendron.so/notes/4b8f0470-dacb-433b-8d0c-f5a7d8f5245d.html
