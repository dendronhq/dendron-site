---
id: 9kovmyM4T0ZBeWvp5oH62
title: Obsidian Style
desc: ""
updated: 1628800428336
created: 1628800356882
---

## Summary

-   id: `dendron.obsidian-style`
-   coverage
    -   ✅ import
    -   ❌ publish
    -   ❌ export

### Import

When running the pod, specify the file with your Obsidian styles you'd like to import. For the `vault` parameter, just add a valid vault from your workspace. This pod works a bit differently than other ones, and this is a required parameter that doesn't get used by this pod.

#### Supported Selectors/Properties

The following selectors are supported from Obsidian:

-   .graph-view.color-fill
-   .graph-view.color-circle
-   .graph-view.color-line
-   .graph-view.color-text
-   .graph-view.color-fill-highlight

The following properties are supported:

-   color
-   opacity

Any CSS rules not covered by the above selectors/properties will be omitted in the final result.

#### Using the Exported File

The exported style file can be found at `~/.dendron/styles`. To use, copy the filename of the exported file and add the following to `dendron.yml`:

```yaml
- graph
    - stylePath: filename_here.css
```
