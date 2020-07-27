const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  let arg = message.content.split(" ").slice(1)
  if(arg.length == 0){
    const categories = [...new Set(client.commands.map(cmd => cmd.config.category))];
    const embed = new MessageEmbed();
    for (const category of categories) {
        embed.setColor("RANDOM")
        embed.addField(category,
        client.commands
            .filter(cmd => cmd.config.category === category)
            .map(cmd => `\`${cmd.config.name}\``)
            .join(", "));
    }
       message.channel.send(embed)
    }
    if(arg.length !==0){
      let help = arg.join(" ")
      help = help.toLowerCase()
      let h = client.commands.filter(cmd => cmd.config.name == help).map(cmd => cmd.config.name).join(" ")
      if(help !== h) return message.channel.send("I could'nt find such a command")
      let aliases;
    if(client.commands.filter(cmd => cmd.config.name == help).map(cmd => cmd.config.aliases).join(" ").length == 0) {
      aliases = "NONE"
    } else {
      aliases = client.commands.filter(cmd => cmd.config.name == help).map(cmd => cmd.config.aliases).join(" ")
    }
      
      let helpem = new MessageEmbed()
      .setColor("RED")
      .setTitle(`${h}`)
      .addField(`Usage`,client.commands.filter(cmd => cmd.config.name == help).map(cmd => cmd.config.usage).join(" "))
      .addField(`Description`,client.commands.filter(cmd => cmd.config.name == help).map(cmd => cmd.config.description).join(" "))
      .addField(`Aliases`,aliases)
      message.channel.send(helpem)
}
}
module.exports.config = {
  name: "help",
  aliases: ["commands"],
 category: "Miscellaneous",
 usage : "help || help <command_name>",
 description: "See whats in your inventory. **NOTE** You cant search command name by its aliases"
} 