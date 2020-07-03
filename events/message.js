const config = require('../config.json')
const FieldValue = require('firebase-admin').firestore.FieldValue;
const admin = require ('firebase-admin');
const serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

module.exports = async (client, message) => {
    if(message.author.bot || message.channel.type === "dm") return;
    let prefix = config.prefix
    let fetched = await client.db.get(`prefix-${message.guild.id}`, config.prefix);
     if(fetched === null)prefix = config.prefix
     else prefix = fetched
     client.prefix = prefix
  //Mention Prefix!!!!!
     const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
   message.channel.send({embed: {
     title: `**My prefix on this server is:** \`${prefix}\``,
     color: 0x00FFFF
   }})
  }
  //Commands
   if(!message.content.startsWith(prefix)) return;
    let args = message.content.substring(prefix.length).split(" ")
    const cmd= args.shift().toLowerCase();
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) commandfile.run(client,message,args,db,prefix)
    
 }