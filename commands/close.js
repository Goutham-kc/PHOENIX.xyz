const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    if(!message.channel.name.startsWith("ticket-")) return message.channel.send("**This command can only be used in a opened ticket**")  
      message.channel.send(`Are you sure? \`yes\`. This will automatically be cancelled withthin 10 seconds`)
          .then((m) => {
              message.channel.awaitMessages(response => response.content === 'yes', {
                      max: 1,
                      time: 10000,
                      errors: ['time'],
                  })
                  .then((collected) => {
                      message.channel.delete();
                  })
                  .catch(() => {
                      m.edit('Ticket close cancelled').then(m2 => {
                          m2.delete({timeout:5000})
                      })
                  })
          })
}
module.exports.config = {
    name: "close",
    aliases: [],
   category: "Ticket",
   usage : "close",
   description: "Close a ticket"
}