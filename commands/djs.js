const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const Discord = require('discord.js')
module.exports.run = async (client, message, args, db) => {
const [query, src] = args;
if(!query) return message.channel.send("https://discord.js.org");

const embed = await (await fetch(`https://djsdocs.sorta.moe/v2/embed?src=${src|| "stable"}&q=${query.replace(/#/g, ".")}`).json());
if (!embed || embed.error) return message.reply("What is that!");

const docEmbed = new MessageEmbed(embed)
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  .setTitle(`Discord.js (${args[1] || "stable"}`)
  .setTimestamp();

return message.channel.send(docEmbed);

}
module.exports.config = {
    name: "djs",
    aliases: ['discord-js'],
   category: "Utility",
   usage : "djs <query> (branch)",
   description: "Searches the DJS docs for whatever you'd like"
}