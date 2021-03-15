---
id: 3e519113-5820-4a84-bef8-85103a7b296b
title: Builtin Pods
desc: ''
updated: 1615695471337
created: 1603306628504
toc: true
---

## Summary
Builtin pods are managed by Dendron and are available when you install Dendron. They can be used with either the `dendron-cli` or from within the Dendron extension to import/export/publish your notes from/to anywhere

## JSON Pod

![[dendron.topic.pod.builtin.json#summary:#*]]

## Markdown Pod

![[dendron.topic.pod.builtin.markdown#summary,1:#*]]


## Experimental Pods
These pods are subject to change at any time

### GitPod

### dendron.gitpunchard
- type: export

Create a vega punchard visualization of your commits. This will output two files at the destination:

- commits.csv
- index.html

You can then see this using a HTML server.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Vega-Lite_Bar_Chart-2.jpg)

- Instructions:
```sh
dendron exportPod  --wsRoot . --podId dendron.gitpunchard --config "dest=/tmp/vega" 
cd /tmp/vega
python -m http.server
```