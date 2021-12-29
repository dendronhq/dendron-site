---
id: H9HVUUG1Z9ws2ngofKyWt
title: V2
desc: ''
updated: 1638946098806
created: 1638942415808
published: false
---

<img src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pods.png" height="300px"/>

> Pod image courtesy of [Ilana Lin](https://www.instagram.com/ilana_lin/)

Dendron refers to pods as any tool or location that is used to hold information. Tools like Evernote and Roam are pods. Social media services like Twitter and Facebook are pods. Publication destinations like static sites and Medium are pods. Everything is a pod.

Pods let you do the following:

- **import** your notes from any existing location into Dendron
- **export** your notes from Dendron to any existing location

To access pods, Dendron exposes two commands:

- `Dendron: Import Pod`: imports notes 
- `Dendron: Export Pod V2`: export notes 

**NOTE**: not all pods will expose both import and export commands. Each pod implementation can choose to implement any subset of the two commands. 

## Pod Methods

### Import

Importing lets you bulk import notes from a given source and into Dendron. The notes are formatted and converted to Dendron's hierarchal structure.

### Export

Exporting lets you bulk export notes and snippets from Dendron into another destinations. The notes will be formatted and converted to the native format of the destination.

## Types of Pods

There are two types of pods:

- builtin: created by Dendron 
- remote: created by third parties

![[dendron.topic.pod.builtin#summary,1:]]
![[dendron.topic.pod.custom#summary,1:]]

