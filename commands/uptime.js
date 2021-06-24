const Discord = require('discord.js');

const client = new Discord.Client();

client.once("ready", () => {
  console.log("uptime.js download !");
});


const token = '***********';
client.login(token);

client.on('message', message => {
  if (message.channel.type != 'text' || message.author.bot)
    return;

  let command = message.content.split(' ')[0].slice(1);
  let args = message.content.replace('.' + command, '').trim();

  switch (command) {
    case 'uptime': {
      // client.uptime is in millseconds
      // this is just maths, I won't explain much of it
      // % is modulo, AKA the remainder of a division
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      message.channel.send(`Uptime: ---> ${days}d ${hours}h ${minutes}m ${seconds}s 💀💀💀💀`);
      break;
    }
  }
});
