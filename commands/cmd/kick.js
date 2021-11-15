module.exports = {
    commands: ['kick'],
    expectedArgs: '<person>',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        message.channel.send(`\\*joins back\\* ez kid.,.........`)
    },
}
  