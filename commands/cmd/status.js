module.exports = {
    commands: 'status', 
    expectedArgs: '',
    minArgs: 0,
    maxArgs: null, 
    callback: (message, arguments, text) => {
        var S = arguments[0]
        arguments.shift()
        var T = arguments.join(" ")
        message.channel.send("wasdf!")
        
    }

}