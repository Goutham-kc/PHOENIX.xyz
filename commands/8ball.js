const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
  let replies = ["Yes", "No","Outlook not so good"," Don't count on it"," Better not tell you now", "Signs point to yes", "Most likely", "I don't know", "Ask again later!", "Dont Force me bitch", "I am not sure!", "Pls No", "You tell me", "How am i supposed to know smartass", "aint got time for your shit ", "Without a doubt", ];
 let arg = message.content.split(" ").slice(1);
    let result = Math.floor((Math.random() * replies.length));
    let question = arg.join(" ");
   if(!arg[1]) return message.reply("Plesae enter a full question with 2 or more words!");
   if(message.content.length >= 1024) return message.channel.send('Please give a input of length between 0-1024 words')    
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .setFooter(config.embed.footer)
    .setTimestamp()
    .addField("Question", question)
    .addField("Answer", replies[result]);
    message.channel.send(embed)
 }

module.exports.config = {
    name: "8ball",
    aliases: [],
   category: "Fun",
   usage : "8ball <question>",
   description: "Ask the bot questions"
}