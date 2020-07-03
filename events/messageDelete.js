
module.exports = function(client,message,channel){
  if(message.author.bot) return
    client.snipes = new Map();
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author,
        channel: message.channel.name,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
      })
}