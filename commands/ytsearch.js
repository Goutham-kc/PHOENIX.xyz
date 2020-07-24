const Discord = require('discord.js')
const search = require("youtube-search");
module.exports.run = async (client, message, args) => {
  const options = {
    maxResults: 1,
      //Api key of yt
    key: "AIzaSyBwByDgmKju5rzSjhCQhOnDAdGlT0gWZjg"
}
    if(message.channel.nsfw ===  false) return message.channel.send("This command can only be used in a nsfw channel")
       let arg = message.content.split(" ").slice(1);
    let me = arg.join(` `);
    if(me.length < 1) return message.channel.send("You need to search something")
    search(arg.join(" "), options, (err, result) => {
        if (err) return message.reply(`YouTube API error occured!\n\n${err}`);
        const embed = new Discord.MessageEmbed()
            .setAuthor(result[0].channelTitle, result[0].thumbnails.high.url)
            .addField("URL:", `[Click Me](${result[0].link})`, true)
            .addField("Since:", `\`${new Date(result[0].publishedAt).toLocaleString("en-GB", { dateStyle: "full" })}\``, true)
            .setDescription(result[0].description)
            .setThumbnail(result[0].thumbnails.high.url)
            .setColor("RED")
         message.channel.send(embed);
    })
}
module.exports.config = {
    name: "ytsearch",
    aliases: ["yt"],
   category: "NSFW",
   usage : "ytsearch <search_term>",
   description: "Search a video in youtube"
}