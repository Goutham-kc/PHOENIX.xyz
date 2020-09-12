const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
   
      var embed = new Discord.MessageEmbed()
    .setAuthor("Links", message.author.avatarURL)
    .setColor("#00FFFF")
    .setThumbnail(message.author.displayAvatarURL({ size: 2048 }))
    .addField(`Bot link:`,`** [Link](https://discord.com/api/oauth2/authorize?client_id=687987885604864033&permissions=1551367415&redirect_uri=https%3A%2F%2Fweb.phoenix-xyz.cf%2Fcallback&scope=bot)**`)
    . addField(`Support server: `, `**[Join now!!](https://discord.gg/RPVQdyw)**`)
    .setFooter(config.embed.footer)
    .setTimestamp();

       message.channel.send(embed);
}
module.exports.config = {
    name: "invite",
    aliases: [],
   category: "Miscellaneous",
   usage : "invite",
   description: "Sends the bot invite link and support server link"
}