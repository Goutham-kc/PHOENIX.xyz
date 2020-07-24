const Discord = require('discord.js')
const ms = require('parse-ms')
module.exports.run = async (client,message,args,db,prefix) => {
  const timeout = 36000000
  let time = await client.db.get(`Work-${message.member.id}`)
  if(!time)time = 0
        let premium;
       let wcash;
     let work;
      db.collection('Userinfo').doc(message.author.id).get().then((q) => {
        if(q.exists){
           wcash = q.data().cash
          premium = q.data().premium
           work = q.data().job
        }
if(!premium) premium = false
   if (!wcash) wcash = 0;
        if(!work) work = "Null"
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
          }).then(()=>{
            message.channel.send(`You dont have a single penny to pay for your job interview`)
          }) 
        }
   let arg = message.content.split(" ").slice(1)
          let working = arg.join(" ")
          let msg;
            if(work === "Null" && arg.length == 0) return message.channel.send(`You dont have a work choose one using \`${prefix}worklist\``);
         if(arg.length == 0){
           if (timeout - (Date.now() - time) > 0) {
             let left = ms(timeout - (Date.now() - time))
            message.channel.send(`You can work again in **${left.minutes}m ${left.seconds}s**`);
    } else {
    client.db.set(`Work-${message.member.id}`,Date.now())
if(work === "Chef"){
  db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash +=150
              })
   message.channel.send("You worked as a Chef and got $150:dollar: ")
}else if(work === "Youtuber"){
  db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash +=200
              })
   message.channel.send("You worked as a Youtuber and got $200:dollar: ")
}else if(work === "Streamer"){
  db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash +=250
              })
   message.channel.send("You worked as a Streamer and got $250:dollar: ")
}else if(work === "Teacher"){
  db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash +=300
              })
   message.channel.send("You worked as a Teacher and got $300:dollar:")
}else if(work === "Police"){
  db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash +=500
              })
   message.channel.send("You worked as a Police and got $500:dollar: ")
}else if(work === "Developer"){
  db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash +=700
              })
   message.channel.send("You worked as a Developer and got $700:dollar: ")
}else if(work === "PHOENIX.xyz Developer"){
  db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash +=1000
              })
   message.channel.send("You worked as a PHOENIX.xyz Developer and got $1000:dollar: ")
}
          }
         }
           
       if(arg.length > 0){
            if(work !== "Null") return message.channel.send(`You are already working as \`${work}\` use resign to quit your job`)
         working = working.toLowerCase()
        if(working === "chef"){
          if(wcash < 200) return message.channel.send("You dont have enough Money");
              db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash -=200
              })
            db.collection('Userinfo').doc(message.author.id).update({
                'job' : 'Chef'
              })
              message.channel.send("You have paid 200 and started working as a Chef")
        }
          if(working === "youtuber"){
              if(wcash < 250) return message.channel.send("You dont have enough Money");
              db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash -=250
              })
            db.collection('Userinfo').doc(message.author.id).update({
                'job' : 'Youtuber'
              })
              message.channel.send("You have paid 250 and started working as a Youtuber")
            }else if(working === "streamer"){
             if(wcash < 300) return message.channel.send("You dont have enough Money");
              db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash -=300
              })
            db.collection('Userinfo').doc(message.author.id).update({
                'job' : 'Streamer'
              })
              message.channel.send("You have paid 300 and started working as a Streamer")
            }else if(working === "teacher"){
               if(wcash < 400) return message.channel.send("You dont have enough Money");
              db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash -=400
              })
            db.collection('Userinfo').doc(message.author.id).update({
                'job' : 'Teacher'
              })
              message.channel.send("You have paid 400 and started working as a Teacher")
            }else if(working === "police"){
              if(wcash < 500) return message.channel.send("You dont have enough Money");
              db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash -=500
              })
            db.collection('Userinfo').doc(message.author.id).update({
                'job' : 'Police'
              })
              message.channel.send("You have paid 500 and started working as a Police")
            }else if(working === "developer"){
             if(premium == false) return message.channel.send("You have to be a premium member to work as Developer")
               if(wcash < 500) return message.channel.send("You dont have enough Money");
              db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash -=500
              })
            db.collection('Userinfo').doc(message.author.id).update({
                'job' : 'Developer'
              })
              message.channel.send("You have paid 500 and started working as a Developer")
            }else if(working === "phoenix.xyz developer"){
               if(premium == false) return message.channel.send("You have to be a premium member to work as Phoenix.xyz Developer")
               if(wcash < 700) return message.channel.send("You dont have enough Money");
              db.collection('Userinfo').doc(message.author.id).update({
                'cash' : wcash -=700
              })
            db.collection('Userinfo').doc(message.author.id).update({
                'job' : 'PHOENIX.xyz Developer'
              })
              message.channel.send("You have paid 700 and started working as a PHOENIX.xyz Developer")
            }
       }
    })
      })
}
module.exports.config = {
    name: "work",
    aliases: [],
   category: "Economy",
   usage : " work || work <job_title>",
   description: "Work and earn money orjoin a job"
}
