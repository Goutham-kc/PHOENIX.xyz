const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
        const arg = message.content.split(" ").slice(1)
        let member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        message.channel.send( new Discord.MessageEmbed() .setColor("RANDOM") .setAuthor(`Avatar of ${member.tag}`).setImage(member.displayAvatarURL({dynamic:true, size: 2048})))
}
module.exports.config = {
    name: "avatar",
    aliases: ["pfp"],
   category: "Fun",
   usage : " avatar || avatar <mention> ",
   description: " Get large view of a users avatar "
}