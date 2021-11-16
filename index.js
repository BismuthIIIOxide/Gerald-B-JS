const Discord = require('discord.js-selfbot-v11');
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

client.login("NDA5NDYyODQzODU1ODYzODE4.YQoRTg.tY-Q_2_5lNJTVgJnOyZkN3yHfss")

// command(client, "ping", (message) => {
//     message.channel.send("yo");
// })
