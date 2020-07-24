const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

let question = message.content.split(' ').slice(1)
  if (question.length === 0) return message.reply('Give a question')
message.delete()
  const pollEmbed = new Discord.MessageEmbed()
      .setTitle("New Poll!")
      .setColor("#00000")
      .setDescription(`${question.join(' ')}`)
      .setFooter(`Poll started by: ${message.author.username}`, `${message.author.displayAvatarURL()}`)

message.channel.send(pollEmbed)
  .then(msg => {
  msg.react('👍')
  msg.react('👎')
  }).catch(err => console.log(err))
}
module.exports.config = {
    name: "poll",
    aliases: [],
   category: "Utility",
   usage : "poll <question>",
   description: "Sets up a poll with reactions"
}
