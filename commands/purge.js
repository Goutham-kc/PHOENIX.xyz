const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  let arg = message.content.split(" ").slice(1); 
       const amount = parseInt(arg[0]) + 1;
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:redcross:712856288668811369> You must have Manage Messages permission");
if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I dont have the correct permission")        
if (message.member.hasPermission("MANAGE_MESSAGES")) {
    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount <= 1 || amount > 100) {
      return message.reply("You need to input a number between 1 and 99.");
    }

    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send(
        `:x: | There was an error trying to **purging** messages in this channel!`
      );
    })
}
}
module.exports.config = {
    name: "purge",
    aliases: ["prune"],
   category: "Moderation",
   usage : "purge <amount>",
   description: "Delete the amount of messages"
}