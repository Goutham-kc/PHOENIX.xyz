const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {    
 let arg = message.content.split(" ").slice(1); 
 if(arg.length == 0) return message.channel.send("You forgot to input!")
 if(message.content.length >= 1024) return message.channel.send('Please give a input of length between 0-1024 words')    
let emMessage = arg.join(` `);
        message.delete();
var em = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(emMessage)
.setTimestamp()
.setFooter(`Requested by: ${message.author.username}`);
message.channel.send(em);
}
module.exports.config = {
    name: "embed",
    aliases: ["em"],
   category: "Fun",
   usage : "embed <something>",
   description: "Send a message inside embed"
}