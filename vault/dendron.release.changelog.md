---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1601508213606
created: 1601508213606
stub: false
---

## [0.12.4](https://github.com/dendronhq/dendron/compare/v0.12.4-alpha.11...v0.12.4) (2020-09-30)


### Features

- **schemas:** live schema updates ([868a125](https://github.com/dendronhq/dendron/commit/868a125a0f07dcbfb5cbeb5dd04d05ab7556e12b))
    - schema changes are now updated in realtime. no more `Reload Index`
    - NOTE: this doesn't yet apply to `Show Schema Graph`. you'll still need to run `Reload Index` to see the changes in the graph

### Enhancements

- **lookup:** special notes are now created via lookup ([da825a9](https://github.com/dendronhq/dendron/commit/da825a9d2b1ec10a3f9d3eac20db06448fe5344b))
    - instead of being a separate command, journal and scratch notes are now created using the regular lookup interface
    - new keybindings have been introduced to [map old commands to new style lookups](https://dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3.html#passing-arguments-to-lookup)
    - `Create Journal Note` and `Create Scratch Note` still exist as commands but will be deprecated in the next minor release 

- **lookup:** support lookups opening with a new split ([da825a9](https://github.com/dendronhq/dendron/commit/da825a9d2b1ec10a3f9d3eac20db06448fe5344b))

((ref: [[dendron.topic.lookup]]#split toggle))

- **refs:** easier note ref selection([114ff87](https://github.com/dendronhq/dendron/commit/114ff87be04f8d746b0be28f7627ba0d1ec9b504))

Dendron will now recognize a header selection if you have any part of the header highlighted (vs needing to highlight the entire line)

((ref: [[dendron.topic.commands]]#copy note ref:#*))

### Documentation
- we published our public roadmap

((ref: [[dendron.roadmap]]))

- changelog moved to dedicated [page](https://dendron.so/notes/9bc92432-a24c-492b-b831-4d5378c1692b.html)
- lookup menu docs
((ref: [[dendron.topic.lookup]]#lookup menu:#*))

### Community Highlights

- a new planter has appeared 🌲
((ref: [[dendron.showcase]]#luke's second brain))