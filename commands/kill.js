const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
let kills = ["https://cdn.weeb.sh/images/rkkZP6Z-G.gif","https://cdn.weeb.sh/images/HyXTiyKw-.gif","https://imgur.com/g005tMV.gif","https://cdn.weeb.sh/images/HJcoQ1Fwb.gif","https://cdn.weeb.sh/images/Hk1sxlQjZ.gif","https://cdn.weeb.sh/images/rJ4141YDZ.gif",];
          let killed = Math.floor((Math.random() * kills.length));
let member = message.mentions.users.first() || client.users.cache.get(args[0])
if(!member) {
  message.channel.send("You have to mention someone"); 
}  else if(member.id === message.author.id){
  message.channel.send('Whats wrong?');
}
  else {
  const killem = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username} killed ${member.username} ufff`)
  .setImage(kills[killed]);
  message.channel.send(killem);
} 
}
module.exports.config = {
    name: "kill",
    aliases: [],
   category: "Fun",
   usage : "kill <mention>",
   description: "A fun command to play with friends"
}