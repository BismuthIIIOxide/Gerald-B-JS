const axios = require('axios');

module.exports = {
    commands: 'kms', 
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 0, 
    callback: (message, arguments, text) =>{
        message.channel.send("https://www.youtube.com/watch?v=ACCKkg9sH5M")
    }

}