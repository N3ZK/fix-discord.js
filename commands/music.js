const { Client, MessageEmbed } = require('discord.js');
const { prefix, token } = require("../config.json");


const client = new Client();

client.on('ready', () => {
  console.log('news download !');
});

client.on('message', message => {
  
  if (message.content === `${prefix}music`) {

    const embed = new MessageEmbed()
     
      
      
      .setColor(0xff0000)
    
      .setDescription(`
   
   Music commands :
 
      
**<play** - play music
**<skip** - skip music in playlist
**<stop** - stop music
      
      `);
    
    message.channel.send(embed);
  }
});

client.login(token);

    
