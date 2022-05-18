---
id: 692fa114-f798-467f-a0b9-3cccc327aa6f
title: Tips
desc: ''
updated: 1651243836836
created: 1595614204291
nav_order: 4.1
---

## Bucket

### Peeking

It is possible to [peek](https://code.visualstudio.com/docs/editor/editingevolved#_peek) at wiki-links in Dendron. This lets you see content without actually navigating to the page.

<a href="https://www.loom.com/share/2289613674ac4a4183ed5db8630120dc">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/2289613674ac4a4183ed5db8630120dc-with-play.gif"> 
</a>


### Moving Lines

When working with lines, you can move entire lines at a time using `option-up|down` shortcut on mac. This is really helpful for prioritizing todos among other things ✅

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips-move-lines.gif)

### Search Editor

![[dendron://dendron.dendron-site/dendron.topic.vscode.concepts.search-editor]]

You can combine it with Dendron's hierarchies to do some amazing things, like aggregating all your todos and scoping your search to a specific hierarchy. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.search-editor.gif)

You can open search editor via keyboard shortcut. I use it to start a search with the current filename. works really well with Dendron hierarchies.

```json
  {
    "key": "ctrl+s f",
    "command": "search.action.openNewEditor",
    "args": {
      "query": "",
      "triggerSearch": false,
      "focusResults": false,
      "includes": "${fileBasenameNoExtension}",
    }
  }
```

### Collapsing Headers and Bullets

You can collapse headers at different levels and bullets at different indentation levels inside VS Code. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.toggle-bullets.gif)


### Create a new note in a deeply nested hierarchy 
- [Discord thread](https://discordapp.com/channels/717965437182410783/735365126227493004/758235198403117087)

- Problem: 
   - You are currently in `foo` and you want to create the note `foo.child1.child2.my-note`. You don't want to type out the full path. Is there an easier way to create `my-note` than typing out the full path?
- Solution: 
  - VS Code doesn't support autocomplete inside the quick input widget which Dendron uses for lookups. We are experimenting with different ways of getting around this. 
  - Today, the workaround is to create a wiki-link inside another note and navigate via link to create it. 
  - Another method, if you know you will be creating multiple children under a single deeply nested parent, is to pin the parent and create the child from the parent 

<a href="https://www.loom.com/share/f0bbfc9cae0a474a99f8a1169b7b96c7">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/f0bbfc9cae0a474a99f8a1169b7b96c7-with-play.gif"> </a>


### Automate Git Tasks
- [Discord thread](https://discordapp.com/channels/717965437182410783/742532267058004098/759130627781558403)
- Problem:
  - You want an easier way to `git add && git commit && git push`
- Solution #1:
  - Use [git automator](https://marketplace.visualstudio.com/items?itemName=ivangabriele.vscode-git-add-and-commit).
- Solution #2:
  - Add alias to your bashrc/zshrc along the lines of 
  ```
  # WARNING: pushes straight to the main/master branch. Do not use on source code. 
  alias gitaddcommitpushmain='git add . && git commit -m "update"; git fetch origin main && git rebase origin/main; git push origin main'
  alias gitaddcommitpushmaster='git add . && git commit -m "update"; git fetch origin master && git rebase origin/master; git push origin master'
  ```

### Publish to GitHub Pages with Actions

- [[GitHub Pages with GitHub Actions|dendron://dendron.dendron-site/dendron.topic.publish.cook.github-action]]

### Go back to previous Note

Use "> Quick Open Previous Recently Used...` to navigate through recently opened notes
  - default shortcut: `CTRL-TAB`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.tabs.most-recent.gif)


### Keep Track of Tabs

It's really easy to lose sight of your tabs, especially with menu items occluding the little horizontal space you have for tabs. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.tabs.nav.jpg)

Instead of relying on the menu, you can use `Show All Editors` to see all tabs via a dropdown. You can also narrow down tabs after selection.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.tabs.editors.gif)

You can streamline this process by assigning a keyboard shortcut to the command. Below is an example.
  ```json
  {
    "key": "ctrl+t",
    "command": "workbench.action.showAllEditors"
  }
  ```


### Copy and Paste Web Content into Dendron

First copy it into Notion or use the Notion web clipper to clip it. This will format it nicely in Markdown. You can then paste it into Dendron with Markdown and everything :)

### Open Dendron from terminal

#### Linux & Mac & WSL

You can create an alias in your `.bashrc` / `.zshrc` file. Remember to replace `path/to/your/` with your `code-workspace` file path.

```sh
alias dendron="code path/to/your/dendron.code-workspace"
```


<!-- 

### Custom Outlines

TODO: need to add more details

Outlines are super helpful but there are not always feasible depending on the file format

![](/assets/images/2020-09-21-19-33-21.png)

In those situations, I like to leave markers inside a note and use the search editor to surface those markers 

<a href="https://www.loom.com/share/eabf90dbc74e4a1facd5e82bd76a6134"> 
<p>Tips - Breadcrumbs - Watch Video</p> 
<img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/eabf90dbc74e4a1facd5e82bd76a6134-with-play.gif"> </a>

https://www.loom.com/share/eabf90dbc74e4a1facd5e82bd76a6134

You can use the same technique 

# Generating all journal notes ahead of time

https://stackoverflow.com/questions/25701265/how-to-generate-a-list-of-all-dates-in-a-range-using-the-tools-available-in-bash
-->

## Workbench

### Navigating a hierarchy

One easy way of navigating hierarchies it to click on the file name. This will reveal a dropdown that shows you all siblings of the current note. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/guide.siblings.jpg)

### Remove Markdown Buttons in Menu Bar
- [Discord thread](https://discordapp.com/channels/717965437182410783/739186036495876126/758408534848831558)

```json
"markdownShortcuts.icons.bold": false,
"markdownShortcuts.icons.italic": false,
"markdownShortcuts.icons.strikethrough": false,
"markdownShortcuts.icons.bullets": false,
```

### Moving Panes

You can move VS Code tabs using the following builtin commands:
- `View: Move Editor Into Next Group`
- `View: Move Editor Into Previous Group`

They are mapped on to the following keyboard shortcuts:
- mac: `cmd+ctrl+left|right`

This is helpful for looking at your notes side by side. 

<a href="https://www.loom.com/share/d99ec9cce8ff4d869cf8c36955152808"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/d99ec9cce8ff4d869cf8c36955152808-with-play.gif"> </a>

### Pinning Tabs

You can pin tabs in VS Code by right clicking on a tab and selecting `Pin Tab`. 

The latest VS Code lets you control pin behavior for tabs. It's not currently documented as of 2020.09.28 but as of the latest Insiders build, it has a few different options to control the pinned behavior. 

- options:
  - `normal`: (default) normal tab size with a pin icon
  - `shrink`: reduced tab size with some text visible
  - `compact`: only icon visible

```json
"workbench.editor.pinnedTabSizing": "shrink"
```


### Zen Mode

VS Code can be visually noisy. You can hide most of the UI by toggling `Zen Mode` with a three panel layout. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.zen.jpg)

The following setting overrides are useful: 

```json
// by default, zen mode will open a new "workspace" which I don't like
"zenMode.fullScreen": false,
// I'm a Vim user so I like my line numbers
"zenMode.hideLineNumbers": false,
```

To navigate tabs and look at the breadcrumb outline, You can use the following commands

```json
workbench.action.showAllEditors -> (no shortcut by default, consider mapping to ctrl + t)
breadcrumbs.focusAndSelect -> cmd + t
```

You can see a video of this workflow in the video below.

<a href="https://www.loom.com/share/dd27df6d556d4ba6b28b2028ca7d1455"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/dd27df6d556d4ba6b28b2028ca7d1455-with-play.gif"> </a>


### Indenting Wrapped Text

Some PKM editors like Obsidian will automatically further indent lines in places like bulletpoints. VS Code offers this functionality via the `wrappingIndent` setting:

```json
    "editor.wrappingIndent": "same",
```

- options
  - `none`: No indentation. Wrapped lines begin at column 1.
  - `same`: Wrapped lines get the same indentation as the parent.
  - `indent`: Wrapped lines get +1 indentation toward the parent.
  - `deepIndent`: Wrapped lines get +2 indentation toward the parent.

Changing the value to indent may provide better visual understanding of indentation, otherwise `same` is the default.

## Snippets

### Have links auto-complete without additional key presses

- Update your settings to the following
```json
// The following settings will only apply to Markdown files:
  "[markdown]": {
    // quickSuggestions true will provide suggestions as you type.
    // If you turn this on and DO NOT want suggestions
    // for non-wiki-link, non-tag words,
    "editor.quickSuggestions": true,
    // This is poorly documented, but seems to offer suggestions
    // from any word in open document when turned on, which
    // can be a little distracting in Markdown docs:
    "editor.wordBasedSuggestions": false,
    "editor.tabSize": 2,
    // Set this to false if you turn on quickSuggestions
    // but don't want suggestions for Markdown related snippets
    // as you type:
    "editor.suggest.showSnippets": false,
  },
```

## Markdown

### Always have the preview open


You can add the following setting to your workspace to always have a Markdown editor show up with your content. 

```json
"markdown-preview-enhanced.automaticallyShowPreviewOfMarkdownBeingEdited": true,
```

### Symbol search

When using the standard file-search in VS Code (`ctrl-P`), you can search for all titles in your workspace if you use the starting keyword `#`

Example: if i know i had a header with the title "cheatsheet", i can type in `# cheatsheet`

### Auto bullet list

VS Code doesn't support auto-formatting by default. You can use the following workaround to mimic the behavior.


- Add list-item below current position. Using `-`
```json
{
        "key": "shift+enter",
        "command": "type",
        "args": {
            "text": "\r\n- "
        },
        "when": "editorTextFocus && !editorReadOnly && editorLangId == 'markdown'"
}
```

- Add list-item below current position. Using `*`

```json
{
        "key": "shift+enter",
        "command": "type",
        "args": {
            "text": "\r\n* "
        },
        "when": "editorTextFocus && !editorReadOnly && editorLangId == 'markdown'"
}
```

> Credit for this recipe goes to Discord user `@Stigs#0135`

### Academic Notes with Templates  

With Dendron's [[schema templates|dendron.topic.schema#template]] you can make templates that are applied automatically whenever you create reading notes. You can even make different templates for different types of sources. For instance, you can have one template for articles and another for books.

- Add an `article.schema.yml` schema file that applies an `article.template.notes.md` template file
- Add a `book.schema.yml` schema file that applies a `book.template.notes.md` template file
- Add other schema and template files with relevant patterns for conference presentations, TED talks, edited collections, etc.

You can adopt or adapt these schema template files for [books and articles](https://github.com/ryan-p-randall/some-dendron-starter-files).

Once you've made similar schema and template files, when you make a new file using the [[lookup bar|dendron.topic.lookup.create]], the template will be applied to your new note in the corresponding schema's domain. A new note with a name like `article.hall-stuart-encoding-decoding.notes` will apply the article template, and a new note with a name like `book.hooks-bell-feminism-is-for-everybody.notes` will apply the book template.

## Other Tools

This is a list of other tools that work well with Dendron.
- [nvAlt](https://brettterpstra.com/projects/nvalt/): local Markdown editor that works well with Dendron notes (mac only)

## Other VS Code Extensions

### Git
- [Git Automator](https://marketplace.visualstudio.com/items?itemName=ivangabriele.vscode-git-add-and-commit): one command to commit and push all changes
- [Git Doc](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gitdoc): auto-commit and (optionally) auto push your notes at fixed intervals
- [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): Repository/File/Line history and annotations of all your files
- [Path AutoComplete](https://github.com/ionutvmi/path-autocomplete): Path autocomplete for Visual Studio Code

### Coding
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

### Other
- [Macros](https://marketplace.visualstudio.com/items?itemName=geddski.macros): Define custom macros 
- [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim): Vim key bindings 😍
- [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks): Bookmark lines within File [Vertical Limit](https://marketplace.visualstudio.com/items?itemName=generik.vertical-limit): Work with multiple cursors and blocks of text
- [CodeUI](https://marketplace.visualstudio.com/items?itemName=ryanraposo.codeui): Easier customization of every part of the VSCode UI
- [Open in Typora](https://marketplace.visualstudio.com/items?itemName=cyberbiont.vscode-open-in-typora&utm_source=VSCode.pro&utm_campaign=AhmadAwais): Open note in Typora
- [Profile Switcher](https://marketplace.visualstudio.com/items?itemName=aaronpowell.vscode-profile-switcher): Create different set of extension profiles
- [Advanced Table Functionality](https://marketplace.visualstudio.com/items?itemName=RomanPeshkov.vscode-text-tables): Do more with markdown tables ^UJhO4Ps5qCWn

## Other Browser Extensions

### Web Clipper
- [MarkDownload](https://chrome.google.com/webstore/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi?hl=en-GB): Markdown-based web clipper
- [Roam Highlighter](https://chrome.google.com/webstore/detail/mcoimieglmhdjdoplhpcmifgplkbfibp)
