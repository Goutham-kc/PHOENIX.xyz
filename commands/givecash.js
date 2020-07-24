const Discord = require('discord.js')
module.exports.run = async (client, message, args, db) => {
  let member = message.mentions.users.first() || client.users.cache.get(args[0]);
  let apassive = await client.db.get(`PassiveMode-${message.member.id}`)
  if(!apassive) apassive = 'off'
  if(apassive == 'on') return message.channel.send('You cant give money if your in passive')
  let passive = await client.db.get(`PassiveMode-${member.id}`)
  if(!passive) passive = 'off'
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
        message.channel.send("You dont have any money to give")
    })
    }
          if(q.exists){
        if(!member)return message.channel.send("Provide an user to transfer money")
        if(member.id === message.author.id) return message.channel.send("You cant send yourself money dumb")
    if(passive == 'on') return message.channel.send('You cant give cash to a user in passive')
        let wcash;
     wcash = q.data().cash
  db.collection('Userinfo').doc(member.id).get().then((a) => {
    if (!a.exists) {
    let arg = message.content.split(" ")
    let gcash = parseInt(message.content.split(' ').slice(2).join(' ')) 
      if (isNaN(gcash)) return message.reply('That was not a valid number!')
      if(gcash <= 0)return message.channel.send("Are you fucking dumb?")
      if(gcash > wcash) return message.channel.send("You dont have that much money with you") 
      db.collection('Userinfo').doc(member.id).set({
        'Name': member.username,
         'cash' : gcash,
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
                'upad':0,
                'mpad': 0
      }).then(()=>{
        message.channel.send(`Amount of $${gcash} :dollar:  has been given to ${member.tag}`)
      })
      db.collection('Userinfo').doc(message.author.id).update({
        'cash': wcash -=gcash
              })
    }
    if(a.exists){
      let mcash;
      mcash = a.data().cash
      let arg = message.content.split(' ')
      if(arg[2] == 'all'){
        if(wcash == 0)return message.channel.send("You dont have any money to give")
        db.collection('Userinfo').doc(member.id).update({
          'cash' : mcash +=wcash
       }).then(()=>{
         message.channel.send(`Amount of $${wcash} :dollar:  has been given to ${member.tag}`)
       })
       db.collection('Userinfo').doc(message.author.id).update({
         'cash': wcash -=wcash
               })
      }else{
      let gcash = parseInt(message.content.split(' ').slice(2).join(' ')) 
      if (isNaN(gcash)) return message.reply('That was not a valid number!')
      if(gcash <= 0)return message.channel.send("Are you fucking dumb?")
      if(gcash > wcash) return message.channel.send("You dont have that much money with you")
        db.collection('Userinfo').doc(member.id).update({
           'cash' : mcash +=gcash
        }).then(()=>{
          message.channel.send(`Amount of $${gcash} :dollar:  has been given to ${member.tag}`)
        })
        db.collection('Userinfo').doc(message.author.id).update({
          'cash': wcash -=gcash
                })
              }
            }
       })
      }
    })
}
module.exports.config = {
    name: "givecash",
    aliases: ["pay","give","share","donate"],
   category: "Economy",
   usage : "givecash <mention> <amount>",
   description: "Give someone cash"
}