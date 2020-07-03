const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
 if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have permission to reset this channel.");
  if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.reply('Sorry, I dont have permissions to execute this command, I need MANAGE_CHANNELS permissions | https://i.imgur.com/x0nJsuE.png.')
  await message.channel.clone().then(clone => {
  clone.edit({ parent: message.channel.parent.id, position: message.channel.position });
  message.channel.delete();

    
  const embed = new Discord.MessageEmbed()  
  .setTitle('Channel Nuked!')
  .setImage("https://media.giphy.com/media/XUFPGrX5Zis6Y/giphy.gif")
  .setColor("RED")
                                       

  clone.send(embed)}); 

};
module.exports.config = {
    name: "nuke",
    aliases: [],
   category: "Moderation",
   usage : "nuke",
   description: "Purges the whole channel"
}