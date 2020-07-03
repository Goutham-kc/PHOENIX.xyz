const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() ||client.users.cache.get(args[0])
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<a:redcross:688007167755944007> You Dont have the permission")
      let muterole = message.guild.roles.cache.find(muterole => muterole.name === "Muted")
      if(!muterole) return message.channel.send("Mute role not found")
      if(!user)return message.reply("You must mention someone to Unmute them.")
       if(!message.guild.member(user).roles.cache.find(role => role.name == "Muted")) return message.channel.send("This  user is not muted")
      if (message.guild.member(user)) {
        message.guild.
        member(user)
        .roles.remove(muterole)
        .then(()=> {
            message.channel.send(`**${user.tag}** Has Been Unmuted`)
        })
    }
}
module.exports.config = {
    name: "unmute",
    aliases: [],
   category: "Moderation",
   usage : "unmute <mention>",
   description: "Unmute a muted person"
}