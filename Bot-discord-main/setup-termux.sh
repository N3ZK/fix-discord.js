#!/bin/bash
#File: setup-termux.sh
# RUN ONLY IF YOU NEED !!

pkg update && pkg upgrade -y
pkg install nodejs-lts
pkg install npm
npm init && npm install discord.js
npm -v && node -v
node index.js
