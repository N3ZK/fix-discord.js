'use strict';


const { Client, MessageEmbed } = require('discord.js');
const { prefix, token } = require("../config.json");


const client = new Client();

client.on('ready', () => {
  console.log('news download !');
});

client.on('message', message => {
  
  if (message.content === `${prefix}news`) {

    const embed = new MessageEmbed()
     
      
      
      .setColor(0xff0000)
    
      .setDescription(`
      
      **Next feature**
    
**Capchat** / more commands*

Will be soon coming

- Spotify
- Twitch`);
    
    message.channel.send(embed);
  }
});

client.login(token);

    
    
    
    
    
    
