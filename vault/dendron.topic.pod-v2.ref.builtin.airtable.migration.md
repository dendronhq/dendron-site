---
id: kklb2t8tvi0bueq11yk8zxk
title: Migration
desc: ''
updated: 1647969768600
created: 1647969768600
---

## Migrating to 0.87.0

In this verison, we updated the airtable pod format to be a dictionary instead of a single value.
To migrate, run the following doctor command in all affected hierarchies

![[dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export#side-effects,1:#*]]

After doctor has run, it will convert all scalar airtable destinations to the new value. Note that this doesn't fix any `linkedRecord` attributes. 
If you have `linkedRecords`, you need to manually update the pod config with a [[podId|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export#linkedrecord]] 
