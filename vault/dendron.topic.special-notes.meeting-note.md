---
id: x1d18w46rxu34tksct3d4lh
title: Meeting Note
desc: 'Meeting notes help you keep track of meetings by providing a structured default to capture notes, attendes and next steps'
updated: 1657070914083
created: 1657070789093
---

## Summary

{{fm.desc}}

## Getting Started

To create a meeting note, run the [[Create Meeting Note|dendron://dendron.dendron-site/dendron.ref.commands#create-meeting-note]] command


### The Meeting Note Template

When you first run the `Create Meeting Note` command, a template and a schema will be created for you. This template will be applied to new meeting notes whenever you create a new meeting note. You can fully customize the template by changing the contents of the `dendron.templates.meet` note.

The template gets applied to your meeting notes because of the [[schema|dendron://dendron.dendron-site/dendron.topic.schema]] that gets auto-generated the first time you run the `Create Meeting Note` command. By default, this will apply the meeting template to all notes that follow the patterns `meet.yyyy.mm.dd`, or `meet.yyyy.mm.dd.suffix` - for example, `meet.2022.04.01` or `meet.2022.04.01.weekly-planning`. If you want to change the pattern of your meeting note names and still want the template to apply, you can edit the schema definition in the file `dendron.meet.schema.yml`. 
