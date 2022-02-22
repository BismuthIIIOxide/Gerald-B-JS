const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {
    commands: 'status',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        let req = new XMLHttpRequest()
        req.open("PATCH", "https://discord.com/api/v9/users/@me/settings", true)
        req.setRequestHeader("Authorization", process.env.TOKEN)
        req.setRequestHeader("Content-Type", "application/json")

        req.send(JSON.stringify({ custom_status: { "text": text } }))
    }
}