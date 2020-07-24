const Discord = require('discord.js')
const request = require('request');
module.exports.run = async (client, message, args) => {
    if(message.channel.nsfw == false)return message.channel.send('This command can only used in nsfw channel')
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.channel.send(`Please mention a a user to roast`);
    request('https://insult.mattbas.org/api/en/insult.txt?who=AAABBDD', async function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const insult = body.replace(/AAABBDD/gi, `${member}`);
            message.channel.send(insult)
}
    })
}
module.exports.config = {
    name: "roast",
    aliases: ['insult'],
   category: "NSFW",
   usage : "roast <user>",
   description: "Roasts a user"
}