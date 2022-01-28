const {prefix} = require('../config.json')
const { MessageEmbed } = require('discord.js');

module.exports = async (bot, message) => {
    //message.channel.messages.fetch();
    if (message.channel.id === "851855270685835264" || message.channel.id === "702972566419144875"){
        bot.channels.get("914703147014963230").send(`from ${message.author.username} in ${message.channel.name}:\n${message}`)
        if((message.embeds).length == 1){
		const msg = message.embeds[0]
		const embed1 = new MessageEmbed()
			.setColor("#0099ff")
			.setTitle(msg.title)
			.setURL(msg.url)
			.setDescription(msg.description)
		console.log(embed1)
            bot.channels.get("914703147014963230").send({embed: [embed1]})
        }
    }

	// console.log((message.embeds).length)
    /*
    2ps channel: 851855270685835264
    nsfw channel: 913549169262755871
    flacko : 913551344512675890
    */
}
