---
id: eea2b078-1acc-4071-a14e-18299fc28f48
title: Config
desc: ''
updated: 1595261816971
created: 1595261816971
---

# Config
### dendron.dailyJournalDomain
- type: string
- default: daily

domain where daily journals are kept

### dendron.defaultJournalName
- type: string
- default: journal

name used for journal notes

### dendron.defaultJournalDateFormat
- type: string
- default: Y.MM.DD

date format used for journal notes

### dendron.defaultJournalAddBehavior
- type: string
- default: childOfDomain
- options:  ['childOfDomain', 'childOfDomainNamespace', 'childOfCurrent', 'asOwnDomain']

strategy for adding new journal notes

### dendron.defaultScratchName
- type: string
- default: scratch

name used for scratch notes

### dendron.defaultScratchDateFormat
- type: string
- default: Y.MM.DD.HHmmss

date format used for scratch notes

### dendron.defaultScratchAddBehavior
- type: string
- default: asOwnDomain
- options:  ['childOfDomain', 'childOfDomainNamespace', 'childOfCurrent', 'asOwnDomain']

strategy for adding new scratch notes

### dendron.copyNoteUrlRoot
- type: string
- default: none

override root url when getting note url

### dendron.linkSelectAutoTitleBehavior
- type: string
- default: slug
- options:  ['none', 'slug']

Control title behavior when using selection2link with lookup

### dendron.defaultLookupCreateBehavior
- type: string
- default: selectionExtract
- options:  ['selection2link', 'selectionExtract']

when creating a new note with selected text, define behavior for selected text

### dendron.rootDir
- type: string
- default: 

location of dendron workspace

### dendron.logLevel
- type: string
- default: info
- options:  ['debug', 'info', 'error']

control verbosity of dendron logs

### dendron.noServerMode
- type: boolean
- default: none

revert server mode

### dendron.trace.server
- type: string
- default: messages
- options:  ['off', 'messages', 'verbose']

LSP log level

### dendron.serverPort
- type: number
- default: none

port for server. If not set, will be randomly generated at startup.

