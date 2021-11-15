module.exports = {
    commands: 'ban', 
    expectedArgs: '<person>',
    minArgs: 1,
    maxArgs: 1, 
    callback: (message, arguments, text) =>{
        banned = arguments[0]
        if(banned == `<@!${message.author.id}>`){message.channel.send("https://www.youtube.com/watch?v=ACCKkg9sH5M")} else{
        message.channel.send(`${banned} got fucking destroyed!!!!! wow!!!! get banned ${banned}!!!23213`)}
    }

}