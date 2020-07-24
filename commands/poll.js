const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

let question = args.slice(0).join(" ");
  
  if (args.length === 0) 
    return message.reply('Give a question')

message.delete()
  const pollEmbed = new Discord.MessageEmbed()
      .setTitle("New Poll!")
      .setColor("#00000")
      .setDescription(`${question}`)
      .setFooter(`started by: ${message.author.username}`, `${message.author.avatarURL}`)

message.channel.send(pollEmbed)
  .then(message => {
    message.react('👍')
    message.react('👎')
  })
  .catch(() => console.error('Failed to react.'));
}
module.exports.config = {
    name: "poll",
    aliases: [],
   category: "Utility",
   usage : "poll <question>",
   description: "Sets up a poll with reactions"
}
