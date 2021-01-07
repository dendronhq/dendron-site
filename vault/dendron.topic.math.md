---
id: b1919663-cc48-4054-b0cf-4b26fe444907
title: Math
desc: ''
updated: 1609036928368
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

