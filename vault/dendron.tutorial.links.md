---
id: d758fe38-558c-4f20-a091-cac146a781cb
title: Working with Links
desc: ''
updated: 1614111008359
created: 1608055731373
nav_order: 1
---

## Summary

In this module, we will demonstrate how to use links and backlinks to create connections between your notes. 

### Creating a link

Lets say that you work at a small IT firm and you want to create onboarding docs for your employees. 


Create a new note using lookup called `onboarding`. Then type in the following in the note.

```
Read up on `[[`
```

The `[[` tells Dendron that you are about to create a link. Dendron will auto-complete with a matching set of closing brackets `]]` as well as give you a list of completions of existing notes.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/quickstart.completion.jpg)

We are going to create a new note instead of linking to an existing note. So type `pro.skynet` as your link. 

```
Read up on [[pro.skynet]]
```

In this case, `pro` is an alias for `projects` and `skynet` is the code name of the project. 

### Creating a note (with a link)

With your cursor somewhere inside `[[pro.skynet]]`, hit `F12`. This will create the `pro.skynet` note. Just like with lookup, Dendron automatically creates notes to links that don't exist when you navigate to them. 

You can switch back to the previous note by pressing `CTRL-Tab`

- TIP: `F12` is not the most convenient shortcut for this often used action. You can switch it to `CTRL-ENTER` or something more convenient by updating the [[keybindings|dendron.topic.keybindings#add-reset-and-remove]]

### Adding a link alias

You can add an alternative title to the link by creating an alias. For example, add `the project|` to your link to change the name in the preview, (If you've closed your preview, you can open it using `CMD+SHIFT+P` or `WINDOWS+SHIFT+P`).

```
Read up on [[the project|pro.skynet]]
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/quickstart.alias.jpg)

### Navigating links

To go back to the previous page, you can either use `CTRL-TAB`, hit `F12` over the link, click the link on the preview, or click the link inside the note while holding down the `option` or `ctrl` key (operating system dependent). 

The takeaway here is that you have lots of ways to navigate links in Dendron. 

### Backlinks

When your back on `pro.skynet`, open the backlinks panel on the bottom left section of your sidebar. The backlinks panel shows you all notes with links that point to the current note. This is useful for helping to establish context.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/quickstart.backlinks.jpg)

### Note References

Inside `pro.skynet`, copy and paste the following snippet.

```md
## Summary

Skynet is a friendly bot to help humans do more

## Principles
- [[pro.skynet.principals]]

```

Navigate to `pro.skynet.principals`. In this new note, write the principles for skynet. 

```md
1. Help humans do more
2. Be nice to humans
3. Don't overthrow humanity
```

While its nice to have principals in its own section, it's something you might want to include in the main project note. To embed a note into another note, Dendron uses [[note references|dendron.topic.refs]]. You can create a note reference by using `CMD|CTRL+SHIFT+R` while inside a note. Go ahead and do that now and use `CTRL-TAB` to switch back to `pro.skynet`. Now paste the reference and remove the original wiki-link.

```md
## Summary

Skynet is a friendly bot to help humans do more

## Principles
![[pro.skynet.principals]]

```

You should have a screen like the one below.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/quickstart.refs.jpg)

### Note References (continued)

Note references are extremely powerful and help you re-use your notes in a variety of places. To demonstrate, go back to the `pro.skynet.principals` and make the following modifications to the text so that each numbered bullet becomes its own header.

```md
## Help humans do more

Skynet should help humans be the best human they can be. Skynet will do this using ultrasophisticated AI to help humans realize their true potential.

## Be nice to humans

Skynet should know that humans are delicate organic lifeforms and treat them as such. Skynet should not hurt their fragile egos or make humans feel bad.

## Don't overthrow humanity

Skynet should not launch nuclear missles or send robots from the future to come back to the past and wipe out humanity. 
```

Now highlight the first header and use `CMD|CTRL+SHIFT+R` to create another note reference.

Go back to `pro.skynet`. Notice how the note ref has updated with the latest text. 

Now copy your newly created reference and paste it underneath.
- notice that the newly created reference only has the contents from the newly created header
- notice that the newly created reference doesn't show the actual header itself (you can change this behavior by removing the `,1` inside the reference)

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/c62f82859545444a9786abaa36426b62" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>


Note references are incredibly powerful. You can do additional things like enter a range of headers to do a reference of, include a reference within a reference, and even reference multiple pages using a wildcard pattern. You can see detailed examples of all these functions in the [[docs|dendron.topic.refs]].

### Relative Links

Sometimes, you don't want to embed a note but just link to a particular section of a given note. You can do that with Dendron relative links. The syntax to do so is `[[{link-name}#{link-header}]]`. Dendron will create a relative link automatically if you select the header and use `CMD|CTRL+SHIFT+C` to create a link (if you don't have a header selected, Dendron will create a regular link to the whole page). When you navigate to a regular link, Dendron will scroll to that specific section of the page.

### Link Previews

Something to point out is that you can preview a link by using your mouse to hover over it. This even works for note references. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/quickstart.links-preview.jpg)

### Non-Markdown Links

 ![[dendron.topic.links#other-links,1]]

### Files

At the end of this module, you should have the following files in your vault

```
.
└── vault
    ├── dendron.md
    ├── dendron.welcome.md
    ├── hello.md
    ├── hello.world.md
    ├── lets.go.deep.md
    ├── onboarding.md
    ├── pro.skynet.md
    └── pro.skynet.principals.md
```

### Next
- [[Publishing your notes|dendron.tutorial.publishing]]