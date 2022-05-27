---
id: 84df871b-9442-42fd-b4c3-0024e35b5f3c
title: Telemetry
desc: ""
updated: 1653014473746
created: 1619460500071
nav_order: 6.1
---

## Overview

The term **telemetry** refers to the collection of certain usage data to help _improve the quality of a piece of software_. Dendron uses telemetry primarily for collecting usage data.

This page describes the overall telemetry approach for Dendron, what kind of data is collected and how to opt-out of data collection.

## Why does Dendron collect metrics?

Telemetry helps us better understand _how many users_ are using our products and _how often_ they are using our products.

We use telemetry to answer the following questions:

- how many people are actively using Dendron?
- how performant is Dendron over time and how do new changes impact performance?
- what features are most useful for users?
- what exceptions and errors are users encountering?

## What is not collected

Dendron will **never** collect data inside your notes. We believe that your personal knowledge is for your eyes alone.

## What is collected
- [Events Collected](https://airtable.com/appj5CMxAVa0OatfV/tblIPbbHICd8JTogN/viwYEwkGiZSLo1XC9?blocks=hide)
- [Event Properties Collected](https://airtable.com/appj5CMxAVa0OatfV/tblYOJisys1O3i56Z/viwi3YF2G3i6F2isg?blocks=hide)

- NOTE: we are currently in the process of migrating events from this page to the airtable. this is why you might see some events on this page that are not on the airtable

## When is data collected?

Data is collected in scenarios that are described below.

### Startup

When Dendron initializes, we collect data about on initialization time. This helps us measure the performance impact of changes that run before startup as well as improvements to our indexing performance over time.  In addition to the above field, we track the result of configuration migrations. This helps us make sure deprecating old configurations and introducing new configurations work seamlessly.

#### CLI_Client_Config_Mismatch

When a configuration or client version does not meet the minimum compatibility requirement, we track the mismatch. This helps us make sure migrations are ran successfully and understand ways to prevent users from running into compatibility issues.

|                    Field |     Attributes     | Description                                              |
| -----------------------: | :----------------: | -------------------------------------------------------- |
|                 `reason` | "client"\|"config" | Reason for mismatch                                      |
|          `clientVersion` |      _string_      | Client version when the mismatch happened                |
|          `configVersion` |      _string_      | Config version when the mismatch happened                |
| `minCompatClientVersion` |      _string_      | Minimum compatible client version when mismatch happened |
| `minCompatConfigVersion` |      _string_      | Minimum compatible config version when mismatch happened |

#### Duplicate configuration key

During activation, if there is a duplicate key mapping in `dendron.yml`, we prompt users that they should remove the duplicate mappings. When doing so, we track that we have prompted, and also track if the user has accepted or rejected the prompt. This helps us understand how users troubleshoot configuration errors and let us improve the way we present instructions.

#### Missing configuration

During upgrade, if there is a missing configuration key in `dendron.yml`, we prompt users if they want to fill the missing configuration with a default value. When doing so, we track that we have prompted, and also track if the user has accepted or rejected the prompt. This helps us identify pain points with faulty configurations and understand ways to improve the troubleshooting process.

#### Incompatible extensions

When we detect that a user has extensions that incompatible with Dendron's capabilities, we warn the user on startup that they may cause problems. We track which extensions were warned to the user, and also whether they have been redirected to an instruction on how to resolve the conflict. This helps us make Dendron more compatible with existing third party extensions in the marketplace.

#### Keybinding conflicts

When we detect that a user has an extension that has keybindings that are known to conflict with Dendron's default keybindings, we warn the users and give guidance on how to resolve them. When Dendron is first installed, a user will be prompted with a warning message if keybinding conflicts are detected. We track if the user accepted the message and proceeded with conflict resolution. After initial installation, this feature is available as a doctor command [[fixKeybindingConflicts|dendron://dendron.dendron-site/dendron.topic.doctor#fixkeybindingconflicts]]. In both initial install and every doctor command execution, we track if keybinding conflicts were detected.

### Tutorial Progression

When Dendron starts for the first time, it launches users into a tutorial workflow. We track how far along the tutorial you get using the `Tutorial_{num}_Show` event. This helps us figure out how effective our intro documentation is.

### User Survey

We ask users if they want to answer survey questions that would help use improve Dendron. These surveys are prompted when the user first initializes the tutorial, or has been inactive for two weeks after actively using Dendron on their first week, or has never initialized a workspace after install. To determine inactivity, we track specific points of time when a notable event happens.

We use the results to customize the onboarding experience and help users get started. We track if the user accepted the prompt, and what answer they gave for the survey. For each survey question, the following fields are collected.

|                     Field | Attributes | Description                                      |
| ------------------------: | :--------: | ------------------------------------------------ |
|                 `results` | _string[]_ | List of selected survey answers                  |
|                   `other` |  _other_   | User submitted answer when they selected _other_ |
|              firstInstall |   number   | timestamp of first install event                 |
|         firstWsInitialize |   number   | timestamp of first workspace initialization      |
|     lapsedUserMsgSendTime |   number   | timestamp of last lapsed user message            |
|   inactiveUserMsgSendTime |   number   | timestamp of last inactive user message          |
| dendronWorkspaceActivated |   number   | timestamp of last workspace activation           |
|           firstLookupTime |   number   | timestamp of first lookup accept                 |
|            lastLookupTime |   number   | timestamp of last lookup accept                  |

### Installation/Upgrade/Uninstall

When Dendron is first installed or upgraded, we collect information about both previous and current versions. This helps us plan deprecation policies.

|             Field | Attributes | Description                   |
| ----------------: | :--------: | ----------------------------- |
| `previousVersion` |  _string_  | Previous version of Dendron   |
|        `duration` |  _number_  | Number of seconds for startup |

### Lookup

When lookup is performed, Dendron collects profiling information for different phases of lookup. This helps us measure the performance impact of optimizations and features we add to lookup.

Events

- Lookup Show: when lookup is presented
- Lookup Update: when lookup items are updated
- Lookup Accept: when a result from lookup is accepted

|           Field | Attributes | Description                                                                        |
| --------------: | :--------: | ---------------------------------------------------------------------------------- |
|        `flavor` |  _string_  | What kind of lookup ("schema" or "note")                                           |
|         `error` | _boolean_  | Did an error happen during this phase?                                             |
|        `source` |  _string_  | What initiated the lookup? ("onValueChange", "updatePickerBehavior:journal", etc.) |
| `createNewNote` | _boolean_  | Was a new note created during this phase?                                          |

### Commands

We collect an invocation metric when a [[commands|dendron.ref.commands]] is invoked. This is to measure command latency as well as detect errors in existing and new commands

|      Field | Attributes | Description                                  |
| ---------: | :--------: | -------------------------------------------- |
|    `error` | _boolean_  | Did an error happen during this phase?       |
| `duration` |  _number_  | How long did it take to execute this command |

#### Lookup commands

For commands that utilize the core lookup module, we additionally collect the state of the lookup modifiers when the user accepts as well as on manual button triggers.

|     Field | Attributes | Description                                   |
| --------: | :--------: | --------------------------------------------- |
| `command` |  _string_  | What is the invoked command?                  |
|    `type` |  _string_  | What button was toggled?                      |
| `pressed` | _boolean_  | What is the state of the button after toggle? |

#### Copy Note Link

For the Copy Note Link command, we also collect some information to understand where it is used the most.

|        Field | Attributes | Description                                                         |
| -----------: | :--------: | ------------------------------------------------------------------- |
|       `type` |  _string_  | What type of file was this, a note or non-note?                     |
| `anchorType` |  _string_  | If an anchor was created, what type was it? Block, header, or line? |

#### Doctor

For the Doctor command, we also collect what doctor action was performed and at what scope.

|    Field | Attributes | Description                                                            |
| -------: | :--------: | ---------------------------------------------------------------------- |
| `action` |  _string_  | Name of the doctor action if one was performed, like "fixFrontMatter". |
| `scope`  |  _string_  | The scope of the action, either "workspace" or "file".                 |

#### Workspace Sync

To understand how users take advantage of our synchronization features, we also
collect the following data if the Workspace Sync command is used.

|               Field | Attributes | Description                                                               |
| ------------------: | :--------: | ------------------------------------------------------------------------- |
| `hasMultiVaultRepo` | _boolean_  | True if there was a repo that had multiple vaults in it, false otherwise. |

#### Copy To Clipboard

Copy To Clipboard is a command that could only be invoked by clicking on a Markdown Link in a VSCode Webview.
We use this as a simple way to simulate a copy button within a rendered markdown preview. We track the source of this command's invocation to better understand the user experience of markdown based webviews.

|               Field | Attributes | Description                                                               |
| ------------------: | :--------: | ------------------------------------------------------------------------- |
| `source` | _string_  | Name of the webview that this command was invoked. |

#### Show Note Graph

To understand how the users take advantage of our graph view feature, we also collect the following data if `Show Note Graph` command is used.

|               Field | Attributes | Description                                                               |
| ------------------: | :--------: | ------------------------------------------------------------------------- |
| `timeOpen` | _number_  | The duration for which Note Graph was used. |
| `message` | _string_  | Was the graph view used for navigation? |

### CLI commands

We collect an invocation metric when a [[CLI|dendron.ref.cli]] command is invoked. This is to measure command latency. We also collect command arguments that do not contain user-identifying information to analyze usage frequency of a particular command argument

|      Field | Attributes | Description                                                                     |
| ---------: | :--------: | ------------------------------------------------------------------------------- |
| `duration` |  _number_  | How long did it take to execute this command                                    |
|     `args` |  _object_  | What arguments were passed to the command (user-identifying properties omitted) |

#### CLI command arguments

This is an exhaustive list of CLI command arguments collected on invocation.

|  Command   |    Field | Attributes |                              Description                               |
| :--------: | -------: | :--------: | :--------------------------------------------------------------------: |
|    dev     |    `cmd` |  _string_  |       What dev command was used (e.g. `run_migration`, `build`)        |
|   doctor   | `action` |  _string_  |     What doctor action was used (e.g. `fixFrontmatter`, `h1ToH2`)      |
| importPod  |  `podId` |  _string_  |          What pod was used (e.g. `dendron.json`, `markdown`)           |
| exportPod  |  `podId` |  _string_  |          What pod was used (e.g. `dendron.json`, `markdown`)           |
| publishPod |  `podId` |  _string_  |          What pod was used (e.g. `dendron.json`, `markdown`)           |
|    note    |    `cmd` |  _string_  |          What note command was used (e.g. `lookup`, `delete`)          |
|    note    | `output` |  _string_  |   What output format was used (e.g. `json`, `md_gfm`, `md_dendron`)    |
|  publish   |    `cmd` |  _string_  |          What publish command was used (e.g. `init`, `build`)          |
|    seed    |    `cmd` |  _string_  |            What seed command was used (e.g. `init`, `add`)             |
|    seed    |     `id` |  _string_  |                         What seed id was used                          |
|    seed    |   `mode` |  _string_  | What seed mode was used (e.g. `create_workspace`, `convert_workspace`) |
|   vault    |    `cmd` |  _string_  |              What vault command was used (e.g. `create`)               |
| workspace  | `action` |  _string_  |      What workspace action was used (e.g. `init`, `push`, `pull`)      |

### Contextual UI

We collect an invocation metric when a [[commands|dendron.ref.commands]] is invoked through Contextual UI. This helps us to measure the visibility and effectiveness of Contextual UI.

### Errors

Whenever a crash happens or an unexpected error, we collect information surrounding the error to help us diagnose the problem and fix it. For more information, see [[Error Reporting|dev.process.errors.reporting]].

|     Field | Attributes | Description                                                                                                   |
| --------: | :--------: | ------------------------------------------------------------------------------------------------------------- |
|     `ctx` |  _number_  | What happened right before the error occurred?                                                                |
| `message` |  _string_  | The error message itself                                                                                      |
| `payload` |  _string_  | Payload with diagnostics information such as exception call stacks, exception severity, and HTTP error codes. |

### Other

These are groupings of other metrics we collect. We collect them to gather performance impact and improvements across various features.

Events

- TreeView Ready: measures when the web ui based [[TreeView|dendron._ref.web-ui#treeview]] is finished loading

|      Field | Attributes | Description                                           |
| ---------: | :--------: | ----------------------------------------------------- |
| `duration` |  _number_  | How long it takes for the tree view to be initialized |

### Telemetry Toggle

When telemetry is disabled or enabled, we collect information about the event to let us get an estimate of the number of untracked clients

|    Field | Attributes | Description                                                                                                                                     |
| -------: | :--------: | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `reason` |   _enum_   | Why telemetry was disabled. See values [here](https://github.com/dendronhq/dendron/blob/master/packages/common-server/src/analytics.ts#L73:L73) |

## How to opt out of data collection

To disable telemetry in Dendron specifically, run the [[Disable Telemetry|dendron.ref.commands#disable-telemetry]] command.
You can also disable telemetry using the cli by using the [[disable_telemetry|etc.cli#disable_telemetry]] command.

## Why not have opt-in telemetry?

The goal of telemetry is to make data driven decisions about features and use cases that can make the most difference to our users.

One way we could collect data is to conduct surveys but traditionally, these had very low participation and are also biased towards users that are already active in our community. Having telemetry allows us to collect feedback from our larger user base and avoids this bias.

Opt-in telemetry, at best, gives us a narrow and biased set of users. At this point, we are back to make decisions based on limited data. Opt-out telemetry that is limited in scope is the tradeoff we made in terms of preserving user privacy while still gathering meaningful data that can help improve the product.
