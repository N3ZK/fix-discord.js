## Require

- Node.js (v12.20.0)
```
sudo apt-get install node
```
- Npm (6.14.10)
```
sudo apt-get install npm
```

## Needed !

```
npm install discord.js
```

## Depancies

- You can see in package-lock.json...

## How to build bot

- chmod +x setup.sh depancies.sh && bash setup.sh depancies.sh

## Index require


```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot ready');
});

client.login(token);
   
```






 


