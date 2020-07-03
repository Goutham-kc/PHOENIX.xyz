const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
   message.channel.send(new Discord.MessageEmbed() 
                               .setTitle('Store') 
                               .addField(':lock: Padlock',`Protect your wallet from pocket pickers. Cost: $4000 , $2000 for premium members`)
                              .addField(':gun: Pistol ',`Shoots a person a steals their money . Cost: $15000, $10000 for premium members`)
                              .addField(':smoking: Bullet',`Required if pistol is needed to use. Cost: $1000, $500 for premium members`)
                              .addField(`<:shootHim:693440886285271062> Rifle`,`Damage increases by 50% than pistol. Cost:20000(Premium members only)`)
                              .addField(`:smoking: Projectile`,`Required if Rifle is needed to use. Cost: $1000 (Premium members only)`)
                               .addField(`<:lootbox:712832895353618523> Normal Lootbox`,`A normal lootbox containing a reward.Cost: 5k`)
                               .addField(`<:lootbox:712832895353618523> Rare Lootbox`,`A rare lootbox containing a reward twice better of a normal lootbox. Cost 7k`)
                                .addField(`<:lootbox:712832895353618523> Mythic Lootbox`,`A mythic lootbox containing a rewards Better than a rare lootbox. Cost: 12k`)
                                .addField(`<:legend:712833024458489897> Legendary crate`,`A crate containing rewards and possibly a premium key. Cost: 20k`)
                                .addField(`:key: **Premium Key**`,`Cost: 50000`))
}
module.exports.config = {
    name: "shop",
    aliases: [],
   category: "Economy",
   usage : "shop",
   description: "See the available items to buy off from shop"
}