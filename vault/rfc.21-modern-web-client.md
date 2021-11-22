---
id: nB75cmdPhL7CTOATG6wpT
title: 21 - Modern Web Client
desc: ''
updated: 1629139538047
created: 1628896161674
---

## Goals

Provide a modern web client for published Dendron notes. 

## Context

Dendron publishing has gone through a bunch of iteration. We started using a forked jekyll template. When that became too slow for large workspaces (+1k notes), we converted that template to 11ty which improved the build time by over 100x. Half a year and over a hundred features later, we are hitting limits again with 11ty. These limits come from the following: 

- lack of modern web tooling: 11ty does not make use of React and other modern web tooling that would make it easier to build and integrate advanced functionality
- lack of customization: 11ty is tightly integrated with Dendron and makes customizing beyond the Dendron pre-sets hard
- hard to develop for: the pool of users that are familiar with 11ty, Dendron, and the integration between the two is tiny whereas the pool of web developers familiar with React and NextJS is many orders of magnitude greater
- scaling issues: 11ty starts to slow down when publishing +10k notes
- poor local preview support: due to how 11ty + Dendron is integrated, we need to re-compile when you change the workspace
- lack of typescript support: 11ty is a javascript project and many of the patterns don't lend themselves well to being typed
- lack of re-use: we've adoped React and NextJS in other parts of our code base but we are not able to re-use the logic in 11ty depsite most of the functionality being the same

## Proposal

- [[1. Replace 11ty with NextJS.|dendron.rfc.21-modern-web-client#1-replace-11ty-with-nextjs]]
- [[2. Release Dendron's Web Frontend as a vanilla NextJS Template|dendron.rfc.21-modern-web-client#2-release-dendrons-web-frontend-as-a-vanilla-nextjs-template]]
- [[3. Support live local preview for publishing|dendron.rfc.21-modern-web-client#3-support-live-local-preview-for-publishing]]
- [[4. First Class Web Experience|dendron.rfc.21-modern-web-client#4-first-class-web-experience]]

### 1. Replace 11ty with NextJS. 

This will make it significantly easier for us to ship new features and maintain our existing feature set. We can re-use the code behind Dendron's [[web ui|dendron._ref.web-ui]] and have a common code base for Dendron across multiple clients. NextJS comes with excellent typescript support and their focus on performance and developer UX are aligned with our own goals as well. 

### 2. Release Dendron's Web Frontend as a vanilla NextJS Template 

We had issues trying to integrate 11ty by forcing an integration between it and Dendron. This resulted in large code packages and fragile interfaces that had many edge cases. 

Based on these learnings, we decided to release our next generation web frontend as a regular NextJS project. Users can clone the repository and use the standard `next dev` command to get started. We will include custom views and logic so that NextJS can compile your Dendron notes, but otherwise, any experience you have with web development, React, or NextJS can be applied to add additional customizations to the template. 

### 3. Support live local preview for publishing

We currently have poor support for local preview which involves re-compiling all your published notes to see the latest changes. 

NextJS supports fetching data on demand and dynamically while in development mode and will allow our users to the published output the moment they are made. 

### 4. First Class Web Experience

We want to make the web experience of using Dendron as great as using Dendron natively in VSCode. Initially, its going to be making sure we have a first class read-only experience. In time, we will also add additional functionality, like the ability to view the note graph, toggle schemas and even edit a note from within the web client


## Details

### Performance

Below are some benchmarks that show the performance comparing 11ty and NextJS when creating a static page with different number of notes. Note that while NextJS has a higher overhead to compile notes in small workspaces, it scales up much better than 11ty as the workspace grows. 

| num Notes | 11ty    | nextjs        |
| --------- | ------- | ------------- |
| 1e1       | 0.32    | 9.8           |
| 1e2       | 0.96    | 17.99s        |
| 1e3       | 9.21    | 18.25         |
| 5e3       | 75.38   | 24.31         |
| 1e4       | 223.10s | 35.39         |

## FAQ

### Does this affect being able to host Dendron as a static site?

Nope. In the future, we might explore adding dynamic server side features to a published Dendron page but there will always be an option to export everything statically. 

### How does this affect SEO?

Dendron will still publish all pages as static HTML by default so there should be no change to SEO when compared to 11ty.

### Will there be breaking changes during the migration process?

We are aiming to keep compatibility with the current configuration options and feature set that is offered in the existing 11ty. We'll post updates if this changes but in general, we don't foresee any breaking changes during development. 

## Discussion
- [21 - Modern Web Frontend · Discussion #1145 · dendronhq/dendron](https://github.com/dendronhq/dendron/discussions/1145)

## Related
- [Modern Web Frontend · Issue #1146 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1146)
