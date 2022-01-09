module.exports = {
    commands: 'eval', 
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 0, 
    callback: (message, arguments, text) =>{
        const res = eval(arguments.join(" "))
        message.channel.send(res)
        console.log(res)
    }

}