const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

      let arg = message.content.split(" ").slice(1); 
        let sayMessage = arg.join(` `);
        message.delete();
      if (message.content.includes('@everyone')) return message.channel.send("<a:redcross:712856288668811369>Mass mention is not allowed in this comand")
       if (message.content.includes('@here')) return message.channel.send("<a:redcross:712856288668811369>Mass mention is not allowed in this comand")
         message.delete();
        message.channel.send(sayMessage);
}
module.exports.config = {
    name: "say",
    aliases: [],
   category: "Fun",
   usage : "say <message>",
   description: "Send a message using the bot"
}