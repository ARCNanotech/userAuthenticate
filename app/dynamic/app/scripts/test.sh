ls -v
git status -sb
git add app/dynamic/app/scripts/test.sh
.\app/dynamic/app/scripts/test.sh
git commit -m "Add newfile app/dynamic/app/scripts/test.sh"
git push origin userAuth
git push origin HEAD:userAuth
git pull origin userAuth
sleep 10
git push origin HEAD:master
git pull origin master
sleep 17 
git push origin HEAD:browser
git pull origin browser
sleep 22
git push origin HEAD:index
git pull origin index
sleep 12
git push origin HEAD:config
git pull origin config
sleep 10
git push origin HEAD:Grunt
git pull origin Grunt
sleep 23
git push origin HEAD:JSON
git pull origin JSON
sleep 10
git push origin HEAD:HTML
git pull origin HTML
sleep 22
git push origin HEAD:ArcanaMagus-debugger
git pull orgin ArcanaMagus-debugger
sleep 7
git push origin HEAD:readme
git pull origin readme
sleep 12
git push origin HEAD:userAuth.api
git pull origin userAuth.api
sleep 5
git push origin HEAD:userAuth.cpl
git pull origin userAuth.cpl
sleep 34
git push origin HEAD:api
git pull origin api
sleep 30
git push origin HEAD:binary
git pull origin binary
sleep 1
git push origin HEAD:Mocha
git pull origin Mocha
sleep 18
git push origin HEAD:project
git pull origin project
sleeo 17
git push origin HEAD:package
git pull origin package
sleep 45
git push origin HEAD:ArcanaMagus-HTML
git pull orgin ArcanaMagus-HTML
git diff -b
git status -sb
git checkout build
git pull https://github.com/ArcanaMagus/userAuthenticate.git userAuth
git merge --no-ff  
dos2unix app/dynamic/app/scripts/test.sh
for {
app/dynamic/app/scripts/test.sh = var obj 
if (obj is unix) {
unix2mac app/dynamic/app/scripts/test.sh
}
else (obj is mac) {
null;
	} 
}
.\build

else `
chown 65331 app/dynamic/app/scripts/test.sh
bash  - start app/dynamic/app/scripts/test.sh
#condition
if (diff >= 1) {
const: eval: frame(in).shell
}fi
while { const: err().args }
for {
	var init = console.print(err at 
	err = static.frame_exception(meta::init)
console.err(args) args="none"; frame_exception(in console::meta)
	}