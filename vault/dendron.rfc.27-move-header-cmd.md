---
id: MalAg4S7TIJU4gYCn7ZFR
title: 27 Move Header Cmd
desc: ''
updated: 1631474835608
created: 1631474060570
---

## Goals

Support moving a header from one note to another

## Context

A common use case when refactoring documentation is to move sections from one place to another. Currently, there is no way of automatically doing this.
Manually moving the header means that links pointing to the older header in the old note will break.

## Proposal

Introduce `Dendron: Move Header` command. This will be able to move a header from one note into another, making sure to update all links pointing to the header

## Example
1. user selects a header by highlighting it
1. user invokes command 
1. user prompted with lookup to choose which note to move header into
1. header is moved to the bottom of the destination note

## Related
- when this is complete, the Rename Header [^rename] command should end up using the logic here for its main implementation

## Tradeoffs
- increasing complexity by adding one more command for increased functionality

## Future Phases
- be prompted about where in the destination note to move the header into
    - this might be a quickpick that shows all headers in the destination note
- be able to select a range of text and move all of it to a new note

<!-- ## Discussion -->
<!-- Click the link and create new discussion -->
<!-- https://github.com/dendronhq/dendron/discussions/new -->

## Lookup
[^rename]: [[Rename Header|dendron.ref.commands#rename-header]]. 
