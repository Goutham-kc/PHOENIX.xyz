const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send("<a:redcross:712856288668811369> You dont have permission to perform this command!")

    let kickMember = message.mentions.users.first() || client.users.cache.get(args[0])
    if(!kickMember) return message.channel.send("Please provide a user to kick!")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["KICK_MEMBERS"])) return message.channel.send("I dont have permission to do this!")
   if (!message.guild.member(kickMember).kickable) return message.reply("I cannot kick that member");
   if(kickMember.bot){
    message.guild.member(kickMember).kick(reason).then(()=>{
      message.channel.send(`**${kickMember.tag}** has been kicked`)
    }).catch(err => console.log(err))
   }else{
    message.guild.member(kickMember).kick(reason).then(()=>{
      kickMember.send(`Hello, you have been kicked from ${message.guild.name} for: ${reason}`)
      message.channel.send(`**${kickMember.tag}** has been kicked`)
    }).catch(err => console.log(err))
   }      
    }
module.exports.config = {
    name: "kick",
    aliases: [],
   category: "Moderation",
   usage : "kick <mention> <reason>",
   description: "Reason is optional"
}