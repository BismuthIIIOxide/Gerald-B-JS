const {prefix} = require('../config.json')

module.exports = async (bot, message) => {
    if( (message.guild.id === "427546996178419712" || message.guild.id === "753255421887905834") && message.author.id != bot.user.id) {
        var msg = message.content
        if (msg.search(/this/i) != -1){
            console.log(`${message.author.username} got this`)
            bot.channels.get(message.channel.id).send("https://imgur.com/aBUCsv2")
        }
    }
    if (
        message.author.id === "829844831710609441" || // Jerry3
        message.author.id === "878159432482177045" || // Meca
        message.author.id === "367714419179913216" // Mako
    ){
        var chance = Math.floor(Math.random()*(3-1+1)+1)
        if (chance==3){
            message.channel.send("stfu")
        }
    }


	// console.log((message.embeds).length)
}
