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
              'selected' : 'Null'
      }).then(()=>{
        message.channel.send(`You dont have any money in bank to withdraw`)
      }) 
    }
      if(q.exists){
       let wcash;
      let bcash;
       db.collection('Userinfo').doc(message.author.id).get().then((q) => {
    if (q.exists) {
     wcash = q.data().cash
    bcash = q.data().bank
    }
    if (!wcash) wcash = 0;
   if(!bcash) bcash = 0;
   let arg = message.content.split(" ").slice(1)
   let td = arg.join(" ")
   if(td == "all"){
     if(bcash == 0)return message.channel.send(`You dont have a single penny to withdraw`)
    let wicash = bcash
    db.collection('Userinfo').doc(message.author.id).update({
    'cash': wcash +=wicash,
      'bank' : bcash -=wicash
    }).then( () => {
      message.channel.send(`Amount of $${wicash}:dollar:  has been withdrawn from your bank account`)
    })
   }
if(td !== "all"){
   let wicash = parseInt(arg)
   if (isNaN(wicash)) return message.reply('That was not a valid number!')
   if(wicash > bcash) return message.channel.send("You dont have that much money with you")
    db.collection('Userinfo').doc(message.author.id).update({
    'cash': wcash +=wicash,
      'bank' : bcash -=wicash
    }).then( () => {
      message.channel.send(`Amount of $${wicash}:dollar:  has been withdrawn from your bank account`)
    })
}
       })
      }
  })
}
module.exports.config = {
    name: "withdraw",
    aliases: ["with"],
   category: "Economy",
   usage : "withdraw <amount>",
   description: "Withdraw money from your bank"
}