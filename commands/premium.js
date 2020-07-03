const Discord = require('discord.js')
const FieldValue = require('firebase-admin').firestore.FieldValue;
module.exports.run = async (client, message, args, db) => {

 let array = []
   db.collection('Premiums').doc('Keys').get().then((a) => {
    if (a.exists) {
     array = a.data().Keys
    }
        if (!array) array = "Null"
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
      }).then(()=>{
        message.channel.send(`You need 50k :dollar: to buy a a premium key`)
      })
    }
        if(q.exists){
      if(message.author.id == "685506829228179515" || message.author.id == "385123409262018560"){
        const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        message.channel.send(key)
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
      })
      }
      if(message.author.id != '685506829228179515' && message.author.id != '385123409262018560'){
         let wcash;

      db.collection('Userinfo').doc(message.author.id).get().then((q) => {
        if(q.exists){
   wcash = q.data().cash
        }
         if(!wcash) wcash = 0
      if(wcash < 50000)return message.channel.send("You need 50k to buy a premium key")
      if(wcash >= 50000){
        const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        message.author.send(`You have successfully generated a premium key: \`${key}\``).catch(err => {
          message.channel.send(`You have successfully generated a premium key: \`${key}\``)
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
      })
db.collection('Userinfo').doc(message.author.id).update({
  'cash' : wcash -=50000
})
    }
         })
      }
      }
      })
         })
}
module.exports.config = {
    name: "premium",
    aliases: ["prem"],
   category: "Utility",
   usage : "premium",
   description: "Generates a premium key if u have 50k"
}