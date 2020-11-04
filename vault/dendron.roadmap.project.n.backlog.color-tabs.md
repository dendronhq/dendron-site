---
id: a4252774-0c08-4bca-a1b5-b6f369908aeb
title: Color Tabs
desc: ''
updated: 1603426502775
created: 1602430633050
---

# Color Tabs

- [github issue](https://github.com/dendronhq/dendron/issues/261)

## Goals

Support custom colorization of tabs in Dendron, specified by schema. 

## Details
VSCode has the following settings for tabs. 

```
"workbench.colorCustomizations": {
    "tab.activeBackground": "#FFFFFF",
    "tab.activeForeground":"#000000",
    "tab.inactiveForeground":"#FFFFFF",
    "tab.inactiveBackground":"#000000",
    "tab.border":"#FFFFFF"
}
```

The properties that can be customized are `activeBackground` and `inactiveBackground`.  In addition to tab color, you can also customize the title bar (top horizontal), activity bar (side panel) and status bar(bottom bar). When they are all set, it looks something like this

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/project.color-tabs.jpg)

## Proposal

### Set custom tab color based on schema. 

```yml
schemas:
- id: project
  tabColor: 
    value: #FFFFFF
    recursive: false # default: true, optional param
```

By default, `tabColor` would be recursive, so any child schemas would also have the property applied. More specific `tabColor` settings on child schemas would take precedence over parent `tabColor` settings.

Currently, the only way to set tab color is via the settings file which means Dendron would dynamically update your workspace settings as you navigate files. 


# Related
- [per editor/tab background color](https://github.com/Microsoft/vscode/issues/35379)
- settings: 
    - workbench.colorTheme: per workspace/folder settings
    - tab.inactiveForeground 
    - tab.inactiveBackground 
- [discord](https://discordapp.com/channels/717965437182410783/735365126227493004/764283816130248734)
- [color tabs extension](https://marketplace.visualstudio.com/items?itemName=orepor.color-tabs-vscode-ext)