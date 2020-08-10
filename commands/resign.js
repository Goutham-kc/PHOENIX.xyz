const Discord = require('discord.js')
const config = require('../config.json')
const ms = require('parse-ms')
module.exports.run = async (client, message, args, db) => {
  let prefix = config.prefix
  let fetched = await client.db.get(`prefix-${message.guild.id}`, config.prefix);
   if(fetched === null)prefix = config.prefix
   else prefix = fetched
     let work;
      db.collection('Userinfo').doc(message.author.id).get().then((q) => {
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
                  'selected' : 'Null'
          }).then(()=>{
            message.channel.send(`You dont have any work to resign`)
          })
        }
        if(q.exists){
           work = q.data().job
      if(work == "Null") return message.channel.send("You dont have a work to resign");
      db.collection('Userinfo').doc(message.author.id).update({
        'job' : 'Null'
      }).then(() => {
        message.channel.send(`You have resigned your job .Use \`${prefix}work\` to get a job again`)
      })
    }
  })
}
module.exports.config = {
    name: "resign",
    aliases: [],
   category: "Economy",
   usage : "resign",
   description: "Resigns your current job"
}