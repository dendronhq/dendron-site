#!/bin/bash

cd ../dendron/
LAST_TAG=$(git describe --abbrev=0 --tags)
cd ../dendron-template
git tag $LAST_TAG -f
git push --tags -f
