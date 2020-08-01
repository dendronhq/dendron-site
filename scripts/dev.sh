#!/bin/bash

eval "$(rbenv init -)"
cd docs
bundler exec jekyll s --watch