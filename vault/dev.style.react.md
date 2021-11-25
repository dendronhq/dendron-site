---
id: lqASeWbRXobLtsuCcYsXX
title: React
desc: ''
updated: 1632107476274
created: 1632107173649
---

## Summary

React-specific style guide and best practices.

## React

### use functional component

This should go without saying, functional components are preferred over class components.

In the case you need to perform side effect when a component mount/unmount, use `useEffect` with an empty dependency list.

```tsx
const MyComponent = () => {
    useEffect(() => {
        // do something when the component mount
        return () => {
            // do something when the component unmount
        };
    }, []);
    return <div>{Hello}</div>;
};
```

### no need to `import React` for jsx

From [React 17](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html), it's no longer neceessary to `import React` in order to use JSX.

### use named imports

Named import enables bundler, like [webpack](https://webpack.js.org/guides/tree-shaking/) do things like tree-shaking that optmize unused code out of the compiled bundle. This works for source files and for dependencies(like lodash)

Tree-shaking can not be performed on default import.

```tsx
// bad
import Bootstrap from "react-bootstrap";

const component = () => <Boostrap.Button></Boostrap.Button>;
```

```tsx
// good
import { Button } from "react-bootstrap";

const component = () => <Button></Button>;
```

### use named exports

Likewise, you should use named exports over default exports.
Also, named exports enable the editor to prompt useful suggestions of the potential import.

### use Hooks

Hooks are awesome for separating logic from view. It's often unnecessary to create a component just to wrap another component. Use hooks instead!

```tsx
// bad
class WrapperComponent extends React.Component {
  useEffect(() => {
    // ...
  }, [])
  render() {
    return <div>{this.props.children}</div>;
  }
}
```

```tsx
// good
const useMagic = () => {
    useEffect(() => {
        // ...
    }, []);
};
```

### use React Fragment

It's generally unnecessary to nest things in plain `<div>`s. Most of the time the usecase can be handled by a `<Fragment>`, or `<>` for short.

```tsx
// bad
<div>
    <header></header>
    <main></main>
    <footer></footer>
</div>
```

```tsx
// good
<>
    <header></header>
    <main></main>
    <footer></footer>
</>
```
