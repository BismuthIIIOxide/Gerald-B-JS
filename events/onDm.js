const {prefix} = require('../config.json')

module.exports = async (bot, message) => {
    //message.channel.messages.fetch();
    if (message.channel.type === 'dm') {
        if (process.env.ISMAIN === "FALSE"){
            bot.channels.get("941450258045603890").send(`from ${message.author.username}:\n${message}`)
        }else{
            bot.channels.get("929566855968981052").send(`from ${message.author.username}:\n${message}`)
            if((message.embeds).length == 1){
                bot.channels.get("929566855968981052").send({embed: message.embeds[0]})
            }
        }
    }

	// console.log((message.embeds).length)
    /*
    2ps channel: 851855270685835264
    nsfw channel: 913549169262755871
    flacko : 913551344512675890
    */
}
