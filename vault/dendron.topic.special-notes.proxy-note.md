---
id: ns09dicjf4pz3lcu8aowbfa
title: Proxy Note
desc: 'Proxy notes are notes that contain special property in their frontmatter to specify that they are a proxy for a specific uri'
updated: 1661749933894
created: 1660898704360
---

> Proxy notes are a #stage.seed feature.

> Proxy notes currently only support web addresses.

## Summary

{{fm.desc}}.

## Use Case

The core features of Dendron are built to make managing and navigating through notes easily. 
While external resources can be linked with the Markdown link syntax, it is hard to navigate and manage them in a straightforward manner.

Proxy notes are a way to encapsulate external resources in the form of a Dendron note so that they could also benefit from the useful features that Dendron offers to navigation and manage notes.

By creating a note that acts as a proxy to an external resource, you can:
- organize external resources in a hierarchical structure using dot notation
- look them up using [[dendron.topic.lookup]]
- create links to them using the [[wikilink|dendron://dendron.dendron-site/dendron.topic.links.wiki-link]] syntax in other notes
- open the proxy notes and check their [[backlinks|dendron.topic.links.backlink]]
- and [[refactor|dendron.topic.refactoring]] them

## Getting Started

### Creating a proxy note
Proxy notes are simply regular notes that have the frontmatter property `uri`.

Create a note and add the frontmatter property `uri`, and set its value to be a link to an external resource.

### Opening a proxy note
When a note is recognized as a proxy note, Dendron will attempt to open the link specified in the `uri` frontmatter directly using your system's default application for that resource type when you use the [[dendron.ref.commands.goto]] command.

To open the note itself in VSCode, use the [[Go to Note|dendron://dendron.dendron-site/dendron.topic.navigation#go-to-note]] command instead.

## Example

This is a hypothetical example of how to use proxy notes to manage your web browser bookmarks.

For the sake of demonstration, let's say you want to manage these set of web links:

```
## Info about Dendron
- https://wiki.dendron.so
- https://docs.dendron.so

## Recipe websites
- https://www.very-good-food.com
- https://www.cooking-tips.net

## Work stuff
- https://internal-docs.my-company.com
- https://public-docs.my-company.com
```

1. Create notes for each of the links.

For instance, 
- `[[proxy.dendron.wiki]]` for `https://wiki.dendron.so`
- `[[proxy.dendron.docs]]` for `https://docs.dendron.so`
- `[[proxy.cooking.very-good-food]]` for `https://www.very-good-food.com`
- `[[proxy.cooking.cooking-tips]]` for `https://www.cooking-tips.net`
- `[[proxy.my-company.internal-docs]]` for `https://internal-docs.my-company.com`
- `[[proxy.my-company.public-docs]]` for `https://public-docs.my-company.com`

2. Use [[Go to Note|dendron://dendron.dendron-site/dendron.topic.navigation#go-to-note]] to open the notes and add memos to them.

Now that you have created proxies these links as notes, you can treat them just like regular notes.

3. Add wikilinks to them in your note.

For instance,

```
## Personal
- [ ] go to [[very good food|proxy.cooking.very-good-food]] and pick something out to eat tomorrow

## Work
- [ ] make sure [[public-docs|proxy.my-company.public-docs]] is up to date before the presentation.
```

4. Open links when you need them.

When you get to the task listed above, open those links with your system default application by placing the cursor above the wikilink and using the [[dendron.ref.commands.goto]] command.