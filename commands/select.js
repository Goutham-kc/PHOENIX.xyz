const Discord = require('discord.js')
module.exports.run = async (client, message, args, db) => {
 let pistol;
      let rifle;
      let selected;
      db.collection('Userinfo').doc(message.author.id).get().then((q) =>{
        pistol = q.data().pistol
        rifle = q.data().rifle
        selected = q.data().selected
      if(!pistol) pistol = false
      if(!rifle) rifle = false
      if(!selected) selected= "Null"
      let arg = message.content.split(" ").slice(1)
       if(arg.length == 0) return message.channel.send(" You need to specify a weapon to select from `pistol,rifle`")
      let toSelect = arg.join(' ')
      toSelect = toSelect.toLowerCase( )
      if(toSelect == "pistol"){
        if(selected == 'pistol') return message.channel.send(" You are already equipped to a pistol")
        if(pistol == false) return message.channel.send(" You Dont own a pistol")
        db.collection('Userinfo').doc(message.author.id).update({
          'selected' : toSelect
        }).then(() => {
message.channel.send(`Equipped ${toSelect}`);
        })
      }
      if(toSelect == "rifle"){
           if(rifle == false) return message.channel.send(" You Dont Own a rifle");
        if(selected == "rifle") return message.channel.send(' You are already equipped to a rifle')
        db.collection('Userinfo').doc(message.author.id).update({
          'selected' : toSelect
        }).then(() => {
          message.channel.send(`Equiped ${toSelect}`);
        })
      }
        })
}
module.exports.config = {
    name: "select",
    aliases: [],
   category: "Economy",
   usage : "select <weapon>",
   description: "Select your weapon of choice to attack someone"
}