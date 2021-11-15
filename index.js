import Discord from 'discord.js';
import path from 'path';
import fs from 'fs';

const client = new Discord.Client();
const config = require('./config.json');
client.on('ready', () => {
    console.log("################################\nSUCK MY NUTS!\n################################");

    const BF = 'command-base.js'
    const commandBase = require(`./commands/${BF}`)
    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for(const file of files){
            const stat = fs.lstatSync(path.join(__dirname, dir, file))

            if(stat.isDirectory()){
                readCommands(path.join(dir, file))
            } else if (file !== BF) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }
    readCommands("commands")

})
client.on("message", async (message) => {
    require("./events/message")(client, message);
});
client.login(config.token)

// command(client, "ping", (message) => {
//     message.channel.send("yo");
// })