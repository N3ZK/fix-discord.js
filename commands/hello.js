const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('../config.json')

client.on('ready', () => {
  console.log('hello.js download !');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'nouveaux');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'bienvenue');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'arrivant');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'arrivants');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'hall');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});


client.login(token);
