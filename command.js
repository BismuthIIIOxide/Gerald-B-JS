const prefix = "g!"
module.exports = (client, aliases, callback) => {
    if (typeof aliases === 'string') {
        aliases = [aliases];
    }; 
    
    client.on("message", message => {

        const { content } = message;

        aliases.forEach((alias) => {
            const command = `${prefix}${alias}`

            if (content.startsWith(`${command} `) || content === command) {
                console.log(`oh shit, ${command}`)
                callback(message)

            }

        })
    })
}