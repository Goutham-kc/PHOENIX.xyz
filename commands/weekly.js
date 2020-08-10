const Discord = require('discord.js')
const ms = require('parse-ms')
module.exports.run = async (client,message,args,db) => {
  const timeout = 604800000
  let time = await client.db.get(`Week-${message.member.id}`)
  if(!time)time = 0
              let premium;
       let wcash;
      db.collection('Userinfo').doc(message.author.id).get().then((q) => {
        if(q.exists){
           wcash = q.data().cash
          premium = q.data().premium
        }
if(!premium) premium = false
   if (!wcash) wcash = 0;
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
         message.channel.send(`This command is only for premium members`)
       }) 
    }
    if(q.exists){
    if(premium == false) return message.channel.send("This command is only for premium members")
       if(timeout - (Date.now() - time) > 0) {
         let left = ms(timeout - (Date.now() - time))
            message.channel.send(`You claimed your weekly reward you can claim again in **${left.days}d ${left.hours}h ${left.minutes}m ${left.seconds}s**`);
    } else {
      client.db.set(`Week-${message.member.id}`,Date.now())
db.collection('Userinfo').doc(message.author.id).update({
        'cash' : wcash +=3500
      }).then(() =>{
        message.channel.send("Here is your Weekly reward of $3500:dollar:")
      })
    }
         }
      })
    })
  }
module.exports.config = {
    name: "weekly",
    aliases: [],
   category: "Economy",
   usage : "weekly",
   description: "A premium members only command like daily"
}