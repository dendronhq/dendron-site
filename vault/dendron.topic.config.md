---
id: eea2b078-1acc-4071-a14e-18299fc28f48
title: Config
desc: ''
updated: 1615241271952
created: 1595261816971
---

Dendron configuration currently lives in two places:
- Dendron config: `dendron.yml` located at the root of your workspace
- VSCode config: `dendron.code-workspace`: the vscode workspace file 

## Dendron Config

### generateChangelog
- default: false
- status: 🚧

Turn on to enable [[changelogs|dendron.topic.publishing.changelogs]]

### lookupConfirmVaultOnCreate

With this set, you can pick the vault for new notes.  

### mermaid
- default: false

Turn on to enable [[mermaid support|dendron.topic.markdown#diagrams]]

### useContainers
- default: false

Turn on to enable [remark-container support](https://github.com/Nevenall/remark-containers)

### useFMTitle

When set to true, use frontmatter as title when publishing and in the preview.

### useNoteTitleForLink

If true, use the note title when displaying naked links

- NOTE: this is not yet fully supported for multi-vault. specifically, cross vault links are not yet supported

### usePrettyRefs
- default: true

If set to false, don't use [[pretty refs|dendron.ref.terms#pretty-ref]]

### vaults

Tracks [[vaults|dendron.concepts#vaults]] for the workspace. You shouldn't have to manually edit this value. This is updated automatically when you first initialize a workspace and when you add or remove vaults to your workspace.

#### Vault properties:

##### fsPath
- file path to vault

##### name
- default: last component of `fsPath`

vault name 

##### visibility?
- choices: "private|public"

If set to private, notes in this vault will not be published regardless of any other configuration. This takes precedences over everything.

##### remote?
- added property for [[remote vaults|dendron.concepts#remote-vault]]
- properties
    - type: currently only `git` is supported (in the future, we might add additional types)
    - url: url to github repo


#### Local Vault Example
```yml
vaults:
    - fsPath: vault
```


#### Remote Vault Example
```yml
vaults:
    -
        fsPath: dendron-vault
        remote:
            type: git
            url: 'git@github.com:kevinslin/dendron-vault.git'
        name: dendron
    -
        fsPath: yc-vault
        remote:
            type: git
            url: 'git@github.com:kevinslin/yc-vault.git'
        name: yc
```


## VSCode Config
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
- default: y.MM.dd

Date format used for journal notes. Use [luxon style formatting](https://moment.github.io/luxon/docs/manual/formatting.html)

### dendron.defaultJournalAddBehavior
- type: string
- default: childOfDomain
- options:  ['childOfDomain', 'childOfDomainNamespace', 'childOfCurrent', 'asOwnDomain']

strategy for adding new journal notes

### dendron.defaultScratchName
- type: string
- default: scratch

Name used for scratch notes. Date format used for scratch notes. Use [luxon style formatting](https://moment.github.io/luxon/docs/manual/formatting.html)

### dendron.defaultScratchDateFormat
- type: string
- default: y.MM.dd.HHmmss

date format used for scratch notes

### dendron.defaultScratchAddBehavior
- type: string
- default: asOwnDomain
- options:  ['childOfDomain', 'childOfDomainNamespace', 'childOfCurrent', 'asOwnDomain']

strategy for adding new scratch notes


### dendron.defaultTimestampDecorationFormat: 
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

### dendron.dendronDir
- type: string
- default: 

location of dendron configuration

### dendron.logLevel
- type: string
- default: info
- options:  ['debug', 'info', 'error']

control verbosity of dendron logs

### dendron.trace.server
- type: string
- default: messages
- options:  ['off', 'messages', 'verbose']

LSP log level

### dendron.serverPort
- type: number
- default: none

port for server. If not set, will be randomly generated at startup.

