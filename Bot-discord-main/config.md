# If you want to automate the launch of the bot from your desktop
```
Use in your shell, ./bot.sh, click... and other...
```
# If node or npm is broken or needs an upgrade

- Copy and paste in your shell :
 ```
sudo rm -fr package.json package.lock.json node_modules
sudo apt update && sudo apt dist-upgrade

npm cache clean -f 

nvm ls-remote && nvm install v12.20.0 
nvm use v12.20.0 && nvm alias default v12.20.0

npm init && npm install discord.js
npm -v && node -v
```
# If you need automated all packages configure
```
Use in your shell chmod +x ./depancies.sh
```
