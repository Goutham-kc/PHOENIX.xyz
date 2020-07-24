const Discord = require('discord.js')
const ms = require('parse-ms')
module.exports.run = async (client,message,args,db) => {
  const timeout = 3600000;
  let time = await client.db.get(`Rep-${message.member.id}`)
  if(!time)time = 0
 const member = message.mentions.users.first() || client.users.cache.get(args[0]);
 if(!member){
  db.collection('Userinfo').doc(message.author.id).get().then((q)=>{
  if(!q.exists){  
db.collection('Userinfo').doc(message.author.id).set({
    'Name': message.author.username,
      'cash' : 0,
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
  })
  message.channel.send(`You have a total of **0** rep point(s) :star:`)
}
if(q.exists){
  let rep = q.data().rep
  message.channel.send(`You have a total of **${rep}** rep point(s) :star:`)
}
 })
}
if(member){
  if(member.id == message.author.id) return message.channel.send('You cant rep yourself')
 db.collection('Userinfo').doc(member.id).get().then((q)=>{
if(!q.exists){
  if (timeout - (Date.now() - time) > 0) {
    let left = ms(timeout - (Date.now() - time))
    message.channel.send(`You have gave someone a reputation point try again in **${left.minutes}m ${left.seconds}s**`);
} else {
  client.db.set(`Rep-${message.member.id}`,Date.now())
  db.collection('Userinfo').doc(member.id).set({
    'Name': member.username,
    'cash' : 0,
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
       'selected' : 'Null'
  }).then(()=>{
    message.channel.send(`${message.author.username} gave ${member.username} **1** rep point :star:`)
  })
}
}
if(q.exists){
  if (timeout - (Date.now() - time) > 0) {
    let left = ms(timeout - (Date.now() - time))
    message.channel.send(`You have gave someone a reputation point try again in **${left.minutes}m ${left.seconds}s**`);
} else {
  client.db.set(`Rep-${message.member.id}`,Date.now())
  let rep = q.data().rep
  db.collection('Userinfo').doc(member.id).update({
    'rep': rep +=1
  }).then(()=>{
    message.channel.send(`${message.author.username} gave ${member.username} **1** rep point :star:`)
  })
}
}
 })
}
}
module.exports.config = {
    name: "rep",
    aliases: [],
   category: "Economy",
   usage : "rep || rep <mention>",
   description: "Give reputation point to someone or just see your reputaion point"
}