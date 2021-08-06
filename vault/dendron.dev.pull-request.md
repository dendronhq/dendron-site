---
id: adc39825-77a6-46cf-9c49-2642fcb4248e
title: Pull Request
desc: ''
updated: 1628258444822
created: 1623430616135
---

## Summary

This goes into submitting a pull request

## Commit Style

- we follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) with the following tags
- categories:
  - feat: feature - introduce new functionality
  - enhance: enhancement - improve existing functionality
  - fix: make something not broken
  - chore: backend improvements
  - spike: not complete commit
 
If you are introducing a breaking change, either add an `!` after the category or a footer at the end of your message

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```
> Example from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)

```
refactor!: drop support for Node 6
```
> Example from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)

## Checklist

### first time pull request
- [ ] if its your first pull request to Dendron, watch out for the [CLA](https://en.wikipedia.org/wiki/Contributor_License_Agreement) bot that will ask you to agree to Dendron's CLA
- [ ] if its your first pull request and you're on our Discord, make sure that Kevin gives you the [[horticulturalist|dendron.community.roles#horticulturalist]] role  👨‍🌾👩‍🌾

### general
- [ ] add a [[test|dendron.dev.qa#writing-tests]] for the new feature
- [ ] make sure all the existing [[tests|dendron.dev.qa#running-all-tests]] pass
- [ ] if your still iterating on your pull request or if your working on feedback but its not ready yet, put your PR into `draft` mode until it is ready
- [ ] do a spot check by running your feature with our [[test Workspace|dendron.dev.qa#test-workspace]]
- [ ] if your change reflects documentation changes, also submit a PR to [dendron-site](https://github.com/dendronhq/dendron-site) and mention the doc PR link in your current PR
- [ ] after you submit your pull request, check the output of our [integration test](https://github.com/dendronhq/dendron/actions) and make sure all tests pass
  - NOTE: if you running mac/linux, check the windows output and vice versa if you are developing on windows
- [ ] (optional) ping `@Dendron Team` in the `#dev` channel of our [discord](https://discord.gg/AE3NRw9) - we usually respond to PRs within 24h

### QA Checklist
![[dendron.dev.qa.sop#checklist,1]]