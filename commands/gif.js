const Discord = require('discord.js')
const giphy = require('giphy-api')("W8MLXRA7voSfoA1nBAxAzht4qwjEGk7O");
module.exports.run = async (client, message, args) => {
let term;
if(message.channel.nsfw == false) return message.channel.send("This command can only be used in a nsfw channel")
  if (args.length === 0) {
   return message.channel.send('No Search terms!')
  }
  if(message.content.length >= 1024) return message.channel.send('Please give a input of length between 0-1024 words')    
  let embed = new Discord.MessageEmbed()
  if (args.length === 1) {
    term = args.toString()
  } else {
    term = args.join(" ");
  }
  giphy.search(term).then(function (res) {
    // Res contains gif data!
    let id = res.data[0].id
    let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
    const embed = {
      "color": 3066993,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif",
        "text": "Powered by Giphy"
      },
      "image": {
        "url": msgurl
      },
      "fields": [
        {
          "name": "Search Term",
          "value": "`" + term + "`",
          "inline": true
        },
        {
          "name": "Page URL",
          "value": "[Giphy](" + res.data[0].url + ")",
          "inline": true
        }
      ]
    };
    message.channel.send({ embed });

  });
}
module.exports.config = {
    name: "gif",
    aliases: [],
   category: "NSFW",
   usage : "gif <object_to_search>",
   description: "Find your fav gif from what u searched"
}