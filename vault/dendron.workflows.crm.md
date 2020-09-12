---
id: de93124b-c23b-4028-9e2c-6de6a56ca5e9
title: Crm
desc: ''
updated: 1599922711522
created: 1599922711522
stub: false
published: false
---

# CRM

Dendron can be used as a CRM to keep up with people and conversations. This is one way you could set it up. 

## Schemas
```yml
- people hierarchy: people.{name}
- meet hierarchy: meet.journal.{date}.hint
```

i have a section in every meeting note for people that are involved
```yml
# notes
- ...

# people
- [[people.jojanaho]]
```
