module.exports = {
    commands: 'ban', 
    expectedArgs: '',
    minArgs: 1,
    maxArgs: null, 
    callback: (message, arguments, text) =>{
        var user = arguments[0]
        arguments.shift()
        var res = arguments.join(" ")
        
        message.channel.send(`banned ${user} permanently for reason ${res}`)
    }

}