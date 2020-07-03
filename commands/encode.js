const Discord = require('discord.js')
const util = require("util");
module.exports.run = async (client, message, args) => {
    const arg = message.content.split(' ').slice(1)
    if(arg.length == 0)return message.channel.send(`Input a text to encode`)
    message.channel.send(Buffer.from(arg.join(' ')).toString('base64'))
}
module.exports.config = {
    name: "encode",
    aliases: [],
   category: "Fun",
   usage : "encode <text>",
   description: "Ecode text into codes"
}