const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
message.channel.send(`Pong!! \n Latency is **${client.ws.ping}**! .API Latency is **${Date.now() - message.createdTimestamp}**ms`);
}
module.exports.config = {
    name: "ping",
    aliases: [],
   category: "Fun",
   usage : "ping",
   description: "Sends the bot ping"
}