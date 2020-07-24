const Discord = require('discord.js')
module.exports.run = async (client, message, args, db) => {
    let premium;
       let wcash;
      let bcash;
     let work;
     let pistol;
     let rifle;
     let lock;
     let pbullet;
     let rbullet;
     let nloot;
        let rloot;
        let mloot;
        let lloot;
      db.collection('Userinfo').doc(message.author.id).get().then((q) => {
  if(!q.exists){
    return db.collection('Userinfo').doc(message.author.id).set({
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
      message.channel.send("You dont have any money to buy")
    })
}
      if(q.exists){
           wcash = q.data().cash
          bcash = q.data().bank
          premium = q.data().premium
           work = q.data().job
          pistol = q.data().pistol
          lock = q.data().lock
          rifle = q.data().rifle
          pbullet = q.data().pbullet
          rbullet = q.data().rbullet
          db.collection('Inventory').doc(message.author.id).get().then((a) => {
if(!a.exists){
  db.collection('Inventory').doc(message.author.id).set({
    'Nlootbox': 2,
    'Rlootbox' : 0,
    'Mlootbox' : 0,
    'Llootbox' : 0
  }).then(()=>{
    message.reply('Your the lucky winner take this 2 normal lootbox')
  })
}
if(a.exists){
  nloot = a.data().Nlootbox
  rloot = a.data().Rlootbox
  mloot = a.data().Mlootbox
  lloot = a.data().Llootbox
  let arg = message.content.split(" ").slice(1)
  let buying = arg.join(" ")
  buying = buying.toLowerCase()
if(arg.length == 0)return message.channel.send("You need to specify something to buy")
if(arg.length > 0){
if(buying == "pistol"){
if(pistol == true) return message.channel.send('You have already bought a pistol')
if(premium == false){
  if(wcash < 15000) return message.channel.send(" You need $15000 to buy a pistol")
 db.collection('Userinfo').doc(message.author.id).update({
   'cash' : wcash -=15000
 })
db.collection('Userinfo').doc(message.author.id).update({
  'pistol' : true
}).then(() => {
  message.channel.send("You paid $15000 :dollar: and Bought a :gun: Pistol")
})
}
  if(premium == true){
    if(wcash < 10000) return message.channel.send("You need $10000 to buy a pistol ")
     db.collection('Userinfo').doc(message.author.id).update({
   'cash' : wcash -=10000
 })
      db.collection('Userinfo').doc(message.author.id).update({
  'pistol' : true
}).then(()=>{
        message.channel.send("You paid $10000 :dollar: and Bought a :gun: Pistol")
      })
  }
}
if(buying == "padlock"|| buying == "pad" || buying == "lock"){
  if(lock == true) return message.channel.send("You can only carry one Padlock with you")
   if(premium == false){
  if(wcash < 4000) return message.channel.send(" You need $4000 to buy a padlock")
 db.collection('Userinfo').doc(message.author.id).update({
   'cash' : wcash -=4000
 }) 
db.collection('Userinfo').doc(message.author.id).update({
  'lock' : true
}).then(() => {
  message.channel.send("You paid $4000 :dollar: and Bought a :lock: Padlock")
})
}
  if(premium == true){
    if(wcash < 2000) return message.channel.send("You need $2000 to buy a padlock ")
     db.collection('Userinfo').doc(message.author.id).update({
   'cash' : wcash -=2000
 })
      db.collection('Userinfo').doc(message.author.id).update({
  'lock' : true
}).then(()=>{
        message.channel.send("You paid $2000 :dollar: and Bought a :lock: Padlock")
      })
  }
}
if(buying.includes("bullet")){
let arg = message.content.split(" ").slice(2)
  let nop = parseInt(arg)
  if(arg.length == 0) return message.channel.send(" You need to enter an amount of bullet you need to buy")
  if(nop <= 0) return message.channel.send(" Thats not a valid number of bullet  to buy")
  if(isNaN(nop)) return message.channel.send("Thats not a number of bullet to buy")
  let cost = 500*nop
  if(premium == false){
    if(wcash < cost) return message.channel.send(" You cant afford that much bullet")
 db.collection('Userinfo').doc(message.author.id).update({
   'cash' : wcash -=cost,
  'pbullet' : pbullet +=nop
}).then(() => {
  message.channel.send(`You paid ${cost} :dollar: and Bought a ${nop} :smoking: bullet`)
})
}
  if(premium == true){
    let cost2 = 500*nop
    if(wcash < cost) return message.channel.send("You cant afford that much bullet  ")
     db.collection('Userinfo').doc(message.author.id).update({
   'cash' : wcash -=cost2,
  'pbullet' : pbullet +=nop
}).then(()=>{
        message.channel.send(`You paid ${cost2} :dollar: and Bought ${nop} bullet`)
      })
  }
}
if(buying.includes("projectile")){
     let arg = message.content.split(" ").slice(2)
  let nop = parseInt(arg)
  if(arg.length == 0) return message.channel.send(" You need to enter an amount of projectile you need to buy")
  if(nop <= 0) return message.channel.send(" Thats not a valid number of projectile  to buy")
      if(isNaN(nop)) return message.channel.send("Thats not a number of projectile to buy")
  let cost = 1000*nop
  if(premium == false)return message.channel.send(" Only Premium members can buy this")
  if(wcash < cost) return message.channel.send("You cant afford that much projectile")
  db.collection('Userinfo').doc(message.author.id).update({
    'cash' : wcash -=cost,
    'rbullet' : rbullet +=nop
  }).then(() => {
    message.channel.send(`You paid ${cost} :dollar: and Bought ${nop} projectile`)
  })
  }
if(buying.includes("rifle")){
  if(rifle == true) return message.channel.send(" You already own a rifle")
  if(premium == false)return message.channel.send(" Only Premium members can buy this")
  if(wcash < 20000) return message.channel.send("You Dont have Enough to buy a rifle . You need $20000 :dollar:")
  db.collection('Userinfo').doc(message.author.id).update({
    'cash': wcash -=20000,
'rifle' : true
  }).then(() => {
    message.channel.send("You Paid $20000 :dollar: and Bought a <:shootHim:693440886285271062> Rifle")
  })
  }
 if(buying.includes("normal lootbox")){
     let arg = message.content.split(" ").slice(3)
  let nop = parseInt(arg)
  if(arg.length == 0) return message.channel.send(" You need to enter an amount of lootbox you need to buy")
  if(nop <= 0) return message.channel.send(" Thats not a valid number of lootbox  to buy")
       if(isNaN(nop)) return message.channel.send("Thats not a number of lootbox to buy")
  let cost = 5000*nop
  if(wcash < cost) return message.channel.send("You cant afford that much normal lootbox(s)")
  db.collection('Userinfo').doc(message.author.id).update({
    'cash' : wcash -=cost,
  }).then(() => {
   db.collection('Inventory').doc(message.author.id).update({
     'Nlootbox' : nloot +=nop
   })
   }).then(()=>{
     message.channel.send(`You paid ${cost} :dollar: and Bought ${nop} Normal lootbox(s)`)
   })
  }
     if(buying.includes("rare lootbox")){
     let arg = message.content.split(" ").slice(3)
  let nop = parseInt(arg)
  if(arg.length == 0) return message.channel.send(" You need to enter an amount of lootbox you need to buy")
  if(nop <= 0) return message.channel.send(" Thats not a valid number of lootbox  to buy")
       if(isNaN(nop)) return message.channel.send("Thats not a number of lootbox to buy")
  let cost = 7000*nop
  if(wcash < cost) return message.channel.send("You cant afford that much rare lootbox(s)")
  db.collection('Userinfo').doc(message.author.id).update({
    'cash' : wcash -=cost,
  }).then(() => {
   db.collection('Inventory').doc(message.author.id).update({
     'Rlootbox' : rloot +=nop
   })
   }).then(()=>{
     message.channel.send(`You paid ${cost} :dollar: and Bought ${nop} Rare lootbox(s)`)
   })
  }
  if(buying.includes("mythic lootbox")){
     let arg = message.content.split(" ").slice(3)
  let nop = parseInt(arg)
  if(arg.length == 0) return message.channel.send(" You need to enter an amount of lootbox you need to buy")
  if(nop <= 0) return message.channel.send(" Thats not a valid number of lootbox  to buy")
       if(isNaN(nop)) return message.channel.send("Thats not a number of lootbox to buy")
  let cost = 12000*nop
  if(wcash < cost) return message.channel.send("You cant afford that much mythic lootbox(s)")
  db.collection('Userinfo').doc(message.author.id).update({
    'cash' : wcash -=cost,
  }).then(() => {
   db.collection('Inventory').doc(message.author.id).update({
     'Mlootbox' : mloot +=nop
   })
   }).then(()=>{
     message.channel.send(`You paid ${cost} :dollar: and Bought ${nop} Mythic lootbox(s)`)
   })
  }
  if(buying.includes("legendary crate")){
     let arg = message.content.split(" ").slice(3)
  let nop = parseInt(arg)
  if(arg.length == 0) return message.channel.send(" You need to enter an amount of lootbox you need to buy")
  if(nop <= 0) return message.channel.send(" Thats not a valid number of lootbox  to buy")
       if(isNaN(nop)) return message.channel.send("Thats not a number of lootbox to buy")
  let cost = 20000*nop
  if(wcash < cost) return message.channel.send("You cant afford that much legendary lootbox(s)")
  db.collection('Userinfo').doc(message.author.id).update({
    'cash' : wcash -=cost,
  }).then(() => {
   db.collection('Inventory').doc(message.author.id).update({
     'Llootbox' : lloot +=nop
   })
   }).then(()=>{
     message.channel.send(`You paid ${cost} :dollar: and Bought ${nop} Legendary lootbox(s)`)
   })
  }
  }
}
          })
        }
      })
    }   
module.exports.config = { 
    name: "buy",
    aliases: [],
   category: "Economy",
   usage : "buy <object_from_shop>",
   description: "Buy something from the shop"
}