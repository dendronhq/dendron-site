---
id: 7cd5b849-7ccb-4189-9f02-2f13db16298b
title: Library Research
desc: ''
updated: 1621369037782
created: 1621365376034
---

### Data Structures

- **[Graphology](https://graphology.github.io/)**
  - "a specification and reference implementation for a robust & multipurpose JavaScript/TypeScript `Graph` object."
  - Supports directed, undirected or mixed graphs
  - Unclear if necessary at the moment

### Rendering Libraries

#### Viable Options
- **[Cytoscape.js](https://js.cytoscape.org/)**: Graph theory (network) visualisation and analysis, supports a number of different graph displays
- **[Vis.JS](https://visjs.github.io/vis-network/docs/network/)**: Handles pictures & manual repositioning
- **[react-flow](https://github.com/wbkd/react-flow)**: Node-based graphs, custom node styling + html
- **[Ant Vision](https://graphin.antv.vision/en-US)**: Fully-featured graph library from Alibaba/Ant Design, docs are *loosely* translated into English
- **[react-beautiful-diagrams](https://github.com/beautifulinteractions/beautiful-react-diagrams)**: Schema validation, but seems fairly barebones


#### Other Libraries
- **Diagram or flow libraries**
  - **[react-diagrams](https://github.com/projectstorm/react-diagrams)**: Very cool and polished
  - **[react flowchart]( https://github.com/MrBlenny/react-flow-chart)**: Simple, looks straightforward
- **GraphViz:** Ruled these out, as current plan is to have data come from Redux store instead of a `.dot` file or format
  - **[d3 GraphViz](https://github.com/magjac/d3-graphviz)**: Uses GraphViz DOT language, leverages [@hpcc-js/wasm](https://github.com/hpcc-systems/hpcc-js-wasm) for rendering
- **Other**
  - **[Visx](https://airbnb.io/visx/network)**: Graph implementation by AirBnB, doesn't have clear way to interact with graph
  - **[JointJS](https://resources.jointjs.com/)**: Enterprise option
  - **[dagre](https://github.com/dagrejs/dagre)** and **[dagre-d3](https://github.com/dagrejs/dagre-d3)**: More so for directed graphs

### References

- Thanks to `@cameron#9185` for suggesting [his list of node-link visualization libraries](https://gist.github.com/hydrosquall/cf6a68305fb14e9fb45c82cbcbff0c65)
