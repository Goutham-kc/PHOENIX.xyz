const Discord = require('discord.js')
const ms = require('parse-ms')
module.exports.run = async (client, message, args, db) => {
  let timeout = 60000
  let time;
  time = await client.db.get(`Beg-${message.member.id}`)
  if(!time)time = 0
  let wcash;
      db.collection('Userinfo').doc(message.author.id).get().then((q) => {
        if(q.exists){
           wcash = q.data().cash
        }
   if (!wcash) wcash = 0;
         db.collection('Userinfo').doc(message.author.id).get().then((q) => {
    if (!q.exists) {
      if (timeout - (Date.now() - time) > 0) {
        const left = ms(timeout - (Date.now() - time))
        message.channel.send(`You've already begged. You can beg again in **${left.seconds}s**`);
} else {
client.db.set(`Beg-${message.member.id}`,Date.now())
  let bc = Math.floor(Math.random()*55)+1
  db.collection('Userinfo').doc(message.author.id).set({
    'Name': message.author.username,
     'cash' : bc,
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
  }).then(() => {
message.channel.send(`You've begged and received $${bc} :dollar:`)
})
}
    }

      if(q.exists){
        if (timeout - (Date.now() - time) > 0) {
          const left = ms(timeout - (Date.now() - time))
            message.channel.send(`You've already begged. You can beg again in **${left.seconds}s**`);
    } else {
    time = client.db.set(`Beg-${message.member.id}`,Date.now())
      let bc = Math.floor(Math.random()*55)+1
  db.collection('Userinfo').doc(message.author.id).update({
  'Name': message.author.username,
  'cash' : wcash +=bc
}).then(() => {
  message.channel.send(`You've begged and received $${bc} :dollar:`)
})
      }
    }
      })
    })
  }
module.exports.config = {
    name: "beg",
    aliases: [],
   category: "Economy",
   usage : "beg",
   description: "Beg to get some extra cash"
}