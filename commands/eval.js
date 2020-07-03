const Discord = require('discord.js')
const util = require("util");
const ms = require('parse-ms')
const fs = require('fs')
const FieldValue = require('firebase-admin').firestore.FieldValue;
module.exports.run = async (client,message,args,db,prefix) => {
    let owners = ['685506829228179515','612283933480058956']
    if(!owners.includes(message.author.id)) return message.channel.send("You are forbidden <a:redcross:688007167755944007>, This command is Owner only");
    let array = []
db.collection('Premiums').doc('Keys').get().then((a) => {
    if (a.exists) {
     array = a.data().Keys
    }
        if (!array) array = "Null"
      const arg = message.content.split(" ").slice(1)
    if (arg.length == 0) return message.reply(" Duh!. You must provide JavaScript code!");
    try {
        let output = eval(arg.join(" "));
        if (typeof output !== "string") output = util.inspect(output);
        return message.channel.send(`**Output:**\n\`\`\`js\n${output}\n\`\`\``);
    } catch(err) {
        return message.channel.send(`**Error:**\n\`${err}\``);
    }
   })
}
module.exports.config = {
    name: "eval",
    aliases: [],
   category: "Owner",
   usage : "eval <js>",
   description: "Owner only command"
}