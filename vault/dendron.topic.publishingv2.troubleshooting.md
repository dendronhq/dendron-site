---
id: 5ca2fe99-0abc-413d-aa06-50f9a66e13e0
title: Troubleshooting
desc: ''
updated: 1609556027736
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

