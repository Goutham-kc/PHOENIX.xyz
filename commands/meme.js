const Discord = require('discord.js')
const fetch = require('node-fetch'); 
module.exports.run = async (client, message, args) => {
 const embed = new Discord.MessageEmbed() 
    message.channel.send(embed.setColor("BLUE").setDescription('Generating..')).then(m => { 
        fetch('https://www.reddit.com/r/memes.json?sort=top&t=week')
    .then(res => res.json()).then(body => {
  
  const SafeHandler = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
      if(!SafeHandler.length || !body) return message.channel.send(embed.setColor("RED").setDescription(`:x: | The post couldn't be found!`));

 const Number = Math.floor(Math.random() * SafeHandler.length);
  var newem = new Discord.MessageEmbed()
      .setColor("RANDOM") 
      .setDescription(`Author: ${SafeHandler[Number].data.author}`) 
      .setTitle(`**${SafeHandler[Number].data.title}**`) 
      .setURL(`https://reddit.com${SafeHandler[Number].data.permalink}`)
      .setImage(SafeHandler[Number].data.url) 
      .setFooter(`  👍${SafeHandler[Number].data.ups} | 💬 ${SafeHandler[Number].data.num_comments}`);
        m.delete().catch()
        message.channel.send(newem);
        })
    })
}
module.exports.config = {
    name: "meme",
    aliases: [],
   category: "Fun",
   usage : "meme",
   description: "Sends a random meme"
}