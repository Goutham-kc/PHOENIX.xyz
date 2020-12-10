const Discord = require('discord.js')
module.exports.run = async (client, message, args, db) => {
   if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("<a:redcross:712856288668811369> You dont have permission to perform ")
      let arg = message.content.split(" ").slice(1)
      let p = arg.join(" ")
        if(arg.length == 0)return message.channel.send("You need to input a new prefix through the command")
  client.db.set(`prefix-${message.guild.id}`,p).then(() => { 
    message.channel.send(`Successfully set prefix to **${p}**`);
  });
}
module.exports.config = {
    name: "setprefix",
    aliases: ["prefix"],
   category: "Configuration",
   usage : "setprefix <new_Prefix>",
   description: "Set a new custom prefix fro the server"
}