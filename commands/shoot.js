const Discord = require('discord.js')
const ms = require('parse-ms')
module.exports.run = async (client,message,args,db) => {
  let member = message.mentions.users.first() || client.users.cache.get(args[0])
  let mpassive = await client.db.get(`PassiveMode-${member.id}`)
  if(!mpassive) mpassive = 'off'
  let passive = await client.db.get(`PassiveMode-${message.member.id}`)
  if(!passive) passive = 'off'
  if(passive == 'on') return message.channel.send('Passive mode is enabled you cant shoot anyone')
  const timeout = 18000000;
  let time = await client.db.get(`Pistol-${message.member.id}`)
  if(!time)time = 0
  let time2 = await client.db.get(`Rifle-${message.member.id}`)
  if(!time2)time2 = 0
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
        message.channel.send(`You have any Weapons to shoot`)
      })
    }
    if(q.exists){
      if(!member) return message.channel.send("Provide an user to shoot")
      if(member.id == message.author.id) return message.channel.send("You dont wanna shoot yourself")
      if(mpassive == 'on') return message.channel.send('Leave the poor guy alone')
      db.collection('Userinfo').doc(member.id).get().then((a) => {
        if (!a.exists) {
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
            message.channel.send(`${member} is too broke and doesnt have a dollar`)
          })
        }
        if(a.exists){
               let wcash2;   
              db.collection('Userinfo').doc(member.id).get().then((a) =>{
              wcash2 = a.data().cash  
               if(!wcash2) wcash2 = 0; 
          let selected;
          let bullet;
          let projectile;
          let wcash;
          selected = q.data().selected
            bullet = q.data().pbullet
            projectile = q.data().rbullet
            wcash = q.data().cash
            if(selected =="Null")return message.channel.send("Your not equipped to any weapon. Equip using select command")
            if(selected == 'pistol'){
              if(timeout - (Date.now() - time) > 0){
                let left = ms(timeout - (Date.now() - time))
                message.channel.send(`You already used your pistol you can use again in **${left.hours}h ${left.minutes}m ${left.seconds}s**`)
        } else {
              if(wcash2 < 500)return message.channel.send("The user doesnt even have $500. Not Worth it")
            if(bullet == 0)return message.channel.send("You dont have any pistol bullet to shoot. Buy from shop")
            client.db.set(`Pistol-${message.member.id}`,Date.now())  
            let randomMoney = Math.floor(Math.random()*wcash2/2)
              db.collection('Userinfo').doc(message.author.id).update({
                'cash': wcash +=randomMoney,
                'pbullet': bullet -=1
              })
              db.collection('Userinfo').doc(member.id).update({
                'cash': wcash2 -=randomMoney
              }).then(() =>{
                message.channel.send(`You gained $${randomMoney} :dollar: from shooting ${member.tag}`)
              })
        }
            }
            if(selected == 'rifle'){
               if (timeout - (Date.now() - time2) > 0){
                 let left = ms(timeout - (Date.now() - time2))
                message.channel.send(`You already used your rifle you can use again in **${left.hours}h ${left.minutes}m ${left.seconds}s**`)
        } else {
              if(projectile == 0)return message.channel.send('You dont have any projectile to shoot.Buy from shop')
              client.db.set(`Rifle-${message.member.id}`,Date.now())
              let randomMoney = Math.floor(Math.random()*wcash2)
              let shaka = randomMoney-wcash2
               let randomMoney2= Math.floor(Math.random()*shaka)
               let tota = randomMoney-randomMoney2
                db.collection('Userinfo').doc(message.author.id).update({
                'cash': wcash +=tota,
                'rbullet': projectile -=1
              })
               db.collection('Userinfo').doc(member.id).update({
                'cash': wcash2 -=tota
              }).then(() =>{
                 let total = randomMoney+randomMoney2
                message.channel.send(`You gained $${total} :dollar: from shooting ${member.tag}`)
              })
            }
    }
        })
      }
        })
      }
    })
  }
module.exports.config = {
    name: "shoot",
    aliases: [],
   category: "Economy",
   usage : "shoot <mention>",
   description: "Shoot a person to steal their loot"
}