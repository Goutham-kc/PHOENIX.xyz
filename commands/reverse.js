const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

      let arg = message.content.split(" ").slice(1); 
       let input = arg.join(' ');
       var revem = new Discord.MessageEmbed()
       .setColor("RANDOM")
       .setFooter(`Requested By: ${message.author.username}`)
       .addField(`**Input:**`,`\`\`\`${input}\`\`\``)
       .addField('Output:',`\`\`\`${arg.join(' ').split('').reverse().join('')}\`\`\``);
       message.delete();
message.channel.send(revem);
}
module.exports.config = {
    name: "reverse",
    aliases: [],
   category: "Fun",
   usage : "reverse <text>",
   description: "Sends the input in reverse format"
}