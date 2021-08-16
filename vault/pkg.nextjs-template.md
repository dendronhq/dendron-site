---
id: eQ5w4eqHrf4m1peq
title: NextJS Template
desc: ''
updated: 1629139234301
created: 1627859876918
---

## Summary 
- [[Experimental 🧪|dendron.ref.status#experimental-🧪]]

The Dendron NextJS Template is the basis for Dendron's new publishing frontend. It is build around NextJS and React. You can read about the motivation and goals behind this project in this [[rfc|dendron.rfc.21-modern-web-frontend]].

## MVP Milestones

The NextJS Template is currently in Developer Preview. 

### Features
-   ~~Handle navigating to home page~~
-   ~~Fixed Header~~
-   ~~SEO options~~
-   ~~Edit on Github Link~~
-   Responsive side bar
-   Advanced SEO Options 
-   Custom Theming Support
-   Full text search
-   [[Support live local preview for publishing|dendron.rfc.21-modern-web-frontend#3-support-live-local-preview-for-publishing]]

### Enhancements
-   ~~Make Lookup change value when navigating~~
-   Make Breadcrumb clickable
-   Deeply nested tree view items can overflow 
-   Make breadcrumb clickable 
-   Support nav order in Single Hiearchy Workspaces
-   Set max-width constraints for content
-   Navigate to home page using `nextjs/link` instead of `<a>`

### Fixes
-   Deeply nested tree view items can overflow
-   Opening one child of tree view should not close existing children
-   Opening one child of tree view should not close existing children
-   CanoncialBaseUrl, remove autoappend .html behavior
-   Sometimes breadcrumb doesn't load