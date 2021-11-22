---
id: xSSUw9GWcnsF35y597Vof
title: 35 Easier Schemas
desc: ''
updated: 1634730923889
created: 1633613554664
---

## Goals

### Goals of this Spec

Working with schemas is difficult. It can take users many hours to debug why a template is not being applied to a note. The goal of this spec is to make it easier for users to create, apply, modify, and understand schemas.

## Context

### What's difficult about schemas

Some common user scenarios that pose usability problems:
1. I created a new note. I can't figure out why my schema template is not being applied.
1. Looking at a schema definition file, it's hard to view parent to child relationships, or view unintentional breakages in a lineage (perhaps due to spelling errors) while authoring them.
1. I see a "schema malformed" error message when I start Dendron, but I don't know where or even which .yaml file is causing it.
1. I can't apply a template to all descendants in a particular hierarchy.

### Schema Functionality and Syntax 

There are two primary functionalities that we get out of schemas and schema templates:
1. Getting suggestions for new child note names based off of their relative position in a hierarchy
1. Having templates auto-applied to a note based on the note fname **and** its relative position in a hierarchy

Here are some examples of common use cases of schemas:

For reference, and to highlight some of the difficulties around authoring schemas, here is the schema syntax for several common use cases for schemas:

#### Apply templates to all direct children of a note 'foo'

Syntax (for reference):

```yml
schemas:
- id: dendron
  parent: root
  children:
    - rfc
- id: rfc
  children: 
    - rfcInstance
- id: rfcInstance
  pattern: '*'
  template:
    id: templates.rfc
    type: note
```

#### Apply templates to descendants of a note 'foo' at a particular hierarchy

Syntax:

```yml
schemas:
  - id: user
    title: user
    parent: root
    children:
      - jonathan
  - id: jonathan
    children:
      - journal
  - id: journal
    title: journal
    desc: Jonathan's Daily Journal
    parent: jonathan
    children:
      - year
  - id: year
    title: year
    pattern: "[0-2][0-9][0-9][0-9]"
    children: 
      - month
  - id: month
    title: month
    pattern: "[0-9][0-9]"
    children:
      - day
  - id: day
    title: day
    pattern: "[0-9][0-9]"
    template:
      id: user.jonathan.templates.journal
      type: note
```

#### Create Schemas for Note Auto-Suggestions

Syntax:

```yml
version: 1
schemas:
# this will match "cli.*" notes
- id: cli 
  # human readable description of hierarchy
  desc: command line interface reference
  # add this to the domain of your schema hierarchy
  parent: root
  # when a schema is a namespace, it can have arbitrary children. equivalent to cli.* glob pattern
  namespace: true 
  children:
    - cmd
    - env
# will match cli.*.env
- id: env
  desc: cli specific env variables
# will match cli.*.cmd.*
- id: cmd
  desc: subcommands 
  namespace: true
```

> Author's Note: I find it confusing that `env` is specified as a child of `cli`, but in the hierarchy it appears as a grandchild - `cli.*.env`. In general, I'm unsure when to use `namespace:true` or not. Is there a way to make this more intuitive?

## Proposal

We can help users by 
1. Creating more intuitive ways for users to create schemas 
1. Improve ways to diagnose bugs with schemas
1. Expanding the schema syntax to make them easier to both write and read, while also allowing for schemas to apply to descendants and not just direct children.

## Alternative Ways to Author Schemas

Currently, the only way to author schemas is to manually create a *.schema.yml file by hand. However, a more natural user workflow is that they have first authored some notes and then wish to generate a schema based off their new note structure so that they can apply templates or name suggestions when creating more notes.

### New Command - `Apply Template to Hierarchy`

This command would allow users to apply a schema template to their current note hierarchy. 

Say a user has a note opened at `daily.journal.2021.01.01`.  The user wants to apply a template to this note and all other notes matching the note pattern `daily.journal.[0-2][0-9][0-9][0-9].[0-9][0-9].[0-9][0-9]`

Instead of having to try to manually create the schema.yml definition by hand, they run a command `Apply Template to Hierarchy`.

**UI Progression:**

1. Quick Input Box - Select Hierarchy Level to Apply Template. By default, we will start at one hierarchy up from the current note. In our example, the quick input box will show 

    `daily.journal.2021.01.*` 

    Furthermore, there will be a non-selectable quickpick (or some other UI control) that will display in real time the notes that match the current glob pattern. This provides instant feedback on whether their pattern is matching any existing notes or not and can help them with the pattern creation.

    The user can then adjust the pattern and hierarchy matching to the level that they want. In this case, they modify the quick input box to 

    `daily.journal.*.*.*`

    or perhaps alternatively,

    `daily.journal.[0-2][0-9][0-9][0-9].[0-9][0-9]`

    _Perhaps we can be smart and recognize a year-month-date pattern and auto-suggest daily.journal.[0-2][0-9][0-9][0-9].[0-9][0-9] from the start in this case, since the year-month-date or other date patterns are the most common example of pattern matching_

    They see in the drop down feedback that this matches several notes in their hierarchy so they can be confident this is working. They click confirm. This value will be used to set the schema definition.

    **Example**

    Given the follow notes in the workspace:

    ```
    daily
    └── journal
        ├── 2021
        │   ├── 01
        │   │   └── 01
        │   └── 05
        │       └── 01
        └── 2999
            └── 01
                └── 01│
    ```

    _matches_ `daily.journal.2021.01.01`:
    ![](https://org-dendron-public-assets.s3.amazonaws.com/images/rfc-35-template-1.png)
    
    _matches_ `daily.journal.2021.01.01` _and_ `daily.journal.2021.05.01`
    ![](https://org-dendron-public-assets.s3.amazonaws.com/images/rfc-35-template-2.png)

    _maybe we can auto-detect year-month-date pattern and provide a more precise glob pattern_
    ![](https://org-dendron-public-assets.s3.amazonaws.com/images/rfc-35-template-3.png)

    _user forgot the last set of _ `[0-9].[0-9].` _Warning showed to user, but they can continue if this is really the pattern they want._
    ![](https://org-dendron-public-assets.s3.amazonaws.com/images/rfc-35-template-4.png)

2. We ask the user to pick a name for this schema. By default, the value will be filled in to the last non-wildcard/regex hierarchy, so here it would be prefilled as `daily.journal`. The user can change the name in the input box.
3. We ask them if they would like to apply a template to this schema. We provide a lookup control to allow them to either specify no template, pick an existing note to create a template, or create a new note to be the template. 
4. Depending on whether or not a new template was specified
    1. If either no template was specified, or an existing template was specified, we will then auto-generate a schema.yml definition file for the user.  We will then open the schema.yml file in their editor.
    1. If a new template name is specified, we will create a new note for them. The new note will have some placeholder text along the lines of "You can enter your template content here". We will also open the schema.yml file that has been created, but the new template file should be the one that's in focus.
5. To confirm what we've done for the user, we'll show an information message box with the following message:
    > A schema definition has been created at `daily.journal.schema.yml`. All new notes you create matching the schema pattern will have the template applied.

    We can adjust the message based on whether they chose to use a template or not. A key part of the message is "all **new** notes" - we don't want users to be confused why a template was not applied to their pre-existing note, `daily.journal.2021.01.01`.

### New Command - `Create Schema From Existing Hierarchy`

A user has created a set of notes in a hierarchy and wants to re-use the pattern elsewhere in their vault. For example, let's say they've created some notes for python in a pattern they like and want this schema when authoring notes for other languages:

```
languages
└── python
    └── data
        ├── bool
        ├── integer
        └── string
```

They wish to extend this schema to other languages for future notes:

```
languages
└── python
    └── data
        ├── bool
        ├── integer
        └── string
└── java
    └── data
        ├── bool
        ├── integer
        └── string
└── c#
    └── data
        ├── bool
        ├── integer
        └── string
```

The user's desired schema for this pattern is:

```yml
version: 1
imports: []
schemas:
  - id: languages
    children:
      - data
    title: languages
    parent: root
    namespace: true
  - id: data
    children:
      - bool
      - integer
      - string
  - id: bool
  - id: integer
  - id: string
```

**UI Progression:**

_Assertion: If the user wants to create a schema for the purpose of having pattern suggestion benefits, then some part of the hierarchy needs to be a namespace for it to be useful._

1. User currently has `languages.python.data.bool` opened in the editor. They run the `Create Schema From Existing Hierarchy` command.
2. We bring up a quick pick for the purpose of figuring out where the user wants to specify the namespace. The desired glob pattern here is `languages.*.data.bool`.
    
    The options of the quickpick are the levels of the hierarchy, in this case it would be

    - languages 
    - python
    - data
    - bool

    The prompt would be

    > Select hierarchy level whose children will be added to the schema definition.

    _**Open Question**: Can we improve the wording for this quick pick?_

    User selects 'python'

    ![](https://org-dendron-public-assets.s3.amazonaws.com/images/rfc-35-schema-1.png)


3. We progress to another quickpick for the user to specify which parts of their hierarchy they would like to add to the schema. 

    Prompt:
    > Select components to include in the schema definition

    Here, the quick pick items would be everything under `languages.python`:

    - [x] `languages.python.data`
    - [x] `languages.python.data.bool`
    - [x] `languages.python.data.integer`
    - [x] `languages.python.data.string`

    By default, everything is selected.  If there's anything that the user does not want to include, they can uncheck it.  If a user unchecks a hierarchy node that isn't a leaf, we'll uncheck all children as well.  For example, say the user also has some notes under `languages.python.machine-learning` that they don't want to include:
    
    - [x] `languages.python.data`
    - [x] `languages.python.data.bool`
    - [x] `languages.python.data.integer`
    - [x] `languages.python.data.string`
    - [ ] `languages.python.machine-learning`
    - [ ] `languages.python.machine-learning.pandas`
    - [ ] `languages.python.machine-learning.scipy`
    
    Unchecking `languages.python.machine-learning` will also uncheck `languages.python.machine-learning.pandas` and `languages.python.machine-learning.scipy` as well.
    
    Furthermore, in the detail property of each quick pick line, we will provide some helpful text with the following:

    > will match patterns like `languages.foo.data.bool`

    After completing the selection, the user confirms to continue.

    ![](https://org-dendron-public-assets.s3.amazonaws.com/images/rfc-35-schema-2.png)

4. Final input box asks the user to enter a name for this schema. By default, `languages` will be in the input box. For this example, let's say user sticks with the default
5. User confirms and a file is created from the input from the previous step `languages.schema.yml`. The schema has the following contents and is auto-applied to the workspace:

```yml
version: 1
imports: []
schemas:
  - id: languages
    children:
      - data
    title: languages
    parent: root
    namespace: true
  - id: data
    children:
      - bool
      - integer
      - string
  - id: bool
  - id: integer
  - id: string
```

6. We provide an information message box that says 

    > `languages.schema.yml` has been created. If you would like to modify the schema, you can make edits to this file.

### Improve Diagnosability of Errors

A big user pain piont is that if something is wrong with a schema, it can be quite difficult to figure out why. The above commands should help with generating working schemas from the start, but in the case of when a user wants to modify and enhance their schemas, this remains a problem.

One way to improve the experience would be to reduce the turnaround time between modifying a schema and testing if it's working. There are several ways we can improve on this:
- Remove need to reload workspace after updating schema (this is already being tracked in our backlog)
- Improve the "schema malformed" error message - can we at the very least point to which schema file is causing the problem?

    ![](https://org-dendron-public-assets.s3.amazonaws.com/images/rfc-35-error-1.png)

- _(lower priority)_ Create a new command called 'Test Schema'. Running this while having `languages.schema.yml` would return back a summary with the notes in the workspace currently matching the schema(s). (This is similar to the feedback we get in lookup with the icons, but would be more direct)
- _(lower priority)_ When a note is created that has a schema template applied, show an information message informing the user which schema definition caused the application of the template. Often times, I find myself doing code lookup to figure out how a schema template is working (this isn't that difficult, but it would be faster if a user is aware of why a template is getting applied).

## Expanded Schema Definition Syntax

### Inline Schemas 

Allow inline schemas such as the following layout. This allows for child schemas to collapse, adds clarity to the relationship between parent and child nodes, and removes the need to come up with ids when patterns are used.

```yml
    - id: daily
      parent: root
      children:
        - pattern: journal
          children: 
            - pattern: "[0-2][0-9][0-9][0-9]"
              title: year
              children: 
                - pattern: "[0-1][0-9]"
                  title: month
                  children: 
                      - pattern: "[0-3][0-9]"
                        title: day
                        template:
                            id: templates.foo
                            type: note
```

Currently, the configuration in the example above would be implemented with the syntax below:

```yml
  - id: daily
    children: 
      - journal
  - id: journal
    pattern: journal
    children: 
      - year
  - id: year
    pattern: "[0-2][0-9][0-9][0-9]"
    children:
      - month
  - id: month
    pattern: "[0-1][0-9]"
    children: 
      - day
  - id: day
    pattern: "[0-3][0-9]"
    template:
      id: templates.foo
      type: note
```

Manually matching up the ID's in the `children` field is error prone - any typos cause the schema to no longer be applied.

### Support globstar ** to apply a schema to all descendants

Currently, there isn't a way to make a note match a schema at a level lower than a direct child. We should expand the schema syntax to allow for the globstar pattern (**). For example, suppose we have the following note hierarchy:

  ```
  parent_a
  └── child_a
      ├── grandchild_a1
      └── grandchild_a2
  └── child_b
      ├── grandchild_b1
      └── grandchild_b2
  ```

The user wants to apply a template to all descendants of `parent` - so all `child_*` and `grandchild_*`. 

Proposal: We expand the child pattern syntax to support globstar **:

```yml
schemas:
- id: parent_a
  parent: root
  children:
    - descendant
- id: descendant
  parent: parent_a
  pattern: '**/*'
  template:
    id: templates.foo
    type: note
```

This would apply the `templates.foo` template to `child_a`, `child_b`, `grandchild_a1`, `grandchild_a2`, `grandchild_b1`, `grandchild_b2` in the example above. The `parent` field must be present when a globstar is used in the pattern.

## Tradeoffs

These commands will generate new schema files on each invocation. This may lead to several usability problems:
- if a user repeatedly runs the generate schema command (for example, they take several iterations before they land on what they want), this can generate many schema files.  Furthermore, these schema files may interfere with each other, as the current Dendron behavior is that the last schema overrides others, but which schema is the 'last' one is not clear. This may lead to user confusion. Perhaps to mitigate this, we can have some notification if we detect multiple schemas being matched on the same note.
- Running these commands will always generate a new schema file - this may make it more difficult for a user to integrate their new schema into their existing schema(s). They may need to manually move segments out of their newly generated schema into their existing one, which may be an error prone process.

## Discussion
https://github.com/dendronhq/dendron/discussions/1499
