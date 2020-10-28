const Discord = require('discord.js')
const discordJokes = require('custom-discord-jokes')
module.exports.run = async (client, message, args) => {
   discordJokes.getRandomDadJoke(function(joke){
        message.channel.send(joke)
    })
}
module.exports.config = {
    name: "joke",
    aliases: [],
   category: "Fun",
   usage : "joke",
   description: "Sends a random joke"
}
