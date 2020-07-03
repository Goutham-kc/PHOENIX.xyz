const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
 let role = args.join(" ")
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.cache.find(grole => grole.name === role)
    if(!gRole) return message.reply("Couldn't find that role.");

    const status = {
        false: "No",
        true: "Yes"
      }

    let roleemebed = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .addField("ID", gRole.id, true )
    .addField("Name", gRole.name, true)
    .addField("Mention", `\`<@${gRole.id}>\``, true)
    .addField("Hex", gRole.hexColor, true)
    .addField("Members", gRole.members.size, true)
    .addField("Position", gRole.position, true)
    .addField("Hoisted", status[gRole.hoist], true)
    .addField("Mentionable", status[gRole.mentionable], true)
    .addField("Managed", status[gRole.managed], true)
    
    message.channel.send(roleemebed);
}
module.exports.config = {
    name: "roleinfo",
    aliases: [],
   category: "Utility",
   usage : "roleinfo <role_name>",
   description: "Find the info of a role"
}