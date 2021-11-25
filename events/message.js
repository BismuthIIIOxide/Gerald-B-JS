const {prefix} = require('../config.json')

module.exports = async (bot, message) => {
    //message.channel.messages.fetch();
    if (message.channel.id === "851855270685835264"){
        bot.channels.get("913548215448645642").send(`from ${message.author.username} in ${message.channel.name}:\n${message}`)
        if((message.embeds).length == 1){
            bot.channels.get("913548215448645642").send({embed: message.embeds[0]})
        }
    }
    else if (message.channel.id === "857328353204109373" || message.channel.id === "902365791297613825"){
        bot.channels.get("913549169262755871").send(`from ${message.author.username} in ${message.channel.name}:\n${message}`)
        if((message.embeds).length == 1){
            bot.channels.get("913549169262755871").send({embed: message.embeds[0]})
        }
    }
    else if (message.channel.id === "902176155954712616" || message.channel.id === "907826744235532308"){
        bot.channels.get("913551344512675890").send(`from ${message.author.username} in ${message.channel.name}:\n${message}`)
        if((message.embeds).length == 1){
            bot.channels.get("913551344512675890").send({embed: message.embeds[0]})
        }
    }
    // console.log(message)
	// console.log((message.embeds).length)
    /*
    2ps channel: 913548215448645642
    nsfw channel: 913549169262755871
    flacko : 913551344512675890
    */
}
