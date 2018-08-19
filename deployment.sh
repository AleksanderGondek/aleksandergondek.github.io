#!/bin/bash

git checkout master

git reset --hard
git clean -fd --exclude=public

mv public/* .
rm -r public

git add -A
git push
