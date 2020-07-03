const Discord = require('discord.js')
const ms = require('parse-ms')
module.exports.run = async (client,message,args,db) => {
   let timeout = 86400000
   let time = await client.db.get(`Daily-${message.member.id}`)
   if(!time)time = 0
  db.collection('Userinfo').doc(message.author.id).get().then((q) => {
     let wcash;
    if (!q.exists) {
   db.collection('Userinfo').doc(message.author.id).set({
      'Name': message.author.username,
       'cash' : 500,
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
       message.channel.send("Here is your daily reward of $500 :dollar:")
    })
 }
    if(q.exists){
       wcash = q.data().cash
       if(timeout - (Date.now() - time)>0) {
          let left = ms(timeout - (Date.now() - time))
         message.channel.send(`You claimed your daily reward u can claim again in **${left.hours}h ${left.minutes}m ${left.seconds}s**`);
 } else {
    client.db.set(`Daily-${message.member.id}`,Date.now())
db.collection('Userinfo').doc(message.author.id).update({
     'cash' : wcash +=500
   }).then(() =>{
     message.channel.send("Here is your daily reward of $500 :dollar:")
   })
 }
}
      })
}
module.exports.config = {
    name: "daily",
    aliases: [],
   category: "Economy",
   usage : "daily",
   description: "Claim your daily cash"
}