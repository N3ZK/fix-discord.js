const Discord = require('discord.js');
const { prefix, token } = require("../config.json");
const client = new Discord.Client();
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3, 
	kickThreshold: 7, 
	banThreshold: 7, 
	muteThreshold: 3, 
	maxInterval: 1000,
	warnMessage: '{@user}, You fully deserve a spam warning, this is the first and last if you decide to continue you will get what you deserve', 
	kickMessage: '**{user_tag}** has been kicked for spamming.', 
	banMessage: '**{user_tag}** has been banned for spamming.', 
	muteMessage: '**{user_tag}** has been muted for spamming.', 
	maxDuplicatesWarning: 7, 
	maxDuplicatesKick: 10, 
	maxDuplicatesBan: 12,
	maxDuplicatesMute: 9, 
	exemptPermissions: [ 'ADMINISTRATOR'], 
	ignoreBots: true,
	verbose: true, 
	ignoredUsers: [], 
});

client.on('ready', () => console.log(`Antispam download`));

client.on('message', (message) => antiSpam.message(message));

client.login(token);
