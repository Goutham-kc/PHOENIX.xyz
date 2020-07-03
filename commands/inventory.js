const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = async (client, message, args, db) => {
         db.collection('Inventory').doc(message.author.id).get().then((q) => {
    if (!q.exists) {
      db.collection('Inventory').doc(message.author.id).set({
        'Name': message.author.username,
        'Nlootbox': 0,
        'Rlootbox' : 0,
        'Mlootbox' : 0,
        'Llootbox' : 0
      })
      var embed = new Discord.MessageEmbed()
      .setTitle(`Inventory of ${message.author.username}`)
      .addField("<:lootbox:712832895353618523> Normal Lootboxes:",'0')
      .addField("<:lootbox:712832895353618523> Rare Lootboxes:",'0')
      .addField("<:lootbox:712832895353618523> Mythic Lootboxes:",'0')
      .addField("<:legend:712833024458489897> Legendary crate",'0')
      .setFooter(config.embed.footer,message.author.avatarURL())
        message.channel.send(embed);
    }
           if(q.exists){
  let nloot;
  let rloot;
  let mloot;
  let lloot;
    db.collection('Inventory').doc(message.author.id).get().then((a) => {
    nloot = a.data().Nlootbox
    rloot = a.data().Rlootbox
    mloot = a.data().Mlootbox
    lloot = a.data().Llootbox
    if(!nloot) nloot = 0;
      if(!rloot) rloot = 0;
      if(!mloot) mloot = 0;
      if(!lloot) lloot = 0;
  var embed = new Discord.MessageEmbed()
  .setTitle(`Inventory of ${message.author.username}`)
  .addField("<:lootbox:712832895353618523> Normal Lootboxes:",nloot)
  .addField("<:lootbox:712832895353618523> Rare Lootboxes:",rloot)
  .addField("<:lootbox:712832895353618523> Mythic Lootboxes:",mloot)
  .addField("<:legend:712833024458489897> Legendary crate",lloot)
  .setFooter(config.embed.footer,message.author.avatarURL())
    message.channel.send(embed);
    })
           }
})
}
module.exports.config = {
    name: "inventory",
    aliases: ["inv"],
   category: "Economy",
   usage : "inv",
   description: "See whats in your inventory"
}