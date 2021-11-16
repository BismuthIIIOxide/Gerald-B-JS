const { Channel } = require("discord.js")

module.exports = {
    commands: ['8ball','ateball'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        if(text.length>0){
            message.channel.send(`
            I'm sure you'll figure out the answer to "${text}". But I want to know you mean by "ateball".
            `)
        } else{
            message.channel.send('What do you mean by "ateball"?')
        }
    },
    permissions: '',
    requiredRoles: [],
  }
  