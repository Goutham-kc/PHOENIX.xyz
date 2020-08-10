const Discord = require('discord.js')
module.exports.run = async (client, message, args, db) => {
  let member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  db.collection('Userinfo').doc(member.id).get().then((q) => {
    if (!q.exists) {
      db.collection('Userinfo').doc(member.id).set({
        'Name': member.username,
        'cash': 0,
        'bank': 0,
        'limit': 2000,
        'rep': 0,
        'premium': false,
        'job': 'Null',
        'lock': false,
        'pistol': false,
        'rifle': false,
        'pbullet': 0,
        'rbullet': 0,
        'selected': 'Null'
      }).then(() => {
        const profile = new Discord.MessageEmbed()
          .setTitle(`Profile of ${member.username}`)
          .setThumbnail(member.displayAvatarURL())
          .addField(`:briefcase: Wallet`, '0', true)
          .addField(`:bank: Bank`, '0', true)
          .addField(`:medal: Premium`, false, true)
          .addField(`:star: Reputation points:`, '0', true)
          .addField(`:gun: Pistol`, 'Not owned', true)
          .addField(`<:shootHim:693440886285271062> Rifle`, 'Not owned', true)
          .addField(`:man_office_worker: Work`, 'Null')
          .setTimestamp()
          .setFooter(`Requested by ${member.username}`, member.avatarURL())
        message.channel.send(profile)
      })
    }
    if (q.exists) {
      const pis = { true: "Owned", false: "Not owned" }
      const rif = { true: "Owned", false: "Not owned" }
      let wcash;
      let bcash
      let premium;
      let rifle;
      let pistol;
      let rep;
      let work
      db.collection('Userinfo').doc(member.id).get().then((q) => {
        wcash = q.data().cash
        bcash = q.data().bank
        premium = q.data().premium
        rifle = q.data().rifle
        pistol = q.data().pistol
        rep = q.data().rep
        work = q.data().job
        if (!wcash) wcash = 0;
        if (!bcash) bcash = 0;
        if (!premium) premium = false;
        if (!rifle) rifle = false;
        if (!pistol) pistol = false;
        if (!rep) rep = 0;
        if (!work) work = "Null"
        const profile = new Discord.MessageEmbed()
          .setTitle(`Profile of ${member.username}`)
          .setThumbnail(member.displayAvatarURL())
          .addField(`:briefcase: Wallet`, wcash, true)
          .addField(`:bank: Bank`, bcash, true)
          .addField(`:medal: Premium`, premium, true)
          .addField(`:star: Reputation points:`, rep, true)
          .addField(`:gun: Pistol`, pis[pistol], true)
          .addField(`<:shootHim:693440886285271062> Rifle`, rif[rifle], true)
          .addField(`:man_office_worker: Work`, work)
          .setTimestamp()
          .setFooter(`Requested by ${member.username}`, member.avatarURL())
        message.channel.send(profile)
      })
    }
  })
}
module.exports.config = {
  name: "profile",
  aliases: ["pf"],
  category: "Economy",
  usage: "profile || profile <mention>",
  description: "See your work/premium/rep etc"
}