const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    
    if(!args[0]) return message.channel.send('Please provide an emoji to enlarge')
        let emotes = Discord.Util.parseEmoji(args[0]);
        if(emotes.id === null)return message.channel.send(" I only support custom emojis")
        if(args[1]) return message.channel.send(' currently I only support one emoji at a time')
        let e = client.emojis.cache.get(emoji => emoji.id == emotes)
                let link;
                if(emotes.animated === false){
                    link = `https://cdn.discordapp.com/emojis/${emotes.id}.png`
                } 
                if(emotes.animated == true){
                    link = `https://cdn.discordapp.com/emojis/${emotes.id}.gif`
                }
           message.channel.send({files: [link]})
            }
module.exports.config = {
    name: "jumbo",
    aliases: ["enlarge"],
   category: "Fun",
   usage : "jumbo <emoji>",
   description: "Enlarges a custom emoji. **NOTE:** wont work on build in emoji's"
}