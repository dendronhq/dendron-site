---
id: cebe5393-5da0-484c-a24a-0939f0cef768
title: Meeting Notes
desc: ''
updated: 1642007210658
created: 1599059373505
---
This is a video of keeping meeting notes in Dendron. Meeting notes are kept as **journal notes** on a per-project basis. 

<a href="https://www.loom.com/share/c04dd4b3c82a412b82b1f9f75e2291bd">  <img style="" src="https://cdn.loom.com/sessions/thumbnails/c04dd4b3c82a412b82b1f9f75e2291bd-with-play.gif"> </a>

## Example of a meeting note

- hierarchy: `meet.journal.2021.03.25`

```md
---
id: 348957d8-d9af-44d1-a734-82b719bbf5a6
title: '2021-03-25'
desc: ''
updated: 1616682394092
created: 1616645801530
---

* [[meet.journal.2021.03.25.albert-wang]]
* [[meet.journal.2021.03.25.rob]]
* [[meet.journal.2021.03.25.onboarding]]
* [[meet.journal.2021.03.25.james-bond]]
* [[meet.journal.2021.03.25.alby]]
* [[meet.journal.2021.03.25.investor]]
* [[meet.journal.2021.03.25.ashton]]
* [[meet.journal.2021.03.25.eric]]
<!-- I keep these links here to create new meetings that come up -->
* [[meet.journal.2021.03.25]]
* [[meet.journal.2021.03.25]]
* [[meet.journal.2021.03.25]]
```


## Resources

Settings and files used for the above video. 

- Configuring project [[schemas|dendron://dendron.dendron-site/dendron.topic.schema]]

```yml
- id: pro
  title: pro
  desc: ""
  parent: root
  namespace: true
  children:
    - people
    - meet
    - todo
    - retrospective
- id: people
- id: meet
- id: todo
- id: retrospective
```

- Settings in [[Dendron Workspace configuration: journal|dendron://dendron.dendron-site/dendron.ref.config.workspace#journal]]

```yml
# Within your workspace dendron.yml
workspace:
    journal:
        dailyDomain: daily
        name: journal
        dateFormat: y.MM.dd
        addBehavior: childOfDomainNamespace
```

##