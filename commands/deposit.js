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
      }).then(() =>{ 
        message.channel.send("You dont have any money to deposit")
    })
  }
  if(q.exists){
    let wcash;
    let bcash;
    let limit;
    wcash = q.data().cash
    bcash = q.data().bank
      limit = q.data().limit
      let arg = message.content.split(" ").slice(1)
 let idk = arg.join(" ")
 if(idk == "all"){
   let m = limit - bcash
   if(wcash == 0)return message.channel.send("You have no money to deposit")
   if(m == 0)return message.channel.send("You cant deposit any more money")
   if(m > wcash){
      db.collection('Userinfo').doc(message.author.id).update({
    'cash': 0,
      'bank' : bcash +=wcash
    }).then( () => {
      message.channel.send(`Amount of $${wcash} :dollar:  has been credited to your bank account`)
    })
   }
     if(m <= wcash){
      db.collection('Userinfo').doc(message.author.id).update({
    'cash': wcash -=m,
      'bank' : bcash +=m
    }).then( () => {
      message.channel.send(`Amount of $${m} :dollar:  has been credited to your bank account`)
    })
   }
 }
         if(idk !== "all"){
   let dcash = parseInt(arg)
   if (isNaN(dcash)) return message.reply('That was not a valid number!')
   if(dcash > wcash) return message.channel.send("You dont have that much money with you")
    if(bcash+dcash > limit) return message.channel.send("Your current Bank Level cannot store that much money")
    db.collection('Userinfo').doc(message.author.id).update({
    'cash': wcash -=dcash,
      'bank' : bcash +=dcash
    }).then( () => {
      message.channel.send(`Amount of $${dcash}:dollar:  has been credited to your bank account`)
    })
       }
  }
       })
}
module.exports.config = {
    name: "deposit",
    aliases: ["dep"],
   category: "Economy",
   usage : "deposit <amount>",
   description: "Deposit money to prevent users from stealing"
}