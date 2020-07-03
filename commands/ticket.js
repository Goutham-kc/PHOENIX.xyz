const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
  let prefix = config.prefix
  let fetched = await client.db.get(`prefix-${message.guild.id}`, config.prefix);
   if(fetched === null)prefix = config.prefix
   else prefix = fetched
    if(!message.guild.me.hasPermission('MANAGE_CHANNELS'))return message.channel.send(`I am missing the following permission \`MANAGE_MESSAGES\``)
    let user = message.member.id
    let name = "ticket-" + user
    if(message.guild.channels.cache.find(x => x.name === name)){
   message.channel.send("There is already a ticket opened for you")
    } else {
      message.guild.channels.create(name).then(ch => {
        ch.updateOverwrite(message.channel.guild.roles.everyone,{
          SEND_MESSAGES: false,
          VIEW_CHANNEL: false
        })
         ch.updateOverwrite(user, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
         })
         ch.updateOverwrite(client.user.id, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
         })
            message.channel.send(`${message.author.username} I have created a ticket for you.`)
          let embed = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setTitle(`${name}`)
          .setDescription("Support will be with you shortly.")
          .setFooter(`Use ${prefix}close to close the ticket`)
          .setTimestamp()
          ch.send(embed).then(m => {
            m.pin()
          })
      })
    }
}
module.exports.config = {
    name: "ticket",
    aliases: [],
   category: "Ticket",
   usage : "ticket",
   description: "Creates a private ticket"
}