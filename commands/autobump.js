const Discord = new require("discord.js");
const client = new Discord.Client();
const config = new require("../config.json");
const token = ('*****');

client.login(token);

client.on("message", function(message)
{

    if (message.content == '<autobump'){

      message.channel.send('Auto-bumping started every 20 minutes')  

      var interval = setInterval (function ()
            {
              message.channel.send("!bump")
            }, 1200000);

      }

});

client.once("ready", () => {
  console.log("autobump.js download !!!");
});

