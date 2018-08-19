#!/bin/bash

git reset --hard
git clean -fd

git checkout master
git pull

git reset --hard
git clean -fd

mv public/* .
rm -r public

git add -A
git commit -m "Automatic deployment of blog for change ${CIRCLE_SHA1}"
git push
