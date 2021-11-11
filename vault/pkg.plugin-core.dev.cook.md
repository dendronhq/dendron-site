---
id: jtHIVXVpyHwRiq3tJBbfq
title: Cook
desc: ''
updated: 1636655685514
created: 1634590309804
---

## Workspace

### Modifying contributes in package.json 

The `contributes` in `package.json` is all generated. If you are planning on modifying it - don't add it directly in the json file but use `yarn gen:config` to do it instead

### Add a new Command

This goes over adding a new command with lookup. To see an example, see this [command](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/InsertNoteLink.ts) and this commit: `cc8a02b4`.

```mermaid
sequenceDiagram
    participant user
    participant lookupCommand
    participant lookupController
    participant lookupProvider
    user ->> lookupCommand: user issues command
    Note left of user: 1. cmd.gatherInput()
    rect rgb(0, 50, 0)
      lookupCommand ->> lookupController: creates controller 
      lookupCommand ->> lookupProvider: creates provider
      lookupCommand ->> lookupController: call show(provider)
      lookupCommand ->> lookupProvider: subscribe to provider
      lookupController ->> user: shows quickinput 
    end
    user ->> user: chooses a selection
    lookupProvider ->> lookupCommand: notify(selection)
    lookupCommand ->> lookupCommand: calls command.execute()
```

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

Conventions:

- if your command involves opening a note, also return it in the `CommandOutput` signature. this makes it easy to compose the command as well as test it

### Add a new command that uses lookup

When creating a new command that utilizes the core lookup components, you will have to implement a subscriber that will listen to the events that the lookup provider publishes. The lookup provider will publish events in various stages of its lifecycle, which the consuming command will have to listen to and act upon.

Under the hood, this is all managed by the [[HistoryService|pkg.dendron-engine.arch.history-service#lookupprovider]]. Take a look at how `HistoryService` is used between the lookup derivative commands and the lookup provider.

A utility method called `NoteLookupProvierUtils.subscribe` is used to easily subscribe to the events `lookupProvider` publishes, and add custom callbacks to the events.

optional callbacks `onDone`, `onError`, `onChangeState`, and `onHide` can be provided to the utility method to further customize the behavior. If any of the callbacks are not provided, the events will simply be logged and resolved (if applicable) as default.

Below is part of a fictional command that uses this utiliy method:

```js
export class SomeCommand extends BasicCommand<...> {
  ...
  async gatherInputs(...) {
    // set up controller
    ...
    // set up provider
    ...
    
    this.promptUserForNoteSelection();
    return NoteLookupProviderUtils.subscribe({
      ...
      onDone: (event: HistoryEvent) => {
        return this.processSelectedNote();
      },
      onError: (event: HistoryEvent) => {
        window.showErrorMessage(event.error.message);
        return;
      },
      ...
    });
  }
  ...

  async execute(...) {
    ...
  }
}
```

### Add new Workspace State

Use the [[State Service|pkg.plugin-core.arch.state]] when working with VSCode workspace related state.

### Add a new Config

See [[Add New Config|dendron://dendron.dendron-site/pkg.common-all.dev.cook#add-new-config]]

## Lookup

### Add a new lookup button

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

## Views
### Adding a Web UI Component

1. see [[Create a new Command|pro.dendron-plugin.cook#create-a-new-command]] for creating a new command
2. Add a new entry to [DendronWebViewKey](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/typesv2.ts)
3. in `execute`, create a new webview
   ```ts
     const title = //TODO: add panel title
     const panel = window.createWebviewPanel(
       "dendronIframe", // Identifies the type of the webview. Used internally
       title, // Title of the panel displayed to the user
       ViewColumn.One, // Editor column to show the new webview panel in.
       {
         enableScripts: true,
         enableCommandUris: true,
         enableFindWidget: true,
         localResourceRoots: [],
       }
     );
     resp = WebViewUtils.genHTMLForWebView({
         title: "Dendron Config",
         view: DendronWebViewKey[TODO]
     });
     panel.webview.html = resp;
   ```

Related:

- See [[here|pkg.dendron-next-server.dev#development]] for how to preview and test your web ui.


## Other

### Access Clipboard

```ts
import { clipboard } from "../utils";
clipboard.writeText(link);
```


### Add a new dependency

When you are merging new changes, note that new dependencies and sometimes packages will be installed. 

#### New Dependencies

```sh
# install all new dependencies
lerna bootstrap
```

#### New Package in Dendron Mono Repo

Adding new packages is a rarer event but might require a workspace rebuild

```sh
# clean up old files (this might take a few minutes)
./bootstrap/scripts/cleanup.sh

# install all dependencies
lerna bootstrap

# build all dependencies
./bootstrap/scripts/build.sh
```


### Remote Development

If you are developing Dendron in a remote environment using VSCode, see additional instructions [[here|dendron.dev.remote]].


### Check if file is in vault

- see src/views/DendronTreeViewV2.ts

```ts
  const uri = editor.document.uri;
  const basename = path.basename(uri.fsPath);
  const ws = getWS();
  if (!ws.workspaceService?.isPathInWorkspace(uri.fsPath)) {
    return;
  }
```

### Insert Text

- src/commands/InsertNoteCommand.ts

```ts
  const editor = VSCodeUtils.getActiveTextEditor()!;
  const pos = editor.selection.active;
  await editor.edit((builder) => {
    const selection = new Selection(pos, pos);
    builder.replace(selection, txt);
  });
```

### Prompt User for Input using Selection

- see [this](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/VaultAddCommand.ts)

### Prompt User for Input using Free Text

- see [this](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/VaultAddCommand.ts)

```ts
let out = await VSCodeUtils.showInputBox({
    prompt: "Path to your new vault (relative to your workspace root)",
    placeHolder: localVaultPathPlaceholder,
});
if (PickerUtilsV2.isStringInputEmpty(out)) return;
```

### Get location of the frontmatter

- example [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/services/NoteSyncService.ts)
