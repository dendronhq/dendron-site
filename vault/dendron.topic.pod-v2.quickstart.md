---
id: j5wgTcRHQZomzSHsg41O8
title: Quickstart
desc: ''
updated: 1643099901005
created: 1638871404471
---

## Summary

To run a pod, you must first create a pod configuration, which specifies things like the type of pod, what data it should act on, connection information, and data translation behavior. After creating a configuration, you may optionally choose to persist that configuration, or to run it immediately without saving it.  If you persist the configuration, then you can easily re-run the pod later without having to set the configuration settings again.

## Creating a Pod Configuration

To create a pod configuration, run the `Dendron: Export Pod V2` command, and select 'New Export'.

## Editing a Saved Pod Configuration

To edit a saved pod configuration, run the `Dendron: Configure Export Pod V2` command, select your pod type and then select your configuration ID.  Pod Configurations are stored as YAML files in your local file system.

## Understanding the Pod Configuration

![[dendron://dendron.dendron-site/dendron.topic.pod-v2.config#common-properties:#keybindings]]

### Getting User Input for a Property at Runtime

For selective properties, you can also choose to not include a property in the configuration if you would like to set that property during the pod runtime. 

For example, say that you want to save a configuration to export to your personal Google Docs, but you want to be able to choose the scope during each export. If you delete the `exportScope` property in the pod configuration, then you will be prompted to specify the scope when you run the pod.  However, you won't have to specify the other properties that are in the config, such as the connection details to your Google account.

## Running a Saved Pod Configuration

To run a saved pod configuration, use the `Dendron: Export Pod V2`.  In the QuickPick, select the id of your configuration to run it.

## Adding a VS Code Shortcut

![[dendron://dendron.dendron-site/dendron.topic.pod-v2.config#keybindings,1]]
