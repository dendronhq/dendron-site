---
id: 84ce47fa-9e56-4b16-99ac-1a3c1afa3650
title: Add Ability to Generate Themes
desc: ''
updated: 1630968000586
created: 1621374810314
---


## Gulp Task to generate CSS

- pre-requisite
```
yarn add -D gulp gulp-less gulp-postcss gulp-debug gulp-csso autoprefixer less-plugin-npm-import
```

- gulpfile.js
  - see [here](https://github.com/dendronhq/dendron/blob/release/0.58/packages/dendron-next-server/gulpfile.js#L18:L18) for example
```js
const gulp = require('gulp')
const gulpless = require('gulp-less')
const postcss = require('gulp-postcss')
const debug = require('gulp-debug')
var csso = require('gulp-csso')
const autoprefixer = require('autoprefixer')
const NpmImportPlugin = require('less-plugin-npm-import')

gulp.task('less', function () {
  const plugins = [autoprefixer()]

  return gulp
    .src('assets/themes/*-theme.less')
    .pipe(debug({title: 'Less files:'}))
    .pipe(
      gulpless({
        javascriptEnabled: true,
        plugins: [new NpmImportPlugin({prefix: '~'})],
      }),
    )
    .pipe(postcss(plugins))
    .pipe(
      csso({
        debug: true,
      }),
    )
    .pipe(gulp.dest('./public'))
})
```
