const Discord = require('discord.js')
const discordJokes = require('custom-discord-jokes')
module.exports.run = async (client, message, args) => {
    const fn = 'Donald';
    const ln = 'Trump';
   discordJokes.getCustomJoke(fn,ln, function(joke){
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