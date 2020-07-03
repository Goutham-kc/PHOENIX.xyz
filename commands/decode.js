const Discord = require('discord.js')
const util = require("util");
module.exports.run = async (client, message, args) => {
    const arg = message.content.split(' ').slice(1)
    if(arg.length == 0)return message.channel.send(`Input a text to decode`)
    message.channel.send(Buffer.from(arg.join(' '), 'base64').toString('ascii'))
}
module.exports.config = {
    name: "decode",
    aliases: [],
   category: "Fun",
   usage : "decode <encoded_code>",
   description: "decodes encoded code into text"
}