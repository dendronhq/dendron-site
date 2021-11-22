---
id: 37df43ee-1c74-4def-af2c-72fe80c728f4
title: 6 Dendron Design System
desc: ''
updated: 1621865610083
created: 1605539111635
---


## Goals

In order to keep a consistent UI across Dendron apps:
Create a design-system of UI components and theme objects, hosted on npm that can be installed and used across all Dendron applications.

## Use Cases
- When building out a new React based Dendron project, instead of needing to create a components folder and create all your own local components per project, you can instead install ie. `yarn add dendron-design-system` and start building the app using these components like lego blocks.

- Creating a consistent UI across apps. Inevitably when there are local component folders in each app with the same components (ie. Button) there will be inconsistencies in styles / functionality which can be confusing for users. A good design system creates a consistent UI across apps.

- Updates also apply across apps. When a component is updated, simply publish a new version on npm and upgrade all apps to the `latest` version.

- Speed up development. 
> Research-backed studies suggest reusing code can yield 42–81% time savings and boost productivity by 40%.
[Storybook](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/conclusion/)

## Proposal

- Tech Stack for Design System. 
    - TypeScript
    - React (compatible with all current and upcoming Next.js apps)
    - Storybook
    - Chakra-UI (already is use within Dendron and a very popular and well made UI library)
    - npm


- Start by converting the small style guide Dendron has on this website to a design system hosted on npm. 
- Create theme with colors, typography etc.
- Create UI component variants (ie, button, input, dropdown etc.)

## Example
WIP: I will get an example repo setup and update. 


