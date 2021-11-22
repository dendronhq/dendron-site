---
id: LAUb8WcM8rmjxJrR
title: Arch
desc: ''
updated: 1637460498647
created: 1627859879590
---

## Summary

You can see a video walkthrough of how we generate notes for publishing and the static export [here](https://youtu.be/Uyyb_s74lzM)

## Design

The Dendron NextJS Template is meant to be used with [[dendron.topic.pod.builtin.nextjs]]. 

The NextJS pod serializes the subset of notes that the user wants to publish. Running `next export` will generate a static page for each note published. 

- NOTE: currently, when you run `dendron publish export`, Dendron will generate metadata for all published notes and then run `next export` on the resulting metadata to generate the static pages. NextJS will us all available cores to generate pages - this scales well for large sites (eg. rough benchmark with 10K notes compiled in under 1min on a m1 mac mini) but it does result in some overhead when compiling smaller pages 

A published Dendron site is a hybrid of static site and dynamic web app. Each page is statically generated but any subsequent page navigation (via menu or lookuup) is then dynamically fetched using javascript.

- NOTE: currently, the published site is not optimzied and will load ALL notes before rendering to fill out the nav bar and other UI elements. we are aware of this issue and are implementing a fix so that the initial page load can render without any external fetches
