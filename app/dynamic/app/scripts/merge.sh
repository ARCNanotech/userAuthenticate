
git fetch origin	
git checkout -b master origin/master
git merge index

git checkout index
git merge --no-ff  index
git push origin index