const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<a:redcross:676450631686553602> You dont have permission to perform this command!");
  let member = message.mentions.users.first() || client.users.cache.get(args[0]);
  if(!member) return message.channel.send("Provide a User..");
 const arg  = message.content.split(' ').slice(2)
 let role = arg.join(' ')
  if(!role) return message.channel.send("You need to specify a role");
  let arole = message.guild.roles.cache.find(addrole => addrole.name === role)
  if(!arole) return message.channel.send(` There is no such role ${role}`);
  if(message.guild.member(member)) 
    message.guild.member(member).roles.remove(arole).then(() =>{
      message.channel.send(`Removed role ${arole.name} from ${member.tag}`)
    }).catch(()=>{
      message.channel.send(`I could not remove role from this user`)
    })
}
module.exports.config = {
    name: "removerole",
    aliases: [],
   category: "Utility",
   usage : "removerole <mention> <role_name>",
   description: "Remove a role from the user "
}