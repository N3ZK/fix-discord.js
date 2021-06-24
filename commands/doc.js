const { Client, MessageEmbed } = require('discord.js');
const { prefix, token } = require("../config.json");


const client = new Client();


client.on('ready', () => {
  console.log('doc download!');
});

client.on('message', message => {
  
  if (message.content === `${prefix}doc`) {

    const embed = new MessageEmbed()
     
      .setTitle(`Official Documentation for iGlayde`)
      
      .setColor(0xff0000)
    
      .setDescription(`Presentation :

Glayde is a multi-function bot that is maintained by one person on a non-profit basis. 
The bot is kept regularly optimized to ensure optimal service and a pleasant experience for servers who need it.

The bot has most of the functionality of other bot, even though it is not hosted and does not have a database.
There will be many more features coming very soon. Orders or other problems are quickly taken care of.

Music :

If you try to start a playlist you won't be able to.
Try to create a playlist by launching the <play command several times for each title.
The advantage is to be able to create your own playlist interactively with your friends from the living room for example.

Mute :

When you perform the <mute @player reason command, you should know that it will not work if you have not created a role titled "Muted".
Why ? There are bots which directly assign a role named mute but which just limits the right to send messages and put reactions. 

It is quite annoying because the mute player can speak in a vocal room even if he is mute.
So I decided to let you choose the permissions for the mute player.

Remember that when you have created the Mute role, you must apply the permissions in each of your rooms, 
for example if the player is mute he can always write if in the room where he is located there is no 'ban on writing in this room for players playing the silent role`);
    
    message.channel.send(embed);
  }
});

client.login(token);



