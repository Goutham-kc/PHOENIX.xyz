//Initialization
const Discord = require('discord.js');
const client = new Discord.Client();
const { VultrexDB } = require("vultrex.db");
const fs = require('fs');
const config = require('./config.json');

const vdb = new VultrexDB({
  provider: 'mongodb',
  url: 'mongodb+srv://PHOENIXxyz:phoenixdev@cluster0-2rrk3.mongodb.net/test',
  collection: 'Prefix'
  });

  vdb.connect().then(() => {
    client.db = vdb;
  })
//Status
  const { Constants } = require("discord.js");
Constants.DefaultOptions.ws.properties.$browser = "Discord Android"

//Command Handler
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }
    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
         client.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        })
    })
});

//Events Handler
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});
client.login(config.token)
