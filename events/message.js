const {prefix} = require('../config.json')
const { MessageEmbed } = require('discord.js-selfbot-v11');

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
        console.log(message)
    } else if(false == true) {
        var msg = message
        if (msg.toLowerCase().startsWith('g!status ')){
            const arguments = content.split(/[ ]+/)
            arguments.shift()
            var stat = arguments[0].toUpperCase()
            //PLAYING: WATCHING: LISTENING: STREAMING:
            var arr = ["PLAYING", "WATCHING", "LISTENING", "STREAMING"]
            if (arr.indexOf(stat) !== -1){
                arguments.shift()

                bot.user.setPresence({
                    status: "online",
                    game: {
                        text: arguments.join(" "),
                        type: arr[arr.indexOf(stat)]
                    }
                })
            }
        }
    }


	// console.log((message.embeds).length)
}
