const {prefix} = require('../config.json')

module.exports = async (bot, message) => {
    message.channel.messages.fetch();
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith(prefix)) return;
    
    let dig = /\d+/; if(dig.test(message.content)) message.channel.send(`Going to floor ${dig.exec(message.content)}!`);
    


}

