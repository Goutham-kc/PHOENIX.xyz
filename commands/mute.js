const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.cache.get(args[0])
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<a:redcross:712856288668811369> You Dont have the permission")
      let muterole = message.guild.roles.cache.find(muterole => muterole.name === "Muted")
      if(!muterole) return message.channel.send("Mute role not found")
      if(!user) return message.reply("You must mention someone to mute them.")
      if(message.guild.member(user).roles.cache.find(role => role.name == "Muted")) return message.channel.send("This user is already muted")
      if (message.guild.member(user)) {
        message.guild.
        member(user)
        .roles.add(muterole)
        .then(()=> {
            message.channel.send(`**${user.tag}** Has Been Muted`)
        }).catch(()=>{
          message.channel.send(`I dont have the power to mute **${user.tag}**`)
        })
    }
}
module.exports.config = {
    name: "mute",
    aliases: [],
   category: "Moderation",
   usage : "mute <mention>",
   description: "Mute someone"
}