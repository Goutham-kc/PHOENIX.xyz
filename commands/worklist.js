const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  message.channel.send(
      new Discord.MessageEmbed()
      .setTitle("Works")
        .setColor("BLUE")
      .addField("**Chef**","150 per hour. Join fee:200")
      .addField("**Youtuber**","200 per hour. Join fee:250")
      .addField("**Streamer**","250 per hour. Join fee:300")
      .addField("**Teacher**","300 per hour. Join fee:400")
      .addField("**Police**","500 per hour. Join fee:500")
      .addField("**Developer**","700 per hour. Join fee:500 (Premium members only)")
      .addField("**PHOENIX.xyz Developer**","1000 per hour. Join fee:700 (Premium members only)")
      .setFooter(`work <job> to take the job`))
}
module.exports.config = {
    name: "worklist",
    aliases: ["jobs","works"],
   category: "Economy",
   usage : "worklist",
   description: "Shows the available works u can join"
}