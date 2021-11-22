---
id: 5mfPAJFfNFrD16RbGOs9h
title: 'RFC 23: Consolidate Configurations'
desc: ''
updated: 1630671654596
created: 1630472367230
---

## Goals
- Organize and consolidate Dendron configurations into one place.
- Define sensible structure of configuration and create logical namespaces.
- Provide an easy way to view and edit configurations.
- Migrate old configuration to newly proposed structure.
- Update all relevant documentations for configuration.

## Context
- Dendron has amassed a lot of new features recently, and it is becoming harder to keep track of configurable behaviors of these features.
- This complicates both the end user's experience and the process of introducing new configurations and modifying existing configurations.

## Proposal
- Consolidate configurations divided in `dendron.yml` and `dendron.code-workspace` so that it only exists in one place.
- Organize the structure of these configurations so that they are logically grouped.
- Set a guideline for contributing new configurable behavior to Dendron so that the implementation and user experience is consistent in the future.

## Execution plans
- This shall be done in multiple phases:

### Phase I
- Introduce new configuration structure while keeping backwards compatibility
  - In this phase, the existing configuration shall remain untouched, while a newly proposed structure is being implemented.
  - Configurations that are planned to be deprecated will be notified during this phase.
  - Configurations that are planned to be mapped to the new structure will be notified during this phase.

### Phase II
- Migrate to the new configuration.
  - Old configurations will be automatically migrated to the new structure.
  - All relevant documentations will be updated and announced.

## Details

### Structure
1. Top level consists of only the groupings. It should not have single configurations.
1. Top level is grouped by _areas certain features affect_.
    - rationale:
      1. Top level group should divide settings as roughly as possible in order to keep the top level namespace simple
      1. [[This also makes it easily navigatable|dendron.rfc.23-config-consolidation#^sULM0sgtghNt]]
      - Alternative to this is grouping _features that affect certain areas_.
        - This makes the top level grouping very crowded and hard to navigate
        - Some features do not affect multiple groups, leaving a lot of singles on the top level.
1. Each configuration key should affect one behavior ^D9T8BEFdId1t
    - rationale:
      1. Decoupling of configuration
      1. Clear cut expectation
1. If a setting affects multiple top level groups, they should be in each group rather than that setting being an object and having multiple keys to different groups.
    - rationale:
      1. We are grouping by _areas certain features affect_.
      1. Turning _certain features_ into an object and giving them the _areas_ as key is going against the initial grouping decision.
      1. This also forces us to pull out features that affect more than one area out of their namespaces, separating them from the group, adding complexity to the organization of the configuration.
    - example:
      - prefer:
      ```json
        publishing: {
          ...
          mermaid: true
          ...
        }

        workspace: {
          ...
          mermaid: true
          ...
        }
      ```
      - avoid:
      ```json
          mermaid: {
            publishing: true,
            workspace: true,
          }
      ```
1. Allow duplicates as long as they are in different groups. prefer this over pulling keys out of their namespaces and giving them the ability to affect multiple behavior
    - rationale:
      1. [[Each configuration key should affect one behavior|dendron.rfc.23-config-consolidation#^D9T8BEFdId1t]]
      1. Duplication is better than confusion
      1. [[If we want to offer the ability to affect multiple behavior, this should be done agnostic to how the configuration is structured|dendron.rfc.23-config-consolidation#^qoJ9AQAmc7It]]
    - example:
      - prefer
      ```json
        publishing: {
          mermaid: true
        }

        workspace: {
          mermaid: true
        }
      ```
      - avoid
      ```json
        // enable mermaid diagram rendering for both workspace and publishing
        mermaid: true
      ```

### Presentation
1. Selecting the top level group exposes all possible settings under this group ^sULM0sgtghNt
    - Individual configurations should be reachable with the smallest clicks possible
    - Also promotes avoiding implementation of features that does too much.
1. If there are duplicates in different groups, this should properly signalled to the user
    - by documentation, or
    - by way of presenting them a clearly visible message that this behavior is also configurable in another area.
    - If a config that affects behavior in all possible groups is necessary, this should be done in a way that is agnostic to how the namespace is structure ^qoJ9AQAmc7It
      - e.g.) as a convenience feature that is exposed to the end user
1. The configuration UI is a place where a user both _edits_ and _views_ configurations.
    - It is important that the experience is smooth for both scenarios
    - editing:
      - Possible choices for configuration needs to be apparent at the time of editing
      - Editing a configuration that can affect multiple areas should be intuitive
        - Idea: Filtering of configurations
          - e.g. Typing `mermaid` in the search bar displays `config.publishing.mermaid` and `config.workspace.mermaid`
    - viewing:
      - When a user uses the configuration UI with the intent to view a certain group, every key in that group should be presented so that they could be identifiable at a glance.
        - Even if the groups are deeply nested, the UI should present them in a flat manner unless it generates clutter
          - Configurations should not be structured to be _too deep_ in the first place in order to avoid this situation, and also promote a simpler/leaner implementation.
1. The configuration should be presented in a way that is easily understandable.
    - Configuration keys are defined to be a string without any spaces. The naming is selected to be as clear as possible, but some could use a bit more descriptive labeling.
    - While the documentation should be sufficient when it comes to fully explaining what every configuration does, it would be better if the way we present the configurations can give a good enough explanation to what it does.
    - While keeping it backwards compatible, we can add descriptions and labels that are plain English sentences to enable this in the configuration UI.
    - With the introduction of JSON schema validation, we can also present configurations in a more descriptive way. (i.e. Have the validator display descriptions.)

### Cleanup

#### 1. Define configurable behaviors in the most common package.
- Type / enum definitions of configurable behaviors should be defined where the configuration is defined, which is `common-all`
- This is to reduce duplicate type / enum definitions at the place it is actually used (e.g. plugin-core).

##### example
- `LookupSelectionType` should be defined in `common-all` and imported to `plugin-core`.
- As is, this is defined in both `common-all` and `plugin-core` as a duplicate.

prefer:
```js
  // in common-all
  export enum LookupSelectionTypeEnum {
    "selectionExtract" = "selectionExtract",
    "selection2link" = "selection2link",
    "none" = "none"
  }
```

```js
  // in plugin-core
  import { LookupSelectionTypeEnum } from "@dendronhq/common-all"

  // this is equivalent to "selectionExtract" | "selection2link" | "none"
  type LookupSelectionType = keyof typeof LookupSelectionTypeEnum
```

avoid:
```js
  // in common-all
  enum LookupSelectionTypeEnum {
    "selectionExtract" = "SelectionExtract",
    "selection2link" = "selection2link",
    "none" = "none"
  } 
```

```js
  // in plugin-core

  // duplicate definitions
  export type LookupSelectionType =
    "selection2link" | "selectionExtract" | "none";

  export enum LookupSelectionTypeEnum {
    "selection2link" = "selection2link",
    "selectionExtract" = "selectionExtract",
    "none" = "none"
  }

```

#### 2. Constant-initializing string literals for enums
- Prefer initializing enums of possible choices to constant-initialized string literals over letting it implicitly initialize to a numeric enum and auto-increment.
- They will be used in `dendron.yml` and other places where users can pass it in as an argument (e.g. keybindings.json).
- Passing in `someConfig: "someChoice"` is more intuitive than `someConfig: 0`

##### Example

prefer:
```js
  export enum someModeForAMagicCommand {
    foo = "foo",
    bar = "bar",
    baz = "baz",
  }
```

```json
  // in keybindings.json
  {
    "command": "dendron.magicCommand",
    "key": "cmd+m",
    "args": {
      "someModeForAMagicCommand": "foo"
    }
  }
```

avoid:
```js
  export enum someModeForAMagicCommand {
    foo, // this will initialize to 0 and autoincrement
    bar,
    baz,
  }
```

```json
  // in keybindings.json
  {
    "command": "dendron.magicCommand",
    "key": "cmd+m",
    "args": {
      "someModeForAMagicCommand": 0
    }
  }
```
