---
id: 587e6d62-3c5b-49b0-aedc-02f62f0448e6
title: Graph View
desc: ""
updated: 1626108519123
created: 1595120707814
stub: false
---

## Summary

-   Visualize the notes and schemas in your workspace in a graph view
-   Click on a node to open up the corresponding note/schema in your workspace
-   Filter graph view to show only desired data
-   Much faster startup times than the legacy note/schema graph
    -   Scales to virtually any size graph

## Types

### Note Graph

#### Full Note Graph

Show graph of all your notes. You can activate this by using the [[Show Note Graph Command|dendron.topic.graph-view#show-note-graph-v2]] command and toggling the [[Show Note Graph|dendron.topic.graph-view#^Ev8p1L5P0IzDGjAs]] option.

<!-- TODO: pic -->

#### Local Note Graph

Shows a graph of your current note and immediate neighbors. This is the default view when you run [[Show Note Graph|dendron.topic.graph-view#show-note-graph-v2]].

<!-- TODO: pic -->

### Schema Graph

Show graph of your schemas. You can activate by running the [[Show Schema Graph|dendron.topic.graph-view#show-schema-graph-v2]] command.

## Commands

### Show Note Graph V2

Launch the command palette (see [[docs|dendron.guides.cook#launch-the-command-palette]]): `> Dendron: Show Note Graph V2`

Click on a node to open up the corresponding note in your workspace, or open a note to center the graph on that note.

Use the filter view in the top left to filter and modify the data shown by the graph.

### Show Schema Graph V2

Launch the command palette (see [[docs|dendron.guides.cook#launch-the-command-palette]]): `> Dendron: Show Schema Graph V2`

Click on a node to open up the corresponding schema in your workspace.

Use the filter view in the top left to filter and modify the data shown by the graph.

The schema graph shows high level connections between a vault's `root` schema and other schemas within the vault. These other schemas may have other nodes connected to them representing additional children of that schema.

## Filter View

In the top left of both the note and schema graphs lives the graph filter view. This UI element contains information about the graph and various filtering options.

### Vaults

This view contains a list of each vault in the workspace. The visibility of each vault in the graph can be toggled to better filter the graph.

### Connections

-   **Hierarchy:** When checked, include hierarchical graph connections
-   **Links:** When checked, include linked note connections

### Filter

This view contains various options to filter the graph.

#### String Filters

Use these string filters to include/exclude graph nodes by filename or name. These fields support multiple arguments in the form of a comma-separated or space-separated list.

-   **Allowlist**: Graph nodes including any of these string arguments will be **included** in the graph
-   **Blocklist**: Graph nodes including any of these string arguments will be **excluded** from the graph

Here's a quick example:

-   Allow: `journal.2021, dog`
    -   Include any notes that include either `journal.2021` or `dog` in their name or filename
-   Block: `cat`
    -   Exclude any notes with `cat` in their name or filename

#### Other Filters

-   **Show Stubs**: When checked, show stub notes in the graph

### Options

-   **Show Local Graph (Note Only)**: When checked, show local graph centered around the current open note. Otherwise, show the full workspace-wide note graph. ^Ev8p1L5P0IzDGjAs

-   **Allow Relayout**: When checked, layout the graph again when the graph configuration is updated.
    -   This is useful in instances you'd like to preserve the current layout but add/remove information, e.g. adding link connections to a hierarchical graph while maintaining readability

### Information

Primarily for debugging, this section has information about graph size. Edge counts are calculated individually from the actual rendered edges, so may not represent the true rendered count if a certain type of edge is hidden.

-   **Linked Edges**: Number of linked connections between nodes
-   **Hierarchical Edges**: Number of hierarchical connections between nodes
-   **Nodes**: Number of nodes in the graph

## Custom Styling

Dendron supports custom styling of schema and note graphs. Styling follows the Cytoscape.js format, which is CSS-like with a couple of differences. [Full Cytoscape.js styling documentation can be found here.](https://js.cytoscape.org/#style)

### Selectors

In order to style the graph, there are a variety of selectors to choose from. Currently supported selectors include:

| Selector     | Description                             |
| ------------ | --------------------------------------- |
| `node`       | Any node                                |
| `edge`       | Any edge                                |
| `:selected`  | Any selected node                       |
| `.parent`    | Any parent node (local note graph only) |
| `.links`     | Any link connection edge                |
| `.hierarchy` | Any hierarchy connection edge           |

There are also some vault-specific selectors. These include:

| Selector            | Description                                |
| ------------------- | ------------------------------------------ |
| `.vault-VAULT_NAME` | Any node or edge in the `VAULT_NAME` vault |

Selectors can be chained together, just like in regular CSS. For example, `node.vault-VAULT_NAME` would target only nodes in the `VAULT_NAME` vault.

### Style Properties

#### Styling Nodes

Some common node style properties are listed below.
**[Full node style property list →](https://js.cytoscape.org/#style/node-body)**

| Property           | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `width`            | The width of the node’s body.                          |
| `height`           | The height of the node’s body.                         |
| `shape`            | The shape of the node's body (ellipse, triangle, etc.) |
| `background-color` | The color of the node's body.                          |
| `border-width`     | The size of the node’s border.                         |
| `border-color`     | The color of the node’s border.                        |

#### Styling Node Labels

Some common node label style properties are listed below. Select labels by selecting the node associated with them.
**[Full node label style property list →](https://js.cytoscape.org/#style/labels)**

| Property      | Description                        |
| ------------- | ---------------------------------- |
| `color`       | The color of the label.            |
| `font-size`   | The size of the label text.        |
| `font-weight` | The font weight of the label text. |

#### Styling Edges

Some common edge style properties are listed below.
**[Full edge style property list →](https://js.cytoscape.org/#style/edge-line)**

| Property     | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| `width`      | The width of the edge line.                                  |
| `line-color` | The color of the edge line.                                  |
| `line-style` | The style of the edge line (`solid`, `dotted`, or `dashed`). |

## RFCs

-   [[7 Graph Rework|dendron.rfc.7-graph-rework]]

---
