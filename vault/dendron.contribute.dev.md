---
id: 81da87be-2d4e-47b5-a1d6-c0d647e1ab00
title: Development
desc: ''
updated: 1614811289748
created: 1604236041570
---

## Summary
If you would like to contribute to the development of dendron, checkout out the [repo](https://github.com/dendronhq/dendron) from github.

You can then follow the [[setup instructions|dendron.dev.setup#getting-started]].

- NOTE: the above setup instructions are for the dendron plugin. See the below links if you are working on a different part of Dendron: 
    - [[Markdown Preview|dendron.pro.dendron-preview.setup]]
    - [[Markdown Links|dendron.pro.markdown-links.setup]]

A great place to start is with issues labelled with the [size.small label](https://github.com/dendronhq/dendron/labels/size.small) on github. These are items that we picked out specifically for first time contributors and are small self contained task that are well suited for first time contributors.

Leave a comment in the issue if you decide to work on it. Issues that are being worked on will have the [status.wip label](https://github.com/dendronhq/dendron/labels/status.wip).

Remember that you are always welcome to ask for help inside the [#dev discord channel](https://discord.gg/AE3NRw9).

![[dendron.journal.2021.02.20.migration]]

## VSCode Extension Development

If you're not familiar with VSCode Extension Development, have no fear. There are lots of great resources for that. 

The VSCode guide to [making your first extension](https://code.visualstudio.com/api/get-started/your-first-extension) is a great place to start. 

Afterwards, you can see how specific features are implemented through the [vscode extension samples library](https://github.com/microsoft/vscode-extension-samples). 

## Pull Request Checklist

- [ ] add a [[test|dendron.dev.testing#writing-tests]] for the new feature
- [ ] make sure all the existing [[tests|dendron.dev.testing#running-all-tests]] pass
- [ ] if its your first pull request to Dendron, watch out for the [CLA](https://en.wikipedia.org/wiki/Contributor_License_Agreement) bot that will ask you to agree to Dendron's CLA
- [ ] if its your first pull request and you're on our Discord, make sure that Kevin gives you the [[horticulturalist|dendron.community.roles#horticulturalist]] role  👨‍🌾👩‍🌾


## Commit Style

- we follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) with the following tags
- categories:
    - feat: feature - introduce new functionality
    - enhance: enhancement - improve existing functionality
    - fix: make something not broken
    - chore: backend improvements
    - spike: not complete commit