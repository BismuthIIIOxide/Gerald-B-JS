module.exports = {
    commands: 'ping', 
    minArgs: 0,
    maxArgs: 0, 
    callback: (message, arguments, text) =>{
        var random = Math.floor(Math.random() * (100000000 - 1000000) + 1000000)
        message.reply(`multiplied by \`\`${random}\`\``).then((msg) => {
            msg.edit(`around \`\`${Math.floor((Math.floor(msg.createdTimestamp - message.createdTimestamp)) * random)}\`\`ms`)
            console.log(`${random}, ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}`)
        })
    }

}