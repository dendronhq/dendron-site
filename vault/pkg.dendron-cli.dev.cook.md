---
id: BiWzIKSDJBRBEhVQlZWpB
title: Cook
desc: ''
updated: 1637207886385
created: 1636128293688
---


### Creating a new CLI Command

See [[Arch|pkg.dendron-cli.arch]]

### Adding new subcommand to an existing command

1. Open up the command `dendron-cli/src/commands/${CommandName}.ts`
1. Inside the command, update the `enum ${CommandName}Commands` and add your command
1. Add switch statement inside of `execute` loop to handle command


Examples:
- [feat: delete note via cli · dendronhq/dendron@87139ad](https://github.com/dendronhq/dendron/commit/87139addf0d804dbd903196b0e5e7bb7aca9a492)


## Lookup
- [[Typescript Development with Dendron and VSCode|dendron://dendron.dendron-site/community.greenhouse.2021-10-15-ts-dev-vscode]]