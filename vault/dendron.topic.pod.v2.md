---
id: 7e40be03-4fa6-44db-b7cf-3ef19e67e7a8
title: V2
desc: ''
updated: 1602958663144
created: 1602958663144
stub: false
nav_exclude: true
---

# Pods V2


<img src="https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pods.png" height="300px"/>

> Pod image courtesy of [Ilana Lin](https://www.instagram.com/ilana_lin/)

Dendron refers to pods as any tool or location that is used to hold information. Tools like Evernote and Roam are pods. Social media services like Twitter and Facebook are pods. Publication destinations like static sites and Medium are pods. Everything is a pod.

Pods let you do the following:
- **import** your notes from any existing location into Dendron
- **export** your notes from Dendron to any existing location
- **publish** your notes from Dendron to any existing location

To access pods, Dendron exposes three commands:
- `Dendron: Pod Import`: imports notes 
- `Dendron: Pod Export`: export notes 
- `Dendron: Pod Publish`: publish notes 

**NOTE**: not all pods will expose all three commands. Each pod implementation can choose to implement any subset of the three commands. 

There are two types of pods:
- builtin 
- custom

Builtin pods are managed by Dendron and are available when you install Dendron. Custom pods can be developed by anyone as a `NodeJS` package and used after a user installs it in their workspace. 
