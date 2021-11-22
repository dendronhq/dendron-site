---
id: fdf615f9-5292-467d-8d77-f136ecc8e109
title: Graph Rework - Hierarchy
desc: ''
updated: 1618215091880
created: 1617983749839
---
## Question

How is a Hierarchy represented in the Graph?

## Proposal

I would Propose that a Hierarchy level is a node in the Graph.
Turning a Hierarchy like `journal.daily.2020.04.10` into the following Graph:

```mermaid
graph BT
    Journal-->|child|Daily
    Daily-->|child|2020
    2020-->|child|04
    04-->|child|10
    Daily -->|parent| Journal
    2020 -->|parent| Daily
    04 -->|parent|2020
    10 -->|parent|04
    
```

The Graph is just an example visualization as a flowchart. As you see, each Level Links to its parent and children, creating a BiDirectional Graph in doing so.

## Additional Thoughts

But now we have Notes and Schemas that interact with the Hierarchy.

- A note sits in the Graph at the Hierarchy level.
  Could a note contain its Hierarchy through its headings?
  Extending the Hierarchy, it sits inside with the headings it contains.
  [[read more|rfc.7-graph-rework.notes]]
- A schema describes a hierarchy to validate it.
  [[read more|rfc.7-graph-rework.schemas]]

## Author

flammehawk:

- [@Github](https://github.com/flammehawk)
- @Discord fudo#1010
