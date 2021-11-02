---
id: 9eca1992-7540-4d9d-97fb-328b27748b2c
title: Snippets
desc: ''
updated: 1634664629269
created: 1596561207607
---

## Summary

Snippets are templates that you can trigger to automatically insert text that you use on a regular basis. Examples include meeting note templates, contact details and recipes. 

You can read about how to work with snippets [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

Dendron automatically comes with snippets. They are available at in the following file: `vault/.vscode/dendron.code-snippets`. You can see a copy of it [here](https://github.com/dendronhq/dendron-template/blob/master/vault/.vscode/dendron.code-snippets).

You can modify snippets by using `> Preferences: Configure User Snippets` and selection `dendron.code-snippets`.

## Quickstart

You can use [[intellisense|dendron.ref.intellisense]] to preview snippets and use `tab` key to complete them.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tab-autocomplete.gif)

![[pkg.dendron-snippet-maker]]


## Topics

### Variables

You can use custom variables in your snippets. You can read more about it [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables). An excerpt of VSCode variables is pasted below:

The following variables can be used:
* TM_SELECTED_TEXT The currently selected text or the empty string
* TM_CURRENT_LINE The contents of the current line
* TM_CURRENT_WORD The contents of the word under cursor or the empty string
* TM_LINE_INDEX The zero-index based line number
* TM_LINE_NUMBER The one-index based line number
* TM_FILENAME The filename of the current document
* TM_FILENAME_BASE The filename of the current document without its extensions
* TM_DIRECTORY The directory of the current document
* TM_FILEPATH The full file path of the current document
* RELATIVE_FILEPATH The relative (to the opened workspace or folder) file path of the current document
* CLIPBOARD The contents of your clipboard
* WORKSPACE_NAME The name of the opened workspace or folder
* WORKSPACE_FOLDER The path of the opened workspace or folder

For inserting the current date and time:
* CURRENT_YEAR The current year
* CURRENT_YEAR_SHORT The current year's last two digits
* CURRENT_MONTH The month as two digits (example '02')
* CURRENT_MONTH_NAME The full name of the month (example 'July')
* CURRENT_MONTH_NAME_SHORT The short name of the month (example 'Jul')
* CURRENT_DATE The day of the month
* CURRENT_DAY_NAME The name of day (example 'Monday')
* CURRENT_DAY_NAME_SHORT The short name of the day (example 'Mon')
* CURRENT_HOUR The current hour in 24-hour clock format
* CURRENT_MINUTE The current minute
* CURRENT_SECOND The current second
* CURRENT_SECONDS_UNIX The number of seconds since the Unix epoch

For inserting random values:
* RANDOM 6 random Base-10 digits
* RANDOM_HEX 6 random Base-16 digits
* UUID A Version 4 UUID

For inserting line or block comments, honoring the current language:

* BLOCK_COMMENT_START Example output: in PHP /* or in HTML <!--
* BLOCK_COMMENT_END Example output: in PHP */ or in HTML -->
* LINE_COMMENT Example output: in PHP //




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
    prefix: "time"~~,~~
    scope: "markdown,yaml",
    body: "$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE",
    description: "time",
}
}
```
