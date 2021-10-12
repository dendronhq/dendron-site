---
id: 84df871b-9442-42fd-b4c3-0024e35b5f3c
title: Telemetry
desc: ''
updated: 1634011275013
created: 1619460500071
---

## Overview

The term **telemetry** refers to the collection of certain usage data to help _improve the quality of a piece of software_. Dendron uses telemetry primarily for collecting usage data.

This page describes the overall telemetry approach for Dendron, what kind of data is collected and how to opt-out of data collection.

## Why does Dendron collect metrics?

Telemetry helps us better understand _how many users_ are using our products and _how often_ they are using our products. Unlike many telemetry services, our telemetry implementation is intentionally **limited in scope**.

We use telemetry to answer the following questions: 
  - how many people are actively using Dendron?
  - how performant is Dendron over time and how do new changes impact performance?
  - what features are most useful for users?
  - what exceptions and errors are users encountering?

## What is not collected

Dendron will **never** collect data inside your notes. We believe that your personal knowledge is for your eyes alone. 

## What is collected

The below is a collection of common fields that are collected

| Field         | Attributes | Description                                                              |
| ------------: | :--------: | ------------------------------------------------------------------------ |
| `app`         | _string_   | Currently installed version of the product (e.g. `1.0.0-rc0`)            |
| `ideVersion`  | _string_   | Currently installed version of the IDE (e.g. `1.0.0-rc0`)                |
| `userAgent`   | _string_   | The specific IDE in question(e.g. `VSCodium`)                            |
| `arch`        | _string_   | Client's operating system architecture (e.g. `amd64`).                   |
| `os`          | _string_   | Client's operating system (e.g. `darwin`).                               |
| `nodeVersion` | _string_   | Client's node version (e.g. `v12.12.0`).                                 |
| `anonymousId` | _string_   | Random, non-identifiable signature nanoID (e.g. `JC6NXxDa0lDFD1Mu7U2Ga`) |
| `timestamp`   | _string_   | When the request was made                                                |
| `appVersion`  | _string_   | Version of currently installed Dendron plugin                            |  
| `cliVersion`  | _string_   | Version of currently installed `dendron-cli`                             |  

## When is data collected?

Data is collected in scenarios that are described below. 

### Startup 

When Dendron initializes, we collect data about on initialization time. This helps us measure the performance impact of changes that run before startup as well as improvements to our indexing performance over time. 

| Field       | Attributes | Description                                                         |
| ----------: | :--------: | ------------------------------------------------------------------- |
| `duration`  | _number_   | Number of seconds for startup                                       |
| `numNotes`  | _number_   | Number of notes across all vaults (rounded to the nearest 10 notes) |
| `numVaults` | _number_   | Number of vaults in workspace                                       |
| `noCaching` | _boolean_  | Check whether caching is disabled                                   |


### Tutorial Progression

When Dendron starts for the first time, it launches users into a tutorial workflow. We track how far along the tutorial you get using the `Tutorial_{num}_Show` event. This helps us figure out how effective our intro documentation is.

### User Survey
When the tutorial workflow is launched for the first time, or a user hasn't been active within 7 days of initial install (has not initalized workspace) we ask users if they want to answer some survey questions. We use the results to customize the onboarding experience and help users get started. We track if the user accepted the prompt, and what answer they gave for the survey. For each survey question, the following fields are collected.

| Field             | Attributes | Description                   |
| ----------------: | :--------: | ----------------------------- |
| `results` | _string[]_   | List of selected survey answers |
| `other`        | _other_   | User submitted answer when they selected _other_ |

### Installation/Upgrade/Uninstall
When Dendron is first installed or upgraded, we collect information about both previous and current versions. This helps us plan deprecation policies. 


| Field             | Attributes | Description                   |
| ----------------: | :--------: | ----------------------------- |
| `previousVersion` | _string_   | Previous version of Dendron   |
| `duration`        | _number_   | Number of seconds for startup |

### Lookup

When lookup is performed, Dendron collects profiling information for different phases of lookup. This helps us measure the performance impact of optimizations and features we add to lookup.

Events
- Lookup Show: when lookup is presented
- Lookup Update: when lookup items are updated
- Lookup Accept: when a result from lookup is accepted


| Field           | Attributes | Description                                                                        |
| --------------: | :--------: | ---------------------------------------------------------------------------------- |
| `flavor`        | _string_   | What kind of lookup ("schema" or "note")                                           |
| `error`         | _boolean_  | Did an error happen during this phase?                                             |
| `source`        | _string_   | What initiated the lookup? ("onValueChange", "updatePickerBehavior:journal", etc ) |
| `createNewNote` | _boolean_  | Was a new note created during this phase?                                          |

### Commands

We collect an invocation metric when a [[commands|dendron.topic.commands]] is invoked. This is to measure command latency as well as detect errors in existing and new commands


| Field      | Attributes | Description                                  |
| ---------: | :--------: | -------------------------------------------- |
| `error`    | _boolean_  | Did an error happen during this phase?       |
| `duration` | _number_   | How long did it take to execute this command |

### Errors

Whenever a crash happens or an unexpected error, we collect information surrounding the error to help us diagnose the problem and fix it. For more information, see [[Error Reporting|dendron.dev.errors.reporting]].

| Field     | Attributes | Description                                                                                                   |
| --------: | :--------: | ------------------------------------------------------------------------------------------------------------- |
| `ctx`     | _number_   | What happened right before the error occurred?                                                                |
| `message` | _string_   | The error message itself                                                                                      |
| `payload` | _string_   | Payload with diagnostics information such as exception call stacks, exception severity, and HTTP error codes. |

### Other

These are groupings of other metrics we collect. We collect them to gather performance impact and improvements across various features.

Events
- TreeView Ready: measures when the web ui based [[TreeView|dendron.ref.web-ui#treeview]] is finished loading

| Field      | Attributes | Description                                           |
| ---------: | :--------: | ----------------------------------------------------- |
| `duration` | _number_   | How long it takes for the tree view to be initialized |

### Telemetry Toggle
When telemetry is disabled or enabled, we collect information about the event to let us get an estimate of the number of untracked clients

|          Field | Attributes | Description                                                                            |
| -------------: | :--------: | :------------------------------------------------------------------------------------- |
|      `reason` |  _enum_| Why telemetry was disabled. See values [here](https://github.com/dendronhq/dendron/blob/master/packages/common-server/src/analytics.ts#L73:L73) |

## How to opt out of data collection

If you've disabled telemetry from the [Visual Studio Code Telemetry setting](https://code.visualstudio.com/docs/getstarted/telemetry), no further action is needed. You can set this option in your workspace settings, or user settings.

To disable telemetry in Dendron specifically, run the [[Disable Telemetry|dendron.topic.commands#disable-telemetry]] command.
You can also disable telemetry using the cli by using the [[disable_telemetry|dendron.dev.cli#disable_telemetry]] command. 

## Why not have opt-in telemetry?

The goal of telemetry is to make data driven decisions about features and use cases that can make the most difference to our users. 

One way we could collect data is to conduct surveys but traditionally, these had very low participation and are also biased towards users that are already active in our community. Having telemetry allows us to collect feedback from our larger user base and avoids this bias. 

Opt-in telemetry, at best, gives us a narrow and biased set of users. At this point, we are back to make decisions based on limited data. Opt-out telemetry that is limited in scope is the tradeoff we made in terms of preserving user privacy while still gathering meaningful data that can help improve the product. 
