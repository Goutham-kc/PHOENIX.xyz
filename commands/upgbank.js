const Discord = require('discord.js')
module.exports.run = async (client, message, args, db) => {
 db.collection('Userinfo').doc(message.author.id).get().then((q) => {
    if (!q.exists) {
      db.collection('Userinfo').doc(message.author.id).set({
         'Name': message.author.username,
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
               'selected' : 'Null',
               'upad':0,
               'mpad': 0
       }).then(()=>{
         message.channel.send(`You need atleast $2000 to upgrade your bank`)
       }) 
   }
    if(q.exists){
       let wcash;
      let limit;
      let u;
       db.collection('Userinfo').doc(message.author.id).get().then((q) => {
    if (q.exists) {
     wcash = q.data().cash
      limit = q.data().limit
    }
  if (!wcash) wcash = 0;
         if(!limit) limit = 2000
   let arg = message.content.split(" ").slice(1)
    u = parseInt(arg)
   if (isNaN(u)) return message.reply(`Type a number to increase you bank level by it`)
    let ucash = 2000*u
   if(ucash > wcash) return message.channel.send(`You dont have that much money with you. You need $${ucash} :dollar:`)
    db.collection('Userinfo').doc(message.author.id).update({
    'cash': wcash -=ucash,
      'limit' : limit +=ucash
    }).then( () => {
      message.channel.send(`You Paid $${ucash}:dollar: and now your Bank can now hold ${limit}:dollar: `)
    })
       })
    }
    })
}
module.exports.config = {
    name: "upgbank",
    aliases: [],
   category: "Economy",
   usage : "upgbank <no_of_level_to_increase>",
   description: "Increase your bank level to store more money and prevent from stealing"
}