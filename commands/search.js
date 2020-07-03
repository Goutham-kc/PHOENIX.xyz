const Discord = require('discord.js')
const ms = require('parse-ms')
module.exports.run = async (client, message, args, db ) => {
   const timeout = 180000;
   let time = await client.db.get(`Search-${message.member.id}`)
   if(!time)time = 0
  db.collection('Userinfo').doc(message.author.id).get().then((q) => {
    if (!q.exists) {
      let rcash = Math.floor(Math.random()* 500)
      db.collection('Userinfo').doc(message.author.id).set({
         'Name': message.author.username,
         'cash' : rcash,
            'bank' : 0,
             'limit' : 2000,
              'rep' : 1,
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
          message.channel.send(`You found $${rcash} :dollar: `)
       })
    }
    if(q.exists){
       if (timeout - (Date.now() - time) > 0) {
          let left = ms(timeout - (Date.now() - time))
            message.channel.send(`You have already searched this place try again in **${left.minutes}m ${left.seconds}s**`);
    } else {
       client.db.set(`Search-${message.member.id}`,Date.now())
       let wcash = q.data().cash
   let rcash = Math.floor(Math.random()* 500)
    db.collection('Userinfo').doc(message.author.id).update({
    'cash': wcash +=rcash
  }).then(() => {
    message.channel.send(`You found $${rcash} :dollar: `)
    })
    }
  }
     })
}
module.exports.config = {
    name: "search",
    aliases: [],
   category: "Economy",
   usage : "search",
   description: "Search to find some cash"
}