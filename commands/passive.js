const Discord = require('discord.js')
const ms = require('parse-ms')
module.exports.run = async (client,message,args,db) => {
    const timeout = 86400000;
    let time = await client.db.get(`Passive-${message.member.id}`)
    if(!time) time = 0;
    let arg = message.content.split(" ").slice(1)
    let passive = await client.db.get(`PassiveMode-${message.member.id}`)
    if(!passive) passive = 'off'
    if(arg.length == 0){
 message.channel.send(`Passive Mode is turned \`off\` `)
    } else {
    if(arg == 'on'){
   if(passive == 'on') return message.channel.send('Passive mode is already turned on')
   if(timeout - (Date.now() - time) > 0) {
    let left = ms(timeout - (Date.now() - time))
    message.channel.send(`You can toggle you passive mode again in **${left.hours}hr ${left.minutes}m ${left.seconds}s`)
    }else{
    client.db.set(`PassiveMode-${message.member.id}`,`on`).then(()=>{
        message.channel.send(`Passive mode set to \`on\``)
    })
    client.db.set(`Passive-${message.member.id}`,Date.now())
    }
 } else if(arg == 'off'){
    if(passive == 'off') return message.channel.send('Passive mode is already turned off')
    if(timeout - (Date.now() - time) > 0) {
     let left = ms(timeout - (Date.now() - time))
     message.channel.send(`You can toggle you passive mode again in **${left.hours}hr ${left.minutes}m ${left.seconds}s`)
     }else{
     client.db.set(`PassiveMode-${message.member.id}`,`off`).then(()=>{
         message.channel.send(`Passive mode set to \`off\``)
     })
     client.db.set(`Passive-${message.member.id}`,Date.now())
     }
    } else{
    message.channel.send('Change your passive mode to `on` or `off`')
    }
    }
}
module.exports.config = {
    name: "passive",
    aliases: ["passivemode"],
   category: "Economy",
   usage : "passive || passive yes/no ",
   description: "Enable/Disbale passive to prevent robs"
}