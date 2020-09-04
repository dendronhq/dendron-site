---
id: 683740e3-70ce-4a47-a1f4-1f140e80b558
title: FAQ
desc: ''
updated: 1595952505025
created: 1595952505025
nav_order: 6
---
# FAQ

All the questions we thought you might ask. 

## General

### What is a Dendron?

A Dendron is many things. 

1. Dendron is the greek word for tree. It's a reference to the hierarchal note taking that Dendron(3) enables. 
2. Dendron is another word for [dendrite](https://en.wikipedia.org/wiki/Dendrite) which is an extension of the nerve cell that sends and receives signals in the brain. Think of Dendron(3) as a digital nervous system that helps you consolidate all the information that you care about in the fastest and most efficient way possible.
    ![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Neuron_Hand-tuned.svg/2880px-Neuron_Hand-tuned.svg.png)
    - Image by Quasar Jarosz at English Wikipedia
3. Dendron is a local-first, markdown based, hierarchical note taking tool. It is meant to help you organize, manage, publish, and collaborate on knowledge bases of any size.

### How is Dendron different from X note taking tool?

Substitute X with `roam|obsidian|foam|one note|evernote|...`

Dendron is focused on helping you **organize your notes inside your knowledge base**.

All note taking tools (try to make it) easy to get notes in. Its getting it back out again that's hard and it **becomes harder** as you get more notes.

Whether you are using notebooks tags, or backlinks, once you have more than a few hundred notes, you'll need to have some sort of structure in place (eg. naming convention, hierarchy, etc) to keep track of it. 

Dendron is a highly opinionated note taking tool that focuses on **hierarchal note taking**. It provides the freedom of Roam's *every note exists everywhere philosophy* while layering on top **flexible hierarchies** to keep track of it all. 

While Dendron works with knowledge bases of any size, it really shines once you've accumulated a few hundred notes. I created it to handle my personal knowledge base of 20k+ markdown notes - Dendron lets me track and find any specific note in it in seconds.

### How does Dendron help me track my notes?

1. Dendron organizes and collapse all your  notes into managable chunks using [[hiearchies |dendron.topic.hierarchies]].
2. Dendron helps you manage your hiearchies using [[schemas | dendron.topic.schema ]]
3. Dendron gets out of your way when your working with your notes during [[lookup |dendron.topic.lookup]]

Dendron's secret sauce is that it provides the necessary tooling for you to work with hierarichal notes. While hierarchies have traditionally (and justifiably) gotten a bad, I would argue that this is because the **tooling** around hierarchies were bad, not because hierarchies themselves are bad. 

Hierarchies are one of the most effective ways that **both humans and computers** process large amount of information (there's a reason why almost every database is built from a variation of the [b-tree](https://en.wikipedia.org/wiki/B-tree)). You can find further details about hierarchies in this [blog post](https://www.kevinslin.com/notes/e1455752-b052-4212-ac6e-cc054659f2bb.html)

### Is Dendron Free? Will it stay free?

Dendron, the client, is free and will always remain free. It is also open source so anyone is free to make their own fork of Dendron.

That being said, I'm all in on Dendron and this is my full time gig. I want to make sure that developing Dendron remains sustainable. To that end, I plan on introducing value add server side functionality that folks may pay for. Examples of paid for features include: 

- private hosting (for folks who want to publish but not use github pages or want to add authentication)
- enterprisy things 
    - eg. on premise installations of Dendron with single sign on, active directory, and fine grained permissions
- offering private subscription based vaults (eg. think [substack](https://substack.com) but having people subscribe to vaults instead of newsletters )
- server side IFTTT like functionality (eg. everytime I add an entry to airtable, add a note to Dendron)

Paid for features will be 100% optional and will not be necessary for any client side functionality in Dendron.

## Working with Notes

### Why markdown?

Markdown lets you write text in a simple human readable notation that is platform independent. You don't need to have microsoft word to read a markdown file and now a days, all new note taking tools support importing and displaying markdown.

For more context, you can see the original markdown declaration [here]( https://daringfireball.net/projects/markdown/) 

### Can I use Dendron with existing notes?

You can use Dendron with existing repositories of markdown notes.

Open the `Command Bar` in vscode and use the `Dendron: Change Workspace` command. It will ask you for a folder path as input.

Dendron will create a `dendron.code-workspace` file in specified directory and then open the workspace (if a workspace file already exists, it will use that). It will also create a `root.md` file in that directory if it doesn't exist (currently this is part of the internal working of dendron).

Dendron **does not** delete or overwrite any files during the **Change Workspace** operation.

### How do I save?

Dendron automatically saves when you change focus (switch tabs or applications). You can also manually save using `Cmd+S` or `Ctrl+S` depending on your operating system

### How do I go back to the previous note?

There are 3 ways to go back to my previous note: 
1. `ctrl-tab` (go to previous tab)
2. click on the previous tab
3. using the open editors pane 

- NOTE: to have more than a single tab show, you need to have the following settings
```json
{
    "workbench.editor.enablePreview": false,
    "workbench.editor.showTabs": true
}
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/faq.go-back.gif)

## Working with Schemas

## What is the deal with schemas? Do I need to use them?

The short answer is no, you don't **need** to use schemas. That being said, schemas can help you manage your notes, especially as you collect more of them.

If you're familiar with typescript - Dendron schemas are similar to the types offered by typescript. You can compile your typescript code into javascript even if the types don't match (subject to your tsconfig). Types help make your projects maintainable, especially as they grow.

Currently, the only thing Dendron will do is show you an indicator if your schema doesn't match. In the future, we'll have a strict mode where we will actually prevent you from creating notes that don't match your schema.

Schemas at the end of the day help you construct consistent hierarchies for your notes. Consistent hierarchies alleviate the cognitive overhead of needing to understand and track N things where N can be very big. instead, you can construct a single schema that encompasses the common areas of all N things.

This allows you to quickly reference anything within your hierarchy because they all have the same shape. It also helps with understanding a topic - I (Kevin, Dendron author) find my schema for a domain tends to reflect my mental model for said domain as well.

For example, I'm using nodejs and need to access a file. I have no idea what the builtin/recommended library for file access is. Instead of having to dig up [fs-extra](https://www.npmjs.com/package/fs-extra), i can navigate to `l.node.file` and see my notes on the best way to work with files. You can replace node with any other programming language. now i have a general way of referencing file access for all languages without needing to remember the specific implementation detail of any of them.

## Other

### Can I use a dark theme for the markdown preview?

Yes. There's a setting called `markdown-preview-enhanced.previewTheme` that you can set which has a list of default themes, including dark themes. 

### Can I customize the markdown preview CSS?

Yes. Read [this](https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css) for more information.

### Is there a list of keyboard shortcuts I can see? 

Dendron has a list of keyboard shortcuts that you can access using `Dendron: Show Help` command. Note that these only show the commands that come with the Dendron Plugin but not its bundled extensions. We currently have an open [issue](https://github.com/dendronhq/dendron/issues/148) to list all shortcuts on one page. 

### Why are there '+' signs next to the notes in the Tree View?

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/faq.plus-sign.jpg)

The reason you see this is because dendron will create [stub](https://www.dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#stubs) notes when creating notes that have parents that don't exist. These notes are placeholders and will only be visible in the Dendron Tree View with a `+` sign next to the name. The reason we do stubs is because we don't want to litter your file system with empty files. Stubs are a compromise - they let you see the hierarchy of your newly created notes without forcing you to create intermediary files.