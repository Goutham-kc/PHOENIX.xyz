const fetch = require("node-fetch");
const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

    let query = args.join(" ");
    if (!query) return message.channel.send("Sorry dude, i can't search air");
    fetch(`https://some-random-api.ml/lyrics?title=${encodeURIComponent(query)}`)
.then(res => res.json())
.then(lyrics => {
  if (lyrics.error) return message.reply("no lyrics found");
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(lyrics.lyrics)
  return message.channel.send(embed)
})

}

module.exports.config = {
    name: "lyrics",
    aliases: ["lyr"],
   category: "Fun",
   usage : "lyrics <song>",
   description: "Searches for song lyrics"
}