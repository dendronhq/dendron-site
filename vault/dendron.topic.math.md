---
id: b1919663-cc48-4054-b0cf-4b26fe444907
title: Math
desc: ''
updated: 1617734746489
created: 1609036713270
---
Dendron uses [Katex](https://katex.org/) to render math.

- Expressions inside `$...$`  will be rendered using inline format.
- Expressions inside `$$...$$` will be rendered using block format.

## Examples

### Inline

```
$f(x) = sin(x)$
```

will render as 

$f(x) = sin(x)$

### Block

```
$$
f(x) = sin(x)
$$
```

will render as

$$
f(x) = sin(x) 
$$


## Cook

### Turn off inline rendering

Due to inline rendering, lines with `$...$` will be rendered using Katex. To turn off this behavior, add the following to your workspace settings

```json
"markdown-preview-enhanced.mathRenderingOption": "None",
```
