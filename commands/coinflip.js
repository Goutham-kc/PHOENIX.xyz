const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
 let replies = [ "Your coin just landed, on **TAILS!**","Your coin just landed, on **HEADS!**"]
 let result = Math.floor((Math.random() * replies.length));
 message.channel.send(replies[result]);
}
module.exports.config = {
    name: "coinflip",
    aliases: ["cf","flip"],
   category: "Fun",
   usage : "coinflip",
   description: "Flip a coin"
}