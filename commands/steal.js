const Discord = require('discord.js')
const ms = require('parse-ms')
module.exports.run = async (client,message,args,db) => {
    const timeout = 3600000;
    let time = await client.db.get(`Steal-${message.member.id}`)
    if(!time) time = 0;
    const member = message.mentions.users.first() ||  await client.users.fetch(args[0]) || null;
    let passive = await client.db.get(`PassiveMode-${message.member.id}`)
    if(!passive) passive = 'off'
    if(passive == 'on') return message.channel.send('You cant rob when you in passive')
    let mpassive = await client.db.get(`PassiveMode-${member.id}`)
    if(!mpassive) mpassive = 'off'
    if(!member)return message.channel.send(`You need to mention a user to rob`)
    if(member.id == message.author.id)return message.channel.send(`You cant rob your-self dumb dumb`)
    if(mpassive == 'on') return message.channel.send('Leave the poor guy alone')
    db.collection('Userinfo').doc(message.author.id).get().then((q)=>{
    if(!q.exists){
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
              message.channel.send(`You need $500 to steal`)
          })
    }
    if(q.exists){
    db.collection('Userinfo').doc(member.id).get().then((p)=>{
    if(!p.exists){
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
                    'selected' : 'Null',
                    'upad':0,
                    'mpad': 0
          }).then(()=>{
              message.channel.send(`**${member.username}** does not even have $500 .Not worth it`)
          })
    }
    if(p.exists){
    let wcash = q.data().cash
    let wcash1 = p.data().cash
    let lock = p.data().lock   
    if(!lock) lock = false 
    if(wcash < 500) return message.channel.send(`You need atleast $500 to rob somebody`)
    if(wcash1 < 500) return message.channel.send(`The user does not even have $500 .Not worth it `)
    if(timeout - (Date.now() - time) > 0) {
        let left = ms(timeout - (Date.now() - time))
        message.channel.send(`You've already robbed someone come back in **${left.minutes}m ${left.seconds}s**`);
} else {
    client.db.set(`Steal-${message.member.id}`,Date.now())
    if(lock == true){
    db.collection('Userinfo').doc(message.author.id).update({
    'cash': wcash -=500,
    }).then(()=>{
        db.collection('Userinfo').doc(member.id).update({
            'cash': wcash1 +=500,
            'lock': false
        }).then(()=>{
            message.channel.send(`You tried to rob **${member.username}** just to see that they had a massive padlock at their wallet and u paid $500 :dollar:`)
        })
    })
    }
    if(lock == false){
let rnumber = Math.random()
if(rnumber >= 0.5){
db.collection('Userinfo').doc(message.author.id).update({
    'cash': wcash -=500
}).then(()=>{
    db.collection('Userinfo').doc(member.id).update({
        'cash': wcash1 += 500
    }).then(()=>{
        message.channel.send(`You was caught!. You paid $500 :dollar: to stay out of prison`)
    })
})
}
if(rnumber < 0.5){
let idk =   Math.floor(wcash/Math.floor(Math.random()*5))
db.collection('Userinfo').doc(message.author.id).update({
    'cash': wcash += idk
}).then(()=>{
    db.collection('Userinfo').doc(member.id).update({
        'cash': wcash1 -=idk
    }).then(()=>{
        message.channel.send(`You got a payout of $${idk} :dollar:`)
    })
})
}
    }
    } 
}
    })
    }
    })
}
module.exports.config = {
    name: "steal",
    aliases: ["rob"],
   category: "Economy",
   usage : "steal <mention>",
   description: "Steal cash from a user"
}
