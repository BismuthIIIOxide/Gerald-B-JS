const {prefix} = require('../config.json')

module.exports = async (bot, message) => {
    //message.channel.messages.fetch();
    if (message.channel.id === "702972566419144875" || message.channel.id === "907826744235532308" || message.channel.id === "902176155954712616" || message.channel.id === "851855270685835264" ){
        bot.channels.get("910265854510366741").send(`from ${message.author.username} in ${message.channel.name}:\n${message}`)
        // console.log(message)
    }

}
