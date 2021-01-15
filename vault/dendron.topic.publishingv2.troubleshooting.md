---
id: 5ca2fe99-0abc-413d-aa06-50f9a66e13e0
title: Troubleshooting
desc: ''
updated: 1610684167037
created: 1609525003662
---

### My favicon isn't showing up

This might be due to favicon caching on localhost. It should resolve when published.

### Search isn't working on the site

This could be the result of a CORS issue. Make sure that both `siteUrl` and `cname` are referring to the same domain.

This is good

```
siteUrl: https://foo.com
cname: foo.com
```

This is bad

```
siteUrl: https://www.foo.com
cname: foo.com
```


### My image isn't showing up

- Make sure your images have a leading `/`. So `/assets/images/foo.jpg` instead of `assets/images/foo.jpg`.
- If you are publishing to github, check if [[assetsPrefix|dendron.topic.publishingv2.configuration#assetsprefix-optional]] is set


### Command failed when installing or upgrading dependencies

```bash
Command failed with ENOENT: npm install 
```

This could be due to multiple reasons:
    - Make sure the default shell you have for VSCode is set to a shell that has npm in it. See [here](https://stackoverflow.com/questions/37823194/cannot-find-runtime-node-on-path-visual-studio-code-and-node-js) for changing your default shell.
    - Make sure that `package.json` is not open during installation (you might see `operation not permitted` on windows)


