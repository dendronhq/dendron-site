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

## Using Snippets

You can use [[intellisense|dendron.ref.intellisense]] to preview snippets and use `tab` key to complete them.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tab-autocomplete.gif)

((ref:[[dendron.pro.dendron-snippet-maker]]))

## Default Snippets

Dendron comes with a series of default snippets when you first initialize your workspace. They are located in `{workspace}/vault/.vscode/dendron.code-snippets`.

```ts
{
todo: {
    prefix: "to",
    scope: "markdown",
    body: "- [ ]",
    description: "render todo box",
},
tag: {
    prefix: "#",
    scope: "markdown,yaml",
    body: "[[#${1:my-tag}|tag.${1}]]",
    description: "tag",
},
date: {
    prefix: "date",
    scope: "markdown,yaml",
    body: "$CURRENT_YEAR.$CURRENT_MONTH.$CURRENT_DATE",
    description: "today's date",
},
time: {
    prefix: "time",
    scope: "markdown,yaml",
    body: "$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE",
    description: "time",
}
}
```

## Issues

### Can't autocomplete snippets inline

To get snippets to autocomplete, make sure you don't have snippets disabled

1. go to > workspace: open user settings (json)
2. change the following line to `true`

```
"editor.suggest.showSnippets": false,
```

