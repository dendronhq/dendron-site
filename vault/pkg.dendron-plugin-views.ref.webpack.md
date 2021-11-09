---
id: mv19plDB8l1vIr0LaNxx8
title: Webpack
desc: ''
updated: 1636431410722
created: 1636431391620
---


### Entry points

VSCode requires that all webviews be self contained. This is why we generate one entry point per view. 

Below is the webpack configuration that makes this happens.

- config/webpack.config.js
```js
entry {
    ...paths.appPages
}

```

- config/paths.js
```js
export {
    appPages: {
        notePreview: resolveApp("src/views/DendronNotePageView"),
        ...
    }
}
```
