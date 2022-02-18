---
id: WLDbhcr3EHlN3sSquMMLk
title: publishByDefault
desc: 'Set this hierarchy to be published by default.'
updated: 1645178360711
created: 1645178123503
---

- type: `boolean`
- default: `true` 
- required: `false`

## Description
{{fm.desc}}

If set to true, all notes under the hierarchy will be published.

If set to false, only the notes under the hierarchy that have the frontmatter property `published` set to `true` will be published.

If set as a hash, you can further specify this setting on a per-vault basis. The key is the name of the vault and the value is a boolean value.

## Example

> 1. Make all notes under the hierarchy `finance.*` be published by default, if note is in a vault named `public`, but not in a vault named `private`.
> 2. Make all notes under the hierarchy `school.*` be published by default, regardless of the vault.

```yml
publishing:
  hierarchy:
    finance: # for the hierarchy `finance.*`
      publishByDefault:
        public: true # publish by default in `public` vault
        private: false # don't publish by default in `private` vault
    school: # for the hierarchy `school.*`
      publishByDefault: true # publish by default regardless of the vault
```
