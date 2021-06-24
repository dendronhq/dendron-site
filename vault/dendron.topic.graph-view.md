---
id: 587e6d62-3c5b-49b0-aedc-02f62f0448e6
title: Graph View
desc: ""
updated: 1624554508709
created: 1595120707814
stub: false
---

## Summary

-   Visualize the notes and schemas in your workspace in a graph view
-   Click on a node to open up the corresponding note/schema in your workspace
-   Much faster startup times than the legacy note/schema graph
    -   Scales to virtually any size graph

## Commands

### Show Note Graph V2

Launch the command palette (see [[docs|dendron.guides.cook#launch-the-command-palette]]): `> Dendron: Show Note Graph V2`

Click on a node to open up the corresponding note in your workspace.

The note graph currently only supports hierarchical note connections. Future versions of the graph will support linked note connections and the ability to add custom filters and styling to your graph.

### Show Schema Graph V2

Launch the command palette (see [[docs|dendron.guides.cook#launch-the-command-palette]]): `> Dendron: Show Schema Graph V2`

Click on a node to open up the corresponding schema in your workspace.

The schema graph shows high level connections between a vault's `root` schema and other schemas within the vault. These other schemas may have other nodes connected to them representing additional children of that schema.

## Filter View

In the top left of both the note and schema graphs lives the graph filter view. This UI element contains information about the graph and various filtering options.

### Connections

-   **Hierarchy:** When checked, include hierarchical graph connections
-   **Links:** When checked, include linked note connections

### Filter

This view contains various options to filter the graph.

#### String Filters

Use these string filters to include/exclude graph nodes by filename or name. These fields support multiple arguments in the form of a comma-separated or space-separated list.

-   **Whitelist**: Graph nodes including any of these string arguments will be **included** in the graph
-   **Blacklist**: Graph nodes including any of these string arguments will be **excluded** from the graph

Here's a quick example:

-   Whitelist: `journal.2021, dog`
    -   Include any notes that include either `journal.2021` or `dog` in their name or filename
-   Blacklist: `cat`
    -   Exclude any notes with `cat` in their name or filename

#### Other Filters

-   **Show Stubs**: When checked, show stub notes in the graph

### Vaults

This view contains a list of each vault in the workspace. The visibility of each vault in the graph can be toggled to better filter the graph.

## RFCs

-   [[7 Graph Rework|dendron.rfc.7-graph-rework]]

---
