const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
    let botembed = new Discord.MessageEmbed()
    .setAuthor(`Statistics | ${client.user.tag}`)
    .setColor("RED")
    .setThumbnail(client.user.displayAvatarURL())
    .addField("Created On",`\`${new Date(client.user.createdAt).toLocaleString('en-gb')}\`` )
    .addField("Owner:",`\`Shadow.#0022\`\n\`Wolfie#1185\``,true)
    .addField("Language:",`\`JavaScript\``,true)
    .addField('Library:',`\`discord.js ${require('discord.js').version}\``,true)
    .addField("Servers", `\`${client.guilds.cache.size}\``, true)
    .addField("Users",`\`${client.users.cache.size}\``, true)
    .addField('Ram Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .setFooter(config.embed.footer)
    message.channel.send(botembed);
}
module.exports.config = {
    name: "stats",
    aliases: ["botinfo"],
   category: "Utility",
   usage : "stats",
   description: "See the informations of the bot"
}