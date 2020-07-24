const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
var em = new Discord.MessageEmbed()
      .setAuthor("Vote Now!!")
      .setThumbnail(client.user.displayAvatarURL())
      .addField("Website",`[View!](https://phoenixxyz-dashboard.herokuapp.com/)`, true)
      .addField('Dicord Bot List',`[View!](https://top.gg/bot/687987885604864033)`, true)
      .addField('Bots For Discord',`[View!](https://botsfordiscord.com/bot/687987885604864033)`, true)
      .addField(" Discord Boats",`[View!!](https://discord.boats/bot/687987885604864033)`, true)
      .addField("Bots of Discord",`[View!!](https://b-o-d.cf/bots/687987885604864033)`, true)
      .addField("Bot List",`[View!](https://bot-listweb.glitch.me/bots/687987885604864033/)`, true)
      .addField("Discord Bots",`[View!](https://discord.bots.gg/bots/687987885604864033)`, true)
      .addField("Discord Extreme List",`[View!](https://discordextremelist.xyz/bots/687987885604864033)`,true)
      message.channel.send(em);
}
module.exports.config = {
    name: "links",
    aliases: ['link'],
   category: "Miscellaneous",
   usage : "links",
   description: "Sends the list of links concerned with the bot"
}