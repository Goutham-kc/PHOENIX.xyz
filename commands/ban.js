const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("<a:redcross:688007167755944007> You dont have permission to perform this command!")

    let BanMember = message.mentions.users.first() || client.users.cache.get(args[0]);
    if(!BanMember) return message.channel.send("Please provide a user to ban!")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given!" 
    if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("I dont have permission to do this!")
    if(!message.guild.member(BanMember).bannable)return message.channel.send("I cannot ban this user")
    if(BanMember.bot){
        message.channel.send(`**${BanMember.tag}** has been banned`).then(()=>{
            message.guild.member(BanMember.id).ban(reason);
        })
    }else{
    BanMember.send(`Hello, you have been banned from ${message.guild.name} for: ${reason}`).then(() => {
        message.channel.send(`**${BanMember.tag}** has been banned`)
        message.guild.member(BanMember.id).ban(reason);
}).catch( message.channel.send(`**${BanMember.tag}** has been banned`)
        message.guild.member(BanMember.id).ban(reason);)
)
    }
}
module.exports.config = {
    name: "ban",
    aliases: [],
   category: "Moderation",
   usage : "ban <mention> <reason> ",
   description: "Ban someone from the server.Reason is optional"
}
