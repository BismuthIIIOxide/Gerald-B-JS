const {prefix} = require('../config.json')

module.exports = async (bot, message) => {
    message.channel.messages.fetch();
    if (message.channel.id === "702972566419144875" || message.channel.id === "907826744235532308" || message.channel.id === "902176155954712616"){
        bot.channels.cache.get("910265854510366741").send(message)
        print(message)
    }
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith(prefix)) return;
    
    let dig = /\d+/; if(dig.test(message.content)) message.channel.send(`Going to floor ${dig.exec(message.content)}!`);
    


}

