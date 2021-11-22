---
id: 1bb018db-8f8e-46c8-ac4a-4baf4813b0c8
title: 6 Design System
desc: ''
updated: 1617385687519
created: 1617383758295
---

## Goals

In order to keep a consistent UI across Dendron apps:
Create a design-system of UI components and theme objects, hosted on npm that can be installed and used across all Dendron applications.

## Use Cases

-   When building out a new React based Dendron project, instead of needing to create a components folder and create all your own local components per project, you can instead install ie. `yarn add dendron-design-system` and start building the app using these components like lego blocks.

-   Creating a consistent UI across apps. Inevitably when there are local component folders in each app with the same components (ie. Button) there will be inconsistencies in styles / functionality which can be confusing for users. A good design system creates a consistent UI across apps.

-   Updates also apply across apps. When a component is updated, simply publish a new version on npm and upgrade all apps to the `latest` version.

-   Speed up development.
    > Research-backed studies suggest reusing code can yield 42–81% time savings and boost productivity by 40%.
    > [Storybook](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/conclusion/)

## Proposal

-   Tech Stack for Design System.

    -   TypeScript
    -   React (compatible with all current and upcoming Next.js apps)
    -   Storybook
    -   ~~Chakra-UI (already is use within Dendron and a very popular and well made UI library)~~
    -   Ant Design [Ant Design](https://ant.design/components/overview/)
    -   npm

-   Start by converting the small style guide Dendron has on this website to a design system hosted on npm.
-   Create theme with colors, typography etc.
-   Create UI component variants (ie, button, input, dropdown etc.)

## Ant Design

Ant Design is a mature library that has a lot of sub-projects and related projects. Navigating through the eco-system Ant Design newcomer can be overwhelming to decide what the best way to plan your app is.

For example you have here the [core React Library](https://ant.design/docs/react/introduce).

-   But when reading their [theming docs](https://ant.design/docs/react/customize-theme), the first references to sub libraries are already creating the need to make some important decisions.

ie Either create all of your theme using the default.

### Theming

Ant Design gives 4 options to [customize-theme](https://ant.design/docs/react/customize-theme) .

1. [Customize-in-webpack](https://ant.design/docs/react/customize-theme#Customize-in-webpack)
2. [Customize-in-Umi](https://ant.design/docs/react/customize-theme#Customize-in-Umi)
3. [Customize-in-create-react-app](https://ant.design/docs/react/customize-theme#Customize-in-create-react-app)
4. [Customize-in-less-file](https://ant.design/docs/react/customize-theme#Customize-in-less-file)

#### Customize-in-webpack

This could actually be the best option as loading directly into webpack is said in the docs to have potential performance improvements.
https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f

And considering that Next.js uses Webpack 5 & [allows for a custom-webpack-config](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config)

#### Customize-in-Umi

This only seems to be an option if you are using Ant Design Pro, which is their out of the box solution including Routing etc.

#### Customize-in-create-react-app

Not an option as Dendron uses Next.js across the board.

#### Customize-in-less-file

Also a viable option, but IMO less attractive than loading directly into webpack because
A) Need to use css less syntax which is not well known among developers today.
B) Can't use JavaScript Objects for theming which is quite convenient.
C) Potentially less performant

## `dendron-design-system` Usage

1. Add all theme files with [design tokens](https://spectrum.adobe.com/page/design-tokens/) to `dendron-design-system`.
2. Allow package to be consumeable, either on `npm` or within the Dendron monorepo.
3. In each dendron Next.js application, import the theme from `dendron-design-system`.
4. Load The theme into webpack via `next.config.js`

Example:
Psuedocode (not yet tested)

```javascript
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx

import {theme} from 'dendron-design-system'

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
+         modifyVars: theme,
+         javascriptEnabled: true,
+       },
+     },
    }])

    return config
  },
}
```

## Example

Currently W/ Chakra-UI, update to Ant-Design upcoming.

https://github.com/dendronhq/dendron/tree/master/packages/dendron-design-system
