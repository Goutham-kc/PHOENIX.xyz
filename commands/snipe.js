const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES"))return message.channel.send("You need MANAGE_MESSAGES permission to run this command")
let msg = client.snipes.get(message.channel.id);
if(!msg) return message.channel.send("There are no recently deleted messages")

const embed = new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(`${msg.author.tag} | Channel : ${msg.channel} `,msg.author.displayAvatarURL())
.setDescription(msg.content);

if(msg.image) embed.setImage(msg.image)

message.channel.send(embed)
}
module.exports.config = {
    name: "snipe",
    aliases: [],
   category: "Utility",
   usage : "snipe",
   description: "Snipe the deleted message content"
}