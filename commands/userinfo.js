const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    const status = { online: "Online  <a:online:712855967653429308>", idle: "Idle <a:idle:688011476996325386>", dnd: "Do Not Disturb <a:dnd:712855705748766740>", offline: "Offline <a:offline:712856440435376239>" };
    let member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    if(!message.guild.member(member)) member = message.author
         let nick;
         const rolecount = message.guild.member(member).roles.cache.size
         if(message.guild.member(member).nickname == null){
             nick = 'NONE'
         }else{
             nick = message.guild.member(member).nickname
         }
         let activity;  
         if(member.presence.activities.length == 0){
                activity = "NONE"
                }else{
                    activity = member.presence.activities
                }
                let badge;
                if(!member.falgs){
                    badge = 'NONE'
                }if(member.flags){
                if(member.flags.toArray().length == 0){
                    badge = 'NONE'
                }else{
                    badge = member.flags.toArray().join('\n').replace('HOUSE_BRILLIANCE','<:brilliance:714890566046843050>`HypeSquad Brilliance`').replace('HOUSE_BALANCE','<:balance:714890522665156748> `HypeSquad Balance`').replace('HOUSE_BRAVERY','<:bravery:714890796943278150>`HypeSquad Bravery`').replace('EARLY_SUPPORTER','<:esupporter:717056586073505912> `Early Supporter`').replace('VERIFIED_DEVELOPER','<:verifieddev:714890774432579635> `Verified Developer`').replace('VERIFIED_BOT','<:verifiedbot:717558475160551484> `Verified Bot`') 
                }
                }
                let device;
                if(member.presence.status == 'offline'){
device = "NONE"
                }else{
                if(member.presence.clientStatus == null){
                device = "NONE"
                }else{
                device =  Object.keys(member.presence.clientStatus).join('\n').replace('desktop',':desktop:` Desktop`').replace('web','<:chrome:718307733237137429> ` Web`').replace('mobile',':iphone:` Mobile`')
                }
                }
                 var whoem = new Discord.MessageEmbed()
            .setColor(message.guild.member(member).roles.highest.hexColor)
            .setAuthor(`User Information of ${member.tag}`,member.displayAvatarURL())
            .setThumbnail(member.displayAvatarURL())    
            .addField("User Id:",`${member.id}`,true)
            .addField("Joined server:", `${new Date(message.guild.member(member).joinedAt).toLocaleString('en-gb')}`,true)
            .addField("Bot:",`${member.bot? "Yes" : "No"}`,true)
            .addField("Status:",status[member.presence.status],true)
            .addField("Game:",activity,true)
            .addField("Nickname",nick,true)
            .addField('Device:',device,true)
            .addField('Badges',badge)
            .setFooter(`Account created at ${new Date(member.createdAt).toLocaleString('en-gb')}`)
            .setTimestamp();
            if(rolecount == 1){
                whoem.addField('Roles:','NONE')
            }else{
            if(rolecount-15 <= 0){
                whoem.addField('Roles:',message.guild.member(member).roles.cache.filter(r => r.name !== '@everyone').sort((a,b)=> b.position - a.position).map(r => r).join(' > '))
            }else{
                whoem.addField('Roles:',message.guild.member(member).roles.cache.filter(r => r.name !== '@everyone').sort((a,b)=> b.position - a.position).first(15).map(r => r).join(' > ')+` And ${rolecount-15} more...`)
            }
        }
              message.channel.send('Fixing...');
            }
module.exports.config = {
    name: "userinfo",
    aliases: ["ui","whois"],
   category: "Utility",
   usage : "userinfo || userinfo <mention>",
   description: "Find userinfo of your acc or entioned users account"
}
