module.exports = {
    commands: 'eval', 
    expectedArgs: '',
    minArgs: 0,
    maxArgs: null, 
    callback: (message, arguments, text) =>{
        const res = eval(arguments.join(" "))
        console.log(arguments.join(" "))
        console.log("################################################################")
        console.log(res)
        message.channel.send(res)
        
    }

}