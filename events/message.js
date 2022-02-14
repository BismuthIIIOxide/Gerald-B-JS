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
    } 
    else if(message.guild.id === "427546996178419712" || message.guild.id === "753255421887905834") {
        var msg = message.toLowerCase()
        if (msg.search(/this/i) != -1){
            bot.channels.get(message.channel.id).send("https://media.discordapp.net/attachments/925876223878508694/942822275189719070/1B0F18A8-E03C-4BB5-AD3C-7A7486BA3E9.png")
        }
        /*if (msg.toLowerCase().startsWith('g!status ')){
            const arguments = msg.split(/[ ]+/)
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
        }*/
    } 


	// console.log((message.embeds).length)
}
