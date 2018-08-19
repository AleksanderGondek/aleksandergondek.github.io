#!/bin/bash

git reset --hard
git clean -fd

echo 'State of the directory before checkout'
find . -maxdepth 2

git branch -r
git branch

git checkout --track origin/master

echo 'State of the directory after checkout & pull'
find . -maxdepth 2

echo 'State of .gitignore before clean'
cat .gitignore

git reset --hard
git clean -fd

echo 'State of the directory after cleaning'
find . -maxdepth 2

mv public/* .
rm -r public

echo 'State of the directory before git add'
find . -maxdepth 2

git add -A
git commit -m "Automatic deployment of blog for change ${CIRCLE_SHA1}"
git push
