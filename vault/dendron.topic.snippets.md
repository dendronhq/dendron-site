---
id: 9eca1992-7540-4d9d-97fb-328b27748b2c
title: Snippets
desc: ''
updated: 1596561207607
created: 1596561207607
stub: false
---
# Snippets

Snippets are templates that you can trigger to automatically insert text that you use on a regular basis. Examples include meeting note templates, contact details and recipes. 

You can read about how to work with snippets [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

Dendron automatically comes with snippets. They are available at in the following file: `vault/.vscode/dendron.code-snippets`. You can see a copy of it [here](https://github.com/dendronhq/dendron-template/blob/master/vault/.vscode/dendron.code-snippets).

You can modify snippets by using `> Preferences: Configure User Snippets` and selection `dendron.code-snippets`.

# Using Snippets

You can use [[intellisense|dendron.ref.intellisense]] to preview snippets and use `tab` key to complete them.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tab-autocomplete.gif)

((ref:[[dendron.related.dendron-snippet-maker]]))

# Issues

### Can't autocomplete snippets inline

To get snippets to autocomplete, you'll have to tweak the following settings.

1. go to > workspace: open user settings (json
2. change the following line to `true`
```
"editor.suggest.showSnippets": false,
```
