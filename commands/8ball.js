const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
  let replies = [   "It is certain.", 
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."];
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