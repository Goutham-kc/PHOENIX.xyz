const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
let person = message.mentions.users.first() || client.users.cache.get(args[0])
       if(!person) return message.reply('Maybe no one loves you try mentioning someone next time');
      if(person.id === message.client.user.id) return message.channel.send("Ew get away");
      if(person.id === message.author.id) return message.reply("Dumb Dumb you cant love yourself");
      const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new Discord.MessageEmbed()
            .setColor("#ffb6c1")
            .addField(`**${person.username}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
}
module.exports.config = {
    name: "love",
    aliases: ["ship"],
   category: "Fun",
   usage : "love <mention>",
   description: "Find how good your shipping"
}