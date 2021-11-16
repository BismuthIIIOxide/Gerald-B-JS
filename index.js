const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');

const client = new Discord.Client();
// const config = require('./config.json');
client.on('ready', () => {
    console.log("################################\nSUCK MY NUTS!\n################################");

})

client.on("message", async (message) => {
    require("./events/message")(client, message);
});

client.login(process.env.TOKEN)

// command(client, "ping", (message) => {
//     message.channel.send("yo");
// })
 // 907826744235532308
 // 902176155954712616