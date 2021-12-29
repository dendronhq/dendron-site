---
id: 075e9806-0367-40a2-8154-2e84d5a020e2
title: '0.06'
desc: ''
updated: 1609990768070
created: 1596374871110
date: '2020-08-09'
---
Another week, another minor release. The much asked for `Rename Note` command is here, as well as a bunch of enhancements to notes and schemas. Enjoy 🌱

This release is also a reminder to fill out the [Dendron user survey](https://forms.gle/PPqe2axvwEmpXj4v5) if you haven't done so 🙏. This is a super short 3min survey that will help me plan the future growth of Dendron.

These release notes are summary of the more notable changes, for the full list, please look at our [CHANGELOG](https://github.com/dendronhq/dendron/blob/master/CHANGELOG.md)

## Commands

### Add Rename Note Command ([docs](https://www.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#rename-note))

Do you have regrets? While there are some things that you can't take back, misnaming a note should never be one of them. Dendron now lets you rename files and will update all links in all files that link to it!

![rename](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command-rename.gif)

### Add Copy Note Link Command ([docs](https://www.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#copy-note-link))

School's out so it's okay to copy notes. Use this to get the wiki-link (with title) of the current open note.

![copy note link](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command.copy-link.gif)

### Enhancements

- Show feedback on copy note link 

### Fixes

- Issue with renamed notes not being indexed 
- Issue where `doctor` doesn't backfill newly created notes'

## Notes

### Flexible Configuration for Notes ([docs](https://www.dendron.so/notes/5c213aa6-e4ba-49e8-85c5-1bdcb33ce202.html#configuration))

Notes are now as flexible as your yoga teacher. You can now customize every aspect of your `Journal` and `Scratch` notes - how they are added, their time format and even what they're called

### Add Built in Snippets ([docs](https://www.dendron.so/notes/9eca1992-7540-4d9d-97fb-328b27748b2c.html))

All the one-liners and bad jokes that you have saved for that special someone? Type them out faster than ever with built-in snippets. This updates the default settings to allow tab-based snippet completion and also initialize new vaults with some default snippets. 

![snippets](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tab-autocomplete.gif)

### Enhancements

- Copy on Create: Journal and Scratch notes will automatically copy their links to the clipboard after creation

### Fixes

- Scratch note title note being set properly 
- Not all notes indexed in sparse vaults: There was an issue where certain notes without a full hierarchy would not be indexed by Dendron. That issue has now been eliminated.
- Notes created via link not being indexed properly: Issue where sometimes new notes created using link navigation wasn't being indexed. 

## Pods

### Custom Blogging Layout ([docs](https://www.dendron.so/notes/4c0ef322-3006-405c-9a66-3134dd9649a5.html#blogging))

Sometimes you have something you just need to shout out from the rooftops. Because its likely people think that you are a crazy person if you did this, Dendron now has dedicated blogging layouts so you can blog instead! 

### Fixes

- Issue with buildpod logging 

## Schemas

### Apply Schema Description to New Notes ([docs](https://www.dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#desc))

Schemas now automatically apply their description to newly created notes that match said schema. Because life is too short to annotate all your notes all the time. 

### Enhancements

- Remove data field from new schemas: Schema notes only show you fields that are required on creation. 

## Workspace

### Enhancements

- Update index when notes are deleted outside of Dendron: We know that sometimes, it can't be helped and you'll need to work with your notes outside of Dendron. If that work is deleting notes, Dendron will now keep track of it and remove it from its lookup index as well!

## Other

### Make Dendron available on [Open VSX Registry](https://open-vsx.org/) ([docs](https://dendron.so/notes/9134f160-31a6-4ab0-a640-1fce466f9526.html#open-vsx))

Maybe you just don't like Microsoft. Maybe you want to see other people. Whatever the reason, Dendron is now available on all VS Code compatible editors like [VSCodium](https://vscodium.com/) and [Gitpod](https://www.gitpod.io/).

## Thank You

Last and most of all, a big **thanks** to all these people that contributed issues and suggestions during this release.

- [Josh Finken](https://github.com/jfinken)
- [denisdifazio](https://github.com/denisdifazio)
- Annegrim
- [Chris Na](https://github.com/buxel)

