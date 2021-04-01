const Discord = require('discord.js')
module.exports.run = async (client, message, args, db) => {
 const member = message.mentions.users.first() || message.author
      let wcash;
      let bcash;
      let limit; 
      db.collection('Userinfo').doc(member.id).get().then((q) => {
    if (!q.exists) {
       db.collection('Userinfo').doc(member.id).set({
    'Name': member.username,
     'cash' : 0,
         'bank' : 0,
          'limit' : 2000,
           'rep' : 0,
         'premium' : false,
         'job' : 'Null',
         'lock' : false,
         'pistol' : false,
         'rifle' : false,
         'pbullet' : 0,
            'rbullet' : 0,
            'selected' : 'Null'
  }).then(()=>{
    message.channel.send(new Discord.MessageEmbed()  .setTitle(`${member.username}\'s Balance`) .setColor("GREEN") .addField("**Wallet:**",`0`) .addField("**Bank**",`0/2000`))
  })
    }
    if(q.exists){
      wcash = q.data().cash
      bcash = q.data().bank
      limit = q.data().limit
      message.channel.send(new Discord.MessageEmbed () .setTitle(`${member.username}\'s Balance`) .setColor("GREEN") .addField("**Wallet:**",`${wcash}`) .addField("**Bank**",`${bcash}/${limit}`))
    }
  })
}
module.exports.config = {
    name: "balance",
    aliases: ["bal"],
   category: "Economy",
   usage : "balance || balance <mention>",
   description: "Give you your cash in-hand and  bank balance"
}
