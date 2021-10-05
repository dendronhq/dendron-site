---
id: iplO7IwCeT6qN6DxgTmP5
title: Commands
desc: ''
updated: 1630425872219
created: 1630020205246
---

## Summary

VSCode command execution

## Base Command Lifecycle

### Simplified

This is a simplified sequence diagram of the `BaseCommand` lifecycle.
Note that the _optional_ flow between `run()` and `enrichInputs()` (marked with a dotted square with _opt_) is actually something that required to be implemented when you extend `BaseCommand` to make a new command. If the enrichment stage is not necessary, just make it an identity function (return input without doing anything).

```mermaid
sequenceDiagram

  participant U as user
  participant RUN as run()
  participant GI as gatherInputs()
  participant EI as enrichInputs()
  participant EX as execute()

  U ->> RUN: invoke command
  RUN ->> GI: Invoke gatherInputs()
  GI ->> GI: prompt user, request stuff to engine / vscode, etc.
  GI ->> RUN: pass gathered info to command
  opt
    RUN ->> EI: invoke enrichInputs()
    EI ->> EI: enrich (could be identity)
    EI ->> RUN: pass enriched input to command
  end
  RUN ->> EX: invoke execute()
  EX ->> EX: do stuff
  EX ->> RUN: return executed result

  RUN ->> U: show result
```

### Detailed

This is a more detailed version of the above diagram. It includes more actors and flows that branch out of each step.

```mermaid
sequenceDiagram

  participant U as user
  participant VC as VSCode
  participant RUN as run()
  participant SC as sanityCheck()
  participant GI as gatherInputs()
  participant EI as enrichInputs()
  participant EX as execute()
  participant SR as showResponse()

  U ->> RUN: invoke command
  rect rgb(100, 100, 100)
    Note over U, RUN: Check basic stuff before proceeding (e.g. note needs to be open, etc.)
    RUN ->> SC: invoke sanityCheck()
    alt insane :/
      SC ->> VC: window.showErrorMessage
      VC ->> U: display error meesage
    else sane :D
      SC ->> RUN: proceed
    end
  end

  rect rgb(100, 100, 100)
    Note over U, RUN: Ask user for input with things like quick inputs or quick picks if necessary
    RUN ->> GI: Invoke gatherInputs()
    alt need user input
      loop until sufficient input
        GI ->> VC: provide custom quickInput, quickPick, etc.
        VC ->> U: prompt user for input
        U ->> VC: provide input
        VC ->> GI: pass input to extension
      end
    else needs info from VSCode
      GI ->> VC: ask for info
      VC ->> GI: give info
    end
    GI ->> RUN: pass gathered info to command
    alt insufficient input from user
      RUN ->> U: Stop sequence
    else sufficient input from user
      opt
        RUN ->> EI: invoke enrichInputs()
        EI ->> RUN: pass enriched input to command
      end
    end
  end

  rect rgb(100, 100, 100)
    Note over U, RUN: Execute main logic for command
    RUN ->> EX: invoke execute()
    loop until done
      par do VSCode stuff
        opt
          EX ->> VC: ask for more stuff
          VC ->> EX: provide more stuff
        end
      and ask user for more stuff
        opt
          EX ->> VC: ask for more stuff
          VC ->> U: prompt user for more stuff
          U ->> VC: provide more stuff
          VC ->> EX: pass stuff
        end
      and do stuff
        EX ->> EX: do stuff
      end
    end
    EX ->> RUN: return executed result
  end

  rect rgb(100, 100, 100)
    Note over U, RUN: Wrap up and respond to user
    RUN ->> SR: pass info to be prepared for user
    SR ->> VC: prepare and return response
    VC ->> U: display response to user
  end
```


### Exceptions

When a command throws an exception that is not caught, it is caught by the parent. The parent will log the exception and show a message to the user. The error prompt will be what is in `error.message`.


## File Watchers
- [[Summary|pkg.plugin-core.internal.workspace-watcher#summary]]

### File Changes

File changes are watched by the following watchers:
	- [VaultWatcher](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/fileWatcher.ts#L65:L65).
	- [WorkspaceWatcher](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/WorkspaceWatcher.ts#L61:L61)
	- [WindowWatcher](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/windowWatcher.ts#L31:L31)

Hooks into `onDidChange`, `onDidCreate` and `onDidDelete` should be added here.

### WorkspaceWatcher

Modify files before saving them

Related:
- [[Workspace Watcher Internal|pkg.plugin-core.internal.workspace-watcher]]

#### onDidChangeTextDocument
- triggerUpdateDecorations


