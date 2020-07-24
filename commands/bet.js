const Discord = require('discord.js')
module.exports.run = async (client, message, args, db) => {
  let apassive = await client.db.get(`PassiveMode-${message.member.id}`)
  if(!apassive) apassive = 'off'
  if(apassive == 'on') return message.channel.send('You cant gamble if your in passive')
  let wcash;
    db.collection('Userinfo').doc(message.author.id).get().then((q)=> {
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
            message.channel.send("You dont have any money to bet")
          })
        }
        if(q.exists){
          let wcash = q.data().cash
          let rolled = Math.random()*100
          let rolled2= Math.random()*100
         let arg = message.content.split(" ").slice(1)
         let td = arg.join(" ")
         if(td == "all"){
          let won = Math.floor(wcash/2)
          if(wcash < 10)return message.channel.send('The minium money to gamble is $10 :dollar:')
          if(Math.floor(rolled/ 10) > Math.floor(rolled2/ 10)){
            db.collection('Userinfo').doc(message.author.id).update({
              'cash' : wcash +=won
            }).then(()=> {
            const win = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}\`s Gambling`)
            .setColor("GREEN")
            .setDescription(`You won **${won}** cash`)
            .addField(message.author.username,`Rolled a \`${Math.floor(rolled/ 10)}\``, true)
            .addField(`PHOENIX.xyz`, `Rolled a \`${Math.floor(rolled2/ 10)}\``,true)
            .setFooter("I Underestimated you")
            message.channel.send(win)
            })
            }
          if(Math.floor(rolled/ 10)< Math.floor(rolled2/ 10)){
            const money = wcash
            db.collection('Userinfo').doc(message.author.id).update({
              'cash' : wcash -=wcash
            }).then(()=> {
          const lose= new Discord.MessageEmbed()
            .setTitle(`${message.author.username}\`s Gambling`)
          .setColor("RED")
            .setDescription(`You lost **${money}** cash`)
            .addField(message.author.username,`Rolled a \`${Math.floor(rolled/ 10)}\``, true)
            .addField(`PHOENIX.xyz`, `Rolled a \`${Math.floor(rolled2/ 10)}\``,true)
            .setFooter("Sucks to Be you")
          message.channel.send(lose)
          })
          }
          if(Math.floor(rolled/ 10) ==Math.floor(rolled2/ 10)){
                 let tied1= Math.floor(wcash/2)
            db.collection('Userinfo').doc(message.author.id).update({
              'cash' : wcash -=tied1
            }).then(() => {
               const tied= new Discord.MessageEmbed()
            .setTitle(`${message.author.username}\`s Gambling`)
               .setColor("RANDOM")
            .setDescription(`You lost **${tied1}** cash`)
            .addField(message.author.username,`Rolled a \`${Math.floor(rolled/ 10)}\``, true)
            .addField(`PHOENIX.xyz`, `Rolled a \`${Math.floor(rolled2/ 10)}\``,true)
            .setFooter("Tied.Good game")
               message.channel.send(tied)
          })
          }
        }
          if(td !== "all"){
         arg = parseInt(arg)
         if(arg <= 0)return message.channel.send('Not a valid number to bet')
           let won = Math.floor(arg/2)
         if(isNaN(arg))return message.channel.send("Not a valid number")
           if(arg > wcash) return message.channel.send(" You dont have this much money")
           if(arg < 10)return message.channel.send('The minium money to gamble is $10 :dollar:')
           if(Math.floor(rolled/ 10) > Math.floor(rolled2/ 10)){
             db.collection('Userinfo').doc(message.author.id).update({
               'cash' : wcash +=won
             }).then(()=> {
             const win = new Discord.MessageEmbed()
             .setTitle(`${message.author.username}\`s Gambling`)
             .setColor("GREEN")
             .setDescription(`You won **${won}** cash`)
             .addField(message.author.username,`Rolled a \`${Math.floor(rolled/ 10)}\``, true)
             .addField(`PHOENIX.xyz`, `Rolled a \`${Math.floor(rolled2/ 10)}\``,true)
             .setFooter("I Underestimated you")
             message.channel.send(win)
             })
             }
           if(Math.floor(rolled/ 10)< Math.floor(rolled2/ 10)){
             db.collection('Userinfo').doc(message.author.id).update({
               'cash' : wcash -=arg
             }).then(()=> {
           const lose= new Discord.MessageEmbed()
             .setTitle(`${message.author.username}\`s Gambling`)
           .setColor("RED")
             .setDescription(`You lost **${arg}** cash`)
             .addField(message.author.username,`Rolled a \`${Math.floor(rolled/ 10)}\``, true)
             .addField(`PHOENIX.xyz`, `Rolled a \`${Math.floor(rolled2/ 10)}\``,true)
             .setFooter("Sucks to Be you")
           message.channel.send(lose)
           })
           }
           if(Math.floor(rolled/ 10) ==Math.floor(rolled2/ 10)){
                  let tied1= Math.floor(arg/2)
             db.collection('Userinfo').doc(message.author.id).update({
               'cash' : wcash -=tied1
             }).then(() => {
                const tied= new Discord.MessageEmbed()
             .setTitle(`${message.author.username}\`s Gambling`)
                .setColor("RANDOM")
             .setDescription(`You lost **${tied1}** cash`)
             .addField(message.author.username,`Rolled a \`${Math.floor(rolled/ 10)}\``, true)
             .addField(`PHOENIX.xyz`, `Rolled a \`${Math.floor(rolled2/ 10)}\``,true)
             .setFooter("Tied.Good game")
                message.channel.send(tied)
           })
           }
        }
      }
      })
    }
module.exports.config = {
    name: "bet",
    aliases: [],
   category: "Economy",
   usage : "bet <money_to_bet> ",
   description: "Want some extra cash this is the command!"
}