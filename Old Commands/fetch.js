module.exports = {
    commands: 'fetch', 
    expectedArgs: '',
    minArgs: 0,
    maxArgs: null, 
    callback: (message, arguments, text, client) => {
        console.log(client.channels)
        channel.fetch({ limit: 100 }).then(messages => {
            messages.forEach(msg => {
                if (msg.embeds.length > 0 && msg.author.name=="Auto Upload Bot"){
                    var embed = msg.embeds[0]
                    message.channel.send(`From ${msg.guild}\n${embed.title}\n${embed.description}\n------------------`)
                }
            })
        })
        
    }

}