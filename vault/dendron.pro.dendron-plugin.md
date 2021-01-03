---
id: 87d90002-f480-45eb-a8c4-d00df4d61557
title: Dendron-plugin
desc: ''
updated: 1609716107985
created: 1605375348464
---

# Dendron Plugin

## Activation
- check if we have an active dendron workspace

# Cook

### Create a new Command

1. Add command to `DENDRON_COMMANDS` under `plugin-core/src/constants.ts`
2. Open the command prompt, enter `Run Task`, and run `gen:config`
    - this will add the command to `package.json`
3. Create the new command in `plugin-core/src/commands/{COMMAND_NAME}.ts`
    - you can copy the contents of an existing command (eg. `src/commands/ShowHelp.ts`) to help you get started
4. Write tests
    - tests are in `plugin-core/src/test/suite-integ/{COMMAND}`
    - testing instructions are [[here|dendron.dev.testing]]
5. Write command logic
1. If it makes sense, add a keyboard shortcut for the command. Make sure it doesn't conflict with an generic VSCode command or existing Dendron commands. You can detect existing keybindings by using the guide [here](https://code.visualstudio.com/docs/getstarted/keybindings#_detecting-keybinding-conflicts)
6. Add command to `src/commands/index.ts`
7. Submit pull request


# Dev

You can control the log level in the workspace settings using `dendron.logLevel`. This sets the log level for the plugin and well any server it launches. You will need to restart the workspace for the log level to take effect. 