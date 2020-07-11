const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
   const veri = {NONE:"NONE",LOW:"Low", MEDIUM:"Medium", HIGH:"(╯°□°）╯︵ ┻━┻",VERY_HIGH:"┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"};
   const rolecount = message.guild.roles.cache.size
  var embed = new Discord.MessageEmbed()
  .setColor(message.guild.roles.highest.hexColor)
  .setThumbnail(message.guild.iconURL())
  .setAuthor(message.guild.name,message.guild.iconURL())
  .addField(`Server Id: `,`\`${message.guild.id}\``, true )
  .addField(`Server Region`,`\`${message.guild.region}\``, true)
  .addField(`Verification Level`,`\`${veri[message.guild.verificationLevel]}\``, true)
  .addField(`Total Members:`,`\`${message.guild.memberCount}\``)
  .addField(`Humans:`,`:family: \`${message.guild.members.cache.filter(member => !member.user.bot).size}\``, true)
  .addField(`Bots:`,`:robot: \`${message.guild.members.cache.filter(member => member.user.bot).size}\``, true )
  .addField(`Total Channels:`, `\`${message.guild.channels.cache.size}\``, true)
  .addField(`Total Text channels:`,`\`${message.guild.channels.cache.filter(m => m.type === 'text').size}\``, true)
  .addField(`Total Voice channels:`, `\`${message.guild.channels.cache.filter(m => m.type === 'voice').size}\``,true)
  .addField("Member Status:",`${message.guild.members.cache.filter(member => member.presence.status === 'online').size} Online <a:online:688007079516307500>
${message.guild.members.cache.filter(member => member.presence.status === 'idle').size} Idle <a:idle:688011476996325386>
${message.guild.members.cache.filter(member => member.presence.status === 'dnd').size} Do Not Disurb <a:dnd:688006815555911730>
${message.guild.members.cache.filter(member => member.presence.status === 'offline').size} Offline/Invisible <a:offline:688007046041174067>`)
  .setFooter(`Server Created at ${new Date(message.guild.createdAt).toLocaleString('en-gb')}`,message.guild.iconURL())
  if(rolecount-15 <= 0){
embed.addField('Roles',message.guild.roles.cache.filter(r => r.name !== '@everyone').sort((a, b) => b.position - a.position).map(r => r).join(' > ').toString())
  }else{
    embed.addField('Roles',message.guild.roles.cache.filter(r => r.name !== '@everyone').sort((a, b) => b.position - a.position).first(15).map(r => r).join(' > ').toString()+` And ${rolecount-15} more...`)
  }
  message.channel.send(embed);
}
module.exports.config = {
    name: "serverinfo",
    aliases: ["server-info","server", "si],
   category: "Utility",
   usage : "serverinfo",
   description: "See the server info and stuff"
}
