#!/bin/bash

ROOT=$1
if [[ -z $ROOT ]]; then
    ROOT="docs"
fi
PORT=4000

eval "$(rbenv init -)"
cd $ROOT
bundler exec jekyll s --watch --port $PORT