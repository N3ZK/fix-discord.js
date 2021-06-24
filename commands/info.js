const { Client, MessageEmbed } = require('discord.js');
const { prefix, token } = require("../config.json");


const client = new Client();

client.on('ready', () => {
  console.log('info download !');
});

client.on('message', message => {
  
  if (message.content === `${prefix}info`) {

    const embed = new MessageEmbed()
     
      
      
      .setColor(0xff0000)
    
      .setDescription(`
      
       **Information**:
       
  "bot": iLays,
  "developer"!SKEF#6295": ,
  "country": france {
  "language": JS (Node.js){
   "version": "1.1.9"`);
    
    message.channel.send(embed);
  }
});

client.login(token);
