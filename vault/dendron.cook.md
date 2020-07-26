# Cookbook

### Use Dendron with a current workspace

Copy the settings in this [sample workspace](https://github.com/dendronhq/dendron-template/blob/master/dendron.code-workspace) file. Dendron uses your first folder as the index for where it will look for notes.

```
"folders": [
    {
        "path": "vault"
    },
    ...
],
```

Rename your current workspace file to `dendron.code-workspace`. Use the [Dendron: Change Workspace](dendron.topic.commands) command and set the workspace to the directory containing `dendron.code-workspace`.