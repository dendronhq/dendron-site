---
id: 87d90002-f480-45eb-a8c4-d00df4d61557
title: Dendron Plugin
desc: ''
updated: 1620336469924
created: 1605375348464
---

## Utilities
- VSCode specific utilities
  - loc: `src/utils.ts`
- VSCode Editor
  - loc: `src/utils/editor.ts`

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
6. If it makes sense, add a keyboard shortcut for the command. Make sure it doesn't conflict with an generic VSCode command or existing Dendron commands. You can detect existing keybindings by using the guide [here](https://code.visualstudio.com/docs/getstarted/keybindings#_detecting-keybinding-conflicts)
7. Add command to `src/commands/index.ts`
8. Submit pull request

### Create a new Pod

1. setting up dev environment and getting started: https://dendron.so/notes/81da87be-2d4e-47b5-a1d6-c0d647e1ab00.html
1. sample code for json export pod: https://github.com/dendronhq/dendron/blob/master/packages/pods-core/src/builtin/JSONPod.ts#L143:L143
1. what you will get from `prepareNotesForExport`: https://dendron.so/notes/0db94b86-d5c2-4e70-8f61-1a686fa8cc1d.html
1. anki pod: take notes and transform them to anki format

### Adding a new config

`dendron.yml` configuration is determined by `plugin-core/src/types.ts`.

Whenever you add a new entry with a default, make sure to do the following as well.
- [ ] update `Extension.test.ts` (we have a test that checks for default config values that will break)

### Add a new button

1. add type
    - src/commands/LookupCommand.ts
    ```ts
    export type LookupEffectType = "copyNoteLink" | "copyNoteRef" | "multiSelect" | "insertNote";
    ```
1. add button
```ts
export class InsertNoteLinkButton extends DendronBtn {
  static create(pressed?: boolean) {
    return new CopyNoteLinkButton({
      title: "Insert Note",
      iconOff: "diff-added",
      iconOn: "menu-selection",
      type: "insertNote" as LookupEffectType,
      pressed,
    });
  }

  async handle({ quickPick }: ButtonHandleOpts) {
    if (this.pressed) {
      let items: readonly DNodePropsQuickInputV2[];
      if (quickPick.canSelectMany) {
        items = quickPick.selectedItems;
      } else {
        items = quickPick.activeItems;
      }
      let links = items
        .filter((ent) => !PickerUtilsV2.isCreateNewNotePick(ent))
        .map((note) => NoteUtils.createWikiLink({ note }));
      if (_.isEmpty(links)) {
        vscode.window.showInformationMessage(`no items selected`);
      } else {
        await clipboard.writeText(links.join("\n"));
        vscode.window.showInformationMessage(`${links.length} links copied`);
      }
    }
  }
}
```

# Dev

You can control the log level in the workspace settings using `dendron.logLevel`. This sets the log level for the plugin and well any server it launches. You will need to restart the workspace for the log level to take effect. 

