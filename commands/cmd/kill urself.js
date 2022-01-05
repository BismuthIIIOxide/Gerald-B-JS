module.exports = {
    commands: 'kms', 
    expectedArgs: '',
    minArgs: 1,
    maxArgs: 1, 
    callback: (message, arguments, text) =>{
        message.channel.send("https://www.youtube.com/watch?v=ACCKkg9sH5M")
    }

}