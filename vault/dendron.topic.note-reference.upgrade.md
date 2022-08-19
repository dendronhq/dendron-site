---
id: veb7kf40uzhe861ly8rbzg0
title: Upgrade
desc: ''
updated: 1660599433645
created: 1660599261941
---

### Upgrading from 107 or prior

[[enableSmartRefs|dendron://dendron.dendron-site/dendron.topic.note-reference.config.enable-smart-refs]] is being removed as it will always be enabled by default. 

If you currently are making use of note references, replace all occurences of references that have a header

```
![[foo#header]]
```

with 

```
![[foo#header:#^end]]
```

to preserve the same behavior.

You can see the [better note references RFC](https://docs.dendron.so/notes/9hoksdbfuv0a1vaffla7dv0) for further details on the new syntax.
<!-- [[47 Better Note References|dendron://dendron.docs/rfc.47-better-note-references]] -->