---
id: paWj2hk2FV5UDDbIp7uhr
title: Deprecated Configs
desc: Deprecated VS Code configurations for the Dendron extension.
updated: 1642008830311
created: 1642008453632
---

Deprecated VS Code configurations for the Dendron extension.

## dendron.dailyJournalDomain

> **DEPRECATED:** Use journal settings in `dendron.yml` for [[dailyDomain|dendron://dendron.dendron-site/dendron.ref.config.workspace#dailydomain]]

- type: string
- default: daily

domain where daily journals are kept

## dendron.defaultJournalName

> **DEPRECATED:** Use journal settings in `dendron.yml` for [[name|dendron://dendron.dendron-site/dendron.ref.config.workspace#name]]

- type: string
- default: journal

name used for journal notes

## dendron.defaultJournalDateFormat

> **DEPRECATED:** Use journal settings in `dendron.yml` for [[dateFormat|dendron://dendron.dendron-site/dendron.ref.config.workspace#dateformat]]

- type: string
- default: y.MM.dd

Date format used for journal notes. Use [luxon style formatting][luxon-style-formatting].

## dendron.defaultJournalAddBehavior

> **DEPRECATED:** Use journal settings in `dendron.yml` for [[addBehavior|dendron://dendron.dendron-site/dendron.ref.config.workspace#addbehavior]]

- type: string
- default: childOfDomain
- options:  ['childOfDomain', 'childOfDomainNamespace', 'childOfCurrent', 'asOwnDomain']

strategy for adding new journal notes
- NOTE: this only applies to regular journal notes but not to  [[Details|dendron.topic.special-notes.daily-journal-note#details]] notes.

## dendron.defaultScratchName

> **DEPRECATED:** Use journal settings in `dendron.yml` for [[name|dendron://dendron.dendron-site/dendron.ref.config.workspace#name-1]]

- type: string
- default: scratch

Name used for scratch notes. Date format used for scratch notes. Use [luxon style formatting][luxon-style-formatting].

## dendron.defaultScratchDateFormat

> **DEPRECATED:** Use journal settings in `dendron.yml` for [[dateFormat|dendron://dendron.dendron-site/dendron.ref.config.workspace#dateformat-1]]

- type: string
- default: y.MM.dd.HHmmss

date format used for scratch notes

## dendron.defaultScratchAddBehavior

> **DEPRECATED:** Use journal settings in `dendron.yml` for [[addBehavior|dendron://dendron.dendron-site/dendron.ref.config.workspace#addbehavior-1]]

- type: string
- default: asOwnDomain
- options:  ['childOfDomain', 'childOfDomainNamespace', 'childOfCurrent', 'asOwnDomain']

strategy for adding new scratch notes

## dendron.dendronDir

> **DEPRECATED**

- type: string
- default: 

location of Dendron configuration

##