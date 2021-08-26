---
id: 5a7103be-eb92-4380-8207-598e9f10724c
title: Dendron Engine
desc: ''
updated: 1629988950997
created: 1605108924902
---

## Summary
The engine provides the core of most of Dendron's capabilities. This includes note lookup, markdown parsing, etc

## Components

### Fuse.js

- https://fusejs.io
- powers dendron fuzzy search

## Utilities
- markdown parsing and remark related utilities
   - loc: `src/markdown*`

### Cook

#### Tune Search Results

1. checkout fuse.js from <https://github.com/krisk/fuse>
2. install dependencies 
   ```bash
   npm install
   ```
3. build the docs
   ```bash
   npm run docs:dev
   ```
4. modify `docs/.vuepress/components/Demo/Demo.vue`

   - example of setting custom parameters

   ```js
   let codify = (pattern) => {
   return `const options = {
       shouldSort: true,
       threshold: 0.6,
       location: 0,
       distance: 50,
       maxPatternLength: 32,
       minMatchCharLength: 2,
       useExtendedSearch: true,
       includeScore: true,
   keys: [
       "title",
   ]
   };

   const fuse = new Fuse(list, options);

   // Change the pattern
   const pattern = "${pattern}"

   return fuse.search(pattern)`
   }
   ```

## Related

- [[Server Migration|dendron.roadmap.project.n.2020.server-migration]]

