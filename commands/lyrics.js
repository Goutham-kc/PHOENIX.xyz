const fetch = require("node-fetch");
const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

    let query = args.join(" ");
    if (!query) return message.channel.send("Sorry dude, i can't search air");
    fetch(`https://some-random-api.ml/lyrics?title=${encodeURIComponent(query)}`)
.then(res => res.json())
.then(lyrics => {
  if (lyrics.error) return message.reply("no lyrics found");
  return message.channel.send(lyrics.lyrics)
})

}

module.exports.config = {
    name: "lyrics",
    aliases: ["lyr"],
   category: "Fun",
   usage : "lyrics <song>",
   description: "Searches for song lyrics"
}