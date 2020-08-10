const Discord = require('discord.js')
const FieldValue = require('firebase-admin').firestore.FieldValue;
module.exports.run = async (client, message, args, db) => {
  let array = []
   db.collection('Premiums').doc('Keys').get().then((a) => {
    if (a.exists) {
     array = a.data().Keys
    }
     if (!array) array = "Null"
      let premium;
         db.collection('Userinfo').doc(message.author.id).get().then((q) => {
    if (!q.exists) {
      let arg = message.content.split(" ").slice(1);
      if(arg.length == 0) return message.channel.send("You did not input a Key")
      let claimed = arg.join(' ')
      if(!array.includes(claimed)) return message.channel.send("The key is Not valid or it has been used");
      if(array.includes(claimed)){
      db.collection('Userinfo').doc(message.author.id).set({
        'Name': message.author.username,
         'cash' : 0,
             'bank' : 0,
              'limit' : 2000,
               'rep' : 0,
             'premium' : true,
             'job' : 'Null',
             'lock' : false,
             'pistol' : false,
             'rifle' : false,
             'pbullet' : 0,
                'rbullet' : 0,
                'selected' : 'Null'
      }).then(() =>{ 
        message.channel.send("You have **Claimed** the premium key")
      })
    }
    }
    if(q.exists){
      let premium = q.data().premium
  if(premium == true) return message.channel.send("You have already claimed premium")
      let arg = message.content.split(" ").slice(1);
        if(arg.length == 0) return message.channel.send("You did not input a Key")
      let claimed = arg.join(' ')
      if(!array.includes(claimed)) return message.channel.send("The key is Not valid or it has been used");
    if(array.includes(claimed)){
db.collection('Premiums').doc('Keys').update({
'Keys' : FieldValue.arrayRemove(claimed)
}).then(() =>{
     db.collection('Userinfo').doc(message.author.id).update({
         'premium' : true
  })
})
message.channel.send("You have **Claimed** the premium key");
}
    }
            })
      })
}
module.exports.config = {
    name: "claim",
    aliases: ["redeem"],
   category: "Utility",
   usage : "claim <premium_key>",
   description: "Claim your premium key to unlock all premium features"
}