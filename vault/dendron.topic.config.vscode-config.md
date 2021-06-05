---
id: 19a0ea9d-7292-4a68-bc6f-ffd462a54bc5
title: VSCode Config
desc: ''
updated: 1622842283286
created: 1619541378119
---

## Access

You can access these Configurations through the [VSCode Settings,](https://code.visualstudio.com/docs/getstarted/settings) you will find them if you search for dendron.

![[dendron.topic.config#legend,0:#*]]

## folders

- type: folders[]

This entry is a list of folders that are tracked by your workspace.
The entries here should mirror the vaults from [[dendron.ref.vaults]]

Each folder entry has the following structure

```json
{
    "folders": [
        {
            // relative path to vault from workspace
            "path": "vault",
            // name for folder (default to folder anme)
            "name": "optional"
        }
    ]
}
```

## dendron.dailyJournalDomain
- type: string
- default: daily

domain where daily journals are kept

## dendron.defaultJournalName
- type: string
- default: journal

name used for journal notes

## dendron.defaultJournalDateFormat
- type: string
- default: y.MM.dd

Date format used for journal notes. Use [luxon style formatting](https://moment.github.io/luxon/docs/manual/formatting.html)

## dendron.defaultJournalAddBehavior
- type: string
- default: childOfDomain
- options:  ['childOfDomain', 'childOfDomainNamespace', 'childOfCurrent', 'asOwnDomain']

strategy for adding new journal notes
- NOTE: this only applies to regular journal notes but not to  [[daily journal|dendron.topic.special-notes#daily-journal]] notes.

## dendron.defaultScratchName
- type: string
- default: scratch

Name used for scratch notes. Date format used for scratch notes. Use [luxon style formatting](https://moment.github.io/luxon/docs/manual/formatting.html)

## dendron.defaultScratchDateFormat
- type: string
- default: y.MM.dd.HHmmss

date format used for scratch notes

## dendron.defaultScratchAddBehavior
- type: string
- default: asOwnDomain
- options:  ['childOfDomain', 'childOfDomainNamespace', 'childOfCurrent', 'asOwnDomain']

strategy for adding new scratch notes


## dendron.defaultTimestampDecorationFormat: 
- default: DATETIME_MED
- type: string
- values (see description of values [here](https://moment.github.io/luxon/docs/manual/formatting.html)) 
    * DATETIME_FULL
    * DATETIME_FULL_WITH_SECONDS
    * DATETIME_HUGE
    * DATETIME_HUGE_WITH_SECONDS
    * DATETIME_MED
    * DATETIME_MED_WITH_SECONDS
    * DATETIME_SHORT
    * DATETIME_SHORT_WITH_SECONDS
    * DATE_FULL
    * DATE_HUGE
    * DATE_MED
    * DATE_MED_WITH_WEEKDAY
    * DATE_SHORT
    * TIME_24_SIMPLE
    * TIME_24_WITH_LONG_OFFSET
    * TIME_24_WITH_SECONDS
    * TIME_24_WITH_SHORT_OFFSET
    * TIME_SIMPLE
    * TIME_WITH_LONG_OFFSET
    * TIME_WITH_SECONDS
    * TIME_WITH_SHORT_OFFSET

Decide how human readable timestamp decoration is displayed

## dendron.copyNoteUrlRoot
- type: string
- default: none

override root url when getting note url

## dendron.linkSelectAutoTitleBehavior
- type: string
- default: slug
- options:  ['none', 'slug']

Control title behavior when using selection2link with lookup

## dendron.defaultLookupCreateBehavior
- type: string
- default: selectionExtract
- options:  ['selection2link', 'selectionExtract']

when creating a new note with selected text, define behavior for selected text

## dendron.rootDir
- type: string
- default: 

location of dendron workspace

## dendron.dendronDir
- type: string
- default: 

location of dendron configuration

## dendron.logLevel
- type: string
- default: info
- options:  ['debug', 'info', 'error']

control verbosity of dendron logs

## dendron.trace.server
- type: string
- default: messages
- options:  ['off', 'messages', 'verbose']

LSP log level

## dendron.serverPort
- type: number
- default: none

port for server. If not set, will be randomly generated at startup.

