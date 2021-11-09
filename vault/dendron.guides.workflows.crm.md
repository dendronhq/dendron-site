---
id: de93124b-c23b-4028-9e2c-6de6a56ca5e9
title: CRM
desc: ''
updated: 1620084058419
created: 1599922711522
stub: false
published: false
---
Dendron can be used as a CRM to keep up with people and conversations. 

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/b3c0b7577f2d4f2f86625a26c27d5bb7" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Schemas

- people.schema.yml

```yml
- id: people
  title: people
  desc: ""
  parent: root
  namespace: true
```

- meet.schema.yml

```yml
version: 1
schemas:
- id: meet
  parent: root
  children:
    - journal
- id: journal
  children:
    - year
- id: year
  title: year
  pattern: "[0-2][0-9][0-9][0-9]"
  children: 
    - month
- id: month
  title: month
  pattern: "[0-9][0-9]"
  children: 
    - day
- id: day
  title: day
  pattern: "[0-9][0-9]"
  namespace: true
```

## Notes

I have a section in every meeting note for people that are involved

- eg. meet.journal.2020.09.12.camping-trip

```yml
# People
- [[people.alice]]
- [[people.bob]]

# Notes
- get supplies for camping trip
```

## Benefits

- whats nice with this approach is that every person inside the `people` hierarchy will have backlinks to all meetings

## Future Improvements

- [ ] create schema template for both `people` and `meet` notes

