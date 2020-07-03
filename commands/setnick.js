const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("<a:redcross:712856288668811369> You must have Change Nickname permission");
    if(message.member.hasPermission("MANAGE_ROLES")){
  let user = message.mentions.users.first() || await client.users.fetch(args[0])
        let arg = message.content.split(" ").slice(2); 
        let nick = arg.join(` `);
  if(!user) return message.channel.send("You must mention someone");
  if(nick.length < 1) return message.channel.send(`You must input a new nickname ${nick}`);
      if (!message.guild.member(user).kickable)
        return message.reply("I cannot Change  that members nickname");
  if(nick.length >1) message.guild.member(user).setNickname(nick);
  message.channel.send(`Nickname changed to **${nick}**`)
    }
}
module.exports.config = {
    name: "setnick",
    aliases: [],
   category: "Moderation",
   usage : "setnick <mention> <new_name>",
   description: "Setnickname of a person "
}