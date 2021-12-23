---
id: 533857a4-3dcb-478e-9877-5ab7f94ed6e6
title: Mindmap View
desc: ''
updated: 1603636828393
created: 1603426485399
---
## Goals

Support a mindmap view for notes in Dendron. 

## Use Case

- being able to see high level view of your notes
- being able to focus on specific parts of the note hierarchy

## Details

This project discusses the best way to implement a mind-map view into Dendron that aligns with the principles of hierarchy-first note-taking.

## Proposal

Create a view in Dendron that will visualise a note in Dendron using a mindmap format, and show it's siblings, parents and children organised legibly and semantically. This can be implemented using the React Sortable Tree plugin, which will also be used for creating schemas.

#### Organising the information connected to a node in a semantic and legible manner

A standard graph view spreads the connected nodes arbitratily around the outside of a parent node. This is useful for understanding the general 'shape' of the connections between notes, but in order to understand the immediate connections between any particular note it is easier if they are arranged in a structured and comprehensible fashion. A view that visualises notes in a mindmap style format can achieve this.

#### Activating mindmap view

The mindmap view can be triggered through the command palette as a Dendron command, as well as from an icon in the Activity Bar, or through the right-click context menu on a note. Launching it from the activity bar or command palette will launch it in the root of your vault, while launching it from the right click context menu on a note will open it focused to that particular note.

#### Indication of related note

When a note is opened from the mindmap view (or the mindmap view is opened from a note), it is linked so that navigating to other notes via the mindmap panel will open them in that same panel. This can be indicated by an icon in the menu bar of the linked panel, or an icon in the tab in the linked panel.

#### Creation of new child notes by clicking

A '+' icon on a note when clicked can add a child note underneath that note.

#### Schema visualisation

A mindmap-style visualisation lends itself to visualising the abstract concept of a schema. A note with a schema applied shows the potential nodes that it could have according to the schema as transparent notes with a '+' symbol, which when clicked will create that note.

#### Expanding scope of mindmap focus

The mindmap view can also be expanded to show additional generations of notes from the same focused note (the grandparents and grandchildren of the focused note). There are '+' and '-' buttons in the mindmap view panel to increase or decrease the amount of visible generations.

#### Configuration options

TBD

## Questions

### What is the difference between this and Dendron's graph view?

The graph view shows an overview of your _entire knowledge base_ and can be traversed by scrolling and zooming. This can be useful for understand the general structure of all your notes, and the broad relationships between domains in your hierarchy but is less suited for focusing on a particular domain.

The mindmap view would allow users to focus their attention on a particular node, it's siblings, parents and children, view them in a visually organised manner, and traverse their notes by selecting notes directly attached to that domain. In this sense, it is more suited to giving you an overview of a particular _domain_.

## Resources

- [The Brain App](https://www.thebrain.com/)
- [Discussion](https://discordapp.com/channels/717965437182410783/739186036495876126/766252142549270550)
- [React Sortable Tree](https://github.com/mikcaweb/react-sortable-tree)

