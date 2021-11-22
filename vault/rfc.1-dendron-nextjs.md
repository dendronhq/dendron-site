---
id: 17c61d62-f92e-4002-b8fe-9c05686e4bf9
title: 1 - Native Preview Experience
desc: ''
updated: 1615160650280
created: 1610911846754
---

## Why
- remove Markdown Preview Enhanced (MPE) dependency
    - MPE has a huge surface area and we only use a small part of its feature set
    - MPE is a sizable download (40mb) with performance issues on startup and a few other cases
    - MPE is based on `markdown-it` whereas dendron is based on `remarkable`
        - this makes our features sets incompatible and makes a lot of the MPE code base unsuitable for extension
        - this also causes notes in the preview to render differently from code in the browser
- use next.js for markdown preview
    - next.js is already used in Dendron webviews (eg. `Dendron: Configure`) and the plan is to convert all UI components to webviews
    - next.js lets us add rich visualizations based on React and the latest web technologies
    - next.js will let us eventually use MDX 
    - next.js can eventually be used as a scaffold for our own web client or dedicated desktop client 

## Goals with v1
- [x] use next.js to do local preview of dendron notes

### Stretch Goals
- [ ] scroll sync
- [ ] use next.js to preview dendron site
- [ ] better preview for schemas

### Additional Features
- [ ] folding of headers

## Future Goals
- use next.js to provide WYSWYG experience for dendron notes
- incorporate native lookup inside Dendron

## Considerations
- we currently render notes into HTML for publication with 11ty. it seems like duplicate effort to re-create this in next.js
    - ideally, want to either serve the static assets from 11ty using next.js or use next.js to generate the static assets
    - kevin's thoughts: I like to be able to use next.js for everything down the line (static site generation + preview) but it might make more sense presently to implement a vscode specific preview and then figure out how to merge 11ty and next.js afterwards
- Dendron currently uses express as a backend
    - we generate static assets from next.js at compile time using `next export` and then serve them over express
    - Moving forward, if we want to use next.js for preview generation, we will probably need to swap out express with next.js 
    - reason we currently have the next.js/express split is because `next dev` dynamically re-compiles each route one at a time which causes our integration tests to fail (our integration tests call on the APIs from express ) and next.js causes the initial call to fail
    - we'll need to either find a workaround in next.js our use next.js [custom server functionality](https://nextjs.org/docs/advanced-features/custom-server) to embed express 
    - kevin's thought: use custom server functionality. we'll lose out on some next.js code splitting features but should give us the best of both worlds otherwise

## Tasks
- [ ] bundle next.js with dendron using custom router
- [ ] add api to dendron engine to preview a note
- [ ] update `Dendron: Show Preview` command to call API with current note

## Related

- [Code for rendering webview currently](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/ConfigureWithUI.ts#L6:L6)
