module.exports = {
    commands: ['gondol', 'gondal'], 
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 0, 
    callback: (message, arguments, text) =>{
        message.channel.send(`https://tenor.com/view/gondal-caterpillar-bug-insect-crawling-gif-16267445`)
    }

}