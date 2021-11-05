---
id: T6R8YCyPmx4MXHt5J2Aza
title: Theme
desc: ''
updated: 1630970336725
created: 1629999703116
---

## Summary
This goes over the details about [[Preview|dendron.topic.preview]]

## Theming
![[common.theme]]


### Updates
Dendron listens to the [ThemeChange](https://github.com/dendronhq/dendron/blob/master/packages/dendron-next-server/pages/_app.tsx) event from the plugin.

This is currently broadcasted when we load the webview initially [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/views/utils.ts). 

- NOTE: currently, in order to broadcast theme changes, a user needs to run `ReloadWindow`. We have an action item to change this dynamcally. 

On the webview side, Dendron uses the [ThemeSwitcherProvider](https://github.com/dendronhq/dendron/blob/master/packages/dendron-next-server/pages/_app.tsx) to pass the current theme to downstream components
