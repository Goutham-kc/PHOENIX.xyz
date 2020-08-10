const Discord = require('discord.js')
const config = require('../config.json')
const ms = require('parse-ms')
const FieldValue = require('firebase-admin').firestore.FieldValue;
module.exports.run = async (client,message,args,db,prefix) => {
         db.collection('Inventory').doc(message.author.id).get().then((a) => {
    if (!a.exists) {
   db.collection('Inventory').doc(message.author.id).set({
     'Nlootbox': 0,
     'Rlootbox' : 0,
     'Mlootbox' : 0,
     'Llootbox' : 0
   }).then(()=>{
     message.channel.send("You dont have any item to use")
   })
    }
          if(a.exists){
             db.collection('Userinfo').doc(message.author.id).get().then((q) => {
        if(!q.exists){
          nloot = a.data().Nlootbox
          rloot = a.data().Rlootbox
          mloot = a.data().Mlootbox
          lloot = a.data().Llootbox
          if(nloot !== 0){
            db.collection('Userinfo').doc(message.author.id).set({
              'Name': message.author.username,
               'cash' : 3000,
                   'bank' : 0,
                    'limit' : 2000,
                     'rep' : 0,
                   'premium' : false,
                   'job' : 'Null',
                   'lock' : false,
                   'pistol' : false,
                   'rifle' : false,
                   'pbullet' : 0,
                      'rbullet' : 0
            }).then(() => {
          message.channel.send(`You got $3000`)
          })
          }
          else if(rloot !== 0){
            db.collection('Userinfo').doc(message.author.id).set({
              'Name': message.author.username,
               'cash' : 3000,
                   'bank' : 0,
                    'limit' : 2000,
                     'rep' : 0,
                   'premium' : false,
                   'job' : 'Null',
                   'lock' : false,
                   'pistol' : false,
                   'rifle' : false,
                   'pbullet' : 0,
                      'rbullet' : 0
            }).then(() => {
          message.channel.send(`You got $3000`)
          })
          } 
          else if(mloot !== 0){
            db.collection('Userinfo').doc(message.author.id).set({
              'Name': message.author.username,
               'cash' : 3000,
                   'bank' : 0,
                    'limit' : 2000,
                     'rep' : 0,
                   'premium' : false,
                   'job' : 'Null',
                   'lock' : false,
                   'pistol' : false,
                   'rifle' : false,
                   'pbullet' : 0,
                      'rbullet' : 0
            }).then(() => {
          message.channel.send(`You got $3000`)
          })
          }
          else if(lloot !== 0){
            db.collection('Userinfo').doc(message.author.id).set({
              'Name': message.author.username,
               'cash' : 3000,
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
            }).then(() => {
          message.channel.send(`You got $3000`)
          })
          }else{
message.reply("you dont have any lootbox to open")
          }
         
        }
               if(q.exists){
  let nloot;
  let rloot;
  let mloot;
  let lloot;
  let wcash;
  let bullet;
  let pistol;
 let array = []
db.collection('Premiums').doc('Keys').get().then((a) => {
    if (a.exists) {
     array = a.data().Keys
    }
        if (!array) array = "Null"
    db.collection('Inventory').doc(message.author.id).get().then((a) => {
    nloot = a.data().Nlootbox
    rloot = a.data().Rlootbox
    mloot = a.data().Mlootbox
    lloot = a.data().Llootbox
    if(!nloot) nloot = 0;
      if(!rloot) rloot = 0;
      if(!mloot) mloot = 0;
      if(!lloot) lloot = 0;
   db.collection('Userinfo').doc(message.author.id).get().then((m) => {
     wcash = m.data().cash
     bullet = m.data().bullet
     if(!wcash) wcash = 0;
     if(!bullet) bullet = 0
     let arg = message.content.split(" ").slice(1)
     if(arg.length == 0)return message.channel.send("Specify a object to use")
     let obj = arg.join(" ")
     obj = obj.toLowerCase()
     if(obj == "normal lootbox"){
         if(nloot <= 0 ) return message.channel.send("You have zero Normal lootbox to open")
       let rn = Math.floor(Math.random()*10)
       console.log(rn)
       if(rn >= 1 && rn <= 3){
       db.collection('Inventory').doc(message.author.id).update({
         'Nlootbox' : nloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a normal lootbox <a:openloot:712832863007014913>")
       })
      let rm = Math.floor(Math.random() * (3000 - 2000)+2000)
       db.collection('Userinfo').doc(message.author.id).update({
         'cash' : wcash += rm
       }).then(()=>{
         message.channel.send(`And got ${rm} :dollar:`)
       })
     }
             if(rn >= 4 && rn <= 7){
       db.collection('Inventory').doc(message.author.id).update({
         'Nlootbox' : nloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a normal lootbox <a:openloot:712832863007014913>")
       })
      let rm = Math.floor(Math.random() * (5000 - 3000)+3000)
       db.collection('Userinfo').doc(message.author.id).update({
         'cash' : wcash += rm
       }).then(()=>{
         message.channel.send(`And got ${rm} :dollar:`)
       })
     }
              if(rn >= 8 && rn <= 10){
       db.collection('Inventory').doc(message.author.id).update({
         'Nlootbox' : nloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a normal lootbox <a:openloot:712832863007014913> and It was empty")
       })
     }
       
     }
          if(obj == "rare lootbox"){
         if(rloot  <= 0 )return message.channel.send("You have zero Rare lootbox to open")
       let rn = Math.floor(Math.random()*10)
       console.log(rn)
       if(rn >= 1 && rn <= 3){
       db.collection('Inventory').doc(message.author.id).update({
         'Rlootbox' : rloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a rare lootbox <a:openloot:712832863007014913>")
       })
      let rm = Math.floor(Math.random() * (5000 - 3000)+3000)
       db.collection('Userinfo').doc(message.author.id).update({
         'cash' : wcash += rm
       }).then(()=>{
         message.channel.send(`And got ${rm} :dollar:`)
       })
     }
             if(rn >= 4 && rn <= 7){
       db.collection('Inventory').doc(message.author.id).update({
         'Rlootbox' : rloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a rare lootbox <a:openloot:712832863007014913>")
       })
      let rm = Math.floor(Math.random() * (10000 - 7000)+7000)
       db.collection('Userinfo').doc(message.author.id).update({
         'cash' : wcash += rm
       }).then(()=>{
         message.channel.send(`And got ${rm} :dollar:`)
       })
     }
              if(rn >= 8 && rn <= 10){
       db.collection('Inventory').doc(message.author.id).update({
         'Rlootbox' : rloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a normal lootbox <a:openloot:712832863007014913>and It was empty")
       })
     }
          }
            if(obj == "mythic lootbox"){
         if(mloot <= 0 )return message.channel.send("You have zero Mythic lootbox to open")
       let rn = Math.floor(Math.random()*10)
       console.log(rn)
       if(rn >= 1 && rn <= 3){
       db.collection('Inventory').doc(message.author.id).update({
         'Mlootbox' : mloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a mythic lootbox <a:openloot:712832863007014913>")
       })
      let rm = Math.floor(Math.random() * (7000 - 5000)+5000)
       db.collection('Userinfo').doc(message.author.id).update({
         'cash' : wcash += rm
       }).then(()=>{
         message.channel.send(`And got ${rm} :dollar:`)
       })
     }
             if(rn >= 4 && rn <= 7){
       db.collection('Inventory').doc(message.author.id).update({
         'Mlootbox' : mloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a mythic lootbox <a:openloot:712832863007014913>")
       })
       db.collection('Userinfo').doc(message.author.id).update({
         'pistol' : true
       }).then(()=>{
         message.channel.send(`And got :gun: Pistol`)
       })
     }
              if(rn >= 8 && rn <= 10){
       db.collection('Inventory').doc(message.author.id).update({
         'Nlootbox' : nloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a mythic lootbox <a:openloot:712832863007014913> and It was empty")
       })
              }
     }
              if(obj == "legendary crate"){
         if(lloot <=0 )return message.channel.send("You have zero Legendary crate to open")
       let rn = Math.floor(Math.random()*10)
       console.log(rn)
       if(rn >= 1 && rn <= 5){
       db.collection('Inventory').doc(message.author.id).update({
         'Llootbox' : lloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a legendary crate <a:openlegend:712832996591272026>")
       })
      let rm = Math.floor(Math.random() * (12000 - 10000)+10000)
       db.collection('Userinfo').doc(message.author.id).update({
         'cash' : wcash += rm
       }).then(()=>{
         message.channel.send(`And got ${rm} :dollar:`)
       })
     }
             if(rn == 6 && rn == 7){
       db.collection('Inventory').doc(message.author.id).update({
         'Llootbox' : lloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a legendary crate <a:openlegend:712832996591272026>")
       })
       db.collection('Userinfo').doc(message.author.id).update({
         'rifle' : true
       }).then(()=>{
         message.channel.send(`And got <:shootHim:693440886285271062>  Rifle`)
       })
     }
              if(rn == 10 || rn ==  9){
       db.collection('Inventory').doc(message.author.id).update({
         'Nlootbox' : nloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a legendary crate <a:openlegend:712832996591272026> and  It was empty")
       })
     }
            if(rn == 8){
         const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
       db.collection('Inventory').doc(message.author.id).update({
         'Nlootbox' : nloot -=1
       }).then(()=>{
         message.channel.send("You have succesfully open a legendary crate <a:openlegend:712832996591272026> and ..")
          })
             db.collection('Premiums').doc("Keys").get().then((a) => {
        if(!a.exists){
          db.collection('Premiums').doc("Keys").set({
            'Keys' : key
          })
        }
            if(a.exists){
                db.collection('Premiums').doc("Keys").update({
            'Keys' : FieldValue.arrayUnion(key)
                })
            }
      }).then(()=>{
               message.author.send(`Use \` ${prefix}claim <key> \` to claim the key. Premium: ||${key}||`)
             })
     }
       
     }
     })
    })
               })
           }
             })
}
         })
}
module.exports.config = {
    name: "use",
    aliases: ["open"],
   category: "Economy",
   usage : "use <item>",
   description: "Use an item from inventory"
}