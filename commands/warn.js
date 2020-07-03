const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("<a:redcross:688007167755944007> You don`t have permission");
    if(message.member.hasPermission("MANAGE_ROLES")){
      let member = message.mentions.members.first();
        if(!member) return message.channel.send("You have to mention someone");
 let arg = message.content.split(" ").slice(1);
        let reason = arg.slice(1).join(` `);  
        if(!reason) return message.channel.send('U need to provide a reason')     
  var warnem = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(`You have been warned`)
  .addField(`**Reason:**`,reason)
  .setFooter(`Warned by ${message.author.tag} `)
  .setTimestamp();
      message.delete();
  member.user.send(warnem);
 message.channel.send(`Warned ${member.user.tag}`);
}
}
module.exports.config = {
    name: "warn",
    aliases: [],
   category: "Moderation",
   usage : "warn <mention>",
   description: "Warn a user for a specified reason"
}