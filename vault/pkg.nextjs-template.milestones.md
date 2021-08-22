---
id: wnjZiTP1UEW9e0aGz1HT0
title: Milestones
desc: ''
updated: 1629671984562
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
  -   support [[customHeaderPath|dendron.topic.publishing.configuration#customheaderpath]] #size.small
  - x support [[duplicateNoteBehavior|dendron.topic.publishing.configuration#duplicatenotebehavior]]
  -   support [[ga_tracking|dendron.topic.publishing.configuration#ga_tracking]] #size.small
    - see [Using Google Analytics with Next.js](https://malloc.fi/using-google-analytics-with-next-js)
  -   support [[logo|dendron.topic.publishing.configuration#logo]]
  -   support [[githubCname|dendron.topic.publishing.configuration#githubcname]]
  - d support [[siteFaviconPath|dendron.topic.publishing.configuration#sitefaviconpath]]
  - x support [[siteHierarchies|dendron.topic.publishing.configuration#sitehierarchies]]
  - x support [[siteIndex|dendron.topic.publishing.configuration#siteindex]]
  - x support [[siteUrl|dendron.topic.publishing.configuration#siteurl]]
  -   support [[usePrettyRefs|dendron.topic.publishing.configuration#useprettyrefs]]
  - x support [[gh_edit_repository|dendron.topic.publishing.configuration#gh_edit_repository]]
  -   support [[author|dendron.topic.publishing.configuration#author]] seo property #size.small
    - see [Introducing next-seo, SEO for Next.js](https://www.garymeehan.ie/blog/seo-in-nextjs-with-next-seo)
  -   support [[twitter|dendron.topic.publishing.configuration#twitter]] seo property #size.small
  - Note config
    -   support [[canonicalUrl|dendron.topic.publishing.configuration#canonicalurl]] #size.small
    -   support [[published|dendron.topic.publishing.configuration#published]] #size.small
    -   support [[noindex|dendron.topic.publishing.configuration#noindex]] #size.small
    -   support [[gitNoLink|dendron.topic.publishing.configuration#gitnolink]] #size.small
    -   support [[collection options|dendron.topic.publishing.configuration#collection-options]] #size.small
        - Lookup
          - [Building a Blog with Next.js](https://timber.io/blog/building-a-blog-with-next-js/)
          - [GitHub - tscanlin/next-blog: Markdown based blog using next.js, supporting static export](https://github.com/tscanlin/next-blog)
          - [GitHub - wutali/nextjs-netlify-blog-template: Next.js blogging template for Netlify](https://github.com/wutali/nextjs-netlify-blog-template)
-   Support nav order in Single Hiearchy Workspaces
-   Set max-width constraints for content 
-  a Navigate to home page using `nextjs/link` instead of `<a>` 

### Fixes
- w Deeply nested tree view items can overflow 
- y Backlinks and Children links go to wrong url #assigned
- y Internal links go to wrong url  
- a Opening one child of tree view should not close existing children
<!-- -   CanoncialBaseUrl, remove autoappend .html behavior -->
<!-- -   Sometimes breadcrumb doesn't load -->

## Phase I Milestones

### Features
- internationalization capability
- support tab completion for lookup
- support note graph on published site
- support internationalization

### Enhancements
-   support site map using [iamvishnusankar/next-sitemap](https://github.com/iamvishnusankar/next-sitemap#readme) ^cf6Jxkyn3rku
- support all config settings
  -   support [[previewPort|dendron.topic.publishing.configuration#previewport]]

## Future Milestones