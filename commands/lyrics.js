const fetch = require("node-fetch");
const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

    let query = args.join(" ");
    if (!query) return message.channel.send("Sorry dude, i can't search air");
    fetch(`https://some-random-api.ml/lyrics?title=${encodeURIComponent(query)}`)
.then(res => res.json())
.then(lyrics => {
  if (lyrics.error) return message.reply("no lyrics found");
  for (let i = 0; i < lyrics.lyrics.length; i += 1000) {
    let toi = lyrics.lyrics.substring(i, Math.min(lyrics.lyrics.length, i + 1000));
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(toi)
  return message.channel.send(embed)
  }
})

}

module.exports.config = {
    name: "lyrics",
    aliases: ["lyr"],
   category: "Fun",
   usage : "lyrics <song>",
   description: "Searches for song lyrics"
}