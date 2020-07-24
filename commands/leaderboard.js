const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    }) 

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true }); 

    let possibleinvites = [];
    let index = 0;
    invites.forEach(function(invites) {
        possibleinvites.push(`**${++index}**.  **${invites.inviter.tag}** 》 \`${invites.uses}\` **invites**`)
    })

    const embed = new Discord.MessageEmbed()
        .setTitle(`🏆 INVITE LEADERBOARD 🏆`)
        .setColor("RANDOM")
        .setDescription(`${possibleinvites.join('\n')}`)
        .setTimestamp()
    message.channel.send(embed);
}
module.exports.config = {
    name: "leaderboard",
    aliases: ['inviters'],
   category: "Utility",
   usage : "leaderboard",
   description: "Sends the list of top inviters"
}