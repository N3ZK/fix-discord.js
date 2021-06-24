const Discord = require('discord.js');

const client = new Discord.Client();
const token = '**************';
client.login(token);

client.on('message', message => {
  if (message.content === '<ping') {  
    message.channel.send(`Ping --> ${Date.now() - message.createdTimestamp}ms and API Latency --> ${Math.round(client.ws.ping)}ms`);
  }
});

client.once("ready", () => {
  console.log("ping.js download !");
});

