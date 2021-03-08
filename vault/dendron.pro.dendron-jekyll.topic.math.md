---
id: 84e01690-4ea0-4b71-8cc4-c2d38e09dcf4
title: Math
desc: ''
updated: 1603589517663
created: 1602087509879
stub: false
---
You can enable math using the following options in the `_config.yml`. By default, this will be located in `{workspace}/docs/_config.yml`

```yml
enable_mathjax: true;
kramdown:
  math_engine: mathjax
```

- NOTE: If you are using the local preview, be sure to reload your server to have the changes take place.

You can now add math using the standard [mathjax](https://www.mathjax.org/) notation. 

- NOTE:  only `block level` mathjax is supported at the current time

### Example

The following 

```
$$
f(x) = sin(x)
$$
```

will render as

$$
f(x) = sin(x) 
$$

