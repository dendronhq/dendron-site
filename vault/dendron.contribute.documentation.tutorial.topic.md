---
id: vyjmifzlvu4w85suec4vd6x
title: Topic
desc: ''
updated: 1655764567861
created: 1653954523395
---

A topic is a collection of features (eg. [[dendron.topic.links]]) that are related in functionality. 

## Adding a new topic
1. Create a new note under [[dendron.topic]]
1. This will apply the following template
![[Topic Template|dendron://dendron.dendron-site/templates.topic]]
1. Fill out all areas to the best of your ability (note: all sections that have `required: false` can be deleted if not used)
1. See [[Topics|dendron://dendron.handbook/leaflet.journal.2022.05.10.standard-documentation.topics]] for more details about each section 

## Style Guide

### prefer creating a new note for each section over writing the content inline

> NOTE: `FAQ` is the exception to this. you can inline content there

- good
```md
<!-- dendron.topic.template.command -->
## Apply Template Command
![[dendron.topic.template.command.apply-template]]
```

- bad
```md
<!-- dendron.topic.template.command -->
## Apply Template Command

The apply template command will...
```

### delete all unused sections
- the topic template comes with a lot of sections. not all of them are necessary for every topic, delete any that are not used

### when describing features

![[dendron://dendron.dendron-site/dendron.contribute.documentation.tutorial.feature#style-guide]]

## FAQ

### What is the difference between a 'Feature' and a 'Component'?

A feature is something that is performed "eg. template variables"
A component is rarely used. It applies when there are two different and separate ways a feature can be used (eg. handlebar templates vs regular templates > [[Components|dendron://dendron.dendron-site/dendron.topic.templates#components]])

## Example
- [[Templates|dendron://dendron.dendron-site/dendron.topic.templates]]