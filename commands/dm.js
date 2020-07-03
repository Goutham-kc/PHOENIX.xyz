const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
   if (message.author.id != "685506829228179515") return message.channel.send("You are forbidden <a:redcross:688007167755944007> , This command is Dev only");
 let arg = message.content.split(" ").slice(1);
  
  let mes = args.slice(1).join(' ');
let member = message.mentions.users.first() || await client.users.fetch(args[0])
  message.delete();
  message.channel.send("Dm message sent");
      member.send(new Discord.MessageEmbed()
  .setAuthor(`${message.author.username} Just send you have message`)
  .addField(`**Message**`,mes)); 
}
module.exports.config = {
    name: "dm",
    aliases: [],
   category: "Owner",
   usage : "dm <mention> <message>",
   description: "Owner only command "
}