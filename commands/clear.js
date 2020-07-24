const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:redcross:712856288668811369> You must have Manage Messages permission");
   if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I dont have the correct permission")     
   if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.messages.fetch()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
}
module.exports.config = {
    name: "clear",
    aliases: [],
   category: "Moderation",
   usage : "clear",
   description: "Delete number of messages possible at one time"
}
