#!/bin/bash

git checkout master

git reset --hard
git clean -fd --exclude=public

mv public/* .
rm -r public

git add -A
git commit -m "Automatic deployment of blog for change ${CIRCLE_SHA1}"
git push
