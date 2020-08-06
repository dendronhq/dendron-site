#!/bin/bash

ROOT=$1
if [[ -z $ROOT ]]; then
    ROOT="docs"
fi

eval "$(rbenv init -)"
cd $ROOT
bundler exec jekyll s --watch