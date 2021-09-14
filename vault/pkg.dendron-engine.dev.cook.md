---
id: qlsfKmXgpCLatrpQGDCKj
title: Cook
desc: ''
updated: 1630426646181
created: 1630426638332
---

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

