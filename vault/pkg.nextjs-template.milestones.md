---
id: wnjZiTP1UEW9e0aGz1HT0
title: Milestones
desc: ''
updated: 1629516994054
created: 1629514021198
---

## MVP Milestones

The NextJS Template is currently in Developer Preview. 

See [here](https://handbook.dendron.so/notes/0292b34e-47eb-4499-8f49-d9891accdb3d.html) for explanation of status symbols

### Features
- x Handle navigating to home page
- x Fixed Header
- x SEO options
- x Edit on Github Link
- w Responsive side bar 
-   Advanced SEO Options 
-   Custom Theming Support
-   Full text search
-   [[Support live local preview for publishing|dendron.rfc.21-modern-web-client#3-support-live-local-preview-for-publishing]]

### Enhancements
- x Make Lookup change value when navigating
- y Make Breadcrumb clickable 
- support mvp config settings
  - x support [[assetsPrefix|dendron.topic.publishing.configuration#assetsprefix]]
  - x support [[copyAssets|dendron.topic.publishing.configuration#copyassets]]
  -   support [[customHeaderPath|dendron.topic.publishing.configuration#customheaderpath]]
  - x support [[duplicateNoteBehavior|dendron.topic.publishing.configuration#duplicatenotebehavior]]
  -   support [[ga_tracking|dendron.topic.publishing.configuration#ga_tracking]]
  -   support [[logo|dendron.topic.publishing.configuration#logo]]
  -   support [[githubCname|dendron.topic.publishing.configuration#githubcname]]
  - d support [[siteFaviconPath|dendron.topic.publishing.configuration#sitefaviconpath]]
  - x support [[siteHierarchies|dendron.topic.publishing.configuration#sitehierarchies]]
  - x support [[siteIndex|dendron.topic.publishing.configuration#siteindex]]
  - x support [[siteUrl|dendron.topic.publishing.configuration#siteurl]]
  -   support [[usePrettyRefs|dendron.topic.publishing.configuration#useprettyrefs]]
  - x support [[gh_edit_repository|dendron.topic.publishing.configuration#gh_edit_repository]]
  -   support [[author|dendron.topic.publishing.configuration#author]] seo property
  -   support [[twitter|dendron.topic.publishing.configuration#twitter]] seo property
-   Support nav order in Single Hiearchy Workspaces
-   Set max-width constraints for content 
-   Navigate to home page using `nextjs/link` instead of `<a>` #assigned

### Fixes
- w Deeply nested tree view items can overflow 
- y Backlinks and Children links go to wrong url #assigned
- y Internal links go to wrong url  
-   Opening one child of tree view should not close existing children
-   CanoncialBaseUrl, remove autoappend .html behavior
-   Sometimes breadcrumb doesn't load

## Phase 1 Milestones

### Enhancements
- support all config settings
  -   support [[previewPort|dendron.topic.publishing.configuration#previewport]]