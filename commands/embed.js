const { Client, MessageEmbed } = require('discord.js');
const { prefix, token } = require("../config.json");


const client = new Client();


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  
  if (message.content === `${prefix}help`) {

    const embed = new MessageEmbed()
     
      .setTitle(`ENJOY !`)
      
      .setColor(0xff0000)
    
      .setDescription(`
      
Basics commands

 
- **ping** - you can ping me and api discord
- **autobump** - i can bump the server automatically
- **uptime** - look how long I have been working
- **music** - music command (Youtube)
- **clear** - clear message in a channel in server
  

Moderation :

- **kick** - kick player
- **ban** - ban player
- **mute** - mute player
- **unmute** - delete mute
- **Anti-spam enabled** (result = kick)

More information :

- **news** - next improvement
- **info** - bot and developer
- **doc** - read the doc of bot

Funny commands :

- **meme** - random meme


__Please read this__

If a command does not work refer to the **bot documentation**

`);
    
    message.channel.send(embed);
  }
});

client.login(token);

