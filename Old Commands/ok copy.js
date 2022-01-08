const axios = require('axios')

module.exports = {
    commands: 'test2',
    expectedArgs: '<user1> <user2>',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
        axios.get('https://nekobot.xyz/api/imagegen', {
            params: {
                type: 'ship',
                user1: arguments[0],
                user2: arguments[1]
            }
        })
            .then(function (response) {
                // handle success
                message.channel.send(response['data']['message'])
                console.log(response['data'])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

}