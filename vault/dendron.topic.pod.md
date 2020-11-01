---
id: 66727a39-d0a7-449b-a10d-f6c438185d7f
title: Pods
desc: ''
updated: 1604210875776
created: 1602958663144
---

# Pods 

<img src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pods.png" height="300px"/>

> Pod image courtesy of [Ilana Lin](https://www.instagram.com/ilana_lin/)

Dendron refers to pods as any tool or location that is used to hold information. Tools like Evernote and Roam are pods. Social media services like Twitter and Facebook are pods. Publication destinations like static sites and Medium are pods. Everything is a pod.

Pods let you do the following:
- **import** your notes from any existing location into Dendron
- **export** your notes from Dendron to any existing location
- **publish** your notes from Dendron to any existing location

To access pods, Dendron exposes three commands:
- `Dendron: Import Pod`: imports notes 
- `Dendron: Export Pod`: export notes 
- `Dendron: Publish Pod`: publish notes 

**NOTE**: not all pods will expose all three commands. Each pod implementation can choose to implement any subset of the three commands. 

## Pod Methods

### Import

Importing lets you bulk import notes from a given source and into Dendron. The notes are formatted and converted to Dendron's hierarchal structure.

### Export

Exporting lets you bulk export notes from Dendron into another destinations. The notes will be formatted and converted to the native format of the destination. 

### Publish

Publishing lets you take one note and output it into a different format/destination. 

For example, you might want to use our [[markdown pod|dendron.topic.pod.markdown]] to take a note with [[note references|dendron.topic.refs]] and publish it as a regular markdown note to use in a github issue or another tool.

Future uses of the **publish** method will be taking a note and publishing it to social media (eg. twitter, facebook, linkedin), publishing it to Gmail, and publishing to destinations like Medium and dev.to.


## Types of Pods
There are two types of pods:
- builtin 
- custom

((ref: [[dendron.topic.pod.builtin]]#builtin pods:#*))
((ref: [[dendron.topic.pod.custom]]#custom pods:#*))
