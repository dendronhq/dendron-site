---
id: 7XSSCIpMNX2SFbKc6S0RB
title: Config
desc: ''
updated: 1634822124215
created: 1631541972997
---

## Summary

This page covers conventions and rules for organizing the configuration space.  

## Conventions
1. Name configurations that change something to behave in a certain way in a _transitive verb_ form.
    - (verb) + (noun)
    - e.g.)
      - good: 
        ```js
        enableMermaid: true,
        ```
      - bad:
        ```js
        mermaid: true,
        ```
1. Be conservative and consistent about the choice of verb in the configuration names that are in the transitive verb form.
    - `enable` and `use` (or anything else) are both fine, but keep it consistent. Try to follow other namespace's choice as much as possible.
    - e.g.)
      - good:
        ```js
        ...
        enableMermaid: true,
        enableKatex: false,
        enableNunjucks: false,
        ...
        ```
      - bad:
        ```js
        enableMermaid: true,
        useKatex: false,
        activateNunjucks: false,
        ```
1. Use bare nouns only for configuration keys with values that are direct objects / literals.
    - A list of vaults, for example, should be in a key simply called `vaults`.
1. Use only positive forms for boolean configuration names.
    - good: 
      ```js
      enableTelemetry: true,
      ```
    - bad: 
      ```js
      noTelemetry: true,
      ```
1. Boolean configuration values should be required in the type definition.
    - This is to explicitly and clearly state in the configuration what the default value is.
      - It is either true or false. Even when optional, a default value is set down the line where the value is actually used. This makes it confusing to figure out what's happening unless you are familiar with the codebase.
    - Prefer this over making it an optional property and assuming a default value in the place this config is being used.
1. Configurations with values that are literals can be optional, but it is preferrable to explicitly set a sensible default value unless it is absolutely necessary to omit it to enable some kind of behavior.
    - Similar to boolean config values, if you are setting an assumed default value where the config is used, it is better to set it explicitly required in the config definition itself.

## Heuristics on when to create a new namespace
- It is unclear what is the best way to group logically similar configurations. Use the rule of thumbs below with your best judgement when creating new namespaces.
- If you anticipate that a lot of enhancement will be made to a particular area of the codebase, consider pre-emptively giving it a general namespace.
- If some area of the codebase is considerably stable and you do not anticipate it changing any time sooner, consider giving it a suitable namespace.
- If there are a handful (4-5) of singles that can be grouped into a namespace, consider grouping them into a namespace.
- Regardless of the above points, create a separate namespace if you are adding a new configuration for a _command_.
