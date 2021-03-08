---
id: ae5c556b-262b-4393-84ce-376ec8becff5
title: Notes
desc: ''
updated: 1604967185782
created: 1604334990589
---
## Agenda

- intros
- long term vision
- November Milestones
- Dendrologist Role
- Community Initiatives
- Scratch

## Long Term Vision

Dendron is the best way for people to create, find, and make use of their information. Full stop. 

Information is not a solved problem. 

## Dendrologist Role

Have a more concise description of role and responsibilities.

- expected time commitment: ~2h/week
- responsibilities:
  - welcoming new users
  - responding to incoming feature requests
  - responding to incoming questions

### Specific Dendrologist Focuses

- community
  - welcome new users
  - organizing new events (eg. random coffee)
  - program carl to do more community things (<https://carl.gg/>)
  - channels: #introductions #chat
- historian
  - responding to pull request on website docs
  - collecting user workflows and advice in discord 
  - keeping docs up to date
  - collect questions 
  - channels: #note-taking #tips-and-tricks #workflows #showcase
- development
  - help with current milestone features
  - improve development docs and best practices
  - channels: #dev #feedback
- planning
  - manage monthly milestones: <https://github.com/dendronhq/dendron/milestones>
  - triage and label new issues
  - work with community to figure out minor/big task of the week
  - channels #dev #feedback

## November Milestones

- Dendron [[Multi Vault Support|dendron.roadmap.project.n.2020.multi-vault]]
- Better publishing 
- Better migration workflows from other tools into Dendron
- Better linking support
  - relative links 
  - open links wtih consistent titles

## Community Initiatives

- community tasks
  - every week, there's one minor task and one major task that can be voted on by community
  - minor task will be delivered at end of week
  - major task will be prioritized and progress will be made
- live office hours
  - start off with holding this every two weeks
  - collect questions and collect votes leading up to office hours
  - answer both live questions and collected questions during office hours 
- reserved office hours
  - every two weeks (when not doing live office hours)
  - limited 30min slots 
  - deep dive on something particular
  - option of broadcasting later

## Scratch

Additional topics to bring up

- pods and publishing as two concepts is confusing
  - make it clear that publishing is a special case for pods
  - reason the two a distinct is because is a common use case

- github issues pod @luke

- template repo too big @luke
  - dendron-site
  - dendron-template

- what pods next
  - github issues 

- triage github issues
  - sizing: small/big
  - actionable: further information/

- handling welcomes for new users

- action items 

- community role 

# Decisions

- dendrologist focuses
  - community @lightbulb
  - historian @kiran
  - dev @luke @britt
  - planning @kevin

# Next

- [ ] set next meeting date @kevin

- [ ] renaming dendron-template to dendron-site @kevin

- [ ] figure out turn taking process for welcome new users @kevin

- [ ] label github issues with sizing and actionability @kevin

- [ ] github issues pod @luke 
  - @kevin will create an issue with more details
  - feature: publish a dendron project (eg. [this](https://dendron.so/notes/45cfb9f2-46cf-4f67-a41e-834818fbd06e.html)) as a github issue

- [ ] new getting started template for dendron @luke 
  - depending on how you do this, might not even need a new repo
  - we currently [filter notes](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/SetupWorkspace.ts#L139:L139) from `dendron-template` when setting up a new repo
  - one implementation is to just filter more notes 

- [ ] setup historian workflow @kiran

- [ ] find dev related task @britt

- [ ] collect questions for office hours @lightbulb

- [ ] explore carl community functions @lightbulb

