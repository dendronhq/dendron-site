---
id: 04dd9ad8-3d81-4098-a661-21b6acc6f443
title: Cook
desc: ''
updated: 1621722860037
created: 1621721485330
---

### Create a new Command

1. Add command to `DENDRON_COMMANDS` under `plugin-core/src/constants.ts`
2. Open the command prompt, enter `Run Task`, and run `gen:config`
   - this will add the command to `package.json`
3. Create the new command in `plugin-core/src/commands/{COMMAND_NAME}.ts`
   - you can copy the contents of an existing command (eg. `src/commands/ShowHelp.ts`) to help you get started
4. Write tests
   - tests are in `plugin-core/src/test/suite-integ/{COMMAND}`
   - testing instructions are [[here|dendron.dev.qa]]
5. Write command logic
6. If it makes sense, add a keyboard shortcut for the command. Make sure it doesn't conflict with an generic VSCode command or existing Dendron commands. You can detect existing keybindings by using the guide [here](https://code.visualstudio.com/docs/getstarted/keybindings#_detecting-keybinding-conflicts)
7. Add command to `src/commands/index.ts`
8. Submit pull request

### Create a new Pod

1. setting up dev environment and getting started: <https://dendron.so/notes/81da87be-2d4e-47b5-a1d6-c0d647e1ab00.html>
2. sample code for json export pod: <https://github.com/dendronhq/dendron/blob/master/packages/pods-core/src/builtin/JSONPod.ts#L143:L143>
3. what you will get from `prepareNotesForExport`: <https://dendron.so/notes/0db94b86-d5c2-4e70-8f61-1a686fa8cc1d.html>
4. anki pod: take notes and transform them to anki format

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
2. add button

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

## Utilities

### Clipboard

```ts
import { clipboard } from "../utils";
clipboard.writeText(link);
```

### Prompt User for Input using Selection

- see [this](https://github.com/dendronhq/dendron/blob/dev-kevin/packages/plugin-core/src/commands/VaultAddCommand.ts#L1:L1)

### Prompt User for Input using Free Text

- see [this](https://github.com/dendronhq/dendron/blob/dev-kevin/packages/plugin-core/src/commands/VaultAddCommand.ts#L1:L1)

```ts
let out = await VSCodeUtils.showInputBox({
    prompt: "Path to your new vault (relative to your workspace root)",
    placeHolder: localVaultPathPlaceholder,
});
if (PickerUtilsV2.isStringInputEmpty(out)) return;
```

## Tests

### Upating the cursor position

- see [this](https://github.com/dendronhq/dendron/blob/dev-kevin/packages/plugin-core/src/test/suite-integ/LookupCommand.test.ts#L846:L846)