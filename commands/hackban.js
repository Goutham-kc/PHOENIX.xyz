const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("<a:redcross:712856288668811369> You dont have permission to perform this command!")

    let BanMember = message.mentions.users.first() || await client.users.fetch(args[0]);
    if(!BanMember) return message.channel.send("Please provide a user to ban!")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given!" 
    if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("I dont have permission to do this!")
    if(BanMember.bot){
        message.channel.send(`**${BanMember.tag}** has been banned`).then(()=>{
            message.guild.members.ban(BanMember.id,reason)
        })
    }else{
        message.guild.members.ban(BanMember.id,reason).then(() => {
        message.channel.send(`**${BanMember.tag}** has been banned`)
}).catch(err => console.log(err)
)
    }
}
module.exports.config = {
    name: "hackban",
    aliases: [],
   category: "Moderation",
   usage : "ban <id>",
   description: "Ban someone outside the server"
}
