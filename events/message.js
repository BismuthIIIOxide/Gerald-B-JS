const {prefix} = require('../config.json')

module.exports = async (bot, message) => {
    //message.channel.messages.fetch();
    if (message.channel.id === "851855270685835264" || message.channel.id === "702972566419144875"){
        bot.channels.get("914703147014963230").send(`from ${message.author.username} in ${message.channel.name}:\n${message}`)
        if((message.embeds).length == 1){
		var embed1 = message.embeds[0]
            bot.channels.get("914703147014963230").send({embed:embed1})
        }
    }

	// console.log((message.embeds).length)
    /*
    2ps channel: 851855270685835264
    nsfw channel: 913549169262755871
    flacko : 913551344512675890
    */
}
