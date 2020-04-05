set -e
shopt -s extglob

TEMP_PATH="docs/.temp"

# build docs
npm run docs:build

# gh-pages
gh-pages -d dist

# prepare deploy
mkdir $TEMP_PATH
cd $TEMP_PATH
git init
git pull git@github.com:mxszs/or_so.git gh-pages
cp -r ../../dist/* .

# commit and push changes
git add -A
git commit --am -m "build: deploy documentation"
git push -f git@github.com:mxszs/or_so.git master:gh-pages

# clean
cd -
rm -rf $TEMP_PATH