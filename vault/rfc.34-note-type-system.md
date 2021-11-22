---
id: E8ZUvTzJ7cVOyZtqHiIKX
title: 34 Note Type System
desc: ''
updated: 1633937186309
created: 1633508300146
---

## Goals

To introduce an extensible note typing system that enables specialized and configurable note behavior.

### Detailed Goals

- To provide more custom functionality to notes in Dendron
- To integrate the concept of types with the existing schema paradigm
- Extensibility - it should be possible to add new note types with relatively low friction. Varying levels of friction, with the top level being the level for MVP (minimal viable product)
    1. Devs can define and add a new note type without altering core engine code
    2. Devs can define and add a new note type without altering the Dendron extension (via supplementary extensions)
    3. Users can define and add a new note type locally within Dendron itself (no touching of .vsix's necessary)

    To which extent (1-3) we want for authoring and implementing note types is an open question.
- To simplify bespoke special note logic that currently exists in Dendron code

### Non Goals
- It may not be a requirement to have 100% compatibility with schemas as they exist today - that is, if we need to adjust how schemas work then we should do so when sensible.

## Context

Having a type system for notes would unlock a lot of functionality that currently is unavailable.

### Existing and Proposed Special Note Behavior

Over time, both our end users and as internal users at the Dendron team have come up with various types of special notes where certain nuanced behavior is desired. Some implemented and proposed examples include:

#### Implemented Behaviors
- **Daily Journal and Scratch Notes**: These notes have special behavior around naming and have some special configurations around their behavior.
- **Index Notes**: See [[rfc.18-add-note-indexes]]. This is an implemented feature.

#### Proposed Behaviors
- **To-Do Notes**: See https://github.com/dendronhq/dendron/discussions/1358. Currently in proposal stage.
- **Flashcard Notes**: For example for Spaced Repetition. See https://wiki.dendron.so/notes/X2Zn2H89eBZrsj7Of8LLm.html
- **Images as Notes**: See https://github.com/dendronhq/dendron/issues/1450

## Proposal

### Concepts

Some functionality described here with Types can also be achieved with Dendron's Schema system. The main conceptual difference is that schemas apply behavior **based on a note's hierarchy position**, whereas a type system would apply behavior **based on a frontmatter designation on a note level**. For types to really be powerful, they must work within the concept of schemas. It should be possible to apply a type to a note in the same manner that templates can be applied through a schema definition, i.e. _for all notes falling within this hierarchy, designate all of their types to be `foo`_.

To Recap:
- A **Schema** applies behavior to a note or notes based on their position within a hierarchy.
- A **Type** applies behavior to a single note. A note's type is designated by a field in its frontmatter.

### Schema and Type Relationship

Instead of having schema templates specify a template, we have 'schema templates' specify a type. The only semantic difference is that when the note is generated, the template will be applied **and** the type will be set in the frontmatter. This will unlock functionality that we can see later on.

Possible Syntax in *.schema.yml:

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
  type:
    id: rfc.type # Here, we can extend the type field to specify 
```

### Type Functionality

#### Apply Template to Note

This is the most straightforward example of Type functionality. This can be more flexible than the current schema templating functionality, as you can arbitrarily apply the note type to notes at various positions in the hierarchy without needing to modify schema definitions.

The further added benefit of having templates applied via types, is that we can have (non-strict) guarantees that a note with a particular type has a template applied. See [[Guarantees on Note Contents / Front matter Field Presence|dendron.rfc.999-note-type-system#guarantees-on-note-contents--front-matter-field-presence]] below.

#### Auto Generation of Content within a Note

A typed note can run arbitrary execution to update its contents whenever it is opened or whenever one of its children is updated.

The generated content does not need to be restricted to just be based off other notes within Dendron - the execution can be arbitrary, similar to our current hooks implementation. But with a type system, we can have hook execution be scoped to a particular type as opposed to being applied to the whole workspace.

#### Special Rendering of Note in Preview

We can alter the rendering behavior of a note based on its type, for both the preview and for published sites.

_An open question is how to properly implement custom rendering._

#### Special Rendering and Editing Experience of Note in Editor Pane

We can also have certain VS Code API hooks that get enabled when a particular note type is in focus in the editor pane. For example, we can toggle [Text Decorators](https://code.visualstudio.com/api/references/vscode-api#TextEditorDecorationType) that are specific to note types.

We can further extend this concept to allow type-specific behavior for VS Code's API in the following areas:
- [Text Editor](https://code.visualstudio.com/api/references/vscode-api#TextEditor)
- [Workspace APIs](https://code.visualstudio.com/api/references/vscode-api#workspace)
- Potentially More

#### Decoration of Note Name During Creation

A type could specify certain decorations to occur on the note name during creation. This covers the functionality that journal notes and scratch notes currently provide. With a customizable type system, users can have finer control on how their notes are named.

### Things you can do when a type system exists

#### Guarantees on Note Contents / Front matter Field Presence when Querying

Because all notes of a particular type can have a guarantee on a template being applied, we can parse the markdown for a particular section of content.

For example, let's assume you have a project type with an H2 section that contains 'latest status'. Say you want to get a summarized view of the latest status for all projects.

You can perform an action as follows:
1. Dendron Note Engine - give me all notes of type `project` under the hierarchy `2021.Q1.projects`
1. For each returned note, generate text that creates note syntax for a note reference for the status field
1. Render all those references in my current 'overview' note.

In fact, the `overview` note itself can be its own type - it can define behavior that whenever its children are modified, then it can update its contents to reflect the latest status.

In addition to note contents, we can also have guarantees on frontmatter fields. For example, say each project note has a frontmatter flag for `status`, which can be of values `In Design`, `Implementing`, `Complete`. The overview note can also organize projects based on their status.

#### Refactor Operations based on Types

Currently, we have certain capabilities of refactoring your notes - moving hierarchies based on glob pattern matches, and various doctor commands can also be viewed as a form of refactoring.

Types can introduce refactoring operations specific to those types. Some possible ways to refactor:

- Modify Template (or more generally, modification of the type itself). Say you wanted to add an additional header to your template and apply it across all notes for that type
- Apply certain operations to all notes of a certain type.  For example, update status of all `project` notes under the 2020.Q4 hierarchy as `late`. We can expose functionality that allows types to register additional commands.

#### Miscellaneous

- We can have code warnings when a typed note doesn't conform to its definition.

#### Other Possibilities

As the scope of Dendron expands, so too can the API surface for note types. The API can be extended to meet the needs of our users and as the domain of Dendron changes and grows.

### Type Applicability

As with interfaces in object-oriented programming languages, a note can have multiple types. If there are multiple types applied that have conflicting functionality, we will have to develop rules governing which type gets precedence. A possible method is to respect the ordering of the types in the frontmatter of the note.

## Examples

In this section, let's examine a few concrete examples of how having a note-type system can be beneficial:

### A Project Type

Possible Functionality Added with a Type System:
- Project Template
- Status Section, which can be extracted via provideContent into a single overview page
- Guarantees on frontmatter flags for status (like 'in spec', 'implementing', 'done') - these can be integrated in the note template using [Frontmatter variable substitution](https://wiki.dendron.so/notes/ba97866b-889f-4ac6-86e7-bb2d97f6e376.html#frontmatter-variable-substitution) to create a glanceable status section at the top of the note. 

### An Index Note Type

See [[rfc.18-add-note-indexes]]

Index notes could utilize [[auto generation of content within a note|dendron.rfc.999-note-type-system#auto-generation-of-content-within-a-note]] to automatically update its index- we can apply an index note type to a note in a non-leaf node and have it automatically update to reflect the state of its children.

### A To-Do Note Type

See https://github.com/dendronhq/dendron/discussions/1358

To-Do notes could take advantage of [[Special Rendering and Editing Experience of Note in Editor Pane|dendron.rfc.999-note-type-system#special-rendering-and-editing-experience-of-note-in-editor-pane]]. With To-Do notes, we can have certain embellishing text decorators that would perform transformations in the editor, such as converting markdown checkboxes into unicode (- [x] becomes ✅). However, it may not be desireable to have such embellishments be present on all notes, so with a type system we could restrict it to occur only when to-do notes are being edited.

### A FlashCard Type

See https://wiki.dendron.so/notes/X2Zn2H89eBZrsj7Of8LLm.html

A flash card system could be implemented with a typed note system:
- Simple template with front / back sections
- Additional frontmatter metadata can store information like when was the last time the card was seen, was it answered correctly / incorrectly last time.
- An Engine API allows one to query a hierarchy for note types. A supplemental flash card Dendron extension could utilize this API to get notes that are flash cards, and then it can update the frontmatter metadata as the cards get reviewed/retrieved by the user. This extension can register additional commands for working with flash cards.
- We can have a special rendering behavior in the preview to create a flash card experience, or have the extension register a different UI experience for this.

### An Image Note Type

See https://github.com/dendronhq/dendron/issues/1450

In that issue, user wants the following functionality
- Images to basically work as notes
    - have a hierarchy
    - be refactorable
    - be taggable

We can have an 'image' note type that basically wraps an image inside assets (note is a barebones .md file with a simple `![](\assets\my_image.png)`). We can then take advantage of [[Special Rendering |dendron.rfc.999-note-type-system#special-rendering-of-note-in-preview]] to adjust how the image appears in the preview. In the frontmatter of this type, we can have defined properties such as max-width, max-height, etc. that can allow users to systematically control how their images render in the preview.

## Tradeoffs

- While adding a type system can make our current bespoke note logic more systematic and extensible, it will certianly take some effort to do the initial refactoring work.
- Having _too_ much programmatic logic can lead to note behavior that may be confusing to users - it may take us farther from a what-you-see-is-what-you-get model. It may be hard to diagnose what's going wrong if there's a bug in the implementation of a typed note.

## Open Questions

- In the type API, how much of the workspace should a note be aware of? For example, while it may make sense for a note to be notified when its children are updated, should it also be aware when its siblings are updated? What about its parents? On any note update in the workspace?
- To which extent (1-3) we want for authoring and implementing note types is an open question. See [[Detailed Goals|dendron.rfc.999-note-type-system#detailed-goals]]
- To what extent can a typed note affect the rendering behavior of preview? That API surface needs further definition.
- What if a user creates a schema that applies a type to already existing notes? To align with existing behavior, we should probably only apply templates to newly created notes.
- UI around types; that will be left to another RFC.
- Type namespacing - i.e. what if two note types with the same name are registered?

## Discussion

https://github.com/dendronhq/dendron/discussions/1494

---

# Development Design

## Things a Note Type can define

- a template
- frontmatter metadata
- TBD

```typescript
interface NoteType {

    // Set a template for the note. The headers are accessible as fields - in a way we are defining the 'type' via the template.
    getTemplate(): Note;

    getFrontmatterFields(): string[];

    // Example Use Cases: extract status from project note
    // provideContent(someKey: string): Markdown;

    // Things you can do:
    // apply template to current note
    // create children notes - todo: how to detect infinite loop? Don't want to create a million notes
    // can we somehow let the user affect the title here? i.e. the behavior of daily journal notes and scratch notes.
    onCreate(siblings: Iterator<Note>, children: Iterator<Note>);

    // Things you can do:
    //
    onUpdate(siblings: Iterator<Note>, children: Iterator<Note>);

}
```

### What the engine can do with a Typed Note

```typescript
    const template = my_note.getTemplate();

```

## Open Questions

- Should a note be aware of its parent note(s)? Leaning towards no
- Should a note be aware of its siblings? Probably
- How does someone (an end user) actually implement a type?
- What if a user creates a schema that applies to pre-existing notes? As aligned with existing behavior, we will only apply templates to newly created notes.

## Extensibility

Idea is that note types can be extensible, with the Dendron Engine or core dendron code being agnostic to the functionality of specific note types. As people come up with additional note types for the functionality they want to achieve, they can add them to their workspace by installing complementary note-type packaged extensions (for example dendron.flash-cards, or dendron.productivity, etc.). Perhaps taking it a step further, a user can create a type definition within Dendron itself, without the need to publish code (how this would work exactly is unclear, perhaps too ambitious for now).

## Related Reading

- [Schema Next Steps · Discussion #1418 · dendronhq/dendron](https://github.com/dendronhq/dendron/discussions/1418)
- [[Schema Simplification Inline Children|scratch.2021.09.15.193745.schema-simplification-inline-children]]
