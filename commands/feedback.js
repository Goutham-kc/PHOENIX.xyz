const Discord = require('discord.js')
module.exports.run = async (client,message,args) => {
    const channel = client.channels.cache.get('700757226687823973')
    const arg = message.content.split(' ')
    if(!arg[1])return message.channel.send(`You have to send it in the format \`<Feedbacktitle>_<Description>\``)
    if(!message.content.includes('_'))return message.channel.send('You have to add `_`To sperate the title from description')
    let split2 = message.content.split('_')
    const cmd = arg[0]
    if(!split2[1])return message.channel.send('Next time try adding a description')
    const embed = new Discord.MessageEmbed()
    .setTitle(split2[0].replace(`${cmd}`,''))
    .setThumbnail(message.author.displayAvatarURL())
    .setColor('BLUE')   
    .setDescription(split2[1])
    .addField('**Guild:**',`**${message.guild.name}**`)
    .setFooter(`Feedback by ${message.author.tag}`,message.author.displayAvatarURL())
    channel.send(embed).then(()=>{
        message.channel.send(`You feedback Has been sent.`)
    })
}
module.exports.config = {
    name: "feedback",
    aliases: ["suggest","reply"],
   category: "Miscellaneous",
   usage : "feedback <title>_<description>",
   description: "Feedback or suggest something"
}