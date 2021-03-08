---
id: 66d734d2-07bd-4ac6-be0b-a38b55bc1099
title: Keybindings
desc: ''
updated: 1608494660278
created: 1608494646816
---
You can trigger specific lookups using custom key bindings. For example, The following keybinding will trigger lookup set to creating a journal note and turning a selection into a link. 

((ref:[[dendron.topic.keybindings]]#keybindings,1))

```json
{
"command": "dendron.lookup",
"key": "cmd+k j",
    "args": {
        "noteType": "journal",
        "selectionType": "selection2link"
    }
}
```

<a href="https://www.loom.com/share/1e6b39a93b7245e4b13310f7c06d972f"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/1e6b39a93b7245e4b13310f7c06d972f-with-play.gif"> </a>

